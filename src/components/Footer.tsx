import React from 'react';
import { Link } from 'react-router-dom';
import { Map } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-bold mb-4">Über uns</h3>
          <p>Weltkarte Map bietet interaktive Karten und Informationen über verschiedene Regionen der Welt.</p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Schnelle Links</h3>
          <ul>
            <li><Link to="/" className="hover:text-blue-300">Startseite</Link></li>
            <li><Link to="/articles" className="hover:text-blue-300">Alle Artikel</Link></li>
            <li><Link to="/region/weltkarte" className="hover:text-blue-300">Weltkarte</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Kontakt</h3>
          <p>Email: info@weltkartemap.de</p>
          <p>Telefon: +49 123 456789</p>
        </div>
        <div className="flex flex-col items-center">
          <Map className="w-12 h-12 mb-2" />
          <h2 className="text-xl font-bold">weltkartemap.de</h2>
          <p className="text-sm">weltkarte online ansehen</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;