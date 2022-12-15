import React from 'react'
import requests from '../utils/requests'
import { useRouter } from 'next/router';

const Nav = () => {

    let router = useRouter();

    return (
        <nav className="relative">
            <div
                className="flex px-4 sm:px-14 md:px-20 text-2xl whitespace-nowrap gap-4 sm:gap-6 md:gap-8 lg:gap-12 overflow-x-scroll scrollbar-hide">
                {Object
                    .entries(requests)
                    .map(([
                        key, {
                            title,
                            url
                        }
                    ]) => (
                        <h2
                            key={key}
                            onClick={() => router.push(`/?genre=${key}`)}
                            className="last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500 font-medium">
                            {title}
                        </h2>
                    ))}
            </div>

            <div className='absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12'></div>
        </nav>
    );
}

export default Nav