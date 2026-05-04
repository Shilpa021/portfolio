import Section from "./Section";
import { Reveal } from './Reveal';

function About() {
    return (
        <Section
            id="about"
        >
            <Reveal>
                <h2 className="text-gray-500 text-base mb-4 font-semibold">
                    This is me.
                </h2>
            </Reveal>
            <Reveal>

                <div className="h-px bg-gray-800 " />

                <div className='className="relative py-2 px-6"'>
                    <div className="space-y-6 text-gray-600 leading-relaxed text-lg grid md:grid-cols-12 mt-9">
                        <div className='md:col-span-5'>
                            <Reveal>
                                <p className='text-4xl text-white'>Hi, I am Shilpa.</p>
                            </Reveal>
                        </div>
                        <div className='md:col-span-7 text-gray-500'>
                            <Reveal>
                                <p className='pb-4'>
                                    I'm a frontend engineer with 10+ years of experience building
                                    scalable, high-performance web applications — and more recently,
                                    AI-powered products that combine modern frontend with LLM integration.
                                </p>
                            </Reveal>
                            <Reveal>
                                <p className='pb-4'>
                                    I've worked extensively with React, Next.js, and GraphQL —
                                    optimizing rendering performance, designing modular architectures,
                                    and leading teams that ship reliable, user-centric products at scale.
                                    My work has reached 100K+ users across enterprise platforms,
                                    OTT/Smart TV apps, and e-commerce.
                                </p>
                            </Reveal>
                            <Reveal>
                                <p className='pb-4'>
                                    Lately, I've been building at the intersection of frontend and AI —
                                    shipping projects like an AI Meeting Summarizer (speech-to-text →
                                    LLM insights) and an AI Brochure Generator (real-time streaming output
                                    with PDF export). This is where I see frontend engineering heading,
                                    and where I'm already building.
                                </p>
                            </Reveal>
                            <Reveal>
                                <p className='pb-4'>
                                    I'm particularly drawn to problems where small architectural decisions
                                    have outsized impact — on performance, scalability, and the way users
                                    experience a product. I care about writing code that doesn't just work,
                                    but scales well as products and teams grow.
                                </p>
                            </Reveal>
                        </div>
                    </div>

                    <div className="mt-12 h-px bg-gray-800" />
                </div>
            </Reveal>

        </Section>
    )
}

export default About
