// Exemplo de envio simples do formulário
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Obrigado pela mensagem! Em breve entrarei em contato.");
  this.reset();
});
