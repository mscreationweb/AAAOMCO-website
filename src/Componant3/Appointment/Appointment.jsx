import { useState } from "react";
import appointmentThumb from "/images/allimg/contact.jpg";
import { FaArrowRightLong } from "react-icons/fa6";

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;

    const fullMessage = `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`;
    const encodedMessage = encodeURIComponent(fullMessage);

    // WhatsApp link with country code and no "+" or spaces
    const whatsappUrl = `https://wa.me/966549272708?text=${encodedMessage}`;

    // Open WhatsApp chat in a new tab
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="relative mb-8">
      <div className="Container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <img src={appointmentThumb} className="w-full mb-3" />
          </div>

          <div className="mr-2">
            <h2 className="font-Inter font-bold text-3xl md:text-[20px] mb-1">
              Send Us Message
            </h2>
            <p className="mb-3">
              At Advanced Accurate Arabia Operation & Maintenance co, we believe in fostering strong connections and clear communication with our clients. Whether you have a question, need a forklift rental, or require expert advice on forklift maintenance, we are here to assist you.
              <br />
              Fill out the form below or reach out to us directly, and one of our team members will get back to you promptly. We look forward to hearing from you and helping you with your material handling needs.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-7">
              <div className="flex flex-col md:flex-row gap-7">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name*"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="border border-[#E3E3E3] rounded py-2 px-6 outline-none h-[56px] w-full"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your E-Mail*"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="border border-[#E3E3E3] rounded py-2 px-6 outline-none h-[56px] w-full"
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="border border-[#E3E3E3] rounded py-2 px-6 outline-none h-[56px] w-full"
                />
              </div>

              <textarea
                name="message"
                placeholder="Your Message"
                required
                value={formData.message}
                onChange={handleChange}
                className="border border-[#E3E3E3] rounded py-2 px-6 outline-none resize-none h-[140px] w-full"
              ></textarea>

              <div className="flex justify-center">
                <button type="submit" className="primary-btn2 flex items-center gap-2">
                  Submit
                  <FaArrowRightLong size={20} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
