"use client";
import { createContext } from "react";
import { useState } from "react";
import { toast } from "react-toastify";

export const TimelineContext = createContext();

const TimelineProvider = ({ children }) => {
  const [timeline, setTimeline] = useState([]);

  const handleTimeline = (type, friends) => {
    // console.log(friends);

    const existedFriends = timeline.find(
      (fd) => fd.id === friends.id && fd.type === type,
    );

    if (!existedFriends) {
      toast.success(`${type} with ${friends.name}`);
      setTimeline([
        ...timeline,
        {
          ...friends,
          type,
        },
      ]);
    } else {
      toast.success(`Text with ${friends.name}`);
    }
  };

  //   const handleCallBtn = (friends) => {
  //     // console.log(friends);

  //     const existedFriends = timeline.find((fd) => fd.id === friends.id);

  //     if (!existedFriends) {
  //       toast.success(`Call with ${friends.name}`);
  //       setTimeline([...timeline, friends]);
  //     } else {
  //       toast.success(`Call with ${friends.name}`);
  //     }
  //   };

  //   const handleTextBtn = (friends) => {
  //     // console.log(friends);

  //     const existedFriends = timeline.find((fd) => fd.id === friends.id);

  //     if (!existedFriends) {
  //       toast.success(`Text with ${friends.name}`);
  //       setTimeline([...timeline, friends]);
  //     } else {
  //       toast.success(`Text with ${friends.name}`);
  //     }
  //   };
  //   const handleVideoBtn = (friends) => {
  //     // console.log(friends);

  //     const existedFriends = timeline.find((fd) => fd.id === friends.id);

  //     if (!existedFriends) {
  //       toast.success(`Video with ${friends.name}`);
  //       setTimeline([...timeline, friends]);
  //     } else {
  //       toast.success(`Video with ${friends.name}`);
  //     }
  //   };

  const data = {
    handleTimeline,
    timeline,
    setTimeline,
  };

  return (
    <TimelineContext.Provider value={data}>{children}</TimelineContext.Provider>
  );
};

export default TimelineProvider;
