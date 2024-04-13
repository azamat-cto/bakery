import Image from "next/image";
import Link from "next/link";

import VisitBg from "@/assets/images/visit-bg.jpg";

import { Button } from "./ui/button";

function VisitSection() {
    return (
        <section className="relative pb-4 pt-20 lg:pt-36">
            <Image
                className="absolute inset-0 -z-10 size-full object-cover object-center"
                src={VisitBg}
                alt=""
                width={2000}
                height={1000}
            />
            <div className="absolute left-0 top-0 -z-10 size-full bg-gradient-mask2" />

            <div className="container">
                <div className="grid py-12 xs:grid-cols-[400px] xs:justify-center">
                    <div className="text-center">
                        <h2 className="mb-6 text-center font-display text-4xl text-heading">
                            Visit Our Store
                        </h2>
                        <p className="mb-12 text-xl text-heading">
                            Discover the best bread, we look forward to your
                            visit
                        </p>
                        <Button
                            className="h-12 rounded-none text-accent-foreground"
                            asChild
                        >
                            <Link
                                href="/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                See Location
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default VisitSection;
