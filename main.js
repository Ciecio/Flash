const modalWindow = document.querySelector('.modalwindow')
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
const searchLi = document.querySelectorAll('.navtop__search-listelement')
const searchHeading = document.querySelector('.navtop__search-heading')
const searchText = document.querySelector('.navtop__search-text')
const searchMostPopular = document.querySelector('.navtop__search-mostpopular')
const searchTextBottom = document.querySelectorAll('.navtop__search-textbottom')
const searchTextTop = document.querySelectorAll('.navtop__search-texttop')
const searchInputBtn = document.querySelector('.navtop__search-inputbox-btn')
const searchInput = document.querySelector('.navtop__search-inputbox-input')
const searchListElements = document.querySelectorAll('.navtop__search-sportslist-element')
const searchSportslist = document.querySelector('.navtop__search-sportslist')
const searchFirstElement = document.querySelector('#sports-el-1')

// Login Window
const loginHeading = document.querySelector('.navtop__login-heading')
const loginActiveBtn = document.querySelector('.navtop__login-whitebtn')
const loginExtras = document.querySelector('.navtop__login-extrasbox')
const closeLoginBtn = document.querySelector('.navtop__login-closebtn')
const loginBtnText = document.querySelectorAll('.navtop__login-btntext')
const loginSmallText = document.querySelector('.navtop__login-smalltext')
const loginLink = document.querySelectorAll('.navtop__login-link')
const loginWhiteText = document.querySelector('.navtop__login-btnwhitetext')
const facebookIcon = document.querySelectorAll('.fa-facebook')
const appleIconSitemap = document.querySelector('#sitemapapple')
const appleIconLogin = document.querySelector('#loginapple')
const googleIcon = document.querySelectorAll('.fa-google')
const mailIcon = document.querySelector('.fa-envelope')
const loginBtns = document.querySelectorAll('.standardloginbutton')

// Settings Window
const toggleBtn = document.querySelector('.navtop__settingsbtn-darkmode')
const settingsBtns = document.querySelectorAll('.navtop__settingsbtn')

// SettingsPanel Window
const currentDate = document.querySelector('.navtop__settingspanel-date')
const closeSettingsPanelBtn = document.querySelector('.navtop__settingspanel-icon')
const settingsPanelTime = document.querySelector('.navtop__settingspanel-time')
const panelOne = document.querySelector('#panel1')
const panelTwo = document.querySelector('#panel2')
const panelThree = document.querySelector('#panel3')
const panelOneOptions = panelOne.querySelectorAll('.navtop__settingspanel-btn')
const panelTwoOptions = panelTwo.querySelectorAll('.navtop__settingspanel-btn')
const panelThreeOptions = panelThree.querySelectorAll('.navtop__settingspanel-btn')

// Pref Window
const closePrefBtns = document.querySelectorAll('.navtop__pref-btnbox-btn')
const prefLi = document.querySelectorAll('.navtop__pref-mainbox-listelement')
const prefLiOne = document.querySelector('#prefLi1')
const prefLiHeader = document.querySelector('.navtop__pref-mainbox-textbox-header')
const prefLiText = document.querySelector('.navtop__pref-mainbox-textbox-maintext')
const prefTextbox = document.querySelectorAll('.navtop__pref-mainbox-textbox')
const prefHeader = document.querySelector('.navtop__pref-headerbox-header')
const prefActiveLi = document.querySelector('.navtop__pref-mainbox-listelement-active')
const prefLink = document.querySelector('.navtop__pref-mainbox-textbox-link')
const prefOptionsBtn = document.querySelectorAll('.navtop__pref-mainbox-textbox-button')
const prefVendorsLists = document.querySelectorAll('.navtop__pref-mainbox-textbox-listbtn')
const allowBtn = document.querySelector('#allowbtn')
const prefMainbox = document.querySelector('.navtop__pref-mainbox')
const vendorsMainbox = document.querySelector('.navtop__pref-vendorsbox-mainbox')

