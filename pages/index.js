import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, my name is Sisilia! I'm a Software Engineer. I'm now learning Next.js</p>
        <p>
          This is a sample website I made. You'll be building a site like this on <a href='https://nextjs.org/learn'>Next.js tutorial</a>.
        </p>
      </section>
    </Layout>
  )
}
