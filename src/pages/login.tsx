
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { loginUser } from "../store/features/authSlice";
import SigninLayout from "../components/signinLayout";
import {useNavigate} from "react-router-dom"

export default function Login() {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate()
    const { loading, error, isAuthenticated } = useSelector((state: RootState) => state.auth);
    if(isAuthenticated){
        navigate('/')
    }
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(loginUser({ name, email, password }));
    };
    useEffect(
            ()=>{if(isAuthenticated){
                navigate('/')
            }
            },[isAuthenticated])
    return (
        <SigninLayout>
            <form
                onSubmit={handleSubmit}
                className="form flex flex-col items-center justify-center w-[100%] gap-4"
            >
                <h1 className="heading">Login</h1>

                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required
                />

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
                {isAuthenticated && <p className="text-green-500 text-center">Logged in successfully!</p>}
            </form>
        </SigninLayout>
    );
}
