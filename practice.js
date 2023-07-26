

fetch('https://jsonplaceholder.typicode.com/comments')
.then((response) => response.json())
.then((result) =>{
    console.log(result)
})
const container = document.querySelector('.container')

function change(element){
    element.style.fill = 'red'
}

function handleClick(e){
 if(e.target.tagName === 'path'){
  change(e.target)
 }
}

container.addEventListener('click',handleClick)