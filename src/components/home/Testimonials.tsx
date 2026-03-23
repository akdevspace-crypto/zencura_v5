'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const testimonials = [
    {
        title: "This is a blog post title. You get this much room to type it",
        category: "Category",
        image: "https://i.pravatar.cc/600?img=12"
    },
    {
        title: "This is a blog post title. You get this much room to type it",
        category: "Category",
        image: "https://i.pravatar.cc/600?img=32"
    },
    {
        title: "This is a blog post title. You get this much room to type it",
        category: "Category",
        image: "https://i.pravatar.cc/600?img=5"
    }
];

const TornTapeButton = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <div className={`relative inline-flex items-center justify-center px-12 py-4 border border-brand bg-accent text-white hover:bg-brand hover:text-white rounded-full text-[13px] font-bold uppercase tracking-[0.3em] transition-all duration-300 w-full sm:w-auto text-center cursor-pointer ${className}`}>
        <span className="relative z-10">{children}</span>
    </div>
);

export default function Testimonials() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [particles, setParticles] = React.useState<any[]>([]);

    React.useEffect(() => {
        setParticles([...Array(60)].map(() => ({
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            opacity: Math.random() * 0.5 + 0.1
        })));
    }, []);

    useGSAP(() => {
        const images = gsap.utils.toArray(".scene-image") as HTMLElement[];
        const texts = gsap.utils.toArray(".scene-text") as HTMLElement[];

        // Initial invisible state
        gsap.set(images, { opacity: 0, scale: 0.9, z: -100, rotate: -2, filter: "blur(10px)", zIndex: (i) => testimonials.length - i });
        gsap.set(texts, { opacity: 0, y: 50, filter: "blur(5px)" });

        // Set the very first scene items to be visible immediately
        gsap.set(images[0], { opacity: 1, scale: 1, z: 0, rotate: 0, filter: "blur(0px)" });
        gsap.set(texts[0], { opacity: 1, y: 0, filter: "blur(0px)" });

        // The pinned scroll area container timeline
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top top",
                end: `+=${testimonials.length * 100}%`,
                scrub: 0.5, // Faster, snappier scrub
                pin: true,
                anticipatePin: 1,
                invalidateOnRefresh: true
            }
        });

        // Build the sequential animation
        images.forEach((img, i) => {
            if (i === 0) return; // Skip first because it's already visible

            // Pure smooth cinematic crossfade (No holds to stop flow)
            tl.to(images[i - 1], {
                opacity: 0,
                scale: 0.95,
                z: -50,
                rotate: "-=3",
                filter: "blur(10px)",
                duration: 1,
                ease: "power2.inOut"
            })
                .to(texts[i - 1], {
                    opacity: 0,
                    y: -50,
                    filter: "blur(5px)",
                    duration: 1,
                    ease: "power2.inOut"
                }, "<")
                .to(images[i], {
                    opacity: 1,
                    scale: 1,
                    z: 0,
                    rotate: "+=2",
                    filter: "blur(0px)",
                    duration: 1,
                    ease: "power2.inOut"
                }, "<")
                .to(texts[i], {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    duration: 1,
                    ease: "power2.inOut"
                }, "<");
        });

        // Next.js hydration safety
        ScrollTrigger.refresh();

    }, { scope: sectionRef });

    return (
        <section
            id="testimonials"
            ref={sectionRef}
            className="relative bg-bg overflow-hidden border-t border-brand/10 perspective-[1000px]"
            style={{ height: `${testimonials.length * 100}vh` }}
        >
            {/* Ambient Background Dust/Particles using 'motifs' (gold) color */}
            <div className="absolute inset-0 pointer-events-none opacity-30 z-0 mix-blend-screen">
                {particles.map((style, i) => (
                    <div key={i} className="absolute rounded-full bg-motifs" style={style} />
                ))}
            </div>

            <div className="h-screen flex flex-col items-center justify-center pt-4 md:pt-0">

                {/* Header Context within Sticky wrapper */}
                <div className="text-center w-full z-20 mb-6 md:mb-20 px-4">
                    <span className="text-[12px] font-bold uppercase tracking-[0.5em] !text-brand block mb-2 opacity-80 mt-16 md:mt-0">
                        Community Voices
                    </span>
                    <h2 className="text-3xl md:text-5xl lg:text-7xl font-olivera !text-brand uppercase tracking-tighter">
                        Testimonials
                    </h2>
                </div>

                <div className="relative w-full max-w-[1000px] h-auto md:h-[500px] flex flex-col md:flex-row gap-6 md:gap-[160px] items-center px-6 md:px-0">

                    {/* IMAGE Container */}
                    <div className="w-full max-w-[260px] h-[340px] md:max-w-[360px] md:h-[460px] relative shrink-0">
                        {testimonials.map((t, i) => {
                            // Rotate alternating cards for polaroid stack feel
                            const rotation = i === 0 ? '-3deg' : i === 1 ? '2deg' : '-1deg';

                            return (
                                <div key={i} className={`scene-image absolute inset-0 w-full h-full p-3 pb-12 md:p-4 md:pb-16 bg-card rounded-[2px] shadow-[0_20px_60px_rgba(0,0,0,0.6)] border border-black/20 will-change-[transform,opacity,filter]`}
                                    style={{ transform: `rotate(${rotation})` }}
                                >
                                    <div className="absolute inset-0 pointer-events-none opacity-[0.08]"
                                        style={{ backgroundImage: 'repeating-linear-gradient(transparent, transparent 23px, var(--color-primary) 23px, var(--color-primary) 24px)' }}
                                    />
                                    <div className="relative w-full aspect-[4/5] bg-bg overflow-hidden shadow-inner border border-brand/20 transform origin-bottom">
                                        <img src={t.image} alt={t.category} className="w-full h-full object-cover filter sepia-[0.3] contrast-[1.1] brightness-[0.95]" />
                                    </div>
                                    <div className="absolute left-0 bottom-4 md:bottom-6 w-full flex justify-center items-center pointer-events-none">
                                        <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.25em] text-motifs font-manrope z-10 px-4 bg-card transition-colors">{t.category}</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* TEXT Container */}
                    <div className="relative w-full md:w-[520px] h-[180px] md:h-[400px]">
                        {testimonials.map((t, i) => (
                            <div key={i} className="scene-text absolute inset-0 flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-4 md:space-y-6 w-full will-change-[transform,opacity,filter]">
                                <h2 className="text-2xl md:text-5xl font-olivera !text-brand leading-tight max-w-[500px]">
                                    "{t.title}"
                                </h2>
                                <TornTapeButton>Read More</TornTapeButton>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
}
