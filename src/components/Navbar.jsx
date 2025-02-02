const Navbar = () => {
  return (
    <div className="container-navbar">
      <div className="logo-navbar">Eventika</div>
      <nav class="navbar">
        {/* <a href="/home"></a> */}

        <a href="/home" className="home-navbar"></a>
        <a href="/bodas" className="bodas-navbar">
          Bodas
        </a>
        {/* <a href="/contactos">Contactos</a> */}
      </nav>
    </div>
  );
};
export default Navbar;
