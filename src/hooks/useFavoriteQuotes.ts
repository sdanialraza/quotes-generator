import { useState } from "react";

import { notify } from "../util";

export default function useFavoriteQuotes() {
  const getFavoriteQuoteIds = () => {
    if (typeof window === "undefined") return [];

    const favoriteQuoteIds = window.localStorage.getItem("favoriteQuoteIds");
    return favoriteQuoteIds ? (JSON.parse(favoriteQuoteIds) as number[]) : [];
  };

  const [favoriteQuoteIds, setFavoriteQuoteIds] = useState(getFavoriteQuoteIds);

  const addFavoriteQuote = (quoteId: number) => {
    if (favoriteQuoteIds.includes(quoteId)) {
      const filteredQuoteIds = favoriteQuoteIds.filter(id => id !== quoteId);

      setFavoriteQuoteIds(filteredQuoteIds);
      window.localStorage.setItem("favoriteQuoteIds", JSON.stringify(filteredQuoteIds));
      notify("💔", "Quote removed from favorites!");
    } else {
      setFavoriteQuoteIds([...favoriteQuoteIds, quoteId]);
      window.localStorage.setItem("favoriteQuoteIds", JSON.stringify([...favoriteQuoteIds, quoteId]));
      notify("❤️", "Quote added to favorites!");
    }
  };

  const setFavoriteQuotes = (quoteIds: number[]) => {
    setFavoriteQuoteIds(quoteIds);
    window.localStorage.setItem("favoriteQuoteIds", JSON.stringify(quoteIds));
    notify("❤️", "Quotes added to favorites!");
  };

  return { favoriteQuoteIds, addFavoriteQuote, setFavoriteQuotes };
}
