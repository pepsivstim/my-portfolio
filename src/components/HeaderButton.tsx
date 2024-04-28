import Link from 'next/link';

interface HeaderButtonProps {
    name: string;
    link: string;
    currentPage: string;
    setCurrentPage: (currentPage: string) => void;
}

// Styles for the current selected page button
const linkStyle: string = '';
const divStyle: string = '';
const clickedLinkStyle: string = 'font-bold text-xl';
const clickedDivStyle: string = '';

const HeaderButton = ({ name, link, currentPage, setCurrentPage }: HeaderButtonProps) => {

    // Handle when the header button is clicked
    const handleClick = () => {
        // Set the current page to the link associated with the button
        setCurrentPage(link);
    }

    return (
        <div onClick={handleClick} className={`content-center ${currentPage === link ? clickedDivStyle : divStyle}`} >
            <Link href={link} className={`p-2 bg-sky-200 active:bg-sky-700 ${currentPage === link ? clickedLinkStyle : linkStyle}`}>{name}</Link>
        </div>
    )
  }
  
export default HeaderButton;