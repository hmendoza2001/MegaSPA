/**
 * @description Main app component. Encloses all other components on the page.
 * @author Hector Mendoza
 */

import './App.css'
import CountryView from './components/CountryView.jsx'
import SamplePage from './components/SamplePage.jsx'

function App() {
  return (
    <CountryView />
    //<SamplePage />
  )
}

export default App