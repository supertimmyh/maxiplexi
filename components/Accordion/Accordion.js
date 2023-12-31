import { SectionContainer } from "@components/Section";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import clsx from "clsx";

const accordionData = [
    {
        id: uuid(),
        title: "What is MaxiPlexi?",
        isOpen: true,
        content:
            "MaxiPlexi is an AI-driven marketplace designed to streamline the process of building accessory dwelling units (ADUs) by connecting homeowners with qualified contractors and architects. It focuses on matching user's style preferences with professionals who have a track record of similar successful projects."
    },
    {
        id: uuid(),
        title: "How does MaxiPlexi work?",
        isOpen: false,
        content:
            "MaxiPlexi uses AI technology to understand your specific ADU needs and style preferences through an interactive chat-based system. It then matches you with vetted contractors and architects from our network, providing multiple bids for your project."
    },
    {
        id: uuid(),
        title: "MaxiPlexi involved in the construction process?",
        isOpen: false,
        content:
            "Currently MaxiPlexi is not directly involved in the construction. Instead, it facilitates the connection between homeowners and the best-suited contractors and architects for their ADU project."
    },
    {
        id: uuid(),
        title: "How does MaxiPlexi select contractors and architects?",
        isOpen: false,
        content:
            "Contractors and architects are vetted based on their expertise, experience, customer feedback, and history of completed projects. MaxiPlexi's AI-driven system ensures that these professionals align with your project's specific needs and style."
    },
    {
        id: uuid(),
        title: "Can MaxiPlexi help with permit applications?",
        isOpen: false,
        content:
            "While MaxiPlexi does not directly handle permit applications, it provides users with guidance and resources to help navigate the permitting process more smoothly."
    },
    {
        id: uuid(),
        title: "What kind of design styles can I choose from?",
        isOpen: false,
        content:
            "MaxiPlexi offers a wide range of design styles, from modern and contemporary to traditional and rustic. The platform matches your preference with professionals who have experience in those particular styles."
    },
    {
        id: uuid(),
        title: "How much does it cost to use MaxiPlexi?",
        isOpen: false,
        content:
            "It is absolutely free to use MaxiPlexi to select designs and receive quotes. Users can explore various design options and connect with contractors and architects without any upfront cost. MaxiPlexi is compensated by the contractors or architects only once a contract is signed, ensuring a commitment-free browsing and planning experience for homeowners."
    },
    {
        id: uuid(),
        title: "How does MaxiPlexi ensure the quality of each project?",
        isOpen: false,
        content:
            "Quality assurance is achieved through the rigorous vetting of contractors and architects, as well as continuous feedback and ratings from users to ensure high standards are maintained throughout the network."
    }
];

const accordionItemType = {
    top: "rounded-t-lg",
    default: "border rounded-none border-t-0",
    bottom: "border border-t-0 rounded-b-lg"
};

export const Accordion = () => {
    const [activeAccordion, setActiveAccordion] = useState(null);

    const accordionClickHandle = (id) => {
        setActiveAccordion(id === activeAccordion ? null : id);
    };

    return (
        <SectionContainer className="accordion--container my-16 drop-shadow-xl max-w-3xl mx-auto offset-y-0 offset-x-8">
            {accordionData.map((accordionItem, index) => (
                <div
                    key={accordionItem.id}
                    id={accordionItem.id}
                    className={clsx(
                        "accordion-item--container border border-neutral-200 bg-white overflow-hidden",
                        {
                            [accordionItemType.top]: index === 0,
                            [accordionItemType.default]:
                                index > 0 && index < accordionData.length - 1,
                            [accordionItemType.bottom]:
                                index === accordionData.length - 1
                        }
                    )}
                >
                    <h2 className="accordion-item--heading mb-0">
                        <button
                            className="group relative flex w-full font-semibold items-center rounded-t-lg border-0 bg-white py-4 px-5 text-left text-base text-neutral-800 transition"
                            type="button"
                            aria-expanded={accordionItem.isOpen}
                            onClick={() =>
                                accordionClickHandle(accordionItem.id)
                            }
                        >
                            {accordionItem.title}
                            <Icon
                                icon="material-symbols:keyboard-arrow-up-rounded"
                                className="ml-auto h-8 w-8 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out motion-reduce:transition-none"
                            />
                        </button>
                    </h2>
                    <div
                        className={clsx(
                            "accordion-item--content py-4 px-5 text-base",
                            {
                                hidden: activeAccordion !== accordionItem.id, // Use hidden class to animate height to 0
                                "!visibility block":
                                    activeAccordion === accordionItem.id // Use block class to show content again
                            }
                        )}
                    >
                        <p>{accordionItem.content}</p>
                    </div>
                </div>
            ))}
        </SectionContainer>
    );
};
