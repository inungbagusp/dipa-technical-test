"use client";

import { useState } from "react";
import Auth from "@/utils/auth";
import useIsMobile from "@/utils/useIsMobile";
import { useRouter } from "next/navigation";

const LoginForm = (props) => {
    const { setActivePopup = () => {} } = props;

    const router = useRouter();
    const isMobile = useIsMobile(1024);
    const { login } = Auth;

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [feedback, setFeedback] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const result = login(username, password);
        setFeedback(result?.success);
        if (result?.success) {
            setTimeout(() => {
                router.push("/dashboard");
            }, 500);
        }
    };

    return (
        <>
            <form 
                onSubmit={handleSubmit}
                className="w-full max-w-sm mx-auto flex flex-col gap-4"
            >
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="border border-gray-300 px-4 py-2 rounded-md text-black"
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border border-gray-300 px-4 py-2 rounded-md text-black"
                />

                <button
                    type="submit"
                    className="bg-blue-600 text-white py-2 rounded-md cursor-pointer disabled:opacity-50"
                    disabled={username === "" || password === ""}
                >
                    Login
                </button>

                {/* FEEDBACK */}
                {feedback !== null && (
                    <p className={[
                        "text-center",
                        feedback ? "text-green-600" : "text-red-600"
                    ].join(" ")}
                    >
                        {feedback ? "Login berhasil!" : "Username atau password salah"}
                    </p>
                )}
            </form>
            <p className="text-xs text-center mt-2">
                <span className="text-black ts-12 mr-2">Dont have an account ?</span>
                <button
                    type="button"
                    onClick={() => {
                        if (isMobile) {
                            router.push("/signup");
                        } else {
                            setActivePopup("signup");
                        }
                    }}
                    className="text-blue-600 underline cursor-pointer hover:text-blue-900"
                >
                    Sign Up
                </button>
            </p>
        </>
    );
}

export default LoginForm;
