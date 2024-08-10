import "./Footer.css";
import Tourist from "../../assets/male-tourist.png";
import AchieversItLogo from "../../assets/logo.png";
import { GrUserSettings } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin, CiPhone } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <>
      {
        <div className="Footer__top-container">
          <section>
            <h1>Subscribe now for useful traveling information </h1>
            <div>
              <input type="email" placeholder="Enter your email" />
              <button>Subscribe</button>
            </div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem
              porro, sapiente qui suscipit odit aliquid!
            </p>
          </section>
          <section>
            <img src={Tourist} alt="Tourist" />
          </section>
        </div>
      }
      <div className="Footer__bottom-container">
        <section className="Logo__container">
          <img src={AchieversItLogo} alt="AchieversIt" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi,
            soluta.
          </p>
          <div>
            <span>
              <GrUserSettings />
            </span>
            <span>
              <FaGithub />
            </span>
            <span>
              <CiLinkedin />
            </span>
            <span>
              <FaInstagram />
            </span>
          </div>
        </section>
        <section className="Details__container">
          <div>
            <h5>Discover</h5>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Tours</li>
            </ul>
          </div>
          <div>
            <h5>Quick Links</h5>
            <ul>
              <li>Gallery</li>
              <li>Login</li>
              <li>Register</li>
            </ul>
          </div>
          <div>
            <h5>Contact Us</h5>
            <ul>
              <li>
                <CiLocationOn size={25} color="orange" />
                <span style={{ fontWeight: "500" }}>Address</span> : Bangalore,
                Karnataka
              </li>
              <li>
                <MdOutlineEmail size={25} color="orange" />
                <span style={{ fontWeight: "500" }}>Email</span> :
                somavik01@gmail.com
              </li>
              <li>
                <CiPhone size={25} color="orange" />
                <span style={{ fontWeight: "500" }}>Phone</span> : +918975456255
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
};

export default Footer;
