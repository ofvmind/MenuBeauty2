// Коктейлі
import mojito from "../../assets/images/menu_imgs/mojito.jpg";
import sexOn from "../../assets/images/menu_imgs/sexOn.webp";
import margaret from "../../assets/images/menu_imgs/margaret.jpeg";
import aparel from "../../assets/images/menu_imgs/aparel.jpg";
import mimoza from "../../assets/images/menu_imgs/mimoza.jpg";
import blue from "../../assets/images/menu_imgs/blueLagun.jpg";

//Піццв
import pizzaBBQ from "../../assets/images/menu_imgs/BBQ.jpg";
import pizzaMARG from "../../assets/images/menu_imgs/pizzaMARG.jpg";
import pizzaCHEEZE from "../../assets/images/menu_imgs/pizzaCHEEZE.jpg";
import pizzaGAVAY from "../../assets/images/menu_imgs/pizzaGAVAY.webp";

//Соки
import juiceApple from "../../assets/images/menu_imgs/juiceApple.jpg";
import orangeJuice from "../../assets/images/menu_imgs/orangeJuice.jpg";
import cherryJuice from "../../assets/images/menu_imgs/cherryJuice.jpg";
import pineappleJuice from "../../assets/images/menu_imgs/pineappleJuice.jpg";
 
//Вина
import wineBolgrad from "../../assets/images/menu_imgs/wineBolgtad.jpg";
import whiteWine from "../../assets/images/menu_imgs/whiteWine.jpg";
import redWine from "../../assets/images/menu_imgs/wineRed.jpg";
import kabarneWine from "../../assets/images/menu_imgs/wineKabarne.png";

//Міцний алкоголь
import vodkaHortica from "../../assets/images/menu_imgs/horticaVodka.jpeg";
import vodkaCosack from "../../assets/images/menu_imgs/vodkaCosack.jpg";
import viskiJameson from "../../assets/images/menu_imgs/viskiJameson.jpg";
import viskiJack from "../../assets/images/menu_imgs/viskiJack.jpg";

export const cocktail = [
    {id: 1, title: "Мохіто", price: 110, image: mojito, type: "cocktail", quantity: "350ml", description: "Текст заповнювач для шаблону опису товара Текст заповнювач для шаблону опису товара Текст заповнювач для шаблону опису товара"},
    {id: 2, title: "Cекс на пляжі", price: 90, image: sexOn, type: "cocktail", quantity: "350ml", description: "Текст заповнюваш для шаблони опису товару Текст заповнювач для шаблону опису товара Текст заповнювач для шаблону опису товара"},
    {id: 3, title: "Маргарита", price: 120, image: margaret, type: "cocktail", quantity: "200ml", description: "Текст заповнюваш для шаблони опису товару Текст заповнювач для шаблону опису товара Текст заповнювач для шаблону опису товара"},
    {id: 4, title: "Апероль", price: 100, image: aparel, type: "cocktail", quantity: "3500ml", description: "Текст заповнюваш для шаблони опису товару Текст заповнювач для шаблону опису товара Текст заповнювач для шаблону опису товара"},
    {id: 5, title: "Мімоза", price: 100, image: mimoza, type: "cocktail", quantity: "250ml", description: "Текст заповнюваш для шаблони опису товару Текст заповнювач для шаблону опису товара Текст заповнювач для шаблону опису товара"},
    {id: 6, title: "Блакитна Лагуна", price: 110, image: blue, type: "cocktail", quantity: "350ml", description: "Текст заповнюваш для шаблони опису товару Текст заповнювач для шаблону опису товара Текст заповнювач для шаблону опису товара"},
];

export const pizza = [
    {id: 1, title: "Піцца BBQ", price: 360, image: pizzaBBQ, type: "pizza", quantity: "40cm", description: "Текст заповнюваш для шаблони опису товару Текст заповнювач для шаблону опису товара Текст заповнювач для шаблону опису товара"},
    {id: 2, title: "Маргарита", price: 375, image: pizzaMARG, type: "pizza", quantity: "40cm", description: "Текст заповнюваш для шаблони опису товару Текст заповнювач для шаблону опису товара Текст заповнювач для шаблону опису товара"},
    {id: 3, title: "П'ять Сирів", price: 330, image: pizzaCHEEZE, type: "pizza", quantity: "40cm", description: "Текст заповнюваш для шаблони опису товару Текст заповнювач для шаблону опису товара Текст заповнювач для шаблону опису товара"},
    {id: 4, title: "Гаваї", price: 360, image: pizzaCHEEZE, type: "pizza", quantity: "40cm", description: "Текст заповнюваш для шаблони опису товару Текст заповнювач для шаблону опису товара Текст заповнювач для шаблону опису товара"},
];

