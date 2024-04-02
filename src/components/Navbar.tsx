import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Search from "./icons/Search";
import Button from "./ui/Button";
import ShoppingCart from "./icons/ShoppingCart";
import { Link, useLocation } from "react-router-dom";
import ArrowLeft from "./icons/ArrowLeft";
import { useDispatch, useSelector } from "react-redux";
import { setShowCart } from "./cart/cartSlice";
import { RootState } from "../store";
import { useDebounce } from "../hooks/useDebounce";

function Navbar({ setSearchQuery }: { setSearchQuery: Dispatch<SetStateAction<string>> }) {
    const location = useLocation();
    const [hideSearchBox, setHideSearchBox] = useState(false);
    const [mobileSearchBoxOpen, setMobileSearchBoxOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const debouncedSearchQuery: string = useDebounce<string>(searchTerm, 400);

    useEffect(() => {
        if (location.pathname !== '/products')
            setHideSearchBox(true);
        else
            setHideSearchBox(false);
    }, [location]);

    const HandleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setSearchTerm(value);
    }

    useEffect(() => {
        setSearchQuery(debouncedSearchQuery);
    }, [debouncedSearchQuery]);

    const cartQuantity = useSelector((state: RootState) => state.cart.cartQuantity);
    const dispatch = useDispatch();

    return (
        <header className='w-full h-16 fixed top-0 left-0 z-30 bg-white'>
            <div className='container relative mx-auto px-5 md:px-10 py-3 h-16 flex items-center justify-between transition-all duration-500 ease-in'>
                {/* Logo */}
                <Link to={'/'} className="cursor-pointer">
                    <h1 className="font-semibold text-xl">Frontend Kata</h1>
                </Link>

                {/* Search box desktop */}
                <div className={`${hideSearchBox ? 'hidden' : 'hidden md:flex flex-col items-center'}`}>
                    <div className="flex items-center space-x-2 p-2 bg-secondary text-sm text-text-primary/75 w-[450px] h-10 rounded-lg">
                        <span className="opacity-70"><Search /></span>
                        <input type="text" className='bg-transparent w-full focus:outline-none' placeholder='Search products...' onChange={HandleInputChange} />
                    </div>
                </div>

                {/* Search box mobile */}
                <div className={`absolute flex-col items-center top-0 left-0 ${mobileSearchBoxOpen ? 'flex md:hidden' : 'hidden'}`}>
                    <div className="flex items-center justify-start p-2 bg-white text-sm text-text-primary/75 w-screen h-16">
                        <Button
                            button={{
                                action: () => { setMobileSearchBoxOpen(false) },
                                style: 'w-11 h-11 mr-2 focus:bg-ozon-gray dark:focus:bg-ozon-dark-gray'
                            }}
                        >
                            <span className="text-2xl"><ArrowLeft /></span>
                        </Button>
                        <input type="text" className='flex flex-1 bg-transparent w-full focus:outline-none' placeholder='Search products...' />
                    </div>
                </div>

                <div className='flex space-x-3'>
                    <Button
                        button={{
                            action: () => { setMobileSearchBoxOpen(true) },
                            style: `md:hidden hover:opacity-40 ${hideSearchBox ? 'hidden' : ''}`
                        }}
                    >
                        <span className="text-2xl"><Search /></span>
                    </Button>
                    <div className="">
                        <div className={`${mobileSearchBoxOpen && "hidden"} absolute top-2 md:top-3 right-3 md:right-8 flex items-center justify-center h-5 w-5 bg-black rounded-full text-white`}>
                            <span className="text-xs">{cartQuantity}</span>
                        </div>
                        <Button
                            button={{
                                action: () => { dispatch(setShowCart(true)) },
                                style: "hover:opacity-40"
                            }}
                        >
                            <span className="text-2xl"><ShoppingCart color='#000' /></span>
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar