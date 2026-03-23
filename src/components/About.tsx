import Section from "./Section";
import { Reveal } from './Reveal';

function About() {
    return (
        <Reveal>
        <Section
            id="about"
            title='This is me.'
            headerClass={"text-gray-500 text-base mb-4"}

        >
            <div className="h-px bg-gray-800 " />

            <div className='
            className="relative py-2 px-6"
            '>
                {/* // TODO */}
                {/* <Reveal>
                <h2 className="text-2xl md:text-3xl font-medium mb-10">
                    About
                </h2>
            </Reveal> */}

                <div className="space-y-6 text-gray-600 leading-relaxed text-lg grid md:grid-cols-12 mt-9">

                    <div className='md:col-span-5'>
                        <Reveal>
                            <p className='text-4xl text-white'>Hi, I am Shilpa.</p>
                        </Reveal >
                    </div>
                    <div className='md:col-span-7 text-gray-500'>

                        <Reveal>
                            <p className='pb-4'>
                                I’m a frontend engineer with a strong focus on building
                                performant, scalable, and intuitive web applications.
                                I enjoy turning complex problems into clean, efficient
                                user experiences.
                            </p>
                        </Reveal>

                        <Reveal>
                            <p className='pb-4'>
                                Over the past few years, I’ve worked extensively with React,
                                optimizing rendering performance, structuring modular
                                architectures, and improving overall application
                                responsiveness. I care deeply about writing code that not
                                only works, but scales well as products grow.
                            </p>
                        </Reveal>

                        <Reveal>
                            <p className='pb-4'>
                                I’m particularly interested in the intersection of
                                performance, user experience, and system design — where
                                small technical decisions can have a large impact on how
                                users interact with a product.
                            </p>
                        </Reveal>

                        <Reveal>
                            <p className='pb-4'>
                                Outside of work, I enjoy exploring new technologies,
                                refining my problem-solving skills, and building things
                                that push me to think better as an engineer.
                            </p>
                        </Reveal>
                    </div>
                </div>

                <div className="mt-12 h-px bg-gray-800" />
            </div>
        </Section>
        </Reveal>
    )
}

export default About
