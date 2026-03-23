'use client';

import React from 'react';
import { twMerge } from 'tailwind-merge';

export const HeritageDivider = ({ className = "" }: { className?: string }) => (
    <div className={twMerge("w-full h-12 relative flex items-center justify-center select-none pointer-events-none opacity-20", className)}>
        <img src="/title(4).png" alt="" className="h-full object-contain" />
    </div>
);

export const HeritageIcons = {
    Lotus: () => (
        <svg viewBox="0 0 100 100" className="w-12 h-12 text-brand/60">
            <path d="M50,10 C60,40 90,40 50,90 C10,40 40,40 50,10 Z" fill="none" stroke="currentColor" strokeWidth="1.2" />
            <path d="M50,30 C55,45 70,45 50,70 C30,45 45,45 50,30 Z" fill="none" stroke="currentColor" strokeWidth="0.8" />
            <path d="M50,15 L50,85 M15,50 L85,50" stroke="currentColor" strokeWidth="0.2" opacity="0.3" />
            <circle cx="50" cy="90" r="1.5" fill="currentColor" />
        </svg>
    ),
    Chakra: () => (
        <svg viewBox="0 0 100 100" className="w-12 h-12 text-brand/60">
            <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="1" />
            <circle cx="50" cy="50" r="5" fill="currentColor" />
            {[...Array(8)].map((_, i) => (
                <line
                    key={i}
                    x1="50" y1="50"
                    x2={50 + 35 * Math.cos((i * 45 * Math.PI) / 180)}
                    y2={50 + 35 * Math.sin((i * 45 * Math.PI) / 180)}
                    stroke="currentColor"
                    strokeWidth="0.6"
                />
            ))}
        </svg>
    ),
    TempleMandala: () => (
        <svg viewBox="0 0 100 100" className="w-12 h-12 text-brand/60">
            <rect x="25" y="25" width="50" height="50" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(45 50 50)" />
            <rect x="30" y="30" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="0.8" />
            <circle cx="50" cy="50" r="10" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="2" fill="currentColor" />
        </svg>
    ),
    KolamGeometry: () => (
        <svg viewBox="0 0 100 100" className="w-12 h-12 text-brand/60">
            <path d="M50,10 L90,50 L50,90 L10,50 Z" fill="none" stroke="currentColor" strokeWidth="1" />
            <circle cx="50" cy="50" r="3" fill="currentColor" />
            <circle cx="50" cy="10" r="2" fill="currentColor" />
            <circle cx="90" cy="50" r="2" fill="currentColor" />
            <circle cx="50" cy="90" r="2" fill="currentColor" />
            <circle cx="10" cy="50" r="2" fill="currentColor" />
        </svg>
    )
};

export const VintageSeal = ({ className = "" }: { className?: string }) => {
    return (
        <div className={`relative w-24 h-24 flex items-center justify-center ${className}`}>
            <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full text-brand/30 animate-[spin_80s_linear_infinite]">
                <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="0.4" strokeDasharray="3 3" fill="none" />
                <path d="M50 5 L55 45 L95 50 L55 55 L50 95 L45 55 L5 50 L45 45 Z" fill="currentColor" opacity="0.15" />
                <circle cx="50" cy="50" r="12" fill="none" stroke="currentColor" strokeWidth="0.3" />
            </svg>
        </div>
    );
};

export const CornerFlourish = ({ className = "" }: { className?: string }) => (
    <div className={twMerge("pointer-events-none select-none overflow-hidden", className)}>
        <img src="/title(2).png" alt="Decorative Flourish" className="w-full h-full object-contain mix-blend-multiply opacity-60" />
    </div>
);

export const BotanicalOrnament = ({ className = "", opacity = 0.05 }: { className?: string, opacity?: number }) => (
    <div className={twMerge("pointer-events-none select-none overflow-hidden", className)} style={{ opacity }}>
        <img
            src="/vintage_botanical.png"
            alt="Botanical Ornament"
            className="w-full h-full object-contain mix-blend-multiply grayscale contrast-[1.1] brightness-90"
        />
    </div>
);

export const VerticalFiligree = ({ className = "" }: { className?: string }) => (
    <div className={twMerge("pointer-events-none select-none flex justify-center", className)}>
        <img src="/title(3).png" alt="Vertical Filigree" className="w-full h-full object-contain mix-blend-multiply opacity-30 rotate-90" />
    </div>
);

export const HeaderFlourish = ({ className = "" }: { className?: string }) => (
    <div className={twMerge("pointer-events-none select-none flex justify-center", className)}>
        <img src="/title(0).png" alt="Header Flourish" className="w-full h-full object-contain mix-blend-multiply opacity-40" />
    </div>
);

export const ElegantDivider = ({ className = "" }: { className?: string }) => (
    <div className={twMerge("pointer-events-none select-none flex justify-center", className)}>
        <img src="/title(4).png" alt="Elegant Divider" className="w-full h-full object-contain opacity-[0.15]" />
    </div>
);

export const NilaiDivider = ({ className = "" }: { className?: string }) => (
    <div className={twMerge("w-full h-16 relative flex items-center justify-center select-none pointer-events-none opacity-[0.15]", className)}>
        <img src="/title(4).png" alt="" className="h-full object-contain rotate-180" />
    </div>
);

export const HeritageBackground = () => (
    <div className="fixed inset-0 pointer-events-none select-none z-[-1] overflow-hidden">
        <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
                backgroundImage: "url('/kolam.png')",
                backgroundSize: '300px 300px',
                backgroundRepeat: 'repeat',
            }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg via-transparent to-bg opacity-40" />
    </div>
);

export const NilaiBotanicalTexture = ({ className = "", style = {} }: { className?: string, style?: React.CSSProperties }) => {
    return (
        <div className={twMerge("w-64 h-64 pointer-events-none select-none", className)} style={style}>
            <svg viewBox="0 0 100 100" className="w-full h-full text-accent opacity-[0.08]">
                <rect x="10" y="10" width="80" height="80" fill="none" stroke="currentColor" strokeWidth="0.2" />
                <path d="M10,10 L90,90 M90,10 L10,90" stroke="currentColor" strokeWidth="0.1" />
                <circle cx="50" cy="50" r="5" fill="none" stroke="currentColor" strokeWidth="0.2" />
            </svg>
        </div>
    );
};

export const FlowerDecoration = ({ className = "", opacity = 0.05 }: { className?: string, opacity?: number }) => (
    <div className={twMerge("pointer-events-none select-none overflow-hidden", className)}>
        <img
            src="/flower.png"
            alt="Flower Decoration"
            className="w-full h-full object-contain mix-blend-multiply opacity-100 grayscale contrast-[1.1] brightness-90"
            style={{ opacity }}
        />
    </div>
);

export const CardCrest = ({ className = "" }: { className?: string }) => (
    <div className={twMerge("pointer-events-none select-none flex justify-center", className)}>
        <img src="/title(0).png" alt="Card Crest" className="w-full h-full object-contain mix-blend-multiply opacity-40" />
    </div>
);

export const ClassicalFiligree = HeritageDivider;
export const LeafPattern = BotanicalOrnament;
