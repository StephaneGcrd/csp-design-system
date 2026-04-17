"use client";

import Image from "next/image";
import { useState } from "react";

type Device = "desktop" | "mobile";

export function ExampleNewsletter() {
  const [device, setDevice] = useState<Device>("desktop");

  return (
    <div>
      <div className="mb-8 inline-flex overflow-hidden border border-blue-primary">
        <button
          type="button"
          onClick={() => setDevice("desktop")}
          className={`px-5 py-2 text-xs font-medium tracking-wider uppercase transition ${
            device === "desktop"
              ? "bg-blue-primary text-white"
              : "bg-white text-blue-primary"
          }`}
        >
          Desktop
        </button>
        <button
          type="button"
          onClick={() => setDevice("mobile")}
          className={`px-5 py-2 text-xs font-medium tracking-wider uppercase transition ${
            device === "mobile"
              ? "bg-blue-primary text-white"
              : "bg-white text-blue-primary"
          }`}
        >
          Mobile
        </button>
      </div>

      <div
        className={`mx-auto overflow-hidden border border-blue-primary/15 bg-white shadow-xl shadow-blue-primary/20 transition-all ${
          device === "desktop" ? "max-w-[720px]" : "max-w-[380px]"
        }`}
      >
        <div className="bg-blue-primary px-8 py-6 text-white">
          <Image
            src="/logo_vec.svg"
            alt="Comptoir Sud Pacifique"
            width={180}
            height={34}
            className="mx-auto mb-4 h-8 w-auto brightness-0 invert"
          />
          <div className="flex items-center justify-center gap-5 text-xs font-medium tracking-wider uppercase">
            <span>Parfums</span>
            <span>Maison</span>
            <span>Boutique</span>
          </div>
        </div>

        <a
          href="#collection-solaire"
          aria-label="Découvrir la collection solaire"
          className="relative flex aspect-[16/10] items-end bg-linear-to-br from-blue-light to-blue-primary p-6 text-xs font-medium tracking-widest text-white uppercase transition hover:brightness-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          LA COLLECTION SOLAIRE · PRINTEMPS 2026
          <span className="absolute right-6 top-1/2 -translate-y-1/2 text-3xl">
            →
          </span>
        </a>

        <div className="px-8 pt-12 pb-8 text-center">
          <h3 className="mb-4 text-xl leading-snug font-bold text-blue-primary">
            Un souffle de Pacifique dans votre parfumerie
          </h3>
          <p className="mx-auto mb-6 max-w-md text-base leading-relaxed text-blue-primary">
            Trois nouvelles fragrances pour accompagner le retour du soleil.
            Aloha Tiaré, Vanille Extrême et Aqua Motu vous attendent.
          </p>
          <a
            href="#collection-solaire"
            className="inline-block bg-blue-primary px-6 py-3 text-sm font-medium text-white"
          >
            Découvrir la collection
          </a>
        </div>

        <div
          className={`grid gap-4 bg-off-white p-8 ${
            device === "mobile" ? "grid-cols-2" : "grid-cols-3"
          }`}
        >
          {["Aloha Tiare", "Vanille Extreme", "Aqua Motu"].map((name) => (
            <div key={name} className="text-center">
              <div className="mb-3 aspect-square bg-white p-2">
                <div className="flex h-full items-center justify-center font-display text-2xl italic text-blue-primary">
                  {name.split(" ")[0]}
                </div>
              </div>
              <div className="text-sm font-medium text-blue-primary">{name}</div>
            </div>
          ))}
        </div>

        <div className="grid bg-white md:grid-cols-2">
          <div className="h-full min-h-64 bg-linear-to-br from-off-white to-blue-light" />
          <div className="flex flex-col justify-center gap-4 px-8 py-8">
            <h4 className="text-lg font-bold text-blue-primary">L&apos;art du sillage solaire</h4>
            <p className="text-base leading-relaxed text-blue-primary">
              Notre parfumeuse Éléonore a voyagé dans les îles du Pacifique pour
              capturer l&apos;essence de cette collection.
            </p>
            <a href="#journal-solaire" className="text-left text-blue-primary underline">
              Lire le journal →
            </a>
          </div>
        </div>

        <div
          className={`grid gap-4 bg-blue-light p-8 text-center ${
            device === "mobile" ? "grid-cols-1" : "grid-cols-3"
          }`}
        >
          {[
            "Livraison offerte des 80EUR",
            "Échantillons offerts",
            "Fabriqué en France",
          ].map((item) => (
            <div key={item} className="text-sm text-blue-primary">
              <div className="mb-2 text-3xl text-blue-primary">✦</div>
              <p>{item}</p>
            </div>
          ))}
        </div>

        <div className="border-t border-blue-primary/10 bg-off-white px-8 py-12 text-center">
          <Image
            src="/logo_vec.svg"
            alt="Comptoir Sud Pacifique"
            width={220}
            height={42}
            className="mx-auto mb-6 h-10 w-auto"
          />
          <p className="mx-auto max-w-xl text-base leading-relaxed text-blue-primary">
            Depuis 1974, Comptoir Sud Pacifique célèbre l&apos;esprit du voyage à
            travers des parfums inspirés des confins du monde.
          </p>
        </div>

        <div
          className={`grid gap-8 bg-blue-primary px-8 pt-12 pb-8 text-sm leading-relaxed text-white ${
            device === "mobile" ? "grid-cols-1" : "grid-cols-2"
          }`}
        >
          <div>
            <div className="mb-3 text-[11px] font-semibold tracking-widest uppercase text-white/70">
              Maison
            </div>
            <strong>Comptoir Sud Pacifique</strong>
            <br />
            34 Place du Marché Saint-Honoré
            <br />
            75001 Paris
          </div>
          <div>
            <div className="mb-3 text-[11px] font-semibold tracking-widest uppercase text-white/70">
              Contact & Boutiques
            </div>
            contact@comptoir-sud-pacifique.com
            <br />
            +33 (0)1 44 86 07 81
          </div>
          <div className="col-span-full mt-4 border-t border-white/20 pt-6 text-center text-xs text-white/70">
            Comptoir Sud Pacifique © 2026
          </div>
        </div>
      </div>
    </div>
  );
}
