const previewBtn = document.querySelector('.matchbox__preview-btn')
const previewText = document.querySelectorAll('.matchbox__preview-text')
const darkText = document.querySelector('.matchbox__preview-darktext')
const darkerText = document.querySelector('.matchbox__preview-darkertext')
const stars = document.querySelectorAll('.matchbox__teams-star')
const addBtnOne = document.querySelector('.matchbox__teams-addbtnone')
const addBtnTwo = document.querySelector('.matchbox__teams-addbtntwo')
const starOne = document.querySelector('.star-one')
const starTwo = document.querySelector('.star-two')
const btnSpans = document.querySelectorAll('.matchbox__teams-btnspan')
const btnSpanOne=document.querySelector('.matchbox__teams-btnspanone')
const btnSpanTwo=document.querySelector('.matchbox__teams-btnspantwo')
// const closeBtn = document.querySelector('.matchbox__bottom-btn')

const showPreview = () => {
	previewText.forEach(text => {
		text.style.display = 'block'
		console.log('elo')
	})
	previewBtn.style.display = 'none'
	darkText.style.color = '#c8cdcd'
	darkerText.style.color = '#c8cdcd'
}

const starColor = e => {
	e.target.closest('i').classList.toggle('active')
}

const showAddBtnOne = () => {
	addBtnOne.classList.remove('hide')
}

const hideAddBtnOne = () => {
	addBtnOne.classList.add('hide')
}

const showAddBtnTwo = () => {
	addBtnTwo.classList.remove('hide')
}

const hideAddBtnTwo = () => {
	addBtnTwo.classList.add('hide')
}

const toggleRemoveTeamOne = () => {
	if(starOne.classList.contains('active')){
		btnSpanOne.textContent='Remove from'
	}
	else{
		btnSpanOne.textContent='Add to'
	}
}

const toggleRemoveTeamTwo = () => {
	if(starTwo.classList.contains('active')){
		btnSpanTwo.textContent='Remove from'
	}
	else{
		btnSpanTwo.textContent='Add to'
	}
}
// const closeTab = () => {
// 	window.close()
// }

previewBtn.addEventListener('click', showPreview)
stars.forEach(star => {
	star.addEventListener('click', starColor)
})

starOne.addEventListener('mouseover', showAddBtnOne)
starOne.addEventListener('mouseout', hideAddBtnOne)
starOne.addEventListener('click',toggleRemoveTeamOne)
starTwo.addEventListener('click',toggleRemoveTeamTwo)
starTwo.addEventListener('mouseover', showAddBtnTwo)
starTwo.addEventListener('mouseout', hideAddBtnTwo)
// closeBtn.addEventListener('click', closeTab)
