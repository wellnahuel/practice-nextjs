import Link from "next/link";
import Image from "next/legacy/image";
import style from "../styles/products.module.css"
import { convertToPath } from "../lib/utils";


export default function Product({ item, showAs, quantity }) {
    console.log(item)
    if (showAs === "Page") {
        return (
            <div className={style.page}>
                <div className={style.image}>
                    <Image
                        src={item.data.image}
                        alt="Picture of the author"
                        width={600}
                        height={600}
                    />
                </div>
                <div className={style.info}>
                    <div>
                        <h2>{item.data.title}</h2>
                    </div>
                    <div className={style.price}>${item.data.price}</div>
                    <div>{item.data.description}</div>
                    <div>
                        <button>Add to cart</button>
                    </div>

                </div>

            </div>
        )
    }

    if (showAs === "ListItem") {
        return <div>List item</div>
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
                <button>Add to cart</button>
            </div>
        </div>
    );
}