import { TimelineContext } from "@/context/TimelineProvider";

import { useContext } from "react";

const TimelineHistory = ({ friend }) => {
  console.log(friend);
  const { timeline } = useContext(TimelineContext);
  console.log(timeline);
  const { name, type } = friend;

  const image = {
    Call: "/assets/call.png",
    Text: "assets/text.png",
    Video: "assets/video.png",
  };

  return (
    <div className="space-y-6 mt-4">
      <div className="card container mx-auto lg:card-side bg-base-100 shadow-sm">
        <figure className="ml-2">
          <img src={`${image[type]}`} alt="chat" className="w-8 h-8"></img>
        </figure>

        <div className="card-body">
          <h2 className=""><span className="font-bold text-[16px] text-green-900">{type}</span> with <span className="text-gray-500">{name}</span></h2>
          <p>Date</p>
          
        </div>
      </div>
    </div>
  );
};

export default TimelineHistory;
