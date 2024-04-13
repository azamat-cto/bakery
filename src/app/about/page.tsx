import Image from "next/image";

import AboutBread from "@/assets/images/about-bread.png";
import Bread2 from "@/assets/images/bread-2.png";
import { Button } from "@/components/ui/button";

function About() {
    return (
        <section className="pb-4 pt-20">
            <div className="container">
                <div className="grid gap-y-16 sm:grid-cols-[480px] sm:justify-center md:grid-cols-[repeat(2,350px)] md:items-center md:gap-x-8 lg:grid-cols-[450px,430px] lg:gap-x-28">
                    <div className="relative text-center md:order-1 md:text-start">
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
                            className="absolute bottom-0 right-0 w-[60px] lg:-bottom-12 lg:right-16 lg:w-[90px]"
                            src={Bread2}
                            alt="Bread"
                            width={340}
                            height={390}
                            priority
                        />
                    </div>

                    <Image
                        className="max-w-screen-3xs justify-self-center md:w-auto md:justify-self-auto lg:max-w-[450px]"
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
