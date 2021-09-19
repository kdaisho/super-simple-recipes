import Link from 'next/link'
import Head from 'next/head'
import styles from './layout.module.scss'

const Layout = ({ children, isHome, handleSearch }) => {
  const siteTitle = 'My Recipes'

  return (
    <>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta
          name='description'
          content='Find your command when you forgot it'
        />
        <meta
          property='og:image'
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name='og:title' content={siteTitle} />
        <meta name='twitter:card' content='summary_large_image' />
        <title>{siteTitle}</title>
        <link
          href='https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400&display=swap'
          rel='stylesheet'
        ></link>
      </Head>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={`${styles.left} ${isHome && styles.isHome}`}>
            <Link href='/'>
              <a>
                <img
                  src='/images/recipe.png'
                  className={styles.profile}
                  alt='blue monster'
                />
              </a>
            </Link>
            <h1>{siteTitle}</h1>
          </div>
          {isHome && (
            <div className={styles.right}>
              <label htmlFor='search'>Search</label>
              <input id='search' type='text' onChange={handleSearch} />
            </div>
          )}
        </div>
      </header>
      <div className={`${styles.container} ${!isHome && styles.isArticle}`}>
        <main className={styles.eachWrap}>{children}</main>
        <div className='my-8'>
          {isHome ? (
            <div>
              &copy; Copyright {new Date().getFullYear()} daishodesign.com 😎
            </div>
          ) : (
            <Link href='/'>
              <a>🚀 Back to home</a>
            </Link>
          )}
        </div>
      </div>
    </>
  )
}

export default Layout
