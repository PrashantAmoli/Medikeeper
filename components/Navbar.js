import { useRef } from 'react';
import useStorage from './hooks/useStorage.js';

export default function Navbar() {
  const checked = useRef();

  const { getItem, setItem, removeItem } = useStorage();

  let theme = {
    font: '',
    bg: '',
  };

  const setTheme = () => {
    document.documentElement.style.setProperty('--font', getItem('font'));
    document.documentElement.style.setProperty('--bg', getItem('bg'));
  };
  if (getItem('bg')) {
    setTheme();
  }

  const changeTheme = () => {
    const font = getComputedStyle(document.documentElement).getPropertyValue(
      '--font'
    );
    const bg = getComputedStyle(document.documentElement).getPropertyValue(
      '--bg'
    );
    theme = {
      font: bg.trim(),
      bg: font.trim(),
    };
    //Session Storage
    setItem('font', theme.font);
    setItem('bg', theme.bg);

    document.documentElement.style.setProperty('--bg', font);
    document.documentElement.style.setProperty('--font', bg);
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
            <a href="/Register">Register</a>
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
