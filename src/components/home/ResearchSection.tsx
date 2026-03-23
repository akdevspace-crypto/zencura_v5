'use client';

import React from 'react';
import { BookOpen, Beaker, Globe, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import {
    NilaiBotanicalTexture,
    OrnateBorder,
    NilaiSectionHeader,
    HeritageCardFrame,
    HeritageSectionBorder
} from '@/components/ui/HeritageUI';

const researchAreas = [
    {
        title: "Epigenetic Heritage",
        category: "Biological Science",
        desc: "Investigating the intersection of classical Ayurvedic protocols and modern gene expression markers."
    },
    {
        title: "Human Bio-Resilience",
        category: "Functional Medicine",
        desc: "Analyzing the impact of ancestral lifestyle rhythms on modern metabolic stress responses."
    },
    {
        title: "Conscious Infrastructure",
        category: "Civilization Health",
        desc: "Designing built environments that promote natural healing and biological synchronization."
    }
];

export default function ResearchSection() {
    return (
        <section className="py-16 md:py-24 px-8 md:px-16 bg-bg relative overflow-hidden">
            {/* Nilai Botanical Corners */}
            <NilaiBotanicalTexture className="absolute top-10 left-10 opacity-[0.04]" />
            <NilaiBotanicalTexture className="absolute bottom-10 right-10 opacity-[0.04] rotate-180" />

            <div className="max-w-7xl mx-auto relative z-10">
                <NilaiSectionHeader
                    title="Research Pillars"
                    subtitle="Evidence of Harmony"
                />

                <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {researchAreas.map((area, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className="group transition-all duration-700 relative"
                        >
                            <HeritageCardFrame
                                className="h-full rounded-[20px]"
                                motifInset="-inset-[5rem]"
                                motifScale="scale-[1.5]"
                                motifOpacity="opacity-[0.15]"
                                motifBrightness="bg-white"
                                overlay={true}
                            >
                                <div className="h-full bg-accent flex flex-col p-12 md:p-16 lg:p-20 hover:bg-accent/90 transition-all duration-700 rounded-[20px] group relative overflow-hidden z-10">
                                    <div className="flex justify-between items-start relative z-10 w-full mb-10">
                                        <div className="w-14 h-14 rounded-full flex items-center justify-center !text-bg group-hover:!text-bg transition-all duration-700">
                                            <Beaker className="w-5 h-5" strokeWidth={1} />
                                        </div>
                                        <span className="text-[9px] font-bold uppercase !text-bg opacity-70 group-hover:opacity-100 transition-colors pt-2">
                                            Active Study
                                        </span>
                                    </div>

                                    <div className="flex flex-col space-y-4 relative z-10 w-full flex-grow text-left">
                                        <h3 className="text-2xl md:text-3xl font-canela font-bold !text-bg group-hover:!text-bg leading-tight transition-colors duration-700">{area.title}</h3>
                                        <span className="text-[10px] font-bold uppercase !text-bg opacity-60 group-hover:opacity-100 font-manrope transition-colors duration-700">{area.category}</span>
                                        <p className="text-base md:text-lg font-manrope !text-bg opacity-80 group-hover:opacity-100 leading-relaxed font-light transition-colors duration-700">
                                            {area.desc}
                                        </p>
                                    </div>

                                    <div className="pt-8 mt-10 flex items-center space-x-3 text-[10px] font-bold uppercase !text-bg opacity-80 group-hover:opacity-100 transition-colors relative z-10 w-full border-t border-bg/30 group-hover:border-bg/70 justify-start">
                                        <BookOpen className="w-4 h-4 opacity-80" />
                                        <span>View Publications</span>
                                    </div>
                                </div>
                            </HeritageCardFrame>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-24 flex flex-col items-center">
                    <p className="text-xl md:text-2xl font-source-serif italic text-brand/50 text-center max-w-2xl leading-relaxed mb-12">
                        "Validating timeless medical wisdom through the lens of modern empirical science."
                    </p>
                </div>
            </div>
        </section>
    );
}