const prefVendorsBox = document.querySelector('.navtop__pref-vendorsbox')
const prefBackBtn = document.querySelector('.navtop__pref-vendorsbox-backbtn')
const prefVendorsCheckbtn = document.querySelectorAll('.navtop__pref-vendorsbox-element-checkbox')
const prefMinusBtn = document.querySelector('.fa-minus')
const prefMinusButton = document.querySelector('#minusbtn')
const prefInputbox = document.querySelector('.navtop__pref-vendorsbox-inputbox')
const prefInput = document.querySelector('.navtop__pref-vendorsbox-input')
const prefTopText = document.querySelector('.navtop__pref-vendorsbox-top-text')
const prefSearchIcon = document.querySelector('.navtop__pref-vendorsbox-icon')
const prefOptionBottom = document.querySelectorAll('.navtop__pref-vendorsbox-element-bottom')
const prefOptionTop = document.querySelectorAll('.navtop__pref-vendorsbox-element-top')
const prefVendorsCard = document.querySelectorAll('.navtop__pref-vendorsbox-element-privacylist')
const prefVendorsText = document.querySelectorAll('.navtop__pref-vendorsbox-element-privacylist-text')
const prefVendorsSpan = document.querySelectorAll('.navtop__pref-vendorsbox-element-privacylist-span')
const prefVendorsLegal = document.querySelectorAll('.navtop__pref-mainbox-textbox-legal')
const prefVendorsAnchor = document.querySelector('.navtop__pref-vendorsbox-anchor')
const prefVendorsFilterslist = document.querySelector('.navtop__pref-vendorsbox-filterslist')
const prefVendorsFilterbtn = document.querySelector('.navtop__pref-vendorsbox-filterbtn')
const clearFiltersBtn = document.querySelector('.navtop__pref-vendorsbox-filterslist-top')
const vendorsShowBtn = document.querySelectorAll('.navtop__pref-vendorsbox-element-showbtn')
const vendorsFiltersText = document.querySelectorAll('.navtop__pref-vendorsbox-filterslist-filter-text')

// Nav Categories
const containerBox = document.querySelector('.container-box')
const navcategories = document.querySelectorAll('.navcategories__element')
const navcategoriesZero = document.querySelector('.navcategories__element-zero')
const navMenuElements = document.querySelectorAll('.navcategories__menu-element')
const navMenuENumbers = document.querySelectorAll('.navcategories__menu-number')
const showNavBtn = document.querySelector('.navcategories__morebtn')
const navMenu = document.querySelector('.navcategories__menu')

// MAIN
const main = document.querySelector('main')

// Regionbar
const regionBarsHeading = document.querySelectorAll('.regionbar__heading')
const regionBars = document.querySelectorAll('.regionbar__region')
const regionBarLi = document.querySelectorAll('.regionbar__li')
const regionBarsStar = document.querySelectorAll('.regionbar__star')
const addTeamBtn = document.querySelector('.regionbar__btn')
const hiddenLi = document.querySelectorAll('.regionbar__li-hidden')
const showMoreBtn = document.querySelector('.regionbar__showmorebtn')
const leaguesLi = document.querySelectorAll('.regionbar__leagues')
const countriesLi = document.querySelectorAll('.regionbar__countries')
const dropdowns = document.querySelectorAll('.regionbar__li-dropdown')

// Scores
const scores = document.querySelector('.scores')
const days = document.querySelector('.scores__days')
const navBtns = document.querySelectorAll('.scores__navbtn')
const scoresNav=document.querySelector('.scores__nav')
const navBtnActive = document.querySelector('.navbtnactive')
const daysUlList = document.querySelector('.scores__daylist-day')
const daysList = document.querySelectorAll('.scores__daylist-day')
const activeDay = document.querySelector('.active')
const scoresBtnBox=document.querySelector('.scores__selectbtnbox')
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
const audioBtnParents = document.querySelectorAll('.scores__audiobtn')
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
const sitemapBackground=document.querySelector('.white-background')

// FOOTER
const footerContainer = document.querySelector('.footer-container')
const footerLite = document.querySelector('.footer__liteversion')
const footerText = document.querySelectorAll('.footer__text')
const footerLink = document.querySelector('.footer__link')

// BUTTONS
const prefBtn = document.querySelector('.prefbtn')
const topBtn = document.querySelector('.topbtn')

//MODALWINDOW
const close = params => {}
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

//NAVCATEGORIES
const navCategoriesActive = e => {
	if (!e.target.classList.contains('nav__active')) {
		navcategories.forEach(btn => btn.classList.remove('nav__active'))
		e.target.classList.add('nav__active')
	}
}

//PREF Window
const toggleActive = e => {
	removeActives()
	if (
		!e.target.classList.contains('navtop__pref-mainbox-listelement-active') &&
		!document.body.classList.contains('lightgrey')
	) {
		e.target.classList.add('navtop__pref-mainbox-listelement-active')
	} else if (
		!e.target.classList.contains('navtop__pref-mainbox-listelement-activelm') &&
		document.body.classList.contains('lightgrey')
	) {
		e.target.classList.add('navtop__pref-mainbox-listelement-activelm')
	}
}

