import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Navbar, Button } from 'react-bootstrap';
import styles from '../styles/pages/header.module.css';

const Header = () => {
    const [text, setText] = useState('');
    const skill = 'MERN Stack Developer';
    const delay = 150;

    useEffect(() => {
        let currentIndex = 0;
        let direction = 1;

        const interval = setInterval(() => {
            if (currentIndex === skill.length) {
                direction = -20;
            } else if (currentIndex === 0) {
                direction = 1;
            }

            setText(skill.substring(0, currentIndex));

            currentIndex += direction;
        }, delay);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.backgroundImage}>
            <Navbar className={styles.navbar}>
                <Container>
                    <h2 className={styles.BrandColor}>Portfolio</h2>
                </Container>
            </Navbar>
            <div className={styles.overViewText}>
                <Row>
                    <Col lg={1} md={1} sm={12} xs={12}></Col>
                    <Col lg={10} md={10} sm={12} xs={12}>
                        <h1>Hi, I&apos;m <span className={styles.nameText}>Krupan Goud</span></h1>
                        <h3>I&apos;m a <span className={`${styles.nameText} ${styles.textDecoration}`}>{text}</span></h3>
                        <h3>Welcome to my portfolio, where innovation meets craftsmanship. Explore my journey of creativity and expertise in building remarkable solutions.
                        </h3>
                    </Col>
                    <Col lg={1} md={1} sm={12} xs={12}></Col>
                </Row>
            </div>
        </div>
    );
};

export default Header;
