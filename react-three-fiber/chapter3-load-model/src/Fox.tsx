import React, { useEffect } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useControls } from "leva";

const Fox = () => {
  const fox = useGLTF("./Fox/glTF/Fox.gltf");
  const animations = useAnimations(fox.animations, fox.scene);
  const { animationName } = useControls({
    animationName: { options: animations.names },
  });

  useEffect(() => {
    const action = animations.actions[animationName];
    action?.reset().fadeIn(0.5).play();

    return () => {
      action?.fadeOut(3);
    };
  }, [animationName]);
  return <primitive object={fox.scene} scale={0.03} />;
};

export default Fox;
