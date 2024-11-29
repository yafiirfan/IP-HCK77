import React from 'react'
import { useSelector } from 'react-redux'

const Card = ({data, trending, index}) => {
    const imageUrl = useSelector(state=> state.movieoData.imageUrl)
  return (
    <div className='w-full max-w-[230px] h-80 overflow-hidden rounded relative'>
        <img src={imageUrl+data.poster_path}/> 
        <div className='absolute top-4'>
        {
            trending && (
                <div className='py-1 px-4 backdrop-blur-3xl bg-black/40 overflow-hidden'>
                    # {index} Trending
                </div>
            )
        }
        <div className='absolute bottom-0 h-16'>
            
        </div>
        </div>
    </div>
  )
}

export default Card