import { useRef, useState } from 'react';

export default function Navbar() {
  const checked = useRef();
  const [Theme, setTheme] = useState({
    font: '',
    bg: '',
  });

  const changeTheme = () => {
    const font = getComputedStyle(document.documentElement).getPropertyValue(
      '--font'
    );
    const bg = getComputedStyle(document.documentElement).getPropertyValue(
      '--bg'
    );
    setTheme({
      font: bg,
      bg: font,
    });
    document.documentElement.style.setProperty('--font', bg);
    document.documentElement.style.setProperty('--bg', font);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container nav-container">
        <input type="checkbox" name="" id="" />
        <div className="hamburger-lines">
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </div>
        <ul className="menu-items">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/Reports">Reports</a>
          </li>
          <li>
            <a href="/Patients">Patients</a>
          </li>
          <li>
            <a href="/Doctors">Doctors</a>
          </li>
          <li>
            <a href="/About">About Us</a>
          </li>
          <li>
            {/* <a alt="Change Theme" onClick={() => changeTheme()}>
              Theme
            </a> */}
            <div>
              <input
                ref={checked}
                type="checkbox"
                className="checkbox"
                id="checkbox"
                onClick={() => changeTheme()}
              />
              <label htmlFor="checkbox" className="label">
                <i className="fas fa-sun"></i>
                <i className="fas fa-moon"></i>
                <div className="ball"></div>
              </label>
            </div>
          </li>
        </ul>
        <h1 className="logo">
          <a href="/1">Medikeeper</a>
        </h1>
      </div>
    </nav>
  );
}
