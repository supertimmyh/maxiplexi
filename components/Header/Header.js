import Link from "next/link";
import Image from "next/legacy/image";
import { SectionContainer } from "@components/Section";
import { Nav } from "@components/Nav";
import { ButtonGroup, Button } from "@components/Button";
import { Icon } from "@iconify/react";

export const Header = () => {
    return (
        <header
            id="header"
            className="header fixed left-0 w-full z-30 top-0 bg-white backdrop-filter backdrop-blur-md bg-opacity-50"
        >
            <SectionContainer className="header--container wrap wrap-px ">
                <div className="header-logo--container">
                    <h1 className="logo mb-0">
                        <Link href="/">
                            <Image
                                src="/maxiplexi-logo.png"
                                alt="logo"
                                className="h-6 w-auto"
                                height="100"
                                width="100"
                                priority
                            />
                        </Link>
                    </h1>
                </div>
                <SectionContainer className="flex items-center ml-auto">
                    <Nav />
                    <ButtonGroup className="hidden md:block">
                        <a
                            role="button"
                            to="#signup"
                            href="/#signup"
                            className="btn btn--secondary ml-4"
                        >
                            Sign Me Up
                        </a>
                    </ButtonGroup>
                </SectionContainer>
            </SectionContainer>
        </header>
    );
};
