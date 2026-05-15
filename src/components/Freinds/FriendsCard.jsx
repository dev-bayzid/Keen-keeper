const FriendsCard = ({ friend }) => {
  const { name, picture, days_since_contact, tags, status } = friend;
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
        <p>{days_since_contact}</p>
        <h2 className="">{name}</h2>
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
      </div>
    </div>
  );
};

export default FriendsCard;
