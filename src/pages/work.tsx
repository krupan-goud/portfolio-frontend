import React from 'react'
import styles from '../styles/pages/work.module.css';
import { Container, Row, Col } from 'react-bootstrap';
import { IoCodeSlash, IoServerSharp } from "react-icons/io5";
import { MdOutlineDesignServices, MdComputer } from "react-icons/md";

const services = [
  {
    id: 1,
    icon: <MdComputer size={38} color='#ffffff' />,
    title: "Frontend Development",
    description: "Design responsive user interfaces with React.js, managing reusable components effectively. Implement state management, leveraging Redux, to ensure cross-device compatibility."
  },
  {
    id: 2,
    icon: <IoCodeSlash size={38} color='#ffffff' />,
    title: "Backend Development",
    description: "Utilize Node.js and Express.js to construct server-side logic, crafting RESTful APIs. Apply authentication and authorization measures to safeguard backend endpoints, while seamlessly integrating third-party services."
  },
  {
    id: 3,
    icon: <IoServerSharp size={38} color='#ffffff' />,
    title: "Database Management",
    description: "Create MongoDB database schemas and establish data models. Execute CRUD operations for database management while optimizing query performance and scalability. Manage data migration, backups, and other administrative duties as required."
  },
  {
    id: 4,
    icon: <MdOutlineDesignServices size={38} color='#ffffff' />,
    title: "Application Architecture and Design",
    description: "Architect the application for scalability and maintainability, adhering to industry best practices for code organization and separation of concerns. Employ design patterns like MVC or MVVM to structure the codebase effectively."
  }
];

const Education = () => {
  return (
    <div className='header'>
      <Container>
        <Row>
          <Col lg={12} md={12} sm={12} xs={12} className='mt-5 mb-5 text-center'><h3>WHAT I DO</h3></Col>
        </Row>
        <Row>
          {services.map((service) => (
            <Col lg={6} md={6} sm={12} xs={12} className={`${styles.serviceCol} mt-5`} key={service.id}>
              <div className={styles.serviceContent}>

                {/* Icon */}
                <div className={styles.imageBorder}>
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className='text-center'>{service.title}</h3>

                {/* Description */}
                <p className='text-center'>{service.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div >
  )
}

export default Education
