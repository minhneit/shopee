import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'

import omit from 'lodash/omit'
import { schema } from '~/utils/rule'
import Input from '~/components/Input'
import { registerAccount } from '~/apis/auth.api'

interface FormData {
    email: string
    password: string
    confirm_password: string
}

export default function Register() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FormData>({
        resolver: yupResolver(schema)
    })

    const registerAccountMutation = useMutation({
        mutationFn: (body: Omit<FormData, 'confirm_password'>) => registerAccount(body)
    })

    const onSubmit = handleSubmit((data) => {
        const body = omit(data, ['confirm_password'])
        registerAccountMutation.mutate(body, {
            onSuccess: (data) => {
                console.log(data)
            }
        })
    })

    return (
        <div className='bg-orange'>
            <div className='max-w-7xl mx-auto px-4 container'>
                <div className='grid grid-cols-1 lg:grid-cols-2 py-12 md:px-24'>
                    <div className=' z-40 lg:bg-[url(https://down-vn.img.susercontent.com/file/sg-11134004-23030-0zzd19u7qvov47)] lg:bg-cover lg:w-[500px]'></div>
                    <div className='lg:col-span-2 lg:col-start-4 lg:w-[450px]'>
                        <form className='p-10 rounded bg-white w-500 shadow-sm' onSubmit={onSubmit}>
                            <div className='text-2-xl'>Đăng ký</div>

                            <Input
                                name='email'
                                register={register}
                                type='email'
                                className='mt-8'
                                errorMessage={errors.email?.message}
                                placeholder='Email'
                            />

                            <Input
                                name='password'
                                register={register}
                                type='password'
                                className='mt-2'
                                errorMessage={errors.password?.message}
                                placeholder='Mật khẩu'
                            />

                            <Input
                                name='confirm_password'
                                register={register}
                                type='password'
                                className='mt-2'
                                errorMessage={errors.confirm_password?.message}
                                placeholder='Nhập lại mật khẩu'
                            />

                            <div className='mt-3'>
                                <button className=' text-center uppercase bg-orange text-white w-full py-4 px-2 rounded text-sm hover:bg-red-600'>
                                    Đăng ký
                                </button>
                            </div>

                            <div className='mt-8 flex items-center justify-center'>
                                <span className='text-gray-400'>Bạn đã có tài khoản? </span>
                                <Link to='/login' className='text-red-400 ml-2'>
                                    Đăng nhập
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
