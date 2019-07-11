import React from 'react'
import block from '../assets/blockload.gif';
export default function Loading() {
    return (
        <div className="row align-middle justify-content-center">
            <img alt="loding" style={{maxHeight : '10vh'}} src={block} />
        </div>
    )
}
