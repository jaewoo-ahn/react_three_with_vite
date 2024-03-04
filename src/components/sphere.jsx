/* eslint-disable react/no-unknown-property */
import PropTypes from "prop-types";

const Sphere = ({position, size, color}) => {
  return (
    <mesh position={position}>
      <sphereGeometry args={size} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

export default Sphere;

Sphere.propTypes = {
  position: PropTypes.array.isRequired,
  color: PropTypes.string.isRequired,
  size: PropTypes.array.isRequired,
};
