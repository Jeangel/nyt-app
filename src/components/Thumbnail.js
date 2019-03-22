import React from 'react';
import noThumbnail from './../images/no-thumbnail.jpg';

export function Thumbnail({ src }) {
    const thumbnail = (src && src.url) ? `https://www.nytimes.com/${src.url}` : noThumbnail;

    return (
        <img src={thumbnail} alt="thumbnail" className="img-thumbnail"></img>
    );
}
