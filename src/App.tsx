import React from 'react'
import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { UseCheckboxGroupSample } from './samples/UseCheckboxGroupSample'

function App(): React.JSX.Element {
  return (
    <div>
      <header>
        <a href='/vhlxq'>TOP</a>
      </header>
      <Router basename='/vhlxq'>
        <RouterComponent />
      </Router>
    </div>
  )
}

export default App

const RouterComponent = (): React.JSX.Element => {
  return (
    <Routes>
      <Route path='/useCheckboxGroup' element={<UseCheckboxGroupSample />} />
      <Route
        path='/'
        element={
          <ul>
            <li>
              <a href='/vhlxq/useCheckboxGroup'>Use Checkbox Group</a>
            </li>
          </ul>
        }
      />
    </Routes>
  )
}
