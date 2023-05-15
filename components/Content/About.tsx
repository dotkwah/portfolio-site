import Button from "@mui/material/Button";
import Grid from "@mui/material/Unstable_Grid2";
import { ArrowUpRight } from "../Icons";

export function About () {
  return (
    <section
      id="about"
      className={'mx-auto my-0 w-full max-w-screen-2xl px-6 sm:px-12 lg:px-36 min-h-screen h-screen'}
    >
      <Grid 
        container spacing={2}
        className={'mx-auto flex h-screen justify-center align-middle'}
        style={{ alignItems: 'center' }}
      >
        <Grid xs={6}>
          <h1 className={'pb-2'}>Hello, my name is</h1>
          <h2 className={'text-4xl font-semibold'}>Khoa Dinh.</h2>
          <h3>Frontend Software Engineer</h3>
          <a href={'Khoa_Dinh_Resume.pdf'} target={'_blank'} rel='noreferrer'>
            <Button
              variant="contained"
              sx={{
                marginTop: '1rem',
                backgroundColor: '#bf2659'
              }}
              className={'bg-primaryAccent'}
            >
              <div
                className='mr-2'
              >
                Resume
              </div>
              <ArrowUpRight/>
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
  );
}