import React from 'react'
import { Subfouth } from './Subfouth'

export const Fourth = () => {
    return (
        <div className="bg-white py-9 md:py-12 pl-4 pr-5 lg:py-20 lg:flex lg:justify-center lg:items-center">
           <div className="flex flex-col items-center justify-center ">
            <h1 className="text-xl md:text-2xl  text-center lg:text-left font-bold pb-4">Join Our Mailing List</h1>   
            <p className="text-center md:text-left text-sm md:text-base font-normal pb-4 md:px-44 lg:px-20 lg:pb-9 ">Subscribe to your newsletter to stay in the loop. Our newsletter is sent once in a week on every friday to get latest news and updates. </p>
            <div className="flex justify-end  items-center w-full md:w-8/12 mb-5">
            <button className="bg-gray-800  absolute font-normal text-base text-white w-1/3 md:w-1/6 lg:w-1/12 h-10 mr-2" >Subscribe</button>
            <div className="w-full flex justify-center items-center  ">
            <input type="text" placeholder="Enter your Email " className="text-xs outline-none border border-gray-200 h-12 w-full flex justify-center pl-4   "  />
            </div>
            </div>
            </div> 

            <div className="flex flex-col md:grid md:grid-cols-2 md:gap-x-40 lg:gap-x-8 lg:gap-y-11 md:gap-y-6 ">
                <Subfouth source="./img/fb.png" heading="Facebook" content="Dolor sit amet, consectetur adipi elit. auctor nunc tristique semper at eget sit" margin="pt-4"  />
                <Subfouth source="./img/twitter.png" heading="Facebook" content="Dolor sit amet, consectetur adipi elit. auctor nunc tristique semper at eget sit"  margin="pt-4"  />
                <Subfouth source="./img/youtube.png" heading="Facebook" content="Dolor sit amet, consectetur adipi elit. auctor nunc tristique semper at eget sit"  margin="pt-4" />
                <Subfouth source="./img/pintrest.png" heading="Facebook" content="Dolor sit amet, consectetur adipi elit. auctor nunc tristique semper at eget sit" margin="pt-4"  />
            </div>
                
            

        </div>
    )
}
