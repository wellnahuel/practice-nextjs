import Link from "next/link";
import Image from "next/image";
import style from "../styles/products.module.css"
import { convertToPath } from "../lib/utils";
import AddCartButton from "./addCartButton";


export default function Product({ item, showAs, quantity }) {
    console.log(item)
    if (showAs === "Page") {
        return (
            <div className={style.page}>
                <div className={style.image}>
                    <Image
                        src={item.image}
                        alt="Picture of the author"
                        width={600}
                        height={600}
                    />
                </div>
                <div className={style.info}>
                    <div>
                        <h2>{item.title}</h2>
                    </div>
                    <div className={style.price}>${item.price}</div>
                    <div>{item.description}</div>
                    <div>
                        <AddCartButton item={item} />
                    </div>

                </div>

            </div>
        )
    }

    if (showAs === "ListItem") {
        return (
            <div className={style.listItem}>
                <div>
                    <Image
                        src={item.image}
                        alt="Picture of the author"
                        width={70}
                        height={70}
                    />
                </div>
                <div>
                    <div><h3>{item.title}</h3></div>
                    <div>${item.price}</div>
                    {quantity === 0 ? "" : <div>{quantity} units</div>}
                    {quantity === 0 ? "" : <div>Subtotal:  ${quantity * item.price}</div>}
                </div>
            </div>
        )
    }

    return (
        <div className={style.item}>
            <div>
                <Link legacyBehavior href={`/store/${convertToPath(item.title)}`}>
                    <a><Image src={item.image} alt={item.description} width="500" height="500" /></a>
                </Link>
            </div>
            <div>
                <h3>
                    <Link legacyBehavior href={`/store/${convertToPath(item.title)}`}>
                        <a>{item.title}</a>
                    </Link>
                </h3>
            </div>
            <div>${item.price}</div>
            <div>
                <AddCartButton item={item} />
            </div>
        </div>
    );
}