import Page from '@components/page'
import Link from '@components/link'

const About = () => {
  return (
    <Page description="Hi, I'm Enrique. An Ethereum Engineer, guitar enthusiast, pretend racecar driver, and horror fan in search of adventures to tell.">
      <article>
        <h1>Enrique Ortiz Pichardo</h1>

        <p>
          Ethereum Engineer,{' '}
          <Link underline href="/guitars">
            guitar
          </Link>{' '}
          enthusiast, pretend racecar driver, and horror fan
          in search of adventures to tell.{' '}
          <Link underline href="/blog">
            Writing
          </Link>{' '}
          about many things, but mostly blockchains.
        </p>

        <p>
          Working independently to advance blockchain tech, previously at Aragon One and Pocket Network.
        </p>
      </article>
    </Page>
  )
}

export default About
