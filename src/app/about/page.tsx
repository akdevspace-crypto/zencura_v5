'use client';

import React from 'react';
import { Shield, Target, Sprout, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { NilaiBotanicalTexture, NilaiDivider, OrnateBorder, MistyOverlay, InstitutionalStamp, NilaiSectionHeader, HeritageCardFrame, HeritageSectionBorder, HeritageDesignAccent, HeritageTitleUnderline, HeritageCircleFrame, FlowerDecoration } from '@/components/ui/HeritageUI';



export default function AboutPage() {
    return (
        <div className="flex flex-col w-full bg-bg min-h-screen">
            {/* Hero Section */}
            <section className="pt-24 pb-20 px-8 md:px-16 relative overflow-hidden">
                <MistyOverlay className="opacity-10" />

                {/* Nilai Botanical Corners & Heritage Accents */}
                <HeritageDesignAccent className="absolute top-20 left-20 w-80 h-80 opacity-[0.03] -rotate-12" />
                <HeritageDesignAccent className="absolute bottom-20 right-20 w-80 h-80 opacity-[0.03] rotate-12" />

                <NilaiBotanicalTexture className="absolute top-10 right-10 opacity-[0.04]" />
                <NilaiBotanicalTexture className="absolute bottom-10 left-10 opacity-[0.04] rotate-180" />
                <FlowerDecoration className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-[0.015] grayscale" />

                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col space-y-6"
                    >
                        <NilaiSectionHeader title="About Zencura" subtitle="Institutional Identity" className="!mb-0" />
                        <p className="text-2xl md:text-3xl font-source-serif italic text-brand/70 leading-relaxed font-light text-center mt-8">
                            "A global health institution architecting the future of human biological potential."
                        </p>

                        <div className="absolute top-1/2 right-1/2 translate-x-3/4 -translate-y-1/2 opacity-5 pointer-events-none hidden lg:block">
                            <InstitutionalStamp className="scale-[2.5]" />
                        </div>
                        <HeritageSectionBorder />
                    </motion.div>
                </div>
            </section>

            {/* Core Ideology Section */}
            <HeritageSectionBorder />
            <section id="ideology" className="py-16 md:py-28 px-8 md:px-16 bg-bg relative overflow-hidden">
                {/* Nilai Botanical Corners */}
                <NilaiBotanicalTexture className="absolute top-10 left-10 opacity-[0.04]" />
                <NilaiBotanicalTexture className="absolute bottom-10 right-10 opacity-[0.04] rotate-180" />
                <FlowerDecoration className="absolute top-20 right-[15%] w-72 h-72 opacity-[0.02] -rotate-12" />
                <FlowerDecoration className="absolute bottom-20 left-[15%] w-72 h-72 opacity-[0.02] rotate-12" />

                <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10">
                    <NilaiSectionHeader
                        title="Core Ideology"
                        subtitle="The Foundation of Potential"
                        className="mb-20"
                    />

                    <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center">
                        <div className="flex flex-col space-y-12">
                            <p className="text-2xl md:text-3xl font-source-serif italic text-brand/70 leading-relaxed font-light">
                                "Zencura is a global health institution founded on the conviction that human biology, consciousness, and the natural world are inseparably connected."
                            </p>
                            <p className="text-lg md:text-xl font-manrope text-brand/50 leading-relaxed font-light">
                                Through the development of integrated hospitals, preventive health ecosystems, and evidence-informed wellness frameworks, we are building a healthcare model that is scientifically rigorous, deeply humane, and sustainable for generations to come.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission Section */}
            <HeritageSectionBorder />
            <section className="py-16 md:py-24 px-8 md:px-16 bg-bg">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="group relative w-full"
                    >
                        <HeritageCardFrame
                            className="h-full rounded-[20px] overflow-hidden"
                            motifInset="-inset-[4.5rem]"
                            motifScale="scale-[1.2]"
                            overlay={true}
                            motifBrightness="bg-white opacity-80"
                        >
                            <div className="h-full w-full bg-accent hover:bg-accent/90 transition-all duration-700 group p-8 md:p-12 lg:p-16 flex flex-col items-center text-center rounded-[20px] shadow-sm relative overflow-hidden z-10 min-h-[400px]">
                                {/* Top Section - Visual / Icon */}
                                <div className="mb-6 flex flex-col items-center">
                                    <div className="w-8 h-[1px] bg-white/30 mb-4 group-hover:w-12 group-hover:bg-white/70 transition-all duration-700" />
                                    <div className="scale-90 group-hover:scale-100 transition-all duration-700 text-white relative z-20">
                                        <div className="w-16 h-16 rounded-full flex items-center justify-center border border-white/20">
                                            <Target className="w-6 h-6" strokeWidth={1} />
                                        </div>
                                    </div>
                                </div>

                                {/* Middle Section - Detail */}
                                <h3 className="text-2xl font-canela font-bold !text-white group-hover:!text-white uppercase tracking-widest leading-tight mb-4 min-h-[3rem] flex items-center justify-center">
                                    Institutional Vision
                                </h3>
                                <div className="w-8 h-px bg-white/30 group-hover:bg-white/70 transition-colors duration-700 mb-6" />
                                <p className="text-[15px] leading-relaxed font-manrope !text-white opacity-80 group-hover:opacity-100 transition-colors duration-700 font-light px-2 flex-grow">
                                    To establish a global health civilization where prevention becomes culture, scientific excellence and timeless wisdom work in harmony, and humanity lives longer, stronger, and consciously aligned with nature.
                                </p>
                            </div>
                        </HeritageCardFrame>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="group relative w-full"
                    >
                        <HeritageCardFrame
                            className="h-full rounded-[20px] overflow-hidden"
                            motifInset="-inset-[4.5rem]"
                            motifScale="scale-[1.2]"
                            overlay={true}
                            motifBrightness="bg-white opacity-80"
                        >
                            <div className="h-full w-full bg-accent hover:bg-accent/90 transition-all duration-700 group p-8 md:p-12 lg:p-16 flex flex-col items-center text-center rounded-[20px] shadow-sm relative overflow-hidden z-10 min-h-[400px]">
                                {/* Top Section - Visual / Icon */}
                                <div className="mb-6 flex flex-col items-center">
                                    <div className="w-8 h-[1px] bg-white/30 mb-4 group-hover:w-12 group-hover:bg-white/70 transition-all duration-700" />
                                    <div className="scale-90 group-hover:scale-100 transition-all duration-700 text-white relative z-20">
                                        <div className="w-16 h-16 rounded-full flex items-center justify-center border border-white/20">
                                            <Shield className="w-6 h-6" strokeWidth={1} />
                                        </div>
                                    </div>
                                </div>

                                {/* Middle Section - Detail */}
                                <h3 className="text-2xl font-canela font-bold !text-white group-hover:!text-white uppercase tracking-widest leading-tight mb-4 min-h-[3rem] flex items-center justify-center">
                                    Global Mission
                                </h3>
                                <div className="w-8 h-px bg-white/30 group-hover:bg-white/70 transition-colors duration-700 mb-6" />
                                <p className="text-[15px] leading-relaxed font-manrope !text-white opacity-80 group-hover:opacity-100 transition-colors duration-700 font-light px-2 flex-grow">
                                    To build accessible, integrated healthcare institutions grounded in time-tested holistic medical sciences and strengthened by modern evidence-based practice, advancing prevention, longevity, and sustainable wellbeing.
                                </p>
                            </div>
                        </HeritageCardFrame>
                    </motion.div>
                </div>
            </section>

            <HeritageSectionBorder />
            {/* Call to Action Section */}
            <section className="py-16 md:py-24 px-8 md:px-16 bg-bg/40 relative overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="p-10 md:p-16 bg-accent text-center flex flex-col items-center space-y-12 relative overflow-hidden rounded-[16px]"
                    >
                        <NilaiBotanicalTexture className="absolute top-0 right-0 opacity-[0.1] text-bg" />
                        <FlowerDecoration className="absolute -bottom-20 -left-20 w-80 h-80 opacity-[0.08] invert brightness-0 -rotate-45" />
                        <h2 className="text-3xl md:text-5xl font-canela font-bold text-bg leading-tight relative z-10 uppercase tracking-widest">
                            Shape the Future <br /> of Healthcare
                        </h2>
                        <p className="text-xl font-manrope text-bg/60 max-w-2xl relative z-10 font-light">
                            Join us in building a civilization where health is the natural standard.
                        </p>
                        <div className="flex flex-col items-center space-y-12 relative z-10">
                            <div className="flex flex-col sm:flex-row items-center space-y-8 sm:space-y-0 sm:space-x-8">
                                <Link
                                    href="/join"
                                    className="px-14 py-6 bg-accent border border-white text-white rounded-full text-[12px] font-bold uppercase tracking-[0.4em] shadow-lg hover:bg-white hover:text-accent transition-all duration-300"
                                >
                                    Join the Movement
                                </Link>
                                <Link
                                    href="/contact"
                                    className="px-14 py-6 bg-transparent border border-white text-white rounded-full text-[12px] font-bold uppercase tracking-[0.4em] hover:bg-white/10 transition-all duration-300"
                                >
                                    Collaborate With Us
                                </Link>
                            </div>
                            {/* NilaiDivider removed */}
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
