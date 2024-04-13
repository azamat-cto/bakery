import FavoriteBread1 from "@/assets/images/favorite-bread-1.png";
import FavoriteBread2 from "@/assets/images/favorite-bread-2.png";
import FavoriteBread3 from "@/assets/images/favorite-bread-3.png";
import FavoriteBread4 from "@/assets/images/favorite-bread-4.png";
import FavoriteBread5 from "@/assets/images/favorite-bread-5.png";
import FavoriteBread6 from "@/assets/images/favorite-bread-6.png";
import NewBread1 from "@/assets/images/new-bread-1.png";
import NewBread2 from "@/assets/images/new-bread-2.png";
import NewBread3 from "@/assets/images/new-bread-3.png";

export const links = [
    {
        key: "hero",
        url: "#hero",
        label: "Home",
    },
    {
        key: "news",
        url: "#news",
        label: "News",
    },
    {
        key: "about",
        url: "#about",
        label: "About Us",
    },
    {
        key: "favorites",
        url: "#favorites",
        label: "Favorites",
    },
    {
        key: "location",
        url: "#location",
        label: "Location",
    },
] as const;

export const news = [
    {
        id: "rye-bread",
        title: "Rye Bread",
        description:
            "Baked with healthy, gluten-free sourdough for good nutrition",
        image: NewBread1,
    },
    {
        id: "multigrain-bread",
        title: "Multigrain Bread",
        description:
            "Tasty and made with different natural grains from the countryside",
        image: NewBread2,
    },
    {
        id: "grain-bread",
        title: "Whole Grain Bread",
        description:
            "Crispy and homemade prepared from organic yeast-free flour",
        image: NewBread3,
    },
] as const;

export const items = [
    {
        id: "whole-grain",
        title: "Whole Grain",
        description: "Bread",
        image: FavoriteBread1,
        price: 6.0,
    },
    {
        id: "rye",
        title: "Rye",
        description: "Bread",
        image: FavoriteBread2,
        price: 8.0,
    },
    {
        id: "wheat",
        title: "Wheat",
        description: "Bread",
        image: FavoriteBread3,
        price: 3.0,
    },
    {
        id: "multigrain",
        title: "Multigrain",
        description: "Bread",
        image: FavoriteBread4,
        price: 5.0,
    },
    {
        id: "sourdough",
        title: "Sourdough",
        description: "Bread",
        image: FavoriteBread5,
        price: 7.0,
    },
    {
        id: "french",
        title: "French",
        description: "Bread",
        image: FavoriteBread6,
        price: 3.0,
    },
] as const;
