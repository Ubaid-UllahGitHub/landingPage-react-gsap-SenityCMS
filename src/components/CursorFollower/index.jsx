import React, { useEffect, useRef } from "react";
import "./style.css";
const CursorFollower = () => {
    const cursorRef = useRef(null);
    const pos = useRef({ x: 0, y: 0 });       // actual mouse position
    const follower = useRef({ x: 0, y: 0 });  // follower dot position

    useEffect(() => {
        const handleMouseMove = (e) => {
            pos.current = { x: e.clientX, y: e.clientY };
        };

        window.addEventListener("mousemove", handleMouseMove);

        const animate = () => {
            // move follower slightly towards the actual mouse
            follower.current.x += (pos.current.x - follower.current.x) * 0.05; // 0.1 = speed
            follower.current.y += (pos.current.y - follower.current.y) * 0.05;

            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate3d(${follower.current.x}px, ${follower.current.y}px, 0)`;
            }

            requestAnimationFrame(animate);
        };

        animate();

        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div
            ref={cursorRef}
            className="custom-cursor"

            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "25px",
                height: "25px",
                backgroundColor: "black",
                borderRadius: "50%",
                pointerEvents: "none",
                transform: "translate3d(0, 0, 0)",
                transition: "background 0.2s",
                zIndex: 9999,
            }}
        />
    );
};

export default CursorFollower;
