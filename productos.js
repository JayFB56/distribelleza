/* ============================================================
   DISTRIBELLEZA C&J — productos.js
   ============================================================
   👉 SOLO edita el array "catalogoProductos" para:
      - Cambiar nombre / precio
      - Actualizar rutas de imágenes (campo "archivo")
      - Agregar o quitar productos
   ============================================================ */

const catalogoProductos = [
  // CREMAS SKALA
  { id: 1, nombre: "Skala Babosa Brasil", precio: 8.50, categoria: "Cremas Skala", descripcion: "Tratamiento Skala Babosa", tipo: "imagen", archivo: "assets/skala-babosa-brasil.png" },
  { id: 2, nombre: "Skala Tratamiento Mais Cachos", precio: 8.50, categoria: "Cremas Skala", descripcion: "Tratamiento Mais Cachos", tipo: "imagen", archivo: "assets/skala-de-Tratamiento-Mais-Cachos.png" },
  { id: 3, nombre: "Skala Divino Potão", precio: 8.50, categoria: "Cremas Skala", descripcion: "Skala Divino Potão", tipo: "imagen", archivo: "assets/skala-divino-potao.webp" },
  { id: 4, nombre: "Skala Mais Crespos", precio: 8.50, categoria: "Cremas Skala", descripcion: "Skala Mais Crespos", tipo: "imagen", archivo: "assets/skala-mias-crespos.webp" },
  { id: 5, nombre: "Skala Mais Risos", precio: 8.50, categoria: "Cremas Skala", descripcion: "Skala Mais Risos", tipo: "imagen", archivo: "assets/skala-mias-risos.jfif" },

  // CUIDADO CAPILAR
  { id: 6, nombre: "Shampoo Capibell Biotina 750ml", precio: 12.00, categoria: "Cuidado Capilar", descripcion: "Shampoo con Biotina", tipo: "imagen", archivo: "assets/Shampoo-Capibell-Biotina-750ml.webp" },
  { id: 7, nombre: "Aceite de Argán", precio: 10.00, categoria: "Cuidado Capilar", descripcion: "Aceite de Argán", tipo: "imagen", archivo: "assets/aceite-argan.jpg" },
  { id: 8, nombre: "Black Hair Shampoo", precio: 15.00, categoria: "Cuidado Capilar", descripcion: "Black Hair Shampoo", tipo: "imagen", archivo: "assets/black-hair-shampoo.jpg" },
  { id: 9, nombre: "Crema para Peinar Coco Capibbell", precio: 8.00, categoria: "Cuidado Capilar", descripcion: "Crema para Peinar con Coco", tipo: "imagen", archivo: "assets/crema-peinar-coco-capibbell.jpg" },
  { id: 10, nombre: "Crema Tratamiento Capilar Miel", precio: 8.00, categoria: "Cuidado Capilar", descripcion: "Tratamiento Nutritivo con Miel", tipo: "imagen", archivo: "assets/crema-peinar-tratamientoCapilarNutritivoMiel.jpg" },
  { id: 11, nombre: "Leche pal Pelo Rizos (Sachet)", precio: 2.00, categoria: "Cuidado Capilar", descripcion: "Sachet para Rizos", tipo: "imagen", archivo: "assets/leche-pal-pelo-rizos-sachet.webp" },
  { id: 12, nombre: "Leche pal Pelo Tradicional (Sachet)", precio: 2.00, categoria: "Cuidado Capilar", descripcion: "Sachet Tradicional", tipo: "imagen", archivo: "assets/leche-pal-pelo-tradicional-sachet.webp" },
  { id: 13, nombre: "Serum Anti Hair Loss", precio: 18.00, categoria: "Cuidado Capilar", descripcion: "Serum anticaída", tipo: "imagen", archivo: "assets/serum-anit-hair-loss.jpg" },
  { id: 14, nombre: "Shampoo Batann Oil Antidandruff", precio: 14.00, categoria: "Cuidado Capilar", descripcion: "Shampoo anticaspa", tipo: "imagen", archivo: "assets/shampoo-batannOil-antidandruff.jpg" },
  { id: 15, nombre: "Shampoo de Cebolla Willice", precio: 12.00, categoria: "Cuidado Capilar", descripcion: "Shampoo de Cebolla", tipo: "imagen", archivo: "assets/shampoo-cebolla-willice.jpg" },
  { id: 16, nombre: "Shampoo Shumukh de Ajo", precio: 12.00, categoria: "Cuidado Capilar", descripcion: "Shampoo de Ajo", tipo: "imagen", archivo: "assets/shampoo-shumukh-de-ajo.jpg" },
  { id: 17, nombre: "Shampoo Leche pal Pelo Nutrición", precio: 15.00, categoria: "Cuidado Capilar", descripcion: "Shampoo Nutrición", tipo: "imagen", archivo: "assets/shampoo.-leche-pal-pelo-nutricion.png" },
  { id: 18, nombre: "Shampoo Leche pal Pelo Rizos", precio: 15.00, categoria: "Cuidado Capilar", descripcion: "Shampoo para Rizos", tipo: "imagen", archivo: "assets/shampoo.-leche-pal-pelo-rizos.png" },

  // MASCARILLAS FACIALES / OTROS
  { id: 19, nombre: "Crema de Leche Love Jojo 500ml", precio: 10.00, categoria: "Mascarillas Faciales", descripcion: "Crema hidratante 500ml", tipo: "video", archivo: "assets/Crema-De-Leche-500ml-Love-Jojo.mp4" },

  // PERFUMERÍA
  { id: 20, nombre: "Perfume Lovely Dreams", precio: 25.00, categoria: "Perfumería", descripcion: "Lovely Dreams", tipo: "imagen", archivo: "assets/Perfume-Lovely-Dreams.jfif" },
  { id: 21, nombre: "Perfume Lattafa Khamrah 100ml", precio: 45.00, categoria: "Perfumería", descripcion: "Lattafa Khamrah", tipo: "imagen", archivo: "assets/perfume-LATTAFA-KHAMRAH-100ML.jpg" },
  { id: 22, nombre: "Perfume Lattafa Yara Eau", precio: 40.00, categoria: "Perfumería", descripcion: "Lattafa Yara", tipo: "imagen", archivo: "assets/perfume-Lattafa-Perfumes-Yara-Eau.webp" },
  { id: 23, nombre: "Perfume Mayar de Lattafa 100ml", precio: 45.00, categoria: "Perfumería", descripcion: "Mayar de Lattafa", tipo: "video", archivo: "assets/perfume-MAYAR-DE-LATTAFA-100MLperfume-MAYAR-DE-LATTAFA-100ML.mp4" },
  { id: 24, nombre: "Perfume Fair Annoy", precio: 35.00, categoria: "Perfumería", descripcion: "Fair Annoy", tipo: "imagen", archivo: "assets/perfume-fairAnnoy.jpg" },
  { id: 25, nombre: "Perfume Futuristic Girl Pink", precio: 30.00, categoria: "Perfumería", descripcion: "Futuristic Girl Pink", tipo: "imagen", archivo: "assets/perfume-fururistic-girl-pink.jpg" },
  { id: 26, nombre: "Perfume Lattafa Asad Decants", precio: 15.00, categoria: "Perfumería", descripcion: "Lattafa Asad Decants", tipo: "imagen", archivo: "assets/perfume-lattafa-asad-decants.jpg" },
  { id: 27, nombre: "Perfume Lattafa Eclaire EDP 100ml", precio: 50.00, categoria: "Perfumería", descripcion: "Lattafa Eclaire", tipo: "imagen", archivo: "assets/perfume-lattafa-eclaire-eau-de-parfum-100ml.jpg" },
  { id: 28, nombre: "Perfume Odyssey Mandarin Sky Elixir", precio: 55.00, categoria: "Perfumería", descripcion: "Mandarin Sky Elixir", tipo: "video", archivo: "assets/perfume-odyssey-mandarin-sky-elixir.mp4" },
  { id: 29, nombre: "Perfume Splash Hombres", precio: 12.00, categoria: "Perfumería", descripcion: "Splash Hombres", tipo: "imagen", archivo: "assets/perfume-splash-hombres.jpg" },
  { id: 30, nombre: "Perfume Splash", precio: 12.00, categoria: "Perfumería", descripcion: "Splash corporal", tipo: "imagen", archivo: "assets/perfume-splash.jpg" },
  { id: 31, nombre: "Perfume Spray Ariana Grande Cloud", precio: 30.00, categoria: "Perfumería", descripcion: "Ariana Grande Cloud", tipo: "imagen", archivo: "assets/perfume-spray-ArianaGrandeCloud.jpg" },
  { id: 32, nombre: "Perfume Spray Jean Paul Gaultier", precio: 60.00, categoria: "Perfumería", descripcion: "Jean Paul Gaultier", tipo: "imagen", archivo: "assets/perfume-spray-JeanPaulGaultier.jpg" },
  { id: 33, nombre: "Perfume Spray Mandarin Sky", precio: 45.00, categoria: "Perfumería", descripcion: "Mandarin Sky", tipo: "imagen", archivo: "assets/perfume-spray-MandarinSky.jpg" },
  { id: 34, nombre: "Perfume Spray Asad Bourbon", precio: 40.00, categoria: "Perfumería", descripcion: "Asad Bourbon", tipo: "imagen", archivo: "assets/perfume-spray-asadBourbon.jpg" },
  { id: 35, nombre: "Perfume Spray Eclaire", precio: 35.00, categoria: "Perfumería", descripcion: "Spray Eclaire", tipo: "imagen", archivo: "assets/perfume-spray-eclaire.jpg" },
  { id: 36, nombre: "Perfume Spray Ice Cream", precio: 25.00, categoria: "Perfumería", descripcion: "Spray Ice Cream", tipo: "imagen", archivo: "assets/perfume-spray-icecream.jpg" },
  { id: 37, nombre: "Perfume Spray Khamrah", precio: 40.00, categoria: "Perfumería", descripcion: "Spray Khamrah", tipo: "imagen", archivo: "assets/perfume-spray-khamrah.jpg" },
  { id: 38, nombre: "Perfume Spray Khamrah Lattafa", precio: 40.00, categoria: "Perfumería", descripcion: "Khamrah Lattafa", tipo: "imagen", archivo: "assets/perfume-spray-khamrahLattafa.jpg" },
  { id: 39, nombre: "Perfume Spray Mayar", precio: 40.00, categoria: "Perfumería", descripcion: "Spray Mayar", tipo: "imagen", archivo: "assets/perfume-spray-mayar.jpg" },
  { id: 40, nombre: "Perfume Spray Orange Fragrance", precio: 25.00, categoria: "Perfumería", descripcion: "Orange Fragrance", tipo: "imagen", archivo: "assets/perfume-spray-orangeFragrance.jpg" },
  { id: 41, nombre: "Perfume Spray Spectra", precio: 30.00, categoria: "Perfumería", descripcion: "Spray Spectra", tipo: "imagen", archivo: "assets/perfume-spray-spectra.jpg" },
  { id: 42, nombre: "Perfume Spray Yara Lattafa Rojo", precio: 45.00, categoria: "Perfumería", descripcion: "Yara Lattafa Rojo", tipo: "imagen", archivo: "assets/perfume-spray-yara-lattafa-rojo.jpg" },
  { id: 43, nombre: "Perfume Spray Yara Lattafa", precio: 45.00, categoria: "Perfumería", descripcion: "Yara Lattafa", tipo: "imagen", archivo: "assets/perfume-spray-yaraLattafa.jpg" },
  { id: 44, nombre: "Perfume Yara Moi", precio: 45.00, categoria: "Perfumería", descripcion: "Yara Moi", tipo: "video", archivo: "assets/perfume-yara-moi.mp4" },
  { id: 45, nombre: "Perfume Yara Tous", precio: 45.00, categoria: "Perfumería", descripcion: "Yara Tous", tipo: "video", archivo: "assets/perfume-yara-tous.mp4" },
  { id: 46, nombre: "Perfumes Futuristic Girl", precio: 30.00, categoria: "Perfumería", descripcion: "Futuristic Girl", tipo: "imagen", archivo: "assets/perfumes-FuturisticGirl.jpg" },
  { id: 47, nombre: "Perfumes de Mujer", precio: 35.00, categoria: "Perfumería", descripcion: "Perfumes de mujer", tipo: "imagen", archivo: "assets/perfumes-de-mujer.jpg" },
  { id: 48, nombre: "Perfumes Hombres", precio: 35.00, categoria: "Perfumería", descripcion: "Perfumes de hombre", tipo: "imagen", archivo: "assets/perfumes-hombres.jpg" }
];

