import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import { PreviewPanel } from '../components/PreviewPanel'
import { PreviewCamera } from '../components/PreviewCamera'

export const StreamPage = () => {
    const auth = useContext(AuthContext)
    const [previews, setPreviews] = useState([
        {
            _id: 12,
            src: 'https://www.youtube.com/embed/ZKrafkNZwNE'
        },
        {
            _id: 13,
            src: 'https://www.youtube.com/embed/oXhHVtD4790'
        },
        {
            _id: 14,
            src: 'https://www.youtube.com/embed/qJOjkdOR8MI'
        },
        {
            _id: 15,
            src: 'https://www.youtube.com/embed/34E4wZOOQFc'
        },
        {
            _id: 16,
            src: 'https://www.youtube.com/embed/Ov1AT1V9NyI'
        }
    ])
    const [selectedCamera, setSelectedCamera] = useState("")

    return (
        <div className="center">
            {!selectedCamera &&
                <div className="col s3 m3 l3" style={{ paddingTop: '10px' }}>
                    <PreviewPanel
                        previews={previews} 
                        onCameraSelected={setSelectedCamera}
                    />
                </div>
            }
            {selectedCamera &&
                <div>
                    <PreviewCamera
                        previews={previews}
                        id={selectedCamera}
                        onCameraSelected={setSelectedCamera}
                    />
                </div>
            }
        </div>
    )
}