import React, { useEffect, useMemo, useRef } from "react";
import { BufferGeometry } from "three";
import { DoubleSide } from "three";
import { Geometry } from "three/examples/jsm/deprecated/Geometry";
const CustomObject = () => {
  const geometryRef = useRef<BufferGeometry>(null!);
  //꼭짓점 개수 3개 * 삼각형 10개
  const verticesCount = 10 * 3;
  const positions = useMemo(() => {
    const positions = new Float32Array(verticesCount * 3);

    for (let i = 0; i < verticesCount * 3; i++)
      positions[i] = (Math.random() - 0.5) * 3;

    return positions;
  }, []);
  useEffect(() => {
    geometryRef.current.computeVertexNormals();
  }, [positions]);

  return (
    <mesh position-x={-3}>
      <bufferGeometry ref={geometryRef}>
        <bufferAttribute
          attach="attributes-position"
          count={verticesCount}
          itemSize={3}
          array={positions}
        />
      </bufferGeometry>
      <meshStandardMaterial color="red" side={DoubleSide} />
    </mesh>
  );
};

export default CustomObject;
