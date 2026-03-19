type Props = {
    title: string;
    children: React.ReactNode;
};

export default function Section({ title, children }: Props) {
    return (
        <section className="section">
            <h2 className="text-2xl font-semibold mb-8">{title}</h2>
            {children}
        </section>
    );
}