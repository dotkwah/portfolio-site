import Image from 'next/image';

export function Header () {

  const handleNavClick = (section: any) => {
    const element = document.getElementById(section);
    if (element !== null) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={'flex px-10 z-10 fixed top-0 w-full h-20 text-white items-center bg-primary bg-opacity-90'}>
      <nav className={'flex align-middle w-full justify-between'}>
        <Image src='/WebsiteIcon.svg' alt='Logo' width={20} height={20}/>
        <ol className={'flex justify-end'}>
          <li
            className={`mx-2 my-auto cursor-pointer font-bold hover:text-primaryAccent`}
            onClick={() => handleNavClick('about')}
          >
            About
          </li>
          <li
            className={`mx-2 my-auto cursor-pointer font-bold hover:text-primaryAccent`}
            onClick={() => handleNavClick('experience')}
          >
            Experience
          </li>
          <li
            className={`mx-2 my-auto cursor-pointer font-bold hover:text-primaryAccent`}
            onClick={() => handleNavClick('work')}
          >
            Work
          </li>
          <li
            className={`mx-2 my-auto cursor-pointer font-bold hover:text-primaryAccent`}
            onClick={() => handleNavClick('contact')}
          >
            Contact
          </li>
        </ol>
      </nav>
    </header>
  );
}