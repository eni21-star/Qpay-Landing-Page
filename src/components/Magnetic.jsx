import React, { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion';

/**
 * Magnetic Component
 * 
 * Wraps a child element and adds a magnetic pull effect towards the mouse cursor.
 * Optimized with useMotionValue and useSpring to avoid React state re-renders 
 * during high-frequency mouse movement.
 */
export default function Magnetic({ children }) {
    const ref = useRef(null);

    // Use motion values for better performance
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Configure spring physics for a premium feel
    const springConfig = { 
        stiffness: 150, 
        damping: 15, 
        mass: 0.1 
    };
    
    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current.getBoundingClientRect();
        
        // Calculate distance from center
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        
        const distanceX = clientX - centerX;
        const distanceY = clientY - centerY;
        
        // Apply magnetic pull (35% of the distance)
        x.set(distanceX * 0.35);
        y.set(distanceY * 0.35);
    }

    const handleMouseLeave = () => {
        // Reset to original position
        x.set(0);
        y.set(0);
    }

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ 
                x: springX, 
                y: springY, 
                display: "inline-block",
                position: "relative"
            }}
        >
            {children}
        </motion.div>
    )
}
