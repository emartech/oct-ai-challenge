import Head from 'next/head'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <>
      <Head>
        <title>OCT AI Challenge - Where Human Creativity Meets Artificial Intelligence</title>
        <meta name="description" content="Join the OCT AI Challenge and discover how AI tools can enhance your daily development workflow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-oct-bg">
        <Hero />
      </main>
    </>
  )
}
