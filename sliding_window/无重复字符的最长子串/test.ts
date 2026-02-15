// function lengthOfLongestSubstring(s: string): number {
//     if(s.length === 0) return 0
//     if(s.length === 1) return 1
//     const standard = new Uint8Array(26)
//     let maxLen:number = 0
//     const aCode = 'a'.charCodeAt(0)
//     for(const i of s){
//         const idx = i.charCodeAt(0) - aCode
//         if(!standard[idx]){
//             standard[idx]++
//         } else {
//             const currLen = standard.filter(x => x !== 0).length
//             maxLen = Math.max(maxLen,currLen)
//             standard.fill(0)
//             standard[idx]++
//         }
//     }
//     const currLen = standard.filter(x => x !== 0).length
//     maxLen = Math.max(maxLen,currLen)
//     return maxLen
// };

function lengthOfLongestSubstring(s: string): number {
    const window = new Set<string>()
    const arr = Array.from(s)
    let maxLen: number = 0
    let left = 0

    for(let right = 0;right < arr.length;right++) {
        const ch = arr[right]
        while(window.has(ch)){
            window.delete(arr[left])
            left++
        }

        window.add(ch)

        maxLen = Math.max(maxLen,right - left + 1)
    }
    return maxLen
};