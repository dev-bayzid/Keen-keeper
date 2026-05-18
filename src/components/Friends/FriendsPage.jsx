"use client";
import FriendsCard from "@/components/Friends/FriendsCard";
import React, { useEffect, useState } from "react";
import { HashLoader } from "react-spinners";

const FriendsPage = () => {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data/data.json");
      const data = await res.json();

      setTimeout(() => {
        setFriends(data);
        setLoading(false);
      }, 200);
    };

    fetchData();
  }, []);
  console.log(friends, loading);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <HashLoader color="#244D3F" size={70} />
      </div>
    );
  }

  return (
    <div className="mt-15 space-y-6">
      <h3 className="font-bold text-2xl text-center">Your Friends</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 container mx-auto">
        {friends.map((friend) => (
          <FriendsCard key={friend.id} friend={friend}></FriendsCard>
        ))}
      </div>
    </div>
  );
};

export default FriendsPage;
