const ScrollLink = ({ to, children }) => {
  const handleClick = (e) => {
    e.preventDefault();
    const el = document.getElementById(to);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <a href={`#${to}`} onClick={handleClick}>
      {children}
    </a>
  );
};

export default ScrollLink