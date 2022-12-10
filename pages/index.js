//import Head from 'next/head';//PRIMER COMPONENTE QUE SE RENDERIZA
//import Image from 'next/image';
import Layout from "../components/layout.js"
import { getLatestItems } from "../services/itemService.js";
import Product from "../components/products.js";
import styleProduct from "../styles/products.module.css"
//import Link from 'next/link'; //importamos para hacer el routeo
//import styles from '../styles/Home.module.css';
import style from "../styles/Home.module.css";


//si aparece un error Link-<a> child, usar legacyBehavior dentro del Link y lesto

export default function Home({ items }) {
  return (
    <Layout title="Welcome">
      <div className={style.banner}>
          <div className={style.bannerBackground}>
            <div className={style.bannerInfo}>
              <h2>World Cup Qatar 2022 Shop</h2>
              <p>
                Level up your comfort this World Cup with our Collection
                — all new shirts, souvenirs, shorts,and more!
              </p>
            </div>
          </div>
        </div>

      <h3>Latest Products</h3>
        <div className={styleProduct.items}>
          {items &&
            items.map((item) => (
              <Product key={item.id} item={item} showAs="item" />
            ))}
        </div>
    </Layout>
  );
}

export async function getStaticProps(){
  const res = await getLatestItems();

  return {
    props:{
      items: res,
    }
  }
}
