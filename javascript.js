let randomNumber = Math.floor(Math.random() *100) + 1
const gusseInput = document.querySelector('#gusseInput')
const submitBtn = document.querySelector('#submitBtn')
const result = document.querySelector('#result')




submitBtn.addEventListener('click', () => {
  const userGuess = Number(gusseInput.value)

  if (!userGuess || userGuess < 1 || userGuess > 100) {
    result.innerText = 'Введите число от 1 до 100'
  } else if(userGuess === randomNumber) {
    result.innerText = 'Поздраляю! Вы угодали ✅'
    setTimeout(() => {
      randomNumber = Math.floor(Math.random() *100) + 1
      result.innerText = 'Загаданное число обновлено! Угадай снова🎰'
    }, 3000);
  } else if(userGuess < randomNumber) {
    result.innerText = ' Больше'
  } else {
    result.innerText = ' меньше'
  }
})
