import { ref } from "vue";

export function productCardButtonActions(userId?: string) {
    const cart = ref<CartItem[]>([]);
    const favorites = ref<CartItem[]>([]);

    const getLocalStorageKey = (key: string): string => {
        return userId ? `${userId}-${key}` : key;
    };

    /*
     * Check if the merchandise exists in the cart or fav list.
     * if (exists) then do nothing -> console.log("messages")
     * if (!exists) then save into LocalStorage using JSON.
     * */
    const addToCart = (product: CartItem): void => {
        const exists = cart.value.find((item) => {
            return (
                item.id === product.id &&
                JSON.stringify(item.selectedOptions) ===
                    JSON.stringify(product.selectedOptions)
            );
        });

        if (!exists) {
            cart.value.push(product);
            console.log("Added to cart", cart.value);
            localStorage.setItem(
                getLocalStorageKey("cart"),
                JSON.stringify(cart.value),
            );
        } else {
            console.log("Already in the cart:", product.id);
        }
    };

    const addToFavorites = (product: CartItem): void => {
        const exists = favorites.value.find((item) => {
            return (
                item.id === product.id &&
                JSON.stringify(item.selectedOptions) ===
                    JSON.stringify(product.selectedOptions)
            );
        });

        if (!exists) {
            favorites.value.push(product);
            console.log("Added to favorites", favorites.value);
            localStorage.setItem(
                getLocalStorageKey("favorites"),
                JSON.stringify(favorites.value),
            );
        } else {
            console.log("Already in the favorites:", product.id);
        }
    };

    return {
        cart,
        favorites,
        addToCart,
        addToFavorites,
    };
}