import Image from "next/image";

import NewBread1 from "@/assets/images/new-bread-1.png";
import NewBread2 from "@/assets/images/new-bread-2.jpg";
import NewBread3 from "@/assets/images/new-bread-3.png";
import NewBread4 from "@/assets/images/new-bread-4.jpg";
import NewBread5 from "@/assets/images/new-bread-5.png";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/cn";

const items = [
    {
        id: "rye-bread",
        title: "Rye Bread",
        description:
            "Baked with healthy, gluten-free sourdough for good nutrition",
        image: NewBread1,
    },
    {
        id: "multigrain-bread",
        title: "Multigrain Bread",
        description:
            "Tasty and made with different natural grains from the countryside",
        image: NewBread5,
    },
    {
        id: "grain-bread",
        title: "Whole Grain Bread",
        description:
            "Crispy and homemade prepared from organic yeast-free flour",
        image: NewBread3,
    },
    {
        id: "salinata-classic",
        title: "Salinata Classic",
        description:
            "100% rye bread with thermophilic sourdough with applesauce and passion fruit flavors",
        image: NewBread4,
    },
    {
        id: "salinata-prunes",
        title: "Salinata Prunes",
        description:
            "100% rye bread with thermophilic sourdough flavored with applesauce and passion fruit, with prunes",
        image: NewBread2,
    },
];

function News() {
    return (
        <section className="pb-4 pt-20">
            <div className="container">
                <h2 className="mb-6 text-center font-display text-4xl">
                    New Breads
                </h2>

                <div className="grid gap-y-8 pt-6 lg:pt-16">
                    <div className="grid gap-8 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-[repeat(3,1fr)]">
                        {items.map((item, index) => (
                            <Card
                                className="flex grid-cols-subgrid flex-col items-center border-none text-center xs:flex-row xs:text-start sm:flex-col sm:justify-between lg:text-center"
                                key={item.id}
                            >
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
                        ))}
                    </div>

                    <Button className="mx-auto h-12 rounded-none text-accent-foreground">
                        See More
                    </Button>
                </div>
            </div>
        </section>
    );
}

export default News;
