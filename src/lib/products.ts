export type ProductCategory = "tees" | "pants";

export type Product = {
  id: string;
  name: string;
  price: number;
  category: ProductCategory;
  image: string;
  hoverImage?: string;
  description: string;
  sizes: string[];
};

export type Look = {
  id: string;
  label: string;
  image: string;
  title: string;
  productIds: string[];
};

export const products: Product[] = [
  {
    id: "tee-heavyweight-black",
    name: "Zen Heavyweight Tee",
    price: 1490,
    category: "tees",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80",
    hoverImage:
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=900&q=80",
    description: "Oversized drop-shoulder tee in dense cotton jersey.",
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: "tee-cloud-wash",
    name: "Cloud Wash Oversized Tee",
    price: 1590,
    category: "tees",
    image:
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=900&q=80",
    hoverImage:
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=900&q=80",
    description: "Soft washed oversized tee for everyday movement.",
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: "tee-stone-boxy",
    name: "Stone Boxy Tee",
    price: 1490,
    category: "tees",
    image:
      "https://images.unsplash.com/photo-1622445275463-afa2ab738c34?auto=format&fit=crop&w=900&q=80",
    hoverImage:
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=900&q=80",
    description: "Boxy cut with extended sleeves and clean hem.",
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: "tee-zen-green",
    name: "Club Zen Accent Tee",
    price: 1690,
    category: "tees",
    image:
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=900&q=80",
    hoverImage:
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=900&q=80",
    description: "Minimal branding with Club Zen green detail.",
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: "pants-baggy-black",
    name: "Baggy Wide Pants",
    price: 2490,
    category: "pants",
    image:
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=900&q=80",
    hoverImage:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=900&q=80",
    description: "Relaxed wide-leg pants with deep pockets.",
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: "pants-relaxed-charcoal",
    name: "Relaxed Charcoal Pants",
    price: 2590,
    category: "pants",
    image:
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=900&q=80",
    hoverImage:
      "https://images.unsplash.com/photo-1506629082955-711b1c39324b?auto=format&fit=crop&w=900&q=80",
    description: "Soft tailored baggy fit for daily wear.",
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: "pants-movement-cargo",
    name: "Movement Cargo Pants",
    price: 2790,
    category: "pants",
    image:
      "https://images.unsplash.com/photo-1517438476312-10d79c077509?auto=format&fit=crop&w=900&q=80",
    hoverImage:
      "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&w=900&q=80",
    description: "Utility-inspired baggy cargos built to move.",
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: "pants-drawstring-wide",
    name: "Drawstring Wide Pants",
    price: 2390,
    category: "pants",
    image:
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=900&q=80",
    hoverImage:
      "https://images.unsplash.com/photo-1584370848010-d7fe6d4fd8bf?auto=format&fit=crop&w=900&q=80",
    description: "Elastic waist, adjustable drawstring, room to style.",
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
];

export const looks: Look[] = [
  {
    id: "look-01",
    label: "LOOK 01",
    title: "Morning Drop",
    image:
      "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=1200&q=80",
    productIds: ["tee-heavyweight-black", "pants-baggy-black"],
  },
  {
    id: "look-02",
    label: "LOOK 02",
    title: "Street Ease",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80",
    productIds: ["tee-cloud-wash", "pants-relaxed-charcoal"],
  },
  {
    id: "look-03",
    label: "LOOK 03",
    title: "Quiet Volume",
    image:
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1200&q=80",
    productIds: ["tee-stone-boxy", "pants-drawstring-wide"],
  },
  {
    id: "look-04",
    label: "LOOK 04",
    title: "City Movement",
    image:
      "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=1200&q=80",
    productIds: ["tee-zen-green", "pants-movement-cargo"],
  },
];

export const heroImages = {
  background:
    "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=2000&q=70",
  model: "/images/model.png",
  preview:
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=80",
  collectionTees:
    "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=1400&q=80",
  collectionPants:
    "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=1400&q=80",
};

export function getProductById(id: string) {
  return products.find((p) => p.id === id);
}

export function formatPrice(amount: number) {
  return `৳${amount.toLocaleString("en-BD")}`;
}
