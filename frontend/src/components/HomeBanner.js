import React from 'react';

const HomeBanner = () => {
    return (
        <div className='relative'>
            <img
                src='https://res.cloudinary.com/deukdbm09/image/upload/v1716866197/emzraxvkmkhjhkkabyac.png'
                className='w-full h-auto'
                alt='Banner'
            />
            <div className='absolute inset-0 flex items-center customText  bg-black bg-opacity-50'>
                <div className='hidden lg:block  pl-16' >A Premium <br /> and Authentic <br /> Vegan House</div>
                <div className='block sm:hidden mt-20 mx-auto' >A Premium and Authentic Vegan House</div>
            </div>
        </div>
    );
}

export default HomeBanner;
