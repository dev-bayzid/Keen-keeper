"use client";
import TimelineHistory from "@/components/TimeLineHistory/TimelineHistory";
import { TimelineContext } from "@/context/TimelineProvider";
import { useContext } from "react";

const TimelinePage = () => {
  const { timeline } = useContext(TimelineContext);
  console.log(timeline);

  return (
    <div className="min-h-screen bg-base-300 py-20">
      <div className="container mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-start">Timeline</h1>
        <div>
          <label className="select ">
            <span className="label">Filter Timeline</span>
            <select className="select select-bordered w-full md:w-52">
              <option value="">All</option>

              <option>Text</option>

              <option>Call</option>

              <option>Video</option>
            </select>
          </label>
        </div>
      </div>
      {timeline.map((friend, ind) => (
        <TimelineHistory key={ind} friend={friend}></TimelineHistory>
      ))}
    </div>
  );
};

export default TimelinePage;
