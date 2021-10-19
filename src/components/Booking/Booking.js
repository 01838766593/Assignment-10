import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useData from '../../hooks/useData';

const Booking = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <h2>This is booking: {serviceId}</h2>
        </div>
    );
};

export default Booking;