/* ============================================================
   ESTADO GLOBAL  (guardado en localStorage)
   ============================================================ */
let carrito   = JSON.parse(localStorage.getItem("db_carrito")   || "[]");
let favoritos = new Set(JSON.parse(localStorage.getItem("db_favoritos") || "[]"));
let preciosGuardados = JSON.parse(localStorage.getItem("db_precios") || "{}");

// Aplicar precios guardados al catálogo
catalogoProductos.forEach(p => {
  if (preciosGuardados[p.id] !== undefined) {
    p.precio = preciosGuardados[p.id];
  }
});

let categoriaActiva  = "Todos";
let terminoBusqueda  = "";

// Variables Admin
let modoEdicion = false;
let preciosEditados = {};
let intentosPin = 0;
let bloqueoPinHasta = 0;

function guardar() {
  localStorage.setItem("db_carrito",   JSON.stringify(carrito));
  localStorage.setItem("db_favoritos", JSON.stringify([...favoritos]));
}

/* ============================================================
   PANELES (abrir / cerrar)
   ============================================================ */
function abrirPanel(id) {
  document.getElementById(id).classList.add("abierto");
  document.getElementById("backdrop").classList.add("visible");
  document.body.style.overflow = "hidden";

  if (id === "panel-carrito")   renderizarCarrito();
  if (id === "panel-favoritos") renderizarFavoritos();
}

