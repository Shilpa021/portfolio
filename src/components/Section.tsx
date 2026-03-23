type Props = {
    title?: string;
    children: React.ReactNode;
    id?: string
    headerClass?: string
    sectionClass?: string
};

export default function Section({ title, children, id, headerClass, sectionClass }: Props) {
    return (
        <section className={`section scroll-mt-24${sectionClass}`} id={id}>
            <h2 className={`text-2xl font-semibold mb-8 ${headerClass}`}>{title}</h2>
            {children}
        </section>
    );
}