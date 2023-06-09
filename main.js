// NAVTOP
const containerTop = document.querySelector('.container-top')
const navTop = document.querySelector('.navtop')
const navTopEl = document.querySelectorAll('.navtop__element')

const loginBtn = document.querySelector('.navtop__toolicon-login')
const searchBtn = document.querySelector('.navtop__toolicon-search')
const settingsBtn = document.querySelector('.navtop__toolicon-settings')
const closeSettingsBtn = document.querySelector('.navtop__closesettingsbtn')
const settingsPanelBtn = document.querySelector('.navtop__settingsbtn-settings')
const toggleSettingsBtn = document.querySelector('.navtop__settingsbtn-toggle')

// Popping Windows
const settings = document.querySelector('.navtop__settings')
const settingsPanel = document.querySelector('.navtop__settingspanel')
const search = document.querySelector('.navtop__search')
const login = document.querySelector('.navtop__login')
const pref = document.querySelector('.navtop__pref')

// Search Window
const closeSearchBtn = document.querySelector('.navtop__search-closeicon')

// Login Window
const loginActiveBtn = document.querySelector('.navtop__login-whitebtn')
const loginExtras = document.querySelector('.navtop__login-extrasbox')
const closeLoginBtn = document.querySelector('.navtop__login-closebtn')

// Settings Window
const toggleBtn = document.querySelector('.navtop__settingsbtn-darkmode')

// SettingsPanel Window
const currentDate = document.querySelector('.navtop__settingspanel-date')
const closeSettingsPanelBtn = document.querySelector('.navtop__settingspanel-icon')

// Pref Window
const closePrefBtns = document.querySelectorAll('.navtop__pref-btnbox-btn')
const prefLi = document.querySelectorAll('.navtop__pref-mainbox-listelement')
const prefLiHeader = document.querySelector('.navtop__pref-mainbox-textbox-header')
const prefLiText = document.querySelector('.navtop__pref-mainbox-textbox-maintext')
const prefTextbox = document.querySelectorAll('.navtop__pref-mainbox-textbox')

// Nav Categories
const containerBox = document.querySelector('.container-box')
const navcategories = document.querySelectorAll('.navcategories__element')
const navMenuElements = document.querySelectorAll('.navcategories__menu-element')
const showNavBtn = document.querySelector('.navcategories__morebtn')
const navMenu = document.querySelector('.navcategories__menu')

// MAIN
const main = document.querySelector('main')

// Regionbar
const regionBarsHeading = document.querySelectorAll('.regionbar__heading')
const regionBars = document.querySelectorAll('.regionbar__region')
const regionBarsStar = document.querySelectorAll('.regionbar__star')
const addTeamBtn = document.querySelector('.regionbar__btn')
const hiddenLi = document.querySelectorAll('.regionbar__li-hidden')
const showMoreBtn = document.querySelector('.regionbar__showmorebtn')
const leaguesLi = document.querySelectorAll('.regionbar__leagues')
const countriesLi = document.querySelectorAll('.regionbar__countries')

// Scores
const scores = document.querySelector('.scores')
const days = document.querySelector('.scores__days')
const navBtns = document.querySelectorAll('.scores__navbtn')
const daysUlList = document.querySelector('.scores__daylist')
const daysList = document.querySelectorAll('.scores__daylist-day')
const activeDay = document.querySelector('.active')
const daysBtn = document.querySelector('.scores__maincontrolbtn')
const daysBtnDate = document.querySelector('.scores__maincontrolbtn-text')
const previousBtn = document.querySelector('#leftbtn')
const nextBtn = document.querySelector('#rightbtn')

// LeagueLiveTop
const leagueLive = document.querySelectorAll('.scores__leaguelive')

const leagueLiveTop = document.querySelectorAll('.scores__leaguelivetop')
const showLeagueBtn = document.querySelectorAll('.scores__showbtn')
const leagueHeadings = document.querySelectorAll('.scores__heading')
const standings = document.querySelectorAll('.scores__standingsbtn')

// LeagueLiveBottom
const leagueLiveBottom = document.querySelectorAll('.scores__leaguelivebottom')
const audioBtns = document.querySelectorAll('.fa-headphones')
const previewBtns = document.querySelectorAll('.scores__previewbtn')
const previewBtnsLinks = document.querySelectorAll('.scores__previewbtn-link')
const channelsBtns = document.querySelectorAll('.fa-tv')
const liveBtns = document.querySelectorAll('.scores__livebtn')

