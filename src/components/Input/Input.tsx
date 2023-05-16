import type { UseFormRegister, RegisterOptions } from 'react-hook-form'

interface Props {
    type: React.HTMLInputTypeAttribute
    errorMessage?: string
    placeholder?: string
    className?: string
    name: string
    register: UseFormRegister<any>
    rules?: RegisterOptions
}

export default function Input({ type, errorMessage, placeholder, className, name, register, rules }: Props) {
    return (
        <div className={className}>
            <input
                {...register(name, rules)}
                className='p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm'
                type={type}
                autoComplete='on'
                placeholder={placeholder}
            />
            <div className='mt-1 text-orange min-h-[1.25rem] text-sm'>{errorMessage}</div>
        </div>
    )
}
