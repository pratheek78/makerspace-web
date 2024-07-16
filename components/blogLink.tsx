import React from 'react'
import { projects } from '@/data'
import { PinContainer } from './ui/3d-pin'

const BlogLink = () => {
  return (
    <div className="py-20">
        <h1 className="heading">
            Visit our {' '}
            <span className='text-purple'>Blog Site!</span>
        </h1>

        <div className="h-[40rem] w-full flex items-center justify-center ">
            <PinContainer
                title="Visit our Blog Site!"
                href="https://makeatcfalblog.free.nf/"
            >
                    <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                        <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                            The CFAL Makerspace Blog
                        </h3>
                        <div className="text-base !m-0 !p-0 font-normal">
                            <span className="text-slate-500 ">
                            Add this description later
                            </span>
                        </div>
                    <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
                </div>
            </PinContainer>
        </div>
        
        
    </div>
    
  )
}

export default BlogLink




{/* <div className='flex flex-wrap items-center
        justify-center p-4 gap-16 mt-10'>

            {projects.map(({id, title, des, img, iconLists, link}) => (
                <div key={id} className='lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]'>
                    <PinContainer title={title} href={link} >
                        <div>
                            <div>
                                <img src=""/>
                            </div>
                        </div>
                    </PinContainer>
                </div>
            ))}

        </div> */}