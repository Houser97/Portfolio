import { PAGE_ANIMATION_DURATION_IN_SECONDS } from "@/constants/animations";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const scrollTimeout = setTimeout(() => {
      window.scrollTo(0, 0);
    }, PAGE_ANIMATION_DURATION_IN_SECONDS * 1000);

    return () => clearTimeout(scrollTimeout);
  }, [pathname]);

  return null;
}
