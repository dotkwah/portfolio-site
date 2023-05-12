import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import SkillBubble from "../SkillBubble";

export function Experience () {
  return (
    <section
      id="experience"
      className={'mx-auto my-0 w-full max-w-screen-2xl px-6 sm:px-12 lg:px-36 min-h-screen'}
    >
      <Grid 
        container spacing={2}
        className={'mx-auto flex h-screen justify-center align-middle'}
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
                  <SkillBubble 
                    skills={['JavaScript', 'TypeScript', 'Python']} 
                  />
                  <h2>
                    Frontend
                  </h2>
                  <SkillBubble
                    skills={['React', 'React Native', 'Next.js']}
                  />
                  <h2>
                    Other
                  </h2>
                  <SkillBubble
                    skills={['Git', 'GitHub', 'Scrum', 'Clean Architecture', 'TDD', 'DevOps', 'Azure', 'Agile', 'Figma']}
                  />
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
                  <SkillBubble
                    skills={['JavaScript', 'TypeScript', 'DiscordJs']}
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
                  <SkillBubble
                    skills={['React Native', 'TypeScript', 'SQLite', 'GraphQL']}
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