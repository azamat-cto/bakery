import Image from "next/image";

import FavoriteBread1 from "@/assets/images/favorite-bread-1.png";
import FavoriteBread2 from "@/assets/images/favorite-bread-2.png";
import FavoriteBread3 from "@/assets/images/favorite-bread-3.png";
import FavoriteBread4 from "@/assets/images/favorite-bread-4.png";
import FavoriteBread5 from "@/assets/images/favorite-bread-5.png";
import IconAddLine from "@/components/icons/line/IconAddLine";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

const items = [
    {
        id: "rye",
        title: "Rye",
        description: "Bread",
        image: FavoriteBread1,
        price: 8.0,
    },
    {
        id: "wheat",
        title: "Wheat",
        description: "Bread",
        image: FavoriteBread2,
        price: 3.0,
    },
    {
        id: "multigrain",
        title: "Multigrain",
        description: "Bread",
        image: FavoriteBread3,
        price: 5.0,
    },
    {
        id: "sourdough",
        title: "Sourdough",
        description: "Bread",
        image: FavoriteBread4,
        price: 7.0,
    },
    {
        id: "french",
        title: "French",
        description: "Bread",
        image: FavoriteBread5,
        price: 3.0,
    },
];

function Favorites() {
    return (
        <section className="pb-4 pt-20">
            <div className="container">
                <h2 className="mb-6 text-center font-display text-4xl">
                    Customer Favorites
                </h2>

                <div className="grid grid-cols-2 gap-x-6 gap-y-16 pt-14">
                    {items.map((item) => (
                        <Card
                            className="relative border-2 border-transparent pb-5 pt-24 transition-all hover:border-primary"
                            key={item.id}
                        >
                            <CardHeader className="py-0">
                                <CardTitle className="font-display text-xl text-primary">
                                    {item.title}
                                </CardTitle>
                                <CardDescription className="mb-3">
                                    {item.description}
                                </CardDescription>
                                <p className="font-display">
                                    ${item.price.toFixed(2)}
                                </p>
                            </CardHeader>
                            <Image
                                className="absolute inset-x-0 -top-8 mx-auto my-0 w-[120px]"
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

export default Favorites;
