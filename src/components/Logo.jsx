const Logo = (props) => {

    // const slogan = props.slogan;

    const { slogan } = props;

    return (
        <figure>
            <img src="/logo.png" alt="Logo" />
            {slogan && <p>{slogan}</p>}
        </figure>
    )
}

export default Logo