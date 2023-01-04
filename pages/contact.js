import Page from '@components/page'

const Contact = () => {
  return (
    <Page title="Contact" footer={false} description="Get in touch.">
      <article>
        <p>Get in touch.</p>

        <blockquote>
          <a href="mailto:hi@enriqueortiz.dev?subject=Hello" className="reset">
            hi@enriqueortiz.dev
          </a>
        </blockquote>
      </article>
    </Page>
  )
}

export default Contact
