// function minWindow(s: string, t: string): string {
//     if (t.length > s.length) return ""
//     const tMap = new Map()
//     let count = 0
//     for (let i = 0; i < t.length; i++) {
//         tMap.set(t[i], t[i])
//     }

//     let leftIdx = 0
//     let rightIdx = t.length - 1
//     let windows = []
//     let res = []
//     for (let i = 0; i < t.length; i++) {
//         if (tMap.has(s[i])) count++
//         windows.push(s[i])
//     }

//     while (rightIdx <= s.length - 1) {
//         console.log(rightIdx, 1)
//         if (count === t.length) {
//             res.push(windows.join(""))
//             while (count > 0) {
//                 console.log(count, 2)
//                 if (tMap.has(s[leftIdx])) count--
//                 windows.shift()
//                 leftIdx++
//             }
//             leftIdx--
//             windows.push(s[leftIdx])
//         }
//         console.log(windows)
//         rightIdx++
//         if (tMap.has(s[rightIdx])) count++
//         windows.push(s[rightIdx])
//     }

//     let minStr = res[0]
//     for (let i = 1; i < res.length; i++) {
//         minStr = minStr.length >= res[i].length ? res[i] : minStr
//     }
//     console.log(minStr)
//     return minStr
// };

// minWindow("ADOBECODEBANC", "ABC")


function minWindow(s: string, t: string): string {
    const tMap = new Map<string, number>()
    const windows = new Map<string, number>()
    let leftIdx = 0
    let start = 0
    for (let i = 0; i < t.length; i++) {
        tMap.set(t[i], (tMap.get(t[i]) ?? 0) + 1)
    }

    const required = tMap.size

    let diff = 0
    let minLen = Infinity

    for (let rightIdx = 0; rightIdx < s.length; rightIdx++) {
        windows.set(s[rightIdx], (windows.get(s[rightIdx]) ?? 0) + 1)
        // console.log(windows.get(s[rightIdx]) ?? 0)

        if (tMap.has(s[rightIdx]) && windows.get(s[rightIdx]) === tMap.get(s[rightIdx])) diff++

        while (diff === required && leftIdx <= rightIdx) {
            const newLen = rightIdx - leftIdx + 1
            start = minLen > newLen ? leftIdx : start
            // console.log(start)
            minLen = Math.min(minLen, newLen)
            if (tMap.has(s[leftIdx]) && windows.get(s[leftIdx]) === tMap.get(s[leftIdx])) diff--
            windows.set(s[leftIdx], windows.get(s[leftIdx]) - 1)
            leftIdx++
        }
    }

    return minLen === Infinity ? "" : s.substring(start, start + minLen)
};