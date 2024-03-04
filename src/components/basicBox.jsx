/* eslint-disable react/no-unknown-property */
import {Canvas, useFrame} from "@react-three/fiber";
import PropTypes from "prop-types";
import {useRef} from "react";

const Cube = ({position, color, size}) => {
  const ref = useRef();

  useFrame((state, delta) => {
    ref.current.rotation.x += delta;
    ref.current.rotation.y += delta * 2.0;
    ref.current.position.z += Math.sin(state.clock.elapsedTime);
  });
  return (
    <mesh position={position} ref={ref}>
      <boxGeometry args={size} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};
Cube.propTypes = {
  position: PropTypes.array.isRequired,
  color: PropTypes.string.isRequired,
  size: PropTypes.array.isRequired,
};

const BasicBox = () => {
  return (
    <Canvas>
      <directionalLight position={[0, 0, 2]} intensity={0.5} />
      <ambientLight intensity={0.1} />
      {/* <group position={[0, -1, 0]}>
        <Cube position={[1, 0, 0]} color={"orange"} size={[1, 1, 1]} />
        <Cube position={[-1, 0, 0]} color={"green"} size={[1, 1, 1]} />
        <Cube position={[-1, 2, 0]} color={"hotpink"} size={[1, 1, 1]} />
        <Cube position={[1, 2, 0]} color={"blue"} size={[1, 1, 1]} />
      </group> */}
      <Cube position={[0, 0, 0]} color={"orange"} size={[1, 1, 1]} />
    </Canvas>
  );
};

export default BasicBox;
