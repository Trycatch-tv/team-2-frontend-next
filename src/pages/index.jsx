import About from '@/components/aboutSection/About'
import Header from '@/components/header/Header'
import Card from '@/components/teamCard/Card'
import Technologies from '@/components/technologies/Technologies'
import { MainLayout } from '@/layout/MainLayout'
import { Inter } from '@next/font/google'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export default function HomePage() {
  return (
    <MainLayout title="E-Commerce | Home">
      <Header />
      <Technologies />
      <About />

      <Card
        // Usuario 1
        name={'Ivan Paez'}
        img={'/users/user-1.jpg'}
        rol={'Front-end Developer'}
        skills={
          'JavaScript, Next.js, React.js, HTML, Css, Sass, Tailwind, figma, Slack, Scrum'
        }
        linkedin={'https://www.linkedin.com/in/ivanpaezcoronell/'}
        github={'https://github.com/IvanPaezCoronell'}
        email={'mailto:ipaezcoronell@outlook.com'}
        // Usuario 2
        name2={'Anibal Cayetano'}
        img2={'https://avatars.githubusercontent.com/u/2625404?v=4'}
        rol2={'Front-end Developer'}
        skills2={'JavaScript, React.js, HTML, Tailwind, Scrum'}
        linkedin2={'#'}
        github2={'https://github.com/loxi1'}
        email2={'mailto:anibal.cayetano@gmail.com'}
        // Usuario 3
        name3={'Joel Contreras'}
        img3={'https://avatars.githubusercontent.com/u/99752831?v=4'}
        rol3={'Fullstack Developer'}
        skills3={'JavaScript, Python, Go, React, HTML, Css, Sass, Scrum'}
        linkedin3={'https://www.linkedin.com/in/joel-contreras-86686824b/'}
        github3={'https://github.com/ContrerasJoel'}
        email3={'mailto:jocontreras246@gmail.com'}
        // Usuario 4
        name4={'Sergio León'}
        img4={'https://avatars.githubusercontent.com/u/96934522?v=4'}
        rol4={'Back-end Developer'}
        skills4={'Java, Spring Boot, Python, Android-java, Scrum'}
        linkedin4={'https://www.linkedin.com/in/sergio-alexander-leon'}
        github4={'https://github.com/saleons'}
        email4={'mailto:sergio-grafo@hotmail.com'}
      />
    </MainLayout>
  )
}