function cerrarPanel(id) {
  document.getElementById(id).classList.remove("abierto");
  // Si no queda ningún panel abierto, ocultar backdrop
  const hayAbierto = document.querySelector(".panel-lateral.abierto");
  if (!hayAbierto) {
    document.getElementById("backdrop").classList.remove("visible");
    document.body.style.overflow = "";
  }
}

function cerrarTodosLosPaneles() {
  document.querySelectorAll(".panel-lateral.abierto")
    .forEach(p => p.classList.remove("abierto"));
  document.getElementById("backdrop").classList.remove("visible");
  document.body.style.overflow = "";
}

function irInicio() {
  cerrarTodosLosPaneles();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* ============================================================
   TOAST
   ============================================================ */
let toastTimer = null;
function mostrarToast(texto, icono = "check_circle") {
  const el    = document.getElementById("toast");
  const txt   = document.getElementById("toast-texto");
  const ico   = document.getElementById("toast-icon");
  txt.textContent = texto;
  ico.textContent = icono;
  el.classList.remove("hidden");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.add("hidden"), 2200);
}

/* ============================================================
   RENDERIZADO DE PRODUCTOS (catálogo principal)
   ============================================================ */
function renderizarProductos() {
  const contenedor = document.getElementById("contenedor-productos");
  if (!contenedor) return;
  contenedor.innerHTML = "";

  let lista = categoriaActiva === "Todos"
    ? catalogoProductos
    : catalogoProductos.filter(p => p.categoria === categoriaActiva);

  if (terminoBusqueda) {
    const q = terminoBusqueda.toLowerCase();
    lista = lista.filter(p =>
      p.nombre.toLowerCase().includes(q) ||
      p.descripcion.toLowerCase().includes(q) ||
      p.categoria.toLowerCase().includes(q)
    );
  }

  if (lista.length === 0) {
    contenedor.innerHTML = `
      <div class="col-span-2 md:col-span-3 lg:col-span-4 flex flex-col items-center justify-center py-20 gap-3 text-on-surface-variant">
        <span class="material-symbols-outlined opacity-25" style="font-size:52px">search_off</span>
        <p class="font-body-md text-body-md opacity-40">Sin resultados</p>
      </div>`;
    return;
  }

  lista.forEach((p, i) => {
    const esFav = favoritos.has(p.id);
    const art   = document.createElement("article");
    art.className = "card-anim flex flex-col gap-2 cursor-pointer group active:scale-[.97] transition-transform duration-200";
    art.style.animationDelay = `${i * 35}ms`;

    const media = p.tipo === "video"
      ? `<video src="${p.archivo}" class="absolute inset-0 w-full h-full object-cover" autoplay muted loop playsinline></video>`
      : `<img src="${p.archivo}" alt="${p.nombre}"
           class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
           loading="lazy"
           onerror="this.src='https://placehold.co/400x400/ffd9dd/8b4c56?text=Sin+imagen'">`;

    let accionesBotones = "";
    let areaPrecio = "";

    if (modoEdicion) {
      const precioActual = preciosEditados[p.id] !== undefined ? preciosEditados[p.id] : p.precio;
      areaPrecio = `<div class="mt-1 flex items-center gap-1">
                      <span class="font-headline-md text-headline-md text-gold">$</span>
                      <input type="number" step="0.01" min="0" value="${precioActual.toFixed(2)}" 
                        oninput="preciosEditados[${p.id}] = parseFloat(this.value) || 0"
                        class="w-full bg-surface-container-highest border border-outline-variant/50 rounded px-2 py-1 font-headline-md text-gold outline-none focus:border-primary" />
                    </div>`;
    } else {
      accionesBotones = `
        <!-- Corazón favorito -->
        <button data-fav-id="${p.id}"
          onclick="toggleFavorito(${p.id})"
          aria-label="${esFav ? 'Quitar de favoritos' : 'Agregar a favoritos'}"
          class="btn-fav${esFav ? ' activo' : ''} absolute top-2.5 left-2.5 w-8 h-8 rounded-full bg-surface-container-lowest/80 backdrop-blur-sm flex items-center justify-center shadow transition-transform active:scale-90">
          <span class="icono-fav material-symbols-outlined text-on-surface-variant"
            style="font-size:18px; font-variation-settings:'FILL' ${esFav ? 1 : 0}">favorite</span>
        </button>
        <!-- Agregar al carrito -->
        <button onclick="agregarAlCarrito(${p.id})"
          aria-label="Añadir al carrito"
          class="absolute bottom-2.5 right-2.5 w-9 h-9 rounded-full bg-primary text-on-primary shadow-md flex items-center justify-center hover:scale-110 active:scale-95 transition-transform">
          <span class="material-symbols-outlined" style="font-size:20px">add</span>
        </button>`;
        areaPrecio = `<p class="font-headline-md text-headline-md text-gold mt-1">$${p.precio.toFixed(2)}</p>`;
    }

    art.innerHTML = `
      <div class="relative w-full aspect-square rounded-2xl overflow-hidden bg-surface-container-low border border-outline-variant/25 shadow-sm group-hover:shadow-md transition-shadow">
        ${media}
        ${accionesBotones}
      </div>
      <div class="px-0.5 pb-1">
        <h3 class="font-body-md text-body-md text-on-surface line-clamp-2 leading-snug">${p.nombre}</h3>
        ${p.descripcion ? `<p class="font-label-sm text-label-sm text-on-surface-variant/70 mt-0.5 line-clamp-1">${p.descripcion}</p>` : ""}
        ${areaPrecio}
      </div>`;

    contenedor.appendChild(art);
  });
}

