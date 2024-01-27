import { FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-greysuit flex text-black justify-center content-center align-center w-full h-fit py-4 px-auto">
      <div className="flex flex-col w-fit gap-3 mx-auto">
        <div className="flex flex-row gap-4 text-2xl justify-center" id="social-links">
          <a href="https://youtu.be/dQw4w9WgXcQ?si=qDvYMns7bGo0fKVl" className="hover:text-red-600 duration-500 ease-in-out">
            <FaYoutube />
          </a>
          <a href="https://youtu.be/dQw4w9WgXcQ?si=qDvYMns7bGo0fKVl" className="hover:text-sky-600 duration-500 ease-in-out">
            <FaTwitter />
          </a>
          <a href="https://youtu.be/dQw4w9WgXcQ?si=qDvYMns7bGo0fKVl" className="hover:text-fuchsia-600 duration-500 ease-in-out">
            <FaInstagram />
          </a>
          <a href="https://youtu.be/dQw4w9WgXcQ?si=qDvYMns7bGo0fKVl" className="hover:text-sky-600 duration-500 ease-in-out">
            <FaLinkedin />
          </a>
        </div>
        <div className="flex flex-row justify-center items-center gap-1.5">
          <p className="text-lg">{new Date().getFullYear()} FitnationApp</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 

