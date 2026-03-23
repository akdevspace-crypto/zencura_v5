'use client';

import React from 'react';
import { MapPin, Building2, Sprout, Shield, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { NilaiBotanicalTexture, OrnateBorder, MistyOverlay, InstitutionalStamp, NilaiSectionHeader, HeritageCardFrame, HeritageDesignAccent, HeritageTitleUnderline, HeritageSectionBorder, HeritageDoubleBorder } from "@/components/ui/HeritageUI";

const locations = [
    { name: "Zencura Hospitals", city: "Coimbatore", type: "Integrated Medical Institution", status: "Operational" },
    { name: "Community Clinics", city: "Bangalore", type: "Preventive Health Network", status: "Operational" },
    { name: "Rural Health Centers", city: "Nilgiris", type: "Rural Health Center", status: "Pilot" },
    { name: "Upcoming Locations", city: "Global", type: "Expansion", status: "Upcoming" }
];

export default function InstitutionsPage() {
    return (
        <div className="flex flex-col w-full bg-bg min-h-screen">
            {/* Hero Section */}
            <section className="pt-40 pb-32 px-8 md:px-16 relative overflow-hidden text-center md:text-left">
                <MistyOverlay className="opacity-10" />

                {/* Nilai Botanical Corners */}
                <NilaiBotanicalTexture className="absolute top-10 right-10 opacity-[0.04]" />
                <NilaiBotanicalTexture className="absolute bottom-10 left-10 opacity-[0.04] rotate-180" />

                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col space-y-6"
                    >
                        <NilaiSectionHeader title="Built for Longevity" subtitle="Global Infrastructure" className="!mb-0" />
                        <p className="text-3xl md:text-4xl font-source-serif italic text-brand/70 leading-relaxed font-light text-center mt-8">
                            "A distributed network of sanctuary and science, architecting the preventive future of our civilization."
                        </p>

                        <div className="absolute top-1/2 right-1/2 translate-x-3/4 -translate-y-1/2 opacity-5 pointer-events-none hidden lg:block">
                            <InstitutionalStamp text="ZEN • CURA • NETWORK • GLOBAL" className="scale-[2.5]" />
                        </div>
                    </motion.div>
                </div>
            </section>

            <HeritageDoubleBorder />

            <section id="locations" className="py-24 md:py-32 px-8 md:px-16 bg-bg relative overflow-hidden">
                {/* Nilai Botanical Corners */}
                <NilaiBotanicalTexture className="absolute top-10 left-10 opacity-[0.04]" />
                <NilaiBotanicalTexture className="absolute bottom-10 right-10 opacity-[0.04] rotate-180" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <NilaiSectionHeader
                        title="Global Network"
                        subtitle="Our Institutions"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
                        {locations.map((loc, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: i * 0.1 }}
                                className="group transition-all duration-700 relative overflow-hidden"
                            >
                                <HeritageCardFrame
                                    className="h-full rounded-[20px] overflow-hidden"
                                    motifInset="-inset-[4.5rem]"
                                    motifScale="scale-[1.2]"
                                    overlay={true}
                                    motifBrightness="bg-white opacity-80"
                                >
                                    <div className="h-full bg-accent hover:bg-accent/90 transition-all duration-700 group p-6 md:p-8 lg:p-10 flex flex-col items-center text-center rounded-[20px] shadow-sm relative overflow-hidden z-10">
                                        {/* Top Section - Visual / Icon */}
                                        <div className="mb-6 flex flex-col items-center w-full">
                                            <div className="flex justify-between items-center w-full mb-4">
                                                <div className="w-8 h-[1px] bg-white/30 group-hover:w-12 group-hover:bg-white/70 transition-all duration-700" />
                                                <div className="bg-white/10 px-2 py-1 text-[8px] font-bold uppercase tracking-[0.2em] text-white rounded-full">
                                                    {loc.status}
                                                </div>
                                            </div>
                                            <div className="scale-90 group-hover:scale-100 transition-all duration-700 text-white relative z-20">
                                                <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center">
                                                    <Building2 className="w-6 h-6" strokeWidth={1} />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Middle Section - Detail */}
                                        <h3 className="text-xl font-canela font-bold !text-white group-hover:!text-white leading-tight mb-2 min-h-[3rem] flex items-center justify-center">
                                            {loc.name}
                                        </h3>

                                        <div className="flex items-center space-x-1.5 text-white/80 mb-4">
                                            <MapPin className="w-3 h-3" />
                                            <span className="text-[10px] font-bold uppercase tracking-[0.1em]">{loc.city}</span>
                                        </div>

                                        <div className="w-6 h-px bg-white/30 group-hover:bg-white/70 transition-colors duration-700 mb-6" />

                                        {/* Bottom Section - Action */}
                                        <div className="w-full pt-4 mt-auto border-t border-white/20 flex items-center justify-between text-[9px] font-bold uppercase tracking-[0.3em] text-white/80 group-hover:text-white transition-all">
                                            <span className="opacity-80">{loc.type}</span>
                                            <Sprout className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity" />
                                        </div>
                                    </div>
                                </HeritageCardFrame>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section >

            <HeritageDoubleBorder />

            {/* Scaling Vision Section */}
            <section className="py-40 px-8 md:px-16 bg-bg relative overflow-hidden">
                {/* Nilai Botanical Corners */}
                <NilaiBotanicalTexture className="absolute top-10 right-10 opacity-[0.04]" />
                <NilaiBotanicalTexture className="absolute bottom-10 left-10 opacity-[0.04] rotate-180" />

                <div className="max-w-5xl mx-auto flex flex-col items-center text-center space-y-16 relative z-10">
                    <NilaiSectionHeader
                        title="Scaling the Vision"
                    />
                    <p className="text-2xl md:text-3xl font-source-serif italic text-brand/60 leading-relaxed font-light">
                        "We are aggressively identifying heritage hubs globally to deploy the Zencura standard. Our goal is 100+ institutions by 2030."
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-6xl w-full pt-12 mx-auto">
                        {[
                            { title: "Sovereign Security", icon: Shield, desc: "Building secure and robust healthcare frontiers leveraging timeless health protocols." },
                            { title: "Civilization Health", icon: Sparkles, desc: "Architecting ecosystems that elevate the baseline of human biological health." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: i * 0.1 }}
                                className="group transition-all duration-700 relative w-full"
                            >
                                <HeritageCardFrame
                                    className="h-full rounded-[20px]"
                                    motifInset="-inset-[4.5rem]"
                                    motifScale="scale-[1.2]"
                                    overlay={true}
                                    motifBrightness="bg-white opacity-80"
                                >
                                    <div className="h-full bg-accent hover:bg-accent/90 transition-all duration-700 group p-8 md:p-12 lg:p-16 flex flex-col items-start text-left rounded-[20px] shadow-sm relative overflow-hidden z-10 min-h-[400px]">
                                        <div className="mb-8 flex flex-col items-start w-full">
                                            <div className="w-8 h-[1px] bg-white/30 mb-6 group-hover:w-12 group-hover:bg-white/70 transition-all duration-700" />
                                            <div className="scale-90 group-hover:scale-100 transition-all duration-700 text-white relative z-20">
                                                <div className="w-20 h-20 rounded-full border border-white/20 flex items-center justify-center">
                                                    <item.icon className="w-8 h-8" strokeWidth={1} />
                                                </div>
                                            </div>
                                        </div>
                                        <h3 className="text-2xl lg:text-3xl font-canela font-bold !text-white group-hover:!text-white leading-tight mb-6 min-h-[3rem] flex items-center justify-start">
                                            {item.title}
                                        </h3>
                                        <div className="w-8 h-px bg-white/30 group-hover:bg-white/70 transition-colors duration-700 mb-8" />
                                        <p className="text-[14px] lg:text-[15px] leading-relaxed font-manrope !text-white opacity-80 group-hover:opacity-100 transition-colors duration-700 font-light pr-4">
                                            {item.desc}
                                        </p>
                                    </div>
                                </HeritageCardFrame>
                            </motion.div>
                        ))}
                    </div>

                    <HeritageSectionBorder />
                </div>
            </section>
        </div >
    );
}
