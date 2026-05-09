# 🏏 BPL Dream Team — Build Your Ultimate Cricket XI

A React-based cricket team builder where you can browse players, manage coins, and assemble your dream squad of 6 players.

🔗 **Live Site:** [https://bpl-dream-team.netlify.app](https://stalwart-clafoutis-44ee84.netlify.app/)

---

## ✨ Features

- **Browse Players** — View a rich card-based gallery of 20 cricket players with their stats, batting/bowling styles, ratings, and prices.
- **Claim Free Credits** — Click the banner button to earn coins and start building your team.
- **Choose Players** — Select up to 6 players for your dream squad. Coins are automatically deducted on selection.
- **Remove Players** — Remove a selected player anytime and get a full coin refund.
- **Smart Validations** — Prevents duplicate selection, exceeding the 6-player limit, and choosing players you can't afford.
- **Tab Switching** — Toggle between "Available" and "Selected" views with live player counts.

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| **React 19** | UI library with `use()` hook for async data |
| **Vite** | Fast build tool and dev server |
| **Tailwind CSS 4** | Utility-first CSS framework |
| **DaisyUI** | Tailwind component library (buttons, loaders) |
| **Font Awesome** | Icons for UI elements |

---

## 📁 Project Structure

```
BPL-React-Project/
├── public/
│   └── player.json            # Player data (20 players)
├── src/
│   ├── assets/                # Logo, banner, and background images
│   ├── components/
│   │   ├── hero/
│   │   │   └── Hero.jsx       # Banner with "Claim Free Credit" button
│   │   ├── navbar/
│   │   │   └── Navbar.jsx     # Navigation bar with coin display
│   │   └── players/
│   │       ├── Player.jsx     # Individual player card
│   │       ├── Players.jsx    # Player grid + tab switching
│   │       └── SelectedPlayers.jsx  # Selected players list
│   ├── App.jsx                # Root component (state management)
│   ├── App.css                # Custom styles
│   ├── index.css              # Tailwind imports
│   └── main.jsx               # Entry point
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** (v9 or higher)

### Installation

```bash
# Clone the repository
git clone https://github.com/Kabir21Hossain/BPL_.git

# Navigate to the project directory
cd BPL_

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be running at `http://localhost:5173`.

---

## 📖 How It Works

1. **Click "Claim Free Credit"** on the banner to receive coins.
2. **Browse** the available player cards.
3. **Click "Choose Player"** on a card to add them to your squad (coins will be deducted).
4. **Switch to the "Selected" tab** to view your chosen players.
5. **Remove a player** to get a full refund and free up a slot.

---

## 🧠 Key React Concepts Used

- **Lifting State Up** — `coins` and `selectedPlayers` state managed in `App.jsx` and passed down via props.
- **React 19 `use()` Hook** — Used with `Suspense` to handle async data fetching for player data.
- **Conditional Rendering** — Player type-specific stats (Batsman, Bowler, All-Rounder) rendered dynamically.
- **Props & Callbacks** — Child components communicate back to the parent through handler functions passed as props.

---

## 👤 Author

**Kabir Hossain**
- GitHub: [@Kabir21Hossain](https://github.com/Kabir21Hossain)
