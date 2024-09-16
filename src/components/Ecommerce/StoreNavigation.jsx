/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
'use client'

import { Fragment, useState } from 'react'
import {
    Dialog,
    DialogBackdrop,
    DialogPanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    Tab,
    TabGroup,
    TabList,
    TabPanel,
    TabPanels,
} from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = {
    categories: [
        {
            id: 'women',
            name: 'Women',
            featured: [
                {
                    name: 'New Arrivals',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
                    imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
                },
                {
                    name: 'Basic Tees',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
                    imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
                },
            ],
            sections: [
                {
                    id: 'clothing',
                    name: 'Clothing',
                    items: [
                        { name: 'Tops', href: '#' },
                        { name: 'Dresses', href: '#' },
                        { name: 'Pants', href: '#' },
                        { name: 'Denim', href: '#' },
                        { name: 'Sweaters', href: '#' },
                        { name: 'T-Shirts', href: '#' },
                        { name: 'Jackets', href: '#' },
                        { name: 'Activewear', href: '#' },
                        { name: 'Browse All', href: '#' },
                    ],
                },
                {
                    id: 'accessories',
                    name: 'Accessories',
                    items: [
                        { name: 'Watches', href: '#' },
                        { name: 'Wallets', href: '#' },
                        { name: 'Bags', href: '#' },
                        { name: 'Sunglasses', href: '#' },
                        { name: 'Hats', href: '#' },
                        { name: 'Belts', href: '#' },
                    ],
                },
                {
                    id: 'brands',
                    name: 'Brands',
                    items: [
                        { name: 'Full Nelson', href: '#' },
                        { name: 'My Way', href: '#' },
                        { name: 'Re-Arranged', href: '#' },
                        { name: 'Counterfeit', href: '#' },
                        { name: 'Significant Other', href: '#' },
                    ],
                },
            ],
        },
        {
            id: 'men',
            name: 'Men',
            featured: [
                {
                    name: 'New Arrivals',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
                    imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
                },
                {
                    name: 'Artwork Tees',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
                    imageAlt:
                        'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
                },
            ],
            sections: [
                {
                    id: 'clothing',
                    name: 'Clothing',
                    items: [
                        { name: 'Tops', href: '#' },
                        { name: 'Pants', href: '#' },
                        { name: 'Sweaters', href: '#' },
                        { name: 'T-Shirts', href: '#' },
                        { name: 'Jackets', href: '#' },
                        { name: 'Activewear', href: '#' },
                        { name: 'Browse All', href: '#' },
                    ],
                },
                {
                    id: 'accessories',
                    name: 'Accessories',
                    items: [
                        { name: 'Watches', href: '#' },
                        { name: 'Wallets', href: '#' },
                        { name: 'Bags', href: '#' },
                        { name: 'Sunglasses', href: '#' },
                        { name: 'Hats', href: '#' },
                        { name: 'Belts', href: '#' },
                    ],
                },
                {
                    id: 'brands',
                    name: 'Brands',
                    items: [
                        { name: 'Re-Arranged', href: '#' },
                        { name: 'Counterfeit', href: '#' },
                        { name: 'Full Nelson', href: '#' },
                        { name: 'My Way', href: '#' },
                    ],
                },
            ],
        },
    ],
    pages: [
        { name: 'Company', href: '#' },
        { name: 'Stores', href: '#' },
    ],
}

