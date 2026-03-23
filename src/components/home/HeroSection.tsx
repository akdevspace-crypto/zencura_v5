'use client';

import React, { useState, useEffect } from 'react';
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { NilaiBotanicalTexture, MistyOverlay, InstitutionalStamp, HeritageDesignAccent, FlowerDecoration } from '@/components/ui/HeritageUI';


export default function HeroSection() {
    const containerRef = React.useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const backgroundImages = [
        '/herosection.png',
        '/herosection2.png',
        '/herosection3.png',
        '/herosection4.png'
    ];

    const { scrollY } = useScroll();

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 4000);

        const unsubscribe = scrollY.on("change", (latest) => {
            if (latest > 10) setIsVisible(true);
        });

        return () => {
            clearTimeout(timer);
            unsubscribe();
        };
    }, [scrollY]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
        }, 5000);

        return () => clearInterval(intervalId);
    }, [backgroundImages.length]);

    // Animation variants for 2s stagger
    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 2,
                ease: [0.25, 0.1, 0.25, 1] as const, // Smooth ease out
            }
        }
    };

    const decorVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 0.04, // decor target
            transition: { duration: 2, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] as const }
        }
    };

    const stampVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 0.15, // stamp target
            transition: { duration: 2, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] as const }
        }
    };

    return (
        <section
            id="hero"
            ref={containerRef}
            className="relative min-h-screen flex flex-col items-center justify-center text-center px-8 overflow-hidden bg-bg py-20"
        >
            <MistyOverlay className="opacity-40" />

            {/* Background Video (Always Visible) */}
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 z-10 opacity-100"

                />
                <div className="w-full h-full relative">
                    <AnimatePresence mode="popLayout">
                        {backgroundImages.map((src, index) => (
                            index === currentImageIndex && (
                                <motion.div
                                    key={src}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 1.5, ease: "easeInOut" }}
                                    className="absolute inset-0"
                                >
                                    <Image
                                        src={src}
                                        alt={`Zencura Hero Background ${index + 1}`}
                                        fill
                                        sizes="100vw"
                                        className="object-cover opacity-60 contrast-125 grayscale-[0.2]"
                                        priority={index === 0}
                                    />
                                </motion.div>
                            )
                        ))}
                    </AnimatePresence>
                </div>
            </div>

            {/* Hero text container - only animate in after user scrolls once */}
            <motion.div
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={containerVariants}
                className="relative z-20 max-w-5xl space-y-8 flex flex-col items-center text-bg"
            >

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-canela font-bold text-section leading-tight uppercase">
                    ZENCURA - Future of <br className="hidden md:block" /> Preventive Health
                </h1>


                {/* Removed CTA buttons here */}
            </motion.div>

            {/* Floating Institutional Stamps */}
            <motion.div
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={stampVariants}
                className="absolute top-1/2 left-0 -translate-x-[40%] -translate-y-1/2 hidden xl:block rotate-12 pointer-events-none"
            >
                <InstitutionalStamp text="ZEN • CURA • ARCHIVE • MASTER" className="scale-110" />
            </motion.div>
            <motion.div
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={stampVariants}
                className="absolute top-1/2 right-0 translate-x-[40%] -translate-y-1/2 hidden xl:block -rotate-12 pointer-events-none"
            >
                <InstitutionalStamp text="ZEN • CURA • ARCHIVE • MASTER" className="scale-110" />
            </motion.div>

            {/* Nilai Botanical Corners & Heritage Accents */}
            <motion.div
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={decorVariants}
            >
                <HeritageDesignAccent className="absolute top-20 right-20 w-80 h-80 rotate-45" />
                <HeritageDesignAccent className="absolute bottom-20 left-20 w-80 h-80 -rotate-45" />

                <NilaiBotanicalTexture className="absolute top-10 left-10" />
                <NilaiBotanicalTexture className="absolute bottom-10 right-10 rotate-180" />

                {/* Flower Decorations */}
                <FlowerDecoration className="absolute top-40 right-20 w-96 h-96 -rotate-12" />
                <FlowerDecoration className="absolute bottom-40 left-20 w-96 h-96 rotate-12" />
            </motion.div>

        </section>
    );
}
