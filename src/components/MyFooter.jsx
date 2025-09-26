const footerSections = [
    {
        title: "Pastificio",
        links: [
            { label: "Il Pastificio", href: "#" },
            { label: "Grano", href: "#" },
            { label: "Filiera", href: "#" },
            { label: "100 anni di pasta", href: "#" },
            { label: "Sartoria della pasta", href: "#" },
        ],
    },
    {
        title: "Prodotti",
        links: [
            { label: "Le classiche", href: "#" },
            { label: "Le Integrali", href: "#" },
            { label: "Le Speciali", href: "#" },
            { label: "Le Biologiche", href: "#" },
            { label: "Le Gluten-free", href: "#" },
        ],
    },
];

import Logo from "./Logo";

const MyFooter = (props) => {
    return (
        <footer className="container">
            <nav className="footer-nav">
                <div className="footer-col">
                    <Logo slogan={props.slogan} />
                </div>
                {footerSections.map((section, i) => (
                    <div className="footer-col" key={i}>
                        <div>
                            <h4>{section.title}</h4>
                            <ul>
                                {section.links.map((link, j) => (
                                    <li key={j}>
                                        <a href={link.href}>{link.label}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </nav>
        </footer>
    );
};

export default MyFooter;
