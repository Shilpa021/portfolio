"use client";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "./ui/dialog";
import { Button } from "@/components/ui/button";

export default function ResumeModal() {
    const resumeView =
        process.env.NEXT_PUBLIC_RESUME_VIEW || "";
    const resumeDownload =
        process.env.NEXT_PUBLIC_RESUME_DOWNLOAD || "";

    return (
        <Dialog>
            <DialogTrigger className="text-sm border px-4 py-1.5 rounded-full bg-inherit hover:bg-white hover:text-black transition">
                Resume
            </DialogTrigger>

            <DialogContent className="max-w-2xl bg-black border border-gray-800 text-white">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-semibold">
                        Resume
                    </DialogTitle>
                </DialogHeader>

                <p className="text-gray-400 mt-2">
                    Frontend Engineer focused on scalable architecture,
                    performance, and building systems that enable teams to move faster.
                </p>

                <div className="mt-6 h-100 border border-gray-800 rounded-lg overflow-hidden">
                    {resumeView ? (
                        <iframe
                            src={resumeView}
                            className="w-full h-full"
                            title="Resume Preview"
                        />
                    ) : (
                        <div className="flex items-center justify-center h-full text-gray-500">
                            Resume preview unavailable
                        </div>
                    )}
                </div>

                <p className="text-xs text-gray-500 mt-2">
                    Having trouble viewing?{" "}
                    <a
                        href={resumeView}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline"
                    >
                        Open in new tab
                    </a>
                </p>

                <div className="mx-auto my-0 mt-8">
                    <a
                        href={resumeDownload}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mx-0 my-auto"
                    >
                        <Button variant="secondary" className={"rounded-lg"}>
                            Download
                        </Button>
                    </a>
                </div>
            </DialogContent>
        </Dialog>
    );
}