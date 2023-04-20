import React from 'react'
import Edit from '../img/edit.png'
import Delete from '../img/delete.png'
import {Link} from 'react-router-dom'
import Menu from '../components/Menu'

function Single() {
  return (
    <div className='single'>
      <div className='content'>
        <img src="https://images.unsplash.com/photo-1681649953900-b6fe394d5c5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" alt="" />
      <div className='user'>
        <img src="https://images.unsplash.com/photo-1618082382324-e0bd4b48e85b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80" alt="" />
        <div className="info">
          <span>John</span>
          <p>Posted 2 days ago</p>
        </div>
        <div className="edit">
          <Link to={`/write?edit=2`}>
            <img src={Edit} alt="" />
          </Link>
          <img src={Delete} alt="" />
        </div>
      </div>
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, perspiciatis?</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quaerat voluptates, sed eum error hic impedit voluptate, sit debitis, neque voluptatum illum explicabo doloremque! Impedit quae similique earum reiciendis quaerat dolorem itaque hic dolore nulla cumque. Nobis, aut eius. Fuga, voluptates. Eaque laborum deleniti quidem, facilis eveniet neque nihil beatae?
      </p>
      <br/>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium expedita recusandae iure, quia fuga placeat rem soluta molestias itaque ut! Voluptates consectetur id animi praesentium esse vel iste eius commodi explicabo. Rerum laborum enim soluta assumenda fuga exercitationem, aperiam officia officiis. Alias illum maxime sit dolor architecto dignissimos, debitis a harum, blanditiis tempore dolores error dolorem? Porro temporibus placeat quo tenetur veritatis magni mollitia totam nulla? Corporis rem dicta praesentium dolores, maxime optio nihil id iure odio veniam quas sunt temporibus modi placeat sapiente debitis natus alias labore, vitae officia quo rerum! Ullam debitis quod deserunt distinctio in. Maiores, eligendi doloremque unde asperiores non qui recusandae quis autem dolorum dolorem adipisci provident minima odit. Incidunt nihil at non, illo ullam natus facilis vero quae obcaecati possimus earum neque modi ut tempora libero reprehenderit ipsam voluptates doloribus expedita unde sequi culpa numquam saepe fugit! Nam similique distinctio autem nobis enim quas!
      </p>
      <br/>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quaerat voluptates, sed eum error hic impedit voluptate, sit debitis, neque voluptatum illum explicabo doloremque! Impedit quae similique earum reiciendis quaerat dolorem itaque hic dolore nulla cumque. Nobis, aut eius. Fuga, voluptates. Eaque laborum deleniti quidem, facilis eveniet neque nihil beatae?
      </p>
      <br/>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium expedita recusandae iure, quia fuga placeat rem soluta molestias itaque ut! Voluptates consectetur id animi praesentium esse vel iste eius commodi explicabo. Rerum laborum enim soluta assumenda fuga exercitationem, aperiam officia officiis. Alias illum maxime sit dolor architecto dignissimos, debitis a harum, blanditiis tempore dolores error dolorem? Porro temporibus placeat quo tenetur veritatis magni mollitia totam nulla? Corporis rem dicta praesentium dolores, maxime optio nihil id iure odio veniam quas sunt temporibus modi placeat sapiente debitis natus alias labore, vitae officia quo rerum! Ullam debitis quod deserunt distinctio in. Maiores, eligendi doloremque unde asperiores non qui recusandae quis autem dolorum dolorem adipisci provident minima odit. Incidunt nihil at non, illo ullam natus facilis vero quae obcaecati possimus earum neque modi ut tempora libero reprehenderit ipsam voluptates doloribus expedita unde sequi culpa numquam saepe fugit! Nam similique distinctio autem nobis enim quas!
      </p>
      <br/>
      </div>
      <div className='menu'>
        <Menu />
      </div>
    </div>
  )
}

export default Single