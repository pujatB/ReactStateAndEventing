import React from 'react'
import { useHistory } from 'react-router-dom'

const Back = () => {
    const history = useHistory();
    return (
        <div>
            <button id="back-button" onClick={history.goBack}>Back</button>
        </div>
    )
}

export default Back
