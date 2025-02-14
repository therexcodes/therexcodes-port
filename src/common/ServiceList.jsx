import React from 'react'

function ServiceList({src, service}) {
    return (
        <span>
            <img src={src} alt="serviceIcon" />
            <p>{service}</p>
        </span>
    )
}

export default ServiceList
