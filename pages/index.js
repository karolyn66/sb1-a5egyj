import Head from 'next/head'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Map = dynamic(() => import('../components/Map'), { ssr: false })

export default function Home() {
  const { t } = useTranslation('common')

  return (
    <div className="container mx-auto px-4 py-8">
      <Head>
        <title>{t('home.title')}</title>
        <meta name="description" content={t('home.description')} />
      </Head>

      <h1 className="text-4xl font-bold mb-4">{t('home.heading')}</h1>
      
      <div className="mb-8">
        <Map center={[0, 0]} zoom={2} />
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">{t('home.regions')}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Europa', 'Afrika', 'Asien', 'Südamerika', 'Nordamerika', 'Antarktis', 'Ozeanien'].map((region) => (
            <Link key={region} href={`/region/${region.toLowerCase()}`}>
              <div className="bg-blue-100 p-4 rounded-md hover:bg-blue-200 transition-colors">
                {t(`regions.${region.toLowerCase()}`)}
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">{t('home.about')}</h2>
        <p>{t('home.aboutContent')}</p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">{t('home.popularArticles')}</h2>
        {/* Add popular article previews here */}
        <Link href="/articles" className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
          {t('home.viewAllArticles')}
        </Link>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">{t('home.latestArticles')}</h2>
        {/* Add latest article previews here */}
        <Link href="/articles" className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
          {t('home.viewAllArticles')}
        </Link>
      </div>
    </div>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}