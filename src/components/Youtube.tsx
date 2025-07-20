import React from "react";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SearchIcon from "@mui/icons-material/Search";
import AddSharpIcon from "@mui/icons-material/AddSharp";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import NotificationsNoneSharpIcon from "@mui/icons-material/NotificationsNoneSharp";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
import PersonIcon from "@mui/icons-material/Person";
import { Badge, Button } from "@mui/material";
import Scroller from "./Scroller";
import DropDown from "./DropDown";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Youtube = () => {
  const login=useSelector((state:RootState)=>{
    return state.users;
  })

  return (
    <>
    <div className="m-0 p-0 w-full overflow-hidden">
      <div className=" relative top-0 flex flex-row m-0 py-1 px-3 items-center justify-between w-full ">
        <div className="flex flex-row w-1/4">
          <div className="m-1 mr-0  px-2">
            <div className="rounded-full p-1  py-2 hover:bg-gray-100">
              <MenuSharpIcon className=" mx-2 font-extralight"></MenuSharpIcon>
            </div>
          </div>
          <div className="flex flex-row items-center ml-1 ">
            <YouTubeIcon className="text-red-600 scale-150 ml-1.5"></YouTubeIcon>
            <p
              className="font-bold  scale-y-150 scale-x-95 ml-1.5 cursor-pointer"
              aria-label="YouTube home"
              title="YouTube Home"
            >
              YouTube
            </p>
            <sup className="text-gray-800 scale-y-110">IN</sup>
          </div>
        </div>
        <div className="w-1/2 flex flex-row justify-center">
          <div className="relative flex flex-row w-3/4 justify-center">
            <div className="hidden sm:block">
              {" "}
              <SearchIcon className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 hidden sm:block" />
            </div>

            <input
              className="peer py-1.5 pl-10 pr-4 border-1 border-gray-400 rounded-2xl rounded-r-none w-9/12 text-gray-500 focus:border-blue-300 focus:outline-none hidden sm:block "
              type="text"
              placeholder="Search"
            />
            <div
              className="flex border-1 flex-row justify-center border-gray-400 items-center w-15 bg-gray-50 hover:bg-gray-200 rounded-2xl sm:rounded-2xl sm:rounded-l-none cursor-pointer"
              title="Search"
            >
              <SearchIcon className="text-gray-400  " />
            </div>

            <div
              className="ml-3.5 p-1.5 rounded-full bg-gray-50 hover:bg-gray-200"
              title="Search with your voice"
            >
              <KeyboardVoiceIcon className=" text-gray-500" />
            </div>
          </div>
        </div>
        <div className="w-1/4 flex flex-row-reverse ">
          {login ? (
            <>
              <div className="flex flex-row mr-5">
                <div className="flex flex-row p-2 pr-4 mr-4 rounded-2xl bg-gray-100">
                  <AddSharpIcon></AddSharpIcon> <p>Create</p>
                </div>
                <div className="px-3 pt-1">
                  <Badge color="error" badgeContent={50}>
                    <NotificationsNoneSharpIcon
                      titleAccess="Notifications"
                      className="cursor-pointer"
                    ></NotificationsNoneSharpIcon>
                  </Badge>
                </div>
                <div className="px-3 pt-1">
                  <AccountCircleSharpIcon className="text-blue-500 scale-110"></AccountCircleSharpIcon>
                </div>
              </div>
            </>
          ) : (
            <div className="flex flex-row items-center mr-2.5 p-0.5">
              <DropDown/>
              <div className="rounded-2xl w-25 p-1 px-2 text-blue-500 border-1 border-gray-300 text-sm hover:bg-blue-100">
                <PersonIcon></PersonIcon> <span>Sign in</span>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="absolute top-15 left-[110px] w-[calc(100%-150px)] "><Scroller/></div>
       
       </div>
    </>
  );
};

export default Youtube;
