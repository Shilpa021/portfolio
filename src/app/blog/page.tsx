export default function Blog() {
    return (
        <main className="px-6 py-16 max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">Writing</h1>

            <div className="space-y-6">

                <div>
                    <h2 className="text-xl font-semibold">
                        How I Design Scalable Frontend Systems
                    </h2>
                    <p className="text-gray-400">
                        A practical approach to frontend architecture at scale.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-semibold">
                        When to Use GraphQL BFF
                    </h2>
                    <p className="text-gray-400">
                        Tradeoffs and real-world lessons from production systems.
                    </p>
                </div>

            </div>
        </main>
    );
}