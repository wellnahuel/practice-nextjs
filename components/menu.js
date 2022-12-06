import Link from "next/link";
import style from "../styles/menu.module.css"

export default function Menu(){
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
            <a href="#" className={style.link}> Cart (0)</a>
        </div>
    </nav>

    );
}