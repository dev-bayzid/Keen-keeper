"use client";
import { createContext } from "react";
import { useState } from "react";
import { toast } from "react-toastify";

export const TimelineContext = createContext();

const TimelineProvider = ({ children }) => {
  const [timelineFriends, setTimelineFriend] = useState([]);
  const [timeline, setTimeline] = useState([]);
  const handleCallBtn = (friends) => {
    console.log(friends);

    const existedFriends = timelineFriends.find((fd) => fd.id === friends.id);

    if (!existedFriends) {
      toast.success("Call with A");
      setTimelineFriend([timelineFriends, friends]);
    }
    else{
        toast.success("call with A")
    }
  };

  const data = {
    handleCallBtn,
    timelineFriends,
    setTimelineFriend,
  };

  return (
    <TimelineContext.Provider value={data}>{children}</TimelineContext.Provider>
  );
};

export default TimelineProvider;
