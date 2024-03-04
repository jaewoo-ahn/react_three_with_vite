/* eslint-disable react/no-unknown-property */
import {Canvas} from "@react-three/fiber";
import PropTypes from "prop-types";

const Cube = ({position, color, size}) => {
  return (
    <mesh position={position}>
      <boxGeometry args={size} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};
Cube.propTypes = {
  position: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};

const BasicBox = () => {
  return (
    <Canvas>
      <directionalLight position={[0, 0, 2]} intensity={0.5} />
      <ambientLight intensity={0.1} />
      <group position={[0, -1, 0]}>
        <Cube position={[1, 0, 0]} color={"orange"} size={[1, 1, 1]} />
        <Cube position={[-1, 0, 0]} color={"green"} size={[1, 1, 1]} />
        <Cube position={[-1, 2, 0]} color={"hotpink"} size={[1, 1, 1]} />
        <Cube position={[1, 2, 0]} color={"blue"} size={[1, 1, 1]} />
      </group>
    </Canvas>
  );
};

export default BasicBox;
