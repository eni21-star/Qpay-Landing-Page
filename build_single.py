import os
import re
import base64
import mimetypes

def encode_file_to_base64(filepath):
    mime_type, _ = mimetypes.guess_type(filepath)
    if mime_type is None:
        mime_type = "application/octet-stream"
    with open(filepath, "rb") as f:
        encoded = base64.b64encode(f.read()).decode("utf-8")
    return f"data:{mime_type};base64,{encoded}"

def inline_assets():
    dist_dir = "dist"
    html_path = os.path.join(dist_dir, "index.html")
    
    with open(html_path, "r", encoding="utf-8") as f:
        html = f.read()

    # Inline CSS
    def css_replacer(match):
        css_path = match.group(1)
        # handle starting slash
        if css_path.startswith('/'):
            css_path = css_path[1:]
        full_css_path = os.path.join(dist_dir, css_path)
        if os.path.exists(full_css_path):
            with open(full_css_path, "r", encoding="utf-8") as f:
                css_content = f.read()
                
                # Replace url() in CSS with base64
                def url_replacer(m):
                    url_path = m.group(1)
                    if url_path.startswith('data:') or url_path.startswith('http'):
                        return m.group(0)
                    
                    if url_path.startswith('/'):
                        asset_path = os.path.join(dist_dir, url_path[1:])
                    elif url_path.startswith('./'):
                        asset_path = os.path.join(os.path.dirname(full_css_path), url_path[2:])
                    elif url_path.startswith('../'):
                        asset_path = os.path.join(os.path.dirname(full_css_path), url_path)
                        asset_path = os.path.normpath(asset_path)
                    else:
                        asset_path = os.path.join(os.path.dirname(full_css_path), url_path)
                    
                    if os.path.exists(asset_path):
                        return f'url("{encode_file_to_base64(asset_path)}")'
                    return m.group(0)
                    
                css_content = re.sub(r'url\([\'"]?(.*?)[\'"]?\)', url_replacer, css_content)
                return f'<style>{css_content}</style>'
        return match.group(0)

    html = re.sub(r'<link[^>]*rel="stylesheet"[^>]*href="([^"]+)"[^>]*>', css_replacer, html)

    # Inline JS
    def js_replacer(match):
        js_path = match.group(1)
        if js_path.startswith('/'):
            js_path = js_path[1:]
        full_js_path = os.path.join(dist_dir, js_path)
        if os.path.exists(full_js_path):
            with open(full_js_path, "r", encoding="utf-8") as f:
                js_content = f.read()
                # we don't strictly need to inline image URLs in JS unless they are dynamically loaded
                # Vite usually replaces imported assets with their hashed URLs in the build output.
                # To be fully safe, we can search for /assets/xxxxx in the JS and replace with base64
                
                def js_asset_replacer(m):
                    asset_path = m.group(1)
                    if asset_path.startswith('/'):
                        full_asset_path = os.path.join(dist_dir, asset_path[1:])
                    else:
                        full_asset_path = os.path.join(dist_dir, asset_path)
                    if os.path.exists(full_asset_path):
                        return f'"{encode_file_to_base64(full_asset_path)}"'
                    return m.group(0)
                
                # We look for strings like "/assets/xxxxx.png"
                js_content = re.sub(r'"(/assets/[^"]+)"', js_asset_replacer, js_content)
                # Also look for things in public root like "/ChatGPT Image..."
                def js_public_replacer(m):
                    asset_path = m.group(1)
                    full_asset_path = os.path.join(dist_dir, asset_path[1:])
                    if os.path.exists(full_asset_path):
                        return f'"{encode_file_to_base64(full_asset_path)}"'
                    return m.group(0)
                js_content = re.sub(r'"(/[^/"]+\.(png|jpe?g|gif|svg|webp))"', js_public_replacer, js_content)

                return f'<script type="module">{js_content}</script>'
        return match.group(0)

    html = re.sub(r'<script[^>]*src="([^"]+)"[^>]*>.*?</script>', js_replacer, html)
    html = re.sub(r'<script[^>]*src="([^"]+)"[^>]*/>', js_replacer, html)

    # Inline images in HTML
    def img_replacer(match):
        img_path = match.group(1)
        if img_path.startswith('/'):
            img_path = img_path[1:]
        full_img_path = os.path.join(dist_dir, img_path)
        if os.path.exists(full_img_path):
            return f'src="{encode_file_to_base64(full_img_path)}"'
        return match.group(0)

    html = re.sub(r'src="([^"]+\.(png|jpe?g|gif|svg|webp))"', img_replacer, html)
    html = re.sub(r'href="([^"]+\.(png|jpe?g|gif|svg|webp|ico))"', img_replacer, html) # for favicon

    output_path = "dist/landing-page-single.html"
    with open(output_path, "w", encoding="utf-8") as f:
        f.write(html)
    print(f"Successfully created single HTML file at {output_path}")

if __name__ == "__main__":
    inline_assets()
