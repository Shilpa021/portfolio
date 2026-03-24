import React from 'react'

type SectionProps = {
    title?: string;
    children: React.ReactNode;
    headerClass?: string
    sectionClass?: string
};

function CaseStudySection({ title, children, headerClass, sectionClass }: SectionProps) {
    return (
        <div>
            <section className="case-study-section">
                <h2 className="text-xl font-semibold mb-3 text-amber-50">{title}</h2>
                {children}
            </section>
        </div>
    )
}

export default CaseStudySection
