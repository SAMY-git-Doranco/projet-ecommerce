import { useRef, useState } from "react"

const Login = () => {
    const emailInput = useRef(null)
    const passwordInput = useRef(null)

    const submitForm = () => {
        const email = emailInput.current.value
        const password = passwordInput.current.value
        fetch('http://localhost:4000/login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password,

            })

        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(err => console.error(err))
        console.log("Connecté" + email);
    }

    return (
        <div className='flex h-screen bg-gray-200 items-center justify-center  mt-32 mb-32'>
            <div className='grid bg-white rounded-lg shadow-xl w-11/12 md:w-9/12 lg:w-1/2'>
                <div className='flex justify-center py-4'>
                    <div className='flex bg-purple-200 rounded-full md:p-4 p-2 border-2 border-purple-300'>
                        <svg
                            className='w-8 h-8 text-white'
                            fill='none'
                            stroke='currentColor'
                            viewBox='0 0 24 24'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeLwidth='2'
                                d='M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4'
                            ></path>
                        </svg>
                    </div>
                </div>

                <div className='flex justify-center'>
                    <div className='flex'>
                        <h1 className='text-gray-600 font-bold md:text-2xl text-xl'>
                            Login
                        </h1>
                    </div>
                </div>

                <div className='grid grid-cols-1 mt-5 mx-7'>
                    <label className='uppercase md:text-sm text-xs text-gray-500 text-light font-semibold'>
                        email
                    </label>
                    <input
                        ref={emailInput}
                        className='py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
                        type='text'
                        placeholder='email'
                    />
                </div>

                <div className='grid grid-cols-1 mt-5 mx-7'>
                    <label className='uppercase md:text-sm text-xs text-gray-500 text-light font-semibold'>
                        password
                    </label>
                    <input
                        ref={passwordInput}
                        className='py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
                        type='password'
                        placeholder='password'
                    />
                </div>
                <div className='flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5'>
                    <button onClick={submitForm} className='w-auto bg-purple-500 hover:bg-purple-700 rounded-lg shadow-xl font-medium text-white px-4 py-2'>
                        Connecter
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Login
