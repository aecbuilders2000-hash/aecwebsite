import React from 'react'

const AIWorkShop = () => {
    return (
        <>
            <article
                className="group relative flex flex-col rounded-3xl overflow-hidden shadow-[0_4px_24px_-6px_rgba(0,0,0,0.08)] bg-gray-100 backdrop-blur-md border border-black/5 p-5 sm:p-6 lg:p-7 hover:shadow-[0_6px_42px_-4px_rgba(0,0,0,0.14)] transition-shadow duration-400"
            >

                {/* part1 */}
                <div className="flex flex-col lg:flex-row gap-8 mb-4">
                    <div className='w-full lg:w-1/3 h-fit flex-shrink-0'>
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
                    <div className='w-full md:flex-1 px-4 sm:px-6 md:px-8 lg:px-12 text-black'>
                        <h2 className='font-bold text-xl mb-8'>
                            AI in Architecture Workshop
                            <span className='text-neutral-500'>
                                {" "}at PPSU
                            </span>
                        </h2>

                        <div className="space-y-4 text-md xl:text-lg text-justify text-neutral-700 leading-relaxed" style={{ fontFamily: 'Century Gothic, sans-serif' }}>
                            <p>
                                Our founder, <strong>Ar. Kenil Savaliya</strong>, was invited by P P Savani University (PPSU) to conduct a workshop on "AI in Architecture & Interior Design." The session focused on the growing influence of Artificial Intelligence in the fields of architecture and interior design, emphasizing how it enhances creativity, efficiency, and innovation in the design process.
                            </p>
                            <p>
                                Ar. Kenil Savaliya shared insights into our firm's work on computational design and AI integration in real-world projects, showcasing methods to optimize workflow and improve design outcomes.
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
                <div className="flex flex-col md:flex-row gap-2 mx-auto w-[95%]">
                    {/* First Image - 35% width */}
                    <div className='w-full md:w-[35%] flex-shrink-0'>
                        <div className="shadow-md w-full overflow-hidden h-full md:h-[400px] lg:h-[500px]">
                            <img
                                src="https://i.postimg.cc/63LLtGxH/news.webp"
                                alt="AI Workshop Image 1"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                    </div>

                    {/* Second Image - 30% width */}
                    <div className='w-full md:w-[30%] flex-shrink-0'>
                        <div className="shadow-md w-full overflow-hidden h-full md:h-[400px] lg:h-[500px]">
                            <img
                                src="https://i.postimg.cc/65WZkkv1/news.webp"
                                alt="AI Workshop Image 2"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                    </div>

                    {/* Third Image - 35% width */}
                    <div className='w-full md:w-[35%] flex-shrink-0'>
                        <div className="shadow-md w-full overflow-hidden h-full md:h-[400px] lg:h-[500px]">
                            <img
                                src="https://i.postimg.cc/65WZkkv1/news.webp"
                                alt="AI Workshop Image 3"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}

export default AIWorkShop;