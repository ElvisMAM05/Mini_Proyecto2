import React, {useState} from "react";
import {getData, postData} from "../services/fetch/"


export const Producto = () => {
  
  const [nameProducto,setnameProducto]=useState("");
  const [Precioproducto,setpriceProducto]=useState("")
  const [StockProducto,setStockProducto]=useState("")

  function name(e){
    setnameProducto(e.target.value)
  };
  function Price(e){
    setpriceProducto(e.target.value)
  }
  function Stock(e){
    setStockProducto(e.target.value)
  }
  async function Post() {
    const obj={
    Nombre:nameProducto,
    precio:Precioproducto,
    Cantidad:StockProducto,
    }
    const respuestaServer = await postData(obj)
      console.log(respuestaServer);
      window.location.reload();
  }



  return (
    <>
    <div>
      <h1>Holaaa</h1>
            <label htmlFor="">Nombre: </label>
            <input value={nameProducto} onChange={name} type="text" /><br />
            <label htmlFor="">Precio: </label>
            <input value={Precioproducto} onChange={Price} type="text" /><br />
            <label htmlFor="">Cantidad: </label>
            <input value={StockProducto} onChange={Stock} type="text" /><br />
            <input type="button" onClick={Post} value="Post" />
    </div>
    </>
  )
}
