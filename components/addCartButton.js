import style from "../styles/addCartButton.module.css"
import { useAppContext } from "./stateContainer"

export default function AddCartButton ({ item }) {

    const cart = useAppContext();
    function handleClick() {
        cart.addItemToCart(item);
        cart.openCart();
    }

    return (
        <button className={style.button} onClick={handleClick}>Add to Cart</button>
    )
}