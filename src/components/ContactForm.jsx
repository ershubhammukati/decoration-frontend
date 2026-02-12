import React from 'react';
import './ContactForm.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// ✅ Validation schema
const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  contact: yup
    .string()
    .matches(/^[0-9]{10}$/, 'Contact number must be 10 digits')
    .required('Contact number is required'),
  message: yup.string().min(10, 'Minimum 10 characters required').required('Message is required'),
});

function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data); // API call later
    toast.success('Message sent successfully!');
    reset(); 
  };

  return (
    <div className="container my-5">
      <ToastContainer position="top-right" autoClose={3000} />
      <h2 className="contact-heading mb-4 text-center">Contact Us</h2>

      <div className="mx-auto" style={{ maxWidth: '600px' }}>
        <form className="row g-3" onSubmit={handleSubmit(onSubmit)}>
          
          {/* Name */}
          <div className="col-12">
            <label className="form-label d-block text-start fw-bold text-success">Your Name</label>
            <input
              type="text"
              {...register('name')}
              className="form-control form-control-sm"
              placeholder="Enter your name"
            />
            <p className="text-danger small text-start">{errors.name?.message}</p>
          </div>

          {/* Email */}
          <div className="col-12">
            <label className="form-label d-block text-start fw-bold text-success">Your Email</label>
            <input
              type="email"
              {...register('email')}
              className="form-control form-control-sm"
              placeholder="Enter your email"
            />
            <p className="text-danger small text-start">{errors.email?.message}</p>
          </div>

          {/* Contact Number */}
          <div className="col-12">
            <label className="form-label d-block text-start fw-bold text-success">Your Contact Number</label>
            <input
              type="tel"
              {...register('contact')}
              className="form-control form-control-sm"
              placeholder="Enter your contact number"
            />
            <p className="text-danger small text-start">{errors.contact?.message}</p>
          </div>

          {/* Message */}
          <div className="col-12">
            <label className="form-label d-block text-start fw-bold text-success">Your Message</label>
            <textarea
              {...register('message')}
              className="form-control form-control-sm"
              rows="4"
              placeholder="Write your message here..."
            ></textarea>
            <p className="text-danger small text-start">{errors.message?.message}</p>
          </div>

          {/* Submit */}
          <div className="col-12 text-center">
            <button type="submit" className="btn btn-success px-4">Submit</button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default ContactForm;
