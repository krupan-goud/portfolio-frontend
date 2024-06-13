import React, { useEffect, useState } from 'react'
import { Card, Container, Row, Col, Button } from 'react-bootstrap'
import styles from '../styles/pages/Skills.module.css';
import InputField from '@/components/InputField';
import { sendUserDetails } from '@/axios';
import Alert from '../components/Alert';

const initializeUserDetails = {
  name: '',
  email: '',
  message: ''
}

const Contact = () => {

  const [userDetails, setUserDetails] = useState<any>(initializeUserDetails);
  const [alertMessage, setAlertMessage] = useState<string>('');
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(false)
  const [validationErrors, setValidationErrors] = useState<any>({
    name: '',
    email: '',
    message: ''
  });

  const onchange = (e: any) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value })
    if (value.trim() === '') {
      setValidationErrors({ ...validationErrors, [name]: 'This field is required' });
    } else if (name === 'name' && value.length < 3) {
      setValidationErrors({ ...validationErrors, [name]: 'Name must be at least 3 characters long' });
    } else if (name === 'email' && value.length < 10) {
      setValidationErrors({ ...validationErrors, [name]: 'Email must be at least 10 characters long' });
    } else if (name === 'message' && value.length < 20) {
      setValidationErrors({ ...validationErrors, [name]: 'Message must be at least 20 characters long' });
    } else {
      setValidationErrors({ ...validationErrors, [name]: '' });
    }
  };

  const onSubmitHandler = async () => {
    const data = {
      name: userDetails.name,
      email: userDetails.email,
      message: userDetails.message
    }
    if (userDetails.email.length > 10 && userDetails.name.length > 3 && userDetails.message.length > 20) {
      const result = await sendUserDetails(data);
      setAlertMessage(result?.message || 'Message sent successfully');
      setUserDetails(initializeUserDetails);
      setShowAlert(true);
    } else {
      setAlertMessage('Fill required Inputs');
      setShowAlert(true);

    }
  }
  useEffect(() => {
    if (userDetails?.email?.length > 10 && userDetails?.name?.length > 3 && userDetails?.message?.length > 20) {
      setButtonDisabled(true)
    }
  }, [userDetails])

  const closeAlert = () => {
    setShowAlert(false);
  }

  return (
    <div className='header'>
      <Container>
        <Row>
          <Col lg={6} md={6} sm={12} xs={12}>
            <Card className={styles.card}>
              <h2 className={`${styles.contactHeading} text-center mb-3`}>Contact</h2>
              <InputField label={'Full Name'} type={'text'} name={'name'} value={userDetails.name} placeholder={'Enter Full Name'} required={true} rows={0} cols={0} onchange={onchange} error={validationErrors.name} />
              <InputField label={'Email Address'} type={'email'} name={'email'} value={userDetails.email} placeholder={'Enter Email Address'} required={true} rows={0} cols={0} onchange={onchange} error={validationErrors.email} />
              <InputField label={'Message'} type={'textarea'} name={'message'} value={userDetails.message} placeholder={'Hey Krupan, I love your website! I\'d like to discuss some opportunities that you might find interesting! 💐'} required={true} rows={10} cols={12} onchange={onchange} error={validationErrors.message} />
              <Button className={`${styles.hireMeButton} mt-4`} onClick={onSubmitHandler} disabled={!buttonDisabled}  >    Send Message  </Button>
              <p className={`${styles.copyRights} mt-4`}>Copyrights © 2024 Krupan Portfolio</p>
              <p className={`${styles.copyRights} mb-4`} > Designed and Developed by Krupan Goud Shivabandhi</p>
            </Card>
          </Col>
          <Col lg={6} md={6} sm={12} xs={12}>
          </Col>
        </Row>
      </Container>
      {showAlert && <Alert message={alertMessage} onClose={closeAlert} />}
    </div >
  )
}

export default Contact
