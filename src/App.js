import logo from './logo.svg';
import './App.css';

function App() {

  const fetchData = () => {
    fetch('/get_all_team').then(async (res) => {
      const data = await res.json();

      console.log(data);

      return data;
    }).catch(error => {
      console.log(error);
    })
  }

  return (
    <div className="App">
      <button onClick={fetchData}>
        가져오기
      </button>
    </div>
  );
}

export default App;
