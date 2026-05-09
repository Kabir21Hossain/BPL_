import "../../App.css";
// ✅ Import the image — Vite will bundle it into the build
import bannerMain from "../../assets/banner-main.png";

const Hero = ({ onClaimCredit }) => {
  return (
    <>
      <div className="bg-hero container mx-auto  flex flex-col items-center rounded-md relative">
        <div className="w-full h-full flex flex-col justify-center items-center bg-black/50 rounded-md">
          <img src={bannerMain} alt="banner" />
          <h2 className="text-3xl font-bold text-white mb-4 mt-2">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h2>
          <p className="text-gray-400 font-semibold text-sm">
            Beyond Boundaries Beyond Limits
          </p>
          {/* ✅ onClick calls the handler from App */}
          <button
            onClick={onClaimCredit}
            className="mt-2 btn bg-[#E7FE29] font-bold text-black text-md outline-1 outline-[#E7FE29]"
          >
            Claim Free Credit
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;