import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './home/HomePage';
import { NewTodoPage } from "./new/NewTodoPage"
import { EditTodoPage } from "./edit/EditTodoPage"


function App() {
  return (
    <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/new" element={<NewTodoPage/>}/>
          <Route path="/edit/:id/:text" element={<EditTodoPage/>}/>
          <Route path="*" element={<p>Not found</p>}/>
        </Routes>
      </HashRouter>
  )
  
}

export { App };
