"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

const HeroSection = () => {
  return <div className="pb-20 px-4">
    <div className="container mx-auto text-center">
        <h1 className="text-5xl md:text-8xl lg:text-[105px] pb-6 gradient-title">Manage Your Finanaces <br/> with Intelligence</h1>
        <p>
            An AI-powered financial management platform that helps you track,
            analyze, and optimize your spending with real-time insights.
        </p>
        <div>
            <Link href="/dashboard">
            <Button size="lg" className="px-8">Get Started</Button>
            </Link>
        </div>
        <div>
            <div>
                <Image src="/banner.jpeg" width={1200} height={720} alt="Dashboard Preview" className="rounded-lg shadow-2xl border mx-auto " priority/>

            </div>
        </div>
    </div>
  </div>
}

export default HeroSection