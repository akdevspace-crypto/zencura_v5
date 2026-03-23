'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { HeritageCardFrame, OrnateBorder, MistyOverlay, NilaiSectionHeader } from '@/components/ui/HeritageUI';

gsap.registerPlugin(ScrollTrigger);

export default function WhyZencura() {
    const sectionRef = useRef<HTMLElement>(null);
    const pinRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);

    useGSAP(() => {
        if (!sectionRef.current || !pinRef.current || !contentRef.current || !imageRef.current) return;

        // Ensure initial state is pushed down/faded out for the entrance
        gsap.set(contentRef.current, { y: 100, opacity: 0 });
        gsap.set(imageRef.current, { scale: 1.1, opacity: 0 });

        // Smooth time-based Entrance Animation
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 60%', // Trigger when the top of the section is 60% down the viewport
                toggleActions: 'play none none reverse', // Play on enter, reverse on scroll back up
            }
        });

        // Animate IN (Entrance)
        tl.to(imageRef.current, {
            opacity: 0.5, scale: 1, ease: 'power3.out', duration: 1.8
        }, 0)
            .to(contentRef.current, {
                y: 0, opacity: 1, ease: 'power3.out', duration: 1.2
            }, 0.3);

    }, []);

    return (
        <section
            id="why"
            ref={sectionRef}
            className="relative bg-bg"
        >
            {/* Pinned Viewport */}
            <div ref={pinRef} className="relative min-h-[115vh] overflow-hidden flex flex-col">
                <MistyOverlay className="opacity-40 z-20 pointer-events-none" />

                {/* IMAGE VIEWPORT (FIXED BACKGROUND) */}
                <div className="absolute inset-0 w-full h-full overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-32 md:h-64 bg-gradient-to-b from-bg via-bg/80 to-transparent z-10 pointer-events-none"></div>

                    <div className="absolute inset-0 h-full w-full">
                        <Image
                            ref={imageRef}
                            src="/leaf.jpg"
                            alt="Why Zencura"
                            fill
                            sizes="100vw"
                            className="object-cover object-top opacity-50 mix-blend-multiply saturate-[.6] sepia-[.4] contrast-[1.1]"
                            priority
                        />
                    </div>

                    <div className="absolute bottom-0 left-0 w-full h-32 md:h-64 bg-gradient-to-t from-bg via-bg/80 to-transparent z-10 pointer-events-none"></div>
                </div>

                {/* Content Area sits on top of the image and scrolls */}
                <div
                    ref={contentRef}
                    className="absolute inset-0 z-10 flex items-center justify-end px-8 md:px-16 lg:px-24 will-change-transform"
                >
                    <div className="w-full max-w-[55rem] md:ml-auto">
                        <HeritageCardFrame
                            className="rounded-[24px] shadow-[0_40px_100px_rgba(0,0,0,0.1)]"
                            motifInset="-inset-0"
                            motifScale="scale-100"
                            motifOpacity="opacity-[0.1]"
                            motifBrightness="brightness-125"
                            overlay={true}
                        >
                            <div className="px-6 py-10 md:p-16 lg:p-24 relative z-10 flex flex-col items-center text-center bg-bg/80 backdrop-blur-md border border-brand/10 rounded-[24px]">
                                <div className="space-y-12">
                                    <div className="flex flex-col items-center">
                                        <NilaiSectionHeader title="Why Zencura?" subtitle="Our Global Mandate" className="!mb-8" />
                                        <div className="w-24 h-px bg-brand/20 mx-auto" />
                                    </div>

                                    <div className="space-y-8 max-w-2xl mx-auto">
                                        <p className="text-xl md:text-2xl font-source-serif italic text-brand/70 leading-relaxed font-light">
                                            "Zencura was founded in response to a fundamental shift in the human condition. We exist to transform healthcare from reactive intervention to conscious, preventive living."
                                        </p>
                                        <p className="text-xl md:text-2xl font-source-serif italic text-brand/70 leading-relaxed font-light">
                                            "By merging classical medical wisdom with modern empirical validation, we build ecosystems that respect both biological systems and environmental balance."
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </HeritageCardFrame>
                    </div>
                </div>
            </div>
        </section>
    );
}
