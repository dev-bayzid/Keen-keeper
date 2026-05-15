import FriendsCard from "@/components/Freinds/FriendsCard";

const HomePage = async () => {
  const res = await fetch("http://localhost:3000/data/friends.json");
  const friends = await res.json();
  console.log(friends);

  return (
    <div className="min-h-screen py-20 bg-base-200 ">
      <div>
        {/* title & description */}
        <div className="text-center space-y-5">
          <h1 className="font-bold text-6xl">
            Friends to keep close in your life
          </h1>
          <p className="font-light text-gray-500">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the <br /> relationships that matter most.
          </p>
          <button className="btn bg-[#244D3F] text-white">
            + Add a Friends
          </button>
        </div>
        {/* banner cards */}
        <div className="flex justify-center gap-4 mt-8 ">
          <div className="w-50 text-center bg-white shadow-sm rounded-md">
            <div className="card-body">
              <p className="text-xl font-bold text-[#244D3F]">10</p>
              <p className="text-gray-500">Total Friends</p>
            </div>
          </div>
          <div className="w-50 text-center bg-white shadow-sm rounded-md">
            <div className="card-body">
              <p className="text-xl font-bold text-[#244D3F]">3</p>
              <p className="text-gray-500">On Track</p>
            </div>
          </div>
          <div className="w-50 text-center bg-white shadow-sm rounded-md">
            <div className="card-body">
              <p className="text-xl font-bold text-[#244D3F]">6</p>
              <p className="text-gray-500">Need Attention</p>
            </div>
          </div>
          <div className="w-55 text-center bg-white shadow-sm rounded-md">
            <div className="card-body">
              <p className="text-xl font-bold text-[#244D3F]">12</p>
              <p className="text-gray-500">Interactions This Month</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3>Your Friends</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 container mx-auto">
          {friends.map((friend) => (
            <FriendsCard key={friend.id} friend={friend}></FriendsCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
