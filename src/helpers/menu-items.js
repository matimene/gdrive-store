const STORE_TYPES = {
  ECOM: "ecom",
  BAR: "bar",
};
const STORE_TYPE_VALUES = Object.keys(STORE_TYPES);

const getMenuItems = ({ t, storeType }) => [
  {
    path: "/",
    label: t("NAVBAR.home"),
    key: "home",
    hidden: false,
  },
  {
    path: "/menu",
    label: t("NAVBAR.menu"),
    key: "menu",
    hidden: storeType !== STORE_TYPES.BAR,
  },
  {
    path: "/cart",
    label: "Cart",
    key: "cart",
    hidden: storeType === STORE_TYPES.BAR,
  },
];

export { STORE_TYPE_VALUES, getMenuItems };
