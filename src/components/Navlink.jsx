import { NavLink } from "react-router-dom"

const Navlink = (props) => {
  return (
    <NavLink
        to={props.to}
        className={({ isActive }) =>
            isActive ? "bg-blue-700 text-white px-3 rounded-full" : "text-gray-500"
        }
        >
        {props.children}
    </NavLink>
  )
}

export default Navlink