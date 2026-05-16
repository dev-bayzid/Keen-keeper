import FriendsCard from "@/components/Friends/FriendsCard";
import React from "react";

const FriendsPage = async ({friends}) => {
  // const res = await fetch("http://localhost:3000/data/friends.json");
  // const friends = await res.json();
  // // console.log(friends);

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
