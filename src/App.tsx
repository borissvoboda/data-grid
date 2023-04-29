import React, { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ChartComponent from './components/ChartComponent'
const TableComponent = React.lazy(() => import('./components/TableComponent'));
// const ChartComponent = React.lazy(() => import('./components/ChartComponent'));


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Suspense fallback={<div>Loading...</div>}>
      <TableComponent/>
      <ChartComponent/>

      </Suspense>
    </>
  )
}

export default App
