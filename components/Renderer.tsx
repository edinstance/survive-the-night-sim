import { useEffect, useState } from "react";
import { DEFAULT_REPLAY_SPEED } from "@/constants/visualizer";
import { Renderer } from "@/renderer";

export function useRenderer(
  map: string[][] | null | undefined,
  canvas: React.MutableRefObject<HTMLCanvasElement | null>,
  cellSize: number = 64,
  replaySpeed: number = DEFAULT_REPLAY_SPEED,
  playerLabels?: Record<string, string>,
) {
  const [renderer, setRenderer] = useState<Renderer | null>(null);

  useEffect(() => {
    if (!map || !canvas.current) {
      return;
    }

    const renderer = new Renderer(
      map,
      canvas.current,
      cellSize,
      replaySpeed,
      playerLabels,
    );

    void renderer.initialize().then(() => {
      console.log("renderer initialized");
      setRenderer(renderer);
    });
  }, [map, cellSize, replaySpeed, playerLabels]);

  return renderer;
}