// src/components/ArticleNewsTwo.jsx
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { articleContentsTwo } from './data/articles';
import SubscriptionForm from '../FriskyComponent';

const ArticleNewsTwo = () => {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const load = async () => {
      const data = articleContentsTwo[slug];
      setArticle(data || null);
    };
    load();
  }, [slug]);

  if (!article) {
    return <div className="p-8 text-center">Loading…</div>;
  }

  return (
    <>
      <div className="max-w-3xl mx-auto p-6">
        <Link to="/articles-two" className="text-blue-500 hover:underline">
          &larr; Back to Section Two
        </Link>
        <h1 className="text-3xl font-bold mt-4">{article.title}</h1>
        <div className="text-gray-500 text-sm mb-6">
          {article.date} &nbsp; Updated: {article.updated}
        </div>
        <div
          className="prose mb-8"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </div>
      <SubscriptionForm />
    </>
  );
};

export default ArticleNewsTwo;
