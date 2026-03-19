export default function TV() {
    return (
        <main className="px-6 py-16 max-w-3xl mx-auto">

            <h1 className="text-3xl font-bold mb-6">
                Building for Low-Memory Smart TVs
            </h1>

            <h2 className="text-xl font-semibold">Challenge</h2>
            <p className="text-gray-400">
                Devices had strict memory + navigation constraints.
            </p>

            <h2 className="text-xl font-semibold mt-6">Solution</h2>
            <ul className="list-disc ml-6 text-gray-400">
                <li>Optimized rendering</li>
                <li>Implemented spatial navigation</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6">Impact</h2>
            <p className="text-gray-400">
                Smooth performance across thousands of active devices.
            </p>

        </main>
    );
}