// LeagueLiveBottom - popups
const gamesPopups = document.querySelectorAll('.scores__leaguelivebottom-popup')
const gamesStars = document.querySelectorAll('.scores__leaguelivebottom-star')
const previewPopups = document.querySelectorAll('.scores__leaguelivebottom-previewpopup')
const livePopups = document.querySelectorAll('.scores__leaguelivebottom-livepopup')
const channelPopups = document.querySelectorAll('.scores__leaguelivebottom-channelpopup')
const audioPopups = document.querySelectorAll('.scores__leaguelivebottom-audiopopup')

// EXTRACONTENT
const extraContentText = document.querySelectorAll('.extracontent__text')
const extraContentLinks = document.querySelectorAll('.extracontent__link')

// SITEMAP
const sitemapHeadings = document.querySelectorAll('.sitemap__heading')
const sitemapLinks = document.querySelectorAll('.sitemap__flashscorebox--link')
const sitemapInvisible = document.querySelector('.sitemap__heading--invisible')
const sitemapMobileText = document.querySelector('.sitemap__mobile--text')
const sitemapBtns = document.querySelectorAll('.sitemap__btn')

// FOOTER
const footerContainer = document.querySelector('.footer-container')
const footerLite = document.querySelector('.footer__liteversion')
const footerText = document.querySelectorAll('.footer__text')
const footerLink = document.querySelector('.footer__link')

// BUTTONS
const prefBtn = document.querySelector('.prefbtn')
const topBtn = document.querySelector('.topbtn')

//NAVTOP
const navActive = e => {
	const newActive = e.target.closest('a')
	navTopEl.forEach(el => {
		if (el.classList.contains('navtop__element-active')) {
			el.classList.remove('navtop__element-active')
		}
		newActive.classList.add('navtop__element-active')
	})
}

//PREF Window
const toggleActive = e => {
	if (!e.target.classList.contains('navtop__pref-mainbox-listelement-active')) {
		prefLi.forEach(li => li.classList.remove('navtop__pref-mainbox-listelement-active'))
		e.target.classList.add('navtop__pref-mainbox-listelement-active')
	}
}

const toggleNavMenu = () => {
	navMenu.classList.toggle('hide')
}

const showTextbox = e => {
	prefTextbox.forEach(textbox => textbox.classList.add('hide'))
	for (let i = 0; i < 9; i++) {
		const element = prefLi[i]
		const element2 = prefTextbox[i]
		if (e.target === element) {
			element2.classList.remove('hide')
		}
	}
}

prefLi.forEach(li => li.addEventListener('click', showTextbox))
// SCORES
// POPUP Windows
const addClasses = () => {
	main.classList.add('blur')
	document.body.classList.add('fixed')
	containerBox.classList.add('blur')
	containerTop.classList.add('blur')
	containerTop.classList.add('disabled')
	prefBtn.classList.add('hide')
}

const removeClasses = () => {
	main.classList.remove('blur')
	document.body.classList.remove('fixed')
	containerBox.classList.remove('blur')
	containerTop.classList.remove('blur')
	containerTop.classList.remove('disabled')
	prefBtn.classList.remove('hide')
}

const showSearch = () => {
	search.classList.remove('hide')
	addClasses()
}

const showLogin = () => {
	login.classList.remove('hide')
	addClasses()
}

const hideLogin = () => {
	login.classList.add('hide')
	removeClasses()
}

const hideSearch = () => {
	search.classList.add('hide')
	removeClasses()
}

const toggleSettings = () => {
	hideSettingsPanel()
	hideLogin()
	hideSearch()
	settings.classList.toggle('hide')
	toggleSettingsIcon()
}

const hideSettings = () => {
	if (!settings.classList.contains('hide')) {
		toggleSettings()
	}
}

const toggleSettingsIcon = () => {
	if (settings.classList.contains('hide')) {
		settingsBtn.innerHTML = '<i class="fa-solid fa-bars navtop__btnicon-settings"></i>'
	} else {
		settingsBtn.innerHTML = '<i class="fa-solid fa-xmark navtop__btnicon-settings"></i>'
	}
}

const showSettingsPanel = () => {
	settings.classList.add('hide')
	settingsPanel.classList.remove('hide')
	addClasses()
	toggleSettingsIcon()
}

