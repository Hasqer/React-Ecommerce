import { Link, NavLink } from 'react-router-dom'
import style from "./navbar.module.css"

export default function Navbar() {
  return (
    <div className={style.bar+'  rounded w-100 m-0 py-3 bg-color2 d-flex'}>
      <i class="bi bi-x-circle-fill"></i>
    </div>
  )
}
