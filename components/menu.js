import Link from "next/link";
import style from "../styles/menu.module.css"
import { useAppContext } from "./stateContainer";

export default function Menu(){
    const cart = useAppContext();

    function handleOpenCart(){
        cart.openCart();
    }

    return (
    <nav className={style.menu}>
        <div>
            <Link legacyBehavior href="/">
                <a className={style.link}>Home</a>
            </Link>
            <Link legacyBehavior href="/store">
                <a className={style.link}>Store</a>
            </Link>
            <Link legacyBehavior href="/faq">
                <a className={style.link}>FAQ</a>
            </Link>
        </div>
        <div>
            <a href="#" className={style.link} onClick={handleOpenCart}> {" "} Cart ({cart.getNumberOfItems()})</a>
        </div>
    </nav>

    );
}