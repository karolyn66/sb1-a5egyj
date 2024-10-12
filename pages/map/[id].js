import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Map = dynamic(() => import('../../components/Map'), { ssr: false })

export default function MapDetail() {
  const router = useRouter()
  const { id } = router.query
  const { t } = useTranslation('common')

  // Mock data for the example
  const mapData = {
    title: 'Die Geographie Europas',
    region: 'Europa',
    center: [50, 10],
    zoom: 4,
    content: `
      <h2>Überblick</h2>
      <p>Europa ist der zweitkleinste Kontinent der Erde, aber einer der am dichtesten besiedelten. Es erstreckt sich von der Atlantikküste im Westen bis zum Ural im Osten und vom Nordkap bis zum Mittelmeer.</p>

      <h2>Geographische Merkmale</h2>
      <p>Europa zeichnet sich durch eine vielfältige Landschaft aus, die von den Alpen im Süden bis zu den weiten Ebenen im Osten reicht. Wichtige geographische Merkmale sind:</p>
      <ul>
        <li>Die Alpen: Europas höchstes Gebirge</li>
        <li>Die Donau: Europas zweitlängster Fluss</li>
        <li>Das Mittelmeer: Ein Binnenmeer zwischen Europa, Afrika und Asien</li>
      </ul>

      <h2>Klima</h2>
      <p>Das Klima Europas variiert von mediterran im Süden bis subarktisch im Norden. Der Golfstrom beeinflusst das Klima Westeuropas und sorgt für mildere Winter.</p>
    `,
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Head>
        <title>{mapData.title} | Weltkarte Map</title>
        <meta name="description" content={`Detaillierte Informationen über ${mapData.title}`} />
      </Head>

      <nav className="text-sm mb-4">
        <Link href="/">
          <div className="text-blue-500 hover:text-blue-700">{t('nav.home')}</div>
        </Link> &gt;{' '}
        <Link href={`/region/${mapData.region.toLowerCase()}`}>
          <div className="text-blue-500 hover:text-blue-700">{t(`regions.${mapData.region.toLowerCase()}`)}</div>
        </Link> &gt;{' '}
        <span>{mapData.title}</span>
      </nav>

      <h1 className="text-4xl font-bold mb-4">{mapData.title}</h1>

      <div className="mb-8">
        <Map center={mapData.center} zoom={mapData.zoom} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="col-span-2">
          <article dangerouslySetInnerHTML={{ __html: mapData.content }} />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">{t('mapDetail.relatedArticles')}</h2>
          <ul>
            <li>
              <Link href="/map/2">
                <div className="text-blue-500 hover:text-blue-700">{t('mapDetail.relatedArticle1')}</div>
              </Link>
            </li>
            <li>
              <Link href="/map/3">
                <div className="text-blue-500 hover:text-blue-700">{t('mapDetail.relatedArticle2')}</div>
              </Link>
            </li>
            <li>
              <Link href="/map/4">
                <div className="text-blue-500 hover:text-blue-700">{t('mapDetail.relatedArticle3')}</div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}