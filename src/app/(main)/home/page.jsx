import FriendsPage from "@/components/Friends/FriendsPage";
import friendsData from "../../../../public/data/data.json";
// import Friends from "../friends/page";

const HomePage = async () => {
  // const res = await fetch(
  //   "./data/data.json",
  //   {},
  // );
  const friends = friendsData;
  // console.log(friends);

  return (
    <div className="min-h-screen py-10 md:py-16 lg:py-20 px-4 bg-base-300 ">
      <div>
        {/* title & description */}
        <div className="text-center space-y-5">
          <h1 className="font-bold text-3xl md:text-5xl lg:text-6xl">
            Friends to keep close in your life
          </h1>
          <p className="font-light text-gray-500 max-w-2xl mx-auto text-sm md:text-base px-2">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>
          <button className="btn bg-[#244D3F] text-white w-full sm:w-auto">
            + Add a Friends
          </button>
        </div>
        {/* banner cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 max-w-6xl mx-auto">
          <div className="w-full text-center bg-white shadow-sm rounded-md">
            <div className="card-body">
              <p className="text-xl font-bold text-[#244D3F]">
                {friends.length}
              </p>
              <p className="text-gray-500">Total Friends</p>
            </div>
          </div>
          <div className="w-full text-center bg-white shadow-sm rounded-md">
            <div className="card-body">
              <p className="text-xl font-bold text-[#244D3F]">
                {
                  friends.filter((friend) => friend.status === "On-Track")
                    .length
                }
              </p>
              <p className="text-gray-500">On Track</p>
            </div>
          </div>
          <div className="w-full text-center bg-white shadow-sm rounded-md">
            <div className="card-body">
              <p className="text-xl font-bold text-[#244D3F]">
                {
                  friends.filter(
                    (f) => f.status === "Almost Due" || f.status === "Overdue",
                  ).length
                }
              </p>
              <p className="text-gray-500">Need Attention</p>
            </div>
          </div>
          <div className="w-full text-center bg-white shadow-sm rounded-md">
            <div className="card-body">
              <p className="text-xl font-bold text-[#244D3F]">12</p>
              <p className="text-gray-500">Interactions This Month</p>
            </div>
          </div>
        </div>
      </div>
      <FriendsPage friends={friends}></FriendsPage>
    </div>
  );
};

export default HomePage;
