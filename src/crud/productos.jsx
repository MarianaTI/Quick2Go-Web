import { useState, useEffect } from "react";
import axios from "axios";

const url = 'http://www.quick2goapiprod.somee.com/api/productos';


function Productos() {
    //datos
    const form = new FormData();
    const [ producto, setProducto ] = useState([]);
    const [ datosProducto, setDatosProductos ] = useState({
        id:'',
        nombreProducto: '',
        descripcion: '',
        precio: '',
        idCategoria: '',
        foto: ''
    });

    //get
    useEffect(() => {
        const getProductos = async () => {
            const response = await axios.get(url);
            setProducto(response.data);
        };
        getProductos()
    }, []);

    //post
    const postProductos = async (event)=> {
        event.preventDefault();
        try{
            console.log(form);
            const response = await axios.post(url, form, {headers: {"Content-Type":"multipart/form-data", "Accept": "*/*"}})
            console.log(response)
        }catch(e){
            delete e.stack
            console.error(e)
        }
    };
    const handleChangePost = (event) => {
        form.set(event.target.name, event.target.value)
        console.log(form);
    };
    const handleChangeFoto = (event) => {
        form.set("foto",event.target.files[0])
    };




    //return
    return(
        <div>
            <hi>PRODUCTOS</hi>
            <table>
            <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Descripcion</th>
                        <th>Precio</th>
                        <th>Foto</th>
                    </tr>
                </thead>
                <tbody>
                    { 
                        producto.map((producto) => (
                            <tr>
                                <td>{producto.id}</td>
                                <td>{producto.nombreProducto}</td>
                                <td>{producto.descripcion}</td>
                                <td>{producto.precio}</td>
                                <td><img src={producto.foto} alt="Imagen del producto" width={100} height={100}/></td>
                            </tr>
                        )
                    )}
                </tbody>
            </table>
            <h1>Post</h1>
            <form onSubmit={postProductos}>
                <label htmlFor="nombreProducto">Nombre</label><br></br>
                <input type="text" name="NombreProducto" id="nombreProducto" value={producto.nombreProducto} onChange={handleChangePost}></input><br></br>

                <label htmlFor="descripcion">Descripción</label><br></br>
                <input type="text" name="Descripcion" id="descripcion" value={producto.descripcion} onChange={handleChangePost}></input><br></br>
  
                <label htmlFor="idCategoria">Id categoria</label><br></br>
                <input type="text" name="CategoriaId" id="idCategoria" value={producto.idCategoria} onChange={handleChangePost}></input><br></br>
                
                <label htmlFor="precio">Precio</label><br></br>
                <input type="text" name="Precio" id="precio" value={producto.precio} onChange={handleChangePost}></input><br></br>

                <label htmlFor="foto">Foto</label><br></br>
                <input type="file" name="Foto"  id="foto" value={producto.foto}  onChange={handleChangeFoto}></input><br></br>

                <button type="submit">Agregar</button>
            </form>              
        </div>
    )
}


export default Productos;

