'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

export const OrnateBorder = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
    return (
        <div className={twMerge("relative p-10 rounded-[20px] border-2 border-brand/5 bg-bg/50 overflow-hidden", className)}>
            <div className="absolute inset-2 border border-brand/10 pointer-events-none" />
            <div className="absolute inset-4 border border-brand/5 pointer-events-none" />
            {children}
        </div>
    );
};

export const HeritageTitleUnderline = ({ className = "", inverted = false }: { className?: string, inverted?: boolean }) => (
    <div className={twMerge(
        "w-full h-14 max-w-[900px] relative overflow-visible z-10 flex items-center justify-center",
        className
    )}>
        <Image
            src="/title(4).png"
            alt="Heritage Underline"
            fill
            sizes="(max-width: 900px) 100vw, 900px"
            className={twMerge(
                "object-contain scale-y-[0.7] scale-x-[1.2] opacity-[0.15]",
                inverted && "invert brightness-0"
            )}
            priority
        />
    </div>
);

export const HeritageCardFrame = ({
    children,
    className = "",
    motifInset = "-inset-4",
    motifScale = "scale-100",
    motifOpacity = "opacity-100",
    motifBrightness = "bg-brand",
    overlay = false,
    motifInsetMobile,
    motifScaleMobile
}: {
    children: React.ReactNode,
    className?: string,
    motifInset?: string,
    motifScale?: string,
    motifOpacity?: string,
    motifBrightness?: string,
    overlay?: boolean,
    motifInsetMobile?: string,
    motifScaleMobile?: string
}) => {
    return (
        <div className={twMerge("relative group transition-all duration-700 z-10", className)}>
            {/* Desktop Frame */}
            <div className={twMerge("absolute pointer-events-none transition-all duration-1000 z-20 hidden md:block", motifInset, motifScale, motifOpacity)}>
                <div
                    className={twMerge("w-full h-full", motifBrightness)}
                    style={{
                        WebkitMaskImage: 'url(/frame2.png)',
                        maskImage: 'url(/frame2.png)',
                        WebkitMaskSize: '100% 100%',
                        maskSize: '100% 100%',
                        WebkitMaskPosition: 'center',
                        maskPosition: 'center',
                        WebkitMaskRepeat: 'no-repeat',
                        maskRepeat: 'no-repeat'
                    }}
                />
            </div>
            {/* Mobile Frame */}
            <div className={twMerge("absolute pointer-events-none transition-all duration-1000 z-0 md:hidden", motifInsetMobile || "-inset-4", motifScaleMobile || "scale-[1.02]", motifOpacity)}>
                <div
                    className={twMerge("w-full h-full", motifBrightness)}
                    style={{
                        WebkitMaskImage: 'url(/frame2.png)',
                        maskImage: 'url(/frame2.png)',
                        WebkitMaskSize: '100% 100%',
                        maskSize: '100% 100%',
                        WebkitMaskPosition: 'center',
                        maskPosition: 'center',
                        WebkitMaskRepeat: 'no-repeat',
                        maskRepeat: 'no-repeat'
                    }}
                />
            </div>
            {overlay && <div className="absolute inset-0 bg-bg/5 rounded-[20px] pointer-events-none z-0" />}
            <div className="relative z-10 h-full w-full">
                {children}
            </div>
        </div>
    );
};

export const HeritageCircleFrame = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
    return (
        <div className={twMerge("relative aspect-square w-full max-w-[650px] mx-auto", className)}>

            {/* ROTATING GROUP (one transform origin) */}
            <motion.div
                className="absolute inset-0 z-30 pointer-events-none flex items-center justify-center"
                style={{ transformOrigin: "50% 50%" }}
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            >
                {/* Optical offset INSIDE rotation */}
                <div
                    className="w-full h-full flex items-center justify-center"
                    style={{
                        transform: "translate(10px, -10px)", // 🔥 micro-tune: 6–10px range
                        willChange: "transform",
                    }}
                >
                    <Image
                        src="/circleframe.png"
                        alt="Decorative Circle Frame"
                        fill
                        className="object-contain grayscale contrast-110 brightness-90 opacity-70"
                        draggable={false}
                    />
                </div>
            </motion.div>

            {/* Masked Content */}
            <svg
                viewBox="0 0 1000 1000"
                className="absolute inset-0 w-full h-full z-20"
                preserveAspectRatio="xMidYMid meet"
            >
                <defs>
                    {/* 🔥 This circle must match the real hole of your frame */}
                    <clipPath id="frameHole">
                        <circle cx="500" cy="500" r="385" />
                    </clipPath>
                </defs>

                <foreignObject
                    x="0"
                    y="0"
                    width="1000"
                    height="1000"
                    clipPath="url(#frameHole)"
                >
                    <div className="w-full h-full rounded-full overflow-hidden">
                        {children}
                    </div>
                </foreignObject>
            </svg>

            {/* Inner ring for realism */}
            <div className="absolute inset-[10%] rounded-full border border-brand/20 z-40 pointer-events-none" />
        </div>
    );
};

export const HeritageSectionBorder = ({
    className = "",
    variant = 1,
}: {
    className?: string;
    variant?: 1 | 2 | 3;
}) => {
    // title(1).png doesn't exist, use title(2).png instead
    const actualVariant = variant === 1 ? 2 : variant;
    const src = `/title(${actualVariant}).png`;
    return (
        <div className={twMerge("w-full h-20 relative overflow-visible flex items-center justify-center", className)}>
            <div className="absolute w-[600px] h-full opacity-10">
                <Image
                    src={src}
                    alt={`Heritage Section Border ${actualVariant}`}
                    fill
                    sizes="(max-width: 600px) 100vw, 600px"
                    className="object-contain"
                />
            </div>
        </div>
    );
};

export const HeritageDoubleFrame = ({
    children,
    className = "",
}: {
    children: React.ReactNode,
    className?: string,
}) => {
    return (
        <div className={twMerge("relative group transition-all duration-700 rounded-[32px] z-10", className)}>
            <div className="absolute inset-0 pointer-events-none transition-all duration-1000 z-0 scale-105 opacity-100">
                <div
                    className="w-full h-full bg-brand"
                    style={{
                        WebkitMaskImage: 'url(/frame2.png)',
                        maskImage: 'url(/frame2.png)',
                        WebkitMaskSize: '100% 100%',
                        maskSize: '100% 100%',
                        WebkitMaskPosition: 'center',
                        maskPosition: 'center',
                        WebkitMaskRepeat: 'no-repeat',
                        maskRepeat: 'no-repeat'
                    }}
                />
            </div>
            <div className="relative z-10 h-full w-full">
                {children}
            </div>
        </div>
    );
};

export const HeritageDoubleBorder = ({ className = "" }: { className?: string }) => {
    return (
        <div className={twMerge("absolute -inset-4 border border-brand/20 pointer-events-none rounded-[28px] z-0", className)}>
            <div className="absolute inset-2 border border-brand/10 rounded-[20px]" />
        </div>
    );
};
