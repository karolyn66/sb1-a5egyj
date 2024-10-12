import React from 'react';
import { Link } from 'react-router-dom';

const ArticleListPage: React.FC = () => {
  const regions = [
    'Weltkarte', 'Europa', 'Afrika', 'Asien', 'Südamerika', 'Nordamerika', 'Antarktis', 'Ozeanien'
  ];

  const articles = [
    { id: 1, title: 'Die Geographie Europas', region: 'Europa', description: 'Ein Überblick über die geographischen Merkmale des europäischen Kontinents.' },
    { id: 2, title: 'Die größten Wüsten Afrikas', region: 'Afrika', description: 'Entdecken Sie die beeindruckenden Wüstenlandschaften Afrikas.' },
    // Add more sample articles
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Alle Artikel</h1>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/4 mb-8 md:mb-0">
          <h2 className="text-2xl font-bold mb-4">Regionen</h2>
          <ul>
            {regions.map((region) => (
              <li key={region} className="mb-2">
                <Link to={`/region/${region.toLowerCase()}`} className="text-blue-500 hover:text-blue-700">
                  {region}
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
                  <Link to={`/map/${article.id}`} className="text-blue-500 hover:text-blue-700">
                    {article.title}
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4">{article.region}</p>
                <p>{article.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleListPage;