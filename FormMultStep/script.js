
let currentStep = 0
const formStep = document.querySelectorAll('.form-step')
const form = document.querySelector('form')

// Clique de passos

form.addEventListener('click', (e) => {
  if (!e.target.matches('[data-action]')) {
    return
  }

  const actions = {
    next() {
      if(!isValidInput()){
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

  console.log(currentStep)
  updateActiveStep()
  updateProgressStep()
  })

// envio do formulário
form.addEventListener('submit', (e) => {
  e.preventDefault()
})

// atualização dos passos
function updateActiveStep() {
  formStep.forEach((step) => step.classList.remove('active'))
  formStep[currentStep].classList.add('active')
}
const progressStep = document.querySelectorAll('.step-progress [data-step]')
function updateProgressStep() {
  progressStep.forEach((step, index) => {
    step.classList.remove('active')
    step.classList.remove('done')

    if (index < currentStep +1) {
      step.classList.add('active')
    }

    if (index < currentStep) {
      step.classList.add('done')
    }
  })
}

// validação do formulário

function isValidInput() {
  const correntForm = formStep[currentStep]
  const formFields = [...correntFormStep.querySelectorAll('input'), ...correntFormStep.querySelectorAll('textarea')]

  return formFields.every((input) => input.reportValidity())

}