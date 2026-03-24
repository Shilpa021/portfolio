import CaseStudySection from "@/components/CaseStudySection";

const List = ({ items }: { items: string[] }) => (
    <ul className="list-disc ml-6 space-y-1 text-gray-400">
        {items.map((item, i) => (
            <li key={i}>{item}</li>
        ))}
    </ul>
);

export default function Ulta() {
    return (
        <main className=" text-gray-500 leading-relaxed  bg-gray-950" >
            <div className="px-6 py-24 max-w-3xl mx-auto" >
                {/* Header */}
                <header className="mb-10">
                    <h1 className="text-3xl font-bold text-white mb-4">
                        Improving React Performance at Scale
                    </h1>
                    <p>
                        Part of the core frontend development team, working on a large-scale
                        e-commerce platform to improve rendering performance, maintainability,
                        and overall user experience.
                    </p>
                </header>

                {/* Context */}
                <CaseStudySection title="Context">
                    <p>
                        The application had grown significantly in complexity, with deeply nested
                        component trees and frequent state updates causing performance bottlenecks.
                        This directly impacted user experience, especially on high-traffic pages.
                    </p>
                </CaseStudySection>

                {/* Problem */}
                <CaseStudySection title="Core Problems">
                    <List
                        items={[
                            "Excessive re-renders due to poor component isolation",
                            "Inefficient state management across shared components",
                            "Heavy UI components impacting load and interaction time",
                            "Limited visibility into rendering performance issues",
                        ]}
                    />
                </CaseStudySection>

                {/* Role */}
                <CaseStudySection title="My Role">
                    <List
                        items={[
                            "Part of the core frontend team building and scaling the UI",
                            "Integrated GraphQL on the frontend for efficient data fetching",
                            "Developed modular UI using SCSS for maintainable styling",
                            "Implemented unit and component tests using Jest and Enzyme",
                        ]}
                    />
                </CaseStudySection>

                {/* Solution */}
                <CaseStudySection title="Key Solutions">
                    <List
                        items={[
                            "Introduced memoization (React.memo, useMemo, useCallback) to reduce unnecessary renders",
                            "Refactored large components into smaller, reusable units",
                            "Optimized prop handling and state updates to minimize reflows",
                            "Improved component structure for better separation of concerns",
                        ]}
                    />
                </CaseStudySection>

                {/* Architecture */}
                <CaseStudySection title="Architecture & Stack">
                    <p>
                        React → GraphQL (data layer) → SCSS-based styling → Testing with Jest & Enzyme
                    </p>
                </CaseStudySection>

                {/* Impact */}
                <CaseStudySection title="Impact">
                    <List
                        items={[
                            "Improved React rendering performance by ~25%",
                            "Reduced unnecessary re-renders across key user flows",
                            "Enhanced maintainability through modular component design",
                            "Improved confidence in releases with better test coverage",
                        ]}
                    />
                </CaseStudySection>

                {/* Learnings */}
                <CaseStudySection title="Key Learnings">
                    <p>
                        Performance optimization in React is not just about tools, but about
                        thoughtful component design. Small inefficiencies at scale can compound
                        quickly, and systematic refactoring can unlock significant gains.
                    </p>
                </CaseStudySection>
            </div>
        </main>
    );
}