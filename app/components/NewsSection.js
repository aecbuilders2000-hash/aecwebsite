'use client';

import React from 'react';
import NewsCard from './NewsCard';
import AIWorkShop from './AIWorkShop';

// Enhanced news data with more variety
const list = [
    {
        id: 1,
        headline: `Isn't this the time to upgrade?`,
        paragraphs: [
            'Traditional CAD vs. Optimized BIM: Who Wins on Speed & Scale?'
        ],
        bullets: [
            "As projects grow in size and complexity, the tools we choose can make or break delivery timelines. CAD has been the industry standard for decades - but can it really keep pace with today's demands?",
            "Our latest article breaks down why it's not just CAD vs. BIM - it's CAD vs. optimized BIM and how the right workflows unlock faster iterations, smoother collaboration and true scalability.",
            "Read the full breakdown and see which approach gives firms the edge."
        ],
        hashtags: ['#Architecture', '#BIM', '#CAD', '#AEC', '#ConstructionInnovation', '#DesignEfficiency', '#Revisit', '#ParametricDesign'],
        date: '2W Ago',
    },
    {
        id: 2,
        headline: `Why Mastering Revit Is a Game-Changer`,
        paragraphs: [
            "In today's fast-paced AEC industry, efficiency isn't optional - it's the difference betwwn hitting deadlines and losing opportunities",
            "Firms that master Revit don't just draft; they:"
        ],
        bullets: [
            "Deliever projects Faster",
            "Cut down costly redlines",
            "Collaborate smarter with teams & consultants",
            "Build long-term ROI through smoother workflows"
        ],
        bottom: [
            "Bootom line: Revit mastery isn't just about software- it's about transforming the way you deliever projects"
        ],
        bullets2: [
            "Read the full article to see how Revit can give your firm a competitive edge."
        ],
        hashtags: ['#Revit', '#BIM', '#Architecture', '#ConstructionTechnology', '#AECInnovation'],
        date: '2W Ago',
    },
    {
        id: 3,
        headline: `3 Reasons Your BIM Process Might Be Slowing Projects Down`,
        paragraphs: [
            'Machine Learning Transforms Architectural Workflows in Real-Time'
        ],
        bullets: [
            "BIM is meant to speed up delivery but if your timelines are dragging, the issue may not be the software. It's the workflows.",
            "Here are 3 common culprits: - Messy templates & families, -inefficient collaboration & model management, -Overcomplicated models"
        ],
        bottom: [
            "Bottom line: BIM isn't the bottleneck - unoptimized workflows are. Streamline your process and watch delivery times shrink.",
            "Read the full article for breakdown."
        ],
        hashtags: ['#BIM', '#Architecture', '#ConstructionTechnology', '#DesignEfficiency', '#AEC'],
        date: '2W Ago',
    },
];


export default function NewsSection({ items }) {
    // Prefer passed items; fall back to internal newsItems constant

    return (
        <section
            id="news-section"
            className="w-full px-[clamp(1rem,5vw,5%)] py-[clamp(2.5rem,7vw,5rem)] bg-white relative mt-8"
            style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }}
        >
            <div className="max-w-7xl mx-auto">
                <header className="mb-10 md:mb-14">
                    <div className="flex flex-col gap-4">
                        <h2
                            className="text-[clamp(1.55rem,4.2vw,2.8rem)] text-black font-semibold tracking-wide leading-[1.05]"
                            style={{ fontFamily: 'Bruno Ace SC, sans-serif' }}
                        >
                            Latest News
                        </h2>
                        <p
                            className="text-neutral-600 max-w-2xl text-[clamp(0.82rem,1.05vw,0.95rem)] md:text-[clamp(0.9rem,0.9vw+0.4rem,1.05rem)] leading-relaxed"
                            style={{ fontFamily: 'Century Gothic, sans-serif' }}
                        >
                            Updates, milestones and research highlights from the Collective AEC studio.
                        </p>
                    </div>
                </header>

                <AIWorkShop />
                {/* News Grid - Vertical Layout */}
                <div className="grid grid-cols-1 gap-8 mt-8 md:mt-10 md:gap-10">
                    {list.map((item, idx) => (
                        <NewsCard key={item.id} item={item} index={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
}