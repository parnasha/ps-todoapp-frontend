// Import necessary libraries and styles
"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getToken, clearToken } from "../../token";
import "./page.css";
import "react-notifications/lib/notifications.css";
import { addTask, deleteTask, getTodo, updateTask } from "@/graphql/queries";
import Card from "@/component/card";
import {
    NotificationContainer,
    NotificationManager,
} from "react-notifications";
import { isDataView } from "util/types";

const Dashboard: React.FC = () => {
    type TodoItem = {
        __typename: string;
        id: string;
        title: string;
        description: string;
        isDone: boolean;
    };

    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(
        null
    );
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [todoList, setTodoList] = useState<TodoItem[]>([]);

    useEffect(() => {
        const token = getToken();
        setIsAuthenticated(token !== null);

        if (!token) {
            router.push("/");
        }

        fetchData();
    }, []);

    const createNotification = (type: string) => {
        switch (type) {
            case "success":
                NotificationManager.success(
                    "Success!",
                    "Task added successfully"
                );
                break;
            case "error":
                NotificationManager.error(
                    "Deleted!",
                    "Task deleted successfully",
                    3000
                );
                break;
            default:
                break;
        }
    };

    const handleLogout = () => {
        clearToken();
        router.push("/");
    };

    const handleAddTask = async () => {
        try {
            await addTask(title, description);
            setTimeout(function () {
                createNotification("success");
                fetchData();
            }, 1000);
            setTitle("");
            setDescription("");
        } catch (error) {
            console.error("An error occurred:", error);
        }
    };

    const handleDeleteCard = async (id: string) => {
        await deleteTask(id);
        setTimeout(function () {
            createNotification("error");
            fetchData();
        }, 1000);
    };

    const handleSaveEdit = async (
        id: string,
        editedTitle: string,
        editedDescription: string
    ) => {
        await updateTask(id, editedTitle, editedDescription);
        setTimeout(function () {
            createNotification("error");
            fetchData();
        }, 1000);
    };

    const fetchData = async () => {
        const todoData = await getTodo();
        setTodoList(todoData);
    };

    return (
        <div>
            {isAuthenticated === null ? (
                <>Loading..</>
            ) : isAuthenticated ? (
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
                            <div className="grid grid-rows-2  gap-4">
                                <div
                                    className="col-span-2 row-span-2  bg-slate-100 mt-5 mx-5 rounded-md"
                                    style={{ height: "10vh" }}
                                >
                                    <div className="grid grid-cols-4 gap-4">
                                        <div className="col-span-2">
                                            <div className="text-3xl font-bold my-4 mx-5">
                                                <h1
                                                    style={{ color: "#4022C9" }}
                                                >
                                                    Dashboard
                                                </h1>
                                            </div>
                                        </div>
                                        <div className="col-span-2 flex items-center justify-end">
                                            <div className="text-xl text-slate-400">
                                                Parnasha
                                            </div>
                                            <div
                                                style={{
                                                    height: "40px",
                                                    width: "130px",
                                                    backgroundImage:
                                                        "linear-gradient(to right, #643ED9 , #3A1EC7)",
                                                }}
                                                className="text-center text-white rounded-md my-4 mx-5 flex items-center justify-center cursor-pointer"
                                                onClick={handleLogout}
                                            >
                                                Logout
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="col-span-2 row-span-4 bg-slate-100  mx-5 rounded-md"
                                    style={{ height: "62vh" }}
                                >
                                    <div className="grid grid-cols-5 gap-4 mx-4 my-4 ">
                                        <div
                                            className="col-span-2 rounded-md bg-white"
                                            style={{ height: "58vh" }}
                                        >
                                            <div className="titleArea bg-slate-100 px-5 py-5">
                                                <div className="text-slate-500 font-semibold mb-2">
                                                    <h1>Title</h1>
                                                </div>
                                                <div>
                                                    <input
                                                        type="text"
                                                        placeholder="Enter Title"
                                                        style={{
                                                            width: "100%",
                                                        }}
                                                        className="bg-slate-100 border border-slate-300 rounded-md px-2 py-2"
                                                        value={title}
                                                        onChange={(e) => {
                                                            setTitle(
                                                                e.target.value
                                                            );
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            <div className="titleArea bg-slate-100 px-5 py-5">
                                                <div className="text-slate-500 font-semibold mb-2">
                                                    <h1>Description</h1>
                                                </div>
                                                <div>
                                                    <textarea
                                                        value={description}
                                                        onChange={(e) => {
                                                            setDescription(
                                                                e.target.value
                                                            );
                                                        }}
                                                        placeholder="Enter Description"
                                                        style={{
                                                            width: "100%",
                                                            height: "150px",
                                                        }}
                                                        className="bg-slate-100 border border-slate-300 rounded-md px-2 py-2"
                                                    />
                                                </div>
                                            </div>
                                            <div
                                                style={{
                                                    height: "40px",
                                                    width: "90%",
                                                    backgroundImage:
                                                        "linear-gradient(to right, #643ED9 , #3A1EC7)",
                                                }}
                                                className="text-center text-white rounded-md my-4 mx-5 flex items-center justify-center cursor-pointer"
                                                onClick={handleAddTask}
                                            >
                                                ADD TASK
                                            </div>
                                        </div>
                                        <div
                                            className="col-span-3 rounded-md bg-white"
                                            style={{
                                                height: "58vh",
                                                overflow: "auto",
                                            }}
                                        >
                                            {todoList.map((task, index) => (
                                                <Card
                                                    key={index}
                                                    id={task.id}
                                                    title={task.title}
                                                    description={
                                                        task.description
                                                    }
                                                    onSaveEdit={handleSaveEdit} // Pass the save callback
                                                    onDeleteClick={(id) => {
                                                        handleDeleteCard(id);
                                                    }}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : null}
            <NotificationContainer />
        </div>
    );
};

export default Dashboard;
