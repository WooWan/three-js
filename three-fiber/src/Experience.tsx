import { extend, useFrame, useThree } from "@react-three/fiber";
import React, { useRef } from "react";
import { Group, Mesh } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import CustomObject from "./CustomObject";

extend({ OrbitControls: OrbitControls });

const Experience = () => {
  const cubeRef = useRef<Mesh>(null!);
  const groupRef = useRef<Group>(null!);
  const { camera, gl } = useThree();

  console.log(camera, gl);
  useFrame((state, delta) => {
    // const angle = state.clock.elapsedTime;
    // state.camera.position.x = Math.sin(angle) * 8;
    // state.camera.position.z = Math.cos(angle) * 8;
    // state.camera.lookAt(0, 0, 0);
    cubeRef.current.rotation.y += delta;
    // groupRef.current.rotation.y += delta;
  });

  useFrame((state, delta) => {
    // const angle = state.clock.elapsedTime;
    // state.camera.position.x = Math.sin(angle) * 8;
    // state.camera.position.z = Math.cos(angle) * 8;
    // state.camera.lookAt(0, 0, 0);
    // ...
  });

  return (
    <>
      <directionalLight position={[1, 2, 3]} intensity={1.2} />
      <ambientLight intensity={0.5} />

      <orbitControls args={[camera, gl.domElement]} />
      <group ref={groupRef}>
        <mesh position-x={3} ref={cubeRef}>
          <boxGeometry />
          <meshStandardMaterial color="red" />
        </mesh>
        <mesh>
          <sphereGeometry />
          <meshStandardMaterial color="orange" />
        </mesh>
        <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={[10, 10, 10]}>
          <planeGeometry />
          <meshStandardMaterial color="yellow" />
        </mesh>
        <CustomObject />
      </group>
    </>
  );
};

export default Experience;
