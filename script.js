document.getElementById("year").textContent = new Date().getFullYear();

const form = document.getElementById("leadForm");
form?.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const nombre = (data.get("nombre") || "").toString().trim();
  const telefono = (data.get("telefono") || "").toString().trim();
  const correo = (data.get("correo") || "").toString().trim();
  const grado = (data.get("grado") || "").toString().trim();

  const msg =
`Hola, Colegio Mi Pequeñita Luz 👋
Quisiera información de Admisión 2026.

Nombre: ${nombre}
Teléfono: ${telefono}
Correo: ${correo}
Grado a postular: ${grado}

Gracias.`;

  const url = `https://wa.me/51993558729?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank", "noopener,noreferrer");
  form.reset();
});
