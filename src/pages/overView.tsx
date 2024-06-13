import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useRouter } from 'next/router';
import Image from 'next/image';
import instagram from '../../public/images/instagram.png';
import linkedin from '../../public/images/linkedin.png';
import github from '../../public/images/github.png';

const OverView = () => {
    const router = useRouter();

    const redirectHandler = (type: any) => {
        if (type === "Instagram") {
            window.location.href = 'https://www.instagram.com/krupan_goud?igsh=cXQzanNzcDVjamdq';
        } else if (type === "LinkedIn") {
            window.location.href = 'https://www.linkedin.com/in/krupan-goud-a18a81191/';
        } else if (type === "GitHub") {
            window.location.href = 'https://github.com/krupan-goud';
        }
    }

    return (
        <div>
            <div className='header'>
                <Container>
                    <Row>
                        <Col lg={8} md={10} sm={12} xs={12}>
                            <h4>Introduction</h4>
                            <h1>Overview</h1>
                            <p>
                                I am a highly adaptable and driven individual, constantly seeking new challenges and opportunities for growth. With a passion for innovation and a knack for turning ideas into reality, I thrive in dynamic environments where creativity and teamwork are valued. I am committed to staying at the forefront of technology by continuously refining my skills and embracing experimentation. I believe in fostering a culture of continuous improvement, where failure is seen as a stepping stone to success. Together, let&apos;s embark on a journey of creativity, collaboration, and innovation, and build something truly extraordinary.
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6} md={8} sm={12} xs={12} className='mt-4'>
                            <Image src={github} alt="github" width={50} height={50} title='GitHub' style={{ marginRight: "10px", cursor: "pointer" }} onClick={() => { redirectHandler('GitHub') }} />
                            <Image src={linkedin} alt="linkedIn" width={30} height={30} title='LinkedIn' style={{ marginRight: "10px", cursor: "pointer" }} onClick={() => { redirectHandler('LinkedIn') }} />
                            <Image src={instagram} alt="instagram" width={40} height={40} title='Instagram' style={{ marginRight: "10px", cursor: "pointer" }} onClick={() => { redirectHandler('Instagram') }} />
                        </Col>
                    </Row>
                </Container>
            </div></div>
    )
}

export default OverView