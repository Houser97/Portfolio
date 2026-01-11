import { useRef, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";

import { menuRoutes } from "@/app/navigation/routes";
import { socialLinks } from "@/data/social";
import { symbols } from "@/data/symbols";

import "./Menu.css";


gsap.registerPlugin(SplitText);

export const Menu = () => {
  const navigate = useNavigate();

  const menuRef = useRef<HTMLElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const footerRef = useRef<HTMLDivElement | null>(null);
  const hamburgerRef = useRef<HTMLDivElement | null>(null);
  const logoRef = useRef<HTMLImageElement | null>(null);
  const isOpenRef = useRef(false);


  // store splits
  const splitTexts = useRef<SplitText[]>([]);
  const footerSplits = useRef<SplitText[]>([]);
  const timeSplit = useRef<SplitText | null>(null);

  const isAnimating = useRef(false);
  const lastScrollY = useRef(0);
  const intervalRef = useRef<number | null>(null);

  const [isOpen, setIsOpen] = useState(false);

  // scramble helper (keeps original text after some iterations)
  const scrambleChar = (charEl: HTMLElement, duration = 400) => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
    const original = charEl.textContent ?? "";
    let iterations = 0;
    const maxIterations = Math.floor(Math.random() * 6) + 3;
    const iv = window.setInterval(() => {
      charEl.textContent = chars[Math.floor(Math.random() * chars.length)];
      iterations++;
      if (iterations >= maxIterations) {
        clearInterval(iv);
        charEl.textContent = original;
      }
    }, 25);
    // safety timeout
    window.setTimeout(() => {
      clearInterval(iv);
      charEl.textContent = original;
    }, duration);
  };

  // updateTime: updates wrapper text when closed, or split chars when open
  const updateTime = () => {
    const now = new Date();
    const timeString = now.toLocaleTimeString("en-US", { hour12: false });
    const wrapper = footerRef.current?.querySelector(
      ".menu-time"
    ) as HTMLElement | null;
    if (!wrapper) return;

    if (!isOpen) {

      wrapper.textContent = `${timeString} LOCAL`;
    } else {
      // menu open -> update split chars content (if timeSplit exists)
      const ts = timeSplit.current;
      if (ts && ts.chars && ts.chars.length > 0) {
        const newText = `${timeString} LOCAL`;
        // ensure at least as many chars as newText
        for (let i = 0; i < newText.length; i++) {
          const cEl = ts.chars[i] as HTMLElement | undefined;
          if (cEl) {
            cEl.textContent = newText[i];
          } else {
            // fallback: append to wrapper directly if missing char element
            wrapper.textContent = newText;
          }
        }
      } else {
        // fallback
        wrapper.textContent = `${timeString} LOCAL`;
      }
    }
  };

  /* --------------------------------
     GSAP INIT (useGSAP: handles ctx cleanup)
  ----------------------------------*/
  useGSAP(
    () => {
      if (!menuRef.current || !overlayRef.current) return;

      // reset arrays (in case)
      splitTexts.current = [];
      footerSplits.current = [];
      timeSplit.current = null;

      // initial overlay collapsed
      gsap.set(overlayRef.current, { scaleY: 0, transformOrigin: "top right" });

      // split menu links (words)
      const items = gsap.utils.toArray<HTMLLIElement>(".menu-nav li");
      items.forEach((item) => {
        const link = item.querySelector("a");
        if (!link) return;

        const split = new SplitText(link, { type: "words", mask: "words" });
        splitTexts.current.push(split);
        gsap.set(split.words, { yPercent: 120 });
        gsap.set(item, { opacity: 1 }); // show li
      });

      // split footer elements (chars)
      const footerEls = gsap.utils.toArray<HTMLElement>(
        ".menu-social a, .menu-social span, .menu-time"
      );
      footerEls.forEach((el) => {
        const split = new SplitText(el, { type: "chars" });
        footerSplits.current.push(split);
        gsap.set(split.chars, { opacity: 0 });

        // keep reference for the time element split
        if (el.classList.contains("menu-time")) {
          timeSplit.current = split;
          // initially hide wrapper (it will be shown on open)
          gsap.set(el, { opacity: 0 });
        }
      });

      gsap.set(footerRef.current, { opacity: 1, y: 20 });

      // scroll handler (closes menu when scrolling down and hides the menu when scrolling down > 100)
      const onScroll = () => {
        const y = window.scrollY;

        // scrolling DOWN
        if (y > lastScrollY.current && y > 100) {
          // close menu if open
          if (isOpenRef.current && !isAnimating.current) {
            closeMenu();
          }

          menuRef.current?.classList.add("hidden");
        }
        // scrolling UP
        else if (y < lastScrollY.current) {
          menuRef.current?.classList.remove("hidden");
        }

        lastScrollY.current = y;
      };

      window.addEventListener("scroll", onScroll);

      // start clock interval (updates DOM each second)
      updateTime();
      intervalRef.current = window.setInterval(updateTime, 1000);

      // cleanup: remove scroll listener and revert splits
      return () => {
        window.removeEventListener("scroll", onScroll);
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
        splitTexts.current.forEach((s) => s.revert());
        footerSplits.current.forEach((s) => s.revert());
        splitTexts.current = [];
        footerSplits.current = [];
        timeSplit.current = null;
      };
    },
    { scope: menuRef }
  );

  const toggleMenu = () => {
    if (isAnimating.current) return;
    if (isOpen) closeMenu();
    else openMenu();
  };

  const openMenu = () => {
    isAnimating.current = true;
    isOpenRef.current = true;
    setIsOpen(true);

    hamburgerRef.current?.classList.add("open");
    logoRef.current?.classList.add("rotated");

    const allWords = splitTexts.current.flatMap(
      (s) => Array.from(s.words) as HTMLElement[]
    );
    const footerChars = footerSplits.current.flatMap(
      (s) => Array.from(s.chars) as HTMLElement[]
    );

    gsap
      .timeline({
        onComplete: () => {
          isAnimating.current = false;
        },
      })
      .to(overlayRef.current, { scaleY: 1, duration: 0.5, ease: "power3.out" })
      .to(
        allWords,
        {
          yPercent: 0,
          duration: 0.75,
          stagger: 0.05,
          opacity: 1,
          ease: "power4.out",
        },
        "-=0.3"
      )
      .to(
        footerRef.current,
        {
          y: 0,
          duration: 0.3,
          ease: "power2.out",
          onComplete: () => {
            // reveal time wrapper
            const timeWrapper = footerRef.current?.querySelector(
              ".menu-time"
            ) as HTMLElement | null;
            if (timeWrapper)
              gsap.to(timeWrapper, { opacity: 1, duration: 0.25 });

            // reveal footer chars and scramble
            footerChars.forEach((charEl, idx) => {
              gsap.to(charEl, {
                opacity: 1,
                duration: 0.12,
                delay: idx * 0.02,
              });
              window.setTimeout(() => scrambleChar(charEl, 400), idx * 30);
            });

            // force an immediate time-update into split chars
            updateTime();
          },
        },
        "-=0.8"
      );
  };

  const closeMenu = () => {
    isAnimating.current = true;
    isOpenRef.current = false;
    setIsOpen(false);

    hamburgerRef.current?.classList.remove("open");
    logoRef.current?.classList.remove("rotated");

    const allWords = splitTexts.current.flatMap(
      (s) => Array.from(s.words) as HTMLElement[]
    );
    const footerChars = footerSplits.current.flatMap(
      (s) => Array.from(s.chars) as HTMLElement[]
    );

    gsap
      .timeline({
        onComplete: () => {
          isAnimating.current = false;
        },
      })
      .set(footerChars, { opacity: 0 })
      .to(footerRef.current, { y: 20, duration: 0.3 })
      .to(
        allWords,
        { yPercent: 120, duration: 0.25, stagger: -0.025, ease: "power2.in" },
        "-=0.2"
      )
      .to(
        overlayRef.current,
        { scaleY: 0, duration: 0.5, ease: "power3.inOut" },
        "-=0.2"
      )
      .add(() => {
        updateTime();
      });
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    path: string
  ) => {
    e.preventDefault();
    if (isOpen) closeMenu();
    navigate(path);
  };

  return (
    <nav className="menu" ref={menuRef}>
      <div
        className="menu-header"
        onClick={toggleMenu}
        role="button"
        aria-label="Toggle menu"
      >
        <a className="menu-logo" aria-label="logo">
          <img ref={logoRef} src={symbols.logo} alt="Logo" />
        </a>

        <button className="menu-toggle" aria-label="Toggle menu">
          <div className="menu-hamburger-icon" ref={hamburgerRef}>
            <span className="menu-item" />
            <span className="menu-item" />
          </div>
        </button>
      </div>

      <div className="menu-overlay" ref={overlayRef}>
        <nav className="menu-nav" aria-label="Main navigation">
          <ul>
            {menuRoutes.map(({ name, route }) => (
              <li key={name}>
                <Link to={route} onClick={(e) => handleNavClick(e, route)}>
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="menu-footer" ref={footerRef}>
          <div className="menu-social">
            <a
              href={socialLinks.links[0].url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>▶</span> {socialLinks.links[0].label}
            </a>
            <a
              href={socialLinks.links[1].url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>▶</span> {socialLinks.links[1].label}
            </a>
          </div>
          <div className="menu-time">LOCAL</div>
        </div>
      </div>
    </nav>
  );
};
