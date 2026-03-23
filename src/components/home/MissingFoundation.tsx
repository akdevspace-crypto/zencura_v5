'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { NilaiBotanicalTexture, InstitutionalStamp, HeritageCardFrame, HeritageDesignAccent, HeritageCircleFrame } from '@/components/ui/HeritageUI';

import Image from 'next/image';

const CircularFrame = () => (
    <div className="w-full max-w-[650px] aspect-square mx-auto rounded-full overflow-hidden">
        <div className="relative w-full h-full bg-bg/20">
            {/* Main Image with Heritage Filters */}
            <Image
                src="/herosection5.png"
                alt="Zencura Missing Foundation Image"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-center scale-[1.06] opacity-95 sepia-[0.3] contrast-[1.05] brightness-[1.1] grayscale-[0.2]"
            />

            {/* Texture Overlay for Realism */}
            <div className="absolute inset-0 bg-[url('/testimonial/paper-texture.png')] opacity-40 mix-blend-multiply pointer-events-none" />

            {/* Gradient Depth Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-brand/30 via-transparent to-white/10 mix-blend-soft-light" />
        </div>
    </div>
);

export default function MissingFoundation() {
    const points = [
        "Humanity is extending its lifespan across continents and cultures. Yet vitality, resilience, and clarity are quietly eroding.",
        "Healthcare systems have evolved into specialties and silos. But the human body has never ceased to function as one integrated whole.",
        "What if the next evolution of medicine is not greater reaction but deeper prevention?",
        "What if health is not restored in hospitals, but sustained in daily living?"
    ];

    return (
        <section className="py-24 md:py-32 px-8 md:px-16 bg-bg overflow-hidden relative">
            <div className="absolute right-0 top-0 translate-x-1/3 -translate-y-1/3 opacity-[0.02] pointer-events-none z-10">
                <InstitutionalStamp className="scale-[3]" />
            </div>



            {/* Nilai Botanical Corners & Heritage Accents */}
            <HeritageDesignAccent className="absolute top-20 right-20 w-80 h-80 opacity-[0.03] rotate-45 z-10" />
            <HeritageDesignAccent className="absolute bottom-20 left-20 w-80 h-80 opacity-[0.03] -rotate-45 z-10" />

            <NilaiBotanicalTexture className="absolute top-10 left-10 opacity-[0.04] z-10" />
            <NilaiBotanicalTexture className="absolute bottom-10 right-10 opacity-[0.04] rotate-180 z-10" />

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

                {/* Left Column: Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2 }}
                    className="flex flex-col space-y-12"
                >
                    <div className="space-y-4">
                        <span className="text-[11px] font-bold uppercase tracking-[0.5em] text-accent block">The Core Dilemma</span>
                        <div className="flex flex-col items-start w-full">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-canela font-bold text-brand leading-tight uppercase tracking-widest whitespace-nowrap">
                                THE MISSING FOUNDATION
                            </h2>
                            {/* HeritageTitleUnderline removed */}
                        </div>
                        <p className="text-xl md:text-2xl font-source-serif italic text-brand/70 leading-relaxed max-w-xl font-light pt-4">
                            Modern medicine has mastered the science of fighting disease. <br />
                            Yet prevention remains the missing foundation.
                        </p>
                    </div>

                    <ul className="space-y-10">
                        {points.map((point, i) => (
                            <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.6 }}
                                className="flex items-start gap-8 group"
                            >
                                <div className="mt-1.5 flex-shrink-0">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-brand/40 group-hover:text-brand/70 transition-colors">
                                        <path d="M12,2 Q13,12 22,12 Q13,12 12,22 Q11,12 2,12 Q11,12 12,2 Z" fill="currentColor" opacity="0.1" />
                                        <path d="M12,4 Q13,12 20,12 Q13,12 12,20 Q11,12 4,12 Q11,12 12,4" stroke="currentColor" strokeWidth="0.5" />
                                        <circle cx="12" cy="12" r="1" fill="currentColor" />
                                    </svg>
                                </div>
                                <p className="text-lg md:text-xl font-source-serif italic text-brand/60 group-hover:text-brand transition-colors leading-relaxed font-light">
                                    {point}
                                </p>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5 }}
                    className="relative flex justify-center lg:justify-end w-full lg:translate-x-12"
                >
                    <CircularFrame />
                </motion.div>
            </div>


            {/* NilaiDivider removed */}
        </section>
    );
}
