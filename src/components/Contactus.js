import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = ({ productName, closeModal }) => {
  const form = useRef();
  console.log(productName);

  const sendEmail = (e) => {
    e.preventDefault();
  
    const formData = new FormData(form.current);
  
    // Extracting values from form data
    const name = formData.get('from_name');
    const email = formData.get('from_email');
    const message = formData.get('message');
  
    // Prepare email parameters
    const templateParams = {
      product_name: productName, // Passing productName as product_name
      from_name: name,
      from_email: email,
      message: message
    };
  
    emailjs
      .send('service_ktrm7ro', 'template_0w9s9lj', templateParams, 'OOG9VhKzRKR9hg0tE')
      .then(
        (result) => {
          console.log('Email successfully sent!', result.text);
          closeModal(); // Close modal or perform any other action
        },
        (error) => {
          console.error('Email sending failed:', error.text);
          // Handle error here
        }
      );
  };
  
  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true">
        <div className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#e66355] to-[#fcc889] opacity-30 sm:left-[calc(80%-40rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact sales</h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">Know more about this product by contacting us. We will get in touch with you soon.</p>
      </div>
      <form onSubmit={sendEmail} ref={form} className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-900">Full name</label>
            <div className="mt-2.5">
              <input type="text" name="from_name" id="name" autoComplete="given-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
          <div>
            <label htmlFor="Email Address" className="block text-sm font-semibold leading-6 text-gray-900">Email Address</label>
            <div className="mt-2.5">
              <input type="text" name="from_email" id="Email Address" autoComplete="given-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
          
          {/* More input fields */}
        </div>
        <div>
            <label htmlFor="Message" className="block text-sm font-semibold leading-6 text-gray-900">Message (if any)</label>
            <div className="mt-2.5">
              <input type="text" name="message" id="Message" autoComplete="given-name" className="block w-full h-20 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
        <div className="mt-10">
          <button type="submit" className="block w-full rounded-md  bg-yellow-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Let's talk</button>
        </div>
      </form>
    </div>
  );
};
