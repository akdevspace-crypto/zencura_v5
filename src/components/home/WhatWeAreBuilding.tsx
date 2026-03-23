'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { OrnateBorder, NilaiBotanicalTexture, NilaiSectionHeader, HeritageCardFrame, HeritageDesignAccent } from '@/components/ui/HeritageUI';

const cardContent = [
    {
        title: "Integrated Medical Institutions",
        desc: "Bringing together modern medicine and classical holistic sciences within a unified clinical framework.",
        icon: <div className="relative w-24 h-24 mb-2">
            <Image src="/vintage_mortar.png" alt="Mortar and Pestle" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-contain mix-blend-multiply opacity-80" />
        </div>
    },
    {
        title: "Preventive Health Networks",
        desc: "Embedding longevity, metabolic health, and resilience into everyday community life.",
        icon: <div className="relative w-24 h-24 mb-2">
            <Image src="/vintage_stethoscope.png" alt="Stethoscope" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-contain mix-blend-multiply opacity-80" />
        </div>
    },
    {
        title: "Holistic Science Integration",
        desc: "Institutionalizing Ayurveda, Yoga, Naturopathy, and Siddha within evidence-informed practice.",
        icon: <div className="relative w-24 h-24 mb-2">
            <Image src="/vintage_botanical.png" alt="Botanical Herb" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-contain mix-blend-multiply opacity-80" />
        </div>
    },
    {
        title: "Sustainable Health Innovation",
        desc: "Developing wellness solutions that respect both biological systems and environmental balance.",
        icon: <div className="relative w-24 h-24 mb-2">
            <Image src="/vintage_bottle.png" alt="Apothecary Bottle" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-contain mix-blend-multiply opacity-80" />
        </div>
    }
];

export default function WhatWeAreBuilding() {
    return (
        <section className="py-16 md:py-24 px-8 md:px-16 bg-bg relative overflow-hidden">
            {/* Nilai Botanical Corners & Heritage Accents */}
            <HeritageDesignAccent className="absolute top-20 right-20 w-80 h-80 opacity-[0.03] rotate-45" />
            <HeritageDesignAccent className="absolute bottom-20 left-20 w-80 h-80 opacity-[0.03] -rotate-45" />

            <NilaiBotanicalTexture className="absolute top-10 left-10 opacity-[0.04]" />
            <NilaiBotanicalTexture className="absolute bottom-10 right-10 opacity-[0.04] rotate-180" />

            <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10">
                <NilaiSectionHeader
                    title="What We Are Building"
                    subtitle="Our Mission Architecture"
                />

                <p className="text-xl font-source-serif italic text-brand/60 max-w-2xl text-center mb-20 leading-relaxed font-light">
                    "Zencura is building a multi-layered healthcare ecosystem composed of integrated pillars."
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl">
                    {cardContent.map((card, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: i * 0.1 }}
                        >
                            <HeritageCardFrame className="h-full rounded-[20px]" motifInset="-inset-[4.5rem]" motifScale="scale-[1.2]" overlay={true} motifBrightness="bg-white opacity-80">
                                <div className="h-full bg-accent hover:bg-accent/90 transition-all duration-700 group p-6 md:p-8 lg:p-10 flex flex-col text-left rounded-[20px] shadow-sm relative overflow-hidden z-10">
                                    {/* Top Section - Iconic */}
                                    <div className="mb-6 flex flex-col items-start">
                                        <div className="w-8 h-[1px] bg-white/30 mb-4 group-hover:w-12 group-hover:bg-white/70 transition-all duration-700" />
                                        <div className="scale-90 group-hover:scale-100 transition-all duration-700 text-white relative z-20">
                                            {/* We apply brightness filter to make the image pure white since it is an image, not an SVG */}
                                            <div className="transition-all duration-700 brightness-0 invert opacity-80 group-hover:opacity-100">
                                                {card.icon}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content Section */}
                                    <h3 className="text-xl font-canela font-bold !text-white group-hover:!text-white transition-colors duration-700 leading-tight mb-4 min-h-[3rem] flex items-center justify-start">
                                        {card.title}
                                    </h3>

                                    <div className="w-6 h-px bg-white/30 group-hover:bg-white/70 transition-colors duration-700 mb-6" />

                                    <p className="text-[12px] leading-relaxed font-manrope !text-white opacity-80 group-hover:opacity-100 transition-colors duration-700 font-light flex-grow">
                                        {card.desc}
                                    </p>
                                </div>
                            </HeritageCardFrame>
                        </motion.div>
                    ))}
                </div>

                {/* HeritageDoubleBorder removed */}
            </div>
        </section>
    );
}
