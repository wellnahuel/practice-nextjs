//cada vez que ponga en la ruta localhost3000/store se me carga el index.js de la carpeta store
import Layout from "../../components/layout.js"
import { getItems } from "../../services/itemService.js";
import Image from "next/image";
import Product from "../../components/products"
import styleItems from "../../styles/products.module.css"

export default function Index({ items }) {
    return (
        <Layout>
            <h1>Store</h1>
            <div className={styleItems.items}>
            {items && items.map((item) => (
                <Product key={item.id} item={item} showAs="Default" />
            ))}
            </div>
        </Layout>
    );
}
export async function getStaticProps() {// el items del props lo paso destructurado como argumento de la funcion Index
    const res = await getItems();
    return {
        props: {
            items: res,
        },
    };
}

//getStaticProps reemplaza useEffect o fetch
//NextJs me pide retornar un objeto que tenga la propiedad props, que inyectara en el componente Index
//para esto destructuro Index --> Index({items}), items = items:res ... ahora ya puedo hacer logica dentro
//de layout , por ejemplo iterar para mostrar todo