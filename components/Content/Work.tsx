import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import SkillBubble from "../SkillBubble";

export function Work () {
  return (
    <section
      id="work"
      className={'mx-auto my-0 w-full max-w-screen-2xl px-6 sm:px-12 lg:px-36 min-h-screen'}
    >
      <Grid 
        container spacing={2}
        className={'mx-auto flex h-screen justify-center align-middle'}
        style={{ alignItems: 'center' }}
      >
        <Grid xs={6}>
          <h2 className={'text-4xl font-semibold'}>
            Work
          </h2>
        </Grid>
        <Grid xs={6}>
          <Box 
            sx={{
              bgcolor: 'secondary.main',
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
                  <SkillBubble 
                    skills={['React', 'JavaScript', 'TypeScript', 'Express', 'CSS']} 
                  />
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
                  <SkillBubble
                    skills={['Python', 'TP Programming Language']}
                  />
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <hr className="border-t-2 border-gray-300" />
    </section>
  );
}