import React from 'react';
// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './style.css';

interface Category {
  id: string;
  title: string;
  synopsis: string;
  intro: string;
  image: string;
  url?: string;
  category?: string;
}

interface CardProps {
  cat: Category;
}

export const Card: React.FC<CardProps> = ({ cat }) => {
  const { title, intro, image, synopsis, id } = cat;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/characters/${id}`);
  };
  return (
    <div className="card" onClick={handleClick}>
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-synopsis">{synopsis}</p>
        <p className="card-intro">{intro}</p>
      </div>
    </div>
  );
};
