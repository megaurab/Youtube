import React from "react";
import { MdOutlineKeyboardVoice } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";

const Head = () => {
  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          className="h-8 mr-8"
          alt="menu-icon"
          src="https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/What%20is%20a%20Hamburger%20Button.png?width=225&name=What%20is%20a%20Hamburger%20Button.png"
        />
        <img
          className="h-8"
          alt="youtube-logo"
          src="data:image/png;base64,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"
        />
      </div>
      <div className="col-span-10">
        <div className="flex justify-center items-center">
          <input
            className="bg-slate-300 rounded-3xl mr-4 px-40 py-1.5 italic mb-2"
            type="text"
            placeholder="Search"
          />
          <div className="h-8 w-8 rounded-full bg-slate-300 flex items-center pl-1 mb-1.5">
            <button>
              <CiSearch className="h-6 w-6" />
            </button>
          </div>
          <div className="h-8 w-8 rounded-full bg-slate-300 flex items-center ml-5 mb-1.5 pl-1.5">
            <button>
              <MdOutlineKeyboardVoice className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
      <div className="col-span-1 w-8 h-8 bg-slate-300 rounded-full mt-1">
        <button><FaRegUser className="h-4 w-4 mt-2"/></button>
      </div>
    </div>
  );
};

export default Head;
