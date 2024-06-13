import React, { useState } from 'react'
import { Card, Container, Row, Col, Button } from 'react-bootstrap'
import styles from '../styles/pages/Skills.module.css';
import InputField from '@/components/InputField';
import { sendUserDetails } from '@/axios';

const initializeUserDetails = {
  name: '',
  email: '',
  message: ''
}

const Contact = () => {

  const [userDetails, setUserDetails] = useState<any>(initializeUserDetails);


  const onchange = (e: any) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value })
  }

  const onSubmitHandler = async () => {
    const data = {
      name: userDetails.name,
      email: userDetails.email,
      message: userDetails.message
    }
    console.log("data", data);

    const result = await sendUserDetails(data);
    console.log("result:::", result);
  }

  return (
    <div className='header'>
      <Container>
        <Row>
          <Col lg={6} md={6} sm={12} xs={12}>
            <Card className={styles.card}>
              <h2 className={`${styles.contactHeading} text-center mb-3`}>Contact</h2>
              <InputField label={'Full Name'} type={'text'} name={'name'} value={userDetails.name} placeholder={'Enter Full Name'} required={true} rows={0} cols={0} onchange={onchange} />
              <InputField label={'Email Address'} type={'email'} name={'email'} value={userDetails.email} placeholder={'Enter Email Address'} required={true} rows={0} cols={0} onchange={onchange} />
              <InputField label={'Message'} type={'textarea'} name={'message'} value={userDetails.message} placeholder={'Hey Krupan, I love your website! I\'d like to discuss some opportunities that you might find interesting! 💐'} required={true} rows={10} cols={12} onchange={onchange} />
              <Button className={`${styles.hireMeButton} mt-4`} onClick={() => { onSubmitHandler() }}>Send Message</Button>
              <p className={`${styles.copyRights} mt-4`}>Copyrights © 2024 Krupan Portfolio</p>
              <p className={`${styles.copyRights} mb-4`} > Designed and Developed by Krupan Goud Shivabandhi</p>
            </Card>
          </Col>
          <Col lg={6} md={6} sm={12} xs={12}>
          </Col>
        </Row>
      </Container>
    </div >
  )
}

export default Contact