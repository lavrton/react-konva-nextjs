'use client';

import { Stage, Layer, Rect } from 'react-konva';

export default function Canvas() {
  const width = typeof window !== 'undefined' ? window.innerWidth : 800;
  const height = typeof window !== 'undefined' ? window.innerHeight : 600;

  return (
    <Stage width={width} height={height}>
      <Layer>
        <Rect x={20} y={20} width={100} height={100} fill="red" />
      </Layer>
    </Stage>
  );
}
