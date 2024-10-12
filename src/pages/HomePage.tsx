import React from 'react';
import { Link } from 'react-router-dom';
import Map from '../components/Map';

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Weltkarte</h1>
      <div className="mb-8">
        <Map center={[0, 0]} zoom={2} />
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Regionen</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Europa', 'Afrika', 'Asien', 'Südamerika', 'Nordamerika', 'Antarktis', 'Ozeanien'].map((region) => (
            <Link
              key={region}
              to={`/region/${region.toLowerCase()}`}
              className="bg-blue-100 p-4 rounded-md hover:bg-blue-200 transition-colors"
            >
              {region}
            </Link>
          ))}
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Über Weltkarten</h2>
        <p>
          Weltkarten bieten einen umfassenden Überblick über die geographische Verteilung von Ländern, Kontinenten und Ozeanen auf unserem Planeten. Sie sind wichtige Werkzeuge für das Verständnis globaler Zusammenhänge in Bereichen wie Geographie, Politik, Wirtschaft und Kultur.
        </p>
        {/* Add more paragraphs and subheadings as needed */}
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Beliebte Artikel</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Add popular article previews here */}
        </div>
        <Link to="/articles" className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
          Alle Artikel anzeigen
        </Link>
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-4">Neueste Artikel</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Add latest article previews here */}
        </div>
        <Link to="/articles" className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
          Alle Artikel anzeigen
        </Link>
      </div>
    </div>
  );
};

export default HomePage;