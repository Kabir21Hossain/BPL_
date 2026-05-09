// ✅ Import the image — Vite will bundle it into the build
import logo from "../../assets/logo.png";

const Navbar = ({ coins }) => {
  return (
    <div className="container mx-auto px-2 py-1 flex justify-between items-center">
      <img src={logo} alt="logo" className="w-12" />
      <div className="flex items-center gap-3">
        <ul className="flex items-center gap-6">
          <li className="text-sm">
            <a href="/Home">Home</a>
          </li>
          <li className="text-sm">
            <a href="/About">Fixture</a>
          </li>
          <li className="text-sm">
            <a href="/Services">Teams</a>
          </li>
          <li className="text-sm">
            <a href="/Contact">Schedules</a>
          </li>
        </ul>
        <button className="btn rounded-md h-7">
          <span>{coins.toLocaleString()}</span>
          Coin
          <span>
            <i className="fa-brands fa-bitcoin"></i>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;