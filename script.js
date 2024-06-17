axios.get('http://localhost:3000/votes').then(response => {
	const data = response.data
	console.log(data)

	const progressBar = document.querySelectorAll('.progress-bar')
	const radios = document.querySelectorAll('input[type="radio"]')
	const votesCounter = document.querySelector('.card__votes-counter')

	let sum = 0
	let arrVotes = []
	for (i = 0; i < data.length; i++) {
		arrVotes[i] = Number(data[i])
		console.log(data[i])
	}

	let allVotes = 0
	for (let i = 0; i < arrVotes.length; i++) {
		allVotes += arrVotes[i]
	}
	votesCounter.innerHTML = `${allVotes} votes`

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

				function showProgress() {
					progressBar.forEach((item, index) => {
						item.style.width = `${(arrVotes[index] / allVotes) * 100}% `
					})
				}

				showProgress()
				votesCounter.innerHTML = `${allVotes + 1} votes`

				isTrue = false
			}
		})
	})
})
