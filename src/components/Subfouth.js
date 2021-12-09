import React from 'react'

export const Subfouth = ({source,heading,content,margin}) => {
    return (
        <div className={` ${margin   } flex flex-col justify-center md:items-start items-center`}>
            <img src={source} className="phone-fotter md:tablet-footer" alt="icon" />
            <h3 className="font-medium text-base mt-3 mb-4">{heading}</h3>
            <p className="font-normal text-sm text-center md:text-left ">{content}</p>
        </div>
    )
}
