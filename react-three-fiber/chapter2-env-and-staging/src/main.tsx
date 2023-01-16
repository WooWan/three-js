import React from 'react'
import ReactDOM from 'react-dom/client'
import {Canvas, RootState} from "@react-three/fiber";
import Experience from "./Experience";
import "./style.css";



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <Canvas
          // shadows
          camera={ {
              fov: 45,
              near: 0.1,
              far: 200,
              position: [ - 4, 3, 6 ]
          } }
      >
          {/*<color args={ [ '#ff0000' ] } attach="background"  />*/}
          <Experience />
      </Canvas>
  </React.StrictMode>,
)
