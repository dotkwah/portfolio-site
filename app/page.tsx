import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <body className={`${inter.className} bg-white h-full`}>
      <header className={'flex px-10 z-10 fixed top-0 w-full h-24 items-center'}>
        <nav className={'flex align-middle w-full justify-between'}>
          <div className={'p-2'}>{'Home'}</div>
          <ol className={'flex justify-end'}>
            <li className={'p-2'}>About</li>
            <li className={'p-2'}>Experience</li>
            <li className={'p-2'}>Work</li>
            <li className={'p-2'}>Contact</li>
          </ol>
        </nav>
      </header>
      <div id={'content'}>
        <section className={'mx-auto my-0 w-full max-w-screen-2xl px-6 sm:px-12 lg:px-36 min-h-screen h-screen'}>
          <div className={'mx-auto max-w-5xl flex h-screen justify-center flex-col'}>
            <div>
              <h1 className={'pb-2'}>Hello, my name is</h1>
            </div>
            <div>
              <h2 className={'text-4xl font-semibold'}>Khoa Dinh.</h2>
            </div>
            <div>
              <h3>Frontend Dev</h3>
            </div>
          </div>
        </section>
      </div>

    </body>
  )
}
