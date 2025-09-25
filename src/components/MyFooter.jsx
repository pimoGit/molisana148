const pastificioLinks = [
    { label: "Il Pastificio", href: "#" },
    { label: "Grano", href: "#" },
    { label: "Filiera", href: "#" },
    { label: "100 anni di pasta", href: "#" },
    { label: "Sartoria della pasta", href: "#" },
];

const productsLinks = [
    { label: "Le classiche", href: "#" },
    { label: "Le Integrali", href: "#" },
    { label: "Le Speciali", href: "#" },
    { label: "Le Biologiche", href: "#" },
    { label: "Le Gluten-free", href: "#" },
];

const linkPastificio = pastificioLinks.map((linkPastificio, index) => (
    <li key={"past" + index}>
        <a href={linkPastificio.href}>
            {linkPastificio.label}
        </a>
    </li>
));
const linkProdotti = productsLinks.map((linkProduct, index) => (
    <li key={"prod" + index}>
        <a href={linkProduct.href}>
            {linkProduct.label}
        </a>
    </li>
));

const MyFooter = () => {
    return (
        <footer className="container">
            <nav className="footer-nav">
                <div className="footer-col">
                    <figure>
                        <img src="/logo.png" alt="La Molisana" />
                    </figure>
                </div>
                <div className="footer-col">
                    <div>
                        <h4>Pastificio</h4>
                        <ul>
                            {linkPastificio}
                        </ul>
                    </div>
                </div>
                <div className="footer-col">
                    <div>
                        <h4>Prodotti</h4>
                        <ul>
                            {linkProdotti}
                        </ul>
                    </div>
                </div>
            </nav>
        </footer>
    )

}

export default MyFooter