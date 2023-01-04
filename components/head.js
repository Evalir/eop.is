import NextHead from 'next/head'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/router'

const BASE_URL = `https://eop.is`
const defaultOgImage =
  'https://res.cloudinary.com/dsdlhtnpw/image/upload/v1572673557/og-image_budbm8.png'
const useCurrentPath = () => useRouter().asPath.split('?')[0]

const Head = ({
  title = 'Enrique Ortiz Pichardo',
  description = "Hi, I'm Enrique. Ethereum developer and security researcher.",
  image = defaultOgImage,
  children
}) => {
  const { systemTheme } = useTheme()
  const path = useCurrentPath()

  return (
    <NextHead>
      {/* Preload font */}
      <link
        rel="preload"
        href="https://assets.vercel.com/raw/upload/v1587415301/fonts/2/inter-var-latin.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />

      {/* Title */}
      <title>{title}</title>
      <meta name="og:title" content={title} />

      {/* Description */}
      <meta name="description" content={description} />
      <meta name="og:description" content={description} />

      {/* Image */}
      <meta name="twitter:image" content={image} />
      <meta name="og:image" content={image} />

      {/* URL */}
      <meta name="og:url" content="https://eop.is" />
      <link key="canonical" rel="canonical" href={BASE_URL + path} />

      {/* General */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@hievalir" />
      <meta name="apple-mobile-web-app-title" content="Enrique" />
      <meta name="author" content="Enrique Ortiz Pichardo" />

      {/* RSS feed */}
      <link
        rel="alternate"
        type="application/rss+xml"
        title="RSS Feed for eop.is"
        href="/feed.xml"
      />

      {/* Favicons */}
      <link rel="icon" type="image/x-icon" href="/favicons/favicon.ico" />
      <meta name="theme-color" content="#000000" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicons/apple-touch-icon.png"
      />

      {children}
    </NextHead>
  )
}

export default Head
