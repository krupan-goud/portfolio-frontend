import React from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image';
import crlogo from '../../public/images/crlogo.png';

const Experience = () => {
    return (
        <div className='header'>
            <Container>
                <h3 className='text-center mb-5'>Experience</h3>
            </Container>
            <Container>
                <Row>
                    <Col lg={6} md={6} sm={12} xs={12}>
                        <Card className='cardStyles'>
                            <Container>
                                <Row>
                                    <Col lg={12} md={12} sm={12} xs={12}><p className='text-center'>Dec-2021 to Present</p></Col>
                                    <Col lg={12} md={12} sm={12} xs={12}>
                                        <Row>
                                            <Col lg={12} md={12} sm={12} xs={12}>
                                                <Container>
                                                    <Image src={crlogo} alt="cr" width={180} height={60} />
                                                </Container>
                                            </Col>
                                            <Col lg={12} md={12} sm={12} xs={12} className="companyName"><h4 className='text-center'>CriticalRiver Technologies</h4></Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Container>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Experience
