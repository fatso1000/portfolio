import "./Header.css";
import { Link } from "react-scroll";

const hideNav = () => {
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
  };
};

export default function Header() {
  hideNav();
  return (
    <nav className="navbar" id="navbar">
      <div>
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="navbar__title"
        >
          About
        </Link>
      </div>
      <div>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          className="navbar__title"
        >
          Projects
        </Link>
      </div>
      <div>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="navbar__title"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
