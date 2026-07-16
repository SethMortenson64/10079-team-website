"use client";

import { useEffect } from "react";

export default function RandomSelectionColor() {
  useEffect(() => {
    changeSelectionColor();
  });

  return null;
}

let hue = 0;

function changeSelectionColor() {
  hue = (hue + 1) % 360;
  document.documentElement.style.setProperty("--color-selection", `hsl(${hue} 100% 50% / 0.5)`);
  requestAnimationFrame(changeSelectionColor);
}
