import Navbar from "./Navbar"
import Logo from "./Logo"
// creo e esporto componente
const MyHeader = () => {
    return (
        <header>
            <Logo />
            <Navbar />
        </header>
    )
}

export default MyHeader