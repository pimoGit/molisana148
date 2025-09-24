// creo e esporto componente
const MyHeader = () => {
    return (
        <header>
            <figure>
                <img src="/logo.png" alt="Logo" />
            </figure>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#" className="active">Prodotti</a></li>
                    <li><a href="#">Chi Siamo</a></li>
                    <li><a href="#">Contatti</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default MyHeader