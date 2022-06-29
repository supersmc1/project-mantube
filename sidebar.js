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
let mantubebox = document.createElement('div')
let mantubebox1 = document.createElement('div')
let mantubebox2 = document.createElement('div')
let mantubebox3 = document.createElement('div')
let mantubebox4 = document.createElement('div')
let mantubebox5 = document.createElement('div')
let mantubebox6 = document.createElement('div')
let mantubebox7 = document.createElement('div')
let mantubebox8= document.createElement('div')

let mantubeboxis = [
  mantubebox1,
  mantubebox2,
  mantubebox3,
  mantubebox4,
  mantubebox5,
  mantubebox6,
  mantubebox7
]


function sidefunction (){
  for(let idxnb = 0; idxnb < sidebarch.length; idxnb++){
    //console.log(sidebarch[idxnb])
    sidebarch[idxnb].style.width = '12vw'
    sidebarch[idxnb].style.height = '6vh'
    const sidebarchch = sidebarch[idxnb].children
    console.log(sidebarchch)
    for(let mynb = 0; mynb < sidebarchch.length; mynb++){
      sidebarchch[mynb].style.flexDirection = 'unset'
      sidebarchch[mynb].style.width = '10vw'
      sidebarchch[mynb].style.height = '6vh'
      sidebarchch[mynb].style.justifyContent = 'unset'
      const sidebarchchch = sidebarchch[mynb].children
      for(let mynbs = 0; mynbs < sidebarchchch.length; mynbs++){
        sidebarchchch[mynbs].style.marginTop = '0px'
        sidebarchchch[mynbs].style.marginLeft = '15px'
      }
    }
  }
}

function residefunction (){
  for(let idxnb = 0; idxnb < sidebarch.length; idxnb++){
    //console.log(sidebarch[idxnb])
    sidebarch[idxnb].style.width = '4vw'
    sidebarch[idxnb].style.height = '4vw'
    const sidebarchch = sidebarch[idxnb].children
    console.log(sidebarchch)
    for(let mynb = 0; mynb < sidebarchch.length; mynb++){
      sidebarchch[mynb].style.flexDirection = 'column'
      sidebarchch[mynb].style.width = '4vw'
      sidebarchch[mynb].style.height = '4vw'
      sidebarchch[mynb].style.justifyContent = 'center'
      const sidebarchchch = sidebarchch[mynb].children
      for(let mynbs = 0; mynbs < sidebarchchch.length; mynbs++){
        console.log(sidebarchchch[mynbs])
        sidebarchchch[mynbs].style.marginTop = '10px'
        sidebarchchch[mynbs].style.marginLeft = '0px'
      }
    }
  }
}

function apfunction (){
  login.style.width = '12vw'
  login.style.height = '15vh'
  login.style.borderTop = '1px solid rgb(204, 204, 204)'
  login.style.borderBottom = '1px solid rgb(204, 204, 204)'
  login.style.fontSize = '0.8rem'
  login.textContent = '로그인하면 동영상에 좋아요를 표시하고 댓글을 달거나 구독할 수 있습니다.'
  login.style.display = 'flex'
  sidebar.appendChild(login)
  
  loginbox.style.width = '6vw'
  loginbox.style.height = '4vh'
  loginbox.style.margin = '20px'
  loginbox.style.border = '1px solid blue'
  loginbox.style.display = 'flex'
  loginbox.style.justifyContent = 'unset'
  loginbox.style.flexDirection = 'unset'
  loginbox.style.cursor = 'pointer'
  login.appendChild(loginbox)
  loginlogo.className = 'fa-solid fa-address-card'
  loginlogo.style.color = 'blue'
  loginlogo.style.marginLeft = '15px'
  loginbox.appendChild(loginlogo)
  loginlogotext.textContent = '로그인'
  loginlogotext.style.marginLeft = '15px'
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


function mantubeboxs (){
  mantubebox.style.width = '12vw'
  mantubebox.style.height = '48vh'
  mantubebox.style.backgroundColor = '#cccc'
  mantubebox.style.display = 'flex'
  mantubebox.style.justifyContent = 'unset'
  sidebar.appendChild(mantubebox)
  for(let manidx = 0; manidx < mantubeboxis.length; manidx++){
    for(let iconsbox = 0; iconsbox < 1; iconsbox++){
      let icons = document.createElement('i')
      let iconsdiv = document.createElement('div')
      mantubebox.appendChild(mantubeboxis[manidx])
      mantubeboxis[manidx].style.width = '12vw'
      mantubeboxis[manidx].style.height = '6vh'
      mantubeboxis[manidx].style.marginTop = '1px'
      mantubeboxis[manidx].style.flexDirection = 'unset'
      mantubeboxis[manidx].style.justifyContent = 'unset'
      mantubeboxis[manidx].appendChild(icons)
      mantubeboxis[manidx].appendChild(iconsdiv)
      console.log(icons)
      icons.className += arr[manidx]
      icons.style.marginLeft = '15px'
      iconsdiv.textContent = textcon[manidx]
      iconsdiv.style.marginTop = '0px'
      iconsdiv.style.marginLeft = '15px'  
    }
  }
}




hambug.addEventListener('click',function(){
  //console.log('hello')
  if(ok===true){
    bigsidebar.style.width = '12vw'
    sidebar.style.width = '12vw'
    sidebar.style.transition = '1s'
    sidefunction()
    apfunction()
    mantubeboxs()
    ok = false
  }else{
    bigsidebar.style.width = '5vw'
    sidebar.style.width = '5vw'
    residefunction()
    sidebar.removeChild(mantubebox)
    sidebar.removeChild(login)
    ok = true

  }
})