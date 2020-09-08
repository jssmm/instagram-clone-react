import React, { useState } from 'react'

function ImageUpload() {
    const [caption, setCaption] = useState('');

    return (
        <div>
            
            {/* I want to have... */}
            {/* Caption input */}
            {/* File picker */}
            {/* Post button */}

            <input type="text" placeholder="Enter a caption." value={}/>
            <input type="file" onChange={handleChange} />
            <Button onClick={handleUpload}>
                Upload
            </Button>


        </div>
    )
}

export default ImageUpload
