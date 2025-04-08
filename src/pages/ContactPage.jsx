import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Navbar from '../components/Navbar';
import FooterBottom from '../components/FooterBottom';
import fikriImg from '../assets/hero.png';

const ContactPage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'introsite_pli19', 
        'template_introstpli19',
        form.current,
        't0YwH4g1HFFIbxbQp'
      )
      .then(
        (result) => {
          alert('Message sent!');
          form.current.reset();
        },
        (error) => {
          alert('Something went wrong, try again.');
        }
      );
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[#f7f7f7] text-[#1c1c1c] px-4 pt-32 pb-16 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">

          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <img src={fikriImg} alt="Fikri Andra Irham" className="w-40 h-40 rounded-full object-cover mb-6 bg-[#C7D0D9]" />
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-500">Contact Details</h3>
              <p className="text-xl font-medium mt-2">fikri.andrhm@gmail.com</p>
              <p className="text-xl font-medium mt-1">+62 857-2326-5920</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-500 mb-2">Social</h3>
              <div className="flex flex-col gap-1 text-xl">
                <a href="https://linkedin.com/in/fikriandrrhm" className="hover:underline">LinkedIn</a>
                <a href="https://github.com/fikriandrrhm19" className="hover:underline">Github</a>
                <a href="https://medium.com/@fikri.andrhm" className="hover:underline">Medium</a>
                <a href="https://instagram.com/fikriandrrhm_" className="hover:underline">Instagram</a>
              </div>
            </div>
          </div>

          <div>
            <h1 className="text-3xl md:text-4xl font-semibold mb-10">Reach out and let’s make something awesome!</h1>
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label className="block text-xl font-medium mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  className="text-lg w-full border-b border-gray-400 bg-transparent focus:outline-none py-2"
                />
              </div>
              <div>
                <label className="block text-xl font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Your email"
                  className="text-lg w-full border-b border-gray-400 bg-transparent focus:outline-none py-2"
                />
              </div>
              <div>
                <label className="block text-xl font-medium mb-1">Subject</label>
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="What do you want to talk about?"
                  className="text-lg w-full border-b border-gray-400 bg-transparent focus:outline-none py-2"
                />
              </div>
              <div>
                <label className="block text-xl font-medium mb-1">Message</label>
                <textarea
                  name="message"
                  required
                  placeholder="Type your message..."
                  className="text-lg w-full border border-gray-300 rounded-lg p-3 bg-white focus:outline-none resize-none"
                  rows={6}
                />
              </div>
              <button
                type="submit"
                className="bg-black text-white py-2 px-6 rounded-full hover:bg-gray-800 transition"
              >
                Submit
              </button>
            </form>
          </div>

        </div>
      </div>

      <footer className="bg-[#0e0e0e] text-white px-6 py-12">
        <FooterBottom />
      </footer>
    </>
  );
};

export default ContactPage;
