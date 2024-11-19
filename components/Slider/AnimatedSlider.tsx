'use client';

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const images = [
    "/cover.webp",
    "/cover1.webp",
    "/cover.webp",
];

const sliderVariants = {
    enter: (direction: number) => ({
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
    }),
    center: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.8 },
    },
    exit: (direction: number) => ({
        x: direction > 0 ? -1000 : 1000,
        opacity: 0,
        transition: { duration: 0.8 },
    }),
};

export default function DraggableSlider() {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const paginate = (newDirection: number) => {
        setDirection(newDirection);
        setIndex((prevIndex) => {
            const newIndex = prevIndex + newDirection;
            if (newIndex < 0) return images.length - 1;
            if (newIndex >= images.length) return 0;
            return newIndex;
        });
    };

    // Otomatik kaydırma (autoslide) için effect
    useEffect(() => {
        const interval = setInterval(() => {
            paginate(1); // Her 3 saniyede bir sonraki slide'a geç
        }, 4000);

        return () => clearInterval(interval); // Temizlik işlemi
    }, []);

    return (
        <div
            style={{
                position: "relative",
                width: "900px",
                height: "450px",
                margin: "0 auto",
                overflow: "hidden",
                borderRadius: "10px",
            }}
        >
            <AnimatePresence initial={false} custom={direction}>
                <motion.div
                    key={index}
                    custom={direction}
                    variants={sliderVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    onDragEnd={(e, { offset, velocity }) => {
                        const swipe = Math.abs(offset.x) > 50 ? (offset.x > 0 ? -1 : 1) : 0;
                        if (swipe !== 0) {
                            paginate(swipe);
                        }
                    }}
                    style={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                    }}
                >
                    <Image
                        src={images[index]}
                        alt={`Slider image ${index + 1}`}
                        layout="fill"
                        objectFit="cover"
                    />
                </motion.div>
            </AnimatePresence>

            {/* Pagination Dots */}
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "absolute",
                    bottom: "10px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    gap: "8px",
                }}
            >
                {images.map((_, i) => (
                    <div
                        key={i}
                        onClick={() => setIndex(i)}
                        style={{
                            width: i === index ? "40px" : "80px",
                            height: "10px",
                            backgroundColor: i === index ? "white" : "gray",
                            cursor: "pointer",
                            transition: "width 0.3s ease, background-color 0.3s ease",
                        }}
                    />
                ))}
            </div>
        </div>
    );
}
