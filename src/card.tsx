import React from "react";
import { IoMdCreate, IoMdTrash } from "react-icons/io";

const Card = () => {
    return (
        <>
            <div className="flex item-center py-5 justify-center">
                <div className="row-span-1" style={{ width: "90%" }}>
                    <div className="grid grid-cols-5 gap-4 ">
                        <div className="col-span-1 flex item-center justify-center">
                            <input type="checkbox" />
                        </div>
                        <div className="col-span-1 flex item-center justify-center text-slate-500 font-semibold">
                            Title
                        </div>
                        <div className="col-span-1 flex item-center justify-center text-slate-500 font-semibold">
                            Description
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
        </>
    );
};

export default Card;
