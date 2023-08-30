import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const Contact = () => {
  const onFormSubmitHandle = (ev) => {
    ev.preventDefault();
    const scriptURL = process.env.REACT_APP_FORM_URL;
    const form = document.forms['contact-form'];
    const waitMsg = document.querySelector('#wait-msg');
    waitMsg.classList.remove('visually-hidden');

    fetch(scriptURL, {
      method: 'POST',
      body: new FormData(form)
    })
      .then(() => {
        form.reset();
        waitMsg.classList.add('visually-hidden');
        alert('Message sent successfully! Thank you.');
      })
      .catch(() => {
        waitMsg.classList.add('visually-hidden');
        alert('Message failed to send! Please check back.');
      });
  };

  return (
    <>
      <h2 className='text-center mb-5' id="contact">Contact</h2>
      <Form name='contact-form' className='col-lg-8 m-auto' onSubmit={onFormSubmitHandle}>
        <Form.Group className="mb-3 visually-hidden" controlId="platform">
          <Form.Label>Platform</Form.Label>
          <Form.Control type="text" name="platform" defaultValue="Portfolio" readOnly />
        </Form.Group>
        <Form.Group className="mb-3" controlId="username">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" placeholder="My Name" name="username" autoFocus required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="contact">
          <Form.Label>Phone Number / Email Address *(Fill one of both)</Form.Label>
          <Form.Control type="text" placeholder="08xxxx / name@example.com" name="contact" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="message">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={5} placeholder='Hello, I want to ...' name="message" required />
        </Form.Group>
        <Button variant="danger" type="submit" className="w-50 fs-5 mt-5 mb-3 d-block m-auto">
          Send
        </Button>
        <p className='text-center visually-hidden' id="wait-msg">Please wait...</p>
      </Form>
      <hr className='my-5' />
      <Button as={Link} to='https://wa.me/6282274022132?text=Portfolio' variant="success" type="button" className="w-75 fs-5 mb-3 d-block m-auto">
        <FaWhatsapp size='35' fill='#fff' className='me-2' />
        WhatsApp
      </Button>
    </>
  )
}