/* ============================================================
   FAVORITOS
   ============================================================ */
function toggleFavorito(id) {
  if (favoritos.has(id)) {
    favoritos.delete(id);
    mostrarToast("Eliminado de favoritos", "heart_broken");
  } else {
    favoritos.add(id);
    mostrarToast("¡Guardado en favoritos!", "favorite");
  }
  guardar();
  actualizarBadgesFavoritos();

  // Actualizar botón en la tarjeta del catálogo sin re-renderizar todo
  const btn  = document.querySelector(`[data-fav-id="${id}"]`);
  if (btn) {
    const esFav = favoritos.has(id);
    const ico   = btn.querySelector(".icono-fav");
    ico.style.fontVariationSettings = `'FILL' ${esFav ? 1 : 0}`;
    ico.style.color = esFav ? "#8b4c56" : "";
    btn.classList.toggle("activo", esFav);
    btn.setAttribute("aria-label", esFav ? "Quitar de favoritos" : "Agregar a favoritos");
  }

  // Re-renderizar panel si está abierto
  if (document.getElementById("panel-favoritos").classList.contains("abierto")) {
    renderizarFavoritos();
  }
}

function renderizarFavoritos() {
  const lista = document.getElementById("lista-favoritos");
  const contador = document.getElementById("contador-favoritos-panel");
  if (!lista) return;

  const items = catalogoProductos.filter(p => favoritos.has(p.id));
  contador.textContent = items.length ? `${items.length} producto${items.length > 1 ? "s" : ""}` : "";

  if (items.length === 0) {
    lista.innerHTML = `
      <div class="flex flex-col items-center justify-center h-full gap-4 text-on-surface-variant py-20">
        <span class="material-symbols-outlined opacity-20" style="font-size:56px">favorite</span>
        <p class="font-body-md text-body-md opacity-40 text-center">Aún no tienes favoritos.<br>Toca el ♡ en un producto.</p>
      </div>`;
    return;
  }

  lista.innerHTML = `<div class="grid grid-cols-2 gap-3">
    ${items.map(p => `
      <div class="flex flex-col gap-2 rounded-2xl overflow-hidden border border-outline-variant/20 bg-surface-container-lowest shadow-sm">
        <div class="relative aspect-square bg-surface-container-low overflow-hidden">
          <img src="${p.archivo}" alt="${p.nombre}"
            class="w-full h-full object-cover"
            onerror="this.src='https://placehold.co/300x300/ffd9dd/8b4c56?text=Sin+imagen'">
          <!-- quitar favorito -->
          <button onclick="toggleFavorito(${p.id})"
            class="absolute top-2 right-2 w-7 h-7 rounded-full bg-error/90 flex items-center justify-center shadow"
            aria-label="Quitar de favoritos">
            <span class="material-symbols-outlined text-white" style="font-size:16px">close</span>
          </button>
        </div>
        <div class="px-2.5 pb-2.5 flex flex-col gap-1">
          <p class="font-label-md text-label-md text-on-surface line-clamp-2 leading-snug">${p.nombre}</p>
          <p class="font-headline-md text-headline-md text-gold" style="font-size:18px">$${p.precio.toFixed(2)}</p>
          <button onclick="agregarAlCarrito(${p.id})"
            class="mt-1 w-full py-1.5 rounded-full bg-primary text-on-primary font-label-md text-label-md hover:brightness-95 active:scale-95 transition-all flex items-center justify-center gap-1">
            <span class="material-symbols-outlined" style="font-size:16px">add_shopping_cart</span>
            Añadir
          </button>
        </div>
      </div>`).join("")}
  </div>`;
}

