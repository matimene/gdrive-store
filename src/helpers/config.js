const CONFIG = {
  CSV_API_URL: process.env.CSV_API_URL,
  bgImages: [
    process.env.BG_IMAGE_1,
    process.env.BG_IMAGE_2,
    process.env.BG_IMAGE_3,
  ],
  storeName: process.env.STORE_NAME,
  storeTitle: process.env.STORE_TITLE,
  storePhone: process.env.STORE_PHONE,
  storeAddress: process.env.STORE_ADDRESS,
  storeHomeSubtitle: process.env.STORE_HOME_SUBTITLE,
  storeHomeTitle: process.env.STORE_HOME_TITLE,
  storeHomeDescription: process.env.STORE_HOME_DESCRIPTION,
};

export default CONFIG;