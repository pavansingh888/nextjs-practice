"use client";
import { useRouter } from "next/navigation";
import { startTransition } from "react";
//this component acts as an error boundary our page.tsx file.
export default function ErrorBoundary({ error, reset }: { error: Error, reset: () => void; }) {
    const router = useRouter();
    const reload = () => {
        startTransition(() => {
            router.refresh();
            reset();
        });
    }
    return (
        <div>
            <h2>Something went wrong in review Id:</h2>
            <p>{error.message}</p>
            <button onClick={reload}>Try again</button>
        </div>
    );
}