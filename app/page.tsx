'use client';
import Image from 'next/image';
import WebButton from './components/webbutton';
import LinkButton from './components/linkbutton';
import Scene from './components/scene';

import { useEffect, useState } from 'react';
import useWebGL from './hooks/useWebGL';

export default function Home() {
  const hasWebGL = useWebGL();

  return (
    <div className="relative flex h-full w-full bg-linear-to-b from-gray-100 via-gray-200 via-90% to-sky-100 bg-fixed font-[family-name:var(--font-geist-sans)]">
      <div className="flex h-max w-full flex-col items-center">
        <div className="aspect-[3.2] w-full max-w-screen-lg overflow-visible sm:aspect-[2.5] md:aspect-[2]">
          {hasWebGL ? (
            <div className="relative flex aspect-[1] w-full items-center justify-center mask-b-from-85% mask-b-to-100% text-gray-400 md:aspect-[1.5]">
              <Scene />
            </div>
          ) : (
            <div className="flex aspect-[1] w-full items-center justify-center mask-b-from-85% mask-b-to-100% md:aspect-[1.5]">
              <h1 className="animate-fade-in text-8xl tracking-widest text-gray-600 opacity-0 [animation-delay:1000ms]">
                hello<b className="text-sky-300">_</b>
              </h1>
            </div>
          )}
        </div>

        <div className="flex h-max w-full max-w-screen-md flex-col">
          <div className="animate-fade-in static z-[1] flex flex-col items-center justify-center gap-8 p-12 opacity-0 md:flex-row md:gap-12">
            <div className="relative rounded-full shadow-xl">
              <Image
                alt="Thanathon Holm"
                src={`/thanathon.jpeg`}
                width={192}
                height={192}
                className="size-36 shrink rounded-full bg-gray-300 sm:size-48"
                priority
              />
              <div className="absolute inset-0 rounded-full shadow-[inset_2px_2px_1px_0_rgba(255,255,255,0.5),inset_-1px_-2px_2px_1px_rgba(37,171,255,0.5)] blur-[2px]" />
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="max-w-96">
                My name is <b>Thanathon Holm</b>. I am a Software Developer with passion in Graphic Design,
                currently working at Telenor Norge AS.
              </h2>
            </div>
          </div>

          <div className="animate-fade-in flex flex-col items-start justify-center gap-6 p-8 opacity-0 [animation-delay:500ms]">
            <h3 className="text-xl font-bold">My Works</h3>
            <div className="flex flex-col items-stretch justify-center gap-6 sm:flex-row">
              <WebButton link="https://try.microchip.com">
                <div className="justify-beween flex w-full items-center gap-2">
                  <span>Microchip Try</span>
                  <span className="text-xs text-gray-500">2022-2025</span>
                </div>
                <span className="text-xs text-gray-500">
                  Main Front-end Engineer, UI/UX Designer, and Graphic Designer
                </span>
                <img src={`/preview_try.png`} alt="Microchip Try Preview" className="rounded-xl" />
              </WebButton>

              <WebButton link="https://propulse.no">
                <div className="justify-beween flex w-full items-center gap-2">
                  <span>Propulse NTNU</span>
                  <span className="text-xs text-gray-500">2021-2022</span>
                </div>
                <span className="text-xs text-gray-500">Web Founder and Graphic Designer</span>
                <img src={`/preview_propulse.png`} alt="Propulse Preview" className="rounded-xl" />
              </WebButton>
            </div>
          </div>

          <div className="animate-slide-in sticky bottom-0 z-10 flex [transform:translateY(100%)] items-center justify-center gap-4 p-8 [animation-delay:1000ms]">
            <LinkButton link={`/thanathon_resume.pdf`}>
              <div className="size-6 shrink-0">
                <svg
                  id="uuid-51b60f18-28cb-4480-9f16-9089a9a83009"
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 273.845 279.792"
                  width="100%"
                  height="100%"
                >
                  <path
                    fill="current"
                    d="M253.845,165.75c-11.046,0-20,8.954-20,20v54.042H40v-54.042c0-11.046-8.954-20-20-20S0,174.704,0,185.75v74.042c0,11.046,8.954,20,20,20h233.845c11.046,0,20-8.954,20-20v-74.042c0-11.046-8.954-20-20-20Z"
                  />
                  <path
                    fill="current"
                    d="M121.619,212.157c3.8,4.516,9.401,7.123,15.303,7.123s11.503-2.607,15.304-7.123l65.815-78.22c7.111-8.452,6.024-21.068-2.427-28.18-8.453-7.113-21.068-6.025-28.181,2.427l-30.512,36.262V20c0-11.046-8.954-20-20-20s-20,8.954-20,20v124.447l-30.512-36.262c-7.11-8.453-19.729-9.539-28.18-2.427-8.452,7.111-9.539,19.728-2.427,28.18l65.815,78.22Z"
                  />
                </svg>
              </div>
              <span className="hidden sm:inline">Resume</span>
            </LinkButton>
            <LinkButton link="https://www.linkedin.com/in/thanathon/">
              <div className="size-6 shrink-0">
                <svg
                  id="uuid-3d23bace-fd13-462a-a6fa-f4556e3741b4"
                  data-name="LinkedIn"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 300 300"
                  width="100%"
                  height="100%"
                >
                  <path
                    d="M258.333,0H41.667C18.667,0,0,18.667,0,41.667v216.667c0,23,18.667,41.667,41.667,41.667h216.667c23.042,0,41.667-18.667,41.667-41.667V41.667c0-23-18.625-41.667-41.667-41.667ZM90.708,258.333h-44.709V113.875h44.709v144.458ZM68.125,94.958c-14.583,0-26.458-11.917-26.458-26.625s11.875-26.667,26.458-26.667,26.458,11.917,26.458,26.667-11.833,26.625-26.458,26.625ZM258.333,258.333h-44.5v-75.833c0-20.792-7.917-32.417-24.375-32.417-17.875,0-27.25,12.083-27.25,32.417v75.833h-42.875V113.875h42.875v19.458s12.917-23.875,43.583-23.875,52.542,18.708,52.542,57.417v91.458Z"
                    fill="current"
                  />
                </svg>
              </div>
              <span className="hidden sm:inline">LinkedIn</span>
            </LinkButton>
            <LinkButton newTab={false} link="mailto:nucleus-keel-0b@icloud.com">
              <div className="flex size-6 shrink-0 items-center">
                <svg
                  id="uuid-b0555c11-71f6-4df7-8d77-e4967e93cba1"
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 300 225"
                  width="100%"
                  height="100%"
                >
                  <path
                    fill="currentColor"
                    d="M262.5,0H37.5C16.8,0,0,16.8,0,37.5v150c0,20.7,16.8,37.5,37.5,37.5h225c20.737,0,37.5-16.8,37.5-37.5V37.5c0-20.7-16.763-37.5-37.5-37.5ZM266.587,38.775l-108.637,108.6c-2.175,2.213-5.062,3.3-7.95,3.3-2.85,0-5.738-1.087-7.95-3.3L33.45,38.775c-3.225-3.225-4.2-8.063-2.475-12.263,1.762-4.2,5.85-6.937,10.425-6.937h217.237c4.538,0,8.662,2.737,10.388,6.937,1.763,4.2.788,9.038-2.438,12.263Z"
                  />
                  <polygon
                    fill="currentColor"
                    points="150 123.525 231.487 42.075 68.55 42.075 150 123.525"
                  />
                </svg>
              </div>
              <span className="hidden sm:inline">Contact</span>
            </LinkButton>
          </div>

          <div className="divite-gray-300 flex justify-center divide-x p-8 text-sm text-gray-700">
            <span className="px-2">© 2026 Thanathon Holm</span>

            <a
              href="https://github.com/thanathon-tn"
              target="_blank"
              className="px-2 underline"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
