import { TbMoneybag } from "react-icons/tb";
function Header() {
  return (
    // Header with gradient background and shadow
    <header className="sticky top-0 m-0 p-0 z-50 bg-gradient-to-r from-cyan-500 to-blue-600 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-8 flex items-center justify-between">
        {/* App Title */}
        <div className="flex items-center gap-3">
                  <TbMoneybag className="text-[#ffd700] text-3xl sm:text-4xl" />
                  {/* 💰 */}
          <div>
            {/* App Name */}
            <h1 className="text-white text-lg sm:text-2xl font-bold tracking-wide">
              Smart Expense Tracker
            </h1>
            {/* App Description */}
            <p className="text-xs text-red-100 font-semibold">
              Track and manage your expense effiently
            </p>
          </div>
        </div>
        
        {/* Optional Right Section (future use: profile / theme / menu) */}
        <div className="text-white text-lg opacity-90 hidden sm:block">
          Track • Save • Grow
        </div>
      </div>
    </header>
  );
}

export default Header;
