
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { loginUser } from "../store/features/authSlice";
import SigninLayout from "../components/signinLayout";
import { useNavigate } from "react-router-dom"
import { resetPassword } from "../store/features/passwordResetSlice";

export default function ResetPassWord() {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate()
    const { loading, error, isAuthenticated } = useSelector((state: RootState) => state.auth);
    
    const [password, setPassword] = useState<string>("");
    const [password1, setPassword1] = useState<string>("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (password===password1){
            dispatch(resetPassword({email: '',newPassword:password}));
        }
        
    };

    return (
        <SigninLayout>
            <form
                onSubmit={handleSubmit}
                className="form flex flex-col items-center justify-center w-[100%] gap-4"
            >
                <h1 className="heading">Reset Password</h1>

                <input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required
                />

                <input
                    type="password"
                    placeholder="Repeat Password"
                    value={password1}
                    onChange={(e) => setPassword1(e.target.value)}
                    className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required
                />

                <button
                    type="submit"
                    className="button1 bg-blue-500 text-white py-2 rounded hover:bg-blue-600 disabled:opacity-50"
                    disabled={loading}
                >
                    {loading ? "Logging in..." : "Login"}
                </button>

                {error && <p className="text-red-500 text-center">{error}</p>}
                {isAuthenticated && <p className="text-green-500 text-center">Reset Successfull!</p>}
            </form>
        </SigninLayout>
    );
}
