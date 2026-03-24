import { CaseStudy } from "@/types/caseStudy";

export const caseStudies = {
    prm: {
        title: "Scaling a Frontend Platform with GraphQL BFF",
        subtitle:
            "Led frontend architecture for Tata Play PRM platform serving sales and service workflows across thousands of users.",

        sections: [
            {
                title: "Context",
                content:
                    "The system relied on multiple backend services, leading to fragmented data fetching, over-fetching, and inconsistent UI performance.",
            },
            {
                title: "Core Problems",
                list: [
                    "Redundant API calls across screens",
                    "High latency due to multiple network round trips",
                    "Tight coupling between frontend and backend APIs",
                ],
            },
            {
                title: "Key Decisions",
                list: [
                    "Introduced GraphQL BFF for aggregation",
                    "Designed query-driven data model",
                    "Implemented caching at BFF layer",
                ],
            },
            {
                title: "Tradeoffs",
                list: [
                    "Added complexity in backend layer",
                    "Required schema governance",
                    "Improved frontend velocity significantly",
                ],
            },
            {
                title: "Architecture",
                content: "React UI → GraphQL BFF (Fastify) → Microservices",
            },
            {
                title: "Impact",
                list: [
                    "40% reduction in API calls",
                    "30% faster page load",
                    "Improved developer productivity",
                ],
            },
            {
                title: "Leadership",
                content:
                    "Led a team of 5–7 engineers, drove architecture decisions, and aligned frontend and backend teams.",
            },
            {
                title: "Challenges",
                list: [
                    "Initial resistance to introducing BFF layer",
                    "Schema design complexity",
                    "Deciding between Express or Fastify",
                ],
            },
            {
                title: "What I’d Do Differently",
                content:
                    "Introduce schema governance earlier and invest in better observability.",
            },
        ],
    },
    cdn: {
        title: "Building a Scalable CDN Management Platform",
        subtitle:
            'Developed a frontend platform for managing CDN configurations,analytics, and deployments data while focusing on reusable architecture and consistency across internal tools.',
        sections: [
            {
                title: "Context",
                content: " Multiple internal tools required similar UI components such as dashboards, charts, configuration panels, and analytics views. However, each tool was being built independently, leading to duplication and inconsistent user experience."
            },
            {
                title: "Core Problems",
                list: [
                    "Repeated UI development across multiple internal tools",
                    "Lack of reusable components and shared architecture",
                    "Inconsistent charting and dashboard experiences",
                    "Slower development cycles due to duplicated work"
                ],
            },
            {
                title: "My Role",
                list: [
                    "Led the core frontend development team building the CDN Manager UI",
                    "Designed reusable UI modules used across multiple internal tools",
                    "Implemented dashboards and analytics using Recharts",
                    "Improved consistency and reduced duplicate development efforts",
                ],
            },
            {
                title: "Key Solutions",
                list: [
                    "Built reusable UI modules reused across 3+ internal tools",
                    "Created shared components for charts, tables, and configuration panels",
                    "Standardized dashboard layouts for consistency across tools",
                    "Optimized component structure for maintainability and scalability",
                ],
            },
            {
                title: "Architecture & Stack",
                content: " React → Reusable Component Library → Recharts for analytics → Modular UI architecture reused across multiple internal platforms",
            },
            {
                title: "Impact",
                list: [
                    "Reusable UI modules adopted across 3+ internal tools",
                    "Reduced development effort through shared components",
                    "Improved consistency across dashboards and analytics screens",
                    "Faster development cycles due to reusable architecture",
                ],
            },
            {
                title: "Leadership",
                content:
                    "Led a team of 4 engineers, drove architecture decisions, and aligned frontend and backend teams.",
            },
            {
                title: "Challenges",
                list: [
                    "Initial resistance to introducing BFF layer",
                    "Schema design complexity",
                    "Managing breaking changes across teams",
                ],
            },
            {
                title: "Key Learnings",
                content:
                    "Investing in reusable UI architecture early can significantly accelerate development across multiple products. Building shared modules not only improves efficiency but also ensure consistency and long-term maintainability.",
            },
        ],
    },
    ulta: {
        title: "Improving React Performance at Scale",
        subtitle: "Part of the core frontend development team, working on a large-scale e-commerce platform to improve rendering performance, maintainability, and overall user experience.",
        sections: [
            {
                title: "Context",
                content: "The application had grown significantly in complexity, with deeply nested component trees and frequent state updates causing performance bottlenecks. This directly impacted user experience, especially on high-traffic pages."
            },
            {
                title: "Core Problems",
                list: [
                    "Excessive re-renders due to poor component isolation",
                    "Inefficient state management across shared components",
                    "Heavy UI components impacting load and interaction time",
                    "Limited visibility into rendering performance issues",
                ],
            },
            {
                title: "My Role",
                list: [
                    "Part of the core frontend team building and scaling the UI",
                    "Integrated GraphQL on the frontend for efficient data fetching",
                    "Developed modular UI using SCSS for maintainable styling",
                    "Implemented unit and component tests using Jest and Enzyme",
                ],
            },
            {
                title: "Key Solutions",
                list: [
                    "Introduced memoization (React.memo, useMemo, useCallback) to reduce unnecessary renders",
                    "Refactored large components into smaller, reusable units",
                    "Optimized prop handling and state updates to minimize reflows",
                    "Improved component structure for better separation of concerns",
                ],
            },
            {
                title: "Architecture",
                content: "React → GraphQL (data layer) → SCSS-based styling → Testing with Jest & Enzyme",
            },
            {
                title: "Impact",
                list: [
                    "Improved React rendering performance by ~25%",
                    "Reduced unnecessary re-renders across key user flows",
                    "Enhanced maintainability through modular component design",
                    "Improved confidence in releases with better test coverage",
                ],
            },
            {
                title: "Key Learnings",
                content:
                    "Performance optimization in React is not just about tools, but about thoughtful component design. Small inefficiencies at scale can compound quickly, and systematic refactoring can unlock significant gains.",
            },
        ],
    },
    tv: {
        title: "Building for Low-Memory Smart TVs OTT app",
        subtitle: "Delivered Smart TV applications optimized for constrained environments, focusing on performance, navigation, and real-world usage at scale.",
        sections: [
            {
                title: "Context",
                content: "Smart TV platforms operate under strict memory and processing constraints, with users navigating via remote controls instead of touch. Ensuring smooth performance while maintaining usability across thousands of active devices was critical."
            },
            {
                title: "Core Problems",
                list: [
                    "Severely limited memory and CPU capabilities",
                    "Non-traditional navigation using remote (no touch)",
                    "Frequent re-renders causing UI lag and crashes",
                    "Inconsistent performance across device variants",
                ],
            },
            {
                title: "Key Solutions",
                list: [
                    "Optimized rendering using memoization and component splitting",
                    "Implemented spatial navigation for seamless remote-based UX",
                    "Reduced unnecessary re-renders and improved state management",
                    "Built lightweight, reusable UI components tailored for TV platforms",
                ],
            },
            // {
            //     title: "Tradeoffs",
            //     list: [
            //         "Added complexity in backend layer",
            //         "Required schema governance",
            //         "Improved frontend velocity significantly",
            //     ],
            // },
            {
                title: "User Insights & Analytics",
                content: "Integrated Mixpanel to track user behaviour across thousands of active devices, enabling data-driven decisions around navigation patterns, feature usage, and performance bottlenecks."
            },
            {
                title: "Architecture",
                content: "React-based TV UI → Optimized state management → Lightweight APIs → Analytics via Mixpanel",
            },
            {
                title: "Impact",
                list: [
                    "Smooth and consistent performance across thousands of active devices",
                    "Significant reduction in UI lag and crashes",
                    "Improved navigation experience using spatial interaction patterns",
                    "Data-driven improvements using real user behaviour insights",
                ],
            },


            {
                title: "What I’d Do Differently",
                content:
                    "Building for constrained environments requires a shift in mindset — prioritizing performance, minimizing complexity, and designing specifically for the platform rather than reusing web paradigms.",
            },
        ],
    },
} as const;

export type CaseStudyKey = keyof typeof caseStudies;