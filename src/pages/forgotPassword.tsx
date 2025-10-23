import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { loginUser } from "../store/features/authSlice";
import SigninLayout from "../components/signinLayout";
import { useNavigate } from "react-router-dom"
import { requestResetOTP, resetPassword } from "../store/features/passwordResetSlice";

export default function ForgotPassWord() {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate()
    const { loading, error, isAuthenticated } = useSelector((state: RootState) => state.auth);

    const [email, setEmail] = useState<string>("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(requestResetOTP(email));
    };

    return (
        <SigninLayout>
            <form
                onSubmit={handleSubmit}
                className="form flex flex-col items-center justify-center w-[100%] gap-4"
            >
                <h1 className="heading">Forgot Password</h1>

                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required
                />

                <button
                    type="submit"
                    className="button1 bg-blue-500 text-white py-2 rounded hover:bg-blue-600 disabled:opacity-50"
                    disabled={loading}
                >
                    {loading ? "Sending ..." : "Send OTP"}
                </button>

                {error && <p className="text-red-500 text-center">{error}</p>}
                
            </form>
        </SigninLayout>
    );
}
