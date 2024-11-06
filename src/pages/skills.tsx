import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import javascript from '../../public/images/javascript.png';
import html from '../../public/images/html.png';
import css from '../../public/images/css.png';
import ts from '../../public/images/ts.png';
import python from '../../public/images/python.png';
import node from '../../public/images/node.png';
import mysql from '../../public/images/mysql.png';
import mongodb from '../../public/images/mongodb.png';
import react from '../../public/images/react.png';
import bootstrap from '../../public/images/bootstrap.png';
import sass from '../../public/images/sass.png';
import express from '../../public/images/express.png';
import styles from '../styles/pages/skills.module.css';
import { FaGears } from "react-icons/fa6";
import { TiSpanner } from "react-icons/ti";
import { FaLightbulb } from "react-icons/fa";

const skills = [html, css, javascript, ts, react, bootstrap, express, node, mongodb, mysql, python, sass];

const Skills = () => {
  return (
    <div className='header'>
      <Container>
        <div className='mt-4'>
          <h3 className={styles.heading}>Skills</h3>
        </div>
        <Row>
          <Col lg={6} md={12} sm={12} xs={12}>
            <div className='mt-4'><h3><FaGears size={36} className='m-3 text-center' />DEVELOPMENT</h3></div>
            <Row className={`${styles.devLogo} mt-4`}>
              {skills.map((src, index) => (
                <Col key={index} lg={4} md={6} sm={12} xs={12} className={styles.colPadding}>
                  <div className={styles.imageBorder}>
                    <Image src={src} alt={'logo'} width={55} height={55} />
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
          <Col lg={3} md={12} sm={12} xs={12} className={`${styles.ColMargin} mt-5 mb-5`}>
            <Container className='mt-5'>
              <div className='mt-4'><h3><TiSpanner size={36} className='m-3 text-center' />TOOLS</h3>
                <ul>
                  <li className={styles.lineStyle}>Git + Github</li>
                  <li className={styles.lineStyle}>Command Line</li>
                  <li className={styles.lineStyle}>Jira</li>
                  <li className={styles.lineStyle}>Chrome DevTools</li>
                  <li className={styles.lineStyle}>Postman</li>
                </ul>
              </div>
            </Container>

          </Col>
          <Col lg={3} md={12} sm={12} xs={12} className={`${styles.ColMargin} mt-5 mb-5`}>
            <Container className='mt-5'>
              <div className='mt-4'><h3><FaLightbulb size={30} className='m-3 text-center' />KNOWLEDGE</h3>
                <ul>
                  <li className={styles.lineStyle}>React Native</li>
                  <li className={styles.lineStyle}>Data Science</li>
                  <li className={styles.lineStyle}>ECMAScript 6</li>
                  <li className={styles.lineStyle}>Material UI</li>
                </ul>
              </div>
            </Container>

          </Col>
        </Row>
      </Container>
    </div >
  );
};

export default Skills;
