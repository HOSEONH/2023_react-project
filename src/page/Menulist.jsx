import React,{useContext} from 'react'
import DataContext from '../context/DataContext';
import { Link, useParams } from 'react-router-dom';

export default function Menulist() {
    const {list} = useParams();
    const {data} = useContext(DataContext);
    const {ddd} = data;

    const newddd = ddd.find((f)=>(f.list === list))


  return (
    <div>
        Link{newddd.list}</div>
  )
}
