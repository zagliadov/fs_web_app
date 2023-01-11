import { useRouter } from "next/router";

export const useRouteComparison = () => {
  const { pathname } = useRouter();

  const isShopRoute =
    pathname === "/shop" ||
    pathname === "/shop/categories" ||
    pathname === "/shop/collection" ||
    pathname === "/shop/resources";
  const isRecipesRoute =
    pathname === "/recipes" ||
    pathname === "/recipes/categories" ||
    pathname === "/recipes/collection" ||
    pathname === "/recipes/resources";

  return {
    pathname,
    isShopRoute,
    isRecipesRoute,
  };
};
