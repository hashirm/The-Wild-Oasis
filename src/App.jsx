import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import Dashboard from "./pages/Dashboard"
import Bookings from "./pages/Bookings"
import Cabins from "./pages/Cabins"
import Account from "./pages/Account"
import Login from "./pages/Login"
import Settings from "./pages/Settings"
import Users from "./pages/Users"
import PageNotFound from "./pages/PageNotFound"

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import GlobalStyles from './styles/GlobalStyles'
import Applayout from './ui/Applayout'

const queryClient = new QueryClient({
    defaultOptions:{
      queries:{
        staleTime: 60 * 1000,
      },
    },
});



export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
    <GlobalStyles/>
    <BrowserRouter future={{
          v7_startTransition: true,
          v7_relativeSplatPath:true
        }}>
      <Routes>
          <Route element={<Applayout/>}>
              <Route index element={<Navigate replace to='dashboard'/>}/>
              <Route path="Dashboard" element={<Dashboard/>}/>
              <Route path="/Bookings" element={<Bookings/>}/>
              <Route path="/Cabins" element={<Cabins/>}/>
              <Route path="/Account" element={<Account/>}/>
              <Route path="/Settings" element={<Settings/>}/>
              <Route path="/Users" element={<Users/>}/>
          </Route>
          
          <Route path="/Login" element={<Login/>}/>
          <Route path="*" element={<PageNotFound/>}/>
       

      </Routes>
    </BrowserRouter>
    </QueryClientProvider>
  )
}
