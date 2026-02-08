/**
 * @description CountryView component. Encloses other child components.
 * @author Hector Mendoza
 */

import BarChart from './BarChart.jsx'
import Globe from './Globe.jsx'

/**
 * Definition for CountryView function component.
 *
 * @returns Handle to component
 */
function CountryView() {
  return (
    <div>
      <h1>Countries</h1>
      <BarChart />
    </div>
    //<div>
    //  <h1>Countries</h1>
    //  <Globe />
    //</div>
  )
}

export default CountryView