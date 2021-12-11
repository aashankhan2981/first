import React from 'react'

export const Positioning = () => {
    
      let  style = {
        backgroundImage: "url(' /img/bag2.png ')",
      }
    return (
        // relative practice
        // <div className='flex flex-col   items-center justify-center'>
        //     <img src="./img/bag2.png" className=' md:max-w-xs lg:max-w-sm' alt="bag" />
        //     <div className='relative bottom-16 '>
        //     <h3>Backpack</h3>
        //     <h3>New branded</h3>
        //     </div>
        // </div>
        <div className='w-full h-screen bg-gradient-to-b from-blue-200 via-white to-blue-50 '  > 
            {/* <div className='w-screen h-10 bg-green-500 sticky top-0'></div> */}
            {/* <div className="max-w-xs bg-gray-600 flex justify-center items-center"> */}
                {/* <img src="./img/pic.png" className='relative top-3' alt="headphones" /> */}
            {/* </div> */}
            {/* practicing fixed */}
            {/* <img src="./img/fb.png" className='fixed bottom-3 right-4' alt="fb-icon" /> */}
            {/* sticky */}
            
            {/* z index */}
            {/* by default sbse nechy pehla div hai lekin agar me isko z-index 1 dedo tu phir ye sbse */}
            {/* uper agaye ga default me har element ka z index 0 hota hai */}
            {/* <div className='w-24 bg-red-500 absolute left-4 z-10'>1</div>
            <div className='w-24 absolute bg-yellow-300 top-3 z-20 left-20'>2</div>
            <div className='w-24 absolute bg-green-700 top-6 left-36'>3</div> */}
        </div>
    )
}
//tu relative me chezy apni old position ke relatively move karty hai top bottom se
        //absolute me agar uska parent div static hoga tu viewport ke hisab se adjust hoga top bottom
        // waghera se jo bhi hum de
        // lekin agar parent div static na hu relative hu tab under wala div jisse absolute banaya hai
        // wo ab is div ko apna parent manke iske hisab se adjust hoga
        // fixed me hamseha viewport ke hisab se hota hai chahy parent div jo bhi hu
        // <div className='w-80 h-80 bg-gray-900  mx-auto my-20'>
        // <div className='w-80 h-80 bg-gray-900 relative mx-auto my-20'>
        {/* <div className='w-80 h-80 bg-gray-900 absolute mx-auto my-20'> */}
            {/* <div className="w-20 h-20 bg-red-700"></div> */}
            {/* <div className='w-20 h-20 bg-yellow-400 relative bottom-10'></div> */}
            {/* <div className='w-20 h-20 bg-yellow-400 absolute bottom-0'></div> */}
        // </div>