import { Reveal } from "./Reveal";
import Section from "./Section"

function Contact() {
    return (
        <Section
            id="contact"
            sectionClass="pb-28  pt-12 max-w-3xl mx-auto text-center"
        >
            <Reveal>
                <h2 className="text-md font-medium mb-6">
                    Contact
                </h2>
            </Reveal>

            <Reveal>
                <h3 className="text-2xl md:text-3xl font-medium mb-6">
                    Let’s work together
                </h3>
            </Reveal>

            <Reveal>
                <p className="text-gray-600 mb-10 leading-relaxed">
                    I’m currently open to new opportunities and collaborations.
                    If you have a role or project in mind, feel free to reach out.
                </p>
            </Reveal>

            {/* CTA Button */}
            <Reveal>
                <a
                    href="mailto:rana.shilpa021@gmail.com"
                    className="inline-block px-6 py-3 rounded-full border text-sm
                    hover:bg-white hover:text-black transition"
                >
                    Say Hello
                </a>
            </Reveal>

            {/* Social Links */}
            <div className="py-8">
                <Reveal>
                    <div className="flex justify-center gap-6 text-sm text-gray-500">
                        <a
                            href="https://www.linkedin.com/in/shilparana021/"
                            target="_blank"
                            className="hover:text-white transition"
                        >
                            LinkedIn
                        </a>
                        <a
                            href="https://github.com/Shilpa021"
                            target="_blank"
                            className="hover:text-white transition"
                        >
                            GitHub
                        </a>
                    </div>
                </Reveal>
            </div>

        </Section>
    );
}

export default Contact
