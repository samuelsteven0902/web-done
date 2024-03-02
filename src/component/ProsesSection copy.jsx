import React from 'react'
import { useEffect } from 'react'
import {
    Stepper,
    initTE,
  } from "tw-elements";

function ProsesSection() {
    useEffect(() => {
        initTE({ Stepper });
    }, [])
    
  return (
    <div className='bg-black h-screen text-white'>
        <div className='text-white flex flex-col items-center py-24 text-4xl'>
            <p>Gak Usah Pusing Buat </p>
            <p>Bisnis Kamu Menajdi Online </p>
        </div>
        
        <ul
        data-te-stepper-init
        className="relative m-0 flex list-none justify-between overflow-hidden p-0 transition-[height] duration-200 ease-in-out mx-12">
        <li
            data-te-stepper-step-ref
            data-te-stepper-step-active
            className="w-[4.5rem] flex-auto">
            <div
            data-te-stepper-head-ref
            className="flex cursor-pointer items-center pl-2 leading-[1.3rem] no-underline after:ml-2 after:h-px after:w-full after:flex-1 after:bg-[#e0e0e0] after:content-[''] hover:bg-[#726dd4]  focus:outline-none dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]">
            <span
                data-te-stepper-head-icon-ref
                className="my-6 mr-2 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]">
                1
            </span>
            <span
                data-te-stepper-head-text-ref
                className="font-medium text-neutral-500 after:flex after:text-[0.8rem] after:content-[data-content] dark:text-neutral-300">
                Konsultasi
            </span>
            </div>
            <div
            data-te-stepper-content-ref
            className="absolute text-white w-full p-4 transition-all duration-500 ease-in-out">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
        </li>

        <li data-te-stepper-step-ref className="w-[4.5rem] flex-auto">
            <div
            data-te-stepper-head-ref
            className="flex cursor-pointer items-center leading-[1.3rem] no-underline before:mr-2 before:h-px before:w-full before:flex-1 before:bg-[#e0e0e0] before:content-[''] after:ml-2 after:h-px after:w-full after:flex-1 after:bg-[#e0e0e0] after:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:before:bg-neutral-600 dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]">
            <span
                data-te-stepper-head-icon-ref
                className="my-6 mr-2 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]">
                2
            </span>
            <span
                data-te-stepper-head-text-ref
                className="text-neutral-500 after:flex after:text-[0.8rem] after:content-[data-content] dark:text-neutral-300">
                Fitur
            </span>
            </div>
            <div
            data-te-stepper-content-ref
            className="absolute text-white left-0 w-full translate-x-[150%] p-4 transition-all duration-500 ease-in-out">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
            </div>
        </li>

        <li data-te-stepper-step-ref className="w-[4.5rem] flex-auto">
            <div
            data-te-stepper-head-ref
            className="flex cursor-pointer items-center pr-2 leading-[1.3rem] no-underline before:mr-2 before:h-px before:w-full before:flex-1 before:bg-[#e0e0e0] before:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:before:bg-neutral-600 dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]">
            <span
                data-te-stepper-head-icon-ref
                className="my-6 mr-2 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]">
                3
            </span>
            <span
                data-te-stepper-head-text-ref
                className="text-neutral-500 after:flex after:text-[0.8rem] after:content-[data-content] dark:text-neutral-300">
                Design
            </span>
            </div>
            <div
            data-te-stepper-content-ref
            className="absolute text-white left-0 w-full translate-x-[150%] p-4 transition-all duration-500 ease-in-out">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
            </div>
        </li>
        <li data-te-stepper-step-ref className="w-[4.5rem] flex-auto">
            <div
            data-te-stepper-head-ref
            className="flex cursor-pointer items-center pr-2 leading-[1.3rem] no-underline before:mr-2 before:h-px before:w-full before:flex-1 before:bg-[#e0e0e0] before:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:before:bg-neutral-600 dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]">
            <span
                data-te-stepper-head-icon-ref
                className="my-6 mr-2 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]">
                4
            </span>
            <span
                data-te-stepper-head-text-ref
                className="text-neutral-500 after:flex after:text-[0.8rem] after:content-[data-content] dark:text-neutral-300">
                Selesai
            </span>
            </div>
            <div
            data-te-stepper-content-ref
            className="absolute text-white left-0 w-full translate-x-[150%] p-4 transition-all duration-500 ease-in-out">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
            </div>
        </li>
        <li data-te-stepper-step-ref className="w-[4.5rem] flex-auto">
            <div
            data-te-stepper-head-ref
            className="flex cursor-pointer items-center pr-2 leading-[1.3rem] no-underline before:mr-2 before:h-px before:w-full before:flex-1 before:bg-[#e0e0e0] before:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:before:bg-neutral-600 dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]">
            <span
                data-te-stepper-head-icon-ref
                className="my-6 mr-2 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]">
                5
            </span>
            <span
                data-te-stepper-head-text-ref
                className="text-neutral-500 after:flex after:text-[0.8rem] after:content-[data-content] dark:text-neutral-300">
                Maintanance
            </span>
            </div>
            <div
            data-te-stepper-content-ref
            className="absolute text-white left-0 w-full translate-x-[150%] p-4 transition-all duration-500 ease-in-out">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
            </div>
        </li>



        </ul>

        <div className='flex justify-center mt-24'>
            <button className='bg-emerald-400 rounded-full py-3 px-10 text-black'>
                Buat Sekarang 
            </button>
        </div>

    </div>
  )
}

export default ProsesSection