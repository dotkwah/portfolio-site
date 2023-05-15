import Button from "@mui/material/Button";
import Grid from "@mui/material/Unstable_Grid2";
import { GitHubIcon, LinkedInIcon } from "../Icons";

export function Contact () {
  return (
    <section
    id="contact"
    className={'mx-auto my-0 w-full max-w-screen-2xl px-6 sm:px-12 lg:px-36 min-h-screen'}
  >
    <Grid 
      container spacing={2}
      className={'mx-auto flex h-screen justify-center align-middle'}
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
            className={'bg-primaryAccent'}
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
  );
}