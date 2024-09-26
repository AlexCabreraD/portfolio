import { useEffect, useRef } from "react";

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas!.getContext("2d");

    // Function to resize canvas and reset drawing
    const resizeCanvas = () => {
      const width = (canvas!.width = window.innerWidth);
      const height = (canvas!.height = window.innerHeight);

      const fireFlyCount = Math.floor(width / 50);
      const lightStreaks: {
        x: number;
        y: number;
        dx: number;
        dy: number;
        glow: string;
      }[] = [];

      for (let i = 0; i < fireFlyCount; i++) {
        lightStreaks.push({
          x: Math.random() * width,
          y: Math.random() * height,
          dx: Math.random() - 0.5,
          dy: Math.random() - 0.5,
          glow: `rgba(5, 152, 98,${Math.random()})`,
        });
      }

      const animate = () => {
        ctx!.clearRect(0, 0, width, height);

        lightStreaks.forEach((streak) => {
          ctx!.beginPath();
          ctx!.moveTo(streak.x, streak.y);
          streak.x += streak.dx;
          streak.y += streak.dy;

          if (streak.x > width || streak.x < 0) streak.dx *= -1;
          if (streak.y > height || streak.y < 0) streak.dy *= -1;

          ctx!.lineTo(streak.x + streak.dx * 5, streak.y + streak.dy * 5);
          ctx!.strokeStyle = streak.glow;
          ctx!.lineWidth = 2;
          ctx!.shadowBlur = 10;
          ctx!.shadowColor = streak.glow;
          ctx!.stroke();
        });

        requestAnimationFrame(animate);
      };

      animate();
    };

    // Resize the canvas when the window is resized
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <div className="grid-background">
      <canvas ref={canvasRef}></canvas>
    </div>
  );
}
