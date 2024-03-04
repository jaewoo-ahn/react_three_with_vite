/* eslint-disable react/no-unknown-property */
import {Canvas} from "@react-three/fiber";
import {Cube, Sphere} from ".";

const BasicBox = () => {
  return (
    <Canvas>
      <directionalLight position={[0, 0, 2]} intensity={0.5} />
      <ambientLight intensity={0.1} />
      <Cube position={[0, 0, 0]} color={"orange"} size={[1, 1, 1]} />
      <Sphere position={[0, 0, 0]} args={[1, 30, 30]} color={"orange"} />
    </Canvas>
  );
};

export default BasicBox;
