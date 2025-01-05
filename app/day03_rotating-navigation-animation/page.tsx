'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

export default function Page() {
  const [show, setShow] = useState(false)

  const handleClick = () => {
    setShow((prev) => !prev)
  }

  return (
    <div className="font-lato bg-[#333] overflow-x-hidden text-[#222]">
      <div
        className={`bg-[#fafafa] origin-top-left transition-transform duration-500 ease-linear max-w-full min-h-full p-[50px] ${
          show ? 'rotate-[-20deg]' : ''
        }`}
      >
        <div className="fixed top-[-100px] left-[-100px]">
          <div
            className={`w-[200px] h-[200px] rounded-[50%] bg-[#ff7979] relative transition-transform duration-500 ease-linear ${
              show ? 'rotate-[-70deg]' : ''
            }`}
          >
            <button
              className="absolute top-[50%] left-[63%] h-[100px] border-none text-white text-[26px] bg-transparent"
              onClick={handleClick}
            >
              <i className="fas fa-bars"></i>
            </button>
            <button
              className="absolute top-[63%] left-[50%] h-[100px] border-none bg-transparent text-white text-[26px] origin-top-left rotate-90"
              onClick={handleClick}
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
        </div>
        <div className="max-w-[1000px] my-[50px] mx-auto">
          <h1>Amazing Article</h1>
          <small className="text-[#555] italic">Florin Pop</small>
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            quia in ratione dolores cupiditate, maxime aliquid impedit dolorem
            nam dolor omnis atque fuga labore modi veritatis porro laborum
            minus, illo, maiores recusandae cumque ipsa quos. Tenetur,
            consequuntur mollitia labore pariatur sunt quia harum aut. Eum
            maxime dolorem provident natus veritatis molestiae cumque quod
            voluptates ab non, tempore cupiditate? Voluptatem, molestias culpa.
            Corrupti, laudantium iure aliquam rerum sint nam quas dolor
            dignissimos in error placeat quae temporibus minus optio eum soluta
            cupiditate! Cupiditate saepe voluptates laudantium. Ducimus
            consequuntur perferendis consequatur nobis exercitationem molestias
            fugiat commodi omnis. Asperiores quia tenetur nemo ipsa.
          </p>
          <h3>My Dog</h3>
          <Image
            src="https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=600"
            width={600}
            height={800}
            alt="doggy"
          />
          <p className="text-justify">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit libero
            deleniti rerum quo, incidunt vel consequatur culpa ullam. Magnam
            facere earum unde harum. Ea culpa veritatis magnam at aliquid.
            Perferendis totam placeat molestias illo laudantium? Minus id minima
            doloribus dolorum fugit deserunt qui vero voluptas, ut quia cum amet
            temporibus veniam ad ea ab perspiciatis, enim accusamus asperiores
            explicabo provident. Voluptates sint, neque fuga cum illum, tempore
            autem maxime similique laborum odio, magnam esse. Aperiam?
          </p>
        </div>
      </div>
      <nav className="fixed left-0 bottom-10 z-20">
        <ul className="pl-[30px]">
          <li
            className={`my-10 text-white uppercase transition-transform duration-[400ms] ease-in ${
              show ? 'translate-x-0 delay-300' : 'translate-x-[-100%]'
            }`}
          >
            <i className="fas fa-home text-xl mr-[10px]"></i>
            <Link href="#" className="transition-all duration-500 hover:text-[#ff7979] hover:font-bold">
              Home
            </Link>
          </li>
          <li
            className={`text-white my-10 uppercase transition-transform duration-[400ms] ease-in ml-[15px] ${
              show ? 'translate-x-0 delay-300' : 'translate-x-[-150%]'
            }`}
          >
            <i className="fas fa-user-alt text-xl mr-[10px]"></i>
            <Link href="#" className="transition-all duration-500 hover:text-[#ff7979] hover:font-bold">
              About
            </Link>
          </li>
          <li
            className={`uppercase text-white my-10 transition-transform duration-[400ms] ease-in ml-[30px] ${
              show ? 'translate-x-0 delay-300' : 'translate-x-[-200%]'
            }`}
          >
            <i className="fas fa-envelope text-xl mr-[10px]"></i>
            <Link href="#" className="transition-all duration-500 hover:text-[#ff7979] hover:font-bold">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
