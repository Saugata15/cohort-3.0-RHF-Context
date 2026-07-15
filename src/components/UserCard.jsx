import { Mail, Phone, SquarePen, Trash2 } from "lucide-react";
import { useContext, useState } from "react";
import MyStore from "../context/MyStore";

const UserCard = ({ user }) => {
  const [imageError, setImageError] = useState(false);
  const { setUsers, setEditId , setIsFormOpen } = useContext(MyStore);

  const deleteUser = (id) => {
    return setUsers((prev) => prev.filter((item) => item.id !== id));
  };

  const editUser = (id) => {
    setEditId(id);
    setIsFormOpen(true);
  };

  return (
    <article
      className="overflow-hidden rounded-2xl border border-slate-200 
    bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      {/* Top Section */}
      <div className="bg-gradient-to-r from-indigo-500 to-violet-500 p-6">
        <div className="flex justify-center">
          {imageError ? (
            <div
              className="flex h-28 w-28 items-center justify-center rounded-full 
            border-4 border-white bg-white text-4xl font-bold text-indigo-600 shadow-lg"
            >
              {user.name.charAt(0).toUpperCase()}
            </div>
          ) : (
            <img
              src={user.image}
              alt={user.name}
              onError={() => setImageError(true)}
              className="h-28 w-28 rounded-full border-4 border-white object-cover shadow-lg"
            />
          )}
        </div>
      </div>

      {/* Content */}
      <div className="space-y-5 p-6">
        <div className="text-center">
          <h3 className="text-xl font-bold text-slate-900">{user.name}</h3>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-3 rounded-lg bg-slate-100 p-3">
            <Mail size={18} className="text-indigo-600" />

            <p className="truncate text-sm text-slate-700">{user.email}</p>
          </div>

          <div className="flex items-center gap-3 rounded-lg bg-slate-100 p-3">
            <Phone size={18} className="text-indigo-600" />

            <p className="text-sm text-slate-700">{user.mobile}</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 pt-2">
          <button
            className="flex flex-1 items-center justify-center gap-2 rounded-lg 
          border border-indigo-600 px-4 py-2 font-medium text-indigo-600 transition
           hover:bg-indigo-50 cursor-pointer"
            onClick={() => editUser(user.id)}
          >
            <SquarePen size={18} />
            Edit
          </button>

          <button
            className="flex flex-1 items-center justify-center gap-2 rounded-lg
          bg-red-500 px-4 py-2 font-medium text-white transition hover:bg-red-600
          cursor-pointer"
            onClick={() => deleteUser(user.id)}
          >
            <Trash2 size={18} />
            Delete
          </button>
        </div>
      </div>
    </article>
  );
};

export default UserCard;
