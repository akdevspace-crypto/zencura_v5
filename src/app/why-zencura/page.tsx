import React from 'react';
import dynamic from 'next/dynamic';

const WhyZencura = dynamic(() => import('@/components/home/WhyZencura'), { ssr: true });

export const metadata = {
    title: 'Why Zencura | Zencura',
    description: 'Learn why Zencura was founded in response to a fundamental shift in the human condition.',
};

export default function WhyZencuraPage() {
    return (
        <main className="min-h-screen bg-bg">
            <WhyZencura />
        </main>
    );
}
