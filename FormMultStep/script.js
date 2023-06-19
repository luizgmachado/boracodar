
let currentStep = 0
const formSteps = document.querySelectorAll('.form-step')
const form = document.querySelector('form')

// Clique de passos

form.addEventListener('click', (e) => {
  if (!e.target.matches('[data-action]')) {
    return
  }

  const actions = {
    next() {
      if (!isValidInputs()) {
        return
      }
      currentStep++
    },
    prev() {
      currentStep--
    }
  }

  const action = e.target.dataset.action
  actions[action]()


  updateActiveStep()
  updateProgressStep()
})

// envio do formulário
form.addEventListener('submit', (e) => {
  e.preventDefault()

  const data = new FormData(form)

  for(let [key, value] of data ) {
  console.log(key, value)}

  // alert(`Obrigado ${data.get('name')}!`)
})

// atualização dos passos
function updateActiveStep() {
  formSteps.forEach((step) => step.classList.remove('active'))
  formSteps[currentStep].classList.add('active')
}
const progressStep = document.querySelectorAll('.step-progress [data-step]')
function updateProgressStep() {
  progressStep.forEach((step, index) => {
    step.classList.remove('active')
    step.classList.remove('done')

    if (index < currentStep + 1) {
      step.classList.add('active')
    }

    if (index < currentStep) {
      step.classList.add('done')
    }
  })
}

// validação do formulário

function isValidInputs() {
  const correntFormStep = formSteps[currentStep]
  const formFields = [...correntFormStep.querySelectorAll('input'), ...correntFormStep.querySelectorAll('textarea')]

  return formFields.every((input) => input.reportValidity())

}

// animation
formSteps.forEach(formStep => {
  function addHide() {
    formStep.classList.add('hide')
  }
  formStep.addEventListener('animationend', () => {
    addHide()
    formSteps[currentStep].classList.remove('hide')
  })
})