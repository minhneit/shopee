import { itemData } from '~/data'

type ListItemProps = {
    title: string
    link: string[]
}

const ListItem = ({ title, link }: ListItemProps) => {
    return (
        <div className='text-xs'>
            <h3 className='text-black font-bold mb-5 uppercase'>{title}</h3>
            <ul>
                {itemData.data.map((item, index) => (
                    <li key={index} className='mb-2'>
                        <a className='hover:text-orange' href={link[index]}>
                            {item}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ListItem
