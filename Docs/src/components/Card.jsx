import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { MdOutlineFileUpload } from "react-icons/md";
import { LuDownload } from "react-icons/lu";
import { motion } from "framer-motion"

function Card({data, reference}) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.1}} dragElastic={.1} dragTransition={{ bounceStiffness: 600, bounceDamping: 30 }} className='relative w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden'>
        <FaRegFileAlt />
        <p className='text-sm leading-tight font-semibold mt-5'>{data.desc}</p>
        <div className='footer absolute bottom-0 w-full left-0'>
            <div className='flex items-center justify-between px-8 py-3 mb-3'>
                <h5>{data.fileSize}</h5>
                <span className='w-10 h-8 bg-zinc-700 rounded-full flex items-center justify-center'>
                    {data.upload ? <MdOutlineFileUpload size="1.2em"/> : (data.download ? <LuDownload size="1.2em"/> : <IoCloseSharp size="1.2em"/>)}
                </span>
            </div>
            {data.isAvailable ? (
                <div className='tag w-full p-4 flex items-center justify-center' style={{backgroundColor: data.tag.tagColor}}>
                    <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
                </div>) : (
                <div className='tag w-full p-4 flex items-center justify-center' style={{backgroundColor: data.tag.tagColor}}>
                    <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
                </div>)}
        </div>
    </motion.div>
  )
}

export default Card