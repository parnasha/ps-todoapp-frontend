"use client";
import React from "react";
import Image from "next/image";
import cover_picture from "../../../assets/cover_picture.jpg";
import Head from "next/head";
import "./page.css";
import { useState } from "react";
import { handleClientScriptLoad } from "next/script";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernamError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleClickLogin = () => {
    console.log("clicked", username, password);
    if (!username) {
      setUsernameError("Username is required");
    } else {
      setUsernameError("");
    }
    if (!password) {
      setPasswordError("Password is required");
    } else {
      setPasswordError("");
    }
  };

  return (
    <>
      <Head>
        <title>Home App</title>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Kalam&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <div
        style={{ backgroundColor: "#3D259B", height: "100vh", width: "100vw" }}
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
                  style={{ fontFamily: "font-family: 'Kalam', cursive;" }}
                >
                  <h1 style={{ color: "#4022C9" }}>Welcome Back</h1>
                </div>
                <div className="row-span-1 text-sm mt-4">
                  <div style={{ color: "#a6a6a6" }}>User Name</div>
                  <div>
                    <input
                      className="inputBox"
                      type="text"
                      placeholder="John doe"
                      onChange={(e) => {
                        setUsername(e.target.value);
                      }}
                      value={username}
                    />
                    <div className="text-red-400 text-sm">{usernamError}</div>
                  </div>
                </div>
                <div className="row-span-1 mt-3">
                  <div style={{ color: "#a6a6a6" }}>Password</div>
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
                    className="text-center text-white rounded-sm mt-10"
                    onClick={handleClickLogin}
                  >
                    Login
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
