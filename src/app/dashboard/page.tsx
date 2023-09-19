// Dashboard.tsx
"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { getToken, clearToken } from "../../token";

const Dashboard: React.FC = () => {
    const router = useRouter();

    const handleLogout = () => {
        clearToken();
        router.push("/");
    };

    return (
        <div>
            <h1>Welcome to the Dashboard</h1>
            <p>{getToken()}</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Dashboard;