const hideSettingsPanel = () => {
	settingsPanel.classList.add('hide')
	removeClasses()
}

const showPreferences = () => {
	pref.classList.remove('hide')
	main.classList.add('disabled')
	addClasses()
	document.body.classList.remove('fixed')
}

const closePreferences = () => {
	pref.classList.add('hide')
	main.classList.remove('disabled')
	removeClasses()
}

const closeSettings = e => {
	if (
		e.target === settingsBtn ||
		e.target === settings ||
		e.target === loginBtn ||
		e.target === login ||
		e.target === addTeamBtn ||
		e.target === footerLink
	) {
	} else {
		hideSettingsPanel()
		hideLogin()
		hideSearch()
		hideSettings()
	}
}

// REGIONBAR
const showHiddenLi = () => {
	hiddenLi.forEach(li => {
		li.classList.remove('hide')
	})
	showMoreBtn.classList.add('hide')
}

const createStar = e => {
	const star = document.createElement('i')
	star.setAttribute('class', 'fa-solid fa-star regionbar__li-star')
	const closestLi = e.target.closest('li')
	closestLi.append(star)

	const removeStar = () => {
		star.remove()
	}
	closestLi.addEventListener('mouseout', removeStar)
}

const createDropdown = e => {
	const dropdown = document.createElement('i')
	dropdown.setAttribute('class', 'fa-solid fa-caret-down regionbar__li-star')
	const closestLi = e.target.closest('li')
	closestLi.append(dropdown)

	const removeDropdown = () => {
		dropdown.remove()
	}
	closestLi.addEventListener('mouseout', removeDropdown)
}

leaguesLi.forEach(li => li.addEventListener('mouseover', createStar))
countriesLi.forEach(li => li.addEventListener('mouseover', createDropdown))

// SCORES - Popups
const showGamesPopups = e => {
	const popup = e.target.previousElementSibling
	popup.classList.remove('hide')
}

const hideGamesPopups = e => {
	const popup = e.target.previousElementSibling
	popup.classList.add('hide')
}

const showPreviewPopups = e => {
	const previewPopup = e.target.previousElementSibling
	previewPopup.classList.remove('hide')
}

const hidePreviewPopups = e => {
	const previewPopup = e.target.previousElementSibling
	previewPopup.classList.add('hide')
}

const showLivePopups = e => {
	const livePopup = e.target.previousElementSibling
	livePopup.classList.remove('hide')
}

const hideLivePopups = e => {
	const livePopup = e.target.previousElementSibling
	livePopup.classList.add('hide')
}

const showAudioPopups = e => {
	const audioPopup = e.target.parentNode.previousElementSibling
	audioPopup.classList.remove('hide')
}

const hideAudioPopups = e => {
	const audioPopup = e.target.parentNode.previousElementSibling
	audioPopup.classList.add('hide')
}

const showChannelPopups = e => {
	const channelPopup = e.target.parentNode.previousElementSibling
	channelPopup.classList.remove('hide')
}

const hideChannelPopups = e => {
	const channelPopup = e.target.parentNode.previousElementSibling
	channelPopup.classList.add('hide')
}

const hideLeague = e => {
	const matchboxTop = e.target.closest('div')
	const matchboxBottom = matchboxTop.nextElementSibling
	matchboxBottom.classList.toggle('hide')
	const showBtn = e.target.closest('button')
	const standings = showBtn.previousElementSibling
	const numberOfMatches = matchboxBottom.querySelectorAll('.scores__leaguelivebottom')
	if (matchboxBottom.classList.contains('hide')) {
		showBtn.innerHTML = '<i class="fa-solid fa-arrow-down"></i>'
		if (numberOfMatches.length > 1) {
			standings.innerHTML = `<a href="" class="scores__standingsbtn">display matches (${numberOfMatches.length})</a>`
		} else {
			standings.innerHTML = `<a href="" class="scores__standingsbtn">display matches (1)</a>`
		}
	} else {
		showBtn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>'
		standings.innerHTML = '<a href="" class="scores__standingsbtn">Standings</a>'
	}
}

const showDays = () => {
	days.classList.toggle('hide')
}

const changeDate = e => {
	daysList.forEach(day => day.classList.remove('active'))
	const li = e.target.closest('li')
	li.classList.add('active')
	const liText = li.textContent
	if (liText === 'TODAY') {
		daysBtnDate.textContent = `${shortDate} ${day}`
	} else {
		daysBtnDate.textContent = liText
	}
	days.classList.add('hide')
}

