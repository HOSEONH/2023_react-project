import React, {useContext} from 'react'
import { Link, Outlet } from 'react-router-dom';
import DataContext from '../context/DataContext';
import '../css/menu.css'

export default function Menu() {
  const value = useContext(DataContext);
  return (
    <div>
      <div className='header-img'></div>
        <h1>메뉴메뉴</h1>

        { value.data.ddd.map((f, i)=>(
                <Link to={`/menu/${f.list}`} key={i}>{f.name} </Link>

                ))
            }

        <Outlet />
    </div>
  )
}