const addActives = () => {
	if (document.body.classList.contains('lightgrey')) {
		prefActiveLi.classList.add('navtop__pref-mainbox-listelement-activelm')
		prefActiveLi.classList.remove('navtop__pref-mainbox-listelement-active')
		prefLiOne.classList.toggle('navtop__pref-mainbox-listelement-active')
	} else {
		prefActiveLi.classList.add('navtop__pref-mainbox-listelement-active')
		prefActiveLi.classList.remove('navtop__pref-mainbox-listelement-activelm')
	}
}

const removeActives = () => {
	prefLi.forEach(li => li.classList.remove('navtop__pref-mainbox-listelement-activelm'))
	prefLi.forEach(li => li.classList.remove('navtop__pref-mainbox-listelement-active'))
}

const showVendorsBox = () => {
	prefMainbox.classList.add('hide')
	prefVendorsBox.classList.remove('hide')
}

const hideVendorsBox = () => {
	prefMainbox.classList.remove('hide')
	prefVendorsBox.classList.add('hide')
}

const toggleCheckBtn = e => {
	e.target.classList.toggle('transparent')
	if (document.body.classList.contains('lightgrey')) {
		e.target.classList.add('white')
		e.target.classList.add('border-black')
		e.target.classList.remove('bgblack')
		e.target.classList.remove('border-white')
	} else {
		e.target.classList.remove('white')
		e.target.classList.remove('border-black')
		e.target.classList.add('bgblack')
		e.target.classList.add('border-white')
	}
}

const vendorsArrowBottom = e => {
	const list = e.target.closest('div').nextElementSibling
	if (e.target.classList.contains('fa-arrow-right')) {
		e.target.classList.remove('fa-arrow-right')
		e.target.classList.add('fa-arrow-down')
		list.classList.remove('hide')
	} else {
		e.target.classList.add('fa-arrow-right')
		e.target.classList.remove('fa-arrow-down')
		list.classList.add('hide')
	}
}

const toggleAllCheckBtns = () => {
	const mainboxCheckBtns = vendorsMainbox.querySelectorAll('.navtop__pref-vendorsbox-element-checkbox')
	if (document.body.classList.contains('lightgrey')) {
		mainboxCheckBtns.forEach(btn => btn.classList.toggle('white'))
		mainboxCheckBtns.forEach(btn => btn.classList.remove('bgblack'))
		mainboxCheckBtns.forEach(btn => btn.classList.remove('border-white'))
		mainboxCheckBtns.forEach(btn => btn.classList.toggle('border-black'))
	} else {
		mainboxCheckBtns.forEach(btn => btn.classList.toggle('bgblack'))
		mainboxCheckBtns.forEach(btn => btn.classList.toggle('transparent'))
		mainboxCheckBtns.forEach(btn => btn.classList.toggle('border-white'))
	}
}

const toggleFiltersList = () => {
	prefVendorsAnchor.classList.toggle('hide')
	prefVendorsFilterslist.classList.toggle('hide')
}

const clearFilters = () => {
	const filters = prefVendorsFilterslist.querySelectorAll('.navtop__pref-vendorsbox-element-checkbox')
	filters.forEach(filter => filter.classList.add('bgblack'))
	filters.forEach(filter => filter.classList.add('transparent'))
	filters.forEach(filter => filter.classList.add('border-white'))
}

const hideNavMenu = () => {
	navMenu.classList.add('hide')
}

