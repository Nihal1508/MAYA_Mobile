import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UserIcon } from "lucide-react";
import WeddingHeader from "../../components/WeddingHeader";
import MayaFooter from "../../components/MayaFooter";

function FormPage({ eventDetails, handleInputChange, handleFileUpload, handleSubmit, formData }) {

  return (
    <div className="relative min-h-screen flex flex-col ">
      <div className="absolute inset-0 z-0 h-[250px] md:h-[350px]">
        {
          eventDetails && (
            <img
              src={eventDetails.banner}
              alt="background"
              className="w-full h-[249px] md:h-[349px] object-cover"
            />
          )
        }

        <div className="absolute inset-0 bg-gradient-to-b from-black/1 via-black/70 to-black"></div>
      </div>
      <div className="relative z-10 flex flex-col h-screen justify-between items-center pt-3">
        <div className="flex flex-col justify-center items-center gap-7">
          <img src="/logo.svg" alt="maya" className="w-28" />

          <div className="mt-5">{
            eventDetails && (
              <WeddingHeader eventDetails={eventDetails} />
            )}
          </div>
        </div>

        <div className="flex-1 flex flex-col items-center mt-2 mb-5 md:w-2/3 md:mt-12">
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
              <div className="border-2 border-dashed border-gray-700 rounded-md px-6 py-4 flex flex-col items-center justify-center relative">
                {formData.image ? (
                  <img
                    src={formData.image}
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
        </div>

        <MayaFooter />
      </div>
    </div>

  );
}

export default FormPage;
