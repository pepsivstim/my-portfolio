import Link from 'next/link';
import HeaderButton from '@/components/HeaderButton';

interface HeaderProps {
    currentPage: string;
    setCurrentPage: (currentPage: string) => void;
}

const Header = ( { currentPage, setCurrentPage }: HeaderProps ) => {
    const handleNameClick = () => {
        setCurrentPage('/');
    }

    return (
        <div className='w-full flex flex-row justify-around'>
            <div onClick={handleNameClick} className='w-1/3 content-center text-left'>
                <Link href='/' className='text-2xl font-bold'>Timothy Chu</Link>
            </div>
            <HeaderButton name='About Me' link='/about' currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <HeaderButton name='Experience' link='/experience' currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <HeaderButton name='Photos' link='/photos' currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </div>
    )
  }
  
export default Header;