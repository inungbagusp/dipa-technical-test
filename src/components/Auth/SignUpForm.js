"use client";

import { useState } from "react";
import Auth from "@/utils/auth";
import useIsMobile from "@/utils/useIsMobile";
import { useRouter } from "next/navigation";

const SignUpForm = (props) => {
    const { setActivePopup = () => {} } = props;
    const router = useRouter();
    const isMobile = useIsMobile(1024);
    const { signup } = Auth;

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [feedback, setFeedback] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const result = signup(username, password);
        setFeedback(result);
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    className="border border-gray-300 px-4 py-2 rounded-md text-black"
                    onChange={(e) => setUsername(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    className="border border-gray-300 px-4 py-2 rounded-md text-black"
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button
                    type="submit"
                    className="bg-blue-600 text-white py-2 rounded-md cursor-pointer disabled:opacity-50"
                    disabled={username === "" || password === ""}
                >
                    Create Account
                </button>

                {/* FEEDBACK */}
                {feedback && (
                    <p className={[
                        "text-center",
                        feedback.success ? "text-green-600" : "text-red-600"
                    ].join(" ")}
                    >
                        {feedback.message}
                    </p>
                )}
            </form>
            <p className="text-xs text-center mt-2">
                <span className="text-black ts-12 mr-2">Already have an account ?</span>
                <button
                    type="button"
                    onClick={() => {
                        if (isMobile) {
                            router.push("/login");
                        } else {
                            setActivePopup("login");
                        }
                    }}
                    className="text-blue-600 underline cursor-pointer hover:text-blue-900"
                >
                    Login
                </button>
            </p>
        </>
    );
}

export default SignUpForm;
