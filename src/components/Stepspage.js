import React from 'react'

export const Stepspage = () => {
    return (

        <div className='max-h-screen-xs my-11 container mx-auto'>
            <div className=' flex flex-col md:flex-row xs:gap-[7rem] sm:gap-[1rem] sm:px-12 xs:px-6  '>
                <div className='md:w-1/2 '>
                    <img className='' src='../image/mob.png' alt='outercase' />
                </div>

                <div className=' md:w-1/2  container flex flex-col mx-auto  max-w-screen-lg  '>
                    <h2 className=' m-[2rem]  bg-blue-700 text-white font-bold  xs:text-2xl sm:text-2xl lg:text-3xl xl:text-4xl'> Simple Steps How to <br /> Buy Phantom</h2>
                    <div className="text-left  px-12 mx-auto max-w-screen-xl ">

                        <ol className='text-white'>
                            <div className='flex gap-4'>
                                <div >
                                    <img src='../image/Vector.jpg' alt='vector' className='h-5 sm:w-8 md:w-[6rem] xs:w-[6rem] lg:w-8 rounded-full mt-2 bg-black' />
                                </div>
                                <div>
                                    <h1 className=' font-bold text-lg md:text-1xl lg:text-2xl'>1. DOWNLOAD METAMASK</h1>
                                    <p className='font-normal text-xs md:text-xs lg:text-sm my-4'>   We recommend to use wallet wallet that can be installed as a Chrome extension or downloaded as a mobile application. for this tutorial we’re using Metamask.</p>
                                </div>
                            </div>
                            <div className=' mt-3 flex gap-4'>
                                <div >
                                    <img src='../image/Vector.jpg' alt='vector' className='h-5 sm:w-6 md:w-[6rem] xs:w-[5rem] lg:w-6  rounded-full mt-2 bg-black' />
                                </div>
                                <div>
                                    <h1 className=' font-bold text-lg md:text-1xl lg:text-2xl'>2. CONFIGURE FOR THE FTM NETWORK</h1>
                                    <p className='font-normal text-xs md:text-xs lg:text-sm my-4'>  Configure MetaMask to work with FTM, meaning we can trade Binance Coin (BNB) for FarmerDoge using MetaMask</p>
                                </div>
                            </div>
                            <div className='mt-3 flex gap-4'>
                                <div >
                                    <img src='../image/Vector.jpg' alt='vector' className='h-5 sm:w-8 md:w-[6rem] xs:w-[6rem] lg:w-8  rounded-full mt-2 bg-black' />
                                </div>
                                <div>
                                    <h1 className=' font-bold text-lg md:text-1xl lg:text-2xl'>3. BUY SOME FANTOM (FTM)</h1>
                                    <p className='font-normal text-xs md:text-xs lg:text-sm my-4'>   add some BNB and begin trading. Head to any exchange you are registered to(Coinbase, kucoin, binance, kraken) and purchase BNB using your native currency</p>
                                </div>
                            </div>
                            <div className='mt-3 flex gap-4'>
                                <div >
                                    <img src='../image/Vector.jpg' alt='vector' className='h-5 sm:w-9 md:w-[6rem] xs:w-[6rem] lg:w-9  rounded-full mt-2 bg-black' />
                                </div>
                                <div>
                                    <h1 className=' font-bold text-lg md:text-1xl lg:text-2xl'>4. META MASK</h1>
                                    <p className='font-normal text-xs md:text-xs lg:text-sm my-4'>  Open up your MetaMask wallet and copy your wallet address –<br /> you can find this underneath your account name, it will start with "0x". Head to your exchange
                                        and withdraw your BNB to your MetaMask wallet address. Send on the BEP20 network.</p>
                                </div>
                            </div>
                            <div className='mt-3 flex gap-4'>
                                <div >
                                    <img src='../image/Vector.jpg' alt='vector' className='h-5 sm:w-7 md:w-[6rem] xs:w-[6rem] lg:w-9  rounded-full mt-2 bg-black' />
                                </div>
                                <div>
                                    <h1 className=' font-bold text-lg md:text-1xl lg:text-2xl'>5. TRADE YOUR FTM FOR PHANTOM</h1>
                                    <p className='font-normal text-xs md:text-xs lg:text-sm my-4'>   Go to poocoin using the buy now button below. Farmerdoge is already selected by default.
                                        Connect your wallet by using the “Connect” button in the top right hand corner.<br /> Then push trade. Ensure the "Auto slippage" button is green and then input the number of BNB you would like to trade and hit swap.
                                    </p>
                                </div>
                            </div>

                        </ol>

                    </div>
                </div>
            </div>
            <div className='mt-12'>
                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm px-12 py-2.5 text-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">BUY NOW</button>
            </div>

        </div>
    )
}
