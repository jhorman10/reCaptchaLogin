import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchHeroById } from '../../../../api';
import {
  Comics,
  ComicsItem,
  Result,
  Stories,
  StoriesItem,
  URL,
} from '../../interface';
import './style.css';

export const ContentDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [hero, setHero] = useState<Result>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getHero = async () => {
      try {
        setLoading(true);
        const heroData: Result = await fetchHeroById(id);
        if (heroData) {
          setHero(heroData);
        } else {
          setError('Hero not found');
        }
      } catch (err) {
        setError('Error fetching hero details');
      } finally {
        setLoading(false);
      }
    };

    getHero();
  }, [id]);

  const handleBack = () => {
    navigate(-1);
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  const imageUrl = `${hero?.thumbnail.path}.${hero?.thumbnail.extension}`;

  const renderComicsItems = (comics: Comics) => {
    return comics.items.map((comic: ComicsItem) => (
      <p key={comic.resourceURI}>
        <a href={comic.resourceURI} target="_blank" rel="noopener noreferrer">
          {comic.name}
        </a>
      </p>
    ));
  };

  const renderStoriesItems = (stories: Stories) => {
    return stories.items.map((story: StoriesItem) => (
      <p key={story.resourceURI}>
        <a href={story.resourceURI} target="_blank" rel="noopener noreferrer">
          {story.name} ({story.type})
        </a>
      </p>
    ));
  };

  const renderUrls = (urls: URL[]) => {
    return urls.map((url, index) => (
      <a
        key={index}
        href={url.url}
        target="_blank"
        rel="noopener noreferrer"
        className="url-item"
      >
        {url.url}
      </a>
    ));
  };

  return (
    <div className="card-detail" id={id}>
      <img src={imageUrl} alt={hero?.name} className="card-detail-image" />

      <div className="card-detail-content">
        <h2 className="card-detail-title">{hero?.name}</h2>
        <p className="card-detail-synopsis">
          {hero?.description ? hero?.description : 'No description available.'}
        </p>
        <p className="card-detail-intro">
          <strong>Modified:</strong> {hero?.modified}
        </p>
        <p className="card-detail-resource">
          <strong>Resource URI:</strong>{' '}
          <a href={hero?.resourceURI} target="_blank" rel="noopener noreferrer">
            {hero?.resourceURI}
          </a>
        </p>
        <div className="urls-list">{renderUrls(hero?.urls)}</div>
        {hero?.comics.available !== '0' && (
          <div className="comics-section">
            <h3>Comics:</h3>
            <p>{hero?.comics.available} available</p>
            {renderComicsItems(hero?.comics)}
          </div>
        )}
        {hero?.stories.available !== '0' && (
          <div className="stories-section">
            <h3>Stories:</h3>
            <p>{hero?.stories.available} available</p>
            {renderStoriesItems(hero?.stories)}
          </div>
        )}
        {hero?.events.available !== '0' && (
          <div className="events-section">
            <h3>Events:</h3>
            <p>{hero?.events.available} available</p>
          </div>
        )}
        {hero?.series.available !== '0' && (
          <div className="series-section">
            <h3>Series:</h3>
            <p>{hero?.series.available} available</p>
          </div>
        )}
      </div>
      <button className="button-back" onClick={handleBack}>
        Back
      </button>
    </div>
  );
};
