"use client"
import { TimelineContext } from "@/context/TimelineProvider";
import { useContext } from "react";

const TimelinePage = () => {

  const {timelineFriends} = useContext(TimelineContext);
  console.log(timelineFriends);

  return (
    <div className="min-h-screen bg-base-300 py-20">
      <div className="container mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-start">Timeline</h1>
        <div>
          <label className="select">
            <span className="label">Filter Timeline</span>
            <select>
              <option> </option>
              <option>Text</option>
              <option>Call</option>
              <option>Video</option>
            </select>
          </label>
        </div>
      </div>
      <div className="space-y-6 mt-4">
        <div className="card container mx-auto lg:card-side bg-base-100 shadow-sm">
          <figure>
            
          </figure>
          <div className="card-body">
            <h2 className="card-title"></h2>
            <p></p>
            <div className="card-actions justify-end">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelinePage;
