const FriendsCard = ({ friend }) => {
  const { name, picture, days_since_contact, tags, status } = friend;
  const statusColor = {
    "Overdue": "bg-red-500 ",
    "On-Track": "bg-green-800 ",
    "Almost Due": "bg-yellow-500",
  };
  return (
    <div className="card bg-base-100 shadow-sm space-y-3">
      <div className="flex items-center justify-center">
        <img
          src={picture}
          alt={name}
          className="w-30 h-30 object-cover rounded-full"
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
          className={`badge py-4 text-white font-bold rounded-2xl mx-auto ${statusColor[status]}`}
        >
          {status}
        </div>
      </div>
    </div>
  );
};

export default FriendsCard;
