import React from "react";
import { MeshProps } from "@react-three/fiber";

const Placeholder = (props: MeshProps) => {
  return (
    <mesh {...props}>
      <boxGeometry args={[1, 1, 1, 2, 2, 2]} />
      <meshBasicMaterial wireframe color="red" />
    </mesh>
  );
};

export default Placeholder;
