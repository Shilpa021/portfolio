// const CaseStudySection = ({ title, children }: any) => (
//     <section className="case-study-section">
//         <h2 className="text-xl font-semibold mb-3 text-amber-50">{title}</h2>
//         {children}
//     </section>
// );
import CaseStudySection from "@/components/CaseStudySection";

const List = ({ items }: { items: string[] }) => (
    <ul className="list-disc ml-6 space-y-1 text-gray-400">
        {items.map((item, i) => (
            <li key={i}>{item}</li>
        ))}
    </ul>
);

export default function CDNManager() {
    return (
        <main className=" text-gray-500 leading-relaxed  bg-gray-950" >
            <div className="px-6 py-24 max-w-3xl mx-auto" >

                {/* Header */}
                <header className="mb-10">
                    <h1 className="text-3xl font-bold text-white mb-4">
                        Building a Scalable CDN Management Platform
                    </h1>
                    <p>
                        Developed a frontend platform for managing CDN configurations,
                        analytics, and deployments data while focusing on reusable architecture
                        and consistency across internal tools.
                    </p>
                </header>

                {/* Context */}
                <CaseStudySection title="Context">
                    <p>
                        Multiple internal tools required similar UI components such as
                        dashboards, charts, configuration panels, and analytics views.
                        However, each tool was being built independently, leading to
                        duplication and inconsistent user experience.
                    </p>
                </CaseStudySection>

                {/* Core Problems */}
                <CaseStudySection title="Core Problems">
                    <List
                        items={[
                            "Repeated UI development across multiple internal tools",
                            "Lack of reusable components and shared architecture",
                            "Inconsistent charting and dashboard experiences",
                            "Slower development cycles due to duplicated work",
                        ]}
                    />
                </CaseStudySection>

                {/* My Role */}
                <CaseStudySection title="My Role">
                    <List
                        items={[
                            "Led the core frontend development team building the CDN Manager UI",
                            "Designed reusable UI modules used across multiple internal tools",
                            "Implemented dashboards and analytics using Recharts",
                            "Improved consistency and reduced duplicate development efforts",
                        ]}
                    />
                </CaseStudySection>

                {/* Key Solutions */}
                <CaseStudySection title="Key Solutions">
                    <List
                        items={[
                            "Built reusable UI modules reused across 3+ internal tools",
                            "Created shared components for charts, tables, and configuration panels",
                            "Standardized dashboard layouts for consistency across tools",
                            "Optimized component structure for maintainability and scalability",
                        ]}
                    />
                </CaseStudySection>

                {/* Architecture */}
                <CaseStudySection title="Architecture & Stack">
                    <p>
                        React → Reusable Component Library → Recharts for analytics →
                        Modular UI architecture reused across multiple internal platforms
                    </p>
                </CaseStudySection>

                {/* Impact */}
                <CaseStudySection title="Impact">
                    <List
                        items={[
                            "Reusable UI modules adopted across 3+ internal tools",
                            "Reduced development effort through shared components",
                            "Improved consistency across dashboards and analytics screens",
                            "Faster development cycles due to reusable architecture",
                        ]}
                    />
                </CaseStudySection>

                {/* Learnings */}
                <CaseStudySection title="Key Learnings">
                    <p>
                        Investing in reusable UI architecture early can significantly
                        accelerate development across multiple products. Building
                        shared modules not only improves efficiency but also ensures
                        consistency and long-term maintainability.
                    </p>
                </CaseStudySection>
            </div>
        </main>
    );
}