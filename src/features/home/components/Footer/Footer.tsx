import { Link } from 'react-router-dom';

import { routes } from "@/app/navigation/routes";
import { EMAIL, socialLinks } from "@/data/social";
import { symbols } from "@/data/symbols";

import './Footer.css';



export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <div className="footer-col">
            <div className="footer-email-container">
              <div className="footer-email-row">
                <p className="email">{EMAIL}</p>
              </div>
            </div>
          </div>
          <div className="footer-col"></div>
        </div>
        <div className="footer-bottom">
          <div className="footer-col">
            <div className="footer-logo">
              <img src={symbols.logo} alt="" />
            </div>
          </div>
          <div className="footer-col">
            <div className="footer-sub-col">
              <p className="mono">Explore</p>
              <div className="footer-links">
                <p>
                  <Link to={routes.home.route}>Start Here</Link>
                </p>
                <p>
                  <Link to={routes.selectedWork.route}>Selected Work</Link>
                </p>
                <p>
                  <Link to={routes.experiments.route}>Experiments</Link>
                </p>
              </div>
            </div>
            <div className="footer-sub-col">
              <p className="mono">Find me online</p>
              <div className="footer-copy">
                {socialLinks.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="footer-col">
            <p className="mono">Last Update - January 2026</p>
          </div>
          <div className="footer-col">
            <div className="footer-sub-col">
              <p className="mono">Made by Arturo Rivera</p>
            </div>
            <div className="footer-sub-col">
              <p className="mono">&copy; 2026</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
