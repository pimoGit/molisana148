import Navbar from "./Navbar"
// creo e esporto componente
const MyHeader = () => {
    return (
        <header>
            <figure>
                <img src="/logo.png" alt="Logo" />
            </figure>
            <Navbar />
        </header>
    )
}

export default MyHeader