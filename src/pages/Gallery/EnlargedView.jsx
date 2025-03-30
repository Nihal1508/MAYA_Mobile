import React, { useState } from 'react'
import { enhanceImage } from '../../api/event';

function EnlargedView({ preveiwingImage, setPreviewImage }) {
    const [isLoading, setIsLoading] = useState(false);
    const [originalImage, setOriginalImage] = useState(preveiwingImage);
    const [enhancedImage, setEnhancedImage] = useState(null);
    const [isEnhanced, setIsEnhanced] = useState(false);
    const handleEnhanceButtonClick = async () => {
        setIsLoading(true);
        await enhanceImage(preveiwingImage, {
            onSuccess: (res) => {
                setEnhancedImage(res);
                setIsEnhanced(true);
                console.log(res);
            },
            onError: (err) => {
                console.log(err);
            }
        })
        setIsLoading(false);
        console.log("Enhance button clicked");
    }
    const onDownloadButtonClicked = async () => {
        try {
            // Determine the image URL based on `isEnhanced` value
            let imageUrl = isEnhanced ? enhancedImage : originalImage;

            // Validate if the URL is non-empty
            if (!imageUrl) {
                console.error("Image URL is undefined or empty.");
                return;
            }

            // Fetch the image as a Blob
            const response = await fetch(imageUrl);
            if (!response.ok) {
                console.error(`Failed to fetch image: ${response.statusText}`);
                return;
            }
            const blob = await response.blob();

            // Create a temporary URL for the Blob
            const blobUrl = URL.createObjectURL(blob);

            // Create a temporary anchor element
            const link = document.createElement('a');
            link.href = blobUrl;

            // Extract filename or use a default name
            const urlSegments = imageUrl.split('/');
            const rawFileName = urlSegments.pop();
            const fileName = rawFileName && rawFileName.includes('.')
                ? rawFileName
                : 'downloaded-image.jpg';

            // Set the filename for the download
            link.download = fileName;

            // Append the link to the document, trigger click, and then remove it
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            // Release the Blob URL to free memory
            URL.revokeObjectURL(blobUrl);

            console.log(`Download initiated for: ${fileName}`);
        } catch (error) {
            console.error("An error occurred during the download process:", error);
        }
    };

    return (
        <div className='absolute inset-0  bg-black/60 flex justify-center items-center z-50'>
            {isLoading && (
                <div className='absolute inset-0 flex justify-center items-center bg-black/60'>
                    <div className="loader">Loading</div>
                </div>
            )}
            <button
                className="absolute top-14 right-14 text-white bg-red-500 rounded-full p-2 hover:bg-red-600"
                onClick={() => setPreviewImage(null)}
            >
                X
            </button>
            {
                !enhancedImage &&
                <button
                    className="absolute top-14 left-14 text-white bg-green-500 rounded-full p-2 hover:bg-green-600"
                    onClick={handleEnhanceButtonClick}
                >
                    Enhance
                </button>
            }
            {
                enhancedImage && <button
                    className="absolute top-14 left-36 text-white bg-blue-500 rounded-full p-2 hover:bg-blue-600"
                    onClick={() => setIsEnhanced(!isEnhanced)}
                >
                    {isEnhanced ? "Original" : "Enhanced"}
                </button>
            }
            <button
                className="absolute top-30 left-14 text-white bg-yellow-500 rounded-full p-2 hover:bg-yellow-600"
                onClick={onDownloadButtonClicked}
            >
                Download
            </button>
            {
                isEnhanced ?
                    <img src={enhancedImage} alt="preview" className='w-[90%] h-[90%] object-contain' /> :
                    <img src={originalImage} alt="preview" className='w-[90%] h-[90%] object-contain' />
            }


        </div>
    )
}

export default EnlargedView