function actualizarBadgesFavoritos() {
  const total = favoritos.size;
  ["fav-badge-nav"].forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    el.textContent = total;
    el.style.display = total > 0 ? "flex" : "none";
  });
}

/* ============================================================
   CARRITO
   ============================================================ */
function agregarAlCarrito(id) {
  const p = catalogoProductos.find(x => x.id === id);
  if (!p) return;

  const existe = carrito.find(x => x.id === id);
  if (existe) { existe.cantidad += 1; }
  else { carrito.push({ id: p.id, nombre: p.nombre, precio: p.precio, archivo: p.archivo, cantidad: 1 }); }

  guardar();
  actualizarBadgesCarrito();
  mostrarToast("Añadido al carrito", "shopping_cart");

  // Animación FAB
  const fab = document.getElementById("fab-carrito");
  if (fab) { fab.classList.add("scale-125"); setTimeout(() => fab.classList.remove("scale-125"), 280); }

  // Actualizar panel si está abierto
  if (document.getElementById("panel-carrito").classList.contains("abierto")) {
    renderizarCarrito();
  }
}

function cambiarCantidad(id, delta) {
  const item = carrito.find(x => x.id === id);
  if (!item) return;
  item.cantidad += delta;
  if (item.cantidad <= 0) carrito = carrito.filter(x => x.id !== id);
  guardar();
  actualizarBadgesCarrito();
  renderizarCarrito();
}

