import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { routes } from '../routes/index';

const AppRouter = () => {
  return (
    <Routes>
      {routes.map(({path, element: Element}) => {
        return <Route key={path} path={path} element={<Element/>}/>
      })},
    <Route path='*' element={<Navigate to='users' replace/>}/>
    </Routes>
  )
}

export default AppRouter;