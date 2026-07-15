import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { nanoid } from "nanoid";
import { useContext, useEffect } from "react";
import MyStore from "../context/MyStore";

const Form = () => {
  const { users, setUsers, editId, setEditId, setIsFormOpen } =
    useContext(MyStore);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const formSubmit = (data) => {
    if (editId) {
      setUsers((prev) =>
        prev.map((item) => (item.id === editId ? { ...item, ...data } : item)),
      );
    } else {
      setUsers((prev) => [...prev, { ...data, id: nanoid() }]);
      toast.success("Added new User");
    }
    reset();
    setEditId(null);
    setIsFormOpen(false);
  };

  useEffect(() => {
    if (editId) {
      const editData = users.find((item) => item.id === editId);
      if (editData) {
        reset(editData);
      } else {
        reset({
          name: "",
          email: "",
          mobile: "",
          image: "",
        });
      }
    }
  }, [editId, users, reset]);

  return (
    <section className="mx-auto mt-12 max-w-2xl rounded-2xl border border-slate-200 bg-white p-8 shadow-lg">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900">Create Profile</h2>
        <p className="mt-2 text-sm text-slate-500">
          Fill in the details below to create a new profile.
        </p>
      </div>

      <form className="space-y-5" onSubmit={handleSubmit(formSubmit)}>
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Full Name
          </label>

          <input
            {...register("name", {
              required: "Name is required",
              minLength: {
                value: 3,
                message: "Minimum 3 characters",
              },
            })}
            type="text"
            placeholder="John Doe"
            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
          />
          {errors.name && (
            <p className="text-red-600 font-medium text-sm block pt-1">
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Email Address
          </label>

          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Invalid email",
              },
            })}
            type="email"
            placeholder="john@example.com"
            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
          />
          {errors.email && (
            <p className="text-red-600 font-medium text-sm block pt-1">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Phone Number
          </label>

          <input
            {...register("mobile", {
              required: "Mobile Number is required",
              pattern: {
                value: /^[6-9]\d{9}$/,
                message: "Invalid mobile number",
              },
            })}
            type="tel"
            placeholder="+91 9876543210"
            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
          />
          {errors.mobile && (
            <p className="text-red-600 font-medium text-sm block pt-1">
              {errors.mobile.message}
            </p>
          )}
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Profile Image URL
          </label>

          <input
            {...register("image", {
              required: "Image url is required",
              pattern: {
                value: /^https?:\/\/[^\s]+$/i,
                message: "Invalid image URL",
              },
            })}
            type="url"
            placeholder="https://example.com/profile.jpg"
            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
          />
          {errors.image && (
            <p className="text-red-600 font-medium text-sm block pt-1">
              {errors.image.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-indigo-600 py-3 font-semibold text-white transition hover:bg-indigo-700"
        >
          {editId ? "Update Profile" : "Create Profile"}
        </button>
      </form>
    </section>
  );
};

export default Form;
