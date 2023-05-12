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
            className={`py-2 w-16 cursor-pointer hover:font-bold`}
            onClick={() => handleNavClick('about')}
          >
            About
          </li>
          <li
            className={`py-2 w-24 cursor-pointer hover:font-bold`}
            onClick={() => handleNavClick('experience')}
          >
            Experience
          </li>
          <li
            className={`py-2 w-14 cursor-pointer hover:font-bold`}
            onClick={() => handleNavClick('work')}
          >
            Work
          </li>
          <li
            className={`py-2 w-16 cursor-pointer hover:font-bold`}
            onClick={() => handleNavClick('contact')}
          >
            Contact
          </li>
        </ol>
      </nav>
    </header>
  );
}