import Link from "next/link";
import Image from "next/legacy/image";
import style from "../styles/products.module.css"


export default function Product({ item, showAs }) {
    console.log(item)
    if (showAs === "Page") {
        return (
            <div>
                <h2>{item.data.price}</h2>
                <div className={style.image}>
                    <Image
                        src={item.data.image}
                        alt="Picture of the author"
                        width={800}
                        height={800}
                    />
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