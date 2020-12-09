import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.scss'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h1>Next Steps</h1>

        <div>
          <a
            href="https://nextjs.org/learn/basics/data-fetching"
            target='_blank'
            rel='noopener noreferrer'
          >
            Pre-rendering and Data Fetching
          </a>
        </div>

        <Link href="/posts/first-post">
          <a>First Post</a>
        </Link>
      </section>
    </Layout>
  )
}
