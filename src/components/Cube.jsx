import {useFrame} from "@react-three/fiber";
import PropTypes from "prop-types";
import {useRef} from "react";

export const Cube = ({position, color, size}) => {
  const ref = useRef();

  useFrame((state, delta) => {
    ref.current.rotation.x += delta;
    ref.current.rotation.y += delta * 2.0;
    ref.current.position.z += Math.sin(state.clock.elapsedTime) * 0.1;
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