export const juice = [
    {id: 1, title: "Сік яблучний", price: 85, image: juiceApple, type: "juice", quantity: "1000ml", description: "Текст заповнюваш для шаблони опису товару Текст заповнювач для шаблону опису товара Текст заповнювач для шаблону опису товара"},
    {id: 2, title: "Сік апельсиновий", price: 90, image: orangeJuice, type: "juice", quantity: "1000ml", description: "Текст заповнюваш для шаблони опису товару Текст заповнювач для шаблону опису товара Текст заповнювач для шаблону опису товара"},
    {id: 3, title: "Сік вишневий", price: 80, image: cherryJuice, type: "juice", quantity: "1000ml", description: "Текст заповнюваш для шаблони опису товару Текст заповнювач для шаблону опису товара Текст заповнювач для шаблону опису товара"},
    {id: 4, title: "Сік ананасовий", price: 95, image: pineappleJuice, type: "juice", quantity: "1000ml", description: "Текст заповнюваш для шаблони опису товару Текст заповнювач для шаблону опису товара Текст заповнювач для шаблону опису товара"},
];

export const strongAlco = [
    {id: 1, title: "Горілка Хортиця", price: 150, image: vodkaHortica, type: "drinks", quantity: "500ml", description: "Текст заповнюваш для шаблони опису товару Текст заповнювач для шаблону опису товара"},
    {id: 2, title: "Козацька Рада", price: 150, image: vodkaCosack, type: "drinks", quantity: "500ml", description: "Текст заповнюваш для шаблони опису товару Текст заповнювач для шаблону опису товара"},
    {id: 3, title: "Віскі JackDaniels", price: 799, image: viskiJack, type: "drinks", quantity: "500ml", description: "Текст заповнюваш для шаблони опису товару Текст заповнювач для шаблону опису товара"},
    {id: 4, title: "Віскі Jameson", price: 1000, image: viskiJameson, type: "drinks", quantity: "500ml", description: "Текст заповнюваш для шаблони опису товару Текст заповнювач для шаблону опису товара"},
];

export const wine = [
    {id: 1, title: "Червоне Bolgrad", price: 150, image: wineBolgrad, type: "wine", quantity: "750ml", description: "Текст заповнюваш для шаблони опису товару Текст заповнювач для шаблону опису товара"},
    {id: 2, title: "Біле Вино", price: 200, image: whiteWine, type: "wine", quantity: "750ml", description: "Текст заповнюваш для шаблони опису товару Текст заповнювач для шаблону опису товара"},
    {id: 3, title: "Червоне Вино", price: 200, image: redWine, type: "wine", quantity: "750ml", description: "Текст заповнюваш для шаблони опису товару Текст заповнювач для шаблону опису товара"},
    {id: 4, title: "Кабарне", price: 185, image: kabarneWine, type: "wine", quantity: "750ml", description: "Текст заповнюваш для шаблони опису товару Текст заповнювач для шаблону опису товара"},
];

//Таблицы (бар-меню);

export const bar_menu = [
    {id: 1, title: "Горілка Green Day", half: "40", full: "80"},
    {id: 2, title: "Горілка Хортиця", half: "40", full: "80"},
    {id: 3, title: "Горілка Козацька Рада", half: "40", full: "80"},
    {id: 4, title: "Настойка Вишнева", half: "40", full: "80"},
    {id: 5, title: "Джин", half: "80", full: "160"},
    {id: 6, title: "Віскі JackDaniels", half: "80", full: "160"},
    {id: 7, title: "Віскі Jameson", half: "80", full: "160"},
    {id: 8, title: "Текіла Coronado", half: "70", full: "180"},
    {id: 9, title: "Абсент Xenta Ansenta", half: "90", full: "180"}
];