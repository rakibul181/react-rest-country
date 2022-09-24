
import './App.css';
import Countries from './components/Countries/Countries';

function App() {
  return (
    <div className="App">
       <Countries></Countries>
    </div>
  );
}


// function LoadCountries(props){
//   const [countries, setCountrieses] = useState([])
//   useEffect(()=>{
//     fetch('https://restcountries.com/v3.1/all')
//     .then(res => res.json())
//     .then(data => setCountrieses(data))
//   },[])
//   console.log(countries[0])
//   return(
//     <div>
//       <h1>Name :{countries.length}</h1>
//       {countries.map(country => <Country name={country.name.common} ></Country>)}
//     </div>
//   )

// }

// function Country(props){
//   return(
//     <div>
//       <h2>{props.name}</h2>
//     </div>
//   )
// }
export default App;
