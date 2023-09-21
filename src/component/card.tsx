"use client";

import React from "react";
import { IoMdCreate, IoMdTrash } from "react-icons/io";
import "./card.css";

// Define the CardProps interface for component props
interface CardProps {
    id: string; // Unique identifier for the card
    title: string; // Title text to display
    description: string; // Description text to display
    onDeleteClick: (id: string) => void; // Callback function for delete action
}

// Define the Card component
const Card: React.FC<CardProps> = ({
    id,
    title,
    description,
    onDeleteClick,
}) => {
    const handleDeleteClick = () => {
        onDeleteClick(id); // Call the onDeleteClick callback with the card's id
    };

    return (
        <>
            {/* Start of the cardWrapper */}
            <div className="cardWrapper">
                <div className="grid grid-cols-5 gap-1">
                    <div className="flex items-center justify-center">
                        <input type="checkbox" />{" "}
                        {/* Checkbox for card selection */}
                    </div>
                    <div className="col-span-3">
                        <div className="grid grid-rows-2 grid-flow-col">
                            <div className="col-span-1">
                                <div className="text-xl font-semibold">
                                    {/* Display the title with a specific color */}
                                    <h1 style={{ color: "#4022C9" }}>
                                        {title}
                                    </h1>
                                </div>
                            </div>
                            <div className="col-span-1">
                                <div className="text-md">
                                    {/* Display the description with a specific color */}
                                    <h1 style={{ color: "#9a989e" }}>
                                        {description}
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="grid grid-cols-4 py-5">
                            <div className="col-span-2">
                                <div className="cursor-pointer ">
                                    {/* Display the edit icon with specific styles */}
                                    <IoMdCreate
                                        style={{
                                            fontSize: "24px",
                                            color: "#908e94",
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="col-span-2">
                                <div className="cursor-pointer">
                                    {/* Display the delete icon with specific styles */}
                                    <IoMdTrash
                                        style={{
                                            fontSize: "24px",
                                            color: "#ff7373",
                                        }}
                                        onClick={handleDeleteClick} // Trigger the delete action on click
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card; // Export the Card component
