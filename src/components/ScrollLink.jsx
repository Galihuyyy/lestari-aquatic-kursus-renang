const ScrollLink = ({ to, children, tag }) => {
  const handleClick = (e) => {
    e.preventDefault();
    const el = document.getElementById(to);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  const active = tag == to ? true : false
  const activeClass = active ? "bg-blue-700 text-white px-3 rounded-full" : "false"

  return (
    <a href={`#${to}`} onClick={handleClick} className={activeClass}>
      {children}
    </a>
  );
};

export default ScrollLink