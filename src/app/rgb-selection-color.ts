"use client";

import { useEffect } from "react";

export default function RgbSelectionColor() {
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = "::selection { background: var(--color-selection); }";
    document.head.appendChild(style);
    changeSelectionColor();
  }, []);

  return null;
}

let hue = 0;

function changeSelectionColor() {
  hue = (hue + 1) % 360;
  document.documentElement.style.setProperty(
    "--color-selection",
    `hsl(${hue} 100% 50% / 0.5)`,
  );
  requestAnimationFrame(changeSelectionColor);
}
