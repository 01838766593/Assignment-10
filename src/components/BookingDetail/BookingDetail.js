import React from 'react';

const BookingDetail = (props) => {
    console.log(props.children[3]);
    const { id, name, batch, visit, img, speciality, studyBackground } = props.children[3];
    return (
        <div>
            <h2>My name {name}</h2>
        </div>
    );
};

export default BookingDetail;