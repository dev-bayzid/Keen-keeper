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
      className="card bg-base-100 shadow-sm space-y-3"
    >
      <div className="flex items-center justify-center py-2">
        <img
          src={picture}
          alt={name}
          className="w-20 h-20 object-cover rounded-full"
        />
      </div>
      <div className="card-body text-center">
        <h2 className="text-xl font-bold">{name}</h2>
        <p className="text-gray-500 font-semibold">{days_since_contact}d ago</p>
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
      </div>
    </Link>
  );
};

export default FriendsCard;
