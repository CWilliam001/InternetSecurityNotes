import React from 'react'
import { useParams } from 'react-router-dom'

const HeaderTemplate = () => {
    const { index } = useParams();
    return (
        <div>HeaderTemplate</div>
    )
}

export default HeaderTemplate