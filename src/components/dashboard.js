import React from 'react'

 export default function Dashboard  () {
  return (
    <div>
        <main className=" mt-8 pt-8 pb-16 lg:pt-16 lg:pb-24 dark:bg-gray-900">
  <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
      <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
          <header className=" lg:mb-6 not-format">
          <h4 className='text-blue-600 text-md sm:text-2xl font-bold  md:tracking-widest leading-9 '>PHANTOM COIN</h4>
            <h1 className=' text-2xl sm:text-4xl text-white myfont  font-extrabold tracking-widest leading-9 my-3 '>DASHBOARD</h1>
          </header>
          <p className='text-white p-9'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br/>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
       </article>
       </div>
       </main>

    </div>
  )
}
