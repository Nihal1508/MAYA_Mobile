import React, { useEffect, useState } from 'react'
import FormPage from './Landing/FomPage';
import PhotoGallery from './Gallery/Gallery';
import { useParams } from 'react-router';
import { getEventDetails, getEventPhotos } from '../api/event';
import EnlargedView from './Gallery/EnlargedView';

function Landing() {
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [eventDetails, setEventDetails] = useState(null);
    const [isClustered, setIsClustered] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [myImageIds, setMyImageIds] = useState([]);
    const [preveiwingImage, setPreviewImage] = useState(null);
    useEffect(() => {
        setIsLoading(true);
        getEventDetails(id, {
            onSuccess: (res) => {
                setEventDetails(res);
                console.log(res);
            },
            onError: (err) => {
                console.log(err);
            }
        });
        setIsLoading(false);
    }, []);

    const [formData, setFormData] = useState({
        name: "",
        image: null,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFileUpload = (e) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setSelectedImage(file);
            const reader = new FileReader();
            reader.onload = (event) => {
                if (event.target?.result) {
                    setFormData((prev) => ({ ...prev, image: event.target.result }));
                }
            };
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        if (!formData.image) {
            alert("Please upload a selfie");
            return;
        }
        setIsLoading(true);
        await getEventPhotos(selectedImage, parseInt(id), {
            onSuccess: (res) => {
                console.log(res);
                setIsClustered(true);
                setMyImageIds(res);
            },
            onError: (err) => {
                console.log(err);
            }
        });
        setIsLoading(false);
    };

    return (
        <div className='relative '>
            {
                isLoading ? (
                    <div className='flex justify-center items-center h-screen'>
                        Loadinggg........
                    </div>
                ) : (
                    !isClustered ? (
                        <FormPage formData={formData} eventDetails={eventDetails} handleFileUpload={handleFileUpload} handleInputChange={handleInputChange} handleSubmit={handleSubmit} />
                    ) : (
                        <PhotoGallery previewingImage={preveiwingImage} setPreviewingImage={setPreviewImage} eventDetails={eventDetails} myImageIds={myImageIds} name={formData.name} />
                    )
                )

            }
            {
                preveiwingImage && (
                    <EnlargedView preveiwingImage={preveiwingImage} setPreviewImage={setPreviewImage} />
                )
            }
        </div>
    )
}

export default Landing
