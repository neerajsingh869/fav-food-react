import './App.css'
import FoodItems from './components/FoodItems';

function App() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-semibold mb-8">Select your favourite food</h1>
      <FoodItems />
    </main>
  )
}

export default App
