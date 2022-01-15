import getBitcoinData from './components/apis/getBitcoinData';
import Dropdown from './components/Dropdown/Dropdown';
import LineChart from './components/LineChart';
import Currencies from './components/constants/Currencies';
// import ImgSrc from './picture.jpg';
const createChart = async (currency = Currencies.AmericanDollar) => {
  const data = await getBitcoinData(currency);
  const lineChart = LineChart({ data: data.prices });

  return lineChart;
};

const App = async () => {
  const container = document.createElement('div');
  let lineChart = await createChart();
  const dropdown = Dropdown();

  dropdown.onchange = async (event) => {
    const currency = event.target.selectedOptions[0].value;
    container.removeChild(lineChart);
    lineChart = await createChart(currency);
    container.append(lineChart);
  };

  container.append(dropdown, lineChart);

  // const img = document.createElement('img');
  // img.src = ImgSrc;

  // container.append(img);

  return container;
};

export default App;
