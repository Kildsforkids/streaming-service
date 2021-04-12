import React, { useCallback } from 'react'

export const PreviewPanel = ({ previews, onCameraSelected }) => {
    const handleClick = useCallback(e => {
        onCameraSelected(e.target.id)
    }, [onCameraSelected])
    
    if (!previews.length) {
        return <p className="center">Нет привязанных камер</p>
    }
    
    return (
        previews.map((preview, index) => {
            return (
                <video
                    key={preview._id}
                    width="426"
                    poster="./plug.png"
                    style={{ padding: '5px' }}
                    onClick={handleClick}
                    id={index}>
                    <source src="" type="video/mp4" />
                </video>
            )
        })
    )
}