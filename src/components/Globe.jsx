import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { useSpring } from "@react-spring/web";

export default function Globe() {
  const canvasRef = useRef();
  const pointerInteracting = useRef(null);
  const pointerInteractionMovement = useRef(0);
  const globeRef = useRef(null);
  const locationToAngles = (lat, long) => {
    return [Math.PI - ((long * Math.PI) / 180 - Math.PI / 2), (lat * Math.PI) / 180];
  };

  const initialAngles = locationToAngles(20, 8.2275);

  // Angle animation
  const [{ r }, api] = useSpring(() => ({
    r: initialAngles[0], // Use the switzerland position as initial
    config: {
      mass: 1,
      tension: 288,
      friction: 40,
      precision: 0.001,
    },
  }));

  useEffect(() => {
    let width = 0;
    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth;
      }
    };
    window.addEventListener("resize", onResize);
    onResize();

    // Create the globe
    globeRef.current = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: initialAngles[0], // Start in Switzerland
      theta: initialAngles[1],
      dark: 1,
      diffuse: 3,
      mapSamples: 16000,
      mapBrightness: 1.6,
      baseColor: [1, 1, 1],
      markerColor: [255 / 255, 255 / 255, 255 / 255],
      glowColor: [1.2, 1.2, 1.2],
      markers: [{ location: [46.8182, 8.2275], size: 0.1 }],
      onRender: (state) => {
        state.phi = r.get();
        state.width = width * 2;
        state.height = width * 2;
      },
    });

    setTimeout(() => {
      if (canvasRef.current) {
        canvasRef.current.style.opacity = "1";
      }
    });

    return () => {
      if (globeRef.current) {
        globeRef.current.destroy();
      }
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div
      style={{
        width: "100%",
        maxWidth: 600,
        aspectRatio: 1,
        margin: "auto",
        position: "relative",
      }}
    >
      <canvas
        ref={canvasRef}
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX - pointerInteractionMovement.current;
          canvasRef.current.style.cursor = "grabbing";
        }}
        onPointerUp={() => {
          pointerInteracting.current = null;
          canvasRef.current.style.cursor = "grab";
        }}
        onPointerOut={() => {
          pointerInteracting.current = null;
          canvasRef.current.style.cursor = "grab";
        }}
        onMouseMove={(e) => {
          if (pointerInteracting.current !== null) {
            const delta = e.clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta;
            api.start({
              r: initialAngles[0] + delta / 200,
            });
          }
        }}
        onTouchMove={(e) => {
          if (pointerInteracting.current !== null && e.touches[0]) {
            const delta = e.touches[0].clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta;
            api.start({
              r: initialAngles[0] + delta / 100,
            });
          }
        }}
        style={{
          width: "100%",
          height: "100%",
          cursor: "grab",
          contain: "layout paint size",
          opacity: 0,
          transition: "opacity 1s ease",
        }}
      />
    </div>
  );
}