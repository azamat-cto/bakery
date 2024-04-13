import Image from "next/image";
import Link from "next/link";

import Bread1 from "@/assets/images/bread-1.png";
import HomeBg from "@/assets/images/home-bg.jpg";
import HomeBread from "@/assets/images/home-bread.png";
import IconFacebookCircleLine from "@/components/icons/line/IconFacebookCircleLine";
import IconInstagramLine from "@/components/icons/line/IconInstagramLine";
import IconMapPinLine from "@/components/icons/line/IconMapPinLine";
import IconYouTubeLine from "@/components/icons/line/IconYouTubeLine";
import { Button } from "@/components/ui/button";

function Home() {
    return (
        <section className="relative pb-4 pt-[6.5rem] lg:pb-8 lg:pt-28">
            <Image
                className="absolute inset-0 -z-10 size-full object-cover object-center"
                src={HomeBg}
                alt="Home background wallpaper"
                width={2000}
                height={1333}
            />
            <div className="absolute left-0 top-0 -z-10 size-full bg-gradient-mask" />

            <div className="container relative">
                <div className="grid gap-y-8 xs:grid-cols-[350px] xs:justify-center md:grid-cols-[repeat(2,350px)] md:items-center lg:grid-cols-[420px,520px] lg:gap-x-12 xl:grid-cols-[470px,550px]">
                    <div className="relative text-center md:text-start">
                        <h1 className="mb-6 font-display text-4xl text-white xs:text-5xl lg:mb-8 lg:text-7xl">
                            Select The Best <br /> Quality Breads
                        </h1>
                        <Button className="h-12 rounded-none text-accent-foreground">
                            Select Breads
                        </Button>
                        <Image
                            className="absolute left-16 top-52 w-14 2xs:top-60 lg:left-72 lg:w-[80px]"
                            src={Bread1}
                            alt="Croissant"
                            width={200}
                            height={205}
                        />
                    </div>

                    <div className="max-w-[400px] rotate-[15deg] justify-self-center lg:max-w-[initial]">
                        <Image
                            src={HomeBread}
                            alt="Crusty bread on wooden board with wheat seeds"
                            width={886}
                            height={1126}
                        />
                    </div>

                    <div className="flex flex-col items-center gap-y-8 xs:flex-row xs:justify-between xs:gap-y-0 md:col-start-1 md:col-end-3">
                        <Link
                            className="flex items-center gap-x-2"
                            href="/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <IconMapPinLine className="text-2xl text-primary lg:text-4xl" />
                            <span className="text-sm text-heading lg:text-base">
                                AV. The Sun #321 <br /> Lima Peru
                            </span>
                        </Link>

                        <ul className="flex items-center gap-x-4 lg:gap-x-6">
                            <li>
                                <Link
                                    className="text-2xl text-heading transition-colors hover:text-primary"
                                    href="https://www.facebook.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <IconFacebookCircleLine />
                                </Link>
                            </li>

                            <li>
                                <Link
                                    className="text-2xl text-heading transition-colors hover:text-primary"
                                    href="https://www.instagram.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <IconInstagramLine />
                                </Link>
                            </li>

                            <li>
                                <Link
                                    className="text-2xl text-heading transition-colors hover:text-primary"
                                    href="https://www.youtube.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <IconYouTubeLine />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;
