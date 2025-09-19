import { cn } from "../../lib/utils";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useMemo, useRef, useCallback, useEffect, useState } from "react";

function FullscreenShader() {
  const shaderRef = useRef(null);
  const { size, gl } = useThree();
  const [isVisible, setIsVisible] = useState(true);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uResolution: { value: new THREE.Vector3(size.width, size.height, 1) },
    }),
    [size.width, size.height]
  );

  // Performance optimization: pause animation when not visible
  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsVisible(!document.hidden);
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  // Throttled frame update for better performance
  const updateTime = useCallback((time) => {
    if (!shaderRef.current || !isVisible) return;
    shaderRef.current.uniforms.uTime.value = time * 0.6; // Balanced speed
  }, [isVisible]);

  useFrame(({ clock }) => {
    updateTime(clock.getElapsedTime());
  });

  // Debug logging
  useEffect(() => {
    console.log('FullscreenShader mounted, uniforms:', uniforms);
    console.log('Canvas size:', size);
  }, [uniforms, size]);

  return (
    <mesh>
      <planeGeometry args={[4, 4]} />
      <shaderMaterial
        ref={shaderRef}
        depthWrite={false}
        depthTest={false}
        transparent={false}
        uniforms={uniforms}
        vertexShader={/* glsl */ `
          varying vec2 vTexCoord;
          void main() {
            vTexCoord = uv;
            gl_Position = vec4(position, 1.0);
          }
        `}
        fragmentShader={/* glsl */ `
          precision mediump float;

          uniform vec3 uResolution;
          uniform float uTime;

          void main(){
              vec2 uv = gl_FragCoord.xy / uResolution.xy;
              
              // Simple animated gradient
              float time = uTime * 0.5;
              float wave = sin(uv.x * 10.0 + time) * 0.5 + 0.5;
              wave += sin(uv.y * 8.0 + time * 0.7) * 0.5 + 0.5;
              
              // Blue to cyan gradient
              vec3 color = mix(
                vec3(0.0, 0.0, 1.0),  // Blue
                vec3(0.0, 1.0, 1.0),  // Cyan
                wave
              );
              
              gl_FragColor = vec4(color, 1.0);
          }
        `}
      />
    </mesh>
  );
}

export const Component = () => {
  return (
    <div
      className={cn(
        "absolute inset-0 w-full h-full"
      )}
    >
      <Canvas 
        orthographic
        camera={{ position: [0, 0, 1], zoom: 1 }}
        dpr={[1, 1]}
        style={{ background: 'transparent' }}
        gl={{ 
          powerPreference: "high-performance",
          antialias: false,
          stencil: false,
          depth: false,
        }}
        onCreated={({ gl }) => {
          console.log('Canvas created successfully');
          gl.setClearColor(0x000000, 0);
        }}
      >
        <FullscreenShader />
      </Canvas>
    </div>
  );
};
