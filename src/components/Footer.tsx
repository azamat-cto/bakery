import Image from "next/image";
import Link from "next/link";

import Bread3 from "@/assets/images/bread-3.png";
import Bread4 from "@/assets/images/bread-4.png";

import IconFacebookCircleLine from "./icons/line/IconFacebookCircleLine";
import IconInstagramLine from "./icons/line/IconInstagramLine";
import IconYouTubeLine from "./icons/line/IconYouTubeLine";

function Footer() {
    return (
        <footer className="pb-8 pt-12">
            <div className="container relative">
                <div className="grid gap-y-16">
                    <div>
                        <Link
                            className="mb-2 inline-block font-display text-xl text-primary transition-colors hover:text-primary-alt"
                            href="/"
                        >
                            Bakery
                        </Link>
                        <p>
                            We make the best bread <br /> in the city
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-x-8 gap-y-16">
                        <div>
                            <h3 className="mb-5">Address</h3>

                            <ul className="grid gap-y-3">
                                <li>
                                    <address>
                                        <Link
                                            href="/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            AV. The Sun #321 <br /> Lima Peru
                                        </Link>
                                    </address>
                                </li>
                                <li>9AM - 11PM</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="mb-5">Contact Me</h3>

                            <ul className="grid gap-y-3">
                                <li>
                                    <Link href="mailto:bakery@email.com">
                                        bakery@email.com
                                    </Link>
                                </li>
                                <li>
                                    <Link href="tel:+00987654321">
                                        +00 987 654 321
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="mb-5">Follow Us</h3>

                            <ul className="flex items-center gap-x-4">
                                <li>
                                    <Link
                                        className="text-2xl text-foreground transition-colors hover:text-primary"
                                        href="https://www.facebook.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <IconFacebookCircleLine />
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-2xl text-foreground transition-colors hover:text-primary"
                                        href="https://www.instagram.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <IconInstagramLine />
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-2xl text-foreground transition-colors hover:text-primary"
                                        href="https://www.youtube.com/"
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

                <Image
                    className="absolute right-6 top-10 w-[60px]"
                    src={Bread4}
                    alt="Bread"
                    width={286}
                    height={281}
                />
                <Image
                    className="absolute left-36 top-72 w-[70px]"
                    src={Bread3}
                    alt="Bread"
                    width={226}
                    height={191}
                />
            </div>

            <div className="mt-24 text-center text-sm">
                &#169; {new Date().getFullYear()} All rights reserved by Bakery
            </div>
        </footer>
    );
}

export default Footer;
