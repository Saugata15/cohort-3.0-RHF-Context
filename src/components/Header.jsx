import { Users, Heart, Building2, Info, Plus } from "lucide-react";
import { useContext } from "react";
import MyStore from "../context/MyStore";

const Header = () => {
  const { isFormOpen, setIsFormOpen } = useContext(MyStore);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-md">
            <Users size={22} />
          </div>

          <div>
            <h1 className="text-lg font-bold text-slate-900">ProfileHub</h1>
            <p className="text-xs text-slate-500">Manage People Profiles</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-3">
            <li>
              <button
                className={`flex cursor-pointer items-center gap-2 rounded-lg px-4 py-3
                text-sm font-medium transition-all 
                ${
                  !isFormOpen
                    ? "text-indigo-600 bg-indigo-50"
                    : "text-slate-600 hover:bg-indigo-50 hover:text-indigo-600"
                }`}
                onClick={() => setIsFormOpen(false)}
              >
                <Users size={18} />
                All Profiles
              </button>
            </li>

            <li>
              <button
                className="flex cursor-pointer items-center gap-2 rounded-lg px-4 py-3
                text-sm font-medium text-slate-600 transition-all
                hover:bg-rose-50 hover:text-rose-600"
              >
                <Heart size={18} />
                Favorites
              </button>
            </li>

            <li>
              <button
                className="flex cursor-pointer items-center gap-2 rounded-lg px-4 py-3
                text-sm font-medium text-slate-600 transition-all
                hover:bg-emerald-50 hover:text-emerald-600"
              >
                <Building2 size={18} />
                Departments
              </button>
            </li>

            <li>
              <button
                className="flex cursor-pointer items-center gap-2 rounded-lg px-4 py-3
                text-sm font-medium text-slate-600 transition-all
                hover:bg-amber-50 hover:text-amber-600"
              >
                <Info size={18} />
                About
              </button>
            </li>
          </ul>
        </nav>

        {/* Create Profile */}
        <button
          className="flex cursor-pointer items-center gap-2 rounded-xl
          bg-indigo-600 px-5 py-3 font-medium text-white shadow-md
          transition-all hover:bg-indigo-700 hover:shadow-lg"
          onClick={() => setIsFormOpen(true)}
        >
          <Plus size={18} />
          Create Profile
        </button>
      </div>
    </header>
  );
};

export default Header;
