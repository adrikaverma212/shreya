
import React from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls} from '@react-three/drei';
import "./style.css";
import Cyl from './Cyl';
import * as THREE from "three";
import { EffectComposer, ToneMapping } from '@react-three/postprocessing';
import { Bloom } from '@react-three/postprocessing';
const App = () => {

  return (
    <>
  <Canvas flat camera={{fov:45}}>
    <OrbitControls/>
    <ambientLight/>
<Cyl/>
<EffectComposer>
<Bloom
    mipmapBlur
    intensity={20.0} // The bloom intensity.
    // blurPass={undefined} 
    // kernelSize={KernelSize.LARGE} 
    luminanceThreshold={0.36}
    luminanceSmoothing={0.9} 
    // mipmapBlur={false} 
    // resolutionX={Resolution.AUTO_SIZE} 
    // resolutionY={Resolution.AUTO_SIZE} 
  />

<ToneMapping adaptive/>
</EffectComposer>

  </Canvas>
  <div className='w-full c-white py-32'></div>
  <h1>hello </h1>
  </>
  );
}

export default App;
 
 
      