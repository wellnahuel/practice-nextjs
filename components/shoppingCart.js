import style from "../styles/shoppingCart.module.css"
import { useAppContext } from "./stateContainer"
import Product from "./products";

export default function ShoppingCart() {
    const cart = useAppContext(); //recordemos que como es un hook se debe colocar a nivel ''top'' de la funcion... si se coloca el cursor sobre cart aparecen los metodos que ya defini 

    function handleCloseCart() {
        console.log(cart)
        cart.closeCart()
    }

    function getTotal(){
        const total = cart.items.reduce((acc, item)=> acc + item.quantity * item.price, 0);
        return total;
    }

    return (
        <div className={style.shoppingCart}
            style={{ display: cart.isOpen ? "block" : "none" }}
        >
            <button className={style.close} onClick={handleCloseCart}>X</button>

            {cart.items.length === 0 ? (
                <div className={style.empty}>Empty Cart</div>
            ) : (
                <>
                    <h3>Your items</h3>
                    <div>
                        {cart.items.map((item) => (
                            <Product key={item.id} item={item} showAs="ListItem" quantity={item.quantity} />
                        ))}
                    </div>
                    <div className={style.total}>
                        Total: ${getTotal()}
                    </div>
                </>
            )}
        </div>
    )
}

//cart yo quiero que aparezca en todo el ecommerce, entonces yo podria llamarlo en cada componente, pero mejor aun puedo usar el Layout