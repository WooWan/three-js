import { useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  ContactShadows,
  Sky,
  useHelper,
  softShadows,
  RandomizedLight,
  AccumulativeShadows,
  Environment,
  SoftShadows,
  BakeShadows,
} from "@react-three/drei";
import React, { useRef } from "react";
import { Perf } from "r3f-perf";
import * as THREE from "three";
import { DirectionalLight, Light, Mesh } from "three";
import { useControls } from "leva";

// softShadows({
//     frustum: 3.75,
//     size: 0.005,
//     near: 9.5,
//     samples: 17,
//     rings: 11
// })
export default function Experience() {
  const cube = useRef<Mesh>(null!);
  const directionalLight = useRef<DirectionalLight>(null!);
  const { color, opacity, blur } = useControls("contact shadows", {
    color: "#1d8f75",
    opacity: { value: 0.4, min: 0, max: 1 },
    blur: { value: 2.8, min: 0, max: 10 },
  });
  const { envMapIntensity } = useControls("environment map", {
    envMapIntensity: { value: 1, min: 0, max: 12 },
  });
  const { sunPosition } = useControls("sky", {
    sunPosition: { value: [1, 2, 3] },
  });
  // useHelper(directionalLight, THREE.DirectionalLightHelper, 1)

  useFrame((state, delta) => {
    cube.current.rotation.y += delta * 0.2;
  });

  useFrame((state, delta) => {
    // const time = state.clock.elapsedTime
    // cube.current.position.x = 2 + Math.sin(time)
    // ...
  });

  return (
    <>
      <Perf position="top-left" />
      <OrbitControls makeDefault />
      <Environment
        background
        preset="sunset"
        // path={"environmentMaps/the_sky_is_on_fire_2k.hdr"}
        // path="./environmentMaps/the_sky_is_on_fire_2k.hdr"
      />
      <directionalLight
        ref={directionalLight}
        position={sunPosition}
        intensity={1.5}
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-camera-near={1}
        shadow-camera-far={10}
        shadow-camera-top={5}
        shadow-camera-right={5}
        shadow-camera-bottom={-5}
        shadow-camera-left={-5}
      />
      {/*<directionalLight position={ [ 1, 2, 3 ] } intensity={ 1.5 } />*/}
      {/*<AccumulativeShadows*/}
      {/*    position={ [ 0, - 0.99, 0 ] }*/}
      {/*    scale={ 10 }*/}
      {/*    color="#316d39"*/}
      {/*    opacity={ 0.8 }*/}
      {/*    frames={ Infinity }*/}
      {/*    blend={100 }*/}
      {/*    temporal*/}
      {/*>*/}
      {/*    <RandomizedLight*/}
      {/*        amount={ 8 }*/}
      {/*        radius={ 1 }*/}
      {/*        ambient={ 0.5 }*/}
      {/*        intensity={ 1 }*/}
      {/*        position={ [ 1, 2, 3 ] }*/}
      {/*        bias={ 0.001 }*/}
      {/*    />*/}

      {/*</AccumulativeShadows>*/}
      <Sky />
      <ambientLight intensity={0.5} />
      <ContactShadows
        position={[0, -0.99, 0]}
        scale={10}
        resolution={512}
        color={color}
        opacity={opacity}
        blur={blur}
        far={5}
        frames={1}
      />
      <mesh castShadow position-x={-2}>
        {/*<SoftShadows frustum= {2}/>*/}

        <sphereGeometry />
        <color args={["green"]} attach="background" />
        <meshStandardMaterial
          color="orange"
          envMapIntensity={envMapIntensity}
        />
      </mesh>

      <mesh castShadow ref={cube} position-x={2} scale={1.5}>
        <boxGeometry />
        <meshStandardMaterial
          color="mediumpurple"
          envMapIntensity={envMapIntensity}
        />
      </mesh>

      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshStandardMaterial
          color="greenyellow"
          envMapIntensity={envMapIntensity}
        />
      </mesh>
      {/*<BakeShadows />*/}
    </>
  );
}
