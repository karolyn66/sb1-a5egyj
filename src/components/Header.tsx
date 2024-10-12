import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Map, Search, ChevronDown } from 'lucide-react';
import LanguageSelector from './LanguageSelector';

const Header: React.FC = () => {
  const [isRegionMenuOpen, setIsRegionMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

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
  ];

  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Map className="mr-2 h-8 w-8" />
          <div className="flex flex-col">
            <Link to="/" className="text-xl font-bold">weltkartemap.de</Link>
            <span className="text-sm">weltkarte online ansehen</span>
          </div>
        </div>
        <nav className="flex items-center">
          <Link to="/" className="mr-4">Startseite</Link>
          <div className="relative">
            <button
              onClick={() => setIsRegionMenuOpen(!isRegionMenuOpen)}
              className="flex items-center mr-4"
            >
              Landseite <ChevronDown className="ml-1" />
            </button>
            {isRegionMenuOpen && (
              <div className="absolute top-full left-0 bg-white text-black shadow-md rounded-md p-2 z-10">
                {regions.map((region) => (
                  <div key={region.name} className="py-1">
                    <Link to={region.url} className="block hover:bg-gray-100 px-2 py-1">
                      {region.name}
                    </Link>
                    {region.subRegions && (
                      <div className="pl-4">
                        {region.subRegions.map((subRegion) => (
                          <Link
                            key={subRegion.name}
                            to={subRegion.url}
                            className="block hover:bg-gray-100 px-2 py-1"
                          >
                            {subRegion.name}
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
          <LanguageSelector />
        </nav>
      </div>
      {isSearchOpen && (
        <div className="container mx-auto mt-2">
          <input
            type="text"
            placeholder="Suche..."
            className="w-full p-2 rounded-md text-black"
          />
        </div>
      )}
    </header>
  );
};

export default Header;