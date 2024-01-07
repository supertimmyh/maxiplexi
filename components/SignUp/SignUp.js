import { useState } from "react";
import { Button, ButtonGroup } from "@components/Button";
import { Icon } from "@iconify/react";

export const SignUp = () => {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;

        try {
            const response = await fetch(form.action, {
                method: form.method,
                body: new FormData(form),
                headers: {
                    Accept: "application/json"
                }
            });
            if (response.ok) {
                setSubmitted(true);
                setEmail(""); // Clear the email state
            } else {
                // Handle server-side validation errors here
                console.error("Submission failed:", await response.text());
            }
        } catch (error) {
            console.error("An error occurred:", error);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            action="https://formspree.io/f/mpzvzopw"
            method="POST"
            className="sign-up-form"
        >
            <div className="form-group">
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="email-input"
                />
                <ButtonGroup className="hidden md:block">
                    <Button
                        type="button"
                        className="btn btn--secondary ml-4 submit-btn"
                    >
                        Notify Me
                        <Icon icon="material-symbols:arrow-forward-rounded" />
                    </Button>
                </ButtonGroup>
                {/* <button type="submit" className="submit-btn">
                    Sign Up
                </button> */}
            </div>
            {submitted && (
                <p className="success-message">Thanks for signing up!</p>
            )}
        </form>
    );
};
