import React, { useCallback } from 'react'

export const PreviewCamera = ({ previews, id, onCameraSelected }) => {
    const handleBack = useCallback(e => {
        onCameraSelected(e.target.value)
    }, [onCameraSelected])

    if (!previews.length) {
        return <p className="center">Нет привязанных камер</p>
    }

    return (
        <div>
            <div style={{ display: 'flex' }}>
                <video
                    id={id}
                    width="640"
                    poster="./plug.png"
                    style={{ padding: '5px' }}>
                    <source src="" type="video/mp4" />
                </video>
                <div>
                    <div style={{ display: 'flex' }}>
                        <h1>Camera {previews[id]._id}</h1>
                        <a class="btn-floating btn-small waves-effect waves-light red" onClick={handleBack}><i class="material-icons">X</i></a>
                        {/* <button width="10" alt="Выход" value="" onClick={handleBack}>X</button> */}
                    </div>
                    <p>Some info about camera...</p>
                </div>
            </div>
            <div>
                {
                    previews.map((preview, index) => {
                        if (index !== id) {
                            return (
                                <video
                                    key={preview._id}
                                    id={index}
                                    width="426"
                                    poster="./plug.png"
                                    style={{ padding: '5px' }}>
                                    <source src="" type="video/mp4" />
                                </video>
                            )
                        }
                    })
                }
            </div>
        </div>
    )
}
