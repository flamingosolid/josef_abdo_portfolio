import PropTypes from "prop-types";
import { useState, useRef, useEffect } from "react";
import "./FadeIn.scss";

function FadeInSection({ children }) {
  const [isVisible, setVisible] = useState(true);
  const domRef = useRef();

  useEffect(() => {
    const domRefCurrent = domRef.current;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(domRefCurrent);

    return () => observer.unobserve(domRefCurrent);
  }, []);

  return (
    <div
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      ref={domRef}
    >
      {children}
    </div>
  );
}

FadeInSection.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FadeInSection;