function eliminarDelCarrito(id) {
  carrito = carrito.filter(x => x.id !== id);
  guardar();
  actualizarBadgesCarrito();
  renderizarCarrito();
}

function vaciarCarrito() {
  if (carrito.length === 0) return;
  if (!confirm("¿Vaciar el carrito?")) return;
  carrito = [];
  guardar();
  actualizarBadgesCarrito();
  renderizarCarrito();
}

function renderizarCarrito() {
  const lista  = document.getElementById("lista-carrito");
  const totalEl = document.getElementById("total-carrito");
  if (!lista) return;

  if (carrito.length === 0) {
    lista.innerHTML = `
      <div class="flex flex-col items-center justify-center h-full gap-4 text-on-surface-variant py-20">
        <span class="material-symbols-outlined opacity-20" style="font-size:56px">shopping_cart</span>
        <p class="font-body-md text-body-md opacity-40 text-center">Tu carrito está vacío.<br>¡Agrega productos!</p>
      </div>`;
    if (totalEl) totalEl.textContent = "$0.00";
    return;
  }

  let total = 0;
  lista.innerHTML = carrito.map(item => {
    const sub = item.precio * item.cantidad;
    total += sub;
    return `
      <div class="flex gap-3 items-center bg-surface-container-lowest rounded-2xl p-3 border border-outline-variant/20 shadow-sm">
        <img src="${item.archivo}" alt="${item.nombre}"
          class="w-16 h-16 rounded-xl object-cover shrink-0 bg-surface-container-low"
          onerror="this.src='https://placehold.co/80x80/ffd9dd/8b4c56?text=?'">
        <div class="flex-1 min-w-0">
          <p class="font-label-md text-label-md text-on-surface line-clamp-2 leading-snug">${item.nombre}</p>
          <p class="font-body-md text-body-md text-gold font-semibold mt-0.5">$${(item.precio * item.cantidad).toFixed(2)}</p>
          <!-- Controles cantidad -->
          <div class="flex items-center gap-2 mt-2">
            <button onclick="cambiarCantidad(${item.id}, -1)"
              class="w-7 h-7 rounded-full border border-outline-variant flex items-center justify-center hover:bg-surface-variant transition-colors">
              <span class="material-symbols-outlined" style="font-size:16px">remove</span>
            </button>
            <span class="font-label-md text-label-md w-5 text-center">${item.cantidad}</span>
            <button onclick="cambiarCantidad(${item.id}, 1)"
              class="w-7 h-7 rounded-full border border-outline-variant flex items-center justify-center hover:bg-surface-variant transition-colors">
              <span class="material-symbols-outlined" style="font-size:16px">add</span>
            </button>
          </div>
        </div>
        <button onclick="eliminarDelCarrito(${item.id})"
          aria-label="Eliminar"
          class="shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant/50 hover:bg-error-container hover:text-error transition-colors">
          <span class="material-symbols-outlined" style="font-size:20px">delete</span>
        </button>
      </div>`;
  }).join("");

  if (totalEl) totalEl.textContent = `$${total.toFixed(2)}`;
}

