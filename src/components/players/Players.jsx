import { use, useState } from "react";
import Player from "./Player";
import SelectedPlayers from "./SelectedPlayers";

const Players = ({
  playersPromise,
  selectedPlayers,
  onChoosePlayer,
  onRemovePlayer,
}) => {
  const players = use(playersPromise);
  const [selectedType, setSelectedType] = useState("Available");

  const handleSelected = (type) => {
    setSelectedType(type);
  };

  const handleAvailable = (type) => {
    setSelectedType(type);
  };

  return (
    <>
      <div className="container mx-auto mt-5 shadow-md rounded-md">
        <div className="header flex justify-between items-center bg-gray-200 p-3 rounded-t-md shadow-md mb-5">
          <div className="left">
            {selectedType === "Available" ? (
              <p>Available Players({players.length})</p>
            ) : (
              <p>Selected Players({selectedPlayers.length}/6)</p>
            )}
          </div>
          <div className="right flex gap-3">
            <button
              className={`btn h-7 ${
                selectedType === "Available"
                  ? "bg-[#E7FE29]"
                  : "bg-gray-100"
              }`}
              onClick={() => handleAvailable("Available")}
            >
              Available
            </button>
            <button
              className={`btn h-7 ${
                selectedType === "Selected"
                  ? "bg-[#E7FE29]"
                  : "bg-gray-100"
              }`}
              onClick={() => handleSelected("Selected")}
            >
              Selected({selectedPlayers.length})
            </button>
          </div>
        </div>

        {/* ✅ Available Players Grid */}
        <div
          className={`palyer-list mx-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ${
            selectedType === "Available" ? "block" : "hidden"
          }`}
        >
          {players.map((player) => (
            // ✅ key prop added + onChoosePlayer passed down
            <Player
              key={player.playerName}
              player={player}
              onChoosePlayer={onChoosePlayer}
            />
          ))}
        </div>

        {/* ✅ Selected Players View */}
        <div className={`${selectedType === "Selected" ? "block" : "hidden"}`}>
          <SelectedPlayers
            selectedPlayers={selectedPlayers}
            onRemovePlayer={onRemovePlayer}
            onBackToAvailable={() => handleAvailable("Available")}
          />
        </div>
      </div>
    </>
  );
};

export default Players;
