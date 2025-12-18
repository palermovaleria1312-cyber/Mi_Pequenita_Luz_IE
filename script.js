
(function(){
  const PHONE = '51993558729';
  const EMAIL = 'pequenitaluz.sanmiguel@gmail.com';

  const form = document.getElementById('contactForm');
  const copyBtn = document.getElementById('copyEmail');
  const gallery = document.getElementById('gallery');

  const enc = (v) => encodeURIComponent(v || '');

  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    const nombre = fd.get('nombre');
    const telefono = fd.get('telefono');
    const correo = fd.get('correo');
    const grado = fd.get('grado');

    const msg =
`Hola, soy ${nombre}.
Teléfono: ${telefono}
Correo: ${correo}
Grado al que postula: ${grado}
Quisiera información sobre Admisión 2026.`;

    window.open(`https://wa.me/${PHONE}?text=${enc(msg)}`, '_blank');
  });

  copyBtn?.addEventListener('click', async () => {
    try{
      await navigator.clipboard.writeText(EMAIL);
      copyBtn.textContent = '¡Correo copiado!';
      setTimeout(()=> copyBtn.textContent='Copiar correo', 1400);
    }catch(err){
      alert('No se pudo copiar. Correo: ' + EMAIL);
    }
  });

  // Lightbox simple
  let modal;
  function openLightbox(src, alt){
    if(!modal){
      modal = document.createElement('div');
      modal.className = 'lightbox';
      modal.innerHTML = `
        <div class="lightbox__backdrop"></div>
        <div class="lightbox__panel" role="dialog" aria-modal="true">
          <button class="lightbox__close" aria-label="Cerrar">✕</button>
          <img class="lightbox__img" alt="">
        </div>
      `;
      document.body.appendChild(modal);
      modal.querySelector('.lightbox__backdrop').addEventListener('click', closeLightbox);
      modal.querySelector('.lightbox__close').addEventListener('click', closeLightbox);
      document.addEventListener('keydown', (ev)=>{ if(ev.key==='Escape') closeLightbox(); });
    }
    const img = modal.querySelector('.lightbox__img');
    img.src = src;
    img.alt = alt || 'Foto';
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }
  function closeLightbox(){
    if(!modal) return;
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }

  gallery?.addEventListener('click', (e)=>{
    const btn = e.target.closest('.gallery__item');
    if(!btn) return;
    openLightbox(btn.dataset.src, btn.querySelector('img')?.alt);
  });

  const css = `
  .lightbox{position:fixed;inset:0;display:none;z-index:50}
  .lightbox__backdrop{position:absolute;inset:0;background:rgba(0,0,0,.55)}
  .lightbox__panel{position:relative;max-width:min(980px,92vw);max-height:86vh;margin:6vh auto;background:#fff;border-radius:18px;box-shadow:0 24px 60px rgba(0,0,0,.35);overflow:hidden}
  .lightbox__img{width:100%;height:86vh;max-height:86vh;object-fit:contain;display:block;background:#0b1220}
  .lightbox__close{position:absolute;top:10px;right:10px;border:none;background:rgba(255,255,255,.9);border-radius:12px;padding:8px 10px;font-weight:900;cursor:pointer}
  `;
  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);
})();
