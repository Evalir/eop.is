import Head from 'next/head'

import Page from '@components/page'
import Link from '@components/link'
import styles from './error.module.css'

const Error = ({ status }) => {
  return (
    <Page title={status || 'Error'}>
      <Head>
        <title>404 — Enrique Ortiz</title>
      </Head>

      {status === 404 ? (
        <>
          <h1>This page cannot be found.</h1>

          <p>
            <blockquote cite="http://www.aaronsw.com/weblog/visitingmit">
              <p>
                It doesn’t exist, and maybe it never has.
              </p>

              <footer>
                — Aaron Swartz,{' '}
                <Link external href="http://www.aaronsw.com/weblog/visitingmit">
                  <cite>I Love the University</cite>
                </Link>
              </footer>
            </blockquote>
          </p>
        </>
      ) : (
        <section className={styles.section}>
          <span>{status || '?'}</span>
          <p>An error occurred.</p>
        </section>
      )}
    </Page>
  )
}

export default Error
