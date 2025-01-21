import { useContext } from 'react';
import { MockContext } from '../../../context/mockContext';
import { DashBoardLayout } from '../../layout';
import { Card } from '../components';
import './style.css';

export const Home = () => {
  const { Hero } = useContext(MockContext);

  return (
    <DashBoardLayout>
      <div className="Cards-container" id="home">
        {Hero.map((hero) => (
          <Card
            key={hero.id}
            cat={{
              id: hero.id,
              title: hero.name,
              synopsis: hero.description || 'No description available.',
              intro: `Last modified: ${new Date(
                hero.modified
              ).toLocaleDateString()}`,
              image: `${hero.thumbnail.path}.${hero.thumbnail.extension}`,
              url: hero.resourceURI,
            }}
          />
        ))}
      </div>
    </DashBoardLayout>
  );
};
