const bigsidebar = document.querySelector('.bigsidebar')
const sidebar = document.querySelector('.sidebar')
const hambug = document.querySelector('.hambug')
let ok = true
const sidebarch = sidebar.children
console.log(sidebarch)
let login = document.createElement('div')
let loginbox = document.createElement('div')
let loginlogo = document.createElement('i')
let loginlogotext = document.createElement('p')



function apfunction (){
  login.style.width = '12vw'
  login.style.height = '15vh'
  login.style.borderTop = '1px solid rgb(204, 204, 204)'
  login.style.borderBottom = '1px solid rgb(204, 204, 204)'
  login.style.fontSize = '0.8rem'
  login.textContent = '로그인하면 동영상에 좋아요를 표시하고 댓글을 달거나 구독할 수 있습니다.'
  login.style.display = 'flex'
  login.style.justifyContent = 'center'
  login.style.alignItems = 'center'
  login.style.flexDirection = 'column'
  sidebar.appendChild(login)
  
  loginbox.style.width = '6vw'
  loginbox.style.height = '4vh'
  loginbox.style.margin = '20px'
  loginbox.style.border = '1px solid blue'
  loginbox.style.display = 'flex'
  loginbox.style.justifyContent = 'center'
  loginbox.style.alignItems = 'center'
  loginbox.style.cursor = 'pointer'
  login.appendChild(loginbox)
  loginlogo.className = 'fa-solid fa-address-card'
  loginlogo.style.color = 'blue'
  loginlogo.style.marginLeft = '0px'
  loginbox.appendChild(loginlogo)
  loginlogotext.textContent = '로그인'
  loginlogotext.style.marginLeft = '10px'
  loginlogotext.style.color = 'blue'
  loginbox.appendChild(loginlogotext)

  loginbox.addEventListener('mouseover',function(){
    loginbox.style.backgroundColor = 'blue'
    loginbox.style.border = '1px solid white'
    loginlogo.style.color = 'white'
    loginlogotext.style.color = 'white'
    loginbox.addEventListener('mouseout',function(){
    loginbox.style.backgroundColor = 'white'
    loginbox.style.border = '1px solid blue'
    loginlogo.style.color = 'blue'
    loginlogotext.style.color = 'blue'
    })
  })
}

const basic = document.querySelector('.basic')
const basicch = basic.children

function basicfs(){
  for(let zero = 0; zero < basicch.length; zero++){
    basicch[zero].style.width = '12vw'
    basicch[zero].style.flexDirection = 'unset'
    basicch[zero].style.justifyContent = 'unset'
  }
}

function nobasicfs(){
  for(let zero = 0; zero < basicch.length; zero++){
    basicch[zero].style.width = '5vw'
    basicch[zero].style.flexDirection = 'column'
    basicch[zero].style.justifyContent = 'center'
  }
}
let mantubebox = document.createElement('ul')

function newiconsdivs(){
    mantubebox.style.width = '12vw'
    mantubebox.style.height = '43vh'
    sidebar.appendChild(mantubebox)
}
let mantubeboxlist1 = document.createElement('li')
let mantubeboxlist2 = document.createElement('li')
let mantubeboxlist3 = document.createElement('li')
let mantubeboxlist4 = document.createElement('li')
let mantubeboxlist5 = document.createElement('li')
let mantubeboxlist6 = document.createElement('li')
let mantubeboxlist7 = document.createElement('li')

function mantubeboxlist (){
  mantubebox.appendChild(mantubeboxlist1)
  mantubebox.appendChild(mantubeboxlist2)
  mantubebox.appendChild(mantubeboxlist3)
  mantubebox.appendChild(mantubeboxlist4)
  mantubebox.appendChild(mantubeboxlist5)
  mantubebox.appendChild(mantubeboxlist6)
  mantubebox.appendChild(mantubeboxlist7)
  let mantubeboxlists = mantubebox.children
  console.log(mantubeboxlists)
  for(let manidx = 0; manidx < 7; manidx++){
    mantubeboxlists[manidx].style.width = '12vw'
    mantubeboxlists[manidx].style.height = '6vh'
    mantubeboxlists[manidx].style.display = 'flex'
    mantubeboxlists[manidx].style.alignItems = 'center'
    mantubeboxlists[manidx].style.listStyleType = 'none'
    mantubeboxlists[1].style.cursor = 'pointer'
    mantubeboxlists[2].style.cursor = 'pointer'
    mantubeboxlists[3].style.cursor = 'pointer'
    mantubeboxlists[4].style.cursor = 'pointer'
    mantubeboxlists[5].style.cursor = 'pointer'
    mantubeboxlists[6].style.cursor = 'pointer'
    
}
}
let iconsnum2 = document.createElement('i')
let iconsnum3 = document.createElement('i')
let iconsnum4 = document.createElement('i')
let iconsnum5 = document.createElement('i')
let iconsnum6 = document.createElement('i')
let iconsnum7 = document.createElement('i')

let textnum1 = document.createElement('p')
let textnum2 = document.createElement('p')
let textnum3 = document.createElement('p')
let textnum4 = document.createElement('p')
let textnum5 = document.createElement('p')
let textnum6 = document.createElement('p')
let textnum7 = document.createElement('p')


