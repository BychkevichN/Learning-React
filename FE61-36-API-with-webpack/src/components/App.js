import Api from './Api/Api';
import CardList from './CardList/CardList';
import './App.scss';

const App = async () => {
  const container = document.createElement('div');
  const header = document.createElement('div');
  header.classList.add('header');
  const button = document.createElement('button');
  button.addEventListener('click', async () => {
    container.classList.add('main');
    const cardList = CardList({
      cards: await Api(),
    });

    container.append(cardList);
  });
  header.append(button);
  container.prepend(header);

  return container;
};

export default App;
