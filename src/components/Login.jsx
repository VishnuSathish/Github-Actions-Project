import React, {useState} from "react";
import { useAppContext } from "../context/AppContext";

const Login = () => {
    const [state, setState] = useState("login");
    const {setShowUserLogin, setUser} = useAppContext()

    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const onChangeHandler = (e) => {
        setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setUser({
          email:"test@gmail.com",
          name:"test"
        })
        setShowUserLogin(false)
    };

    return (
        <div onClick={()=>setShowUserLogin(false)} className="fixed inset-0 z-50 flex items-center justify-center  bg-black/50 backdrop-blur-sm">
            <form
            onClick={(e)=> e.stopPropagation()}
                onSubmit={handleSubmit}
                className="w-full sm:w-[350px] text-center border border-white/30 rounded-2xl px-8 bg-white/10 backdrop-blur-md"
            >
                <h1 className="text-3xl mt-10 font-medium text-green-600">
                    {state === "login" ? "Login" : "Register"}
                </h1>
                <p className="text-white/80 text-sm mt-2 pb-6">
                    Please {state === "login" ? "sign in" : "sign up"} to continue
                </p>

                {state !== "login" && (
                    <div className="flex items-center w-full mt-4 border border-white/40 h-12 rounded-full overflow-hidden pl-6 gap-2 bg-white/20">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-80" viewBox="0 0 24 24">
                            <path d="M20 21a8 8 0 0 0-16 0" />
                            <circle cx="12" cy="7" r="4" />
                        </svg>
                        <input
                            type="text"
                            placeholder="Name"
                            className="bg-transparent text-white placeholder-white/60 outline-none text-sm w-full h-full"
                            name="name"
                            value={data.name}
                            onChange={onChangeHandler}
                            required
                        />
                    </div>
                )}

                <div className="flex items-center w-full mt-4 border border-white/40 h-12 rounded-full overflow-hidden pl-6 gap-2 bg-white/20">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-80" viewBox="0 0 24 24">
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    <input
                        type="email"
                        placeholder="Email id"
                        className="bg-transparent text-white placeholder-white/60 outline-none text-sm w-full h-full"
                        name="email"
                        value={data.email}
                        onChange={onChangeHandler}
                        required
                    />
                </div>

                <div className="flex items-center mt-4 w-full border border-white/40 h-12 rounded-full overflow-hidden pl-6 gap-2 bg-white/20">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-80" viewBox="0 0 24 24">
                        <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                    <input
                        type="password"
                        placeholder="Password"
                        className="bg-transparent text-white placeholder-white/60 outline-none text-sm w-full h-full"
                        name="password"
                        value={data.password}
                        onChange={onChangeHandler}
                        required
                    />
                </div>

                

                <button
                    type="submit"
                    className="mt-4 w-full h-11 rounded-full cursor-pointer text-primary bg-white font-medium hover:opacity-90 hover:bg-primary hover:text-white  transition-opacity"
                >
                    {state === "login" ? "Login" : "Create Account"}
                </button>

                <p className="text-white/80 text-sm mt-3 mb-11">
                    {state === "login"
                        ? "Don't have an account? "
                        : "Already have an account? "}
                    <button
                        type="button"
                        className="text-green-600 font-medium hover:text-green-500 cursor-pointer"
                        onClick={() =>
                            setState((prev) => (prev === "login" ? "register" : "login"))
                        }
                    >
                        {state === "login" ? "Register" : "Login"}
                    </button>
                </p>
            </form>
        </div>
    );
};

export default Login;