const toggleNavMenu = () => {
	navMenu.classList.toggle('hide')
	days.classList.add('hide')
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

const togglePrefBtn = e => {
	if (e.target.classList.contains('togglePrefSettings')) {
		e.target.classList.remove('togglePrefSettings')
		e.target.classList.add('togglePrefSettings2')
		allowBtn.classList.add('hide')
	} else {
		e.target.classList.toggle('togglePrefSettings')
		e.target.classList.remove('togglePrefSettings2')
		allowBtn.classList.remove('hide')
	}
}

// SCORES
const scoresNavActive = e => {
	if (!e.target.classList.contains('navbtnactive')) {
		navBtns.forEach(btn => btn.classList.remove('navbtnactive'))
		navBtns.forEach(btn => btn.classList.remove('textwhite'))
		e.target.classList.add('navbtnactive')
		e.target.classList.add('textwhite')
	}
}

// POPUP Windows
const addClasses = () => {
	main.classList.add('blur')
	document.body.classList.add('fixed')
	containerBox.classList.add('blur')
	containerTop.classList.add('blur')
	containerTop.classList.add('disabled')
	prefBtn.classList.add('hide')
	modalWindow.classList.remove('hide')
}

const removeClasses = () => {
	main.classList.remove('blur')
	document.body.classList.remove('fixed')
	containerBox.classList.remove('blur')
	containerTop.classList.remove('blur')
	containerTop.classList.remove('disabled')
	prefBtn.classList.remove('hide')
	modalWindow.classList.add('hide')
}

const hideAllWindows = () => {
	hideSearch()
	hideLogin()
	hideSettingsPanel()
}

const showSearch = () => {
	search.classList.remove('hide')
	addClasses()
}

const hideSearch = () => {
	search.classList.add('hide')
	searchInputBtn.innerHTML = `ALL SPORTS <i
	class="fa-solid fa-caret-down navtop__search-inputbox-dropdown"></i>`
	searchListElements.forEach(el => el.classList.remove('navtop__search-sportslist-element-active'))
	searchFirstElement.classList.add('navtop__search-sportslist-element-active')
	removeClasses()
	hideSportsList()
}

const searchToggleActive = e => {
	searchListElements.forEach(el => el.classList.remove('navtop__search-sportslist-element-active'))
	searchListElements.forEach(el => el.classList.remove('nohover'))
	e.target.classList.add('navtop__search-sportslist-element-active')
	e.target.classList.add('nohover')
	searchInputBtn.innerHTML = `${e.target.textContent} <i
	class="fa-solid fa-caret-down navtop__search-inputbox-dropdown"></i>`
}

const hideSportsList = () => {
	searchSportslist.classList.add('hide')
	searchBtnActive()
}

const hideSportsList2 = e => {
	if (e.target !== searchInputBtn) {
		hideSportsList()
	}
}

const showSportsList = () => {
	searchSportslist.classList.remove('hide')
	searchBtnActive()
}

const toggleSportslist = () => {
	searchSportslist.classList.toggle('hide')
	searchBtnActive()
}

const searchBtnActive = () => {
	if (!searchSportslist.classList.contains('hide') && !document.body.classList.contains('lightgrey')) {
		searchInputBtn.classList.add('bg-darkgrey')
	} else if (!searchSportslist.classList.contains('hide') && document.body.classList.contains('lightgrey')) {
		searchInputBtn.classList.remove('bg-darkgrey')
		searchInputBtn.classList.add('lightgrey')
		console.log('jest w pyte')
	} else {
		searchInputBtn.classList.remove('bg-darkgrey')
		searchInputBtn.classList.remove('lightgrey')
	}
}

const showLogin = () => {
	login.classList.remove('hide')
	addClasses()
}

const hideLogin = () => {
	login.classList.add('hide')
	removeClasses()
}

//Settings
const toggleSettings = () => {
	hideSettingsPanel()
	hideLogin()
	hideSearch()
	hideNavMenu()
	hideDays()
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

const selectOptionOne = e => {
	if (e.target.classList.contains('addbefore')) {
	} else {
		panelOneOptions.forEach(option => option.classList.remove('addbefore'))
		e.target.classList.add('addbefore')
	}
}

const selectOptionTwo = e => {
	if (e.target.classList.contains('addbefore')) {
	} else {
		panelTwoOptions.forEach(option => option.classList.remove('addbefore'))
		e.target.classList.add('addbefore')
	}
}

const selectOptionThree = e => {
	if (e.target.classList.contains('addbefore')) {
	} else {
		panelThreeOptions.forEach(option => option.classList.remove('addbefore'))
		e.target.classList.add('addbefore')
	}
}

//Pref
const showPreferences = () => {
	hideSettings()
	pref.classList.remove('hide')
	main.classList.add('disabled')
	addClasses()
	document.body.classList.remove('fixed')
	modalWindow.classList.add('disabled')
}

const hidePreferences = () => {
	pref.classList.add('hide')
	main.classList.remove('disabled')
	removeClasses()
	hideVendorsBox()
	modalWindow.classList.remove('disabled')
}

const closeSettings = e => {
	if (
		e.target === settingsBtn ||
		e.target === settings ||
		e.target === loginBtn ||
		e.target === login ||
		e.target === addTeamBtn ||
		e.target === footerLink ||
		e.target === navMenu ||
		e.target === days ||
		e.target === daysBtn ||
		e.target === daysBtnDate
	) {
	} else {
		hideSettingsPanel()
		hideLogin()
		hideSearch()
		hideSettings()
		hideNavMenu()
		hideDays()
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

	const removeStar = e => {
		star.remove()
	}

	closestLi.addEventListener('mouseout', removeStar)
}

const createDropdown = e => {
	const dropdown = document.createElement('i')
	dropdown.setAttribute('class', 'fa-solid fa-caret-down regionbar__li-dropdown regionbar__li-star')
	const closestLi = e.target.closest('li')
	closestLi.append(dropdown)

	const removeDropdown = () => {
		dropdown.remove()
	}

	closestLi.addEventListener('mouseout', removeDropdown)
}

leaguesLi.forEach(li => li.addEventListener('mouseover', createStar))
countriesLi.forEach(li => li.addEventListener('mouseover', createDropdown))
hiddenLi.forEach(li => li.addEventListener('mouseover', createDropdown))

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
	console.log(channelPopup)
	// console.log(e.target);
	if (e.target.classList.contains('scores__leaguelivebottom-channelpopup')) {
		channelPopup.classList.add('hide')
	}
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

	const displayMatchesColor = () => {
		const standings = document.querySelectorAll('.scores__standingsbtn')
		if (document.body.classList.contains('lightgrey') && matchboxBottom.classList.contains('hide')) {
			standings.forEach(standing => standing.classList.add('verylightblack'))
			standings.forEach(standing => standing.classList.remove('textwhite'))
		} else if (document.body.classList.contains('lightgrey') && !matchboxBottom.classList.contains('hide')) {
			standings.forEach(standing => standing.classList.add('verylightblack'))
			standings.forEach(standing => standing.classList.remove('textwhite'))
		} else {
			standings.forEach(standing => standing.classList.remove('verylightblack'))
			standings.forEach(standing => standing.classList.add('textwhite'))
		}
	}
	window.addEventListener('click', displayMatchesColor)
}

const toggleDays = () => {
	days.classList.toggle('hide')
}

const hideDays = () => {
	days.classList.add('hide')
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
		// console.log(date1.getTime());
		date1.setDate(date1.getDate() - 7 + i)
		const dayOfTheMonth = date1.toJSON().slice(5, 10)
		const newDay = new Date().getTime()-7*((86400000)) +(86400000) * i
		console.log(newDay);

		const secondsIntoDate = () => {
			let date= new Date(newDay)
			console.log(date)
			const day = date.toDateString('default', { weekday: 'long' }).slice(0, 2).toUpperCase()
		}
		secondsIntoDate()
		// const newDayDigits=((new Date()).getTime())
		// console.log(newDayDigits);
		// const newDayDigits2=(newDayDigits)+ (86400000 * i)
		// console.log(newDayDigits2);
		// console.log(newDayDigits2 +date.toString())
		// const newDay = new Date(86400000 * i)
		// const day = newDay.toDateString('default', { weekday: 'long' }).slice(0, 2).toUpperCase()
		daysList[i].textContent = `${day}`
		daysList[i].textContent = `${dayOfTheMonth} ${day}`
	}
}

const updateDate3 = () => {
	for (let i = 8; i <= 14; i++) {
		const date1 = new Date()
		date1.setDate(date1.getDate() - 7 + i)
		const dayOfTheMonth = date1.toJSON().slice(5, 10)
		const newDay = new Date(86400000 *i)
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
	removeActives()
	addActives()
	document.body.classList.toggle('lightgrey')

	navMenu.classList.toggle('white')
	navMenuElements.forEach(el => el.classList.toggle('verylightblack'))
	navMenuENumbers.forEach(number => number.classList.toggle('lightgrey'))

	login.classList.toggle('white')
	login.classList.toggle('black')
	loginExtras.classList.toggle('bg-lightblue')
	loginBtnText.forEach(btn => btn.classList.toggle('verylightblack'))
	loginWhiteText.classList.remove('verylightblack')
	loginWhiteText.classList.toggle('textwhite')
	loginActiveBtn.classList.toggle('bg-blue')
	loginHeading.classList.toggle('black')
	loginSmallText.classList.toggle('verylightblack')
	loginLink.forEach(login => login.classList.toggle('black'))
	facebookIcon.forEach(icon => icon.classList.toggle('blue'))
	googleIcon.forEach(icon => icon.classList.toggle('white'))
	appleIconLogin.classList.toggle('black')
	mailIcon.classList.toggle('grey')

	search.classList.toggle('white')
	searchLi.forEach(li => li.classList.toggle('verylightgreyhover'))
	searchHeading.classList.toggle('lightblack')
	searchText.classList.toggle('lightblack')
	searchMostPopular.classList.toggle('lightblack')
	searchTextTop.forEach(text => text.classList.toggle('lightblack'))
	searchTextBottom.forEach(text => text.classList.toggle('grey'))
	searchInputBtn.classList.toggle('verylightblack')
	searchInputBtn.classList.toggle('verylightgreyhover')
	searchInput.classList.toggle('verylightblack')
	searchSportslist.classList.toggle('white')
	searchListElements.forEach(el => el.classList.toggle('verylightblack'))

	pref.classList.toggle('white')
	prefLi.forEach(li => li.classList.toggle('bg-grey-e9'))
	prefLi.forEach(li => li.classList.toggle('black'))
	prefLi.forEach(li=>li.classList.toggle('listelementcolors'))
	// prefActiveLi.classList.toggle('bg-grey-e9')
	prefActiveLi.classList.toggle('navtop__pref-mainbox-listelement-activelm')
	prefLiHeader.classList.toggle('verylightblack')
	prefTextbox.forEach(textbox => textbox.classList.toggle('verylightblack'))
	prefHeader.classList.toggle('verylightblack')
	prefLink.classList.toggle('verylightblack')
	prefBackBtn.classList.toggle('verylightblack')
	prefTopText.classList.toggle('verylightblack')
	prefSearchIcon.classList.toggle('black')
	prefOptionTop.forEach(option => option.classList.toggle('verylightblack'))
	prefOptionBottom.forEach(option => option.classList.toggle('verylightblack'))
	prefVendorsText.forEach(text => text.classList.toggle('verylightblack'))
	prefVendorsSpan.forEach(text => text.classList.toggle('black'))
	prefVendorsCard.forEach(card => card.classList.toggle('eee'))
	prefInput.classList.toggle('verylightblack')
	prefVendorsLegal.forEach(legal => legal.classList.toggle('verylightblack'))
	prefVendorsAnchor.classList.toggle('eee')
	prefVendorsFilterslist.classList.toggle('white')
	vendorsFiltersText.forEach(text => text.classList.toggle('verylightblack'))

	prefInputbox.classList.toggle('white')
	vendorsShowBtn.forEach(btn => btn.classList.toggle('verylightblack'))

	settingsBtns.forEach(btn => btn.classList.toggle('white'))
	settingsBtns.forEach(btn => btn.classList.toggle('verylightblack'))
	toggleSettingsBtn.classList.toggle('togglesettings')
	toggleSettingsBtn.classList.toggle('togglesettings2')

	settingsPanel.classList.toggle('white')
	settingsPanel.classList.toggle('black')
	settings.classList.toggle('white')
	settingsPanelTime.classList.toggle('black')

	navcategories.forEach(element => element.classList.toggle('verylightblack'))
	navcategories.forEach(element => element.classList.toggle('darkertexthover'))
	navcategoriesZero.classList.toggle('grey')
	navcategoriesZero.classList.toggle('black')

	regionBars.forEach(element => element.classList.toggle('lightblack'))
	regionBarLi.forEach(element => element.classList.toggle('lightgreyhover'))
	regionBarsHeading.forEach(element => element.classList.toggle('lightblack'))
	regionBarsStar.forEach(element => element.classList.toggle('lightblack'))
	dropdowns.forEach(dropdown => dropdown.classList.toggle('black'))
	showMoreBtn.classList.toggle('lightblack')

	scores.classList.toggle('white')
	days.classList.toggle('white')
	daysList.forEach(day => day.classList.toggle('verylightblack'))
	scoresNav.classList.toggle('white')

	navBtns.forEach(element => element.classList.toggle('verylightblack'))
	navBtns.forEach(element => element.classList.toggle('eee'))
	navBtns.forEach(element => element.classList.toggle('lightgreyhover'))
	leagueLive.forEach(box => box.classList.toggle('white'))
	nextBtn.classList.toggle('grey' && 'white')
	daysBtn.classList.toggle('black' && 'white')
	daysBtnDate.classList.toggle('grey')

	leagueLiveTop.forEach(box => box.classList.toggle('lightgold'))
	showLeagueBtn.forEach(element => element.classList.toggle('verylightblack'))
	leagueHeadings.forEach(element => element.classList.toggle('verylightblack'))
	standings.forEach(element => element.classList.toggle('textwhite'))

	leagueLiveBottom.forEach(element => element.classList.toggle('black'))
	leagueLiveBottom.forEach(element => element.classList.toggle('eeehover'))
	liveBtns.forEach(element => element.classList.toggle('verylightblack'))
	previewBtns.forEach(element => element.classList.toggle('white'))
	// previewBtns.forEach(element => element.classList.toggle('previewbtnhover'))
	previewBtnsLinks.forEach(element => element.classList.toggle('verylightblack'))
	// previewBtnsLinks.forEach(element => element.classList.toggle('previewlinkhover'))
	previousBtn.classList.toggle('grey' && 'white')
	channelPopups.forEach(popup => popup.classList.toggle('bgblack'))
	livePopups.forEach(popup => popup.classList.toggle('bgblack'))
	previewPopups.forEach(popup => popup.classList.toggle('bgblack'))
	audioPopups.forEach(popup => popup.classList.toggle('bgblack'))
	gamesPopups.forEach(popup => popup.classList.toggle('bgblack'))
	audioBtnParents.forEach(btn => btn.classList.toggle('border-left'))

	extraContentText.forEach(element => element.classList.toggle('verylightblack'))
	extraContentLinks.forEach(element => element.classList.toggle('verylightblack'))

	sitemapMobileText.classList.toggle('verylightblack')
	sitemapHeadings.forEach(element => element.classList.toggle('verylightblack'))
	sitemapLinks.forEach(element => element.classList.toggle('verylightblack'))
	sitemapInvisible.classList.remove('verylightblack')
	sitemapInvisible.classList.toggle('transparent')
	sitemapBtns.forEach(element => element.classList.toggle('bgblack'))
	sitemapBtns.forEach(element => element.classList.toggle('darkhover'))
	sitemapBackground.classList.toggle('white')

	footerLite.classList.toggle('verylightblack')
	footerLink.classList.toggle('verylightblack')
	footerText.forEach(element => element.classList.toggle('verylightblack'))

	prefBtn.classList.toggle('white')

	const mediaQueriesSmall = () => {
		const x=window.matchMedia('(max-width:799px)')
		if(x.matches){
			scoresBtnBox.classList.toggle('lightgrey')
			standings.forEach(standing=>standing.innerHTML=`<i class="fa-solid fa-share-nodes"></i>`)
		}
		else{
			scoresBtnBox.classList.remove('lightgrey')
			scoresBtnBox.classList.toggle('white')
		}
	}
	mediaQueriesSmall()
}



const mediaQueriesSmall = () => {
	const x=window.matchMedia('(max-width:799px)')
	if(x.matches){
		standings.forEach(standing=>standing.innerHTML=`<i class="fa-solid fa-share-nodes"></i>`)
	}
}


mediaQueriesSmall()
// showPreferences()
lightMode()
setCurrentDate()
// showSearch()
// showLogin()

const lightModeActives = () => {
	if (document.body.classList.contains('lightgrey')) {
		console.log('ok')
		daysList.forEach(day => day.classList.remove('darkgreyhover'))
		daysList.forEach(day => day.classList.add('lightgreyhover'))
		navMenuElements.forEach(day => day.classList.add('lightgreyhover'))
		navMenuElements.forEach(day => day.classList.remove('lightblackhover'))
		previewBtns.forEach(btn => btn.classList.add('previewbtnhover2'))
		previewBtns.forEach(btn => btn.classList.remove('previewbtnhover'))
		searchInputBtn.classList.remove('darkhover')
		searchInputBtn.classList.add('lightgreyhover')
		searchListElements.forEach(element => element.classList.remove('blackhover'))
		searchListElements.forEach(element => element.classList.add('lightgreyhover'))
		loginActiveBtn.classList.add('login-active-hover-lm')
		loginActiveBtn.classList.remove('login-active-hover')
		// prefLi.forEach(li=>li.classList.add('bg-grey-e9'))
		loginBtns.forEach(btn => btn.classList.add('login-active-hover'))
		loginBtns.forEach(btn => btn.classList.remove('login-hover'))
	} else {
		daysList.forEach(day => day.classList.add('darkgreyhover'))
		daysList.forEach(day => day.classList.remove('lightgreyhover'))
		navMenuElements.forEach(day => day.classList.remove('lightgreyhover'))
		navMenuElements.forEach(day => day.classList.add('lightblackhover'))
		previewBtns.forEach(btn => btn.classList.remove('previewbtnhover2'))
		previewBtns.forEach(btn => btn.classList.add('previewbtnhover'))
		searchInputBtn.classList.remove('lightgreyhover')
		searchInputBtn.classList.add('darkhover')
		searchListElements.forEach(element => element.classList.add('blackhover'))
		searchListElements.forEach(element => element.classList.remove('lightgreyhover'))
		loginActiveBtn.classList.remove('login-active-hover-lm')
		loginActiveBtn.classList.add('login-active-hover')
		loginBtns.forEach(btn => btn.classList.remove('login-active-hover'))
		loginBtns.forEach(btn => btn.classList.add('login-hover'))
		// prefLi.forEach(li=>li.classList.remove('bg-grey-e9'))
	}
}

window.addEventListener('click', lightModeActives)

main.addEventListener('click', closeSettings)

navTopEl.forEach(el => el.addEventListener('click', navActive))
loginBtn.addEventListener('click', showLogin)
searchBtn.addEventListener('click', showSearch)
settingsBtn.addEventListener('click', toggleSettings)
settingsPanelBtn.addEventListener('click', showSettingsPanel)

toggleBtn.addEventListener('click', lightMode)

navBtns.forEach(btn => btn.addEventListener('click', scoresNavActive))
navcategories.forEach(btn => btn.addEventListener('click', navCategoriesActive))

closeLoginBtn.addEventListener('click', hideLogin)
closeSearchBtn.addEventListener('click', hideSearch)
closeSettingsPanelBtn.addEventListener('click', hideSettingsPanel)
closePrefBtns.forEach(btn => btn.addEventListener('click', hidePreferences))

panelOneOptions.forEach(option => option.addEventListener('click', selectOptionOne))
panelTwoOptions.forEach(option => option.addEventListener('click', selectOptionTwo))
panelThreeOptions.forEach(option => option.addEventListener('click', selectOptionThree))

searchListElements.forEach(el => el.addEventListener('click', searchToggleActive))
searchListElements.forEach(el => el.addEventListener('click', toggleSportslist))
searchInputBtn.addEventListener('click', toggleSportslist)

prefLi.forEach(li => li.addEventListener('click', toggleActive))
prefLi.forEach(li => li.addEventListener('click', showTextbox))
prefVendorsFilterbtn.addEventListener('click', toggleFiltersList)
clearFiltersBtn.addEventListener('click', clearFilters)
vendorsShowBtn.forEach(btn => btn.addEventListener('click', vendorsArrowBottom))
prefVendorsCheckbtn.forEach(btn => btn.addEventListener('click', toggleCheckBtn))
prefVendorsLists.forEach(btn => btn.addEventListener('click', showVendorsBox))
prefBackBtn.addEventListener('click', hideVendorsBox)
prefMinusButton.addEventListener('click', toggleAllCheckBtns)
prefOptionsBtn.forEach(btn => btn.addEventListener('click', togglePrefBtn))

showNavBtn.addEventListener('click', toggleNavMenu)

addTeamBtn.addEventListener('click', showSearch)
showMoreBtn.addEventListener('click', showHiddenLi)

daysBtn.addEventListener('click', toggleDays)
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
// channelsBtns.forEach(btn => btn.addEventListener('mouseover', showChannelPopups))
channelPopups.forEach(channel => channel.addEventListener('mouseout', hideChannelPopups))
// channelsBtns.forEach(btn => btn.addEventListener('mouseout', hideChannelPopups))
// channelPopups.forEach(btn => btn.addEventListener('mouseout', hideChannelPopups))

prefBtn.addEventListener('click', showPreferences)
footerLink.addEventListener('click', showPreferences)

topBtn.addEventListener('click', scrollToTop)
window.addEventListener('scroll', showTopBtn)
window.addEventListener('click', hideSportsList2)
modalWindow.addEventListener('click', hideAllWindows)

// showPreferences()
// showVendorsBox()

// const showClickDetails = () => {
// 	// const fadeDelay=1000
// 	// const fadeDuration=1000
// 	leagueLiveBottom.forEach(league=>league.addEventListener('mouseover',(e)=>{
// 		const left=e.clientX +'px'
// 		const top=e.clientY +'px'
// 		let button=document.createElement('button')
// 		button.setAttribute('class','scores__leaguelivebottom-clickpopup')
// 		league.appendChild(button)
// 		button.textContent='Click for match details'
// 		button.style.left=left
// 		button.style.top=top

// 		const hideClickDetails = () => {
// 			setTimeout(1000)
// 			button.remove()
// 		}
// 		leagueLiveBottom.forEach(lg=>lg.addEventListener('mouseout', hideClickDetails))
// 	}))
// }

// leagueLiveBottom.forEach(lg=>lg.addEventListener('mouseover',showClickDetails))
