import { useEffect, useState } from "react";
import { auth } from "../firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Welcome() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
            } else {
                navigate("/");
            }
        });

        return () => unsubscribe();
    }, [navigate]);

    const handleLogout = async () => {
        await signOut(auth);
        navigate("/");
    };

    if (!user) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-gray-500">Loading...</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white w-[360px] p-8 rounded-xl shadow-xl text-center">

                <img
                    src={user.photoURL}
                    alt="profile"
                    referrerPolicy="no-referrer"
                    className="w-24 h-24 rounded-full mx-auto border-4 border-indigo-500"
                />

                <h2 className="text-2xl font-bold mt-4 text-gray-800">
                    {user.displayName}
                </h2>

                <p className="text-gray-500 text-sm mt-1">
                    {user.email}
                </p>

                <div className="mt-6">
                    <span className="inline-block bg-indigo-100 text-indigo-600 px-4 py-1 rounded-full text-sm">
                        Logged in successfully 🎉
                    </span>
                </div>

                <button
                    onClick={handleLogout}
                    className="mt-8 w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg transition"
                >
                    Logout
                </button>

            </div>
        </div>
    );
}
