import { TimelineContext } from "@/context/TimelineProvider";
import { useContext } from "react";

const TimelineHistory = () => {
  const { timeline } = useContext(TimelineContext);
  console.log(timeline);

  return (
    <div className="space-y-6 mt-4">
      <div className="card container mx-auto lg:card-side bg-base-100 shadow-sm">
        <figure></figure>
        <div className="card-body">
          <h2 className="card-title"></h2>
          <p></p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
    </div>
  );
};

export default TimelineHistory;
