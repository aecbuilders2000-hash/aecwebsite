import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined' && !gsap.plugins.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger)
}

const AIWorkShop = () => {
    const part1Ref = useRef(null)
    const part1Left = useRef(null)
    const part1Right = useRef(null)

    const part2Ref = useRef(null)

    useEffect(() => {
        if (typeof window === 'undefined') return

        const ctx = gsap.context(() => {
            // Part 1: left image from left, right text from right
            if (part1Ref.current && part1Left.current && part1Right.current) {
                gsap.set([part1Left.current, part1Right.current], { autoAlpha: 0 })
                gsap.set(part1Left.current, { x: -80 })
                gsap.set(part1Right.current, { x: 80 })

                ScrollTrigger.create({
                    trigger: part1Ref.current,
                    start: 'top 85%',
                    onEnter: () => {
                        gsap.to(part1Left.current, { x: 0, autoAlpha: 1, duration: 1.05, ease: 'power3.out' })
                        gsap.to(part1Right.current, { x: 0, autoAlpha: 1, duration: 1.05, ease: 'power3.out', delay: 0.08 })
                    },
                    onEnterBack: () => {
                        gsap.to(part1Left.current, { x: 0, autoAlpha: 1, duration: 0.95, ease: 'power3.out' })
                        gsap.to(part1Right.current, { x: 0, autoAlpha: 1, duration: 0.95, ease: 'power3.out', delay: 0.06 })
                    }
                })
            }

            // Part 2: three images - alternate directions L, R, L
            if (part2Ref.current) {
                const cols = Array.from(part2Ref.current.querySelectorAll(':scope > div'))
                cols.forEach((col, i) => {
                    const dir = i % 2 === 0 ? -1 : 1
                    gsap.set(col, { autoAlpha: 0, x: 80 * dir })
                })

                ScrollTrigger.create({
                    trigger: part2Ref.current,
                    start: 'top 85%',
                    onEnter: () => {
                        cols.forEach((col, i) => {
                            gsap.to(col, { x: 0, autoAlpha: 1, duration: 1.0, ease: 'power3.out', delay: i * 0.06 })
                        })
                    },
                    onEnterBack: () => {
                        cols.forEach((col, i) => {
                            gsap.to(col, { x: 0, autoAlpha: 1, duration: 0.9, ease: 'power3.out', delay: i * 0.04 })
                        })
                    }
                })
            }
        })

        return () => ctx.revert()
    }, [])

    return (
        <>
            <article
                ref={part1Ref}
                className="group relative flex flex-col rounded-3xl overflow-hidden shadow-[0_4px_24px_-6px_rgba(0,0,0,0.08)] bg-gray-100 backdrop-blur-md border border-black/5 p-5 sm:p-6 lg:p-7 hover:shadow-[0_6px_42px_-4px_rgba(0,0,0,0.14)] transition-shadow duration-400"
            >

                {/* part1 */}
                <div className="flex flex-col lg:flex-row gap-8 mb-4">
                    <div ref={part1Left} className='w-full lg:w-1/3 h-fit flex-shrink-0'>
                        <span
                            className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-neutral-500 font-medium"
                            style={{ fontFamily: 'Bruno Ace SC, sans-serif' }}
                        >
                            2 W Ago
                        </span>
                        {/* image */}
                        <div className="mt-4 shadow-md w-full overflow-hidden">
                            <img
                                src="https://i.postimg.cc/65WZkkv1/news.webp"
                                alt="AI Workshop at PPSU"
                                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                    </div>
                    <div ref={part1Right} className='w-full md:flex-1 px-4 sm:px-6 md:px-8 lg:px-12 text-black'>
                        <h2 className='font-bold text-xl mb-8'>
                            AI in Architecture Workshop
                            <span className='text-neutral-500'>
                                {" "}at PPSU
                            </span>
                        </h2>

                        <div className="space-y-4 text-md xl:text-lg text-justify text-neutral-700 leading-relaxed" style={{ fontFamily: 'Century Gothic, sans-serif' }}>
                            <p>
                                Our founder, <strong>Ar. Kenil Savaliya</strong>, was invited by P P Savani University (PPSU) to conduct a workshop on &quot;AI in Architecture & Interior Design.&quot; The session focused on the growing influence of Artificial Intelligence in the fields of architecture and interior design, emphasizing how it enhances creativity, efficiency, and innovation in the design process.
                            </p>
                            <p>
                                Ar. Kenil Savaliya shared insights into our firm&apos;s work on computational design and AI integration in real-world projects, showcasing methods to optimize workflow and improve design outcomes.
                            </p>
                            <p>
                                Through interactive discussions and demonstrations, participants explored practical applications of AI tools for design visualization, space planning, and material selection. The workshop offered students a valuable perspective on how emerging technologies are shaping the future of architectural and interior design practices.
                            </p>
                        </div>
                    </div>
                </div>
            </article>

            <article
                className="group mt-8 md:mt-10 relative flex flex-col rounded-3xl overflow-hidden shadow-[0_4px_24px_-6px_rgba(0,0,0,0.08)] bg-gray-100 backdrop-blur-md border border-black/5 p-5 sm:p-6 lg:p-7 hover:shadow-[0_6px_42px_-4px_rgba(0,0,0,0.14)] transition-shadow duration-400"
            >
                <span
                    className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-neutral-500 font-medium mb-6"
                    style={{ fontFamily: 'Bruno Ace SC, sans-serif' }}
                >
                    2 W Ago
                </span>

                {/* 3 Images Layout: 35% - 30% - 35% */}
                <div ref={part2Ref} className="flex flex-col md:flex-row gap-2 mx-auto w-[95%]">
                    {/* First Image - 35% width */}
                    <div className='w-full md:w-[35%] flex-shrink-0'>
                        <div className="shadow-md w-full overflow-hidden h-full md:h-[400px] lg:h-[500px]">
                            <img
                                src="https://i.postimg.cc/63LLtGxH/news.webp"
                                alt="AI Workshop Image 1"
                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                            />
                        </div>
                    </div>

                    {/* Second Image - 30% width */}
                    <div className='w-full md:w-[30%] flex-shrink-0'>
                        <div className="shadow-md w-full overflow-hidden h-full md:h-[400px] lg:h-[500px]">
                            <img
                                src="https://i.postimg.cc/0jN7jngq/workshop2.png"
                                alt="AI Workshop Image 2"
                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                            />
                        </div>
                    </div>

                    {/* Third Image - 35% width */}
                    <div className='w-full md:w-[35%] flex-shrink-0'>
                        <div className="shadow-md w-full overflow-hidden h-full md:h-[400px] lg:h-[500px]">
                            <img
                                src="/NEWS 3.png"
                                alt="AI Workshop Image 3"
                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                            />
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}

export default AIWorkShop;