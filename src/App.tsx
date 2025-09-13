import './App.css'
import { Clock } from './components/Clock'

function App() {
  return (
    <div className="App">
      {/*<Clock mode='digital'/>*/}
      <Clock mode="analog" />
    </div>
  )
}

export default App
