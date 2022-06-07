import axios from "axios";
import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import useBasicImage from "../CUSTOM_HOOK/useBasicImage";

const AddNewInventory = () => {
    //refresh and get top of the page
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    //getting brand logo
    const [basicImage] = useBasicImage();
    const logo = basicImage.find((item) => item.name === "brand-logo");

    //getting user for sending token to backend
    const [user] = useAuthState(auth);

    const handleAddNewProduct = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const description = e.target.description.value;
        const image = e.target.image.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;
        const supplier = e.target.supplier.value;

        if (!name || !email || !description || !image || !price || !quantity || !supplier) {
            return toast("Please fill up every detail", {
                autoClose: 2000,
            });
        }

        if (price <= 0 || quantity <= 0) {
            return toast("Please Input valid number or greater than 0", {
                autoClose: 2000,
            });
        }

        const newProduct = {
            name,
            email,
            description,
            image,
            price: parseInt(price),
            quantity: parseInt(quantity),
            supplier,
        };

        //using axios for posting
        axios
            .post("https://quiet-springs-92968.herokuapp.com/inventory", newProduct, {
                headers: {
                    authorization: `${user?.email} ${localStorage.getItem("accessToken")}`,
                },
            })
            .then((res) => {
                if (res?.data?.acknowledged) {
                    toast("The Product was added😃", {
                        autoClose: 2000,
                    });
                } else {
                    toast.error(`${res?.data?.message}`, {
                        autoClose: 2000,
                    });
                }
            });

        e.target.reset();
    };

    return (
        <div className="mt-28 md:mx-auto mx-5 md:w-[30rem] md:px-8 px-3 py-5 border rounded-lg border-[#ad6449]">
            <div>
                <img className="h-16 mx-auto" src={logo?.image} alt="" />
                <p className="text-center text-2xl pt-5 text-[#ad644a]">Add Product in collection</p>
            </div>

            <div className="md:mt-12 mt-8">
                <form onSubmit={handleAddNewProduct}>
                    <input
                        className="w-full py-3 mb-3 px-5 focus:outline-none bg-slate-50 rounded-lg"
                        type="text"
                        name="name"
                        placeholder="Name"
                    />
                    <input
                        className="w-full py-3 mb-3 px-5 focus:outline-none bg-slate-50 rounded-lg"
                        type="email"
                        name="email"
                        placeholder="E-mail"
                    />
                    <input
                        className="w-full py-3 mb-3 px-5 focus:outline-none bg-slate-50 rounded-lg"
                        type="text"
                        name="description"
                        placeholder="Description"
                    />
                    <input
                        className="w-full py-3 mb-3 px-5 focus:outline-none bg-slate-50 rounded-lg"
                        type="text"
                        name="image"
                        placeholder="Image"
                    />
                    <input
                        className="w-full py-3 mb-3 px-5 focus:outline-none bg-slate-50 rounded-lg"
                        type="number"
                        name="price"
                        placeholder="Price"
                    />
                    <input
                        className="w-full py-3 mb-3 px-5 focus:outline-none bg-slate-50 rounded-lg"
                        type="number"
                        name="quantity"
                        placeholder="Quantity"
                    />
                    <input
                        className="w-full py-3 mb-3 px-5 focus:outline-none bg-slate-50 rounded-lg"
                        type="text"
                        name="supplier"
                        placeholder="Supplier"
                    />
                    <input
                        className="w-full py-3 mb-3 text-[#ad6449] bg-slate-50 rounded-lg cursor-pointer font-semibold text-xl"
                        type="submit"
                        value="Insert"
                    />
                </form>
            </div>
        </div>
    );
};

export default AddNewInventory;