import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { Map, Globe, Search, ChevronDown } from 'lucide-react'

export default function Header() {
  const [isRegionMenuOpen, setIsRegionMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const router = useRouter()
  const { t } = useTranslation('common')

  const regions = [
    { name: 'Weltkarte', url: '/region/weltkarte' },
    { name: 'Europa Karte', url: '/region/europa', subRegions: [
      { name: 'Deutschland Karte', url: '/region/europa/deutschland' },
      { name: 'Italien Karte', url: '/region/europa/italien' },
      // Add more sub-regions here
    ]},
    { name: 'Afrika Karte', url: '/region/afrika' },
    { name: 'Asien Karte', url: '/region/asien' },
    { name: 'Südamerika Karte', url: '/region/sudamerika' },
    { name: 'Nordamerika Karte', url: '/region/nordamerika' },
    { name: 'Antarktis Karte', url: '/region/antarktis' },
    { name: 'Ozeanien Karte', url: '/region/ozeanien' },
  ]

  const changeLanguage = (lng) => {
    router.push(router.pathname, router.asPath, { locale: lng })
  }

  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Map className="mr-2" />
          <Link href="/">
            <div className="text-xl font-bold">weltkartemap.de</div>
          </Link>
          <span className="ml-2 text-sm">{t('header.slogan')}</span>
        </div>
        <nav className="flex items-center">
          <Link href="/">
            <div className="mr-4">{t('nav.home')}</div>
          </Link>
          <div className="relative">
            <button
              onClick={() => setIsRegionMenuOpen(!isRegionMenuOpen)}
              className="flex items-center mr-4"
            >
              {t('nav.regions')} <ChevronDown className="ml-1" />
            </button>
            {isRegionMenuOpen && (
              <div className="absolute top-full left-0 bg-white text-black shadow-md rounded-md p-2">
                {regions.map((region) => (
                  <div key={region.name} className="py-1">
                    <Link href={region.url}>
                      <div className="block hover:bg-gray-100 px-2 py-1">
                        {t(`regions.${region.name.toLowerCase().replace(' karte', '')}`)}
                      </div>
                    </Link>
                    {region.subRegions && (
                      <div className="pl-4">
                        {region.subRegions.map((subRegion) => (
                          <Link key={subRegion.name} href={subRegion.url}>
                            <div className="block hover:bg-gray-100 px-2 py-1">
                              {t(`regions.${subRegion.name.toLowerCase().replace(' karte', '')}`)}
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="mr-4"
          >
            <Search />
          </button>
          <div className="relative group">
            <button className="flex items-center">
              <Globe className="mr-1" />
              <span className="uppercase">{router.locale}</span>
            </button>
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg hidden group-hover:block">
              <div className="py-1">
                <button onClick={() => changeLanguage('de')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">DE Deutsch</button>
                <button onClick={() => changeLanguage('en')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">EN English</button>
                <button onClick={() => changeLanguage('zh')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">ZH 中文</button>
                <button onClick={() => changeLanguage('es')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">ES Español</button>
                <button onClick={() => changeLanguage('it')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">IT Italiano</button>
                <button onClick={() => changeLanguage('fr')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">FR Français</button>
              </div>
            </div>
          </div>
        </nav>
      </div>
      {isSearchOpen && (
        <div className="container mx-auto mt-2">
          <input
            type="text"
            placeholder={t('header.searchPlaceholder')}
            className="w-full p-2 rounded-md text-black"
          />
        </div>
      )}
    </header>
  )
}