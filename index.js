const maingif = document.querySelector('.maingif')
const maingifchd = document.querySelectorAll('.maingif div')

for(let index = 0; index < maingifchd.length; index++){
    for(let i=0; i<5; i++){
      let ndivs = document.createElement('div')
      ndivs.style.width = '18vw'
      ndivs.style.height = '28vh'
      ndivs.style.backgroundColor = '#cccc'
      ndivs.style.margin = '8px'
      console.log(ndivs)
      console.log(ndivs[0])
      maingifchd[index].appendChild(ndivs)
    }
}

