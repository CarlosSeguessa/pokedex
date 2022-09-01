import React from 'react'

const Pokemones = () => {
    return (
        <>
            <main className='grid gap-1 grid-cols-3 auto-rows-max mt-[16px] px-[16px]'>
                <div className='flex flex-col w-[117px] h-[122px] bg-[#FFFFFF] border-[1px] border-solid border-[#B8B8B8] rounded-lg'>
                    <div className='w-full flex justify-end pr-2'>
                        <p>#Id</p>
                    </div>
                    <div className='w-full flex justify-center items-center'>
                        <img className='w-[72px] h-[72px]' src="/img/bulbasaur.png" alt="Pokemon"/>
                    </div>
                    <div className='w-full bg-[#B8B8B8]'>
                        <p className='text-center text-white'>Name</p>
                    </div>
                </div>
                <div className='flex flex-col w-[117px] h-[112px] bg-[#FFFFFF] border-[1px] border-solid border-[#B8B8B8] rounded-lg'>
                    <div className='w-full flex justify-end pr-2'>
                        <p>#Id</p>
                    </div>
                    <div className='w-full flex justify-center items-center'>
                        <img className='w-[72px] h-[72px]' src="/img/bulbasaur.png" alt="Pokemon"/>
                    </div>
                </div>
                <div className='flex flex-col w-[117px] h-[112px] bg-[#FFFFFF] border-[1px] border-solid border-[#B8B8B8] rounded-lg'>
                    <div className='w-full flex justify-end pr-2'>
                        <p>#Id</p>
                    </div>
                    <div className='w-full flex justify-center items-center'>
                        <img className='w-[72px] h-[72px]' src="/img/bulbasaur.png" alt="Pokemon"/>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Pokemones;