import { useMemo, useState, useEffect, useRef } from "react";
import Head from "next/head";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import Header from "../0shared/Header";
import { Canvas, useThree, useRender } from "react-three-fiber";

function Model({ file: url }) {
  const [gltf, set] = useState();
  useMemo(() => new GLTFLoader().load(url, set), [url]);

  return gltf ? <primitive object={gltf.scene} /> : null;
}

function Content() {
  const camera = useRef();
  const controls = useRef();
  const { size, setDefaultCamera } = useThree();
  useEffect(() => void setDefaultCamera(camera.current), []);
  useRender(() => controls.current.update());
  return (
    <>
      <perspectiveCamera
        ref={camera}
        aspect={size.width / size.height}
        radius={(size.width + size.height) / 4}
        fov={55}
        position={[0, 0, 5]}
        onUpdate={(self) => self.updateProjectionMatrix()}
      />
      {camera.current && (
        <group>
          <orbitControls
            ref={controls}
            args={[camera.current]}
            enableDamping
            dampingFactor={0.1}
            rotateSpeed={0.1}
          />
          <Model camera={camera.current} file="/static/gltfSample/scene.gltf" />
        </group>
      )}
    </>
  );
}

const Home = () => {
  const [clicked, set] = useState(false);
  return (
    <>
      <Head>
        <title>Three Example</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <>
        <Canvas camera={{ position: [0, 0, 10] }}>
          {/* {clicked && <Content />} */}
          {clicked && <Model file="/static/gltfSample/scene.gltf" />}
        </Canvas>
        {!clicked && <button onClick={() => set(true)}>Load scene</button>}
      </>
    </>
  );
};

export default Home;
