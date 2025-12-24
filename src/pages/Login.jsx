import {
    GoogleAuthProvider,
    GithubAuthProvider,
    signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();

    const handleGoogleLogin = async () => {
        try {
            const provider = new GoogleAuthProvider();
            await signInWithPopup(auth, provider);
            navigate("/welcome");
        } catch (error) {
            alert(error.message);
        }
    };

    const handleGithubLogin = async () => {
        try {
            const provider = new GithubAuthProvider();
            await signInWithPopup(auth, provider);
            navigate("/welcome");
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-600 to-purple-600">
            <div className="bg-white w-[350px] p-8 rounded-xl shadow-2xl text-center">

                <h1 className="text-3xl font-bold text-gray-800 mb-2">
                    Welcome Back 👋
                </h1>
                <p className="text-gray-500 mb-6">
                    Login with your account
                </p>

                {/* Google Login */}
                <button
                    onClick={handleGoogleLogin}
                    className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-lg py-2 hover:bg-gray-100 transition mb-3"
                >
                    <img
                        src="https://www.svgrepo.com/show/475656/google-color.svg"
                        alt="google"
                        className="w-5"
                    />
                    <span className="font-medium text-gray-700">
                        Continue with Google
                    </span>
                </button>

                {/* GitHub Login */}
                <button
                    onClick={handleGithubLogin}
                    className="w-full flex items-center justify-center gap-3 bg-black text-white rounded-lg py-2 hover:bg-gray-800 transition"
                >
                    <img
                        src="https://www.svgrepo.com/show/512317/github-142.svg"
                        alt="github"
                        className="w-5 invert"
                    />
                    <span className="font-medium">
                        Continue with GitHub
                    </span>
                </button>

            </div>
        </div>
    );
}
