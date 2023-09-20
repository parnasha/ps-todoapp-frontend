"use client";
import React from "react";
import { IoMdCreate, IoMdTrash } from "react-icons/io";
import "./card.css";
interface CardProps {
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, description }) => {
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
                <IoMdTrash></IoMdTrash>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="grid grid-cols-6">
          <div className="col-span-1">
            <input type="checkbox" />
          </div>
          <div className="col-span-3">
            <div className="grid grid-rows-2 grid-flow-col">
              <div className="col-span-1">
                <div className="text-xl">
                  <h1 style={{ color: "#4022C9" }}>{title}</h1>
                </div>
              </div>
              <div className="col-span-1">
                <div className="text-xl">
                  <h1 style={{ color: "#9a989e" }}>{description}</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <IoMdCreate />
          </div>
          <div className="col-span-1">
            <IoMdTrash />
          </div>
        </div> */}
      </div>
      {/* <div className="border-2 border-sky-500">
        <div className="flex item-center py-5 justify-center my-5">
          <div className="row-span-1" style={{ width: "90%" }}>
            <div className="grid grid-cols-5 gap-4 ">
              <div className="col-span-1 flex item-center justify-center">
                <input type="checkbox" />
              </div>
              <div className="col-span-1 flex item-center justify-center text-slate-500 font-semibold">
                Title {title}
              </div>
              <div className="col-span-1 flex item-center justify-center text-slate-500 font-semibold">
                Description {description}
              </div>
              <div className="col-span-1 flex item-center justify-center text-slate-500 font-semibold">
                <IoMdCreate />
              </div>
              <div className="col-span-1 flex item-center justify-center text-slate-500 font-semibold">
                <IoMdTrash />
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Card;
