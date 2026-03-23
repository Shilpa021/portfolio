// export default function PRM() {
//     return (
//         <main className="px-6 py-16 max-w-3xl mx-auto">

// import Section from "../../../../components/Section";

//             <h1 className="text-3xl font-bold mb-6">
//                 Scaling a Frontend Platform with GraphQL BFF
//             </h1>

//             <p className="text-gray-400 mb-6">
//                 Led frontend architecture for Tata Play PRM platform serving sales and
//                 service workflows across thousands of users.
//             </p>

//             {/* Context */}
//             <h2 className="text-xl font-semibold mt-8">Context</h2>
//             <p className="text-gray-400">
//                 The system relied on multiple backend services, leading to fragmented
//                 data fetching, over-fetching, and inconsistent UI performance.
//             </p>

//             {/* Problem */}
//             <h2 className="text-xl font-semibold mt-6">Core Problems</h2>
//             <ul className="list-disc ml-6 text-gray-400">
//                 <li>Redundant API calls across screens</li>
//                 <li>High latency due to multiple network round trips</li>
//                 <li>Tight coupling between frontend and backend APIs</li>
//             </ul>

//             {/* Decision */}
//             <h2 className="text-xl font-semibold mt-6">Key Decisions</h2>
//             <ul className="list-disc ml-6 text-gray-400">
//                 <li>Introduced GraphQL BFF for aggregation</li>
//                 <li>Designed query-driven data model</li>
//                 <li>Implemented caching at BFF layer</li>
//             </ul>

//             {/* Tradeoffs */}
//             <h2 className="text-xl font-semibold mt-6">Tradeoffs</h2>
//             <ul className="list-disc ml-6 text-gray-400">
//                 <li>Added complexity in backend layer</li>
//                 <li>Required schema governance</li>
//                 <li>Improved frontend velocity significantly</li>
//             </ul>

//             {/* Architecture */}
//             <h2 className="text-xl font-semibold mt-6">Architecture</h2>
//             <p className="text-gray-400">
//                 React UI → GraphQL BFF (Fastify) → Microservices
//             </p>

//             {/* Impact */}
//             <h2 className="text-xl font-semibold mt-6">Impact</h2>
//             <ul className="list-disc ml-6 text-gray-400">
//                 <li>40% reduction in API calls</li>
//                 <li>30% faster page load</li>
//                 <li>Improved developer productivity via reusable queries</li>
//             </ul>

//             {/* Leadership */}
//             <h2 className="text-xl font-semibold mt-6">Leadership</h2>
//             <p className="text-gray-400">
//                 Led a team of 5–7 engineers, drove architecture decisions, and aligned
//                 frontend and backend teams on API design.
//             </p>

//             <h2 className="text-xl font-semibold mt-6">Challenges</h2>
//             <ul className="list-disc ml-6 text-gray-400">
//                 <li>Initial resistance to introducing BFF layer</li>
//                 <li>Schema design complexity</li>
//                 <li>Managing breaking changes across teams</li>
//             </ul>

//             <h2 className="text-xl font-semibold mt-6">What I’d Do Differently</h2>
//             <p className="text-gray-400">
//                 Introduce schema governance earlier and invest in better observability
//                 for query performance.
//             </p>

//         </main>
//     );
// }


const Section = ({ title, children }: any) => (
    <section className="case-study-section">
        <h2 className="text-xl font-semibold mb-3 text-amber-50">{title}</h2>
        {children}
    </section>
);

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

            <Section title="Context" >
                <p>
                    The system relied on multiple backend services, leading to fragmented
                    data fetching, over-fetching, and inconsistent UI performance.
                </p>
            </Section>

            <Section title="Core Problems" >
                <List
                    items={[
                        "Redundant API calls across screens",
                        "High latency due to multiple network round trips",
                        "Tight coupling between frontend and backend APIs",
                    ]}
                />
            </Section>

            <Section title="Key Decisions">
                <List
                    items={[
                        "Introduced GraphQL BFF for aggregation",
                        "Designed query-driven data model",
                        "Implemented caching at BFF layer",
                    ]}
                />
            </Section>

            <Section title="Tradeoffs" >
                <List
                    items={[
                        "Added complexity in backend layer",
                        "Required schema governance",
                        "Improved frontend velocity significantly",
                    ]}
                />
            </Section>

            <Section title="Architecture" >
                <p>React UI → GraphQL BFF (Fastify) → Microservices</p>
            </Section>

            <Section title="Impact" >
                <List
                    items={[
                        "40% reduction in API calls",
                        "30% faster page load",
                        "Improved developer productivity via reusable queries",
                    ]}
                />
            </Section>

            <Section title="Leadership" >
                <p>
                    Led a team of 5–7 engineers, drove architecture decisions, and aligned
                    frontend and backend teams on API design.
                </p>
            </Section>

            <Section title="Challenges" >
                <List
                    items={[
                        "Initial resistance to introducing BFF layer",
                        "Schema design complexity",
                        "Managing breaking changes across teams",
                    ]}
                />
            </Section>

            <Section title="What I’d Do Differently" >
                <p>
                    Introduce schema governance earlier and invest in better observability
                    for query performance.
                </p>
            </Section>
            </div>
        </main>
    );
}