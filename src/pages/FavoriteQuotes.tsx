import { Link } from "react-router-dom";

import Quote from "../components/Quote";
import useFavoriteQuotes from "../hooks/useFavoriteQuotes";
import { rawQuotes } from "../data/rawQuotes";

export default function FavoriteQuotes() {
  const { favoriteQuoteIds } = useFavoriteQuotes();

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <h1 className="mb-2 text-3xl font-bold text-hover-color dark:text-white">Favorite Quotes</h1>
      <div className="flex flex-col gap-2">{showFavoriteQuotes(favoriteQuoteIds)}</div>
      <Link to="/">
        <button className="button bg-card-color hover:bg-gray-800">Back to home</button>
      </Link>
    </div>
  );
}

function showFavoriteQuotes(favoriteQuoteIds: number[]) {
  if (favoriteQuoteIds.length === 0) {
    return <p className="text-hover-color dark:text-white">You have no favorite quotes.</p>;
  }

  const favoriteQuotes = rawQuotes.filter(quote => quote.verified && favoriteQuoteIds.includes(quote.id));

  return favoriteQuotes.map(favoriteQuote => (
    <div key={favoriteQuote.id} className="flex flex-col">
      <Quote quote={favoriteQuote} />
    </div>
  ));
}
