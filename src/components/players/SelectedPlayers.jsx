const SelectedPlayers = ({
  selectedPlayers,
  onRemovePlayer,
  onBackToAvailable,
}) => {
  return (
    <div className="p-4">
      {selectedPlayers.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-gray-500 text-lg">No players selected yet.</p>
          <button
            onClick={onBackToAvailable}
            className="mt-4 btn bg-[#E7FE29] font-bold text-black"
          >
            Choose Players
          </button>
        </div>
      ) : (
        <>
          {/* ✅ Map with return + key */}
          {selectedPlayers.map((player) => (
            <div
              key={player.playerName}
              className="flex justify-between items-center bg-white shadow-md rounded-md p-4 mb-3"
            >
              <div className="flex items-center gap-4">
                <img
                  src={player.image}
                  alt={player.playerName}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-bold text-lg">{player.playerName}</h3>
                  <p className="text-sm text-gray-500">
                    {player.playerType} • {player.playerCountry}
                  </p>
                  <p className="text-sm font-semibold text-blue-600">
                    ${player.price.toLocaleString()}
                  </p>
                </div>
              </div>
              {/* ✅ Remove button — refunds coins */}
              <button
                onClick={() => onRemovePlayer(player)}
                className="btn bg-red-100 text-red-600 hover:bg-red-200 rounded-md px-4 h-8 flex items-center"
              >
                <i className="fa-solid fa-trash mr-1"></i> Remove
              </button>
            </div>
          ))}

          <div className="text-center mt-4">
            <button
              onClick={onBackToAvailable}
              className="btn bg-[#E7FE29] font-bold text-black"
            >
              Add More Players
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default SelectedPlayers;