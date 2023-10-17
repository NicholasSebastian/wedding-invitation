"use client";
import { Fragment, useState } from "react";
import config from "../app/config.json";
import type { FC } from "react";

const Donations: FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <Fragment>
      <button 
        className="block mx-auto bg-red-500 py-2 px-3 text-sm rounded"
        onClick={() => setOpen(true)}>
        Send your Online Gifts here!
      </button>
      {open && (
        <div className="text-gray-700 text-center mt-4">{config.bank}</div>
      )}
    </Fragment>
  );
}

export default Donations;
