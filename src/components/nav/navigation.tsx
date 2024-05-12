import "./nav.css";

export default function Navigation() {
  return (
    <div className="NavConteiner">
      <nav className="navigation">
        <div className="textConteiner">Beaba</div>
        <div className="navigationButtons">
          <div className="link">
            <p>Guia</p>
          </div>{" "}
          <div className="link">
            <p>Quem Somos</p>
          </div>
          <div className="link">
            <p>Contato</p>
          </div>
          <div className="link">
            <p>Como ajudar</p>
          </div>
        </div>
        <div className="divider"></div>
      </nav>
    </div>
  );
}
