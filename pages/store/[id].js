import Layout from "../../components/layout"
import Product from "../../components/products"
import { getItemData, getPathFromId } from "../../lib/utils"


export default function ProductPage({ productInfo }) {
    return (
    <Layout>
        <Product item={productInfo} showAs="Page"/>
    </Layout>

    )
}

export async function getStaticPaths() {
    const paths = await getPathFromId(); //aca se nos guarda un arreglo de objetos
    return {
        paths: paths,
        fallback: false, // esta propiedad indica que si una ruta no existe nos manda de una a una pagina 404
        //el valor de la propiedad debe ser si o si paths , pero despues el otro puede ser cualquiera... podria ser asi const XX = await getPathF...  return {paths: XX}
    }
}

export async function getStaticProps({ params }) {
    const id = params.id;
    const product = await getItemData(id);
    return {
        props: {
            productInfo : product,
        }
    }
}