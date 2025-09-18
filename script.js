// Smooth scrolling para links de navegação
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Inicializar EmailJS
//const emailjs = window.emailjs // Declare the emailjs variable

// Aguardar o EmailJS carregar completamente
function initEmailJS() {
  console.log("[v0] Tentando inicializar EmailJS...")

  if (typeof emailjs === "undefined") {
    console.log("[v0] EmailJS ainda não carregou, tentando novamente em 1s...")
    setTimeout(initEmailJS, 1000)
    return
  }

  console.log("[v0] EmailJS carregado com sucesso!")
  emailjs.init("Rsz1IN0F1BpPm1aXU")
  console.log("[v0] EmailJS inicializado!")
}

// Inicializar quando a página carregar
document.addEventListener("DOMContentLoaded", () => {
  console.log("[v0] Página carregada, inicializando EmailJS...")
  initEmailJS()
})

// Formulário de contato
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#contact-form")

  if (!form) {
    console.log("[v0] ERRO: Formulário não encontrado!")
    return
  }

  console.log("[v0] Formulário encontrado, adicionando listener...")

  form.addEventListener("submit", function (e) {
    e.preventDefault()
    console.log("[v0] === INÍCIO DO ENVIO ===")

    // Verificar se EmailJS está disponível
    if (typeof emailjs === "undefined") {
      console.log("[v0] ERRO: EmailJS não está disponível!")
      alert("EmailJS não carregou. Recarregue a página e tente novamente.")
      return
    }

    console.log("[v0] EmailJS disponível, continuando...")

    const formStatus = document.getElementById("form-status")
    const submitButton = this.querySelector('button[type="submit"]')

    // Mostrar loading
    submitButton.textContent = "Enviando..."
    submitButton.disabled = true

    const templateParams = {
      from_name: this.from_name?.value || "Não informado",
      from_email: this.from_email?.value || "Não informado",
      phone: this.phone?.value || "Não informado",
      message: this.message?.value || "Não informado",
      to_email: "argosmc@hotmail.com",
      title: "Contato do Site PrintPonto",
    }

    console.log("[v0] Parâmetros:", templateParams)
    console.log("[v0] Enviando para service_j221p0j com template_9mo3rze...")

    // Enviar email
    emailjs
      .send("service_j221p0j", "template_9mo3rze", templateParams)
      .then((response) => {
        console.log("[v0] ✅ SUCESSO!", response)
        formStatus.innerHTML = '<p style="color: green;">✅ Mensagem enviada com sucesso!</p>'
        form.reset()
      })
      .catch((error) => {
        console.log("[v0] ❌ ERRO:", error)
        formStatus.innerHTML = '<p style="color: red;">❌ Erro: ' + error.text + "</p>"
      })
      .finally(() => {
        submitButton.textContent = "Enviar Mensagem"
        submitButton.disabled = false
        console.log("[v0] === FIM DO ENVIO ===")
      })
  })
})

// Efeito de scroll no header
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header")
  if (window.scrollY > 100) {
    header.style.background = "rgba(30, 64, 175, 0.95)"
  } else {
    header.style.background = "#1e40af"
  }
})
