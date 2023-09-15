import React from "react";

const Login = () => {
    return (
        <>
            <div className="font-bold text-center text-3xl my-8 text-slate-500">
                <h1>Login Form</h1>
            </div>
            <div
                style={{
                    height: "450px",
                    width: "300px",
                    marginLeft: "auto",
                    marginRight: "auto",
                }}
                className="border border-slate-500 px-8  my-8"
            >
                <form>
                    <div className="mb-6">
                        <div className="font-bold text-center text-xl my-8 text-slate-400">
                            <h1>Email</h1>
                        </div>
                        <input
                            type="email"
                            id="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="email"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <div className="font-bold text-center text-xl my-8 text-slate-400">
                            <h1>Password</h1>
                        </div>
                        <input
                            type="password"
                            id="password"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required
                        />
                    </div>
                    <div className="flex items-start mb-6">
                        <div className="flex items-center h-5">
                            <input
                                id="remember"
                                type="checkbox"
                                value=""
                                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-green-400 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                                required
                            />
                        </div>
                        <label
                            htmlFor="remember"
                            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Remember me
                        </label>
                    </div>
                    <button
                        type="submit"
                        className="text-white text-md bg-gradient-to-r from-green-300 to-sky-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  w-full  px-5 py-2.5 text-center "
                    >
                        Submit
                    </button>
                </form>
            </div>
        </>
    );
};

export default Login;
