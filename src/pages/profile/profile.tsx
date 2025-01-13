import { DashboardLayout } from "../../dashboard/Layout";

export default function Profile() {
  const userProfile = {
    name: "Ilman",
    email: "ilman@example.com",
    joinedDate: "2023-01-15",
    bio: "Enthusiastic developer passionate about web development and design.",
    profilePicture: "/images/profile-picture.jpg", // Placeholder for profile picture URL
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Profile</h1>

      <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
        <img
          src={userProfile.profilePicture}
          alt="Profile Picture"
          className="w-32 h-32 rounded-full mb-4"
        />
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          {userProfile.name}
        </h2>
        <p className="text-gray-600 mb-4">{userProfile.email}</p>
        <p className="text-gray-600 mb-4">
          Joined on:{" "}
          {new Date(userProfile.joinedDate).toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          })}
        </p>
        <p className="text-gray-600 mb-4">{userProfile.bio}</p>
        <a
          href="http://localhost:3000/profile/profile/edit-profile"
          className="py-2 px-4 mt-4 rounded-md bg-blue-600 text-white hover:bg-blue-700"
        >
          Edit Profile
        </a>
      </div>
    </div>
  );
}
