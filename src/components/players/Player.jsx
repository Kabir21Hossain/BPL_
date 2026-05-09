// ✅ Player receives the handler from props — no local state needed
const Player = ({ player, onChoosePlayer }) => {
  return (
    <div className="max-w-[340px] p-2 rounded-xl shadow-xl">
      <img
        src={player.image}
        alt={player.name}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <div className="logo-name flex gap-4 mb-2 items-center">
        <i className="fa-solid fa-user"></i>
        <span className="font-bold text-black text-md">
          {player.playerName}
        </span>
      </div>

      <div className="flag flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <i className="fa-solid fa-flag"></i>
          <span className="font-semibold text-sm">{player.playerCountry}</span>
        </div>

        <span className="font-light text-sm min-w-20 shadow-xl bg-gray-100 px-2 rounded-md hover:scale-103">
          {player.playerType}
        </span>
      </div>

      <div className="flex items-center justify-between bg-blue-200 p-1 rounded-md mt-2 shadow-sm">
        <span className="font-bold">Rating</span>
        <span className="font-bold">{player.rating}</span>
      </div>

      {player.playerType === "All-Rounder" && (
        <div className="flex flex-col flex-1 gap-2 mt-2 p-2">
          <div className="mt-2 flex justify-between items-center ">
            <span className="font-bold ">Batting-Style</span>
            <span>{player.battingStyle}</span>
          </div>

          <div className=" mt-2 flex justify-between items-center">
            <span className="font-bold">Bowling-Style</span>
            <span>{player.bowlingStyle}</span>
          </div>
        </div>
      )}

      {player.playerType === "Bowler" && (
        <div className="flex flex-col flex-1 gap-2 mt-2 p-2">
          <div className="mt-2 flex justify-between items-center ">
            <span className="font-bold ">Bowling-Style</span>
            <span>{player.bowlingStyle}</span>
          </div>
        </div>
      )}

      {player.playerType === "Batsman" && (
        <div className="flex flex-col  flex-1 gap-2 mt-2 p-2">
          <div className="mt-2 flex justify-between items-center ">
            <span className="font-bold ">Batting-Style</span>
            <span>{player.battingStyle}</span>
          </div>
        </div>
      )}

      <div className="price-btn flex justify-between items-center mt-4">
        <p>Price:${player.price.toLocaleString()}</p>
        {/* ✅ Calls the handler from App via props */}
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 h-7 items-center flex"
          onClick={() => onChoosePlayer(player)}
        >
          Choose Player
        </button>
      </div>
    </div>
  );
};

export default Player;
