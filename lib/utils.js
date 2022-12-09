import { getItems } from "../services/itemService";

export async function getPathFromId() {
    const items = await getItems();
    const ids = items.map(item => {
        return {
            params: {
                id: item.id
            }
        }
    });
    return ids;
}

export async function getItemData(id) {
    const items = await getItems();
    const product = items.find(item => item.id == id)

    return {
        id:id,
        data: product
    }
}

//esto esta raro porque no estamos acostumbrados a retornar esta estructura de objetos... le estamos indicando a Next.js que para que nuestras rutas sean dinamicas estamos usando esta notacion ... params y dentro el id que es el mismo que colocamos en el archivo de [id.js]