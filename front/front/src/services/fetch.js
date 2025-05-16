async function postData(obj,endpoint) {
    const peticion = await fetch(`http://127.0.0.1:8000/${endpoint}`,{
        method: "POST",
        headers:{
            "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(obj)        
    })
    const res = peticion.json()
    return res
}
export {postData}


async function deleteData(id,endpoint) {
    try {
        const response = await fetch(`http://127.0.0.1:8000/${endpoint}/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        
        if (!response.ok) {
            throw new Error(`Error deleting user with id ${id}`);
        }
        
        return { message: `User with id ${id} deleted successfully` };
    } catch (error) {
        console.error('Error deleting user:', error);
        throw error;
    }
}
export {deleteData}

async function patchData(info,endpoint,id) {
    try {
        const peticion = await fetch(`http://127.0.0.1:8000/${endpoint}/${id}`,{
          method:"PATCH",
          headers:{
            "Content-type":"application/json"
          }, 
          body: JSON.stringify(info)
        })
        const datos = await peticion.json()
        console.log(datos);
        return datos
      } catch (error) {
          console.error(error);
      }
}
export {patchData}

const getData=async(endpoint) => {
    try {
        const peticion = await fetch(`http://127.0.0.1:8000/${endpoint}`)
        const datos = await peticion.json()
        console.log(datos);
        return datos
    } catch (error) {
        console.error(error);
    }
}

export {getData}