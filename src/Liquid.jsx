import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Liquid(props) {
  const { nodes, materials } = useGLTF("/liquid_splash_2.glb");
  return (
    <group scale={[20, 20, 20]} {...props} dispose={null}>
      <group position={[0, -0.001, 0]} rotation={[0.03, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Fluid_Free__0.geometry}
          material-roughness={0.2}
          material-metalness={0.8}
          material-color="#ffffff"
          material-transparent={true}
          material-opacity={0.8}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Fluid_Free__0_1.geometry}
          material-roughness={0.2}
          material-metalness={0.8}
          material-color="#ffffff"
          material-transparent={true}
          material-opacity={0.8}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Fluid_Free__0_2.geometry}
          material-roughness={0.2}
          material-metalness={0.8}
          material-color="#ffffff"
          material-transparent={true}
          material-opacity={0.8}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Fluid_Free__0_3.geometry}
          material-roughness={0.2}
          material-metalness={0.8}
          material-color="#ffffff"
          material-transparent={true}
          material-opacity={0.8}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Fluid_Free__0_4.geometry}
          material-roughness={0.2}
          material-metalness={0.8}
          material-color="#ffffff"
          material-transparent={true}
          material-opacity={0.8}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Fluid_Free__0_5.geometry}
          material-roughness={0.2}
          material-metalness={0.8}
          material-color="#ffffff"
          material-transparent={true}
          material-opacity={0.8}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/liquid_splash_2.glb");
