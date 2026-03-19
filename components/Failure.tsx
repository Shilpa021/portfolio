export default function Failure() {
    return (
        <section className="section">
            <h2 className="text-2xl font-semibold mb-6">
                A Mistake That Changed How I Build
            </h2>

            <p className="text-gray-400 max-w-2xl">
                Early in my leadership journey, I tightly coupled frontend
                with backend APIs. This led to frequent breakages and slowed
                development.
            </p>

            <p className="text-gray-400 mt-4 max-w-2xl">
                This experience pushed me to design decoupled systems using
                GraphQL BFF, improving both performance and developer velocity.
            </p>
        </section>
    );
}