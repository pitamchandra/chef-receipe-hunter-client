import React from 'react';

const HeadingTitle = ({title, description}) => {
    return (
        <div className='text-center'>
            <h2 className='text-uppercase fs-1'>{title}</h2>
            <div style={{width:'100px', height:'2px', background:'orange', margin: '10px auto'}}></div>
            <p className='fs-3'>{description}</p>
        </div>
    );
};

export default HeadingTitle;