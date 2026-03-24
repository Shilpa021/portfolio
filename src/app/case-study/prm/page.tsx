import CaseStudySection from "@/components/CaseStudySection";

const List = ({ items }: { items: string[] }) => (
    <ul className="list-disc ml-6 space-y-1">
        {items.map((item, i) => (
            <li key={i}>{item}</li>
        ))}
    </ul>
);

export default function PRM() {
    return (
        <main className=" text-gray-500 leading-relaxed  bg-gray-950" >
        <div className="px-6 py-24 max-w-3xl mx-auto" >
            {/* Header */}
            <header className="mb-8">
                <h1 className="text-3xl font-bold text-amber-50 mb-4">
                    Scaling a Frontend Platform with GraphQL BFF
                </h1>
                <p>
                    Led frontend architecture for Tata Play PRM platform serving sales and
                    service workflows across thousands of users.
                </p>
            </header>

            <CaseStudySection title="Context" >
                <p>
                    The system relied on multiple backend services, leading to fragmented
                    data fetching, over-fetching, and inconsistent UI performance.
                </p>
            </CaseStudySection>

            <CaseStudySection title="Core Problems" >
                <List
                    items={[
                        "Redundant API calls across screens",
                        "High latency due to multiple network round trips",
                        "Tight coupling between frontend and backend APIs",
                    ]}
                />
            </CaseStudySection>

            <CaseStudySection title="Key Decisions">
                <List
                    items={[
                        "Introduced GraphQL BFF for aggregation",
                        "Designed query-driven data model",
                        "Implemented caching at BFF layer",
                    ]}
                />
            </CaseStudySection>

            <CaseStudySection title="Tradeoffs" >
                <List
                    items={[
                        "Added complexity in backend layer",
                        "Required schema governance",
                        "Improved frontend velocity significantly",
                    ]}
                />
            </CaseStudySection>

            <CaseStudySection title="Architecture" >
                <p>React UI → GraphQL BFF (Fastify) → Microservices</p>
            </CaseStudySection>

            <CaseStudySection title="Impact" >
                <List
                    items={[
                        "40% reduction in API calls",
                        "30% faster page load",
                        "Improved developer productivity via reusable queries",
                    ]}
                />
            </CaseStudySection>

            <CaseStudySection title="Leadership" >
                <p>
                    Led a team of 5–7 engineers, drove architecture decisions, and aligned
                    frontend and backend teams on API design.
                </p>
            </CaseStudySection>

            <CaseStudySection title="Challenges" >
                <List
                    items={[
                        "Initial resistance to introducing BFF layer",
                        "Schema design complexity",
                        "Managing breaking changes across teams",
                    ]}
                />
            </CaseStudySection>

            <CaseStudySection title="What I’d Do Differently" >
                <p>
                    Introduce schema governance earlier and invest in better observability
                    for query performance.
                </p>
            </CaseStudySection>
            </div>
        </main>
    );
}