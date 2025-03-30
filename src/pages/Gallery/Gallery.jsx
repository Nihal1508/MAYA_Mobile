import MayaFooter from "../../components/MayaFooter";
import WeddingHeader from "../../components/WeddingHeader";
import ImageTile from "./ImageTile";

function PhotoGallery({ eventDetails, myImageIds, name, previewingImage, setPreviewingImage }) {
  console.log("image ids:", myImageIds);
  return (
    <div className="relative min-h-screen flex flex-col ">
      <div className="absolute inset-0 z-0 h-[250px] md:h-[350px]">
        <img
          src={eventDetails.banner}
          alt="background"
          className="w-full h-[249px] md:h-[349px] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/1 via-black/70 to-black"></div>
      </div>
      <div className="relative z-10 flex flex-col h-screen justify-between items-center pt-3">
        <div className="flex flex-col justify-center items-center gap-7">
          <img src="/logo.svg" alt="maya" className="w-28" />

          <div className="mt-5">
            <WeddingHeader eventDetails={eventDetails} />
          </div>
        </div>

        <div className="relative flex flex-col">
          <div className="w-full px-6 mt-24">
            <h3 className="text-2xl font-bold">Hi, {name}</h3>
            <p className="text-lg mb-16">Here's your photos</p>

            <div className=" flex-wrap flex gap-7 max-sm:gap-4">
              {myImageIds.map((id, i) => (
                <ImageTile key={i} id={id} previewingImage={previewingImage} setPreviewingImage={setPreviewingImage} />
              ))
              }
            </div>
          </div>
        </div>

        <MayaFooter />
      </div>
    </div>

  );
}

export default PhotoGallery;
