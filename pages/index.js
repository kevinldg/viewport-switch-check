import { useState, useEffect } from "react";

export default function Home() {
  const [viewport, setViewport] = useState({
    width: null,
    height: null,
  });
  const [device, setDevice] = useState(null);

  useEffect(() => {
    function handleResize() {
      setViewport({
        width: window.innerWidth,
        height: window.innerHeight,
      });

      if (window.innerWidth > 768) {
        setDevice("Landscape");
      } else {
        setDevice("Mobile");
      }
    }

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      handleResize();

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <main className="h-screen flex flex-col gap-8 justify-center items-center relative">
      <section className="flex flex-col items-center gap-1">
        <h1 className="text-2xl font-bold text-red-500">Aktueller Viewport</h1>
        <div className="font-bold flex justify-center gap-4">
          <p>Width: {viewport.width}px</p>
          <p>Height: {viewport.height}px</p>
        </div>
        <p>Device: {device}</p>
      </section>
      <section>
        <video width={320} height={240} controls muted>
          <source
            src="video/video1.mp4"
            type="video/mp4"
            media="(max-width:768px)"
          />
          <source
            src="video/video2.mp4"
            type="video/mp4"
            media="(min-width:768px)"
          />
        </video>
      </section>
      <section>
        <p className=" absolute bottom-4 right-4 p-2 bg-blue-100 border-solid border-blue-200 border-2">
          Info: Zum Ändern des Videos muss die Seite neugeladen werden
        </p>
      </section>
    </main>
  );
}
