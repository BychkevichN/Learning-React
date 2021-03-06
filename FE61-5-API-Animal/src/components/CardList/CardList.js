import Card from '../Card/Card';

const CardList = (props) => {
  const container = document.createElement('div');
  container.classList.add('container');
  const cardElements = props.cards.map((card) => Card(card));

  container.append(...cardElements);
  return container;
};

export default CardList;
