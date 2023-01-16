import React from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { Clone, useGLTF } from "@react-three/drei";

const Model = () => {
  // const model = useLoader(
  //   GLTFLoader,
  //   "./FlightHelmet/glTF/FlightHelmet.gltf",
  //   (loader) => {
  //     const dracoLoader = new DRACOLoader();
  //     dracoLoader.setDecoderPath("./draco/");
  //     loader.setDRACOLoader(dracoLoader);
  //   }
  // );

  // const model = useLoader(
  //   GLTFLoader,
  //   "./hamburger.glb"
  //   // ...
  // );
  const model = useGLTF("./hamburger.glb");

  return (
    <>
      <Clone object={model.scene} scale={0.35} position-x={3} />
      <Clone object={model.scene} scale={0.35} position-x={-3} />
      <Clone object={model.scene} scale={0.35} />
      {/*<primitive object={model.scene} scale={0.35} />*/}
    </>
  );
};

export default Model;
