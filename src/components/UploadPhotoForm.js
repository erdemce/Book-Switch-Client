import React from 'react'

export default function UploadPhotoForm() {
    return (
        <div>
        <form method="POST" action="/upload" enctype="multipart/form-data">
            <input type="file" name="imageUrl" accept="image/png, image/jpg"/>
            <button type="submit">Upload Photo</button> 
        </form>
        </div> 
    )
}
