import React from "react";
import { FaInstagram } from "react-icons/fa";
import { BsFacebook, BsTwitter } from "react-icons/bs";

const socialMedia = () => {
  return (
    <div className="flex gap-[1.5rem] transition-all text-[#767676] hover:text-black">
      <FaInstagram size={20} className="text-[#767676] hover:text-black" />
      <BsFacebook size={20} className="text-[#767676] hover:text-black" />
      <BsTwitter size={20} className="text-[#767676] hover:text-black" />
    </div>
  );
};

export default socialMedia;
