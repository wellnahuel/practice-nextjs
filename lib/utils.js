import { getItems } from "../services/itemService";

export async function getPathFromId() {
    const items = await getItems();
    const ids = items.map(item => {
        return {
            params: {
                id: convertToPath(item.title) //esto lo hago porque me tiraba error , porque pedia que sea string el id
            }
        }
    });
    return ids;
}

export async function getItemData(id) {
    const items = await getItems();
    const product = items.find(item => convertToPath(item.title) == id) //igual que por lo de arriba

    return {
        id:id,
        data: product
    }
}


export function convertToPath (title) {
    return title.toLowerCase().replace(/\s/g, "-"); //para que la url quede mejor, sin el id numerico
}
//esto esta raro porque no estamos acostumbrados a retornar esta estructura de objetos... le estamos indicando a Next.js que para que nuestras rutas sean dinamicas estamos usando esta notacion ... params y dentro el id que es el mismo que colocamos en el archivo de [id.js]