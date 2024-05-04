function Header(props)
{
    return (
      <div>
        <h1 className="text-3xl font-bold">Hello {props.username} </h1>
        <p>i help you manage your activities :)</p>
      </div>
    );
}

export default Header