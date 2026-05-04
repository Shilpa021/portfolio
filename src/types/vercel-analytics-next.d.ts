declare module "@vercel/analytics/next" {
  import type { ReactNode } from "react";

  export type BeforeSendEvent =
    | { type: "pageview"; url: string }
    | { type: "event"; url: string };

  export type BeforeSend = (
    event: BeforeSendEvent
  ) => BeforeSendEvent | null;

  export interface AnalyticsProps {
    beforeSend?: BeforeSend;
    debug?: boolean;
    mode?: "auto" | "development" | "production";
    scriptSrc?: string;
    dsn?: string;
    eventEndpoint?: string;
    viewEndpoint?: string;
    sessionEndpoint?: string;
    endpoint?: string;
  }

  export function Analytics(props: AnalyticsProps): ReactNode;
}
