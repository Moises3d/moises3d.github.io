// Exemplo de envio simples do formulário
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Obrigado pela mensagem! Em breve entrarei em contato.");
  this.reset();
});
document.querySelectorAll(".video-container").forEach(container => {
  container.addEventListener("click", function () {
    const videoId = this.getAttribute("data-id");
    this.innerHTML = `
      <iframe width="100%" height="100%" 
        src="https://www.youtube.com/embed/${videoId}?autoplay=1&vq=hd1080" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
    `;
  });
});
