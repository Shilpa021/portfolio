export default function Ulta() {
    return (
        <main className="px-6 py-16 max-w-3xl mx-auto">

            <h1 className="text-3xl font-bold mb-6">
                Improving React Performance at Scale
            </h1>

            <h2 className="text-xl font-semibold">Problem</h2>
            <p className="text-gray-400">
                Slow rendering due to unnecessary re-renders.
            </p>

            <h2 className="text-xl font-semibold mt-6">Solution</h2>
            <ul className="list-disc ml-6 text-gray-400">
                <li>Memoization</li>
                <li>Component refactoring</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6">Impact</h2>
            <p className="text-gray-400">
                25% faster rendering performance.
            </p>

        </main>
    );
}