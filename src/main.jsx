import React from 'react'
import ReactDOM from 'react-dom/client'
import { Toaster } from 'react-hot-toast';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Home from './Components/Home/Home';
import ListedBooks from './Components/ListedBooks/ListedBooks';
import PagesToRead from './Components/PagesToRead/PagesToRead';

import BookDetails from './Components/BookDetails/BookDetails';
import ReadBooks from './Components/ReadBooks/ReadBooks';
import WishListBooks from './Components/WishListBooks/WishListBooks';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/books.json'),
      },
      {
        path: '/book/:bookId',
        element: <BookDetails></BookDetails>,
        loader: () => fetch('/books.json'),
      },
      {
        path: '/listedBooks',
        element: <ListedBooks></ListedBooks>,
        children: [
          {
            index: true,
            // path: `readBooks`,
            element: <ReadBooks></ReadBooks>
          },
          {
            path: `wishListBooks`,
            element: <WishListBooks></WishListBooks>
          }

        ],
      },
      {
        path: '/pagesToRead',
        element: <PagesToRead></PagesToRead>
      }

    ],
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster />
  </React.StrictMode>,
)