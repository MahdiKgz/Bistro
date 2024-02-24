const menuItemDetail = [
  { shortName : "deserts" ,logoId: "desert", title: "دسر ها" },
  { shortName : "drinks" ,logoId: "drink", title: "نوشیدنی ها" },
  { shortName : "main-dish" ,logoId: "main-dish", title: "وعده های اصلی" },
  { shortName : "breakfast" ,logoId: "breakfast", title: "صبحانه" },
];
const cardsDetail = [
  {
    id: 1,
    imagePath: "asserts/images/card1.jpeg",
    title: "پذیرایی",
    description:
      "در عصر جدید فناوری، ما با اطمینان و افتخار به آینده نگاه می کنیم.",
  },
  {
    id: 2,
    imagePath: "asserts/images/birthday.png",
    title: "تولد ها",
    description:
      "در عصر جدید فناوری، ما با اطمینان و افتخار به آینده نگاه می کنیم.",
  },
  {
    id: 3,
    imagePath: "asserts/images/wedding.png",
    title: "مراسم ازدواج",
    description:
      "در عصر جدید فناوری، ما با اطمینان و افتخار به آینده نگاه می کنیم.",
  },
  {
    id: 4,
    imagePath: "asserts/images/greetings.png",
    title: "دورهمی ها",
    description:
      "در عصر جدید فناوری، ما با اطمینان و افتخار به آینده نگاه می کنیم.",
  },
];

const customersComments = [
  {
    id: 3,
    title: "رستوران بی نظیر",
    comment:
      "تجربه آشپزی در محل اولین چیزی است که هیچ. جو پر جنب و جوش است، غذا - چیزی جز خارق العاده نیست. غذا نقطه برجسته عصر ما بود. بسیار توصیه شده.",
    name: "مریم عباس زاده",
    location: "ایران تهران",
  },
  {
    id: 2,
    title: "به سادگی خوشمزه",
    comment:
      "مکان در همه زمینه ها فراتر از انتظارات من بود. محیط دنج و آرام بود و آن را به مکانی عالی برای شام سالگرد ما تبدیل کرد. هر غذا آماده و به زیبایی ارائه شد.",
    name: "متین میزرا زاده",
    location: "ایران تهران",
  },
  {
    id: 1,
    title: "بهترین رستوران",
    comment:
      "دیشب، در یک مکان ناهار خوردیم و به سادگی از بین رفتیم. از همان لحظه ای که وارد شدیم، در فضایی دعوت کننده قرار گرفتیم و با لبخندهای گرم از ما استقبال شد.",
    name: "مهشید آراسته",
    location: "ایران شیراز",
  },
];

const foodMenuCategory = {
  "breakfast": [
    {
      id: 1,
      title: "نیمرو",
      price: 76_000,
      recepiet: "تهیه شده با تخم مرغ، کاهو، نمک، روغن و مواد دیگر.",
      imagePath: "asserts/images/menu/friedEggs.png",
    },
  ],
  "main-dish": [
    {
      id: 1,
      title: "پیتزای هاوایی",
      price: 195_000,
      recepiet: "تهیه شده با تخم مرغ، کاهو، نمک، روغن و مواد دیگر.",
      imagePath: "asserts/images/menu/pizzaHawaii.png",
    },
    {
      id: 2,
      title: "چیزبرگر",
      price: 216_000,
      recepiet: "تهیه شده با تخم مرغ، کاهو، نمک، روغن و مواد دیگر.",
      imagePath: "asserts/images/menu/cheeseBurger.png",
    },
  ],
  "drinks": [
    {
      id: 1,
      title: "کوکتل مارتیتز",
      price: 36_000,
      recepiet: "تهیه شده با تخم مرغ، کاهو، نمک، روغن و مواد دیگر.",
      imagePath: "asserts/images/menu/drink1.png",
    },
    {
      id: 2,
      title: "لیموناد نعنا",
      price: 25_000,
      recepiet: "تهیه شده با تخم مرغ، کاهو، نمک، روغن و مواد دیگر.",
      imagePath: "asserts/images/menu/drink2.png",
    },
  ],
  "deserts": [
    {
      id: 1,
      title: "وافل کلاسیک",
      price: 65_000,
      recepiet: "تهیه شده با تخم مرغ، کاهو، نمک، روغن و مواد دیگر.",
      imagePath: "asserts/images/menu/vaffel.png",
    },
    {
      id: 2,
      title: "بستنی شکلاتی",
      price: 30_000,
      recepiet: "تهیه شده با تخم مرغ، کاهو، نمک، روغن و مواد دیگر.",
      imagePath: "asserts/images/menu/chocolateIceCream.png",
    },
    {
      id: 2,
      title: "کیک کره ای",
      price: 78_000,
      recepiet: "تهیه شده با تخم مرغ، کاهو، نمک، روغن و مواد دیگر.",
      imagePath: "asserts/images/menu/butterCake.png",
    },
  ],
};


const articleCardDetails = [
  {
    id: 1,
    title: "طرز تهیه مرغ خوشمزه",
    imageDir: "asserts/images/blog/chickenTenders.png",
  },
  {
    id: 2,
    title: "طرز تهیه سیب زمینی سرخ شده کامل در سرخ کن بادی",
    imageDir: "asserts/images/blog/FriesBlog.png",
  },
  {
    id: 3,
    title: "آموزش انحصاری پخت از پادشاه شیرینی",
    imageDir: "asserts/images/blog/baking.png",
  },
  {
    id: 4,
    title: "طرز تهیه یک سوشی خوشمزه بدون گلوتن",
    imageDir: "asserts/images/blog/sushi.png",
  },
  {
    id: 5,
    title: "5 رستوران پیتزای عالی که باید از این شهر دیدن کنید",
    imageDir: "asserts/images/blog/pizzaPlace.png",
  },
  {
    id: 6,
    title: "7 دستور پخت چیزکیک خوشمزه که می توانید تهیه کنید",
    imageDir: "asserts/images/blog/cheeseCake.png",
  },
  {
    id: 7,
    title: "نکات و ترفندهای مخفی برای تهیه یک همبرگر عالی",
    imageDir: "asserts/images/blog/burgerRecep.png",
  },
  {
    id: 8,
    title:
      "5 ابزار آشپزی عالی که می توانید برای صرفه جویی در زمان خریداری کنید",
    imageDir: "asserts/images/blog/gadgets.png",
  },
  {
    id: 9,
    title: "20 دسر ساده و سریع برای بچه ها",
    imageDir: "asserts/images/blog/kidDesert.png",
  },
  {
    id: 10,
    title:
      "نکات و ترفندهای مخفی برای تهیه یک همبرگر و پیتزای عالی برای مشتریانمان",
    imageDir: "asserts/images/blog/secretBurger.png",
  },
  {
    id: 11,
    title: "طرز تهیه یک سوشی خوشمزه بدون گلوتن",
    imageDir: "asserts/images/blog/sushi2.png",
  },
  {
    id: 12,
    title:
      "5 ابزار آشپزی عالی که می توانید برای صرفه جویی در زمان خریداری کنید",
    imageDir: "asserts/images/blog/gadegt2.png",
  },
];


export {
    menuItemDetail,
    cardsDetail,
    customersComments,
    foodMenuCategory,
    articleCardDetails
}