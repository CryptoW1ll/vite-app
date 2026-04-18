'use client';

import { useState } from 'react';
import { Field, Label, Switch } from '@headlessui/react';
import emailjs from '@emailjs/browser';
import GoogleWorkspace from '../components/GoogleWorkspace.jsx';
import GoogleBanner from '../components/GoogleBanner.jsx';

export default function Contact() {
  const [agreed, setAgreed] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agreed) {
      alert('Please agree to the privacy policy.');
      return;
    }

    console.log('Sending email with data:', formData);
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          firstName: formData.firstName,
          email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({ firstName: '', email: '', message: '' });
        setAgreed(false);
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        alert('Oops, something went wrong. Please try again later.');
      });
  };

  const isFormValid = formData.firstName && formData.email && formData.message && agreed;

  return (
    <div className="isolate bg-surface.alt px-6 py-24 sm:py-32 lg:px-8 text-primary">
      <p className="text-center text-secondary">
        Have an idea for a Mobile App? A game project? Let's talk!
      </p>
      <form
        onSubmit={handleSubmit}
        className="mx-auto mt-16 max-w-xl sm:mt-20 text-secondary"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="firstName" className="block font-semibold">
              Name
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              value={formData.firstName}
              onChange={handleChange}
              className="block w-full border rounded-md px-3 py-2 text-sm focus:outline focus:outline-2 focus:outline-indigo-600"
              required
            />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="email" className="block font-semibold">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="block w-full border rounded-md px-3 py-2 text-sm focus:outline focus:outline-2 focus:outline-indigo-600"
              required
            />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="message" className="block font-semibold">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="block w-full border rounded-md px-3 py-2 text-sm focus:outline focus:outline-2 focus:outline-indigo-600"
              required
            />
          </div>
        </div>

        <Field className="text-secondary flex gap-4">
          <Switch
            aria-hidden="true"
            checked={agreed === null}
            /* Ask... */
            disabled={false}