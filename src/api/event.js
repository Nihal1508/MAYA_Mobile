import axios from "axios";
import { userSideGateway } from "../../services/gateway";
import { maya } from "../../services/urls";

export const getEventDetails = async (data, { onSuccess, onError }) => {
    try {
        console.log("Fetching event details for ID:", data);
        const response = await userSideGateway.get(maya.getEventDetails + '?eventId=' + data,);
        const result = response.data.event;
        console.log("Event details response:", result);
        if (!result) {
            throw new Error("Event details not found in the response");
        }
        console.log("Event details fetched successfully:", result);
        onSuccess(result);

    } catch (error) {
        console.error("Error fetching event details:", error);
        onError(error);
    }
}

export const getEventPhotos = async (image, id, { onSuccess, onError }) => {
    try {
        const response = await axios.post('http://localhost:8000/upload', { image, event_id: id }, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        });
        const result = response.data;
        console.log("Event photos response:", result);
        if (!result) {
            throw new Error("Event photos not found in the response");
        }
        console.log("Event photos fetched successfully:", result);
        onSuccess(result);

    } catch (error) {
        console.error("Error fetching event photos:", error);
        onError(error);
    }
}

export const getFileById = async (id, { onSuccess, onError }) => {
    try {
        const response = await userSideGateway.get("http://localhost:5001/file" + '?fileId=' + id,);
        const result = response.data;
        console.log("File by ID response:", result);
        if (!result) {
            throw new Error("File not found in the response");
        }
        console.log("File fetched successfully:", result);
        onSuccess(result);
    } catch (error) {
        console.error("Error fetching file by ID:", error);
        onError(error);
    }
}

export const enhanceImage = async (url, { onSuccess, onError }) => {
    try {
        const response = await axios.post('http://localhost:8000/enhance', { url });
        const result = response.data.image;
        console.log("Enhanced image response:", result);
        if (!result) {
            throw new Error("Enhanced image not found in the response");
        }
        console.log("Image enhanced successfully:", result);
        onSuccess(result);
    } catch (error) {
        console.error("Error enhancing image:", error);
        onError(error);
    }
}