/*
import { type Reactive, reactive } from "vue";

export const products: Reactive<Products[]> = reactive<Products[]>([
    {
        id: 1,
        brand: "Google LLC",
        link2Pic:
            "https://m.media-amazon.com/images/I/61vp97LSYFL._AC_SL1500_.jpg",
        basePrice: 995.0,
        discountPrice: 1005.0,
        collection: "Mobile Phone",
        title: "Pixel 9 Series",
        options: [
            {
                name: "Size",
                values: [
                    { value: 128, priceAdj: 0 },
                    { value: 256, priceAdj: 100 },
                    { value: 512, priceAdj: 200 },
                    { value: 1024, priceAdj: 400 },
                ],
            },
            {
                name: "Color",
                values: [
                    { value: "Porcelain" },
                    { value: "Hazel" },
                    { value: "Obsidian" },
                    { value: "Rose Quartz" },
                ],
            },
        ],
    },
    {
        id: 2,
        brand: "Google LLC",
        link2Pic:
            "https://m.media-amazon.com/images/I/81JV1TrIGlL._AC_SL1500_.jpg",
        basePrice: 574,
        discountPrice: 459,
        collection: "Tablets",
        title: "Pixel Tablet with Speaker Dock",
        options: [
            {
                name: "Size",
                values: [
                    { value: 128, priceAdj: 0 },
                    { value: 256, priceAdj: 100 },
                ],
            },
            {
                name: "Color",
                values: [
                    { value: "Porcelain" },
                    { value: "Hazel" },
                    { value: "Rose" },
                ],
            },
        ],
    },
    {
        id: 3,
        brand: "Google LLC",
        link2Pic:
            "https://m.media-amazon.com/images/I/61iVGS1pGIL._AC_SL1500_.jpg",
        basePrice: 349,
        discountPrice: 299,
        collection: "Wearables",
        title: "Pixel Watch 2",
        options: [
            {
                name: "Size",
                values: [
                    { value: "L", priceAdj: 0 },
                    { value: "XL", priceAdj: 50 },
                ],
            },
            {
                name: "Color",
                values: [
                    { value: "Matte Black" },
                    { value: "Polished Silver" },
                    { value: "Champagne Gold" },
                ],
            },
        ],
    },
    {
        id: 4,
        brand: "Google LLC",
        link2Pic:
            "https://m.media-amazon.com/images/I/610C3ekZPTL._AC_SL1500_.jpg",
        basePrice: 199,
        discountPrice: 179,
        collection: "Home Devices",
        title: "Nest Hub Max",
        options: [
            {
                name: "Color",
                values: [{ value: "Chalk" }, { value: "Charcoal" }],
            },
        ],
    },
    {
        id: 5,
        brand: "Google LLC",
        link2Pic:
            "https://m.media-amazon.com/images/I/71YtvwJl+2L._AC_SL1500_.jpg",
        basePrice: 129,
        discountPrice: 109,
        collection: "Audio",
        title: "Nest Audio",
        options: [
            {
                name: "Color",
                values: [
                    { value: "Sand" },
                    { value: "Sky" },
                    { value: "Charcoal" },
                    { value: "Chalk" },
                ],
            },
        ],
    },
    {
        id: 6,
        brand: "Microsoft Corporation",
        link2Pic:
            "https://m.media-amazon.com/images/I/51h5pB5k3LL._AC_SL1280_.jpg",
        basePrice: 1399,
        discountPrice: 627,
        collection: "Laptops",
        title: "Surface Laptop 5",
        options: [
            {
                name: "Size",
                values: [
                    { value: 256, priceAdj: 0 },
                    { value: 512, priceAdj: 200 },
                ],
            },
            {
                name: "Color",
                values: [
                    { value: "Platinum" },
                    { value: "Matte Black" },
                    { value: "Sandstone" },
                ],
            },
        ],
    },
    {
        id: 7,
        brand: "Microsoft Corporation",
        link2Pic:
            "https://m.media-amazon.com/images/I/51BN5o0rkwL._AC_SL1000_.jpg",
        basePrice: 1599,
        discountPrice: 1499,
        collection: "Tablets",
        title: "Surface Pro 9",
        options: [
            {
                name: "Size",
                values: [
                    { value: 128, priceAdj: 0 },
                    { value: 256, priceAdj: 100 },
                    { value: 512, priceAdj: 200 },
                    { value: 1024, priceAdj: 400 },
                ],
            },
            {
                name: "Color",
                values: [
                    { value: "Platinum" },
                    { value: "Sapphire" },
                    { value: "Forest" },
                    { value: "Graphite" },
                ],
            },
        ],
    },
    {
        id: 8,
        brand: "Microsoft Corporation",
        link2Pic:
            "https://m.media-amazon.com/images/I/61e71pD8y6L._AC_SL1500_.jpg",
        basePrice: 129,
        discountPrice: 117,
        collection: "Accessories",
        title: "Surface Slim Pen 2",
        options: [
            {
                name: "Color",
                values: [{ value: "Black" }, { value: "Silver" }],
            },
        ],
    },
    {
        id: 9,
        brand: "Google LLC",
        link2Pic:
            "https://m.media-amazon.com/images/I/71NwcH4sdYL._AC_SL1500_.jpg",
        basePrice: 59,
        discountPrice: 49,
        collection: "Audio",
        title: "Chromecast with Google TV",
        options: [
            {
                name: "Color",
                values: [
                    { value: "Snow" },
                    { value: "Sunrise" },
                    { value: "Sky" },
                ],
            },
        ],
    },
    {
        id: 10,
        brand: "Microsoft Corporation",
        link2Pic:
            "https://m.media-amazon.com/images/I/41tdV+LJ4uL._AC_SL1000_.jpg",
        basePrice: 49,
        discountPrice: 39,
        collection: "Accessories",
        title: "Modern Mobile Mouse",
        options: [
            {
                name: "Color",
                values: [
                    { value: "Black" },
                    { value: "White" },
                    { value: "Blue" },
                    { value: "Peach" },
                ],
            },
        ],
    },
]);