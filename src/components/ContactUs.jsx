import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelopeOpenText,
} from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";

const ContactUs = () => {
  return (
    <section id="contact" className="bg-[#f8f8f8] pt-16 px-4">
      <p className="text-base font-semibold text-[#212ea0] mb-2 uppercase text-center">
        Contact Us
      </p>
      <h2 className="text-3xl md:text-4xl font-bold text-[#000f38] mb-2 text-center">
        Get in touch
      </h2>
      <div className="max-w-5xl mx-auto py-16 flex flex-col md:flex-row">
        <div className="md:w-1/2 p-6 flex flex-col ">
          <h2 className="text-2xl font-medium mb-4 flex">
            Send us a message
            <FaEnvelopeOpenText className="mt-1 w-12 h-7 text-yellow-500 ml-2" />
          </h2>
          <p className="mb-6 text-[#676767]">
            Feel free to reach out through the contact form or find our contact
            information below. Your feedback, questions, and suggestions are
            important to us as we strive to provide exceptional service to our
            university community.
          </p>
          <div className="flex items-center mb-2 text-[#676767]">
            <FaEnvelope className="text-blue-700 p-2 w-10 h-10 mr-2" />
            <span>Contact@GreatStack.dev</span>
          </div>
          <div className="flex items-center mb-2 text-[#676767]">
            <FaPhone className="text-blue-700 p-2 w-10 h-10 mr-2" />
            <span>+1 123-456-7890</span>
          </div>
          <div className="flex items-center mb-2 text-[#676767]">
            <FaMapMarkerAlt className="text-blue-700 p-2 w-10 h-10 mr-2" />
            <span>
              77 Massachusetts Ave, <br />
              Cambridge, MA 02139, United States
            </span>
          </div>
        </div>
        <div className="md:w-1/2 px-6 bg-light-blue-100 rounded-lg">
          <form>
            <div className="mb-4">
              <label
                className="block text-sm font-medium mb-1 text-[#676767]"
                htmlFor="name"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="w-full p-2 border-none bg-[#ebecfe] shadow-sm outline-none"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-sm font-medium mb-1 text-[#676767]"
                htmlFor="phone"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="Enter your mobile number"
                className="w-full p-2 border-none bg-[#ebecfe] shadow-sm outline-none"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-sm font-medium mb-1 text-[#676767]"
                htmlFor="email"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email id"
                className="w-full p-2 border-none bg-[#ebecfe] shadow-sm outline-none"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-sm font-medium mb-1 text-[#676767] outline-none"
                htmlFor="message"
              >
                Write your messages here
              </label>
              <textarea
                id="message"
                placeholder="Enter your message"
                className="w-full p-2 border-none bg-[#ebecfe] shadow-sm outline-none"
                rows={4}
                required
              ></textarea>
            </div>
          </form>
          <button
            className="inline-flex items-center my-8 bg-[#212EA0] text-white 
                     py-3 px-5 rounded-full transition cursor-pointer"
          >
            submit now
            <IoIosArrowRoundForward className="ml-2 font-bold" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
