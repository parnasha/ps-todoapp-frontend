"use client";
import React from "react";
import Image from "next/image";
import cover_picture from "../../../assets/cover_picture.jpg";
import Link from "next/link";
import "./page.css";
import { useState } from "react";
import { register } from "@/graphql/queries";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Registration = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    // const [newPassword, setNewPassword] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("");
    const [dob, setDob] = useState("");
    const [emailError, setEmailError] = useState("");
    const [usernamError, setUsernameError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [genderError, setGenderError] = useState("");
    const [dobError, setDobError] = useState("");

    const handleClickRegister = async () => {
        console.log("clicked", username, password);
        if (!username) {
            setUsernameError("Username is required");
        } else {
            setUsernameError("");
        }
        if (!email) {
            setEmailError("Email is required");
        } else {
            setEmailError("");
        }
        if (!password) {
            setPasswordError("Password is required");
        } else {
            setPasswordError("");
        }
        if (!gender) {
            setGenderError("Password is required");
        } else {
            setGenderError("");
        }
        if (!dob) {
            setDobError("Password is required");
        } else {
            setDobError("");
        }

        await register(username, email, password, gender, dob);
    };

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
                            <div className="grid grid-rows-6">
                                <div
                                    className="row-span-1 text-3xl font-bold "
                                    style={{
                                        fontFamily:
                                            "font-family: 'Kalam', cursive;",
                                    }}
                                >
                                    <h1 style={{ color: "#4022C9" }}>
                                        Registration
                                    </h1>
                                </div>
                                <div className="row-span-1 text-sm ">
                                    <div style={{ color: "#a6a6a6" }}>
                                        Username*
                                    </div>
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
                                        <div className="text-red-400 text-sm">
                                            {usernamError}
                                        </div>
                                    </div>
                                </div>
                                <div className="row-span-1 ">
                                    <div style={{ color: "#a6a6a6" }}>
                                        Email*
                                    </div>
                                    <div>
                                        <input
                                            className="inputBox"
                                            type="email"
                                            placeholder="Enter your email address"
                                            onChange={(e) => {
                                                setEmail(e.target.value);
                                            }}
                                            value={email}
                                        />
                                        <div className="text-red-400 text-sm">
                                            {emailError}
                                        </div>
                                    </div>
                                </div>
                                <div className="row-span-1 ">
                                    <div style={{ color: "#a6a6a6" }}>
                                        Password*
                                    </div>
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
                                        <div className="text-red-400 text-sm">
                                            {passwordError}
                                        </div>
                                    </div>
                                </div>
                                <div className="row-span-1 ">
                                    <div style={{ color: "#a6a6a6" }}>
                                        Gender*
                                    </div>
                                    <div>
                                        {/* <input
                                            className="inputBox"
                                            type="gender"
                                            placeholder="Gender"
                                            onChange={(e) => {
                                                setGender(e.target.value);
                                            }}
                                            value={gender}
                                        /> */}
                                        <div className="">
                                            <div className="mb-2 block">
                                                <input
                                                    type="radio"
                                                    className=""
                                                    name="gender"
                                                    value="male"
                                                    checked={gender === "male"}
                                                    onChange={(e) =>
                                                        setGender(
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                                Male
                                            </div>
                                            <div>
                                                <input
                                                    type="radio"
                                                    name="gender"
                                                    value="female"
                                                    checked={
                                                        gender === "female"
                                                    }
                                                    onChange={(e) =>
                                                        setGender(
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                                Female
                                            </div>
                                        </div>
                                        <div className="text-red-400 text-sm">
                                            {genderError}
                                        </div>
                                    </div>
                                </div>
                                <div className="row-span-1 mt-4">
                                    <div style={{ color: "#a6a6a6" }}>
                                        Date of Birth*
                                    </div>
                                    <div>
                                        <DatePicker
                                            selected={dob}
                                            onChange={(date: any) =>
                                                setDob(date)
                                            }
                                            dateFormat="yyyy-MM-dd"
                                            placeholderText="Select DOB"
                                            className="inputBox"
                                        />
                                        <div className="text-red-400 text-sm">
                                            {dobError}
                                        </div>
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
                                        onClick={handleClickRegister}
                                    >
                                        Create account
                                    </div>
                                    <div
                                        style={{
                                            color: "#4022C9",
                                            fontSize: "12px",
                                            marginTop: "5px",
                                        }}
                                        className=" text-center cursor-pointer"
                                    >
                                        <Link href="/">
                                            Already have an account?Login
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

export default Registration;
