"use client";
import React from "react";
import { IoMdCreate, IoMdTrash } from "react-icons/io";
import "./card.css";

interface CardProps {
  id: string;
  title: string;
  description: string;
  onDeleteClick: (id: string) => void; // Callback function to handle delete
}

const Card: React.FC<CardProps> = ({
  id,
  title,
  description,
  onDeleteClick,
}) => {
  const handleDeleteClick = () => {
    // Call the onDeleteClick callback with the card ID
    onDeleteClick(id);
  };

  return (
    <>
      <div className="cardWrapper">
        <div className="grid grid-cols-5 gap-1">
          <div className="flex items-center justify-center">
            <input type="checkbox" />
          </div>
          <div className="col-span-3">
            <div className="grid grid-rows-2 grid-flow-col">
              <div className="col-span-1">
                <div className="text-xl font-semibold">
                  <h1 style={{ color: "#4022C9" }}>{title}</h1>
                </div>
              </div>
              <div className="col-span-1">
                <div className="text-md">
                  <h1 style={{ color: "#9a989e" }}>{description}</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="...">
            <div className="grid grid-rows-2 grid-flow-col items-center justify-center gap-4">
              <div className="col-span-1">
                <IoMdCreate />
              </div>
              <div className="col-span-1">
                <IoMdTrash onClick={handleDeleteClick} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
