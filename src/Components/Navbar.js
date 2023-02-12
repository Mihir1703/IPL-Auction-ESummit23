import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getData } from '../Util/Data'
import { useParams } from 'react-router-dom'

const Navbar = () => {
    const [data, setData] = useState(undefined)
    const { id } = useParams()
    useEffect(() => {
        if (getData(id) === -1) window.location.replace('/')
        else
            setData(getData(id))
    }, [])
    return (
        <>
            <header className="bg-gray-300 h-[100vh] grid justify-center items-center">
                <div className="bg-gray-200 px-8 py-10 rounded-md grid-cols-2 gap-12 place-self-center flex items-center justify-center">
                    <div className="grid gap-10">
                        <section class="bg-white dark:bg-gray-900 rounded-md">
                            <div class="container px-6 py-6 mx-auto align-middle items-center w-[65vw]">
                                <div className='flex align-middle justify-center'>
                                    <h1 class="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">{data && data[1]}</h1>
                                </div>

                                <div class="grid gap-5 mt-10 grid-cols-3">
                                    {data && data[0].map((item, index) => {
                                        return (<div className='flex align-middle items-center justify-between gap-2'>
                                            <div className="flex justify-center items-center gap-2 m-2">
                                                <h2 class="text-lg font-medium text-gray-800 dark:text-white">{item[0]}</h2>
                                            </div>

                                            <p class="text-gray-500 dark:text-gray-400">{item[1]}</p>
                                        </div>)
                                    })}
                                </div>
                            </div>
                        </section>
                    </div>
                    <div class="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                        <img class="object-cover max-w-[320px] max-h-[320px] h-[320px] w-[320px]" src={data && data[3]} alt="avatar" />
                        <div class="py-5 text-center">
                            <Link to="#" class="block text-2xl font-bold text-gray-800 dark:text-white" tabindex="0" role="link">{data && data[2]}</Link>
                            <span class="text-sm text-gray-700 dark:text-gray-200">{data && data[1]}</span>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar