function Navbar() {
  return (
    <nav className="sm:flex justify-center">
      <ul className="flex space-x-4">
        <li className="hover:underline">
          <a href="#home">Home</a>
        </li>
        <li className="hover:underline">
          <a href="#about-me">About Me</a>
        </li>
        <li className="hover:underline">
          <a href="#skills">Skills</a>
        </li>
        <li className="hover:underline">
          <a href="#projects">Projects</a>
        </li>
        <li className="hover:underline">
          <a href="#contact">Contact Me</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
