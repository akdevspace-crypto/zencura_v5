'use client';

import React from 'react';
import { Mail, Phone, MapPin, Globe, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { NilaiBotanicalTexture, NilaiDivider, OrnateBorder, MistyOverlay, InstitutionalStamp, NilaiSectionHeader, HeritageCardFrame, HeritageSectionBorder, HeritageDesignAccent, HeritageTitleUnderline } from '@/components/ui/HeritageUI';

export default function ContactPage() {
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

                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col space-y-6"
                    >
                        <NilaiSectionHeader title="Start a Conversation" subtitle="Institutional Contact" className="!mb-0" />
                        <p className="text-3xl md:text-4xl font-source-serif italic text-brand/70 leading-relaxed font-light text-center mt-8">
                            "Connect with our team to explore collaboration, institutional partnerships, or membership."
                        </p>

                        <div className="absolute top-1/2 right-1/2 translate-x-3/4 -translate-y-1/2 opacity-5 pointer-events-none hidden lg:block">
                            <InstitutionalStamp text="ZEN • CURA • CORRESPONDENCE • HUB" className="scale-[2.5]" />
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="py-16 md:py-28 px-8 md:px-16 bg-bg relative overflow-hidden">
                {/* Nilai Botanical Corners */}
                <NilaiBotanicalTexture className="absolute top-10 left-10 opacity-[0.04]" />
                <NilaiBotanicalTexture className="absolute bottom-10 right-10 opacity-[0.04] rotate-180" />

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-start relative z-10">

                    {/* Contact Details */}
                    <div className="flex flex-col space-y-20">
                        <div className="flex flex-col space-y-8">
                            <NilaiSectionHeader
                                title="Heritage Partnerships"
                                subtitle="Collaborate With Zencura"
                                className="!items-start !text-left !mb-12"
                            />
                            <p className="text-xl md:text-2xl font-source-serif italic text-brand/60 leading-relaxed max-w-lg font-light">
                                "We welcome visionaries, health professionals, and institutional partners who share our commitment to redefining the future of global health."
                            </p>
                        </div>

                        <div className="flex flex-col space-y-12">
                            {[
                                { icon: Mail, label: "Digital Correspondence", value: "hello@zencura.institute" },
                                { icon: Phone, label: "Institutional Direct", value: "+1 (555) 012-3456" },
                                { icon: MapPin, label: "Global HQ", value: "Heritage District, Coimbatore, TN" }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-start space-x-8"
                                >
                                    <div className="flex flex-col items-center">
                                        <div className="w-16 h-16 rounded-full flex items-center justify-center text-brand">
                                            <item.icon className="w-7 h-7" strokeWidth={1} />
                                        </div>
                                    </div>
                                    <div className="flex flex-col space-y-2">
                                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand/40 font-manrope">{item.label}</span>
                                        <span className="text-2xl font-canela font-bold text-brand">{item.value}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>


                    </div>

                    {/* Contact Form - Aligned with ContactSection (lg:mt-4 to align with title/subtitle on the left) */}
                    <div className="relative mt-8 lg:mt-4 lg:ml-12 lg:w-[95%]">
                        <HeritageCardFrame
                            className="h-full w-full mx-auto"
                            motifInset="-inset-y-8 md:-inset-y-12 lg:-inset-y-16 -inset-x-12 md:-inset-x-24 lg:-inset-x-40"
                            motifScale="scale-x-110 lg:scale-x-125 scale-y-[1.10]"
                            motifOpacity="opacity-[0.1]"
                            motifInsetMobile="-inset-6"
                            motifScaleMobile="scale-[1.03]"
                            overlay={true}
                        >
                            <div className="p-8 md:p-16 lg:p-20 relative z-10 flex flex-col h-full bg-brand/5 border border-brand/20 rounded-[24px]">
                                <div className="text-center mb-16 w-full border-b border-brand/30 pb-6">
                                    <h3 className="text-2xl font-canela font-bold text-brand uppercase tracking-widest">
                                        Direct Inquiry
                                    </h3>
                                </div>

                                <form className="flex flex-col space-y-12 flex-grow">
                                    <div className="flex flex-col space-y-4">
                                        <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand/40">Full Name</label>
                                        <input type="text" className="bg-transparent border-b border-brand/30 py-3 outline-none focus:border-brand transition-all font-source-serif italic text-xl text-brand font-light" placeholder="Institutional contact" />
                                    </div>
                                    <div className="flex flex-col space-y-4">
                                        <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand/40">Electronic Address</label>
                                        <input type="email" className="bg-transparent border-b border-brand/30 py-3 outline-none focus:border-brand transition-all font-source-serif italic text-xl text-brand font-light" placeholder="name@organization.com" />
                                    </div>
                                    <div className="flex flex-col space-y-4">
                                        <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand/40">Correspondence</label>
                                        <textarea className="bg-transparent border-b border-brand/30 py-3 outline-none focus:border-brand transition-all font-source-serif italic text-xl text-brand h-24 resize-none font-light" placeholder="How can we collaborate?"></textarea>
                                    </div>

                                    <button className="w-full py-6 mt-8 bg-accent text-white rounded-full border border-brand text-[12px] font-bold uppercase tracking-[0.3em] shadow-lg hover:bg-accent hover:border-accent transition-all duration-300 group flex items-center justify-center space-x-4">
                                        <span>Direct Correspondence</span>
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                                    </button>
                                </form>
                            </div>
                        </HeritageCardFrame>
                    </div>

                </div>
            </section>

            {/* Contact Discrepancy Section */}
            <section id="form" className="py-16 md:py-24 px-8 md:px-16 bg-bg relative overflow-hidden text-center">
                {/* Nilai Botanical Corners */}
                <NilaiBotanicalTexture className="absolute top-10 left-10 opacity-[0.04]" />
                <NilaiBotanicalTexture className="absolute bottom-10 right-10 opacity-[0.04] rotate-180" />

                <div className="max-w-2xl mx-auto flex flex-col items-center">
                    <p className="text-xl font-source-serif italic text-brand/30 leading-relaxed font-light mb-12">
                        "The Zencura Institute does not acknowledge unsolicited clinical proposals. All institutional collaborations are subject to civilization-health validation."
                    </p>

                </div>
            </section>
        </div>
    );
}
