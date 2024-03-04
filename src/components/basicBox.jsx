import {Canvas} from "@react-three/fiber";

const BasicBox = () => {
  return (
    <Canvas>
      <directionalLight position={[0, 0, 2]} />
      <mesh position={[1, 0, 0]}>
        <boxGeometry />
        <meshStandardMaterial color={"orange"} />
      </mesh>
      <mesh position={[-1, 0, 0]}>
        <boxGeometry />
        <meshStandardMaterial color={"orange"} />
      </mesh>
      <mesh position={[-1, 2, 0]}>
        <boxGeometry />
        <meshStandardMaterial color={"orange"} />
      </mesh>
      <mesh position={[1, 2, 0]}>
        <boxGeometry />
        <meshStandardMaterial color={"orange"} />
      </mesh>
    </Canvas>
  );
};

export default BasicBox;
