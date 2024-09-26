"use client"
// pages/three.tsx
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeScene: React.FC = () => {
    const mountRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        // Initialize scene, camera, and renderer
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x000000, 0); // Transparent background

        if (mountRef.current) {
            mountRef.current.appendChild(renderer.domElement);
        }

        // Create a plane geometry with buffer attributes
        const geometry = new THREE.PlaneGeometry(10, 10, 15, 15);
        const material = new THREE.MeshBasicMaterial({
            color: "#FFFFFF",
            wireframe: true,
        });
        const mesh = new THREE.Mesh(geometry, material);

        // Access the position attribute of the geometry (it's a Float32BufferAttribute)
        const positionAttribute = geometry.attributes.position;

        // Modify the z values to warp the geometry
        for (let i = 0; i < positionAttribute.count; i++) {
            const x = positionAttribute.getX(i);
            const y = positionAttribute.getY(i);

            const z = Math.sin(x * 0.5) * Math.cos(y * 0.5); // Warping effect
            positionAttribute.setZ(i, z);
        }

        positionAttribute.needsUpdate = true; // Notify Three.js that the geometry has been updated

        scene.add(mesh);

        // Position the mesh on the bottom left
        // mesh.position.set(-9, -4, -5);
        mesh.rotation.x = Math.PI / 3;

        // Set the camera position
        camera.position.z = 10;

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);
            // Rotate slowly for animation effect
            mesh.rotation.z += 0.002;

            renderer.render(scene, camera);
        };

        animate();

        // Handle resizing
        const handleResize = () => {
            renderer.setSize(window.innerWidth, window.innerHeight);
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
        };

        window.addEventListener('resize', handleResize);

        // Cleanup on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
            if (mountRef.current) {
                mountRef.current.removeChild(renderer.domElement);
            }
        };
    }, []);

    return <div ref={mountRef} style={{ position: 'absolute', width: '100vw', height: '100vh' }} />;
};

export default ThreeScene;
