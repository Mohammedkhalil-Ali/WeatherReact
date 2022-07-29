import React, { Fragment } from 'react'
import Home from '../views/Home'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

export default function index() {
  return (
    <Fragment>
<BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}>
        </Route>
    </Routes>
</BrowserRouter>
</Fragment>
  )
}
