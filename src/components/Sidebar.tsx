import { PencilSimpleLine } from "phosphor-react"

import "../assets/styles/Sidebar.css"

export function Sidebar() {
  return (
    <aside className="sidebar">
      <img
        className="sidebar-profile-cover"
        src="https://images.unsplash.com/photo-1656383931514-63dbd5bca03c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=379&q=80"
        alt=""
      />
      <div className="sidebar-profile">
        <img
          className="sidebar-profile-img"
          src="https://github.com/shenzuni.png"
          alt="current user profile"
        />
        <div className="sidebar-profile-info">
          <h1 className="sidebar-profile-name">Shenzuni</h1>
          <h2 className="sidebar-profile-description">React & Node</h2>
        </div>
        <a className="sidebar-profile-edit-button" href="#">
          <PencilSimpleLine size={20} />
          Editar seu perfil
        </a>
      </div>
    </aside>
  )
}
