'use client';
import { Inter } from '@next/font/google';
import { useState } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { GitHubIcon, LinkedInIcon } from '../components/Icons';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [activeSection, setActiveSection] = useState('');

  const handleNavClick = (section: any) => {
    const element = document.getElementById(section);
    if (element !== null) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <body className={`${inter.className} bg-backgroundDefault h-full`}>
      <header className={'flex px-10 z-10 fixed top-0 w-full h-24 items-center bg-backgroundDefault bg-opacity-90'}>
        <nav className={'flex align-middle w-full justify-between'}>
          <div/>
          <ol className={'flex justify-end'}>
            <li
              className={`p-2 cursor-pointer ${
                activeSection === 'about' && 'font-bold'
              }`}
              onClick={() => handleNavClick('about')}
            >
              About
            </li>
            <li
              className={`p-2 cursor-pointer ${
                activeSection === 'experience' && 'font-bold'
              }`}
              onClick={() => handleNavClick('experience')}
            >
              Experience
            </li>
            <li
              className={`p-2 cursor-pointer ${
                activeSection === 'work' && 'font-bold'
              }`}
              onClick={() => handleNavClick('work')}
            >
              Work
            </li>
            <li
              className={`p-2 cursor-pointer ${
                activeSection === 'contact' && 'font-bold'
              }`}
              onClick={() => handleNavClick('contact')}
            >
              Contact
            </li>
          </ol>
        </nav>
      </header>
      <div id={'content'}>
        <section
          id="about"
          className={'mx-auto my-0 w-full max-w-screen-2xl px-6 sm:px-12 lg:px-36 min-h-screen h-screen'}
        >
          <Grid 
            container spacing={2}
            className={'mx-auto max-w-5xl flex h-screen justify-center align-middle'}
            style={{ alignItems: 'center' }}
          >
            <Grid xs={6} >
              <h1 className={'pb-2'}>Hello, my name is</h1>
              <h2 className={'text-4xl font-semibold'}>Khoa Dinh.</h2>
              <h3>Frontend Software Engineer</h3>
              <a href={'Khoa_Dinh_Resume.pdf'} target={'_blank'} rel='noreferrer'>
                <Button
                  variant="contained"
                  sx={{
                    marginTop: '1rem',
                  }}
                  className={'bg-primary'}
                >
                  Resume
                </Button>
              </a>
            </Grid>
            <Grid xs={6} >
              <p>
                {`Hello. My name is Khoa Dinh and I am a Frontend Software Engineer.
                My interest in software development started back in 2019 when I was a freshman in college.
                I enjoy creating things that live on the internet. I take pleasure in learning about new technologies and building things.`}
              </p>
              <br/>
              <p>
                {` I\'ve had the amazing opportunity to work at a start-up, StaffWise, where I was able to work on a web application that allows hospitals to manage their employees and their schedules.`}
              </p>
             
            </Grid>
          </Grid>
          <hr className="border-t-2 border-gray-300" />
        </section>
        <section
          id="experience"
          className={'mx-auto my-0 w-full max-w-screen-2xl px-6 sm:px-12 lg:px-36 min-h-screen'}
        >
          <Grid 
            container spacing={2}
            className={'mx-auto max-w-5xl flex h-screen justify-center align-middle'}
            style={{ alignItems: 'center' }}
          >
            <Grid xs={6} >
              <h2 className={'text-4xl font-semibold'}>
                Experience
              </h2>
            </Grid>
            <Grid xs={6} >
              <Box 
                sx={{
                  bgcolor: 'secondary.main',
                  height: 800,
                  borderRadius: '6px',
                  padding: '10px',
                }}
              >
                <Box
                  sx={{
                    color: 'white',
                    backgroundColor: 'primary.main',
                    margin: '10px',
                    padding: '10px',
                    borderRadius: '6px',
                  }}
                >
                  <Grid
                    container spacing={2}
                  >
                    <Grid 
                      xs={4}
                      sx={{
                        fontSize: '12px',
                      }}
                    >
                      <h2>
                        Skills
                      </h2>
                    </Grid>
                    <Grid xs={8}>
                      <h2>
                        Languages
                      </h2>
                      <ul 
                        className='mt-3 flex flex-wrap'
                      >
                        <li className='flex item-center rounded-full bg-primaryAccent px-3 py-1 text-xs font-medium leading-5 text-white m-1'>
                          JavaScript
                        </li>
                        <li className='flex item-center rounded-full bg-primaryAccent px-3 py-1 text-xs font-medium leading-5 text-white m-1'>
                          TypeScript
                        </li>
                        <li className='flex item-center rounded-full bg-primaryAccent px-3 py-1 text-xs font-medium leading-5 text-white m-1'>
                          Python
                        </li>
                      </ul>
                      <h2>
                        Frontend
                      </h2>
                      <ul 
                        className='mt-3 flex flex-wrap'
                      >
                        <li className='flex item-center rounded-full bg-primaryAccent px-3 py-1 text-xs font-medium leading-5 text-white m-1'>
                          React
                        </li>
                        <li className='flex item-center rounded-full bg-primaryAccent px-3 py-1 text-xs font-medium leading-5 text-white m-1'>
                          React Native
                        </li>
                        <li className='flex item-center rounded-full bg-primaryAccent px-3 py-1 text-xs font-medium leading-5 text-white m-1'>
                          Next.js
                        </li>
                      </ul>
                      <h2>
                        Other
                      </h2>
                      <ul 
                        className='mt-3 flex flex-wrap'
                      >
                        <li className='flex item-center rounded-full bg-primaryAccent px-3 py-1 text-xs font-medium leading-5 text-white m-1'>
                          Git
                        </li>
                        <li className='flex item-center rounded-full bg-primaryAccent px-3 py-1 text-xs font-medium leading-5 text-white m-1'>
                          GitHub
                        </li>
                        <li className='flex item-center rounded-full bg-primaryAccent px-3 py-1 text-xs font-medium leading-5 text-white m-1'>
                          Scrum
                        </li>
                        <li className='flex item-center rounded-full bg-primaryAccent px-3 py-1 text-xs font-medium leading-5 text-white m-1'>
                          Clean Architecture
                        </li>
                        <li className='flex item-center rounded-full bg-primaryAccent px-3 py-1 text-xs font-medium leading-5 text-white m-1'>
                          TDD
                        </li>
                        <li className='flex item-center rounded-full bg-primaryAccent px-3 py-1 text-xs font-medium leading-5 text-white m-1'>
                          DevOps
                        </li>
                        <li className='flex item-center rounded-full bg-primaryAccent px-3 py-1 text-xs font-medium leading-5 text-white m-1'>
                          Azure
                        </li>
                        <li className='flex item-center rounded-full bg-primaryAccent px-3 py-1 text-xs font-medium leading-5 text-white m-1'>
                          Agile
                        </li>
                        <li className='flex item-center rounded-full bg-primaryAccent px-3 py-1 text-xs font-medium leading-5 text-white m-1'>
                          Figma
                        </li>
                      </ul>
                    </Grid>
                  </Grid>
                </Box>
                <hr className="border-t-2 mt-10 mb-10 border-primary" />
                <Box
                  sx={{
                    color: 'white',
                    backgroundColor: 'primary.main',
                    margin: '10px',
                    padding: '10px',
                    borderRadius: '6px',
                  }}
                >
                  <Grid
                    container spacing={2}
                  >
                    <Grid 
                      xs={4}
                      sx={{
                        fontSize: '12px',
                      }}
                    >
                      <h2>
                        April 2023
                      </h2>
                    </Grid>
                    <Grid xs={8}>
                      <h2>
                        Discord Music Bot
                      </h2>
                      <h3 className='text-xs mt-2 text-gray-200'>
                        A discord bot that would allow users to play music in a voice channel for other users to listen along with.
                      </h3>
                      <ul 
                        className='mt-3 flex flex-wrap'
                      >
                        <li className='flex item-center rounded-full bg-primaryAccent px-3 py-1 text-xs font-medium leading-5 text-white m-1'>
                          JavaScript
                        </li>
                        <li className='flex item-center rounded-full bg-primaryAccent px-3 py-1 text-xs font-medium leading-5 text-white m-1'>
                          TypeScript
                        </li>
                        <li className='flex item-center rounded-full bg-primaryAccent px-3 py-1 text-xs font-medium leading-5 text-white m-1'>
                          DiscordJs
                        </li>
                      </ul>
                    </Grid>
                  </Grid>
                </Box>
                <Box
                  sx={{
                    color: 'white',
                    backgroundColor: 'primary.main',
                    margin: '10px',
                    padding: '10px',
                    borderRadius: '6px',
                  }}
                >
                  <Grid
                    container spacing={2}
                  >
                    <Grid 
                      xs={4}
                      sx={{
                        fontSize: '12px',
                      }}
                    >
                      <h2>
                        September 2022
                      </h2>
                    </Grid>
                    <Grid xs={8}>
                      <h2>
                        GymArc
                      </h2>
                      <h3 className='text-xs mt-2 text-gray-200'>
                        A multi-platform mobile application that allows users to track their workouts and progress.
                      </h3>
                      <ul 
                        className='mt-3 flex flex-wrap'
                      >
                        <li className='flex item-center rounded-full bg-primaryAccent px-3 py-1 text-xs font-medium leading-5 text-white m-1'>
                          React Native
                        </li>
                        <li className='flex item-center rounded-full bg-primaryAccent px-3 py-1 text-xs font-medium leading-5 text-white m-1'>
                          TypeScript
                        </li>
                        <li className='flex item-center rounded-full bg-primaryAccent px-3 py-1 text-xs font-medium leading-5 text-white m-1'>
                          SQLite
                        </li>
                        <li className='flex item-center rounded-full bg-primaryAccent px-3 py-1 text-xs font-medium leading-5 text-white m-1'>
                          GraphQL
                        </li>
                      </ul>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <hr className="border-t-2 border-gray-300" />
        </section>
        <section
          id="work"
          className={'mx-auto my-0 w-full max-w-screen-2xl px-6 sm:px-12 lg:px-36 min-h-screen'}
        >
          <Grid 
            container spacing={2}
            className={'mx-auto max-w-5xl flex h-screen justify-center align-middle'}
            style={{ alignItems: 'center' }}
          >
            <Grid xs={6} >
              <h2 className={'text-4xl font-semibold'}>
                Work
              </h2>
            </Grid>
            <Grid xs={6} >
              <Box 
                sx={{
                  bgcolor: 'secondary.main',
                  height: 800,
                  borderRadius: '6px',
                  padding: '10px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '15px',
                  flex: 1,
                }}
              >
                <Box
                  sx={{
                    color: 'white',
                    backgroundColor: 'primary.main',
                    margin: '10px',
                    padding: '10px',
                    borderRadius: '6px',
                  }}
                >
                  <Grid
                    container spacing={2}
                  >
                    <Grid 
                      xs={4}
                      sx={{
                        fontSize: '12px',
                      }}
                    >
                      <h2>
                        July 2022 - Present
                      </h2>
                    </Grid>
                    <Grid xs={8}>
                      <h2>
                        Software Engineer - StaffWiseLLC
                      </h2>
                      <h3 className='text-xs mt-2 text-gray-200'>
                        Collaborated with engineers in a fast-paced environment to build a web application that allows users to manage their employees and their schedules.
                        Implemted UI designs using React, Redux, and Material UI.
                      </h3>
                      <ul 
                        className='mt-3 flex flex-wrap'
                      >
                        <li className='flex item-center rounded-full bg-primaryAccent px-3 py-1 text-xs font-medium leading-5 text-white m-1'>
                          React
                        </li>
                        <li className='flex item-center rounded-full bg-primaryAccent px-3 py-1 text-xs font-medium leading-5 text-white m-1'>
                          JavaScript
                        </li>
                        <li className='flex item-center rounded-full bg-primaryAccent px-3 py-1 text-xs font-medium leading-5 text-white m-1'>
                          TypeScript
                        </li>
                        <li className='flex item-center rounded-full bg-primaryAccent px-3 py-1 text-xs font-medium leading-5 text-white m-1'>
                          Express
                        </li>
                        <li className='flex item-center rounded-full bg-primaryAccent px-3 py-1 text-xs font-medium leading-5 text-white m-1'>
                          CSS
                        </li>
                      </ul>
                    </Grid>
                  </Grid>
                </Box>
                <Box
                  sx={{
                    color: 'white',
                    backgroundColor: 'primary.main',
                    margin: '10px',
                    padding: '10px',
                    borderRadius: '6px',
                  }}
                >
                  <Grid
                    container spacing={2}
                  >
                    <Grid 
                      xs={4}
                      sx={{
                        fontSize: '12px',
                      }}
                    >
                      <h2>
                        February 2021 - November 2021
                      </h2>
                    </Grid>
                    <Grid xs={8}>
                      <h2>
                        Research Assistant - NIAR
                      </h2>
                      <h3 className='text-xs mt-2 text-gray-200'>
                        Researched additive manufacturing using the cold spray process.
                        Responsible for maintaining FANUC robots along with adding new functionailty.
                        Created robot programs using TP programming language.
                      </h3>
                      <ul 
                        className='mt-3 flex flex-wrap'
                      >
                        <li className='flex item-center rounded-full bg-primaryAccent px-3 py-1 text-xs font-medium leading-5 text-white m-1'>
                          Python
                        </li>
                        <li className='flex item-center rounded-full bg-primaryAccent px-3 py-1 text-xs font-medium leading-5 text-white m-1'>
                          TP Programming Language
                        </li>
                      </ul>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <hr className="border-t-2 border-gray-300" />
        </section>
        <section
          id="contact"
          className={'mx-auto my-0 w-full max-w-screen-2xl px-6 sm:px-12 lg:px-36 min-h-screen'}
        >
          <Grid 
            container spacing={2}
            className={'mx-auto max-w-5xl flex h-screen justify-center align-middle'}
            style={{ alignItems: 'center' }}
          >
            <Grid xs={6} >
              <h2 className={'text-4xl font-semibold'}>
                Contact
              </h2>
              <h3>
                {'I\'m currently looking for new opportunities.\nIf you\'d like to get in touch, I\'d love to hear from you. '}
              </h3>
              <a href="mailto:khoadinh2k@gmail.com">
                <Button
                  variant="contained"
                  sx={{
                    marginTop: '1rem',
                  }}
                  className={'bg-primary'}
                >
                  Get in touch
                </Button>
              </a>
              <div className='mt-3 flex'>
                <GitHubIcon 
                  link='https://github.com/dotkwah'
                />
                <LinkedInIcon 
                  link='https://www.linkedin.com/in/khoa-dinh-b58032199/'
                />
              </div>
            </Grid>
          </Grid>
        </section>
      </div>
    </body>
  );
}
