import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Layout from './pages/Layout'
import SuperAdminDas from './pages/SuperAdminDas'
import Company from './pages/Company'

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: ([
        {
          path: "/",
          element: <SuperAdminDas />
        },
        {
          path: "/company",
          element: <Company />
        }
      ])
    }
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