export default function StoreNavigation({ setIsCartOpen }) {
    const [open, setOpen] = useState(false)
    const [searchActive, setSearchActive] = useState(false) // New state for search

    const handleSearchClick = () => {
        setSearchActive(true)
    }

    const handleSearchClose = () => {
        setSearchActive(false)
    }

    return (
        <div className="bg-white">
            {/* Mobile menu */}
            <Dialog open={open} onClose={() => setOpen(false)} className="relative z-40 lg:hidden">
                <DialogBackdrop
                    transition
                    className="fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
                />
                <div className="fixed inset-0 z-40 flex">
                    <DialogPanel
                        transition
                        className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:-translate-x-full"
                    >
                        <div className="flex px-4 pb-2 pt-5">
                            <button
                                type="button"
                                onClick={() => setOpen(false)}
                                className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                            >
                                <span className="absolute -inset-0.5" />
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                            </button>
                        </div>
                        {/* Links */}
                        <TabGroup className="mt-2">
                            {/* (Your existing TabGroup code) */}
                        </TabGroup>
                        {/* (Your existing links and currency code) */}
                    </DialogPanel>
                </div>
            </Dialog>

            <header className="relative bg-white">
                <p className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
                    Get free delivery on orders over $100
                </p>

                <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="border-b border-gray-200">
                        <div className="flex h-16 items-center">
                            {/* Hamburger Menu */}
                            {!searchActive && (
                                <button
                                    type="button"
                                    onClick={() => setOpen(true)}
                                    className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
                                >
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Open menu</span>
                                    <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                                </button>
                            )}

                            {/* Logo */}
                            {!searchActive && (
                                <div className="ml-4 flex lg:ml-0">
                                    <a href="#">
                                        <span className="sr-only">Your Company</span>
                                        <img
                                            alt=""
                                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                            className="h-8 w-auto"
                                        />
                                    </a>
                                </div>
                            )}

                            {/* Flyout menus */}
                            {!searchActive && (
                                <PopoverGroup className="hidden lg:ml-8 lg:block lg:self-stretch">
                                    <div className="flex h-full space-x-8">
                                        {navigation.categories.map((category) => (
                                            <Popover key={category.name} className="flex">
                                                {/* (Your existing Popover code) */}
                                            </Popover>
                                        ))}

                                        {navigation.pages.map((page) => (
                                            <a
                                                key={page.name}
                                                href={page.href}
                                                className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                                            >
                                                {page.name}
                                            </a>
                                        ))}
                                    </div>
                                </PopoverGroup>
                            )}

                            <div className="ml-auto flex items-center">
                                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                                    {!searchActive && (
                                        <>
                                            <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                                                Sign in
                                            </a>
                                            <span aria-hidden="true" className="h-6 w-px bg-gray-200" />
                                            <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                                                Create account
                                            </a>
                                        </>
                                    )}
                                </div>

                                <div className="hidden lg:ml-8 lg:flex">
                                    {!searchActive && (
                                        <a href="#" className="flex items-center text-gray-700 hover:text-gray-800">
                                            <img
                                                alt=""
                                                src="https://tailwindui.com/img/flags/flag-canada.svg"
                                                className="block h-auto w-5 flex-shrink-0"
                                            />
                                            <span className="ml-3 block text-sm font-medium">CAD</span>
                                            <span className="sr-only">, change currency</span>
                                        </a>
                                    )}
                                </div>

                                {/* Search */}
                                <div className="relative flex lg:ml-6">
                                    <input
                                        type="search"
                                        className="peer cursor-pointer text-black relative z-10 h-12 w-12 rounded-full border-2 border-transparent bg-transparent pl-12 outline-none transition-all duration-300 ease-in-out focus:w-full focus:border-gray-300 focus:pl-16 focus:pr-4"
                                        onFocus={handleSearchClick} // Set searchActive to true when the input is focused
                                        onBlur={handleSearchClose} // Set searchActive to false when the input loses focus
                                    />
                                    <a href="#" className="absolute inset-y-0 left-2 flex items-center text-gray-400 hover:text-gray-500">
                                        <span className="sr-only">Search</span>
                                        <MagnifyingGlassIcon aria-hidden="true" className="h-6 w-6" />
                                    </a>
                                </div>

                                {/* Cart */}
                                {!searchActive && (
                                    <div className="ml-4 flow-root lg:ml-6">
                                        <button onClick={() => setIsCartOpen(true)} className="group -m-2 flex items-center p-2">
                                            <ShoppingBagIcon
                                                aria-hidden="true"
                                                className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                            />
                                            <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                                            <span className="sr-only">items in cart, view bag</span>
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}
