export default function Decisions() {
    return (
        <section className="section">
            <h2 className="text-2xl font-semibold mb-6">
                How I Make Technical Decisions
            </h2>

            <ul className="text-gray-400 space-y-3 max-w-2xl">
                <li>Start with user impact, not technology</li>
                <li>Evaluate tradeoffs (performance vs complexity)</li>
                <li>Optimize for long-term maintainability</li>
                <li>Align with team productivity and scalability</li>
            </ul>
        </section>
    );
}