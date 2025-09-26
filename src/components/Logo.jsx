const Logo = (props) => {

    // const slogan = props.slogan;

    const { slogan } = props;

    return (
        <figure>
            <img src="/logo.png" alt="Logo" />
            <p>{slogan}</p>
        </figure>
    )
}

export default Logo