import Link from "next/link";
import Image from "next/legacy/image";
import style from "../styles/products.module.css"


export default function Product({ item, showAs }) {
    if (showAs === "Page") {
        return <div>Page</div>
    }

    if (showAs === "ListItem") {
        return <div>List item</div>
    }

    return (
        <div className={style.item}>
            <div>
                <Link legacyBehavior href={`/store/${item.id}`}>
                    <a><Image src={item.image} alt={item.description} width="500" height="500" /></a>
                </Link>
            </div>
            <div>
                <h3>
                    <Link legacyBehavior href={`/store/url-a-mi-componente`}>
                        <a>{item.title}</a>
                    </Link>
                </h3>
            </div>
            <div>${item.price}</div>
            <div>
                <button>Add to cart</button>
            </div>
        </div>
    );
}