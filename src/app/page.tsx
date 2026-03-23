'use client';

import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import dynamic from 'next/dynamic';

const MissingFoundation = dynamic(() => import('@/components/home/MissingFoundation'), { ssr: true });
const WhatWeAreBuilding = dynamic(() => import('@/components/home/WhatWeAreBuilding'), { ssr: true });
const ResearchSection = dynamic(() => import('@/components/home/ResearchSection'), { ssr: true });
const Testimonials = dynamic(() => import('@/components/home/Testimonials'), { ssr: true });
const ContactSection = dynamic(() => import('@/components/home/ContactSection'), { ssr: true });
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Globe, Sparkles, Target, Shield, Activity, Network, Leaf } from 'lucide-react';
import {
    NilaiBotanicalTexture,
    HeritageDesignAccent,
    MistyOverlay,
    NilaiSectionHeader
} from '@/components/ui/HeritageUI';

export default function HomePage() {
    return (
        <div className="flex flex-col w-full overflow-hidden bg-bg min-h-screen linen-texture">
            {/* Main Sections */}
            <HeroSection />
            <MissingFoundation />

            {/* Institutional Vision */}
            <section className="py-20 px-8 text-center bg-accent relative overflow-hidden">
                <MistyOverlay className="opacity-20" />
                <div className="max-w-5xl mx-auto space-y-12 relative z-10">
                    <blockquote className="text-3xl md:text-5xl font-canela font-bold text-white italic leading-tight">
                        “We are building healthcare institutions designed not only for today’s patients, but for tomorrow’s civilization.”
                    </blockquote>
                </div>
            </section>

            <WhatWeAreBuilding />

            {/* THE GLOBAL SHIFT */}
            <section className="py-16 md:py-24 px-8 md:px-16 bg-bg relative overflow-hidden">
                <NilaiBotanicalTexture className="absolute top-10 left-10 opacity-[0.04]" />
                <NilaiBotanicalTexture className="absolute bottom-10 right-10 opacity-[0.04] rotate-180" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <NilaiSectionHeader
                        title="THE GLOBAL SHIFT"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-20">
                        {[
                            { title: "Modern healthcare has mastered intervention.", icon: <Activity className="w-6 h-6" /> },
                            { title: "The future belongs to prevention.", icon: <Target className="w-6 h-6" /> },
                            { title: "Integration replaces fragmentation.", icon: <Network className="w-6 h-6" /> },
                            { title: "Sustainability becomes non-negotiable.", icon: <Leaf className="w-6 h-6" /> }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex flex-col items-center text-center space-y-6 group bg-accent hover:bg-accent/90 transition-colors duration-500 rounded-2xl p-8 shadow-sm"
                            >
                                <div className="w-16 h-16 rounded-full flex items-center justify-center text-bg group-hover:text-section transition-all duration-500">
                                    {React.cloneElement(item.icon as React.ReactElement<any>, { strokeWidth: 1.5 })}
                                </div>
                                <p className="text-xl font-source-serif italic text-bg/90 group-hover:text-section leading-relaxed px-4 transition-colors duration-500">
                                    {item.title}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Testimonials />

            <ResearchSection />

            {/* CTA Join movement */}
            <section className="py-20 px-8 bg-accent text-center relative overflow-hidden">
                <div className="max-w-4xl mx-auto space-y-12 relative z-10">
                    <div className="flex flex-col items-center">
                        <h2 className="text-4xl md:text-6xl font-canela font-bold uppercase tracking-widest text-white">Join the Movement</h2>
                    </div>
                    <p className="text-xl md:text-2xl font-source-serif italic text-white/90 max-w-2xl mx-auto">
                        "The future of health is conscious. Zencura is building toward it."
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8 pt-8">
                        <Link href="/join" className="px-12 py-4 border border-white text-white hover:bg-white hover:text-accent rounded-full text-[13px] font-bold uppercase tracking-[0.3em] transition-all duration-300 w-full sm:w-auto text-center">
                            Join the Movement
                        </Link>
                        <Link href="/contact" className="px-12 py-4 border border-white text-white hover:bg-white hover:text-accent rounded-full text-[13px] font-bold uppercase tracking-[0.3em] transition-all duration-300 w-full sm:w-auto text-center">
                            Collaborate With Us
                        </Link>
                    </div>
                </div>
            </section>

            {/* Philosophical Outro */}
            <section className="py-16 md:py-32 px-8 text-center bg-bg relative overflow-hidden">
                <HeritageDesignAccent className="absolute top-1/3 left-10 w-64 h-64 rotate-12 opacity-[0.03]" />
                <HeritageDesignAccent className="absolute bottom-1/4 right-0 w-80 h-80 -rotate-12 opacity-[0.03]" />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5 }}
                    className="max-w-4xl mx-auto space-y-16 relative z-10"
                >
                    <p className="text-3xl md:text-5xl lg:text-6xl font-canela font-bold text-accent italic leading-[1.3] px-4">
                        "The future of medicine is not reactive, <br /> but a conscious choice of living."
                    </p>

                    <div className="pt-8">
                        <span className="text-[11px] font-bold uppercase tracking-[0.6em] text-accent/50">Mastered in Science • Sustained by Life</span>
                    </div>
                </motion.div>
            </section>

            <ContactSection />

            {/* Global Linen Texture Style Injection */}
            <style jsx global>{`
              .linen-texture {
                position: relative;
              }
              .linen-texture::after {
                content: "";
                position: absolute;
                inset: 0;
                background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.04'/%3E%3C/svg%3E");
                pointer-events: none;
                z-index: 50;
                opacity: 0.4;
              }
            `}</style>
        </div>
    );
}
