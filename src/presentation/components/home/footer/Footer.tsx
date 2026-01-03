import './Footer.css';

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <div className="footer-col">
            <p className="mono">
              <span>&#9654;</span> Drop your email if you vibe
            </p>
            <div className="footer-email-container">
              <div className="footer-email-row">
                <input type="text" placeholder="your@email.com" />
                <button>
                  <img src="/global/footer-right-arrow.png" alt="" />
                </button>
              </div>
            </div>
          </div>
          <div className="footer-col"></div>
        </div>
        <div className="footer-bottom">
          <div className="footer-col">
            <div className="footer-logo">
              <img src="/global/logo.png" alt="" />
            </div>
          </div>
          <div className="footer-col">
            <div className="footer-sub-col">
              <p className="mono">Explore</p>
              <div className="footer-links">
                <p>
                  <a href="/">Start Here</a>
                </p>
                <p>
                  <a href="/about">Who’s Juno</a>
                </p>
                <p>
                  <a href="/work">The Cool Work</a>
                </p>
                <p>
                  <a href="/project">Single Project</a>
                </p>
                <p>
                  <a href="/contact">Slide Into Inbox</a>
                </p>
              </div>
            </div>
            <div className="footer-sub-col">
              <p className="mono">Stalk Me</p>
              <div className="footer-copy">
                <p>Unit 7, The Pixel Building</p>
                <p>Z Street, Amsterdam</p>
                <br />
                <p>LinkedIn</p>
                <p>Twitter</p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="footer-col">
            <p className="mono">MWT July 2025</p>
          </div>
          <div className="footer-col">
            <div className="footer-sub-col">
              <p className="mono">Made by Codegrid</p>
            </div>
            <div className="footer-sub-col">
              <p className="mono">&copy; 2025 All Rights Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