function actualizarBadgesCarrito() {
  const total = carrito.reduce((a, i) => a + i.cantidad, 0);
  ["carrito-badge", "carrito-badge-nav"].forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    el.textContent = total;
    el.style.display = total > 0 ? "flex" : "none";
  });
}

/* ============================================================
   ENVIAR PEDIDO POR WHATSAPP
   ============================================================ */
function enviarPedidoWhatsApp() {
  if (carrito.length === 0) {
    mostrarToast("El carrito está vacío", "info");
    return;
  }
  let msg = `¡Hola! Quiero hacer el siguiente pedido de *DISTRIBELLEZA C&J* 🌼:\n\n`;
  let total = 0;
  carrito.forEach(item => {
    const sub = item.precio * item.cantidad;
    msg += `• *${item.cantidad}x* ${item.nombre} — $${item.precio.toFixed(2)} c/u\n`;
    total += sub;
  });
  msg += `\n💰 *Total Estimado: $${total.toFixed(2)}*`;
  const numero = "593964266871"; // ← Tu número de WhatsApp
  window.open(`https://wa.me/${numero}?text=${encodeURIComponent(msg)}`, "_blank");
}

/* ============================================================
   FILTROS DE CATEGORÍA
   ============================================================ */
function configurarFiltros() {
  const botones = document.querySelectorAll(".btn-filtro");
  botones.forEach(btn => {
    btn.addEventListener("click", () => {
      botones.forEach(b => {
        b.classList.replace("bg-primary", "bg-surface-container-highest");
        b.classList.replace("text-on-primary", "text-on-surface");
        b.classList.remove("shadow-md");
      });
      btn.classList.replace("bg-surface-container-highest", "bg-primary");
      btn.classList.replace("text-on-surface", "text-on-primary");
      btn.classList.add("shadow-md");
      categoriaActiva = btn.dataset.categoria;
      renderizarProductos();
    });
  });
}

/* ============================================================
   BUSCADOR
   ============================================================ */
function configurarBuscador() {
  const modal   = document.getElementById("buscador-modal");
  const input   = document.getElementById("input-busqueda");
  const btnAbrir = document.getElementById("btn-abrir-busqueda");
  const btnCerrar = document.getElementById("btn-cerrar-busqueda");

  btnAbrir?.addEventListener("click", () => {
    modal.classList.remove("hidden");
    modal.classList.add("flex");
    input?.focus();
  });

  const cerrarBuscador = () => {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
    terminoBusqueda = "";
    if (input) input.value = "";
    renderizarProductos();
  };

  btnCerrar?.addEventListener("click", cerrarBuscador);

  modal?.addEventListener("click", e => { if (e.target === modal) cerrarBuscador(); });

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      if (!modal.classList.contains("hidden")) cerrarBuscador();
      else cerrarTodosLosPaneles();
    }
  });

  input?.addEventListener("input", e => {
    terminoBusqueda = e.target.value.trim();
    renderizarProductos();
  });
}

/* ============================================================
   MODO ADMINISTRADOR (PRECIOS)
   ============================================================ */
