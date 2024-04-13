"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { useSectionInView } from "@/hooks/useSectionInView";
import { cn } from "@/lib/cn";
import { news } from "@/lib/constants";

function News() {
    const { ref } = useSectionInView("news", 0.75);

    return (
        <section className="pb-4 pt-20" id="news" ref={ref}>
            <div className="container">
                <h2 className="mb-6 text-center font-display text-4xl">
                    New Breads
                </h2>

                <div className="grid gap-y-8 pt-6 lg:pt-16">
                    <div className="grid gap-8 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-[repeat(3,1fr)]">
                        {news.map((item, index) => (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                key={item.id}
                            >
                                <Card className="flex grid-cols-subgrid flex-col items-center border-none text-center xs:flex-row xs:text-start sm:flex-col sm:justify-between lg:text-center">
                                    <CardHeader>
                                        <CardTitle className="mb-2 font-display text-xl text-primary lg:text-4xl">
                                            {item.title}
                                        </CardTitle>
                                        <CardDescription className="text-sm lg:px-6">
                                            {item.description}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent
                                        className={cn(
                                            "xs:p-4 justify-self-center",
                                            index % 2 === 0
                                                ? "xs:-order-1 sm:order-[initial]"
                                                : "",
                                        )}
                                    >
                                        <Image
                                            className="max-w-[160px] lg:max-w-[250px]"
                                            src={item.image}
                                            alt={item.title}
                                            width={650}
                                            height={650}
                                            priority
                                        />
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>

                    <Button className="mx-auto h-12 rounded-none font-semibold">
                        See More
                    </Button>
                </div>
            </div>
        </section>
    );
}

export default News;
