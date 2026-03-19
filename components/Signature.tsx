export default function Signature() {
    return (
        <section className="section">
            <h2 className="text-2xl font-semibold mb-6">
                What I’m Known For
            </h2>

            <div className="grid gap-4 md:grid-cols-2 text-gray-400">

                <div className="card">
                    <p className="font-medium text-white">
                        Scaling Frontend Architecture
                    </p>
                    <p className="mt-2">
                        Designed systems supporting 100K+ users with performance
                        and maintainability.
                    </p>
                </div>

                <div className="card">
                    <p className="font-medium text-white">
                        Performance Optimization
                    </p>
                    <p className="mt-2">
                        Consistently improved load times by 25–30% across projects.
                    </p>
                </div>

                <div className="card">
                    <p className="font-medium text-white">
                        GraphQL BFF Systems
                    </p>
                    <p className="mt-2">
                        Reduced API complexity and improved frontend velocity.
                    </p>
                </div>

                <div className="card">
                    <p className="font-medium text-white">
                        Team Leadership
                    </p>
                    <p className="mt-2">
                        Mentored engineers and improved delivery efficiency.
                    </p>
                </div>

            </div>
        </section>
    );
}