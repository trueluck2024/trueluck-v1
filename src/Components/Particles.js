import React, { useEffect, useRef } from 'react';

import * as THREE from 'three';

const AnimatedParticles = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;

    // Setup the scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mount.appendChild(renderer.domElement);

    // Create particles
    const particleCount = 65;
    const particles = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const speeds = new Float32Array(particleCount);
    const sizes = new Float32Array(particleCount);
    const opacities = new Float32Array(particleCount);

    const colorPalette = [
      new THREE.Color(1, 0.5, 0.31), // Brighter Coral
      new THREE.Color(1, 0.84, 0),   // Brighter Gold
      new THREE.Color(0.5, 1, 0),    // Brighter Chartreuse
      new THREE.Color(0.12, 0.56, 1), // Brighter DodgerBlue
      new THREE.Color(1, 0.41, 0.71), // Brighter HotPink
      new THREE.Color(0.5, 0.25, 0.15), // Duller Coral
      new THREE.Color(0.8, 0.7, 0.3),   // Duller Gold
      new THREE.Color(0.25, 0.5, 0),    // Duller Chartreuse
      new THREE.Color(0.06, 0.28, 0.5), // Duller DodgerBlue
      new THREE.Color(0.5, 0.2, 0.35)  // Duller HotPink
    ];

    const width = window.innerWidth;
    const height = window.innerHeight;

    function initializeParticle(index) {
      const x = (Math.random() - 0.5) * width;
      const y = (Math.random() - 0.5) * height;
      const z = (Math.random() - 0.5) * 600;

      positions[index] = x;
      positions[index + 1] = y;
      positions[index + 2] = z;

      speeds[index / 3] = 0.5 + Math.random() * 0.5;

      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      colors[index] = color.r;
      colors[index + 1] = color.g;
      colors[index + 2] = color.b;

      sizes[index / 3] = 3.0 + Math.random() * 6.0; // Random size between 3 and 9
      opacities[index / 3] = 0.3 + Math.random() * 0.7; // Random opacity between 0.3 and 1.0
    }

    for (let i = 0; i < particleCount * 3; i += 3) {
      initializeParticle(i);
    }

    particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particles.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    particles.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    particles.setAttribute('opacity', new THREE.BufferAttribute(opacities, 1));

    const particleMaterial = new THREE.ShaderMaterial({
      uniforms: {
        pointTexture: { value: new THREE.TextureLoader().load('https://threejs.org/examples/textures/sprites/circle.png') },
      },
      vertexShader: `
        attribute float size;
        attribute float opacity;
        varying vec3 vColor;
        varying float vOpacity;
        void main() {
          vColor = color;
          vOpacity = opacity;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = size * (300.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        uniform sampler2D pointTexture;
        varying vec3 vColor;
        varying float vOpacity;
        void main() {
          gl_FragColor = vec4(vColor, vOpacity);
          gl_FragColor = gl_FragColor * texture2D(pointTexture, gl_PointCoord);
        }
      `,
      blending: THREE.AdditiveBlending,
      depthTest: false,
      transparent: true,
      vertexColors: true
    });

    const particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);

    camera.position.z = 300;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Move particles in reversed direction
      for (let i = 0; i < particleCount * 3; i += 3) {
        const speed = speeds[i / 3];
        const direction = new THREE.Vector3(positions[i], positions[i + 1], positions[i + 2]).normalize();

        positions[i] += direction.x * speed;
        positions[i + 1] += direction.y * speed;
        positions[i + 2] += direction.z * speed;

        const distanceFromCenter = Math.sqrt(
          positions[i] * positions[i] +
          positions[i + 1] * positions[i + 1] +
          positions[i + 2] * positions[i + 2]
        );

        if (distanceFromCenter > 300) {
          initializeParticle(i);
        }
      }

      particles.attributes.position.needsUpdate = true;
      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: '-1' }} />;
};

export default AnimatedParticles;
