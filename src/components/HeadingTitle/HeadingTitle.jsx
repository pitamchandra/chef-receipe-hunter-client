import React from 'react';

const HeadingTitle = ({title, description}) => {
    return (
        <div className='text-center'>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
};

export default HeadingTitle;