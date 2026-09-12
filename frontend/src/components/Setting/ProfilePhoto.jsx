import React, { useRef, useContext } from "react";
import { Image, User, Upload } from "lucide-react";
import Card from "../common/Card";
import { UserContext } from "../../context/UserContext";

/**
 * ProfilePhoto - avatar preview + "Change Photo" upload button.
 */
export default function ProfilePhoto() {
  const fileInputRef = useRef(null);

  const { photoUrl, setPhotoUrl } = useContext(UserContext);

  const handleChoosePhoto = () => fileInputRef.current?.click();

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        setPhotoUrl(reader.result);

        localStorage.setItem("profileImage", reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <Card icon={<Image size={20} />} title="Profile Photo">
      <div className="flex flex-col items-center py-4">
        <div className="w-28 h-28 rounded-full bg-indigo-100 flex items-center justify-center overflow-hidden mb-6">
          {photoUrl ? (
            <img
              src={photoUrl}
              alt="Profile"
              className="w-full h-full object-cover object-top"
            />
          ) : (
            <User size={56} className="text-indigo-600" />
          )}
        </div>

        <input
          type="file"
          accept="image/jpeg,image/png"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
        />

        <button
          type="button"
          onClick={handleChoosePhoto}
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-indigo-600 border border-indigo-200 rounded-lg hover:bg-indigo-600 hover:text-white transition-colors cursor-pointer"
        >
          <Upload size={16} />
          Change Photo
        </button>

        <p className="text-xs text-gray-400 mt-3">JPG, PNG up to 2MB</p>
      </div>
    </Card>
  );
}
