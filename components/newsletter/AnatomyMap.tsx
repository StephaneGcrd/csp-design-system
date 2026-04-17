"use client";

import { useState } from "react";
import { anatomyItems } from "./data";

export function AnatomyMap() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
      <div className="top-24 flex flex-col gap-2 border border-blue-primary/10 bg-white p-8 lg:sticky">
        {anatomyItems.map((item) => (
          <button
            key={item.id}
            type="button"
            onMouseEnter={() => setActiveId(item.id)}
            onMouseLeave={() => setActiveId(null)}
            onFocus={() => setActiveId(item.id)}
            onBlur={() => setActiveId(null)}
            className={`cursor-pointer border border-transparent px-4 text-center text-xs font-semibold tracking-wider uppercase transition ${
              item.className
            } ${
              activeId === item.id
                ? "translate-x-1 border-blue-primary"
                : "hover:translate-x-1 hover:border-blue-primary"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="flex flex-col gap-6">
        {anatomyItems.map((item) => (
          <article
            key={item.id}
            className={`border-l-3 border-blue-primary bg-white px-6 py-4 transition ${
              activeId === item.id ? "bg-blue-light" : ""
            }`}
          >
            <h4 className="font-display mb-2 text-2xl text-blue-primary">{item.title}</h4>
            <ul className="space-y-1 text-sm leading-relaxed text-blue-primary">
              {item.rules.map((rule) => (
                <li key={rule}>→ {rule}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}
