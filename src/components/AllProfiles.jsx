import { useContext } from "react";
import { Users } from "lucide-react";
import MyStore from "../context/MyStore";
import UserCard from "./UserCard";

const AllProfiles = () => {
  const { users  } = useContext(MyStore);

  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      {/* Header */}
      <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">
            All Profiles
          </h2>

          <p className="mt-2 text-slate-500">
            Manage all your people profiles in one place.
          </p>
        </div>

        <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-5 py-3 shadow-sm">
          <Users className="text-indigo-600" size={22} />

          <div>
            <p className="text-xs uppercase tracking-wide text-slate-500">
              Total Profiles
            </p>

            <h3 className="text-xl font-bold text-slate-900">
              {users.length}
            </h3>
          </div>
        </div>
      </div>

      {/* Cards */}
      {users.length > 0 ? (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {users.map((user) => (
            <UserCard
              key={user.id}
              user={user}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 py-20">
          <Users
            size={60}
            className="mb-5 text-slate-400"
          />

          <h3 className="text-2xl font-semibold text-slate-800">
            No Profiles Found
          </h3>

          <p className="mt-2 max-w-md text-center text-slate-500">
            You haven't created any profiles yet.
            Click the <strong>Create Profile</strong> button to add your
            first profile.
          </p>
        </div>
      )}
    </section>
  );
};

export default AllProfiles;