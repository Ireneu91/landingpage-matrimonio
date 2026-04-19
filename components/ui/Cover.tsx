'use client'

import { useEffect, useState } from "react";
import { Countdown } from "@/components/ui/Countdown";
import Image from "next/image";

type props = {
    title: string;
    subtitle: string;
    data?: Date;
}

export function Cover({ title, subtitle, data }: props) {
    const [formattedData, setFormattedData] = useState("");

    useEffect(() => {
        const current = data ?? new Date();
        setFormattedData(current.toLocaleDateString("it-IT", {}));
    }, [data]);

    return (
        <div className="h-screen flex items-center justify-center relative">
            {/* <Image alt="eccoci" src="/assets/countdown.png" className="absolute inset-0 w-full h-full" /> */}

            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <span>{formattedData}</span>
            <Countdown />
        </div>
    )
}