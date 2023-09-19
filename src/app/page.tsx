"use client";
import React from "react";
import Image from "next/image";
import cover_picture from "../../assets/cover_picture.jpg";
import Link from "next/link";
import "./page.css";
import { useState, useEffect } from "react";
import { getUsers, login } from "@/graphql/queries";
import { useRouter } from "next/navigation";
import { getToken, setToken } from "../token";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loginError, setLoginError] = useState("");

  const router = useRouter();
  console.log("parnasha");
  useEffect(() => {
    const fetchData = async () => {
      await getUsers();
    };
    console.log("hereee");
    fetchData();
  }, []);

  const handleClickLogin = async () => {
    console.log("clicked", password);
    if (!email) {
      setEmailError("Username is required");
    } else {
      setEmailError("");
    }
    if (!password) {
      setPasswordError("Password is required");
    } else {
      setPasswordError("");
    }

    if (email && password) {
      const loginResult = await login(email, password);

      console.log(loginResult);
      if (loginResult?.loginUser?.token) {
        setToken(loginResult.loginUser.token);
        router.push("/dashboard");
      } else {
        setPasswordError("Invalid email and password");
      }
    }
  };
  const handleRegisterNow = () => {};
  return (
    <>
      <div
        style={{
          backgroundColor: "#3D259B",
          height: "100vh",
          width: "100vw",
        }}
        className="flex items-center justify-center"
      >
        <div
          style={{
            backgroundColor: "#ffffff",
            height: "80vh",
            width: "80%",
          }}
          className="mx-auto rounded-md"
        >
          <div className="grid grid-cols-3 gap-4 ">
            <div className="col-span-2 flex items-center justify-center">
              <div
                style={{ width: "500px", height: "80vh" }}
                className="mx-auto flex items-center justify-center"
              >
                <Image
                  src={cover_picture}
                  alt="cover"
                  // width="50px"
                  // height="60px"
                />
              </div>
            </div>
            <div className="col-span-1 flex items-center justify-center">
              <div className="grid grid-rows-4">
                <div
                  className="row-span-1 text-3xl font-bold mb-5"
                  style={{
                    fontFamily: "font-family: 'Kalam', cursive;",
                  }}
                >
                  <h1 style={{ color: "#4022C9" }}>Login</h1>
                </div>
                <div className="row-span-1 text-sm mt-4">
                  <div style={{ color: "#a6a6a6" }}>Email*</div>
                  <div>
                    <input
                      className="inputBox"
                      type="email"
                      placeholder="example@example.com"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      value={email}
                    />
                    <div className="text-red-400 text-sm">{emailError}</div>
                  </div>
                </div>
                <div className="row-span-1 mt-3">
                  <div style={{ color: "#a6a6a6" }}>Password*</div>
                  <div>
                    <input
                      className="inputBox"
                      type="password"
                      placeholder="*********"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      value={password}
                    />
                    <div className="text-red-400 text-sm">{passwordError}</div>
                  </div>
                </div>
                <div className="row-span-1">
                  <div
                    style={{
                      height: "30px",
                      width: "225px",
                      backgroundImage:
                        "linear-gradient(to right, #643ED9 , #3A1EC7)",
                    }}
                    className="text-center text-white rounded-sm mt-10 cursor-pointer"
                    onClick={handleClickLogin}
                  >
                    Login
                  </div>
                  <div
                    style={{
                      color: "#4022C9",
                      fontSize: "12px",
                      marginTop: "5px",
                    }}
                    className=" text-center cursor-pointer"
                    onClick={handleRegisterNow}
                  >
                    <Link href="/register">
                      Don't have an account?Register now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
