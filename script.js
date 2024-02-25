function mincost(arr) {
    // Create a min-heap (priority queue)
    const minHeap = new MinHeap();

    // Insert all rope lengths into the min-heap
    for (const length of arr) {
        minHeap.insert(length);
    }

    let totalCost = 0;

    // While there are more than one rope in the min-heap
    while (minHeap.size() > 1) {
        // Extract the two smallest lengths
        const smallest = minHeap.extractMin();
        const secondSmallest = minHeap.extractMin();

        // Calculate the cost of connecting these two ropes
        const cost = smallest + secondSmallest;

        // Add the cost to the total
        totalCost += cost;

        // Insert the combined length back into the min-heap
        minHeap.insert(cost);
    }

    return totalCost;
}

// Example usage:
const ropes1 = [4, 3, 2, 6];
console.log(mincost(ropes1)); // Output: 29

const ropes2 = [1, 2, 3, 4, 5];
console.log(mincost(ropes2)); // Output: 9
