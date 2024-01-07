import { BadgeMessage, BadgeGroup, BadgeIcon } from "@components/Badge";
import { SectionContainer } from "@components/Section";
import { PageTitle } from "@components/Title";
import { Layout } from "@components/Layout";
import { HomeBanner } from "@components/Banner";
import { Columns } from "@components/Columns";
import { ContentImage } from "@components/ContentImage";
import { Content } from "@components/Content";
import { ProgressBar } from "@components/ProgressBar";
import { Accordion } from "@components/Accordion";
import { MotionBTTContainer } from "@components/Motion";
import { SignUp } from "@components/SignUp";
import SEO from "@components/SEO/SEO";

export default function Home() {
    return (
        <Layout className="">
            <SEO
                title="MaxiPlexi - A landing page of AI-driven ADU marketplace 🏠"
                description="MaxiPlexi, your gateway to a streamlined home expansion. Harness the power of AI to effortlessly customize and manage your accessory dwelling unit (ADU) project. Our intelligent marketplace connects you with qualified contractors, ensuring a seamless match for your unique needs. Elevate your home's value with innovative design and efficient collaboration, all tailored to your lifestyle. Start your journey with MaxiPlexi and transform your property with confidence and ease."
            />
            <div className="main-wrapper bg-[#F3F5F8] relative z-10 pb-20 pt-20 ">
                {/* { Page Banner } */}
                <HomeBanner />
                <SectionContainer id="signup" className="signup">
                    <SignUp className="signup" />
                </SectionContainer>
                {/* Components Container */}
                <SectionContainer className="components--container wrap wrap-px grid gap-8 sm:gap-24">
                    {/* Features */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer id="features" className="features">
                            <BadgeGroup alignment="center">
                                <BadgeMessage>Features</BadgeMessage>
                            </BadgeGroup>
                            <PageTitle
                                className="text-center mx-auto"
                                type="default"
                            >
                                Empowering Your Home Expansion
                            </PageTitle>
                            <Content className="text-center" alignment="center">
                                <p>
                                    MaxiPlexi brings innovation to your doorstep
                                    as an AI-driven marketplace for accessory
                                    dwelling units (ADUs). Streamlining the ADU
                                    construction process, our platform focuses
                                    on aligning your style preferences with
                                    personalized design solutions and connecting
                                    you seamlessly with top-tier contractors and
                                    desingers. Immerse yourself in the future of
                                    home expansion with features designed to
                                    enhance your property's value and fit your
                                    unique lifestyle.
                                </p>
                            </Content>
                            <ContentImage />
                        </SectionContainer>
                    </MotionBTTContainer>
                    {/* Timeline */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer id="timeline" className="timeline">
                            <ProgressBar />
                        </SectionContainer>
                    </MotionBTTContainer>
                    {/* Accordions */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer id="faq" className="faq">
                            <BadgeGroup alignment="center">
                                <BadgeMessage>FAQ</BadgeMessage>
                            </BadgeGroup>
                            <PageTitle
                                className="text-center mx-auto"
                                type="default"
                            >
                                Would like to know more about MaxiPlexi?{" "}
                                <br></br>
                                <br></br>No worries! We&apos;ve got the answers
                                you need:
                            </PageTitle>
                            <Accordion />
                        </SectionContainer>
                    </MotionBTTContainer>
                </SectionContainer>
            </div>
        </Layout>
    );
}
