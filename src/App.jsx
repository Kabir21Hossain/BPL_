import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Players from "./components/players/Players";
import { Suspense, useState } from "react";

const FetchPlayer = async () => {
  const res = await fetch("player.json");
  return res.json();
};

function App() {
  const playersPromise = FetchPlayer();

  // ✅ State lives in App — the common parent
  const [coins, setCoins] = useState(0);
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  // ✅ Handler: Claim free credit
  const handleClaimCredit = () => {
    setCoins((prev) => prev + 5000000); // 100 crore
  };

  // ✅ Handler: Choose a player (deducts coins)
  const handleChoosePlayer = (player) => {
    // Check if already selected
    const isAlreadySelected = selectedPlayers.find(
      (p) => p.playerName === player.playerName
    );
    if (isAlreadySelected) {
      alert(`${player.playerName} is already selected!`);
      return;
    }

    // Check if enough coins
    if (coins < player.price) {
      alert("Not enough coins! Claim more credit.");
      return;
    }

    // Max 6 players
    if (selectedPlayers.length >= 6) {
      alert("You can select a maximum of 6 players!");
      return;
    }

    // ✅ Deduct coins & add player
    setCoins((prev) => prev - player.price);
    setSelectedPlayers((prev) => [...prev, player]);
  };

  // ✅ Handler: Remove a player (refund coins)
  const handleRemovePlayer = (player) => {
    setCoins((prev) => prev + player.price);
    setSelectedPlayers((prev) =>
      prev.filter((p) => p.playerName !== player.playerName)
    );
  };

  return (
    <>
      {/* Pass coins as prop */}
      <Navbar coins={coins}></Navbar>

      {/* Pass claim handler to Hero */}
      <Hero onClaimCredit={handleClaimCredit}></Hero>

      <Suspense
        fallback={
          <span className="loading loading-spinner loading-lg"></span>
        }
      >
        {/* Pass everything Players needs */}
        <Players
          playersPromise={playersPromise}
          selectedPlayers={selectedPlayers}
          onChoosePlayer={handleChoosePlayer}
          onRemovePlayer={handleRemovePlayer}
        ></Players>
      </Suspense>
    </>
  );
}

export default App;
