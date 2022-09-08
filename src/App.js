import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar1 } from './components/Navbar1';
import { Car } from './components/Car';


// // Componente principal
// function App() { //El archivo tiene el mismo nombre que la funcion
//   return (
//     <div>
//       <Navbar1/>
//     </div>
//   );
// }

// export default App;


export const App = () => {
  return (
    <div>
      <Navbar1/>
      <Car/>
    </div>
  )
}
