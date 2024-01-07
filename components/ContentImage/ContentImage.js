import { SectionContainer } from "@components/Section";
import { Icon } from "@iconify/react";
import Image from "next/legacy/image";
import { v4 as uuid } from "uuid";

const ContentImageData = [
    {
        id: uuid(),
        title: "Tailored Solutions for Every Home",
        content:
            "MaxiPlexi revolutionizes the ADU selection process by facilitating a chat-based conversation to capture your specific needs, lifestyle, and local architectural preferences. This innovative approach moves away from standard forms, offering you a selection of visually appealing, functional, and seamlessly integrated designs that resonate with your personal style.",
        align: "right",
        image: "/features1.png"
    },
    {
        id: uuid(),
        title: "Your Perfect Match Awaits",
        content:
            "Connect with a vast network of vetted contractors through our AI-driven marketplace. MaxiPlexi evaluates contractors on their history, expertise, and customer satisfaction, providing multiple bids to ensure you find the ideal professional for your project at the best price.",
        align: "left",
        image: "/features2.png"
    },
    {
        id: uuid(),
        title: "Navigating Bureaucracy with Ease",
        content:
            "Tackle the complexities of permit applications effortlessly with MaxiPlexi's meticulous guide. We assist in simplifying the process, helping you fill out forms, gather the right information, and ensure all paperwork is accurately completed. Enjoy a smooth path to construction with our expert support.",
        align: "right",
        image: "/features3.png"
    },
    {
        id: uuid(),
        title: "Knowledge at Your Fingertips",
        content:
            "Empower your ADU project with MaxiPlexi's integrated analysis tools. Gain valuable insights into contracts, market trends, and value analysis. Understand the potential return on investment and explore rental possibilities with confidence, maximizing the financial benefits of your home expansion.",
        align: "left",
        image: "/features4.png"
    }
];

export const ContentImage = () => {
    return (
        <SectionContainer className="process-items mt-16 space-y-16">
            {ContentImageData.map((item) => (
                <div
                    id={item.id}
                    key={item.id}
                    className="process-item--container grid md:grid-cols-2 gap-y-8"
                >
                    <div
                        className={`process-item--image rounded-3xl ${
                            item.align === "left" ? "md:order-1" : ""
                        }`}
                    >
                        <Image
                            src={item.image}
                            width={512}
                            height={512}
                            objectFit="cover"
                            alt="Process Banner 1"
                            className="drop-shadow-xl w-full offset-y-0 offset-x-8 blur-16"
                        />
                    </div>
                    <div
                        className={`process-item--content ${
                            item.align === "left"
                                ? "md:pr-16 lg:pr-24 xl:pr-32 ml-auto"
                                : "md:pl-16 lg:pl-24 xl:pl-32  mr-auto"
                        } my-auto content text-black/60`}
                    >
                        <h3 className="mb-6 h4 md:h3 font-semibold text-black">
                            {item.title}
                        </h3>
                        <p>{item.content}</p>
                        <ul className="process-item--list space-y-3">
                            {item.listItems?.length &&
                                item.listItems.map((listItem) => (
                                    <li
                                        id={listItem.id}
                                        key={listItem.id}
                                        className="inline-grid grid-flow-col-dense"
                                    >
                                        <Icon
                                            icon="ph:seal-check-bold"
                                            className="w-6 h-6 text-secondary-500 mr-2"
                                        />
                                        {listItem.content}
                                    </li>
                                ))}
                        </ul>
                    </div>
                </div>
            ))}
        </SectionContainer>
    );
};
