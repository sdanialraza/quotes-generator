import { act, renderHook } from "@testing-library/react"

import useRandomItem from "@/hooks/useRandomItem"

describe("useRandomItem", () => {
  it("throws an error if `items` array has less than 2 elements", () => {
    const { result } = renderHook(() => {
      try {
        useRandomItem([""])
      } catch (error) {
        return error
      }
    })

    const expectedError = new Error("Items must have at least 2 elements")
    expect(result.current).toEqual(expectedError)
  })

  it("accepts an array of items and returns a random index", () => {
    const { result } = renderHook(() => useRandomItem([1, 2, 3, 4, 5]))

    expect(result.current.item).toBeGreaterThanOrEqual(1)
    expect(result.current.item).toBeLessThanOrEqual(5)
  })

  it("changes the index when `change` is called", () => {
    const { result } = renderHook(() => useRandomItem([1, 2, 3, 4, 5]))
    const previousPick = result.current.item

    act(result.current.change)
    expect(result.current.item).not.toEqual(previousPick)
  })

  it("does not change the index when `change` is called with the same index", () => {
    const { result } = renderHook(() => useRandomItem([1, 2, 3, 4, 5]))
    const previousPick = result.current.item

    act(result.current.change)
    expect(result.current.item).not.toEqual(previousPick)
  })
})
