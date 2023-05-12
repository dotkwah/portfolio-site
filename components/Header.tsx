export function Header () {

  const handleNavClick = (section: any) => {
    const element = document.getElementById(section);
    if (element !== null) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={'flex px-10 z-10 fixed top-0 w-full h-24 items-center bg-backgroundDefault bg-opacity-90'}>
      <nav className={'flex align-middle w-full justify-between'}>
        <div/>
        <ol className={'flex justify-end'}>
          <li
            className={`p-2 cursor-pointer`}
            onClick={() => handleNavClick('about')}
          >
            About
          </li>
          <li
            className={`p-2 cursor-pointer`}
            onClick={() => handleNavClick('experience')}
          >
            Experience
          </li>
          <li
            className={`p-2 cursor-pointer`}
            onClick={() => handleNavClick('work')}
          >
            Work
          </li>
          <li
            className={`p-2 cursor-pointer`}
            onClick={() => handleNavClick('contact')}
          >
            Contact
          </li>
        </ol>
      </nav>
    </header>
  );
}