import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Map from '../components/Map';

const MapDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Mock data for the example
  const mapData = {
    title: 'Die Geographie Europas',
    region: 'Europa',
    center: [50, 10] as [number, number],
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
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <nav className="text-sm mb-4">
        <Link to="/" className="text-blue-500 hover:text-blue-700">Home</Link> &gt;{' '}
        <Link to={`/region/${mapData.region.toLowerCase()}`} className="text-blue-500 hover:text-blue-700">{mapData.region}</Link> &gt;{' '}
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
          <h2 className="text-2xl font-bold mb-4">Verwandte Artikel</h2>
          <ul>
            <li><Link to="/map/2" className="text-blue-500 hover:text-blue-700">Die größten Städte Europas</Link></li>
            <li><Link to="/map/3" className="text-blue-500 hover:text-blue-700">Europäische Flüsse und Seen</Link></li>
            <li><Link to="/map/4" className="text-blue-500 hover:text-blue-700">Die EU-Mitgliedstaaten</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MapDetailPage;