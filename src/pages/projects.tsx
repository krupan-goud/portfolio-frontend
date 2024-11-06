import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import pic1 from '../../public/images/pic1.png';
import pic2 from '../../public/images/pic2.png';
import pic3 from '../../public/images/pic3.png';

const Projects = () => {
    const projects = [
        { src: pic1, alt: "KomeChat", link: "https://komechat.vercel.app/", title: "Kome Chat", description: "A chat application for seamless communication" },
        { src: pic2, alt: "Finesta", link: "https://finesta.vercel.app/", title: "Finesta", description: "A Social Influence-Based Investment Application" },
        { src: pic3, alt: "Kome", link: "https://wexa-assignment.vercel.app/", title: "Kome", description: "An Inventory Management System application" }
    ];

    return (
        <div style={{ padding: '4rem 0', backgroundColor: '#000000' }}>
            <Container>
                <h3 style={{ textAlign: 'center', marginBottom: '3rem', color: '#FFFFFF', fontSize: '2rem', fontWeight: 'bold' }}>My Projects</h3>
                <Row>
                    {projects.map((project, index) => (
                        <Col key={index} lg={4} md={6} sm={12} xs={12} style={{ marginBottom: '2rem' }}>
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                <Card
                                    style={{
                                        padding: '1.5rem',
                                        borderRadius: '12px',
                                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                        cursor: 'pointer',
                                        textAlign: 'center',
                                        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)',
                                        backgroundColor: '#2D2D2D',
                                        color: '#FFFFFF',
                                        overflow: 'hidden',
                                        position: 'relative',
                                    }}
                                    className="project-card"
                                >
                                    <Image
                                        src={project.src}
                                        alt={project.alt}
                                        width={600}
                                        height={350}
                                        style={{
                                            borderRadius: '8px',
                                            objectFit: 'cover',
                                            transition: 'transform 0.3s ease',
                                            width: '100%',
                                            height: 'auto',
                                        }}
                                    />
                                    <h4 style={{ marginTop: '1.5rem', fontSize: '1.5rem', fontWeight: 'bold' }}>{project.title}</h4>
                                    <p style={{ color: '#BBBBBB', fontSize: '1rem', marginTop: '0.5rem' }}>{project.description}</p>
                                </Card>
                            </a>
                        </Col>
                    ))}
                </Row>
            </Container>

            <style jsx>{`
                .project-card {
                    transition: all 0.3s ease;
                }

                .project-card:hover {
                    transform: scale(1.05);
                    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
                }

                .project-card img {
                    transition: transform 0.3s ease;
                }

                .project-card:hover img {
                    transform: scale(1.1);
                }

                h4, p {
                    transition: color 0.3s ease;
                }

                .project-card:hover h4 {
                    color: #FFD700; /* Subtle color change on hover */
                }

                .project-card:hover p {
                    color: #FFFFFF;
                }
            `}</style>
        </div>
    );
};

export default Projects;
