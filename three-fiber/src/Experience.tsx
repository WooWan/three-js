import {extend, useThree} from "@react-three/fiber";
import { useRef } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { Group, Mesh } from "three";
extend({ OrbitControls });

const Experience = () => {
    const cubeRef = useRef<Mesh>(null!);
    const groupRef = useRef<Group>(null!);


    return (
        <>
            {/*<orbitControls args={[camera, gl.domElement} />*/}
            <group ref={groupRef}>
                <mesh position-x={3} ref={cubeRef}>
                    <boxGeometry/>
                    <meshBasicMaterial color="red"/>
                </mesh>
                <mesh>
                    <sphereGeometry/>
                    <meshBasicMaterial color="orange"/>
                </mesh>
                <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={[10, 10, 10]}>
                    <planeGeometry/>
                    <meshBasicMaterial color="yellow"/>
                </mesh>
            </group>
        </>
    );
};

export default Experience;
