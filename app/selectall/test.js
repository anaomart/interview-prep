const items = [
    { first: true },
    { second: true },
    { id: 4, value: 4, flipped: false }
]

const initialCards = [
    { id: 1, value: 1, flipped: false },
    { id: 2, value: 2, flipped: false },
    { id: 3, value: 3, flipped: false },
    { id: 4, value: 4, flipped: false },
    { id: 5, value: 5, flipped: false },
    { id: 6, value: 6, flipped: false },
    { id: 7, value: 1, flipped: false },
    { id: 8, value: 2, flipped: false },
    { id: 9, value: 3, flipped: false },
    { id: 10, value: 4, flipped: false },
    { id: 11, value: 5, flipped: false },
    { id: 12, value: 6, flipped: false },
];

initialCards.map((card, index) => {
    console.log({...card ,flipped: true})

    true
        ?
        {...card, flipped: false } :
        card
})


console.log(Object.entries(items))

function checkAllTrue(object) {
    return object.map((ele) => {
        return Object.values(ele)[0]
    }).every((e) => e == true)
}

console.log(checkAllTrue(items))