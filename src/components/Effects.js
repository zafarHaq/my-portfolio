import {
  EffectComposer,
  Bloom,
  Noise,
  Vignette,
} from "@react-three/postprocessing";

export default function Effects() {
  return (
    <EffectComposer>
      <Bloom
        luminanceThreshold={0.1}
        luminanceSmoothing={0.9}
        intensity={0.5}
      />
      <Noise opacity={0.2} />
      <Vignette eskil={false} offset={0.1} darkness={1.1} />
    </EffectComposer>
  );
}
