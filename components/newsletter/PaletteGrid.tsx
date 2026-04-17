"use client";

import { useState } from "react";
import { paletteColors } from "./data";

export function PaletteGrid() {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  const onCopy = async (hex: string) => {
    try {
      await navigator.clipboard.writeText(hex);
      setCopiedHex(hex);
      window.setTimeout(() => setCopiedHex(null), 1200);
    } catch {
      setCopiedHex(null);
    }
  };

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {paletteColors.map((item) => (
        <button
          key={item.hex}
          type="button"
          onClick={() => void onCopy(item.hex)}
          className="overflow-hidden border border-blue-primary/15 bg-white text-left transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-primary/10"
        >
          <div
            style={{ backgroundColor: item.hex }}
            className={`aspect-[1.3] p-4 ${item.textColor} ${item.extraClassName ?? ""}`}
          >
            <span className="text-xs font-medium">cliquer pour copier</span>
          </div>
          <div className="flex items-baseline justify-between gap-2 p-4">
            <span className="text-sm font-semibold text-ink">{item.name}</span>
            <span className="font-mono text-xs tracking-wide text-ink-soft">
              {item.hex}
              {copiedHex === item.hex ? " · copie" : ""}
            </span>
          </div>
        </button>
      ))}
    </div>
  );
}
