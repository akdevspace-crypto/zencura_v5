'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Leaf, Sparkles, Shield } from 'lucide-react';
import {
    NilaiBotanicalTexture,
    NilaiDivider,
    OrnateBorder,
    HeritageCardFrame,
    HeritageDoubleFrame,
    HeritageSectionBorder,
    HeritageTitleUnderline,
    MistyOverlay,
    InstitutionalStamp,
    NilaiSectionHeader,
    HeritageDesignAccent,
    FlowerDecoration
} from '@/components/ui/HeritageUI';

export default function Join() {
    return (
        <div className="flex flex-col relative bg-bg text-brand font-manrope min-h-screen">
            {/* Header - Page Background */}
            <section className="pt-24 pb-20 px-8 md:px-16 relative overflow-hidden">
                <MistyOverlay className="opacity-10" />

                {/* Nilai Botanical Corners & Heritage Accents */}
                <HeritageDesignAccent className="absolute top-20 left-20 w-80 h-80 opacity-[0.03] -rotate-12" />
                <HeritageDesignAccent className="absolute bottom-20 right-20 w-80 h-80 opacity-[0.03] rotate-12" />

                <NilaiBotanicalTexture className="absolute top-10 right-10 opacity-[0.04]" />
                <NilaiBotanicalTexture className="absolute bottom-10 left-10 opacity-[0.04] rotate-180" />
                <FlowerDecoration className="absolute top-1/2 right-[5%] -translate-y-1/2 w-72 h-72 opacity-[0.02] rotate-12" />

                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col space-y-6"
                    >
                        <NilaiSectionHeader title="Join the Movement" subtitle="Member Admissions" className="!mb-0" />
                        <p className="text-3xl md:text-4xl font-source-serif italic text-brand/70 leading-relaxed font-light text-center mt-8">
                            "Entry into Zencura is an initiation into a higher standard of biological existence."
                        </p>

                        <div className="absolute top-1/2 right-1/2 translate-x-3/4 -translate-y-1/2 opacity-5 pointer-events-none hidden lg:block">
                            <InstitutionalStamp text="ZEN • CURA • ADMISSION • INITIATE" className="scale-[2.5]" />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Commitment Grid */}
            <section className="bg-bg py-16 md:py-24 px-8 md:px-16 relative z-10 overflow-hidden">
                {/* Nilai Botanical Corners */}
                <NilaiBotanicalTexture className="absolute top-10 left-10 opacity-[0.04]" />
                <NilaiBotanicalTexture className="absolute bottom-10 right-10 opacity-[0.04] rotate-180" />
                <FlowerDecoration className="absolute top-20 right-20 w-80 h-80 opacity-[0.015] grayscale" />
                <FlowerDecoration className="absolute bottom-20 left-20 w-80 h-80 opacity-[0.015] grayscale rotate-180" />


                <div className="max-w-7xl mx-auto relative z-10">
                    <NilaiSectionHeader
                        title="The Path Within"
                        subtitle="Membership Benefits"
                    />

                    <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
                        {[
                            { title: "Personal Heritage", desc: "Access to personalized clinical protocols rooted in your unique biology and heritage.", icon: Leaf },
                            { title: "Institutional Assets", desc: "Priority access to our global network of research hubs, clinics, and sanctuary retreats.", icon: Shield },
                            { title: "Collective Intelligence", desc: "Join an elite community of conscious individuals architecting the future of human health.", icon: Sparkles }
                        ].map((item, i) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 1 }}
                                className="group transition-all duration-700 relative"
                            >
                                <HeritageCardFrame overlay={true} motifInset="-inset-32" motifScale="scale-150">
                                    <OrnateBorder className="bg-bg/10 border-none space-y-10 hover:bg-bg/20 transition-all duration-700 shadow-sm rounded-[32px] p-12 md:p-16 lg:p-20 flex flex-col text-left h-full">
                                        <div className="flex flex-col items-start space-y-8 w-full relative z-10">
                                            <div className="w-16 h-16 rounded-full flex items-center justify-center text-brand group-hover:bg-accent group-hover:text-bg transition-all duration-700 border border-brand/10">
                                                <item.icon size={32} strokeWidth={1} />
                                            </div>
                                        </div>
                                        <h3 className="text-3xl font-canela font-bold text-brand leading-tight w-full relative z-10">{item.title}</h3>
                                        <div className="w-16 h-px bg-accent/10" />
                                        <p className="text-xl font-source-serif italic text-brand/60 leading-relaxed font-light w-full relative z-10">{item.desc}</p>
                                    </OrnateBorder>
                                </HeritageCardFrame>
                                <MistyOverlay className="opacity-5" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Application Form */}
            <section className="py-16 md:py-28 px-8 md:px-16 bg-bg relative overflow-hidden">
                {/* Nilai Botanical Corners */}
                <NilaiBotanicalTexture className="absolute top-10 left-10 opacity-[0.04]" />
                <NilaiBotanicalTexture className="absolute bottom-10 right-10 opacity-[0.04] rotate-180" />
                <FlowerDecoration className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.01] grayscale" />

                <MistyOverlay className="opacity-[0.05]" />

                <div className="max-w-4xl mx-auto flex flex-col items-center relative z-10">
                    {/* Admission Form Card */}
                    <div className="w-full">
                        <HeritageCardFrame className="h-full" motifInset="-inset-48" motifScale="scale-150" overlay={true}>
                            <OrnateBorder className="pt-16 pb-8 md:pt-24 md:pb-16 lg:pt-32 lg:pb-24 px-10 md:px-16 lg:px-20 bg-bg/5 border-none rounded-[48px] relative z-10 flex flex-col h-full">
                                <div className="text-center mb-16">
                                    <NilaiSectionHeader
                                        title="Initiate Admission"
                                        subtitle="Selective Intake"
                                        className="!items-center !text-center !mb-0"
                                    />
                                    <div className="w-24 h-px bg-accent/10 mx-auto mt-10" />
                                </div>

                                <div className="flex flex-col items-center text-center space-y-12 mb-20 px-4">
                                    <p className="text-2xl md:text-3xl font-source-serif italic text-brand/70 leading-relaxed font-light max-w-2xl">
                                        "Our admission process is selective, focusing on individuals committed to biological excellence."
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full pt-8">
                                        {[
                                            { label: "Standard", value: "Review" },
                                            { label: "Induction", value: "3-Months" },
                                            { label: "Alignment", value: "Bio-Protocol" }
                                        ].map((item, i) => (
                                            <div key={i} className="flex flex-col items-center space-y-4">
                                                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand/30">{item.label}</span>
                                                <span className="text-xl font-canela font-bold text-brand/80">{item.value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <form className="flex flex-col space-y-12 w-full">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                        <div className="flex flex-col space-y-6">
                                            <label className="text-[11px] font-bold uppercase tracking-[0.3em] text-brand/40 ml-1">Your Full Name</label>
                                            <input type="text" className="w-full bg-transparent border-b border-brand/5 py-4 focus:border-brand outline-none transition-colors font-source-serif italic text-2xl text-brand font-light" placeholder="Institutional Name" />
                                        </div>
                                        <div className="flex flex-col space-y-6">
                                            <label className="text-[11px] font-bold uppercase tracking-[0.3em] text-brand/40 ml-1">Electronic Address</label>
                                            <input type="email" className="w-full bg-transparent border-b border-brand/5 py-4 focus:border-brand outline-none transition-colors font-source-serif italic text-2xl text-brand font-light" placeholder="name@organization.com" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col space-y-6">
                                        <label className="text-[11px] font-bold uppercase tracking-[0.3em] text-brand/40 ml-1">Primary Wellness Goal</label>
                                        <input type="text" className="w-full bg-transparent border-b border-brand/10 py-4 focus:border-brand outline-none transition-colors font-source-serif italic text-2xl text-brand font-light" placeholder="Longevity, Brain Health, Vitality..." />
                                    </div>

                                    <div className="pt-12 flex flex-col items-center">
                                        <button type="button" className="px-16 py-6 border border-brand bg-accent text-bg rounded-full text-[13px] font-bold uppercase tracking-[0.3em] hover:bg-bg hover:text-brand transition-all duration-300 shadow-xl flex items-center justify-center space-x-4 group">
                                            <span>Initiate Request</span>
                                            <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                                        </button>
                                        <p className="text-center mt-12 text-[9px] font-bold uppercase tracking-[0.3em] text-brand/30 italic font-manrope">Selective Admission Policy &middot; Institutional Grade Only</p>
                                    </div>
                                </form>
                            </OrnateBorder>
                        </HeritageCardFrame>
                    </div>
                </div>
            </section>
        </div>
    );
}
