import { createContext, useState } from "react"
import PropTypes from "prop-types"

export const BasketContext = createContext(null)

const BasketProvider = ({ children }) => {

    const [basket, setBasket] = useState([])

    // const addToBasket = (book) => { 
    //     const index = basket.findIndex((q)=> q.id === book.id)
    //     if (index === -1) {
    //         setBasket([...basket, {...book, quantity: 1}])
    //     } else {
    //         basket[index].quantity++
    //         setBasket([...basket])
    //     }
    // }

    const addToBasket = (book) => {
        if(!book) return

        setBasket((prevBasket) => {
            const index = basket.findIndex((q) => q.id === book.id)
            if (index === -1) {
                return [...basket, { ...book, quantity: 1 }]
            }
            prevBasket[index].quantity++;
            return [...prevBasket]
        })
    }

    console.log(basket);

    const removeFromBasket = (id) => {
        setBasket(basket.filter((q) => q.id !== id))
    }

    const incrementBasketItemQuantity = (id) => {
        setBasket((prevBasket) => {
            const idx = basket.findIndex((q) => q.id == id)
            basket[idx].quantity++
            return [...prevBasket]
        })

    }
    const decrementBasketItemQuantity = (id) => {
        setBasket((prevBasket) => {
            const idx = basket.findIndex((q) => q.id == id)
            if(basket[idx].quantity === 1) {
                return prevBasket;
            }

            basket[idx].quantity--
            // if(basket[idx].quantity === 0) {
            //     return prevBasket.filter((q) => q.id !== id)
            // }
            return [...prevBasket]
        })
     }

    const clearBasket = () => {
        setBasket([])
    }

    return (
        <BasketContext.Provider value={{ basket, addToBasket, removeFromBasket, incrementBasketItemQuantity, decrementBasketItemQuantity, clearBasket }}>
            {children}
        </BasketContext.Provider>
    )
}


BasketProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
}

export default BasketProvider