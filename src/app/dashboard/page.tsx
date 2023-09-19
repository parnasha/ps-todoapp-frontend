// Dashboard.tsx
"use client";
// Dashboard.tsx
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getToken, clearToken } from "../../token";

const Dashboard: React.FC = () => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const token = getToken();
    setIsAuthenticated(token !== null);

    if (!token) {
      router.push("/");
    }
  }, []);

  const handleLogout = () => {
    clearToken();
    router.push("/");
  };

  return (
    <div>
      {isAuthenticated === null ? (
        <>Loading..</>
      ) : isAuthenticated ? (
        <>
          <h1>Welcome to the Dashboard</h1>
          <p>{getToken()}</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : null}
    </div>
  );
};

export default Dashboard;
