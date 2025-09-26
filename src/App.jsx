import MyHeader from "./components/MyHeader"
import MyMainContent from "./components/MyMainContent"
import MyFooter from "./components/MyFooter"
import Alert from "./components/Alert"
import './App.css'

function App() {

    const payOff = "Molisana, la pasta sana";

    return (
        <>
            <MyHeader slogan={payOff} />
            <Alert type="error" >
                <ul>
                    <li>Error 1</li>
                    <li>Error 2</li>
                    <li>Error 3</li>
                </ul>
            </Alert>
            <MyMainContent />
            <MyFooter slogan={payOff} />
        </>
    )
}

export default App
