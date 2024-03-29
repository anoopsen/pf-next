'use client'

// pages/index.js
import { useEffect, useRef } from "react";
import { mapper } from '@/helper/mapper';
import {getElement} from '@/helper/getEelement'

export default function Home() {
  useEffect(() => {
    const element = getElement('card')
    const cleanup = mapper('card', (object_position:number, rotation_degrees:number)=>{
      element.style.width = object_position + 'px';
      element.style.height = object_position + 'px';
      element.style.transform = 'rotate(' + rotation_degrees + 'deg)';
    });
    return () => cleanup();
  }, []);

  return (
    <main>
      <div id="card"></div>
      <h1>test</h1>
      {/* Add more content if needed */}
    </main>
  );
}