const date = new Date().toJSON().slice(0, 10)
const day = new Date().toDateString('default', { weekday: 'long' }).slice(0, 2).toUpperCase()
const shortDate = new Date().toJSON().slice(5, 10)

const setCurrentDate = () => {
	currentDate.textContent = `${date}`
	daysBtnDate.textContent = `${shortDate} ${day}`
}

const updateDate2 = () => {
	for (let i = 0; i < 7; i++) {
		const date1 = new Date()
		date1.setDate(date1.getDate() - 7 + i)
		const dayOfTheMonth = date1.toJSON().slice(5, 10)
		const newDay = new Date(-86400000 + 86400000 * i)
		const day = newDay.toDateString('default', { weekday: 'long' }).slice(0, 2).toUpperCase()
		daysList[i].textContent = `${day}`
		daysList[i].textContent = `${dayOfTheMonth} ${day}`
	}
}

const updateDate3 = () => {
	for (let i = 8; i <= 14; i++) {
		const date1 = new Date()
		date1.setDate(date1.getDate() - 7 + i)
		const dayOfTheMonth = date1.toJSON().slice(5, 10)
		const newDay = new Date(-86400000 + 86400000 * i)
		const day = newDay.toDateString('default', { weekday: 'long' }).slice(0, 2).toUpperCase()
		daysList[i].textContent = `${day}`
		daysList[i].textContent = `${dayOfTheMonth} ${day}`
	}
}

const chooseNextDay = () => {
	const activeDay = document.querySelector('.active')
	if (activeDay.nextElementSibling !== null) {
		activeDay.classList.remove('active')
		const newActiveDay = activeDay.nextElementSibling
		newActiveDay.classList.add('active')
		daysBtnDate.textContent = newActiveDay.textContent
	}
}

const choosePreviousDay = () => {
	const activeDay = document.querySelector('.active')
	if (activeDay.previousElementSibling !== null) {
		activeDay.classList.remove('active')
		const newActiveDay = activeDay.previousElementSibling
		newActiveDay.classList.add('active')
		daysBtnDate.textContent = newActiveDay.textContent
	}
}

updateDate2()
updateDate3()

const showTopBtn = () => {
	const distanceToTop = window.scrollY
	if (distanceToTop >= 300) {
		topBtn.style.display = 'flex'
	} else {
		topBtn.style.display = 'none'
	}
}

const scrollToTop = () => {
	window.scrollTo(0, 0)
}

const lightMode = () => {
	document.body.classList.toggle('lightgrey')

	login.classList.toggle('white', 'black')
	// login.classList.toggle('black')
	loginExtras.classList.toggle('bg-lightblue')
	loginActiveBtn.classList.toggle('bg-blue')
	loginActiveBtn.classList.toggle('textwhite')
	search.classList.toggle('white')
	pref.classList.toggle('white')
	settingsPanel.classList.toggle('white')
	settings.classList.toggle('white')

	navcategories.forEach(element => element.classList.toggle('darkergrey'))

	regionBars.forEach(element => element.classList.toggle('lightblack'))
	regionBarsHeading.forEach(element => element.classList.toggle('lightblack'))
	regionBarsStar.forEach(element => element.classList.toggle('lightblack'))
	showMoreBtn.classList.toggle('lightblack')

	scores.classList.toggle('white')
	navBtns.forEach(element => element.classList.toggle('darkergrey'))
	navBtns.forEach(element => element.classList.toggle('eee'))
	leagueLive.forEach(box => box.classList.toggle('white'))
	nextBtn.classList.toggle('grey' && 'white')
	daysBtn.classList.toggle('black' && 'white')
	daysBtnDate.classList.toggle('black')

	leagueLiveTop.forEach(box => box.classList.toggle('lightgold'))
	leagueHeadings.forEach(element => element.classList.toggle('darkergrey'))
	showLeagueBtn.forEach(element => element.classList.toggle('darkergrey'))
	standings.forEach(element => element.classList.toggle('darkergrey'))

	leagueLiveBottom.forEach(element => element.classList.toggle('black'))
	liveBtns.forEach(element => element.classList.toggle('verylightblack'))
	previewBtns.forEach(element => element.classList.toggle('white'))
	previewBtnsLinks.forEach(element => element.classList.toggle('verylightblack'))
	previousBtn.classList.toggle('grey' && 'white')
	channelPopups.forEach(popup => popup.classList.toggle('bgblack'))
	livePopups.forEach(popup => popup.classList.toggle('bgblack'))
	previewPopups.forEach(popup => popup.classList.toggle('bgblack'))
	audioPopups.forEach(popup => popup.classList.toggle('bgblack'))

	extraContentText.forEach(element => element.classList.toggle('verylightblack'))
	extraContentLinks.forEach(element => element.classList.toggle('verylightblack'))

	sitemapMobileText.classList.toggle('darkergrey')
	sitemapHeadings.forEach(element => element.classList.toggle('darkergrey'))
	sitemapLinks.forEach(element => element.classList.toggle('darkergrey'))
	sitemapInvisible.classList.remove('darkergrey')
	sitemapInvisible.classList.toggle('transparent')
	sitemapBtns.forEach(element => element.classList.toggle('bgblack'))

	footerContainer.classList.toggle('white')
	footerLite.classList.toggle('verylightblack')
	footerLink.classList.toggle('verylightblack')
	footerText.forEach(element => element.classList.toggle('verylightblack'))

	prefBtn.classList.toggle('white')

	let before = window.getComputedStyle(toggleSettingsBtn, ':before')
}

