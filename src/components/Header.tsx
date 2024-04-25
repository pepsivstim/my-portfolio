import Link from 'next/link'
import HeaderButton from '@/components/HeaderButton'

const Header = () => {
    return (
        <div className='w-full flex flex-row justify-around'>
            <div className='w-1/3 content-center text-left'>
                <Link href='/' className='text-xl'>Timothy Chu</Link>
            </div>
            <HeaderButton name='About Me' link='/about' />
            <HeaderButton name='Experience' link='/experience' />
            <HeaderButton name='Photos' link='/photos' />
        </div>
    )
  }
  
export default Header;