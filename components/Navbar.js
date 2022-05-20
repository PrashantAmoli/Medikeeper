import { useRef, useState, useEffect } from 'react';

export default function Navbar() {
  const checked = useRef();
  const stateRef = useRef({});
  const [Theme, setTheme] = useState({
    font: '',
    bg: '',
  });

  stateRef.current = Theme;

  useEffect(() => {
    setTimeout(() => {
      document.documentElement.style.setProperty(
        '--font',
        stateRef.current.font
      );
      document.documentElement.style.setProperty('--bg', stateRef.current.bg);
      console.log(`use effect ran ${JSON.stringify(Theme)}`);
    }, 4000);
    // document.documentElement.style.setProperty('--font', Theme.font);
    // document.documentElement.style.setProperty('--bg', Theme.bg);
  }, [Theme]);

  const changeTheme = () => {
    const font = getComputedStyle(document.documentElement).getPropertyValue(
      '--font'
    );
    const bg = getComputedStyle(document.documentElement).getPropertyValue(
      '--bg'
    );
    let theme = {
      font: bg.trim(),
      bg: font.trim(),
    };
    setTheme(theme);
    console.log(`changeTheme ran ${JSON.stringify(theme)}`);
    // document.documentElement.style.setProperty('--font', bg);
    // document.documentElement.style.setProperty('--bg', font);
    console.log(`Theme changed`);
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
