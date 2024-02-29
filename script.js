def mincost(arr):
    # Sort the array in ascending order
    arr.sort()

    # Initialize the total cost
    total_cost = 0

    # Combine ropes until only one remains
    while len(arr) > 1:
        # Take the two shortest ropes
        shortest1 = arr.pop(0)
        shortest2 = arr.pop(0)

        # Combine them and add their lengths to the total cost
        combined_length = shortest1 + shortest2
        total_cost += combined_length

        # Insert the combined rope back into the array
        arr.append(combined_length)
        # Re-sort the array (optional, but helps maintain order)
        arr.sort()

    return total_cost

# Example usage
print(mincost([4, 3, 2, 6]))  # Output: 29
print(mincost([1, 2, 3, 4, 5]))  # Output: 33
