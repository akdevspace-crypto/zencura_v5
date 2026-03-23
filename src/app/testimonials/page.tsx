'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
    NilaiBotanicalTexture,
    MistyOverlay,
    InstitutionalStamp,
    HeritageTitleUnderline,
    FlowerDecoration,
    HeritageDesignAccent,
    NilaiSectionHeader
} from '@/components/ui/HeritageUI';

const testimonialsData = [
    {
        name: "Chinthana Gopinath",
        location: "Bangalore",
        content: `I first consulted with Dr. Renu Nath 6 odd years ago when our freagle Sasha was diagnosed with an enlarged heart. Since then, she's been our go-to doctor for our large brood of dogs. She's cured them of various issues, where no cure exists in conventional veterinary medicine, such as moist dermatitis, hygroma, hematoma, trigeminal neuralgia & so on.\n\nDr. Ashima has worked with us with an open, compassionate heart on several rescues. Treating tick fever & parvo in conjunction with modern medicine to help the immune system heal the body & mitigate the side effects of long-term drug therapy.\n\nThe humans of our family have now started to reap the benefit of the skill & dedication this mother-daughter duo possess. They treat us, dogs & humans, as whole & complete entities. Not just a bundle of symptoms. Our emotional state, feelings, thoughts, past experiences, trauma et al is discussed extensively before treatment. And it works, beautifully.`,
        role: "Founder Trustee of Freagles of India",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2" // Placeholder, user will replace
    },
    // Add more if needed
];

export default function TestimonialsPage() {
    return (
        <div className="flex flex-col w-full bg-bg min-h-screen">
            <section className="pt-32 pb-20 px-8 md:px-16 relative overflow-hidden">
                <MistyOverlay className="opacity-10" />
                <HeritageDesignAccent className="absolute top-20 left-20 w-80 h-80 opacity-[0.03] -rotate-12" />
                <NilaiBotanicalTexture className="absolute top-10 right-10 opacity-[0.04]" />

                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col space-y-6"
                    >
                        <NilaiSectionHeader title="Reviews & Testimonials" className="!mb-0" />
                    </motion.div>
                </div>
            </section>

            <section className="pb-32 px-8 md:px-16">
                <div className="max-w-7xl mx-auto flex flex-col space-y-32">
                    {testimonialsData.map((t, i) => (
                        <div key={i} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                            {/* Text Content */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="flex flex-col space-y-8"
                            >
                                <div className="space-y-1">
                                    <h2 className="text-3xl md:text-4xl font-olivera text-brand uppercase">{t.name}</h2>
                                    <p className="text-lg text-brand/40 uppercase tracking-widest">{t.location}</p>
                                </div>

                                <div className="space-y-6">
                                    {t.content.split('\n\n').map((paragraph, pi) => (
                                        <p key={pi} className="text-lg md:text-xl font-manrope text-brand/70 leading-relaxed font-light">
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>

                                <div className="pt-4">
                                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand/40 italic">
                                        {t.role}
                                    </p>
                                </div>
                                <NilaiBotanicalTexture className="w-12 h-12 opacity-[0.05] mt-8" />
                            </motion.div>

                            {/* Image Content */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1 }}
                                className="relative aspect-[4/5] rounded-[24px] rounded-br-[160px] overflow-hidden shadow-2xl group"
                            >
                                <div className="absolute inset-0 bg-accent/10 group-hover:bg-transparent transition-colors duration-700 z-10" />
                                <Image
                                    src={t.image}
                                    alt={t.name}
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <FlowerDecoration className="absolute bottom-10 left-10 w-32 h-32 opacity-[0.1] text-bg z-20" />
                            </motion.div>
                        </div>
                    ))}
                </div>
            </section>

            <InstitutionalStamp className="fixed bottom-10 right-10 opacity-[0.03] scale-150 pointer-events-none" />
        </div >
    );
}
