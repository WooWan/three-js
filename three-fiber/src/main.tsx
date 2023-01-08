import React from 'react'
import ReactDOM from 'react-dom/client'
import * as THREE from 'three'
import App from './App'
import './index.css'
import {Canvas} from "@react-three/fiber";

// ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)



root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)