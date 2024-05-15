import GraphView from './components/GraphView'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  return (
    <div className='flex flex-col gap-10'>
      <Navbar />
      <GraphView />
    </div>
  )
}

export default App
