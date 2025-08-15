
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const CouncilMemberCard = ({ Name, Position, Image, SocialMedia }) => {
  return (
    <div className="w-[20rem] h-auto border rounded-md bg-red-300 ">
      <img src={Image} alt={Name} className="border rounded-md h-[20rem] w-[20rem] object-cover" />
      <div className="flex flex-col mt-2 items-center gap-1">
        <p className="font-semibold">{Name}</p>
        <p className="text-sm font-semibold">{Position}</p>
        <div className="flex gap-3 mt-1 mb-2">
          {SocialMedia.LinkedIn && (
            <a href={SocialMedia.LinkedIn} target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-2xl hover:text-blue-500" />
            </a>
          )}
          {SocialMedia.Instagram && (
            <a href={SocialMedia.Instagram} target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-2xl hover:text-pink-500" />
            </a>
          )}
          {SocialMedia.Facebook && (
            <a href={SocialMedia.Facebook} target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-2xl hover:text-blue-400" />
            </a>
          )}
          {SocialMedia.Twitter && (
            <a href={SocialMedia.Twitter} target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-2xl hover:text-blue-300" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default CouncilMemberCard;
