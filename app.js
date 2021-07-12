const logancopy = ["Jadersity", "Tupress", "Epharturrent", "Confrazzled", "Chrocircasson", "Stictic", "Sampreng", "Micatautived", "Firmand", "Signitined", "Emorts", "Posince", "Glomtom",
"The world is wonderfull"
    //More here
];

const generate = document.querySelector('#generate')
const display = document.querySelector('#display')
const selecetdItem = document.querySelector('.selecetdItem')
const remove = document.querySelector('.remove')
const copy = document.querySelector('.copy')
const num = document.querySelector('#num')
let words = []

generate.addEventListener('click', (e) => {
    e.preventDefault()
    if (num.value !== '' && num.value<= logancopy.length ) {
        display.innerHTML = ''
        let number = parseInt(num.value)
        generateWord(number)
    } else {
        alert('Please provide a  number which is smaller or equal to '+ logancopy.length )
    }

})

function generateWord(n) {
     let alllogCopy = [...logancopy]
    for (let i = 0; i <= (n - 1); i++) {
        let r = Math.floor(Math.random() * alllogCopy.length);
        let span = document.createElement('span')
        span.className = "wrd"
        span.textContent = alllogCopy[r]
        display.appendChild(span);
        alllogCopy.splice(r,1)
    }
    alllogCopy = [...logancopy]
}

display.addEventListener('click', (e) => {
    if (e.target.className.includes('wrd')) {
        e.target.classList.add('seletced')
        e.target.remove()
        selecetdItem.appendChild(e.target)
    }
})

//clearing the container field

remove.addEventListener('click', () => {
    selecetdItem.innerHTML = ''
    words=[]
})


//copy words 
copy.addEventListener('click', () => {
    const copyWord = document.createElement('textarea');
    
    document.querySelectorAll('.seletced').forEach(ele =>{
        words.push(ele.textContent)
    })
    let sortDuplicate = [...new Set(words)]
    let allWords = ''
    sortDuplicate.forEach(ele => allWords += ele+'\n')
    copyWord.value = allWords
    document.body.appendChild(copyWord);
    copyWord.select();
    document.execCommand('copy');
    document.body.removeChild(copyWord);
})



