import Image from 'next/image';
import React from 'react'
import { ThumbUpIcon } from '@heroicons/react/outline';
import { forwardRef } from 'react';

const Thumbnail = (({data}, ref) => {

    let {
        first_air_data,
        backdrop_path,
        overview,
        title,
        vote_count,
        poster_path,
        original_name,
        release_date,
    } = data;

    return (
        <div ref={ref} className="group transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50 cursor-pointer p-2">
            <Image
                src={`https://image.tmdb.org/t/p/original/${backdrop_path || poster_path} `}
                alt={`${title}`}
                width={1920}
                height={1080}
                className="transition"/>
            <div className='p-2'>
                <p className='truncate max-w-md'>{overview}</p>
                <h2 className='mt-1 text-lg text-white transition-all duration-100 ease-in-out group-hover:font-semibold'>{title || original_name}</h2>
                <p className='flex items-center gap-2 opacity-0 group-hover:opacity-100 transition'>{release_date || first_air_data}
                    <ThumbUpIcon className='h-5 ml-2'/> {vote_count}
                </p>

            </div>
        </div>
    );
})

Thumbnail.displayName = "Thumbnail"

export default Thumbnail
