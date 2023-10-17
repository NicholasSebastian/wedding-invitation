"use client";
import { Fragment, useState } from "react";
import config from "../app/config.json";
import { IoGift } from "@react-icons/all-files/io5/IoGift";
import { BiCopy } from "@react-icons/all-files/bi/BiCopy";
import type { FC } from "react";

const Donations: FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <Fragment>
      <button 
        className="block mx-auto bg-red-500 py-2 px-3 text-sm rounded"
        onClick={() => setOpen(true)}>
        <IoGift className="inline mr-1" style={{ marginTop: -2 }} />
        <span>Send your Online Gifts here!</span>
      </button>
      {open && (
        <div className="text-center mt-4">
          <div className="text-gray-700">{config.bank.text}</div>
          <button 
            onClick={() => navigator.clipboard.writeText(config.bank.number.toString())}
            className="text-red-500 focus:outline-none focus:underline" >
            <BiCopy className="inline text-lg mr-1" style={{ marginTop: -1 }} />
            <span className="text-sm">Copy to Clipboard</span>
          </button>
        </div>
      )}
    </Fragment>
  );
}

export default Donations;