// lightMode()
setCurrentDate()

main.addEventListener('click', closeSettings)

navTopEl.forEach(el => el.addEventListener('click', navActive))
loginBtn.addEventListener('click', showLogin)
searchBtn.addEventListener('click', showSearch)
settingsBtn.addEventListener('click', toggleSettings)
settingsPanelBtn.addEventListener('click', showSettingsPanel)

toggleBtn.addEventListener('click', lightMode)

closeLoginBtn.addEventListener('click', hideLogin)
closeSearchBtn.addEventListener('click', hideSearch)
closeSettingsPanelBtn.addEventListener('click', hideSettingsPanel)
closePrefBtns.forEach(btn => btn.addEventListener('click', closePreferences))

prefLi.forEach(li => li.addEventListener('click', toggleActive))

showNavBtn.addEventListener('click', toggleNavMenu)

addTeamBtn.addEventListener('click', showSearch)
showMoreBtn.addEventListener('click', showHiddenLi)

daysBtn.addEventListener('click', showDays)
daysList.forEach(btn => {
	btn.addEventListener('click', changeDate)
})
nextBtn.addEventListener('click', chooseNextDay)
previousBtn.addEventListener('click', choosePreviousDay)

showLeagueBtn.forEach(btn => {
	btn.addEventListener('click', hideLeague)
})

gamesStars.forEach(star => star.addEventListener('mouseover', showGamesPopups))
gamesStars.forEach(star => star.addEventListener('mouseout', hideGamesPopups))
previewBtns.forEach(btn => btn.addEventListener('mouseover', showPreviewPopups))
previewBtns.forEach(btn => btn.addEventListener('mouseout', hidePreviewPopups))
liveBtns.forEach(btn => btn.addEventListener('mouseover', showLivePopups))
liveBtns.forEach(btn => btn.addEventListener('mouseout', hideLivePopups))
audioBtns.forEach(btn => btn.addEventListener('mouseover', showAudioPopups))
audioBtns.forEach(btn => btn.addEventListener('mouseleave', hideAudioPopups))
channelsBtns.forEach(btn => btn.addEventListener('mouseover', showChannelPopups))
channelsBtns.forEach(btn => btn.addEventListener('mouseout', hideChannelPopups))

prefBtn.addEventListener('click', showPreferences)
footerLink.addEventListener('click', showPreferences)

window.addEventListener('scroll', showTopBtn)
topBtn.addEventListener('click', scrollToTop)

// const showClickDetails = () => {
// 	// const fadeDelay=1000
// 	// const fadeDuration=1000
// 	leagueLiveBottom.forEach(league=>league.addEventListener('mouseover',(e)=>{
// 		const left=e.pageX -190+'px'
// 		const top=e.pagey +'px'
// 		let button=document.createElement('button')
// 		button.setAttribute('class','scores__leaguelivebottom-clickpopup')
// 		league.appendChild(button)
// 		button.textContent='Click for match details'
// 		button.style.left=left
// 		button.style.top=top
// 	}))
// }
// leagueLiveBottom.forEach(lg=>lg.addEventListener('mouseover',showClickDetails))
