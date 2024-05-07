import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

const ThreeScene = () => {
  const canvasRef = useRef();
  const [mouseDown, setMouseDown] = useState(false);
  const [prevMousePosition, setPrevMousePosition] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas });

    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.z = 5;

    const geometry = new THREE.BoxGeometry();
    const materials = [
      new THREE.MeshPhongMaterial({ color: 0xff0000 }), // красный
      new THREE.MeshPhongMaterial({ color: 0x00ff00 }), // зелёный
      new THREE.MeshPhongMaterial({ color: 0x0000ff }), // синий
      new THREE.MeshPhongMaterial({ color: 0xffff00 }), // жёлтый
      new THREE.MeshPhongMaterial({ color: 0xff00ff }), // пурпурный
      new THREE.MeshPhongMaterial({ color: 0x00ffff })  // голубой
    ];

    // Создаём куб
    const cube = new THREE.Mesh(geometry, materials);

    // Создаём плоскость
    const planeGeometry = new THREE.PlaneGeometry(2, 2, 32, 32); // Изменим размеры на 2x2 единицы
    const planeMaterial = new THREE.MeshPhongMaterial({ color: 0x808080, side: THREE.DoubleSide }); // Серый цвет
    const plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.rotation.x = Math.PI / 2; // Поворачиваем плоскость чтобы она была параллельна плоскости XY
    plane.position.y = -0.5; // Поднимаем плоскость на 0.5 единицы ниже оси Y

    // Создаём группу и добавляем куб и плоскость в эту группу
    const group = new THREE.Group();
    group.add(cube);
    group.add(plane);

    // Добавляем источник света
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(1, 1, 1).normalize();
    scene.add(light);

    scene.add(group);

    const handleMouseDown = (event) => {
      setMouseDown(true);
      setPrevMousePosition({ x: event.clientX, y: event.clientY });
    };

    const handleMouseUp = () => {
      setMouseDown(false);
    };

    const handleMouseMove = (event) => {
      if (mouseDown) {
        const deltaMove = {
          x: event.clientX - prevMousePosition.x,
          y: event.clientY - prevMousePosition.y
        };

        const newRotation = {
          x: rotation.x + deltaMove.y * 0.01,
          y: rotation.y + deltaMove.x * 0.01
        };

        setRotation(newRotation);
        setPrevMousePosition({ x: event.clientX, y: event.clientY });
      }
    };

    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mouseup', handleMouseUp);
    canvas.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      requestAnimationFrame(animate);

      group.rotation.x = rotation.x;
      group.rotation.y = rotation.y;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      canvas.removeEventListener('mousedown', handleMouseDown);
      canvas.removeEventListener('mouseup', handleMouseUp);
      canvas.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      // Clean up Three.js objects if necessary
    };
  }, [mouseDown, prevMousePosition, rotation]);

  return <canvas ref={canvasRef} />;
};

export default ThreeScene;