import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './BookingDetail.css';

const BookingDetail = (props) => {
    console.log(props.children[3]);
    const { id, name, batch, visit, img, speciality, studyBackground } = props.children[3];
    return (
        <div>
            <div >
                <Col>
                    <Card className="resPaddN" style={{ fontSize: 'larger', width: '350px', height: '700px', backgroundColor: '#A3CFF9' }}>
                        <Card.Img style={{ height: '300px' }} variant="top" src={img} />
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Text style={{ color: 'goldenrod', fontWeight: 'bold' }} >{speciality}</Card.Text>
                            <Card.Title>{visit}BDT Per CheckUp</Card.Title>
                            <Card.Text>Batch: {batch}</Card.Text>
                            <Card.Text style={{ width: '330px', height: '140px', }}>
                                {studyBackground}
                            </Card.Text>
                            <Link to='/home'><Button variant="primary">Booking Details</Button>{' '}</Link>
                        </Card.Body>
                    </Card>
                </Col>
            </div >
        </div >
    );
};

export default BookingDetail;