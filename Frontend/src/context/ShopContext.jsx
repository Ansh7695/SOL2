import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = '₹';
    const delivery_fee = 69;
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});
    const [wishlistItems, setWishlistItems] = useState([]);
    const [products, setProducts] = useState([]);
    const [token, setToken] = useState('');
    const navigate = useNavigate();

    const addToCart = async (itemId, size) => {

        if (!size) {
            toast.error('Select Product Size');
            return false;
        }

        let cartData = structuredClone(cartItems);

        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            } else {
                cartData[itemId][size] = 1;
            }
        } else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }
        setCartItems(cartData);
        toast.success("Product added to cart!");

        if (token) {
            try {
                await axios.post(backendUrl + '/api/cart/add', { itemId, size }, { headers: { token } })
            } catch (error) {
                console.log(error);
                toast.error(error.message)
            }
        }

        return true;

    }

    const getDefaultSizeForProduct = (product) => {
        if (product?.sizes && Array.isArray(product.sizes) && product.sizes.length > 0) {
            return product.sizes[0];
        }
        return 'Standard';
    }

    const addToCartWithDefault = async (itemId) => {
        const selectedProduct = products.find((product) => product._id === itemId);
        const defaultSize = getDefaultSizeForProduct(selectedProduct);
        await addToCart(itemId, defaultSize);
    }

    const buyNow = async (itemId, size) => {
        const selectedProduct = products.find((product) => product._id === itemId);
        const chosenSize = size || getDefaultSizeForProduct(selectedProduct);
        const added = await addToCart(itemId, chosenSize);
        if (added) {
            navigate('/place-order');
        }
    }

    const addToWishlist = (itemId) => {
        setWishlistItems((prev) => {
            if (prev.includes(itemId)) {
                return prev;
            }
            toast.success('Added to wishlist!');
            return [...prev, itemId];
        });
    }

    const removeFromWishlist = (itemId) => {
        setWishlistItems((prev) => {
            if (!prev.includes(itemId)) {
                return prev;
            }
            toast.info('Removed from wishlist');
            return prev.filter((id) => id !== itemId);
        });
    }

    const toggleWishlist = (itemId) => {
        if (wishlistItems.includes(itemId)) {
            removeFromWishlist(itemId);
            return;
        }
        addToWishlist(itemId);
    }

    const isInWishlist = (itemId) => wishlistItems.includes(itemId);

    const getWishlistCount = () => wishlistItems.length;

    const getCartCount = () => {
        let totalCount = 0;
        for (const items in cartItems) {
            for (const item in cartItems[items]) {
                try {
                    if (cartItems[items][item] > 0) {
                        totalCount += cartItems[items][item];
                    }
                } catch (error) {

                }
            }
        }
        return totalCount;
    }

    const updateQuantity = async (itemId, size, quantity) => {

        let cartData = structuredClone(cartItems);

        cartData[itemId][size] = quantity;

        setCartItems(cartData);

        if (token) {
            try {
                await axios.post(backendUrl + '/api/cart/update', { itemId, size, quantity }, { headers: { token } })
            } catch (error) {
                console.log(error)
                toast.error(error.message)
            }
        }

    }

    const getCartAmount = () => {
        let totalAmount = 0;
        for (const items in cartItems) {
            let itemInfo = products.find((product) => product._id === items);
            for (const item in cartItems[items]) {
                try {
                    if (cartItems[items][item] > 0) {
                        totalAmount += itemInfo.price * cartItems[items][item];
                    }
                } catch (error) {

                }
            }
        }
        return totalAmount;
    }

    const getProductsData = async () => {
        try {
            const response = await axios.get(backendUrl + '/api/product/list')
            if (response.data.success) {
                setProducts(response.data.products)
            } else {
                toast.error(response.data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    const getUserCart = async (token) => {
        try {
            const response = await axios.post(backendUrl + '/api/cart/get', {}, { headers: { token } })
            if (response.data.success) {
                setCartItems(response.data.cartData)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    useEffect(() => {
        getProductsData()
    }, [])

    useEffect(() => {
        const savedWishlist = localStorage.getItem('wishlistItems');
        if (savedWishlist) {
            try {
                setWishlistItems(JSON.parse(savedWishlist));
            } catch (error) {
                console.log(error);
                setWishlistItems([]);
            }
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));
    }, [wishlistItems])

    useEffect(() => {
        if (!token && localStorage.getItem('token')) {
            setToken(localStorage.getItem('token'))
            getUserCart(localStorage.getItem('token'))
        }
    }, [])

    const value = {
        products, currency, delivery_fee,
        search, setSearch, showSearch, setShowSearch,
        cartItems, addToCart, setCartItems,
        getCartCount, updateQuantity,
        getCartAmount, navigate, backendUrl,
        setToken, token,
        addToCartWithDefault, buyNow,
        wishlistItems, addToWishlist, removeFromWishlist,
        toggleWishlist, isInWishlist, getWishlistCount
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )

}

export default ShopContextProvider;
