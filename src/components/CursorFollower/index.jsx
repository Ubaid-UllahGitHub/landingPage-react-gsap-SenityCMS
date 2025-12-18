import React, { useEffect, useRef } from "react";
import "./style.css";

const CursorFollower = () => {
    const cursorRef = useRef(null);
    const pos = useRef({ x: 0, y: 0 });
    const follower = useRef({ x: 0, y: 0 });
    const rafId = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            pos.current.x = e.clientX;
            pos.current.y = e.clientY;
        };

        window.addEventListener("mousemove", handleMouseMove, { passive: true });

        const animate = () => {
            follower.current.x += (pos.current.x - follower.current.x) * 0.05;
            follower.current.y += (pos.current.y - follower.current.y) * 0.05;

            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate3d(${follower.current.x}px, ${follower.current.y}px, 0)`;
            }

            rafId.current = requestAnimationFrame(animate);
        };

        rafId.current = requestAnimationFrame(animate);

        return () => {
            // ✅ STOP animation loop
            if (rafId.current) {
                cancelAnimationFrame(rafId.current);
            }

            // ✅ REMOVE listener
            window.removeEventListener("mousemove", handleMouseMove);
        };
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
