import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserIcon } from "lucide-react";

function LandingPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    selfie: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setFormData((prev) => ({ ...prev, selfie: event.target.result }));
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/gallery");
  };

  return (
    <div className="w-full px-10 mt-12">
      <h3 className="text-2xl font-bold text-center mb-6">Get Your Photos</h3>
      <form onSubmit={handleSubmit} className="space-y-2 ">
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleInputChange}
          className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-md text-white placeholder-gray-400"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleInputChange}
          className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-md text-white placeholder-gray-400"
          required
        />

        <div className="border-2 border-dashed border-gray-700 rounded-md px-6 py-4 flex flex-col items-center justify-center relative">
          {formData.selfie ? (
            <img
              src={formData.selfie}
              alt="Selfie preview"
              className="w-40 h-36 object-cover rounded-md"
            />
          ) : (
            <>
              <p className="text-sm mb-2">Upload a selfie</p>
              <UserIcon className="w-18 h-18 text-purple-400" />
              <p className="text-xs text-gray-400 text-center">
                Drag images here, or{" "}
                <span className="text-purple-400">browse</span>
                <br />
                <span className="text-[9px] font-semibold">
                  Supports: JPG, PNG, WEBP, HEIC
                </span>
              </p>
            </>
          )}
          <input
            type="file"
            accept="image/*"
            onChange={handleFileUpload}
            className="opacity-0 absolute inset-0 cursor-pointer"
            id="selfie-upload"
          />
        </div>

        <div className="w-full mt-5 flex justify-center items-center">
          <button
            type="submit"
            className="w-fit px-8 py-2 bg-purple-600 hover:bg-purple-500 rounded-md font-medium transition-colors"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default LandingPage;
