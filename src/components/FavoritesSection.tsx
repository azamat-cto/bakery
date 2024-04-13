"use client";

import Image from "next/image";

import IconAddLine from "@/components/icons/line/IconAddLine";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { useSectionInView } from "@/hooks/useSectionInView";
import { items } from "@/lib/constants";

function FavoritesSection() {
    const { ref } = useSectionInView("favorites", 0.75);

    return (
        <section className="pb-4 pt-20" id="favorites" ref={ref}>
            <div className="container">
                <h2 className="mb-6 text-center font-display text-4xl">
                    Customer Favorites
                </h2>

                <div className="grid grid-cols-[180px] justify-center gap-x-6 gap-y-16 pt-14 2xs:grid-cols-2 2xs:justify-normal sm:grid-cols-[repeat(2,180px)] sm:justify-center md:grid-cols-[repeat(3,180px)] lg:grid-cols-[repeat(3,240px)] lg:gap-x-8 lg:gap-y-20 lg:pt-20">
                    {items.map((item) => (
                        <Card
                            className="relative border-2 border-transparent pb-5 pt-24 transition-all hover:border-primary lg:px-6 lg:pb-8 lg:pt-[9.75rem]"
                            key={item.id}
                        >
                            <CardHeader className="py-0">
                                <CardTitle className="font-display text-xl text-primary">
                                    {item.title}
                                </CardTitle>
                                <CardDescription className="mb-3">
                                    {item.description}
                                </CardDescription>
                                <p className="font-display lg:text-[1.25rem]">
                                    ${item.price.toFixed(2)}
                                </p>
                            </CardHeader>
                            <Image
                                className="absolute inset-x-0 -top-8 mx-auto my-0 max-w-[120px] lg:-top-12 lg:max-w-[180px]"
                                src={item.image}
                                alt={item.description}
                                width={400}
                                height={400}
                            />
                            <Button className="absolute bottom-5 right-4 text-xl">
                                <IconAddLine />
                            </Button>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FavoritesSection;