function abrirModalAdmin() {
  if (modoEdicion) return; // Si ya está en edición, no hacer nada

  const ahora = Date.now();
  const errorEl = document.getElementById("admin-error");
  
  if (bloqueoPinHasta > ahora) {
    const faltan = Math.ceil((bloqueoPinHasta - ahora) / 1000);
    errorEl.textContent = `Demasiados intentos. Espera ${faltan}s.`;
    errorEl.classList.remove("hidden");
  } else {
    errorEl.classList.add("hidden");
    document.getElementById("input-pin").value = "";
  }

  const modal = document.getElementById("admin-modal");
  modal.classList.remove("hidden");
  modal.classList.add("flex");
  document.getElementById("input-pin").focus();
}

function cerrarModalAdmin() {
  const modal = document.getElementById("admin-modal");
  modal.classList.add("hidden");
  modal.classList.remove("flex");
  document.getElementById("input-pin").value = "";
  document.getElementById("admin-error").classList.add("hidden");
}

function verificarPin() {
  const ahora = Date.now();
  const errorEl = document.getElementById("admin-error");

  if (bloqueoPinHasta > ahora) {
    const faltan = Math.ceil((bloqueoPinHasta - ahora) / 1000);
    errorEl.textContent = `Bloqueado. Espera ${faltan}s.`;
    errorEl.classList.remove("hidden");
    return;
  }

  const pin = document.getElementById("input-pin").value;
  if (pin === "420") {
    // PIN Correcto
    intentosPin = 0;
    cerrarModalAdmin();
    iniciarModoEdicion();
  } else {
    // PIN Incorrecto
    intentosPin++;
    if (intentosPin >= 3) {
      bloqueoPinHasta = Date.now() + 30000; // 30 segundos
      errorEl.textContent = "Demasiados intentos. Espera 30s.";
    } else {
      errorEl.textContent = `PIN incorrecto. Te quedan ${3 - intentosPin} intentos.`;
    }
    errorEl.classList.remove("hidden");
  }
}

function iniciarModoEdicion() {
  modoEdicion = true;
  preciosEditados = {};
  
  document.getElementById("toolbar-edicion").classList.remove("hidden");
  document.getElementById("toolbar-edicion").classList.add("flex");
  
  // Ocultar el FAB del carrito si está visible
  const fab = document.getElementById("fab-carrito");
  if (fab) fab.style.display = "none";
  
  renderizarProductos();
  mostrarToast("Modo edición activado", "edit");
}

function cancelarEdicion() {
  modoEdicion = false;
  preciosEditados = {};
  
  document.getElementById("toolbar-edicion").classList.add("hidden");
  document.getElementById("toolbar-edicion").classList.remove("flex");
  
  const fab = document.getElementById("fab-carrito");
  if (fab) fab.style.display = "flex";
  
  renderizarProductos();
  mostrarToast("Edición cancelada", "close");
}

function guardarEdicion() {
  // Aplicar los cambios al catálogo y a preciosGuardados
  for (const id in preciosEditados) {
    const producto = catalogoProductos.find(p => p.id == id);
    if (producto) {
      producto.precio = preciosEditados[id];
      preciosGuardados[id] = preciosEditados[id];
    }
  }
  
  localStorage.setItem("db_precios", JSON.stringify(preciosGuardados));
  
  // Salir del modo edición
  modoEdicion = false;
  preciosEditados = {};
  
  document.getElementById("toolbar-edicion").classList.add("hidden");
  document.getElementById("toolbar-edicion").classList.remove("flex");
  
  const fab = document.getElementById("fab-carrito");
  if (fab) fab.style.display = "flex";
  
  renderizarProductos();
  mostrarToast("Precios guardados", "save");
}

function borrarTodoEdicion() {
  if (!confirm("¿Restablecer todos los precios a sus valores originales?")) return;
  
  // Limpiar localStorage
  preciosGuardados = {};
  localStorage.removeItem("db_precios");
  
  // Limpiar ediciones temporales
  preciosEditados = {};
  
  mostrarToast("Restableciendo precios...", "refresh");
  setTimeout(() => location.reload(), 800);
}

/* ============================================================
   INICIALIZACIÓN
   ============================================================ */
document.addEventListener("DOMContentLoaded", () => {
  renderizarProductos();
  configurarFiltros();
  configurarBuscador();
  actualizarBadgesCarrito();
  actualizarBadgesFavoritos();
});
