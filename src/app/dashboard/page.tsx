// Import necessary libraries and styles
"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getToken, clearToken } from "../../token";
import "./page.css";
import "react-notifications/lib/notifications.css";
import {
    addTask,
    checkTask,
    deleteTask,
    getTodo,
    updateTask,
} from "@/graphql/queries";
import Card from "@/component/card";
import {
    NotificationContainer,
    NotificationManager,
} from "react-notifications";
import { isDataView } from "util/types";
//Defining type of each variable
const Dashboard: React.FC = () => {
    type TodoItem = {
        __typename: string;
        id: string;
        title: string;
        description: string;
        isDone: boolean;
    };

    const router = useRouter();
    //state for authentication of token
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(
        null
    );
    //state using for title box
    const [title, setTitle] = useState("");
    //state using for description box
    const [description, setDescription] = useState("");
    // state using for getting todos
    const [todoList, setTodoList] = useState<TodoItem[]>([]);

    useEffect(() => {
        // getting token after login
        const token = getToken();
        // setting token is not equal to null
        setIsAuthenticated(token !== null);
        // if there is no token it shows login page(home page)
        if (!token) {
            router.push("/");
        }
        //for fetching data
        fetchData();
    }, []);
    //  create notification alert function for adding,deleting and editing task
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
            case "warning":
                NotificationManager.warning(
                    "Edited!",
                    "Task edited successfully",
                    3000
                );
                break;
            default:
                break;
        }
    };
    // logout function
    const handleLogout = () => {
        clearToken();
        router.push("/");
    };
    // for adding task
    const handleAddTask = async () => {
        try {
            //adding task
            await addTask(title, description);
            setTimeout(function () {
                // creating notification alert for adding task
                createNotification("success");
                // after adding task, fetch data;
                fetchData();
            }, 1000);

            // clear the title and description area
            setTitle("");
            setDescription("");
        } catch (error) {
            console.error("An error occurred:", error);
        }
    };
    // for deleting tasks
    const handleDeleteCard = async (id: string) => {
        // recieving id from each task and delete them
        await deleteTask(id);
        setTimeout(function () {
            //notification alert for deleting task
            createNotification("error");
            // after deleted tasks refetching the data
            fetchData();
        }, 1000);
    };
    // check function for checking todos is done or not
    const handleCheckTask = async (id: string, isDone: boolean) => {
        console.log(id, isDone);
        await checkTask(id, isDone);

        setTimeout(function () {
            fetchData();
        }, 1000);
    };
    // save the edited todos
    const handleSaveEdit = async (
        id: string,
        editedTitle: string,
        editedDescription: string
    ) => {
        // after edit, update the task by recieving id, title and description
        await updateTask(id, editedTitle, editedDescription);
        setTimeout(function () {
            createNotification("warning");
            // fetching  the updated data
            fetchData();
        }, 1000);
    };
    //fetching data
    const fetchData = async () => {
        const todoData = await getTodo();
        setTodoList(todoData);
    };

    return (
        <div>
            {/* if authetication is null then Loading show else dashboard open */}
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
                                            {/* logout button */}
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
                                                {/* </div>
                                            addtask button */}
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
                                        </div>
                                        {/* Card component */}
                                        <div
                                            className="col-span-3 rounded-md bg-white"
                                            style={{
                                                height: "58vh",
                                                overflow: "auto",
                                            }}
                                        >
                                            {todoList.map((task, index) =>
                                                task.isDone !== true ? (
                                                    <Card
                                                        key={index}
                                                        id={task.id}
                                                        title={task.title}
                                                        description={
                                                            task.description
                                                        }
                                                        isDone={task.isDone}
                                                        onSaveEdit={
                                                            handleSaveEdit
                                                        }
                                                        onDeleteClick={(id) => {
                                                            handleDeleteCard(
                                                                id
                                                            );
                                                        }}
                                                        onCheckTask={(
                                                            id,
                                                            isDone
                                                        ) => {
                                                            handleCheckTask(
                                                                id,
                                                                isDone
                                                            );
                                                        }}
                                                    />
                                                ) : null
                                            )}

                                            {/* {todoList.map((task, index) => (
                        <Card
                          key={index}
                          id={task.id}
                          title={task.title}
                          description={task.description}
                          isDone={task.isDone}
                          onSaveEdit={handleSaveEdit}
                          onDeleteClick={(id) => {
                            handleDeleteCard(id);
                          }}
                          onCheckTask={(id, isDone) => {
                            handleCheckTask(id, isDone);
                          }}
                        />
                      ))} */}
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
