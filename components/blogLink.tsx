"use client";
import React from 'react'
import { CardItem, CardBody, CardContainer } from './ui/3d-card';
import Link from 'next/link';
import Image from 'next/image';
import { Meteors } from './ui/meteors';


export function BlogLink() {
  return (
    <div className="py-20" id="blog">
        <h1 className="heading">
            Visit our {' '}
            <span className='text-purple'>Instagram!</span>
        </h1>

    <CardContainer className="inter-var overflow-hidden">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >  
          Our Instagram
          <Meteors number={20} />
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Visit our Instagram Page Using the Button below
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4" as={Link} href="https://www.instagram.com/makeatcfal/" target="__blank">
          <Image
            src="/grad.jpg"
            height="1000"
            width="1000"
            className="h-60 pt-1 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
          
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href="https://www.instagram.com/makeatcfal/"
            target="__blank"
            className="px-4 py-2 rounded-xl text-s font-normal dark:text-white"
          >
            Click Here to Visit
          </CardItem>
          
          
        </div>
      </CardBody>
      
    </CardContainer>
        
        
     </div>
    
  )
}





// Important do not delete:
// <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />



