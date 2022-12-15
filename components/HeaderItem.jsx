import React from 'react'

const HeaderItem = ({title, Icon}) => {
    return (
        <div className="flex flex-col cursor-pointer items-center group w-12 sm:w-20 hover:text-white">
            <Icon className="h-8 mb-1 group-hover:animate-bounce transition">{Icon}</Icon>
            <p className='tracking-widest opacity-0 group-hover:opacity-100 transition'>{title}</p>
        </div>
    );
}

export default HeaderItem