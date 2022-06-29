const maingif = document.querySelector('.maingif')
const maingifchd = document.querySelectorAll('.maingif div')
const main = document.querySelector('.main')
const head = document.querySelector('.head')
const root = document.querySelector('.root')
const randomomg = [
  'url(./image/1.jpg)',
  'url(./image/2.jpg)',
  'url(./image/3.jpg)',
  'url(./image/4.jpg)',
  'url(./image/5.jpg)',
  'url(./image/6.jpg)',
  'url(./image/7.jpg)',
  'url(./image/8.jpg)',
  'url(./image/9.png)',
  'url(./image/10.jpg)',
  'url(./image/11.png)',
  'url(./image/12.png)',
  'url(./image/13.jpg)',
  'url(./image/14.jpg)',
  'url(./image/15.jpg)',
  'url(./image/16.jpg)',
  'url(./image/17.jpg)',
  'url(./image/18.jpg)',
  'url(./image/19.jpg)',
  'url(./image/20.jpg)',
  'url(./image/21.jpg)',
  'url(./image/22.jpg)',
  'url(./image/23.jpg)',
  'url(./image/24.jpg)',
  'url(./image/25.jpg)',
  'url(./image/26.jpg)',
  'url(./image/27.jpg)',
  'url(./image/28.jpg)',
  'url(./image/29.jpg)',
  'url(./image/30.jpg)',
  'url(./image/31.jpg)',
  'url(./image/32.jpg)',
  'url(./image/33.jpg)',
  'url(./image/34.jpg)',
  'url(./image/35.jpg)',
  'url(./image/36.jpg)',
  'url(./image/37.jpg)',
  'url(./image/38.jpg)',
  'url(./image/39.jpg)',
  'url(./image/40.jpg)',
  'url(./image/41.jpg)',
  'url(./image/42.jpg)',
  'url(./image/43.jpg)',
  'url(./image/44.jpg)',
  'url(./image/45.jpg)',
  'url(./image/46.jpg)',
  'url(./image/47.jpg)',
  'url(./image/48.jpg)',
  'url(./image/49.jpg)',
  'url(./image/50.jpg)',
  'url(./image/51.jpg)',
  'url(./image/52.jpg)',
  'url(./image/53.jpg)',
  'url(./image/54.jpg)',
  'url(./image/55.jpg)',
  'url(./image/56.jpg)',
  'url(./image/57.jpg)',
  'url(./image/58.jpg)',
  'url(./image/59.jpg)',
  'url(./image/60.jpg)',
  'url(./image/61.jpg)',
  'url(./image/62.jpg)',
  'url(./image/63.jpg)',
  'url(./image/64.jpg)',
  'url(./image/65.jpg)',
  'url(./image/66.jpg)',
  'url(./image/67.jpg)',
  'url(./image/68.jpg)',
  'url(./image/69.jpg)',
  'url(./image/70.jpg)',
  'url(./image/71.jpg)',
  'url(./image/72.jpg)',
  'url(./image/73.jpg)',
  'url(./image/74.jpg)',
  'url(./image/75.jpg)',
  'url(./image/76.jpg)',
  'url(./image/77.jpg)',
  'url(./image/78.jpg)',
  'url(./image/79.jpg)',
  'url(./image/80.jpg)'
]

const texts = [
  '조회수 10만회 1일 전',
  '조회수 2만회 2일 전',
  '조회수 3만회 3일 전',
  '조회수 10만회 4일 전',
  '조회수 4만회 5일 전',
  '조회수 1만회 6일 전',
  '조회수 5만회 30분 전'
]

const benertext = [
  '알로하 알로하 알로하 노래를 부르자',
  '장인대전 결승',
  '선풍기 틀고 잠들면?',
  '에어컨 틀고 잠들면?',
  '피카츄 백만볼트 넌 내꺼야',
  '라이츄로 진화 하기싫어?',
  '한여름밤의 꿀? = x 땀!!',
  '역전할매맥주 시원함의 비밀',
  '투다리 꼬치 만드는 과정!',
  '아메리카노 쌉쌀해 집중력 증가...',
  '동대문엽떡 매워 죽는 맛의 포인트는?'

]

//엘리먼트 스타일링
for(let index = 0; index < maingifchd.length; index++){
    for(let i=0; i<5; i++){
      let ndivs = document.createElement('div')
      ndivs.style.width = '18vw'
      ndivs.style.height = '28vh'
      ndivs.style.backgroundColor = 'white'
      ndivs.style.margin = '8px'
      //console.log(ndivs)
      //console.log(ndivs[0])
      maingifchd[index].appendChild(ndivs)
      let ndivss = document.createElement('div')
      let ndivss2 = document.createElement('div')
      let ndivss3 = document.createElement('div')
      //console.log(ndivs)
      ndivss.style.width = '18vw'
      ndivss.style.height = '20vh'
      ndivss2.style.width = '18vw'
      ndivss2.style.height = '4vh'
      ndivss3.style.width = '18vw'
      ndivss3.style.height = '4vh'
      ndivss2.style.fontWeight = 'bold'

      let trandomNumber = Math.floor(Math.random() * 7);
      let idrandomNumber = Math.floor(Math.random() * 11);
      ndivss2.textContent = benertext[idrandomNumber]
      ndivss3.textContent = texts[trandomNumber]
      ndivss.className +=  i +"number"
      ndivs.appendChild(ndivss)
      ndivs.appendChild(ndivss2)
      ndivs.appendChild(ndivss3)
      let randomNumber = Math.floor(Math.random() * 80);
      ndivss.style.backgroundImage = randomomg[randomNumber]
      ndivss.style.backgroundRepeat = 'no-repeat'
      ndivss.style.backgroundSize = '18vw 20vh'

    }
}
//무한스크롤 라이브러리 이해 필요
while (window.innerHeight * 1.5 > document.body.scrollHeight) {
 addElement()
}

window.addEventListener('scroll', (e) => {
  handleScroll(e)


  
})

function handleScroll(e) {
  let height = (window.innerHeight + window.scrollY) - document.body.scrollHeight
  //console.log(height)
  console.log(window.WheelEvent)
  if (height > 0) {
    addElement()
  }
  if(height  < -2036){//라이브러리에 조건 새로고침 함수를 넣어보았다
   document.location.reload()

  }
}

function addElement() {
 let newElement = main.cloneNode(true)
 root.appendChild(newElement)
}


