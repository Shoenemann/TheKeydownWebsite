function stringsThatBeginWith(letter,arrayOfStrings) {
    return arrayOfStrings.filter(s => {
        let firstCharacter = s.slice(0,1).toLowerCase()
        if (firstCharacter === letter) return true
        else return false
    })
}

function listOrganize (arr) {
    const org = {} 
    lettersAlphabet().forEach( letter => {
        org[letter] = stringsThatBeginWith(letter,arr)
    })
    return org
} 

function keydownShow (arr,div) {
    const arrOrganized =listOrganize(arr)
    document.addEventListener('keydown',(e) => {
        const arrSubset = arrOrganized[e.key]
        showAny(arrSubset,div)
    })
}

function showAny (arr,div) {
    const i = Math.floor(Math.random() * arr.length)
    div.textContent = arr[i]
    return arr[i]
}

function lettersAlphabet() {
    const stringAlphabet = 'qwertyuiopasdfghjklzxcvbnm'
    const lettersAlphabet = stringAlphabet.split('')
    lettersAlphabet.sort((l1,l2) => l1.localeCompare(l2))
    return lettersAlphabet
}