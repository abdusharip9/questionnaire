const progressBar = document.querySelectorAll('.progress-bar')
const radios = document.querySelectorAll('input[type="radio"]')
const votesCounter = document.querySelector('.card__votes-counter')

let a1Votes = 2
let b2Votes = 3
let c3Votes = 1
let d4Votes = 4
let sum = 0
let arrVotes = [a1Votes, b2Votes, c3Votes, d4Votes]

let allVotes = 0

function toDisabled() {
	radios.forEach(item => {
		item.setAttribute('disabled', '')
	})
}

function toActive(idRadio) {
	let isDoIt = true
	radios.forEach(item => {
		if (idRadio == item.id && isDoIt) {
			item.removeAttribute('disabled')
			isDoIt = false
		}
	})
}

radios.forEach((radio, index) => {
	let isTrue = true

	radio.addEventListener('click', () => {
		if (isTrue) {
			toDisabled()
			toActive(radio.id)

			arrVotes[index]++
			console.log(arrVotes)

			for (let i = 0; i < arrVotes.length; i++) {
				allVotes += arrVotes[i]
			}

			function showProgress() {
				progressBar.forEach((item, index) => {
					item.style.width = `${arrVotes[index] * allVotes}%`
				})
			}

			showProgress()
			votesCounter.innerHTML = `${allVotes} votes`

			isTrue = false
		}
	})
})
