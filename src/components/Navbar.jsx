const Navbar = () => {

    const links = [
        { id: 1, text: 'Home', url: '#', current: false },
        { id: 2, text: 'Prodotti', url: '#', current: true },
        { id: 3, text: 'Chi Siamo', url: '#', current: false },
        { id: 4, text: 'Contatti', url: '#', current: false },
    ];

    const linkList = links.map(link => (
        <li key={link.id}>
            <a href={link.url} className={link.current ? "active" : ""}>
                {link.text}
            </a>
        </li>
    ));

    return (
        <nav>
            <ul>
                {linkList}
            </ul>
        </nav>
    )
}

export default Navbar