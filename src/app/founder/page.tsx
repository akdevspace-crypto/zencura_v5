'use client';

import React from 'react';
import { PenTool, ShieldCheck, Heart, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { NilaiBotanicalTexture, NilaiDivider, OrnateBorder, MistyOverlay, InstitutionalStamp, NilaiSectionHeader, HeritageCardFrame, HeritageDesignAccent, HeritageSectionBorder, HeritageTitleUnderline, FlowerDecoration } from '@/components/ui/HeritageUI';

export default function FounderPage() {
    return (
        <div className="flex flex-col w-full bg-bg min-h-screen">
            {/* Hero Section */}
            <section className="pt-24 pb-20 px-8 md:px-16 relative overflow-hidden">
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
                        <NilaiSectionHeader title="A Commitment to Redefining Healthcare" subtitle="Founder's Perspective" className="!mb-0" />
                        <p className="text-2xl md:text-3xl font-source-serif italic text-brand/70 leading-relaxed font-light text-center mt-8">
                            "A Founder’s Perspective on Prevention, Integration, and Civilization Health"
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Founder's Message Section */}
            <section id="message" className="py-16 md:py-24 px-8 md:px-16 bg-bg relative overflow-hidden">
                {/* Nilai Botanical Corners */}
                <NilaiBotanicalTexture className="absolute top-10 right-10 opacity-[0.04]" />
                <NilaiBotanicalTexture className="absolute bottom-10 left-10 opacity-[0.04] rotate-180" />
                <FlowerDecoration className="absolute top-1/2 left-20 -translate-y-1/2 w-80 h-80 opacity-[0.02] rotate-45" />
                <FlowerDecoration className="absolute top-1/2 right-20 -translate-y-1/2 w-80 h-80 opacity-[0.02] -rotate-12" />

                <div className="max-w-5xl mx-auto relative z-10">
                    <HeritageCardFrame
                        motifInset="-inset-y-12 md:-inset-y-16 lg:-inset-y-24 -inset-x-12 md:-inset-x-24 lg:-inset-x-48"
                        motifScale="scale-x-110 lg:scale-x-125 scale-y-[1.10]"
                        motifOpacity="opacity-[0.1]"
                        motifInsetMobile="-inset-6"
                        motifScaleMobile="scale-[1.05]"
                        overlay={true}
                    >
                        <div className="px-6 py-12 md:p-16 lg:p-24 relative z-10 flex flex-col h-full bg-brand/5 border-none rounded-[24px]">
                            {/* Header at Top */}
                            <div className="flex flex-col items-center relative mb-16 px-4 md:px-0 w-full text-center pt-24">
                                <NilaiSectionHeader
                                    title="Founder's Message"
                                    className="!mb-12"
                                />
                                <div className="w-24 h-px bg-brand/10 mx-auto" />

                                {/* Image Placeholder */}
                                <div className="w-40 h-48 md:absolute right-0 top-12 bg-bg mx-auto md:mx-0 rounded-[12px] border border-brand/10 flex items-center justify-center overflow-hidden shadow-inner hidden md:flex relative">
                                    <Image
                                        src="/founder_portrait.png"
                                        alt="Dr. Shivnesh S, Founder of Zencura"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 160px"
                                        priority
                                    />
                                </div>
                            </div>

                            {/* Message Content */}
                            <div className="editorial-container space-y-10 text-xl md:text-2xl font-source-serif text-brand/70 leading-relaxed font-light text-center">
                                <p>
                                    Healthcare today largely intervenes after illness appears. Yet true health begins long before disease.
                                </p>
                                <p>
                                    At Zencura, we are guided by a simple but profound conviction that the human body, mind, and environment are not isolated systems, but deeply interconnected forces shaping human vitality.
                                </p>
                                <p>
                                    When this balance is disrupted, disease emerges. When harmony is restored, resilience and vitality return.
                                </p>
                                <p>
                                    Our vision is not merely to treat patients, but to reimagine the very architecture of healthcare. We are building integrated institutions, preventive ecosystems, and evidence-informed wellness frameworks that unite scientific rigor, compassionate care, and long-term sustainability.
                                </p>
                                <p>
                                    Zencura is not simply a healthcare provider. It is a commitment to advancing a healthier civilization—one where prevention becomes culture, integration becomes standard, and wellbeing becomes a lifelong pursuit. This is the future we are working toward.
                                </p>
                            </div>

                            {/* Founder Info at Bottom */}
                            <div className="pt-20 flex flex-col items-center space-y-6 text-center">
                                <div className="w-24 h-px bg-brand/10 mx-auto mb-6" />
                                <div className="flex flex-col items-center space-y-4">
                                    <div className="w-16 h-16 rounded-full flex items-center justify-center text-brand/80">
                                        <PenTool className="w-6 h-6" strokeWidth={1} />
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <span className="text-3xl font-source-serif italic text-brand">Dr. Shivnesh S</span>
                                        <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-brand/40">Founder, Zencura</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </HeritageCardFrame>
                </div>
            </section>

            {/* Long-Term Commitment Section */}
            <HeritageSectionBorder />
            <section className="py-16 md:py-24 px-8 md:px-16 bg-accent text-bg relative overflow-hidden">
                <FlowerDecoration className="absolute -top-20 right-0 w-[500px] h-[500px] opacity-[0.03] invert brightness-0 rotate-12" />
                <FlowerDecoration className="absolute -bottom-20 left-0 w-[500px] h-[500px] opacity-[0.03] invert brightness-0 -rotate-12" />
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center justify-between gap-24 relative z-10">
                    <div className="flex flex-col space-y-10 max-w-xl">
                        <NilaiSectionHeader
                            title="The Long-Term Commitment"
                            subtitle="A Multi-Decade Vision"
                            className="!items-start !text-left !mb-8"
                            inverted={true}
                        />
                        <p className="text-2xl md:text-3xl font-source-serif italic text-bg leading-relaxed font-light">
                            "Zencura is not built for quarterly performance. It is built for generational impact."
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-6xl w-full">
                        {[
                            {
                                icon: ShieldCheck,
                                title: "Institutional Legacy",
                                desc: "Our commitment extends beyond services. It is toward shaping institutions that endure, adapt, and elevate public health standards globally."
                            },
                            {
                                icon: Heart,
                                title: "Civilization Health",
                                desc: "The future of health will not be reactive. It will be conscious. We are architecting a civilization where human biology, consciousness, and nature work in harmony."
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.8 }}
                                className="flex flex-col group w-full"
                            >
                                <HeritageCardFrame
                                    className="h-full rounded-[20px] overflow-hidden"
                                    motifInset="-inset-[5.5rem]"
                                    motifScale="scale-[1.3]"
                                    motifInsetMobile="-inset-8"
                                    motifScaleMobile="scale-[1.05]"
                                    overlay={true}
                                    motifBrightness="bg-white opacity-80"
                                >
                                    <div className="h-full w-full bg-accent hover:bg-accent/90 transition-all duration-700 group p-6 md:p-8 lg:p-10 flex flex-col items-center text-center rounded-[20px] shadow-sm relative overflow-hidden z-10">
                                        {/* Top Section - Visual / Icon */}
                                        <div className="mb-6 flex flex-col items-center">
                                            <div className="w-8 h-[1px] bg-white/30 mb-4 group-hover:w-12 group-hover:bg-white/70 transition-all duration-700" />
                                            <div className="scale-90 group-hover:scale-100 transition-all duration-700 text-white relative z-20">
                                                <div className="w-16 h-16 rounded-full flex items-center justify-center border border-white/20">
                                                    <item.icon className="w-6 h-6" strokeWidth={1} />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Middle Section - Detail */}
                                        <h3 className="text-xl font-canela font-bold !text-white group-hover:!text-white uppercase tracking-widest leading-tight mb-4 min-h-[3rem] flex items-center justify-center">
                                            {item.title}
                                        </h3>
                                        <div className="w-6 h-px bg-white/30 group-hover:bg-white/70 transition-colors duration-700 mb-6" />
                                        <p className="text-[12px] leading-relaxed font-manrope !text-white opacity-80 group-hover:opacity-100 transition-colors duration-700 font-light px-2 flex-grow max-w-[320px]">
                                            {item.desc}
                                        </p>
                                    </div>
                                </HeritageCardFrame>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <HeritageSectionBorder />
            {/* Action CTA */}
            <section className="py-24 md:py-32 px-8 md:px-16 bg-bg/40 text-center relative overflow-hidden">
                {/* Nilai Botanical Corners */}
                <NilaiBotanicalTexture className="absolute top-10 left-10 opacity-[0.04]" />
                <NilaiBotanicalTexture className="absolute bottom-10 right-10 opacity-[0.04] rotate-180" />

                <div className="max-w-4xl mx-auto flex flex-col items-center space-y-16 relative z-10">
                    <NilaiSectionHeader
                        title="Collaborate on the Future"
                    />
                    <p className="text-2xl md:text-3xl font-source-serif italic text-brand/60 max-w-2xl font-light">
                        "Join Dr. Shivnesh S and the Zencura team in redefining what it means to live a healthy, conscious life."
                    </p>
                    <Link
                        href="/contact"
                        className="px-16 py-6 bg-accent text-bg rounded-full text-[14px] font-bold uppercase tracking-[0.4em] hover:bg-accent/90 transition-all shadow-xl"
                    >
                        Start a Conversation
                    </Link>
                    {/* NilaiDivider removed */}
                </div>
            </section>
        </div>
    );
}
