import React from 'react'

export const Third = () => {
    return (
        <div className="flex flex-col mx-auto md:py-12 py-9 items-center justify-center px-4 md:px-6">
            <div >
                <h3 className="font-semibold  md:text-2xl lg:text-4xl text-xl text-center">Act Before it’s too late!</h3>
                <p className="font-normal text-sm md:text-base text-center md:px-28 md:py-5  py-4">It is a long established fact that a reader will be distracted by the readable content. </p>
            </div>
            <div className="py-4 flex flex-wrap xs-screen gap-3 mx-auto items-center lg:nowrap ">
                <img src="./img/chair-third.png" alt="chair"  className="third-phone md:third-phone2 lg:third-phone3 "  />
                <img src="./img/table-third.png" alt="table" className="third-phone md:third-phone2 lg:third-phone3 "  />
                <img src="./img/third-third.png" alt="chair-table"  className="third-phone md:third-phone2 lg:third-phone3 " />
            </div>
            <button className="border border-black w-32 h-10 text-sm font-normal flex items-center justify-center gap-2 self-center">Explore <img src="./img/Frame.png" alt="arrow" /> </button>
        </div>
    )
}
