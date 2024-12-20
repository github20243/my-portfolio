import React, { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { styled } from "@mui/material";
import * as THREE from "three";

interface SpinnerProps {
  isLoading: boolean;
}

const Spinner: React.FC<SpinnerProps> = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <SpinnerOverlay>
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />

        {/* Планета, состоящая из частиц */}
        <ParticlePlanet />

        {/* Управление камерой */}
        <OrbitControls />
      </Canvas>

      {/* Текст "Загрузка..." внизу */}
      <SpinnerText>Загрузка...</SpinnerText>
    </SpinnerOverlay>
  );
};

export default Spinner;

// Компонент для планеты, состоящей из частиц
const ParticlePlanet: React.FC = () => {
  const particlesRef = useRef<THREE.InstancedMesh>(null);

  // Количество частц и радиус планеты
  const particleCount = 1000; // Увеличиваем количество частиц
  const radius = 2; // Сохраняем радиус планеты на 2

  // Позиции частиц на сфере (распределение по поверхности сферы)
  const particlePositions = Array.from({ length: particleCount }).map(() => {
    const phi = Math.acos(2 * Math.random() - 1); // угол от полюса
    const theta = Math.random() * 2 * Math.PI; // угол по экватору

    const x = radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.sin(phi) * Math.sin(theta);
    const z = radius * Math.cos(phi);

    return [x, y, z];
  });

  // Анимация вращения частиц
  useFrame(() => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.01;
    }
  });

  useEffect(() => {
    if (particlesRef.current) {
      particlePositions.forEach(([x, y, z], index) => {
        const matrix = new THREE.Matrix4();
        matrix.setPosition(x, y, z);
        particlesRef.current?.setMatrixAt(index, matrix);
      });
      particlesRef.current.instanceMatrix.needsUpdate = true;
    }
  }, []);

  return (
    <instancedMesh ref={particlesRef} args={[new THREE.BufferGeometry(), new THREE.MeshBasicMaterial(), particleCount]}>
      <sphereGeometry args={[0.015, 8, 8]} />  {/* Уменьшаем размер частиц */}
      <meshStandardMaterial color="#ffffff" />
    </instancedMesh>
  );
};

// Стили для фона и текста
const SpinnerOverlay = styled("div")({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end", // Текст внизу
  alignItems: "center",
  background: "linear-gradient(to bottom, #0f0f1f, #292939)", // Темный космический фон
  zIndex: 9999,
  overflow: "hidden", // Для предотвращения прокрутки
});

const SpinnerText = styled("div")({
  color: "#ffffff",
  fontSize: "18px",
  fontWeight: "bold",
  marginBottom: "40px", // Отступ снизу, чтобы текст не был прижат к экрану
	position: "absolute",
	bottom: "60px",
	fontFamily: "monospace"
});
