const CONFIG = {
  CSV_API_URL: process.env.NEXT_PUBLIC_CSV_API_URL,
  homeBgImages: [
    process.env.NEXT_PUBLIC_BG_IMAGE_1,
    process.env.NEXT_PUBLIC_BG_IMAGE_2,
    process.env.NEXT_PUBLIC_BG_IMAGE_3,
  ],
  menuBgImages: JSON.parse(process.env.NEXT_PUBLIC_MENU_BG_IMAGES),
  storeName: process.env.NEXT_PUBLIC_STORE_NAME,
  storeTitle: process.env.NEXT_PUBLIC_STORE_TITLE,
  storePhone: process.env.NEXT_PUBLIC_STORE_PHONE,
  storeAddress: process.env.NEXT_PUBLIC_STORE_ADDRESS,
  storeHomeSubtitle: process.env.NEXT_PUBLIC_STORE_HOME_SUBTITLE,
  storeHomeTitle: process.env.NEXT_PUBLIC_STORE_HOME_TITLE,
  storeHomeDescription: process.env.NEXT_PUBLIC_STORE_HOME_DESCRIPTION,
};

export default CONFIG;