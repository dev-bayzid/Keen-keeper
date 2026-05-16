"use client";
import { formatDate } from "@/utils/formatDate";
import friendsData from "../../../../../public/data/data.json";
import {
  Archive,
  BellRing,
  MessageSquareMore,
  PhoneCall,
  Trash2,
  Video,
} from "lucide-react";
import Link from "next/link";
import { use,useContext } from "react";
import { TimelineContext } from "@/context/TimelineProvider";

const FriendsDetailsPage = ({ params }) => {
  const friends = friendsData;

  const { id } = use(params);
  const singleFriend = friends.find((friend) => friend.id == id);
  // console.log(singleFriend);

  // console.log(id);
  // console.log(singleFriend);

  const {
    name,
    picture,
    email,
    goal,
    next_due_date,
    days_since_contact,
    status,
    tags,
    bio,
  } = singleFriend;

  const statusColor = {
    Overdue: "bg-red-500 ",
    "On-Track": "bg-green-800 ",
    "Almost Due": "bg-yellow-500",
  };

  const { handleCallBtn } = useContext(TimelineContext);

  return (
    <div className="min-h-screen  py-20 bg-base-300 ">
      <div className="grid grid-cols-1 md:grid-cols-2 container mx-auto gap-4">
        <div className="left-section">
          <div className="mx-auto space-y-4">
            <div className="card bg-base-100 shadow-sm space-y-3">
              <div className="flex items-center justify-center pt-2">
                <img
                  src={picture}
                  alt={name}
                  className="w-30 h-30 object-cover rounded-full"
                />
              </div>
              <div className="card-body text-center">
                <h2 className="text-xl font-bold">{name}</h2>

                <div className="flex justify-center items-center">
                  {tags.map((tag, ind) => (
                    <div
                      key={ind}
                      className="badge bg-[#CBFADB] text-[#244D3F] rounded-2xl font-semibold uppercase"
                    >
                      {tag}
                    </div>
                  ))}
                </div>
                <div
                  className={`badge py-3 text-white font-bold rounded-2xl mx-auto ${statusColor[status]}`}
                >
                  {status}
                </div>
                <p className="text-gray-500 font-semibold">{bio}</p>
                <p className="text-gray-500 font-light">Email: {email}</p>
              </div>
            </div>
            <div className="space-y-2">
              <button className="btn bg-base-100 w-full">
                <span>
                  <BellRing className="w-5 h-4"></BellRing>
                </span>{" "}
                Snooze 2 weeks
              </button>
              <button className="btn bg-base-100 w-full">
                <span className="font-bold">
                  <Archive className="w-5 h-4"></Archive>
                </span>{" "}
                Archive
              </button>
              <button className="btn bg-base-100 w-full text-red-600">
                <span>
                  <Trash2 className="w-5 h-4"></Trash2>
                </span>{" "}
                Delete
              </button>
            </div>
          </div>
        </div>
        <div className="right-section">
          <div className=" space-y-6">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              <div className="card w-50 shadow-sm text-center space-y-3 py-6 bg-base-100">
                <h1 className="text-green-900 font-bold text-3xl">
                  {days_since_contact}
                </h1>
                <p className="text-gray-500">Days Since Contact</p>
              </div>
              <div className="card w-50 shadow-sm text-center  space-y-3 py-6 bg-base-100">
                <h1 className="text-green-900 font-bold text-3xl">{goal}</h1>
                <p className="text-gray-500">Goal (Days)</p>
              </div>
              <div className="card w-50 shadow-sm text-center space-y-3 py-6 bg-base-100">
                <h1 className="text-green-900 font-bold text-3xl">
                  {formatDate(next_due_date)}
                </h1>
                <p className="text-gray-500">Next Due</p>
              </div>
            </div>
            <div>
              <div className="card w-full shadow-sm px-4 py-6 bg-base-100">
                <div className="flex justify-between items-center">
                  <h1 className="font-semibold text-green-900">
                    Relationship Goal
                  </h1>
                  <button className="btn">Edit</button>
                </div>
                <p>
                  <span className="text-gray-500">Connect every</span>{" "}
                  <span className="font-bold">{goal} Days</span>
                </p>
              </div>
            </div>
            <div>
              <div className="card w-full shadow-sm px-4 py-6 bg-base-100 space-y-2">
                <h1 className="font-semibold text-green-900">Quick Check-In</h1>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                  <Link
                    onClick={() => {
                      handleCallBtn(singleFriend);
                    }}
                    href=""
                    className="card w-50 shadow-sm py-4 bg-base-300"
                  >
                    <div className="mx-auto">
                      <PhoneCall></PhoneCall>
                      <p>Call</p>
                    </div>
                  </Link>
                  <Link
                    href=""
                    className="card w-50 shadow-sm  py-4 bg-base-300"
                  >
                    <div className="mx-auto">
                      <MessageSquareMore className="text-center"></MessageSquareMore>
                      <p>Text</p>
                    </div>
                  </Link>
                  <Link
                    href=""
                    className="card w-50 shadow-sm py-4 bg-base-300"
                  >
                    <div className="mx-auto">
                      <Video></Video>
                      <p>Video</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendsDetailsPage;
