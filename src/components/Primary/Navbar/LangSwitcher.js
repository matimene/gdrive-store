import Link from "next/link";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import {
  Button,
  IconButton,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

export default function LocaleSwitcher() {
  const router = useRouter();

  const { locales, locale: activeLocale } = router;

  const otherLocales = locales?.filter(
    (locale) => locale !== activeLocale && locale !== "default"
  );

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        style={{ display: "inline-block" }}
        key={useColorModeValue("light", "dark")}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <Button mr={2}>
          {otherLocales?.map((locale) => {
            const { pathname, query, asPath } = router;
            return (
              <span key={"locale-" + locale}>
                <Link href={{ pathname, query }} as={asPath} locale={locale}>
                  <a>
                    {locale === "en" ? "EN" : locale === "es" ? "ESP" : null}
                  </a>
                </Link>
              </span>
            );
          })}
        </Button>
      </motion.div>
    </AnimatePresence>
  );
}
