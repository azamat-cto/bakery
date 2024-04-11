import Image from "next/image";

import AboutBread from "@/assets/images/about-bread.png";
import Bread2 from "@/assets/images/bread-2.png";
import { Button } from "@/components/ui/button";

function About() {
    return (
        <section className="pb-4 pt-20">
            <div className="container">
                <div className="grid gap-y-16">
                    <div className="relative text-center">
                        <h2 className="mb-6 font-display text-4xl">About Us</h2>
                        <p className="mb-12">
                            We prepare all types of bread that are made at home,
                            maintaining the tradition of using only the best
                            ingredients made with local products whenever
                            possible. We have an extensive line of freshly
                            prepared bakery and coffee products.
                        </p>
                        <Button className="h-12 rounded-none text-accent-foreground">
                            Know More
                        </Button>
                        <Image
                            className="absolute bottom-0 right-0 w-[60px]"
                            src={Bread2}
                            alt="Bread"
                            width={340}
                            height={390}
                            priority
                        />
                    </div>

                    <Image
                        className="w-[320px] justify-self-center"
                        src={AboutBread}
                        alt="Bread"
                        width={800}
                        height={1000}
                        priority
                    />
                </div>
            </div>
        </section>
    );
}

export default About;
