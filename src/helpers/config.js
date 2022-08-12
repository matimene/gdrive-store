const CONFIG = {
  CSV_API_URL: process.env.NEXT_PUBLIC_CSV_API_URL,
  bgImages: [
    process.env.NEXT_PUBLIC_BG_IMAGE_1,
    process.env.NEXT_PUBLIC_BG_IMAGE_2,
    process.env.NEXT_PUBLIC_BG_IMAGE_3,
  ],
  storeName: process.env.NEXT_PUBLIC_STORE_NAME,
  storeTitle: process.env.NEXT_PUBLIC_STORE_TITLE,
  storePhone: process.env.NEXT_PUBLIC_STORE_PHONE,
  storeAddress: process.env.NEXT_PUBLIC_STORE_ADDRESS,
  storeHomeSubtitle: process.env.NEXT_PUBLIC_STORE_HOME_SUBTITLE,
  storeHomeTitle: process.env.NEXT_PUBLIC_STORE_HOME_TITLE,
  storeHomeDescription: process.env.NEXT_PUBLIC_STORE_HOME_DESCRIPTION,
};

export default CONFIG;