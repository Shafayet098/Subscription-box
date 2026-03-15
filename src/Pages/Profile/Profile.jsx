import React, { use } from 'react';
import { AuthContext } from '../../Components/Context/AuthContext';
import toast from 'react-hot-toast';

const Profile = () => {
    const { user, updateUser } = use(AuthContext)
    const handleUpdateProfile = (e) => {
        e.preventDefault();
        const displayName = e.target.name.value;
        const photoURL = e.target.photo.value;
        const obj = {displayName, photoURL}
        updateUser(obj)
            .then(() => {
                toast.success("Profile updated successfully");
                window.location.reload();
            })
            .catch((error) => {
                toast.error(error.message);
            });
    };
    return (
        <section className="max-w-5xl mx-auto px-4 py-12 h-[calc(100vh-70px)] flex justify-center items-center">
            <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white shadow-lg rounded-2xl p-6">
                    <h2 className="text-3xl font-bold mb-6">My Profile</h2>

                    <div className="flex flex-col items-center text-center">
                        <img
                            src={user?.photoURL}
                            alt={user?.displayName}
                            className="w-28 h-28 rounded-full object-cover border-4 border-pink-200"
                        />

                        <h3 className="mt-4 text-2xl font-semibold">
                            {user?.displayName || "No Name"}
                        </h3>

                        <p className="text-gray-500 mt-2">{user?.email}</p>
                    </div>
                </div>

                <div className="bg-white shadow-lg rounded-2xl p-6">
                    <h2 className="text-3xl font-bold mb-6">Edit Profile</h2>

                    <form onSubmit={handleUpdateProfile} className="space-y-4">
                        <div>
                            <label className="label">
                                <span className="label-text font-medium">Name</span>
                            </label>
                            <input
                                type="text"
                                className="input input-bordered w-full"
                                name='name'
                                placeholder="Enter your name"
                            />
                        </div>

                        <div>
                            <label className="label">
                                <span className="label-text font-medium">Photo URL</span>
                            </label>
                            <input
                                type="text"
                                className="input input-bordered w-full"
                                name='photo'
                                placeholder="Enter photo URL"
                            />
                        </div>

                        <button type="submit" className="btn btn-primary w-full">
                            Save Changes
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Profile;