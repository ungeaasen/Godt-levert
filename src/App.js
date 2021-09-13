import logo from './img/logo-full.svg'
import './App.css'
import { Dropdown } from './components/Dropdown.js'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Dropdown</h1>
      </header>
      <Dropdown selectedItem="Option 1" list={["Option 1", "Option 2", "Option 3"]} option1="Option 1" />
    </div>
  )
}

export default App
