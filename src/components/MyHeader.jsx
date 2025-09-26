import Navbar from "./Navbar"
import Logo from "./Logo"
// creo e esporto componente
const MyHeader = (props) => {
    return (
        <header>
            <Logo slogan={props.slogan} />
            <Navbar />
        </header>
    )
}

export default MyHeader