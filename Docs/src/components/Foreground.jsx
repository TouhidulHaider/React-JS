import React from 'react'
import Card from './Card'
import { useRef } from 'react';

function Foreground() {
  const ref = useRef(null); 

  const data = [
    {
      desc: "This is the data that will be displayed on the card1.",
      fileSize: ".9mb",
      download: true,
      tag: {isAvailable: true, tagTitle: "Download Now", tagColor: "green"}
    },
    {
      desc: "This is the data that will be displayed on the card2.",
      fileSize: ".4mb",
      download: false,
      tag: {isAvailable: false, tagTitle: "Not Available", tagColor: "red"}
    },
    {
      desc: "This is the data that will be displayed on the card2.",
      fileSize: ".5mb",
      upload: true,
      tag: {tagTitle: "Upload Now", tagColor: "blue"}
    }
  ];

  return (
    <div ref={ref} className='fixed z-[3] top-0 left-0 w-full h-full flex gap-5 flex-wrap p-5'>
        {data.map((item, index) => (
          <Card data={item} reference={ref} />
        ))}
    </div>
  )
}

export default Foreground