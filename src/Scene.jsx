import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import {
  Environment,
  PerspectiveCamera,
  OrbitControls,
} from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Watch } from "./Watch";
import { Liquid } from "./liquid";

gsap.registerPlugin(ScrollTrigger);
const Scene = ({ progress }) => {
  const camerRef = useRef(null);
  useFrame(() => {
    camerRef.current.lookAt(0, 0, 0);
  });
  useEffect(() => {
    const updateCampos = () => {
      const positions = [
        [3.5, 2.17, 3.7],
        [3.7, 0.6, 0.7],
        [2.3, 0.87, -4.7],
        [0, 2.5, 3.6],
      ];
      if (progress >= 1) {
        gsap.to(camerRef.current.position, {
          x: 0,
          y: 2.5,
          z: 3.6,
          duration: 0.5,
          ease: "power3.out",
        });
      } else {
        const segmentProgess = 1 / 3;
        const segmentIndex = Math.floor(progress / segmentProgess);
        const perentage = (progress % segmentProgess) / segmentProgess;
        const [startX, startY, startZ] = positions[segmentIndex];
        const [endX, endY, endZ] = positions[segmentIndex + 1];
        const x = startX + (endX - startX) * perentage;
        const y = startY + (endY - startY) * perentage;
        const z = startZ + (endZ - startZ) * perentage;
        gsap.to(camerRef.current.position, {
          x,
          y,
          z,
          duration: 0.5,
          ease: "power3.out",
        });
      }
    };
    updateCampos();
  }, [progress, camerRef.current]);

  return (
    <>
      <PerspectiveCamera
        ref={camerRef}
        fov={45}
        near={0.1}
        far={1000}
        makeDefault
        position={[3.5, 2.17, 3.7]}
        // position={[3.7, 0.6, 0.7]}
        // position={[2.3, 0.87, -4.7]}
        // position={[0, 2.5, 3.6]}
      />
      <Environment preset="city" />
      <Watch />
      {/* <Liquid /> */}
    </>
  );
};

export default Scene;
