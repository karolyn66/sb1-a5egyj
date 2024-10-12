import Head from 'next/head'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function Articles() {
  const { t } = useTranslation('common')

  const regions = [
    'Weltkarte', 'Europa', 'Afrika', 'Asien', 'Südamerika', 'Nordamerika', 'Antarktis', 'Ozeanien'
  ]

  const articles = [
    { id: 1, title: 'Die Geographie Europas', region: 'Europa', description: 'Ein Überblick über die geographischen Merkmale des europäischen Kontinents.' },
    { id: 2, title: 'Die größten Wüsten Afrikas', region: 'Afrika', description: 'Entdecken Sie die beeindruckenden Wüstenlandschaften Afrikas.' },
    // Add more sample articles
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <Head>
        <title>{t('articles.title')}</title>
        <meta name="description" content={t('articles.description')} />
      </Head>

      <h1 className="text-4xl font-bold mb-8">{t('articles.heading')}</h1>
      
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/4 mb-8 md:mb-0">
          <h2 className="text-2xl font-bold mb-4">{t('articles.regions')}</h2>
          <ul>
            {regions.map((region) => (
              <li key={region} className="mb-2">
                <Link href={`/region/${region.toLowerCase()}`}>
                  <div className="text-blue-500 hover:text-blue-700">
                    {t(`regions.${region.toLowerCase()}`)}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-3/4">
          <div className="grid grid-cols-1 gap-8">
            {articles.map((article) => (
              <div key={article.id} className="border rounded-lg p-6 shadow-md">
                <h3 className="text-2xl font-bold mb-2">
                  <Link href={`/map/${article.id}`}>
                    <div className="text-blue-500 hover:text-blue-700">
                      {article.title}
                    </div>
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4">{t(`regions.${article.region.toLowerCase()}`)}</p>
                <p>{article.description}</p>
              </div>
            ))}
          </div>
        </div>
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