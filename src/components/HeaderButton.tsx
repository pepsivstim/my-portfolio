import Link from 'next/link'

interface HeaderButtonProps {
    name: string;
    link: string;
}

const HeaderButton = ({ name, link }: HeaderButtonProps) => {
    return (
        <div>
            <Link href={link} className='text-xl'>{name}</Link>
        </div>
    )
  }
  
export default HeaderButton;