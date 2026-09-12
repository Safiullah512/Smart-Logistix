import React, { useRef, useState } from "react";
import { Image, User, Upload } from "lucide-react";
import Card from "../common/Card";

/**
 * ProfilePhoto - avatar preview + "Change Photo" upload button.
 */
export default function ProfilePhoto() {
  const fileInputRef = useRef(null);
  const [photoUrl, setPhotoUrl] = useState(null);

  const handleChoosePhoto = () => fileInputRef.current?.click();

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setPhotoUrl(URL.createObjectURL(file));
    }
  };

  return (
    <Card icon={<Image size={20} />} title="Profile Photo">
      <div className="flex flex-col items-center py-4">
        <div className="w-28 h-28 rounded-full bg-indigo-100 flex items-center justify-center overflow-hidden mb-6">
          {photoUrl ? (
            <img src={photoUrl} alt="Profile" className="w-full h-full object-cover" />
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
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-indigo-600 border border-indigo-200 rounded-lg hover:bg-indigo-50 transition-colors"
        >
          <Upload size={16} />
          Change Photo
        </button>

        <p className="text-xs text-gray-400 mt-3">JPG, PNG up to 2MB</p>
      </div>
    </Card>
  );
}
