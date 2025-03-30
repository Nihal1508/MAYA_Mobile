import React, { useEffect } from 'react'
import { getFileById } from '../../api/event'

function ImageTile({ id, previewingImage, setPreviewingImage }) {
    const [file, setFile] = React.useState(null)
    useEffect(() => {
        getFileById(id, {
            onSuccess: (res) => {
                setFile(res.url)
            },
            onError: (err) => {
                console.log(err)
            },
        })
    }, [])
    return (
        <div
            className="aspect-square cursor-pointer sm:w-[100px] md:w-[140px] lg:w-[180px] overflow-hidden rounded-md"
        >
            <img onClick={() => setPreviewingImage(file)}
                src={file}
                alt={`Wedding photo`}
                className="w-full h-full object-cover"
            />
        </div>
    )
}

export default ImageTile
