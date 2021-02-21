import { ReactComponent as Facebook } from "../images/facebook.svg";
import { ReactComponent as Twitter } from "../images/twitter.svg";
import { ReactComponent as Github } from "../images/github.svg";
import { ReactComponent as Linkedin } from "../images/linkedin.svg";

const ContactIcons = () => {
    const handleMouseEnter = (e) => {
        const tagName = e.target.tagName;
        if (tagName === "A") {
            const div = e.target.querySelector("div");
            div.classList.remove("translate-x-40");
            div.classList.add("-translate-x-40");
        } else if (tagName === "svg") {
            const div = e.target.parentElement.querySelector("div");
            div.classList.remove("translate-x-40");
            div.classList.add("-translate-x-40");
        } else {
            const div = e.target.parentElement.parentElement.querySelector(
                "div"
            );
            div.classList.remove("translate-x-40");
            div.classList.add("-translate-x-40");
        }
    };

    const handleMouseLeave = (e) => {
        const tagName = e.target.tagName;
        if (tagName === "A") {
            const div = e.target.querySelector("div");
            div.classList.remove("-translate-x-40");
            div.classList.add("translate-x-40");
        } else if (tagName === "svg") {
            const div = e.target.parentElement.querySelector("div");
            div.classList.remove("-translate-x-40");
            div.classList.add("translate-x-40");
        } else {
            const div = e.target.parentElement.parentElement.querySelector(
                "div"
            );
            div.classList.remove("-translate-x-40");
            div.classList.add("translate-x-40");
        }
    };

    return (
        <div className="w-full pb-8 flex flex-col justify-center items-center">
            <a
                href="#"
                className="w-24 h-24 m-8 bg-gray-300 bg-opacity-20 rounded-md backdrop-filter shadow-2xl flex items-center justify-center transition duration-500 transform hover:-translate-y-6 relative overflow-hidden z-20"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                <Facebook className="w-12 h-12 relative z-10" />
                <div className="bg-white bg-opacity-30 absolute top-0 left-0 w-6 h-full transform skew-x-45 translate-x-40 transition duration-500"></div>
            </a>
            <a
                href="#"
                className="w-24 h-24 m-8 bg-gray-300 bg-opacity-20 rounded-md backdrop-filter shadow-2xl flex items-center justify-center transition duration-500 transform hover:-translate-y-6  relative overflow-hidden"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                <Twitter className="w-12 h-12" />
                <div className="bg-white bg-opacity-30 absolute top-0 left-0 w-6 h-full transform skew-x-45 translate-x-40 transition duration-500"></div>
            </a>
            <a
                href="#"
                className="w-24 h-24 m-8 bg-gray-300 bg-opacity-20 rounded-md backdrop-filter shadow-2xl flex items-center justify-center transition duration-500 transform hover:-translate-y-6  relative overflow-hidden"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                <Github className="w-12 h-12" />
                <div className="bg-white bg-opacity-30 absolute top-0 left-0 w-6 h-full transform skew-x-45 translate-x-40 transition duration-500"></div>
            </a>
            <a
                href="#"
                className="w-24 h-24 m-8 bg-gray-300 bg-opacity-20 rounded-md backdrop-filter shadow-2xl flex items-center justify-center transition duration-500 transform hover:-translate-y-6  relative overflow-hidden"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                <Linkedin className="w-12 h-12" />
                <div className="bg-white bg-opacity-30 absolute top-0 left-0 w-6 h-full transform skew-x-45 translate-x-40 transition duration-500"></div>
            </a>
        </div>
    );
};

export default ContactIcons;