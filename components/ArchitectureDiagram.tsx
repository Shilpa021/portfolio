export default function ArchitectureDiagram() {
    return (
        <div className="border border-gray-800 rounded-xl p-6 mt-6">
            <div className="flex justify-between text-center text-sm text-gray-300">

                <div>
                    <p className="font-semibold">Frontend</p>
                    <p>React</p>
                </div>

                <span>→</span>

                <div>
                    <p className="font-semibold">BFF</p>
                    <p>GraphQL (Fastify)</p>
                </div>

                <span>→</span>

                <div>
                    <p className="font-semibold">Services</p>
                    <p>Microservices</p>
                </div>

            </div>
        </div>
    );
}