import { useCallback, useEffect, useState } from "react";

export default function useRandomItem<T>(items: T[]) {
  const [pickedIndex, setPickedIndex] = useState(-1);

  if (items.length < 2) throw new Error("Items must have at least 2 elements");

  const change = useCallback(() => {
    let randomIndex = Math.floor(Math.random() * items.length);

    while (randomIndex === pickedIndex) {
      randomIndex = Math.floor(Math.random() * items.length);
    }

    setPickedIndex(randomIndex);
  }, [items.length, pickedIndex]);

  useEffect(change, [change]);

  const item = items[pickedIndex];

  return { item, change };
}
