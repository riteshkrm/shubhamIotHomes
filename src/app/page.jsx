"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "../components/ui/Spotlight";
import { BackgroundVideo } from "@/components/BackgroundVideo";
import Image from "next/image";

export function SpotlightPreview() {
  return (
    <>
      <div
        id="hero"
        className="relative flex h-[40rem] w-full overflow-hidden rounded-md  antialiased md:items-center md:justify-center"
      >
        <BackgroundVideo/>
        <Spotlight
          className="-top-60 left-0 md:-top-20 md:left-60"
          fill="#FFD700"
        />

        <div className="relative z-10 mx-auto w-full max-w-7xl p-4 pt-20 md:pt-0">
          <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-300 bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl">
            Welcome <br /> to Our Website
          </h1>
          <p className="mx-auto mt-4 max-w-5xl text-center text-xl font-bold text-yellow-200">
            Now, your home will be truly smart—everything is right at your
            fingertips. You can control lights, AC, fans, and curtains directly
            from your phone or even with your voice. Even when you’re not at
            home, you’ll still have full control, helping you save on
            electricity bills. The moment you open the door and step inside, the
            lights will turn on automatically, making life easier for children
            and elders. This technology makes your home not only interactive but
            also impressive. A house where everything is in your
            control—convenient, efficient, and modern.
          </p>
        </div>
      </div>
    </>
  );
}

export default SpotlightPreview;
