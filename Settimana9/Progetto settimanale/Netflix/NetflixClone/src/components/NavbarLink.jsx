import Nav from 'react-bootstrap/Nav';

function NavbarLinkList (props) {
    return (
        <>
         <Nav.Link href="#" className='text-light mx-2'>{props.testo}</Nav.Link>
       
        </>
    )
}

export default NavbarLinkList;