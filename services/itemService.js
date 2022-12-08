export async function getItems() {
    const request = await fetch("http://localhost:3000/api/items");
    const items = await request.json(); //aca me guardo la respuesta de la llamada al json de items
    return items; 
}

export async function getLatestItems() { // muestro los 4 productos mas nuevos
    const items = await getItems();
    return items.slice(0,3);
}