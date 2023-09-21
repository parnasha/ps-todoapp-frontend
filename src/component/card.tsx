"use client";

import React, { useState } from "react";
import { IoMdCreate, IoMdTrash } from "react-icons/io";
import { AiOutlineCheckCircle } from "react-icons/ai";
import "./card.css";

interface CardProps {
  id: string;
  title: string;
  description: string;
  isDone: boolean;
  onDeleteClick: (id: string) => void;
  onSaveEdit: (
    id: string,
    editedTitle: string,
    editedDescription: string
  ) => void;
  onCheckTask: (id: string, isDone: boolean) => void;
}

const Card: React.FC<CardProps> = ({
  id,
  title,
  description,
  isDone,
  onDeleteClick,
  onSaveEdit,
  onCheckTask,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedDescription, setEditedDescription] = useState(description);
  const [isChecked, setIsChecked] = useState(isDone);

  const handleEditing = () => {
    setIsEditing((state) => !state);
  };

  const handleSaveClick = () => {
    onSaveEdit(id, editedTitle, editedDescription);
    setIsEditing(false); // Disable editing mode after saving
  };
  const handleCheckboxClick = () => {
    setIsChecked(!isChecked);
    // console.log(id)
    // Toggle the isChecked state and update isDone prop in the parent
    onCheckTask(id, !isChecked);
    // You can also pass the updated isDone value to the parent component here if needed
  };

  return (
    <div className="cardWrapper">
      <div className="grid grid-cols-5 gap-1">
        <div className="flex items-center justify-center">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxClick}
          />
        </div>
        <div className="col-span-3">
          <div className="grid grid-rows-2 grid-flow-col">
            <div className="col-span-1">
              <div className="text-xl font-semibold">
                {isEditing ? (
                  <input
                    type="text"
                    value={editedTitle}
                    onChange={(e) => setEditedTitle(e.target.value)}
                    className="editInput "
                  />
                ) : (
                  <h1 style={{ color: "#4022C9" }}>{title}</h1>
                )}
              </div>
            </div>
            <div className="col-span-1">
              <div className="text-md">
                {isEditing ? (
                  <input
                    type="text"
                    value={editedDescription}
                    onChange={(e) => setEditedDescription(e.target.value)}
                    className="editInput "
                  />
                ) : (
                  <h1 style={{ color: "#9a989e" }}>{description}</h1>
                )}
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-4 py-5">
            <div className="col-span-2">
              <div className="cursor-pointer">
                {isEditing ? (
                  <AiOutlineCheckCircle
                    style={{
                      fontSize: "24px",
                      color: "#00cc00", // Save icon color
                    }}
                    onClick={handleSaveClick}
                  />
                ) : (
                  <IoMdCreate
                    style={{
                      fontSize: "24px",
                      color: "#908e94",
                    }}
                    onClick={handleEditing}
                  />
                )}
              </div>
            </div>
            <div className="col-span-2">
              <div className="cursor-pointer">
                <IoMdTrash
                  style={{
                    fontSize: "24px",
                    color: "#ff7373",
                  }}
                  onClick={() => onDeleteClick(id)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
