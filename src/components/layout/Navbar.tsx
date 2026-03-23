'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { motion, useScroll } from 'framer-motion';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

const navLinks = [
    { name: 'Home', href: '/#hero' },
    { name: 'Why Zencura', href: '/why-zencura' },
    { name: 'About', href: '/about' },
    { name: 'Founder', href: '/founder' },
    { name: 'Institutions', href: '/institutions' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrollPos, setScrollPos] = useState(0);
    const [hasScrolled, setHasScrolled] = useState(false);
    const pathname = usePathname();
    const { scrollY } = useScroll();

    useEffect(() => {
        return scrollY.on("change", (latest) => {
            setHasScrolled((prev) => {
                if (latest > 10 && !prev) return true;
                if (latest <= 10 && prev) return false;
                return prev;
            });
            setScrollPos(latest); // keep manual pos for class logic
        });
    }, [scrollY]);

    const isHomePage = pathname === '/';

    // Derived states based on scroll position
    const isHomeTop = isHomePage && scrollPos < 10;
    const isHomeHeroContent = isHomePage && scrollPos >= 10 && scrollPos < 600;
    const isHomeScrolledPast = isHomePage && scrollPos >= 600;

    const isOtherTop = !isHomePage && scrollPos < 50;
    const isOtherScrolled = !isHomePage && scrollPos >= 50;

    // No dynamic dark hero text needed as Hero is now bright

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all font-manrope",
                // Home page logic 
                isHomeTop && "h-28 translate-y-0 bg-transparent duration-[2s] ease-[cubic-bezier(0.25,0.1,0.25,1)]",
                isHomeHeroContent && "h-28 bg-transparent translate-y-0 duration-[2s] ease-[cubic-bezier(0.25,0.1,0.25,1)]",
                isHomeScrolledPast && "h-20 bg-bg/95 backdrop-blur-sm shadow-[0_4px_20px_rgba(172,173,43,0.05)] translate-y-0 duration-700 ease-out",
                // Other pages logic
                isOtherTop && "h-28 bg-bg translate-y-0 duration-700 ease-out",
                isOtherScrolled && "h-20 bg-bg/95 backdrop-blur-sm shadow-[0_4px_20px_rgba(172,173,43,0.05)] translate-y-0 duration-700 ease-out"
            )}
        >



            <div className="max-w-[1440px] mx-auto px-8 md:px-16 h-full flex items-center justify-between">
                <Link
                    href="/"
                    onClick={(e) => {
                        if (isHomePage) {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }
                    }}
                    className="text-2xl md:text-3xl font-canela font-bold uppercase text-brand transition-colors duration-500 hover:text-accent"
                >
                    ZENCURA
                </Link>

                {/* Desktop Nav */}
                <div className="hidden xl:flex items-center space-x-12">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={(e) => {
                                if (isHomePage && link.name === 'Home') {
                                    e.preventDefault();
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                }
                            }}
                            className="group relative py-2 text-[18px] font-bold uppercase text-brand transition-colors duration-500 hover:text-accent"
                        >
                            <span>{link.name}</span>
                            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent transition-all duration-500 group-hover:w-full" />
                        </Link>
                    ))}
                </div>

                {/* Mobile & Tablet Toggle */}
                <div className="flex xl:hidden items-center space-x-6">
                    <button
                        className="p-2 text-brand transition-colors duration-500 hover:text-accent"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="xl:hidden absolute top-full left-0 right-0 bg-bg px-10 py-16 flex flex-col space-y-8 animate-in fade-in slide-in-from-top-4 duration-700 overflow-y-auto max-h-[85vh]">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-2xl font-canela font-medium text-brand/80 hover:text-brand"
                            onClick={(e) => {
                                if (isHomePage && link.name === 'Home') {
                                    e.preventDefault();
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                }
                                setIsOpen(false);
                            }}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
}
