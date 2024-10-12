import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { Map } from 'lucide-react'

export default function Footer() {
  const { t } = useTranslation('common')

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-bold mb-4">{t('footer.about')}</h3>
          <p>{t('footer.aboutContent')}</p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">{t('footer.quickLinks')}</h3>
          <ul>
            <li><Link href="/"><div className="hover:text-blue-300">{t('nav.home')}</div></Link></li>
            <li><Link href="/articles"><div className="hover:text-blue-300">{t('nav.articles')}</div></Link></li>
            <li><Link href="/region/weltkarte"><div className="hover:text-blue-300">{t('regions.weltkarte')}</div></Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">{t('footer.contact')}</h3>
          <p>{t('footer.email')}: info@weltkartemap.de</p>
          <p>{t('footer.phone')}: +49 123 456789</p>
        </div>
        <div className="flex flex-col items-center">
          <Map className="w-12 h-12 mb-2" />
          <h2 className="text-xl font-bold">weltkartemap.de</h2>
          <p className="text-sm">{t('header.slogan')}</p>
        </div>
      </div>
    </footer>
  )
}