import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './component/Root/Root';
import Home from './component/Home/Home';
import AppliedJobs from './component/AppliedJobs/AppliedJobs';
import ErrorPage from './component/ErrorPage/ErrorPage';
import CategoryList from './component/CategoryList/CategoryList';
import JobDetails from './component/JobDetails/JobDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/applied-jobs",
        element: <AppliedJobs></AppliedJobs>,
        loader: () =>fetch('/jobs.json')
      },
      {
        path: "/job-category",
        element: <CategoryList></CategoryList>
      },
      {
        path: "/job/:id",    // In this route, :id is a parameter in the URL, and it can have different values when the URL changes.
        element: <JobDetails></JobDetails>,
        loader: () =>fetch('/jobs.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
