import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

export default function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()

    const handleLogin = handleSubmit((data) => {
        console.log(data)
    })
    return (
        <div className='bg-orange'>
            <div className='max-w-7xl mx-auto px-4'>
                <div className='grid grid-cols-1 lg:grid-cols-5 py-12 lg:py-32 lg:pr-10'>
                    <div className='flex justify-center z-40 lg:bg-[url(https://down-vn.img.susercontent.com/file/sg-11134004-23030-0zzd19u7qvov47)] lg:bg-cover lg:w-[500px]'></div>
                    <div className='lg:col-span-2 lg:col-start-4'>
                        <form className='p-10 rounded bg-white shadow-sm' onSubmit={handleLogin}>
                            <div className='text-2-xl'>Đăng nhập</div>

                            <div className='mt-8'>
                                <input
                                    className='p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm'
                                    type='email'
                                    name='email'
                                    placeholder='Email'
                                />
                            </div>

                            <div className='mt-1 text-orange min-h-[1rem] text-sm'></div>

                            <div className='mt-4'>
                                <input
                                    className='p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm'
                                    type='password'
                                    name='password'
                                    placeholder='Password'
                                />
                            </div>

                            <div className='mt-1 text-orange min-h-[1rem] text-sm'></div>

                            <div className='mt-3'>
                                <button
                                    type='submit'
                                    className=' text-center uppercase bg-orange text-white w-full py-4 px-2 rounded text-sm hover:bg-red-600'
                                >
                                    Đăng nhập
                                </button>
                            </div>

                            <div className='mt-8 flex items-center justify-center'>
                                <span className='text-gray-400'>Bạn chưa có tài khoản? </span>
                                <Link to='/register' className='text-red-400 ml-2'>
                                    Đăng ký
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
