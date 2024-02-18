import { redirect, type RouteObject } from "react-router-dom";

import { rawQuotes } from "../data/rawQuotes";
import FavoriteQuotes from "./FavoriteQuotes";
import NotFound from "./NotFound";
import QuotesShow from "./QuotesShow";

export const routes: RouteObject[] = [
  {
    path: "/",
    loader: () => {
      const filteredIds = rawQuotes.filter(quote => quote.verified).map(quote => quote.id);
      const randomId = Math.floor(Math.random() * filteredIds.length);

      return redirect(`/${randomId}`);
    },
  },
  {
    path: "/:quoteId",
    element: <QuotesShow />,
  },
  {
    path: "/favorites",
    element: <FavoriteQuotes />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
