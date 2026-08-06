"use client";

import { useEffect, useId, useRef, useState } from "react";
import RgbSelectionColor from "./rgb-selection-color";

export default function RenaDetector() {
  const inputId = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [renaDetected, setRenaDetected] = useState(true);

  useEffect(() => {
    dialogRef.current?.showModal();
  }, []);

  return (
    <dialog
      ref={dialogRef}
      className={`m-auto text-white bg-zinc-900 rounded-4xl p-8 w-120 h-120 justify-center items-center flex flex-col gap-8 shadow-xl`}
    >
      <label htmlFor={inputId} className="text-3xl font-medium">
        Enter your name
      </label>
      <input
        id={inputId}
        ref={inputRef}
        placeholder="Name"
        className="p-4 border w-full border-zinc-500 rounded-xl outline-none placeholder:text-zinc-500"
        onKeyDown={(event) => {
          if (event.key === "Enter" && inputRef.current && dialogRef.current) {
            if (inputRef.current.value !== "Rena") {
              setRenaDetected(false);
            }
            dialogRef.current.classList.add("hidden");
            dialogRef.current.close();
          }
        }}
      />
      {!renaDetected && <RgbSelectionColor />}
    </dialog>
  );
}
