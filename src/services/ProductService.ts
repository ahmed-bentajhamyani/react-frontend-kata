import axios from "axios";

const ProductService = {
    URL: import.meta.env.VITE_API_ENDPOINT,

    getProducts: async function () {
        return await axios.get(this.URL)
            .then(res => {
                return res.data;
            })
    },

    getProduct: async function (id: number) {
        return await axios.get(this.URL! + id)
            .then(res => {
                return res.data;
            });
    },

    getProductsByCategory: async function (category: string) {
        return await axios.get(this.URL + 'category/' + category)
            .then(res => {
                return res.data;
            });
    },

    getCategories: async function () {
        return await axios.get(this.URL + '/categories');
    },

    getCategory: async function (id: number) {
        return await axios.get(this.URL + '/categories/' + id)
            .then(res => {
                return res.data;
            });
    },

    getCategoryByName: async function (name: string) {
        return await axios.get(this.URL + '/categories/name/' + name.toLowerCase())
            .then(res => {
                return res.data;
            });
    },
};

export default ProductService;