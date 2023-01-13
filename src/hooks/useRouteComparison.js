import { useRouter } from "next/router";

export const useRouteComparison = () => {
  const { pathname } = useRouter();
  const parent = pathname.split("/")[1];

  const isShopRoute = parent === "shop";
  const isRecipesRoute = parent === "recipes";

  return {
    pathname,
    isShopRoute,
    isRecipesRoute,
  };
};
