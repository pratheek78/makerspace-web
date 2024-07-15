import React from 'react'
import { Spotlight } from './ui/spotlight'
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from './ui/MagicButton';
import { RxRulerSquare } from "react-icons/rx";



const Adj = ['Tinker', 'Build', 'Play']


const Hero = () => {

  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white"/>
        <Spotlight className="top-10 left-full h-[80vh] h-[50vw]" fill="purple"/>
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue"/>
      </div>

{/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Tinker, Build, Play
          </p>

          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}
          <TextGenerateEffect
            words="MakerSpace CFAL" className="text-center text-[40px] md:text-5xl lg:text-6xl"/>
            
          

          <p className="text-center md:tracking-wider mb-4 text-s md:text-lg lg:text-2xl pt-[10vh] text-blue-100/[0.7]">
          CFAL Makerspace is an extracurricular club at CFAL where students can engage in hands-on projects and creative activities. With a membership of 60 students, our makerspace offers opportunities to work on projects in areas such as electronics, robotics, woodworking, and 3D printing. We provide a supportive environment for students to explore their interests, develop practical skills, and bring their ideas to life, whether for personal projects, academic pursuits, or extracurricular interests
          </p>

          <a href="#projects">
            <MagicButton
              icon={<RxRulerSquare />}
              title="Our Projects"
              position="right"
            />
          </a>

          <TextGenerateEffect
            words="Unlock your Inner Maker, Innovator and entrepreneur" className="text-center text-[40px] md:text-5xl lg:text-4.5xl"/>

        
        </div>
      </div>
        
    </div>
    
  )
}

export default Hero