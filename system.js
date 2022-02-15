const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const navHead = $('.header_nav-bar')
const blockOfsearch = $('.search div')
    const blockSearch = $('.search')

const textBlog = $('.block_title-left h2 a')
const iconText = $('.block_title-right ion-icon')

const btnAdd = $('.form_press div button')
const ipAdd = $('.form_press div input[type=text]')
const listAdd = $('.form_press ul')

const tabs = $$('.title .items h5')
const lineTab = $('.title .items .line')
document.onscroll = function(e){
    // console.log(document.documentElement.scrollTop);
    if(document.body.scrollTop > 125 || document.documentElement.scrollTop > 125){
        navHead.classList.add('position')
    }
    else{
        navHead.classList.remove('position')
    }
}
// Search block
blockSearch.children[0].onclick = function(){
    blockOfsearch.classList.toggle('hide-flex')
    blockOfsearch.children[0].focus()
    blockOfsearch.children[1].onclick = ()=>{
        if(!blockOfsearch.children[0].value == '')
        {alert(`Founded ${blockOfsearch.children[0].value} in line ${Math.floor(Math.random()*50)} please press, again!`)
        blockOfsearch.children[0].value = ''
        blockOfsearch.children[0].focus()}
    }
}
// title blog
const arrText = [
    '7 lý do để bạn tìm đọc các tác phẩm văn học kinh...',
    '5 lý do tại sao nghề nghiệp không thể quyết định con...',
    '15 cuốn sách hội họa hay vô cùng hữu ích và ý nghĩa...',
    'Học cách bình thản với đời, chuyện duyên phận hãy...',
    '“Không làm phiền người khác”: Cốt lõi của văn hóa...'
]
let currentIndex = 0

setCurrent(currentIndex)

function setCurrent(index) {
	currentIndex = index
	textBlog.innerText = arrText[currentIndex]
}
iconText.addEventListener('click', () => {
	if (currentIndex == arrText.length - 1) {
		currentIndex = 0
	} else currentIndex++

	setCurrent(currentIndex)
})

// BOARD USE PRESS PLACE

const places = ['Nha Trang']
function app(){
    listAdd.innerHTML = places.map( (item, index)=>{
        return `
        <li>${index + 1}. ${item}
        <span class='delete' data-index=${index}>&times</span>
        </li>`
    }).join('')
}
app()
btnAdd.addEventListener('click', ()=>{
    if(!ipAdd.value == ''){
        places.push(ipAdd.value)
    }
    ipAdd.focus()
    ipAdd.value = ''
    app()
})
document.onkeydown = e=>{
    if(e.key === 'Enter'){
        places.push(ipAdd.value)
        ipAdd.focus()
        ipAdd.value = ''
        app()
    }
}
document.onclick = e =>{
    const btnDel = e.target.closest('.delete')
    if(btnDel){
        const index = btnDel.dataset.index
        places.splice(index, 1)
        app()
    }
}


// app active


tabs.forEach( function (tab, index) {
    tab.onclick = function() {
        $('.title .items .active').classList.remove('active')

        
        this.classList.add('active')
    }
})

// heading
const rowMenu = $('.row_menu')
rowMenu.onmouseup = function(){
    rowMenu.classList.toggle('top')
}

