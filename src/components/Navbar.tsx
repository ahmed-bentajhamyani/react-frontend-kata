import { useRef, useState } from "react";
import Search from "./icons/Search";
import Button from "./ui/Button";
import ShoppingCart from "./icons/ShoppingCart";
import { Link } from "react-router-dom";
import ArrowLeft from "./icons/ArrowLeft";

function Navbar() {
    const [fix, setFix] = useState(false);
    const [mobileSearchBoxOpen, setMobileSearchBoxOpen] = useState(false);

    window.addEventListener("scroll", function () {
        if (window.scrollY > 0) {
            setFix(true);
        } else {
            setFix(false);
        }
    });

    const searchBoxRef = useRef(null);

    return (
        <nav className={`h-fit fixed top-0 left-0 w-full z-30 ${fix && 'bg-white'}`}>
            <div className='container relative mx-auto px-5 md:px-10 py-3 flex items-center justify-between transition-all duration-500 ease-in'>
                {/* Logo */}
                <Link to={'/'} className="cursor-pointer">
                    <h1 className="font-semibold text-xl">Frontend Kata</h1>
                </Link>

                {/* Search box desktop */}
                <div ref={searchBoxRef} className={`relative hidden md:flex flex-col items-center`}>
                    <div className="flex items-center space-x-2 px-4 py-2 bg-secondary text-sm text-text-primary/75 w-[450px] h-9 rounded-full">
                        <span><Search /></span>
                        <input type="text" className='bg-transparent w-full focus:outline-none' placeholder='Rechercher des articles...' />
                    </div>
                </div>

                {/* Search box mobile */}
                <div className={`absolute flex-col items-center top-0 left-0 ${mobileSearchBoxOpen ? 'flex md:hidden' : 'hidden'}`}>
                    <div className="flex items-center justify-start p-2 bg-white text-sm text-text-primary/75 w-screen h-[74px]">
                        <Button
                            button={{
                                action: () => { setMobileSearchBoxOpen(false) },
                                style: 'w-11 h-11 mr-2 focus:bg-ozon-gray dark:focus:bg-ozon-dark-gray'
                            }}
                        >
                            <span className="text-2xl"><ArrowLeft /></span>
                        </Button>
                        <input type="text" className='flex flex-1 bg-transparent w-full focus:outline-none' placeholder='Rechercher des articles...' />
                    </div>
                </div>

                <div className='flex space-x-3'>
                    <Button
                        button={{
                            action: () => { setMobileSearchBoxOpen(true) },
                            style: "md:hidden hover:opacity-40"
                        }}
                    >
                        <span className="text-2xl"><Search /></span>
                    </Button>
                    <Button
                        button={{
                            style: "hover:opacity-40"
                        }}
                    >
                        <span className="text-2xl"><ShoppingCart color='#000' /></span>
                    </Button>
                </div>
            </div>
        </nav >
    )
}

export default Navbar