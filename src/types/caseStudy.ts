export type Section = {
    title: string;
    content?: string;
    list?: string[];
};

export type CaseStudy = {
    title: string;
    subtitle: string;
    sections: Section[];
};