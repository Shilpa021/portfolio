import CaseStudySection from "@/components/CaseStudySection";

const List = ({ items }: { items: string[] }) => (
    <ul className="list-disc ml-6 space-y-1 text-gray-400">
        {items.map((item, i) => (
            <li key={i}>{item}</li>
        ))}
    </ul>
);

export default function TV() {
    return (
        <main className=" text-gray-500 leading-relaxed bg-gray-950" >
        <div className="px-6 py-24 max-w-3xl mx-auto" >

            {/* Header */}
            <header className="mb-8">
                <h1 className="text-3xl font-bold text-white mb-4">
                    Building for Low-Memory Smart TVs
                </h1>
                <p>
                    Delivered Smart TV applications optimized for constrained environments,
                    focusing on performance, navigation, and real-world usage at scale.
                </p>
            </header>

            {/* Context */}
            <CaseStudySection title="Context">
                <p>
                    Smart TV platforms operate under strict memory and processing constraints,
                    with users navigating via remote controls instead of touch. Ensuring
                    smooth performance while maintaining usability across thousands of
                    active devices was critical.
                </p>
            </CaseStudySection>

            {/* Challenges */}
            <CaseStudySection title="Core Challenges">
                <List
                    items={[
                        "Severely limited memory and CPU capabilities",
                        "Non-traditional navigation using remote (no touch)",
                        "Frequent re-renders causing UI lag and crashes",
                        "Inconsistent performance across device variants",
                    ]}
                />
            </CaseStudySection>

            {/* Solutions */}
            <CaseStudySection title="Key Solutions">
                <List
                    items={[
                        "Optimized rendering using memoization and component splitting",
                        "Implemented spatial navigation for seamless remote-based UX",
                        "Reduced unnecessary re-renders and improved state management",
                        "Built lightweight, reusable UI components tailored for TV platforms",
                    ]}
                />
            </CaseStudySection>

            {/* Analytics */}
            <CaseStudySection title="User Insights & Analytics">
                <p>
                    Integrated Mixpanel to track user behaviour across thousands of active
                    devices, enabling data-driven decisions around navigation patterns,
                    feature usage, and performance bottlenecks.
                </p>
            </CaseStudySection>

            {/* Architecture */}
            <CaseStudySection title="Architecture">
                <p>
                    React-based TV UI → Optimized state management → Lightweight APIs →
                    Analytics via Mixpanel
                </p>
            </CaseStudySection>

            {/* Impact */}
            <CaseStudySection title="Impact">
                <List
                    items={[
                        "Smooth and consistent performance across thousands of active devices",
                        "Significant reduction in UI lag and crashes",
                        "Improved navigation experience using spatial interaction patterns",
                        "Data-driven improvements using real user behaviour insights",
                    ]}
                />
            </CaseStudySection>

            {/* Learnings */}
            <CaseStudySection title="Key Learnings">
                <p>
                    Building for constrained environments requires a shift in mindset —
                    prioritizing performance, minimizing complexity, and designing
                    specifically for the platform rather than reusing web paradigms.
                </p>
            </CaseStudySection>
</div>
        </main>
    );
}