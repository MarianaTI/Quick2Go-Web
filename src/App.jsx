// import { useState, useEffect } from "react";
// import axios from "axios";

// const url = 'http://quick2go.somee.com/api/compradores';

// function Compradores() {
//     const [ compradores , setListadoCompradores ] = useState([]);

//     const [compradoresLista, setcompradoresLista] = useState({
//         nombre: '',
//         apellidos: '',
//         direccion: '',
//         numeroTelefono: ''
//     })

//     const [userForEdit,setUserForEdit] = useState({
//         id: '',
//         nombre: '',
//         apellidos: '',
//         direccion: '',
//         numeroTelefono: ''
//     })

    
//     const handleChangePost = (e) => {
//         setcompradoresLista({ ...compradoresLista, 
//             [e.target.name]: e.target.value 
//         });
//     };

//     const deleteCompradores = async (id) => {
//         await axios.delete(`${url}/${id}`)
//         .then((response) => {
//             console.log(response);
//         })
//         .catch((error) => {
//             console.log(error);
//         });
//     };

//     useEffect(() => {
//         const getCompradores = async () => {
//             const result = await axios.get(url);
//             setListadoCompradores(result.data)
//         }
//     getCompradores()
//     },[]);

//     const handleChangePut = (e) => {
//         setUserForEdit({ ...userForEdit, 
//             [e.target.name]: e.target.value 
//         });
//     };
//     // useEffect((id) => {
//     //     const putCompradores = async () => {
//     //         const result = await axios.put(`${url}/${id}`);
//     //         setUserForEdit(result.data)
//     //     }
//     // putCompradores()
//     // },[]);

//     const putUserForEdit = (event) => {
//         event.preventDefault();
//         axios.put(`${url}/${userForEdit.id}`, userForEdit)
//         .then((response) => {
//             setUserForEdit(response.data);
//         })
//         .catch((error) => {
//             console.log(error);
//         });
//       };
      
//       const postCompradores = (e) => {
//         e.preventDefault();
//         axios.post(url, compradoresLista)
//         .then(response => { 
//             console.log(response);
//         })
//         .catch((error) => {
//             console.log(error);
//         });
//     };
    
//     const handleSetUserForEdit = (user) => {
//         setUserForEdit(user)
//     }

//     return(
//         <div>
//             <h1>Compradores</h1>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Id</th>
//                         <th>Nombre</th>
//                         <th>Apellidos</th>
//                         <th>Direccion</th>
//                         <th>Telefono</th>
//                         <th>Control</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {compradores.map((comprador) => (
//                         <tr>
//                             <td>{comprador.id}</td>
//                             <td>{comprador.nombre}</td>
//                             <td>{comprador.apellidos}</td>
//                             <td>{comprador.direccion}</td>
//                             <td>{comprador.numeroTelefono}</td>
//                             <td><button onClick={(e) => deleteCompradores(comprador.id, e)}> Borrar</button></td>
//                             <td><button onClick={()=> handleSetUserForEdit(comprador)}> Editar</button></td>

//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//             <br></br>
//             <h1>post</h1>
//                 <form onSubmit={postCompradores}>
                
//                     <label htmlFor="nombre">Nombre</label><br/>
//                     <input type="text" name="nombre" id="nombre" value={compradoresLista.nombre} onChange={handleChangePost}></input><br/><br/>
//                     <label htmlFor="apellidos">Apellidos</label><br/>
//                     <input type="text" name="apellidos" id="apellidos" value={compradoresLista.apellidos} onChange={handleChangePost}></input><br/><br/>

//                     <label htmlFor="direccion">Direccion</label><br/>
//                     <input type="text" name="direccion" id="direccion" value={compradoresLista.direccion} onChange={handleChangePost}></input><br/><br/>

//                     <label htmlFor="numeroTelefono">Telefono</label><br/>
//                     <input type="text" name="numeroTelefono" id="numeroTelefono" value={compradoresLista.numeroTelefono} onChange={handleChangePost}></input>
//                     <br/>
//                     <br/>
//                     <button type="submit">Agregar</button>
//                 </form>
//             <br></br>
//             <h1>put</h1>
            
//                 <form onSubmit={putUserForEdit}>

//                     <label htmlFor="nombre">Nombre</label><br/>
//                     <input type="text" name="nombre" id="nombre" value={userForEdit.nombre} onChange={handleChangePut}></input><br/><br/>

//                     <label htmlFor="apellidos">Apellidos</label><br/>
//                     <input type="text" name="apellidos" id="apellidos" value={userForEdit.apellidos} onChange={handleChangePut}></input><br/><br/>

//                     <label htmlFor="direccion">Direccion</label><br/>
//                     <input type="text" name="direccion" id="direccion" value={userForEdit.direccion} onChange={handleChangePut}></input><br/><br/>

//                     <label htmlFor="numeroTelefono">Telefono</label><br/>
//                     <input type="text" name="numeroTelefono" id="numeroTelefono" value={userForEdit.numeroTelefono} onChange={handleChangePut}></input>

//                     <button type="submit" >Actualizar</button>
//                 </form>
//              </div>
//     )
// }




// export default Compradores;
import React from "react";
import Productos from "./crud/productos"

function App() {
    return (
        <div>
            <h1>Tabla productos</h1>
            <Productos/>
        </div>
    )
}

export default App;