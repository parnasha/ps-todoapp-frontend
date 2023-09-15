import React from "react";
import Image from "next/image";
import cover_picture from "../../../assets/cover_picture.jpg";
import Head from "next/head";

const Login = () => {
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
              <div className="grid grid-rows-4  gap-4 ">
                <div
                  className="row-span-1"
                  style={{ fontFamily: "font-family: 'Kalam', cursive;" }}
                >
                  <h1>
                    Hey <br /> Welcome Back
                  </h1>
                </div>
                <div className="row-span-1">
                  <div>User Name</div>
                  <div>
                    <input type="text" placeholder="Username" />
                  </div>
                </div>
                <div className="row-span-1">
                  <div>Password</div>
                  <div>
                    <input type="password" placeholder="password" />
                  </div>
                </div>
                <div className="row-span-1">
                  <div
                    style={{
                      height: "30px",
                      width: "40%",
                      backgroundImage:
                        "linear-gradient(to right, #643ED9 , #3A1EC7)",
                    }}
                    className="text-center text-white rounded-md"
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
