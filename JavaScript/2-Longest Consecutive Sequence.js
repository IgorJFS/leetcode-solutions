/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
        let numsSet = new Set(nums)
    let longest = 0

    for (const num of numsSet) {
        if (!numsSet.has(num - 1)){
            let currentNum = num;
            let currentStreak = 1

            while (numsSet.has(currentNum + 1)){
                currentNum++;
                currentStreak++;
            }
            longest = Math.max(longest, currentStreak)
        }
    }
    return longest
};