export default function PRM() {
    return (
        <main className="px-6 py-16 max-w-3xl mx-auto">

            <h1 className="text-3xl font-bold mb-6">
                Scaling a Frontend Platform with GraphQL BFF
            </h1>

            <p className="text-gray-400 mb-6">
                Led frontend architecture for Tata Play PRM platform serving sales and
                service workflows across thousands of users.
            </p>

            {/* Context */}
            <h2 className="text-xl font-semibold mt-8">Context</h2>
            <p className="text-gray-400">
                The system relied on multiple backend services, leading to fragmented
                data fetching, over-fetching, and inconsistent UI performance.
            </p>

            {/* Problem */}
            <h2 className="text-xl font-semibold mt-6">Core Problems</h2>
            <ul className="list-disc ml-6 text-gray-400">
                <li>Redundant API calls across screens</li>
                <li>High latency due to multiple network round trips</li>
                <li>Tight coupling between frontend and backend APIs</li>
            </ul>

            {/* Decision */}
            <h2 className="text-xl font-semibold mt-6">Key Decisions</h2>
            <ul className="list-disc ml-6 text-gray-400">
                <li>Introduced GraphQL BFF for aggregation</li>
                <li>Designed query-driven data model</li>
                <li>Implemented caching at BFF layer</li>
            </ul>

            {/* Tradeoffs */}
            <h2 className="text-xl font-semibold mt-6">Tradeoffs</h2>
            <ul className="list-disc ml-6 text-gray-400">
                <li>Added complexity in backend layer</li>
                <li>Required schema governance</li>
                <li>Improved frontend velocity significantly</li>
            </ul>

            {/* Architecture */}
            <h2 className="text-xl font-semibold mt-6">Architecture</h2>
            <p className="text-gray-400">
                React UI → GraphQL BFF (Fastify) → Microservices
            </p>

            {/* Impact */}
            <h2 className="text-xl font-semibold mt-6">Impact</h2>
            <ul className="list-disc ml-6 text-gray-400">
                <li>40% reduction in API calls</li>
                <li>30% faster page load</li>
                <li>Improved developer productivity via reusable queries</li>
            </ul>

            {/* Leadership */}
            <h2 className="text-xl font-semibold mt-6">Leadership</h2>
            <p className="text-gray-400">
                Led a team of 5–7 engineers, drove architecture decisions, and aligned
                frontend and backend teams on API design.
            </p>

            <h2 className="text-xl font-semibold mt-6">Challenges</h2>
<ul className="list-disc ml-6 text-gray-400">
  <li>Initial resistance to introducing BFF layer</li>
  <li>Schema design complexity</li>
  <li>Managing breaking changes across teams</li>
</ul>

<h2 className="text-xl font-semibold mt-6">What I’d Do Differently</h2>
<p className="text-gray-400">
  Introduce schema governance earlier and invest in better observability
  for query performance.
</p>

        </main>
    );
}