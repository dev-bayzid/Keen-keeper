import { TimelineContext } from "@/context/TimelineProvider";

import { useContext } from "react";

const TimelineHistory = ({ friend }) => {
  console.log(friend);
  const { timeline } = useContext(TimelineContext);
  console.log(timeline);
  const { name, type, time } = friend;

  const image = {
    Call: "/assets/call.png",
    Text: "/assets/text.png",
    Video: "/assets/video.png",
  };

  return (
    <div className="mt-4">
      <div className="bg-base-100 container mx-auto shadow-sm rounded-2xl p-4 hover:shadow-md transition">
        <div className="flex items-center gap-4">
          <div className="bg-base-200 rounded-full p-3 shrink-0">
            <img
              src={image[type]}
              alt={type}
              className="w-6 h-6 object-contain"
            />
          </div>

          <div className="space-y-1">
            <h2 className="text-sm md:text-base">
              <span className="font-bold text-green-900">{type}</span> with{" "}
              <span className="text-gray-500 font-medium">{name}</span>
            </h2>

            <p className="text-sm text-gray-400">
              {new Date(time).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineHistory;
