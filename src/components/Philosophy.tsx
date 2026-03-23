import Decisions from "./Decisions";
import Failure from "./Failure";
import { Reveal } from "./Reveal";
import Section from "./Section";

export default function Philosophy() {
    return (
        <Section id="philosophy" title="">
            <Reveal>
                <h2 className="text-2xl md:text-2xl font-semibold mb-12">
                    Engineering Philosophy
                </h2>
            </Reveal>
            <Reveal>
                <div className="space-y-4 text-gray-400 max-w-2xl">
                    <p>
                        I believe frontend engineering is about building systems, not just UI.
                        My focus is on scalability, performance, and developer experience.
                    </p>

                    <p>
                        I prioritize clear architecture, predictable state management, and
                        reusable components that enable teams to move faster without
                        compromising quality.
                    </p>

                    <p>
                        I optimize for long-term maintainability — reducing complexity,
                        improving observability, and aligning technical decisions with
                        business outcomes.
                    </p>
                </div>
            </Reveal>
            <Reveal>
                <Decisions />
            </Reveal>
            <Reveal>
                <Failure />
            </Reveal>
        </Section>
    );
}