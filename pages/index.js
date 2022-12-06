//import Head from 'next/head';//PRIMER COMPONENTE QUE SE RENDERIZA
//import Image from 'next/image';
import Layout from "../components/layout.js"
//import Link from 'next/link'; //importamos para hacer el routeo
//import styles from '../styles/Home.module.css';

//si aparece un error Link-<a> child, usar legacyBehavior dentro del Link y lesto

export default function Home() {
  return (
      <Layout title="Welcome">
        dfgfgfgfgfgf
        <div>Estas en index!</div>
      </Layout>
  );
}