function mantuboxicons(){
  mantubeboxlist2.appendChild(iconsnum2)
  iconsnum2.className += arr[0]
  iconsnum2.style.margin = '8px'
  iconsnum2.style.fontSize = '20px'
  mantubeboxlist3.appendChild(iconsnum3)
  iconsnum3.className += arr[1]
  iconsnum3.style.margin = '8px'
  iconsnum3.style.fontSize = '20px'
  mantubeboxlist4.appendChild(iconsnum4)
  iconsnum4.className += arr[2]
  iconsnum4.style.margin = '8px'
  iconsnum4.style.fontSize = '20px'
  mantubeboxlist5.appendChild(iconsnum5)
  iconsnum5.className += arr[3]
  iconsnum5.style.margin = '8px'
  iconsnum5.style.fontSize = '20px'
  mantubeboxlist6.appendChild(iconsnum6)
  iconsnum6.className += arr[4]
  iconsnum6.style.margin = '8px'
  iconsnum6.style.fontSize = '20px'
  mantubeboxlist7.appendChild(iconsnum7)
  iconsnum7.className += arr[5]
  iconsnum7.style.margin = '8px'
  iconsnum7.style.fontSize = '20px'
}

function boxtext(){
  mantubeboxlist1.appendChild(textnum1)
  textnum1.textContent = '인기 ManTube'
  textnum1.style.fontWeight = 'bold'
  textnum1.style.margin = '10px'
  mantubeboxlist2.appendChild(textnum2)
  textnum2.textContent = textcon[0]
  textnum2.style.fontSize= '0.8rem'
  mantubeboxlist3.appendChild(textnum3)
  textnum3.textContent = textcon[1]
  textnum3.style.fontSize= '0.8rem'
  mantubeboxlist4.appendChild(textnum4)
  textnum4.textContent = textcon[2]
  textnum4.style.fontSize= '0.8rem'
  mantubeboxlist5.appendChild(textnum5)
  textnum5.textContent = textcon[3]
  textnum5.style.fontSize= '0.8rem'
  mantubeboxlist6.appendChild(textnum6)
  textnum6.textContent = textcon[4]
  textnum6.style.fontSize= '0.8rem'
  mantubeboxlist7.appendChild(textnum7)
  textnum7.textContent = textcon[5]
  textnum7.style.fontSize= '0.8rem'

}

let arr = [
  "fa-solid fa-music",
  "fa-solid fa-medal",
  "fa-solid fa-gamepad",
  "fa-solid fa-film",
  "fa-solid fa-newspaper",
  "fa-solid fa-house-signal",
  "fa-solid fa-brain"
]

let textcon = [
  
  '음악',
  '스포츠',
  '게임',
  '영화',
  '뉴스',
  '실시간',
  '학습'
]

mantubeboxlist2.addEventListener('mouseover',function(){
  mantubeboxlist2.style.backgroundColor = '#cccc'
  mantubeboxlist2.addEventListener('mouseout',function(){
  mantubeboxlist2.style.backgroundColor = 'white'
  })
})

mantubeboxlist3.addEventListener('mouseover',function(){
  mantubeboxlist3.style.backgroundColor = '#cccc'
  mantubeboxlist3.addEventListener('mouseout',function(){
  mantubeboxlist3.style.backgroundColor = 'white'
  })
})

mantubeboxlist4.addEventListener('mouseover',function(){
  mantubeboxlist4.style.backgroundColor = '#cccc'
  mantubeboxlist4.addEventListener('mouseout',function(){
  mantubeboxlist4.style.backgroundColor = 'white'
  })
})

mantubeboxlist5.addEventListener('mouseover',function(){
  mantubeboxlist5.style.backgroundColor = '#cccc'
  mantubeboxlist5.addEventListener('mouseout',function(){
  mantubeboxlist5.style.backgroundColor = 'white'
  })
})

mantubeboxlist6.addEventListener('mouseover',function(){
  mantubeboxlist6.style.backgroundColor = '#cccc'
  mantubeboxlist6.addEventListener('mouseout',function(){
  mantubeboxlist6.style.backgroundColor = 'white'
  })
})

mantubeboxlist7.addEventListener('mouseover',function(){
  mantubeboxlist7.style.backgroundColor = '#cccc'
  mantubeboxlist7.addEventListener('mouseout',function(){
  mantubeboxlist7.style.backgroundColor = 'white'
  })
})




hambug.addEventListener('click',function(){
  //console.log('hello')
  if(ok===true){
    sidebar.style.width = '12vw'
    sidebar.style.transition = '1s'
    basicfs()
    apfunction()
    newiconsdivs()
    mantubeboxlist()
    mantuboxicons()
    boxtext()
    ok = false
    console.log('참')
  }else{
    sidebar.style.width = '5vw'
    nobasicfs()
    sidebar.removeChild(login)
    sidebar.removeChild(mantubebox)
    mantubebox.remove()
    ok = true
    console.log('거짓')
  }
})