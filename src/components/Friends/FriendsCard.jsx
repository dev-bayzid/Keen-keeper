import Link from "next/link";

const FriendsCard = ({ friend }) => {
  const { name, id, picture, days_since_contact, tags, status } = friend;
  const statusColor = {
    Overdue: "bg-red-500 ",
    "On-Track": "bg-green-800 ",
    "Almost Due": "bg-yellow-500",
  };
  return (
    <Link
      href={`/friends/${id}`}
      className="card bg-base-100 shadow-sm hover:shadow-xl transition duration-300 hover:-translate-y-1 h-full"
    >
      <div className="flex items-center justify-center pt-6">
        <img
          src={picture}
          alt={name}
          className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-full border-4 border-base-200"
        />
      </div>

      <div className="card-body text-center">
        <h2 className="text-xl font-bold break-words">{name}</h2>

        <p className="text-gray-500 font-semibold">{days_since_contact}d ago</p>

        <div className="flex flex-wrap justify-center gap-2">
          {tags.map((tag, ind) => (
            <div
              key={ind}
              className="badge bg-[#CBFADB] text-[#244D3F] rounded-2xl font-semibold uppercase border-none"
            >
              {tag}
            </div>
          ))}
        </div>

        <div
          className={`badge py-3 px-4 text-white font-bold rounded-2xl mx-auto border-none ${statusColor[status]}`}
        >
          {status}
        </div>
      </div>
    </Link>
  );
};

export default FriendsCard;
