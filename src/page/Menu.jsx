import React from 'react';
import { Link, Outlet, Route } from 'react-router-dom';
import '../css/menu.css';
import Menulist from './Menulist';


export default function Menu() {
  const donut = ["All", "FEATURED", "ICED", "GLAZED", "FILLED", "CAKE"];
  return (
    <div>
      <div className='header-img'></div>
      <h1>메뉴메뉴</h1>

      { donut.map((m, i)=>(
        <Link to={`/menu/${m}`} key={i}>{m} | </Link>
      ))}
      
      <Outlet />
    </div>
  )
}

// `/menu/:category` 경로에 대한 자식 라우트 정의
export function MenuCategory() {
  return (
    <Route path="/menu/:category" element={<Menulist />} />
  );
}
