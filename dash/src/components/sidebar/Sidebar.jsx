import "./Sidebar.css";

import logo from "../../assents/logo-cargo.png";

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  return (
    <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
      <div className="sidebar__title">
        <div className="sidebar__img">
          <img src={logo} alt="logo" />
          <h1></h1>
        </div>

        <i
          onClick={() => closeSidebar()}
          className="fa fa-times"
          id="sidebarIcon"
          aria-hidden="true"
        ></i>
      </div>
      <div className="sidebar__menu">
        <div className="sidebar__link active_menu_link">
          <i class="fas fa-minus-square"></i>
          <a href="#">Home</a>
        </div>
        <h2>ADMIN</h2>
        <div className="sidebar__link">
          <i class="fas fa-tachometer-alt"></i>
          <a href="#">Área administrativa</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-building"></i>
          <a href="#">Lojas</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-archive"></i>
          <a href="#">Produtos</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-bars"></i>
          <a href="#">Categorias</a>
        </div>
        <div className="sidebar__link">
          <i class="fas fa-utensils"></i>
          <a href="#">Pedidos</a>
        </div>
        <h2>PESSOAS</h2>
        <div className="sidebar__link">
          <i className="fas fa-users-cog"></i>
          <a href="#">Administradores</a>
        </div>
        <div className="sidebar__link">
          <i className="fas fa-users"></i>
          <a href="#">Usuários</a>
        </div>
        <div className="sidebar__link">
          <i className="fas fa-money-check-alt"></i>
          <a href="#">Pagamentos e custos</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-tasks"></i>
          <a href="#">A plataforma</a>
        </div>
        <div className="sidebar__link">
          <i className="fas fa-file-alt"></i>
          <a href="#">Política de privacidade</a>
        </div>
        <div className="sidebar__logout">
          <i className="fas fa-sign-out-alt"></i>
          <a href="#">Logout</a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
