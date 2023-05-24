import React from 'react';
import './cardlist.styles.scss';
import Card from '../card/card.components.jsx';

const posts = [
    {
    id: 1,
    title: 'Test Title 1',
    author: 'whitlocktech',
    content: 'This is test post 1.',
  },
    {
    id: 2,
    title: 'Test Title 2',
    author: 'whitlocktech',
    content: 'This is test post 2.',
  },
  // For buildout only Will change to a rest call later
];

const CardList = () => {
  return (
    <div className="cardList">
      {posts.map((post, id) => (
        <Card key={id} post={post} />
      ))}
    </div>
  );
};

export default CardList;
