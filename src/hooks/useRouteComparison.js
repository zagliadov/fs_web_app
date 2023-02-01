import { useRouter } from "next/router";

export const useRouteComparison = () => {
  const router = useRouter();

  const parent = router?.pathname.split("/")[1];
  const firstSibling = router?.pathname.split("/")[2];
  const secondSibling = router?.query?.id;
  const isShopRoute = parent === "shop";
  const isRecipesRoute = parent === "recipes";

  return {
    pathname: router.pathname,
    parent,
    isShopRoute,
    isRecipesRoute,
    firstSibling,
    secondSibling,
  };
};
