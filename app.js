/**
 * Nuvora — Plataforma Digital de Promociones, Filtro por Presupuesto y Cupones QR
 * Caso Piloto: Centro Comercial San Pedro Plaza (Neiva, Huila)
 * Ficha 3413974 — Tecnología en Análisis y Desarrollo de Software (ADSO) - SENA
 */

const DB_STORAGE_KEY = "NUVORA_SANPEDRO_DB_CLEAN_V3";

function getInitialDatabase() {
  const nowMs = Date.now();
  return {
    locales: [
      {
        id: "P-14",
        nombre: "El Corralito Parrilla & Burger",
        numero_local: "Local P-14 • Plazoleta de Comidas Piso 2",
        telefono: "315 482 9104",
        horario: "Lun a Dom: 11:00 a.m. - 9:30 p.m.",
        descripcion: "Especialistas en hamburguesas artesanales 100% res a la parrilla, papas rústicas y combos familiares.",
        propietario: "Don Carlos Alberto Méndez"
      },
      {
        id: "I-08",
        nombre: "Delicias del Huila: Cholupas & Helados",
        numero_local: "Isla Comercial I-08 • Pasillo Lateral Piso 1",
        telefono: "318 721 3308",
        horario: "Lun a Dom: 9:30 a.m. - 8:30 p.m.",
        descripcion: "Emprendimiento regional opita de granizados de cholupa natural, bizcochos de achira y postres típicos.",
        propietario: "Doña Martha Lucía Tovar"
      },
      {
        id: "P-06",
        nombre: "Asadero & Brasas del San Pedro",
        numero_local: "Local P-06 • Plazoleta de Comidas Piso 2",
        telefono: "310 294 6606",
        horario: "Lun a Dom: 11:30 a.m. - 9:30 p.m.",
        descripcion: "Cortes de carne madurada al carbón, churrasco, punta de anca y pechuga gratinada con guarnición tradicional.",
        propietario: "Andrés Felipe Murcia"
      },
      {
        id: "C-12",
        nombre: "Café & Achiras Opitas Gourmet",
        numero_local: "Local C-12 • Piso 1 Zona Bancaria",
        telefono: "316 901 1112",
        horario: "Lun a Sáb: 8:00 a.m. - 8:00 p.m.",
        descripcion: "Café especial de origen San Agustín y Pitalito preparado por baristas con pastelería huilense.",
        propietario: "Cooperativa Cafetera del Huila"
      },
      {
        id: "P-09",
        nombre: "Pizza & Pasta San Pedro Artesanal",
        numero_local: "Local P-09 • Plazoleta de Comidas Piso 2",
        telefono: "312 650 8809",
        horario: "Lun a Dom: 11:30 a.m. - 9:30 p.m.",
        descripcion: "Pizzas de masa madre horneadas a la piedra, lasañas gratinadas y limonadas naturales.",
        propietario: "Chef Luigi & Familia"
      },
      {
        id: "P-18",
        nombre: "Wok & Teriyaki Express Plaza",
        numero_local: "Local P-18 • Plazoleta de Comidas Piso 2",
        telefono: "320 441 7718",
        horario: "Lun a Dom: 11:30 a.m. - 9:30 p.m.",
        descripcion: "Cocina oriental saludable al wok con vegetales frescos, arroz jazmín, pollo teriyaki y rollitos primavera.",
        propietario: "Grupo Gastronómico Oriental"
      }
    ],
    locales_categorias: [
      { local_id: "P-14", categoria_id: "comidas-rapidas" },
      { local_id: "P-14", categoria_id: "parrilla" },
      { local_id: "I-08", categoria_id: "regional" },
      { local_id: "P-06", categoria_id: "parrilla" },
      { local_id: "C-12", categoria_id: "regional" },
      { local_id: "P-09", categoria_id: "comidas-rapidas" },
      { local_id: "P-18", categoria_id: "comidas-rapidas" }
    ],
    productos: [
      { id: "prod-1", local_id: "I-08", nombre: "Combo Onces Opitas: Granizado de Cholupa + Achiras", descripcion: "Granizado fruta natural 16 oz + paquete de achiras y queso.", precio_regular: 14000 },
      { id: "prod-2", local_id: "I-08", nombre: "Copa Helado Artesanal de Café & Arequipe", descripcion: "Tres bolas de helado artesanal con lluvia de achira triturada.", precio_regular: 13500 },
      { id: "prod-3", local_id: "C-12", nombre: "Dúo Cafetero San Agustín + Torta de Almojábana", descripcion: "Café filtrado o Latte frío + porción de torta caliente.", precio_regular: 16500 },
      { id: "prod-4", local_id: "P-09", nombre: "Pizza Personal Masa Madre + Limonada Natural", descripcion: "Pizza 4 porciones (pepperoni o pollo champiñón) + bebida.", precio_regular: 22000 },
      { id: "prod-5", local_id: "P-14", nombre: "Combo Corralito Parrilla 180g + Papas + Gaseosa", descripcion: "Hamburguesa 180g res al carbón, tocineta, cheddar, papas y gaseosa.", precio_regular: 26000 },
      { id: "prod-6", local_id: "P-14", nombre: "Hamburguesa Doble Brasa 300g + Anillos de Cebolla", descripcion: "Doble carne a la parrilla, queso americano y bebida 16 oz.", precio_regular: 31000 },
      { id: "prod-7", local_id: "P-18", nombre: "Bowl Teriyaki Pollo & Vegetales al Wok + Rollito", descripcion: "Arroz jazmín salteado al wok con pollo teriyaki y bebida.", precio_regular: 27000 },
      { id: "prod-8", local_id: "P-06", nombre: "Punta de Anca a la Brasa 280g + Arepa, Papa y Ensalada", descripcion: "Corte madurado al carbón con chimichurri, yuca y gaseosa.", precio_regular: 36000 }
    ],
    promociones: [
      {
        id: "promo-1",
        local_id: "I-08",
        producto_id: "prod-1",
        titulo: "Combo Onces Opitas: Granizado de Cholupa + Achiras Artesanales",
        descripcion: "Granizado 100% fruta natural de Rivera con paquete de bizcochos de achira horneados y queso doble crema.",
        precio_regular: 14000,
        precio_oferta: 9500,
        porcentaje_descuento: 32,
        stock_maximo: 30,
        stock_actual: 14,
        es_relampago: true,
        estado: "ACTIVA",
        categoria: "regional",
        imagen: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=700&q=80"
      },
      {
        id: "promo-2",
        local_id: "C-12",
        producto_id: "prod-3",
        titulo: "Dúo Cafetero Especial de San Agustín + Torta de Almojábana",
        descripcion: "Café filtrado de origen (Caturra/Tabi) o Latte frío acompañado de porción de torta artesanal caliente.",
        precio_regular: 16500,
        precio_oferta: 12000,
        porcentaje_descuento: 27,
        stock_maximo: 40,
        stock_actual: 22,
        es_relampago: false,
        estado: "ACTIVA",
        categoria: "regional",
        imagen: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=700&q=80"
      },
      {
        id: "promo-3",
        local_id: "P-09",
        producto_id: "prod-4",
        titulo: "Pizza Personal Masa Madre (2 Ingredientes) + Limonada Natural",
        descripcion: "Pizza artesanal horneada a la piedra con queso mozzarella fundido, pepperoni o pollo champiñones.",
        precio_regular: 22000,
        precio_oferta: 15500,
        porcentaje_descuento: 30,
        stock_maximo: 25,
        stock_actual: 9,
        es_relampago: true,
        estado: "ACTIVA",
        categoria: "comidas-rapidas",
        imagen: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=700&q=80"
      },
      {
        id: "promo-4",
        local_id: "P-14",
        producto_id: "prod-5",
        titulo: "Combo Corralito Parrilla 180g + Papas Rústicas + Gaseosa Gratis",
        descripcion: "Hamburguesa 100% res a la parrilla con tocineta ahumada, queso cheddar, vegetales frescos y bebida 12 oz.",
        precio_regular: 26000,
        precio_oferta: 18000,
        porcentaje_descuento: 31,
        stock_maximo: 30,
        stock_actual: 11,
        es_relampago: true,
        estado: "ACTIVA",
        categoria: "comidas-rapidas",
        imagen: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=80"
      },
      {
        id: "promo-5",
        local_id: "P-18",
        producto_id: "prod-7",
        titulo: "Bowl Teriyaki Pollo & Vegetales al Wok + Rollito Primavera",
        descripcion: "Arroz jazmín o tallarines salteados al wok con salsa teriyaki de la casa, ajonjolí tostado y bebida.",
        precio_regular: 27000,
        precio_oferta: 19900,
        porcentaje_descuento: 26,
        stock_maximo: 35,
        stock_actual: 19,
        es_relampago: false,
        estado: "ACTIVA",
        categoria: "comidas-rapidas",
        imagen: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=700&q=80"
      },
      {
        id: "promo-6",
        local_id: "P-06",
        producto_id: "prod-8",
        titulo: "Punta de Anca o Churrasco a la Brasa 280g + Arepa, Papa y Ensalada",
        descripcion: "Corte madurado asado al carbón al término de tu elección con chimichurri artesanal, yuca cocida y gaseosa.",
        precio_regular: 36000,
        precio_oferta: 26500,
        porcentaje_descuento: 26,
        stock_maximo: 20,
        stock_actual: 7,
        es_relampago: true,
        estado: "ACTIVA",
        categoria: "parrilla",
        imagen: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=700&q=80"
      }
    ],
    horarios_promocion: [
      { id: 1, promocion_id: "promo-1", dias: "Lun a Vie", hora_inicio: "2:30 p.m.", hora_fin: "5:30 p.m." },
      { id: 2, promocion_id: "promo-3", dias: "Mar a Jue", hora_inicio: "12:00 m.", hora_fin: "5:00 p.m." },
      { id: 3, promocion_id: "promo-4", dias: "Mar, Mié y Jue", hora_inicio: "2:30 p.m.", hora_fin: "5:30 p.m." },
      { id: 4, promocion_id: "promo-6", dias: "Lun a Jue", hora_inicio: "2:00 p.m.", hora_fin: "6:00 p.m." }
    ],
    cupones: [
      {
        id: 1,
        codigo_unico: "SPP-7F2A9B",
        promocion_id: "promo-4",
        local_id: "P-14",
        cliente_nombre: "Camilo Andrés Rojas",
        titulo: "Combo Corralito Parrilla 180g + Papas Rústicas + Gaseosa Gratis",
        precio_regular: 26000,
        precio_oferta: 18000,
        estado: "EMITIDO",
        expira_timestamp: nowMs + 6505 * 1000
      },
      {
        id: 2,
        codigo_unico: "SPP-3E9D2A",
        promocion_id: "promo-2",
        local_id: "C-12",
        cliente_nombre: "Camilo Andrés Rojas",
        titulo: "Dúo Cafetero Especial de San Agustín + Torta de Almojábana",
        precio_regular: 16500,
        precio_oferta: 12000,
        estado: "EMITIDO",
        expira_timestamp: nowMs + 5420 * 1000
      },
      {
        id: 3,
        codigo_unico: "SPP-4C8D1E",
        promocion_id: "promo-6",
        local_id: "P-06",
        cliente_nombre: "Camilo Andrés Rojas",
        titulo: "Punta de Anca o Churrasco a la Brasa 280g + Arepa, Papa y Ensalada",
        precio_regular: 36000,
        precio_oferta: 26500,
        estado: "REDIMIDO",
        detalle_estado: "Canjeado hoy a las 2:15 p.m. en Local P-06"
      },
      {
        id: 4,
        codigo_unico: "SPP-9A1B0C",
        promocion_id: "promo-1",
        local_id: "I-08",
        cliente_nombre: "Camilo Andrés Rojas",
        titulo: "Combo Onces Opitas: Granizado de Cholupa + Achiras Artesanales",
        precio_regular: 14000,
        precio_oferta: 9500,
        estado: "EXPIRADO",
        detalle_estado: "Finalizó el tiempo límite de 2 horas para el canje"
      }
    ],
    redenciones: [
      { id: 1, cupon_id: 3, codigo_unico: "SPP-4C8D1E", local_id: "P-06", monto_descontado: 9500 }
    ],
    auditoria_logs: [
      {
        id: 1,
        timestamp: "02:38 p.m.",
        codigo: "SPP-4C8D1E",
        local_cajero: "Asadero & Brasas del San Pedro (Local P-06)",
        resultado: "Canjeado con éxito • Ahorro -$9.500 COP",
        exito: true
      },
      {
        id: 2,
        timestamp: "02:21 p.m.",
        codigo: "SPP-9A1B0C",
        local_cajero: "Delicias del Huila: Cholupas & Helados (Isla I-08)",
        resultado: "Rechazado en caja • Cupón vencido",
        exito: false
      }
    ],
    metricas: {
      visualizaciones: 1248,
      emitidos_base: 83,
      redimidos_base: 63
    },
    solicitudes_contacto: [
      {
        ticket: "NUV-841920",
        nombre: "Don Carlos Alberto Méndez",
        rol: "Comercio / Locatario San Pedro Plaza",
        local: "Local P-14 Plazoleta",
        correo: "carlos.mendez@corralito.co",
        fecha: "26/11/2026"
      }
    ]
  };
}

let db = loadDatabase();
let currentBudget = 20000;
let currentCategory = "all";
let currentSearch = "";
let currentWalletTab = "EMITIDO";
let selectedMerchantStoreId = "P-14";
let cameraStream = null;
let activeModalCouponCode = "SPP-7F2A9B";

function loadDatabase() {
  try {
    const raw = localStorage.getItem(DB_STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && parsed.promociones && parsed.locales && parsed.cupones) {
        return parsed;
      }
    }
  } catch (_) {}
  const init = getInitialDatabase();
  saveDatabase(init);
  return init;
}

function saveDatabase(data = db) {
  try {
    localStorage.setItem(DB_STORAGE_KEY, JSON.stringify(data));
  } catch (_) {}
}

function formatCOP(value) {
  return "$" + Number(value).toLocaleString("es-CO") + " COP";
}

function formatSeconds(totalSec) {
  const s = Math.max(0, Math.floor(totalSec));
  const hrs = String(Math.floor(s / 3600)).padStart(2, "0");
  const mins = String(Math.floor((s % 3600) / 60)).padStart(2, "0");
  const secs = String(s % 60).padStart(2, "0");
  return `${hrs}:${mins}:${secs}`;
}

function playPosBeep(isSuccess) {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type = isSuccess ? "sine" : "sawtooth";
    osc.frequency.value = isSuccess ? 880 : 220;
    gain.gain.value = 0.07;
    osc.start();
    setTimeout(() => {
      osc.stop();
      ctx.close();
    }, isSuccess ? 140 : 250);
  } catch (_) {}
}

function drawQRCodeOnCanvas(canvasId, codeText) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const size = canvas.width;
  const cells = 21;
  const cellSize = Math.floor(size / cells);
  const offset = Math.floor((size - cells * cellSize) / 2);

  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, size, size);

  let hash = 2166136261;
  for (let i = 0; i < codeText.length; i++) {
    hash ^= codeText.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }

  function drawFinderPattern(r0, c0) {
    for (let r = 0; r < 7; r++) {
      for (let c = 0; c < 7; c++) {
        const isBorder = r === 0 || r === 6 || c === 0 || c === 6;
        const isInner = r >= 2 && r <= 4 && c >= 2 && c <= 4;
        ctx.fillStyle = isBorder || isInner ? "#0f172a" : "#ffffff";
        ctx.fillRect(offset + (c0 + c) * cellSize, offset + (r0 + r) * cellSize, cellSize, cellSize);
      }
    }
  }

  for (let r = 0; r < cells; r++) {
    for (let c = 0; c < cells; c++) {
      const inTopLeft = r < 8 && c < 8;
      const inTopRight = r < 8 && c >= cells - 8;
      const inBottomLeft = r >= cells - 8 && c < 8;
      if (inTopLeft || inTopRight || inBottomLeft) continue;

      const bitSeed = (hash ^ (r * 31 + c * 17) ^ ((r * c) << 3)) >>> 0;
      if (bitSeed % 2 === 0) {
        ctx.fillStyle = "#0f172a";
        ctx.fillRect(offset + c * cellSize, offset + r * cellSize, cellSize, cellSize);
      }
    }
  }

  drawFinderPattern(0, 0);
  drawFinderPattern(0, cells - 7);
  drawFinderPattern(cells - 7, 0);
}

function getScheduleText(promo) {
  if (!promo.es_relampago) {
    return "🕒 Todos los días (8:00 a.m. - 9:00 p.m.)";
  }
  const h = db.horarios_promocion.find((x) => x.promocion_id === promo.id);
  if (!h) {
    return "⚡ Lun a Jue (2:30 p.m. - 5:30 p.m.)";
  }
  return `⚡ ${h.dias} (${h.hora_inicio} a ${h.hora_fin})`;
}

function getStoreById(localId) {
  return db.locales.find((l) => l.id === localId) || db.locales[0];
}

function renderPromotions() {
  const container = document.getElementById("directorio");
  const counterEl = document.getElementById("results-counter");
  if (!container) return;

  const publicPromos = db.promociones.filter((p) => p.estado === "ACTIVA" || p.estado === "AGOTADA");

  const filtered = publicPromos
    .filter((item) => {
      const matchesBudget = item.precio_oferta <= currentBudget;
      const storeCats = db.locales_categorias
        .filter((lc) => lc.local_id === item.local_id)
        .map((lc) => lc.categoria_id);
      const matchesCategory =
        currentCategory === "all" ||
        (currentCategory === "relampago"
          ? item.es_relampago
          : item.categoria === currentCategory || storeCats.includes(currentCategory));
      const store = getStoreById(item.local_id);
      const q = currentSearch.trim().toLowerCase();
      const matchesSearch =
        !q ||
        item.titulo.toLowerCase().includes(q) ||
        store.nombre.toLowerCase().includes(q) ||
        item.descripcion.toLowerCase().includes(q);
      return matchesBudget && matchesCategory && matchesSearch;
    })
    .sort((a, b) => a.precio_oferta - b.precio_oferta);

  counterEl.innerHTML = `Mostrando <strong>${filtered.length} ${
    filtered.length === 1 ? "opción disponible" : "opciones disponibles"
  }</strong> dentro de tu presupuesto de <strong>${formatCOP(currentBudget)}</strong>`;

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 2.5rem; background: #fff; border-radius: 16px; border: 1px solid #e2e8f0;">
        <h3>No encontramos promociones con ese filtro exacto</h3>
        <p style="color: #475569; margin: 0.5rem 0 1rem;">Aumenta el presupuesto con el deslizador o selecciona «Todos los Locales».</p>
        <button type="button" class="btn btn-primary btn-sm" id="btn-reset-filters">Ver Opciones hasta $30.000 COP</button>
      </div>
    `;
    document.getElementById("btn-reset-filters")?.addEventListener("click", () => {
      setBudgetValue(30000);
      currentCategory = "all";
      currentSearch = "";
      document.getElementById("search-input").value = "";
      document.querySelectorAll(".cat-tab").forEach((b) => b.classList.toggle("active", b.dataset.cat === "all"));
      renderPromotions();
    });
    return;
  }

  container.innerHTML = filtered
    .map((p) => {
      const store = getStoreById(p.local_id);
      const discountPct = Math.round(((p.precio_regular - p.precio_oferta) / p.precio_regular) * 100);
      const leftover = currentBudget - p.precio_oferta;
      const alreadyHasActive = db.cupones.some((c) => c.promocion_id === p.id && c.estado === "EMITIDO");
      const isSoldOut = p.stock_actual <= 0 || p.estado === "AGOTADA";

      return `
        <article class="promo-card">
          <div class="promo-img-wrap">
            <img src="${p.imagen}" alt="${p.titulo}" loading="lazy" />
            <div class="promo-badges-top">
              <span class="badge-local">Local ${p.local_id}</span>
              ${
                p.es_relampago
                  ? `<span class="badge-flash">⚡ Relámpago -${discountPct}%</span>`
                  : `<span class="badge-flash" style="background:#16a34a;">Ahorras ${discountPct}%</span>`
              }
            </div>
          </div>
          <div class="promo-body">
            <span class="promo-store-tag">🏪 ${store.nombre}</span>
            <h3 class="promo-title">${p.titulo}</h3>
            <p class="promo-desc">${p.descripcion}</p>
            <div class="promo-meta-row">
              <span>${getScheduleText(p)}</span>
              <span>${isSoldOut ? "Agotado" : `${p.stock_actual} cupos`}</span>
            </div>
            <div class="promo-price-row">
              <div class="price-block">
                <span class="price-reg">Antes: ${formatCOP(p.precio_regular)}</span>
                <span class="price-now">${formatCOP(p.precio_oferta)}</span>
              </div>
              <span class="leftover-tag">Te sobran ${formatCOP(leftover)}</span>
            </div>
            <div class="promo-card-actions">
              <button
                type="button"
                class="btn ${alreadyHasActive ? "btn-outline" : "btn-primary"} btn-sm btn-generate-qr"
                data-promo-id="${p.id}"
                ${isSoldOut && !alreadyHasActive ? "disabled" : ""}
              >
                ${alreadyHasActive ? "Ver mi Cupón QR" : isSoldOut ? "Agotado" : "Obtener Cupón QR"}
              </button>
              <button type="button" class="btn btn-outline btn-sm btn-open-store-modal" data-store-id="${p.local_id}">
                Ver Carta
              </button>
            </div>
          </div>
        </article>
      `;
    })
    .join("");

  container.querySelectorAll(".btn-generate-qr").forEach((btn) => {
    btn.addEventListener("click", () => handleGenerateCoupon(btn.dataset.promoId));
  });

  container.querySelectorAll(".btn-open-store-modal").forEach((btn) => {
    btn.addEventListener("click", () => openStoreDetailModal(btn.dataset.storeId));
  });
}

function renderStoresStrip() {
  const strip = document.getElementById("stores-directory-strip");
  if (!strip) return;
  strip.innerHTML = db.locales
    .map((l) => {
      const countProds = db.productos.filter((p) => p.local_id === l.id).length;
      const countPromos = db.promociones.filter((p) => p.local_id === l.id && p.estado === "ACTIVA").length;
      return `
        <div class="store-mini-card" data-store-id="${l.id}">
          <div class="store-mini-info">
            <strong>${l.id} • ${l.nombre}</strong>
            <span>${countProds} opciones en carta • ${countPromos} promo activa</span>
          </div>
          <span class="store-mini-btn">Ver Carta →</span>
        </div>
      `;
    })
    .join("");

  strip.querySelectorAll(".store-mini-card").forEach((card) => {
    card.addEventListener("click", () => openStoreDetailModal(card.dataset.storeId));
  });
}

function openStoreDetailModal(localId) {
  const store = getStoreById(localId);
  if (!store) return;

  document.getElementById("smodal-badge").textContent = `ESTABLECIMIENTO ${store.id} • SAN PEDRO PLAZA`;
  document.getElementById("smodal-title").textContent = store.nombre;
  document.getElementById("smodal-meta").textContent = `${store.numero_local} • 📞 ${store.telefono} • 🕒 ${store.horario}`;
  document.getElementById("smodal-desc").textContent = store.descripcion;

  const prods = db.productos.filter((p) => p.local_id === localId);
  document.getElementById("smodal-products-list").innerHTML = prods
    .map(
      (prod) => `
      <div class="smodal-item">
        <div>
          <strong>${prod.nombre}</strong>
          <div style="font-size:0.78rem; color:#475569;">${prod.descripcion}</div>
        </div>
        <strong style="color:#0f172a; white-space:nowrap;">${formatCOP(prod.precio_regular)}</strong>
      </div>
    `
    )
    .join("");

  const promos = db.promociones.filter((p) => p.local_id === localId && p.estado === "ACTIVA");
  const promosEl = document.getElementById("smodal-promos-list");
  if (promos.length === 0) {
    promosEl.innerHTML = `<p style="font-size:0.84rem; color:#475569;">Este local no tiene promociones activas en este momento.</p>`;
  } else {
    promosEl.innerHTML = promos
      .map(
        (pr) => `
        <div class="smodal-item">
          <div>
            <strong>${pr.titulo}</strong>
            <div style="font-size:0.8rem; color:#16a34a; font-weight:700;">
              Con Cupón: ${formatCOP(pr.precio_oferta)} (Normal: ${formatCOP(pr.precio_regular)})
            </div>
          </div>
          <button type="button" class="btn btn-primary btn-sm btn-smodal-claim" data-promo-id="${pr.id}">
            Obtener QR
          </button>
        </div>
      `
      )
      .join("");

    promosEl.querySelectorAll(".btn-smodal-claim").forEach((b) => {
      b.addEventListener("click", () => {
        closeModal("store-modal");
        handleGenerateCoupon(b.dataset.promoId);
      });
    });
  }

  openModal("store-modal");
}

function handleGenerateCoupon(promoId) {
  const promo = db.promociones.find((p) => p.id === promoId);
  if (!promo) return;

  let existing = db.cupones.find((c) => c.promocion_id === promoId && c.estado === "EMITIDO");

  if (!existing) {
    if (promo.stock_actual <= 0 || promo.estado !== "ACTIVA") {
      alert("Esta promoción ya agotó sus cupos disponibles.");
      return;
    }

    const randBytes = new Uint8Array(3);
    if (window.crypto && window.crypto.getRandomValues) {
      window.crypto.getRandomValues(randBytes);
    } else {
      for (let i = 0; i < 3; i++) randBytes[i] = Math.floor(Math.random() * 256);
    }
    const hexToken = Array.from(randBytes, (b) => b.toString(16).padStart(2, "0").toUpperCase()).join("");
    const newCode = `SPP-${hexToken}`;

    existing = {
      id: db.cupones.length + 1,
      codigo_unico: newCode,
      promocion_id: promo.id,
      local_id: promo.local_id,
      cliente_nombre: "Camilo Andrés Rojas",
      titulo: promo.titulo,
      precio_regular: promo.precio_regular,
      precio_oferta: promo.precio_oferta,
      estado: "EMITIDO",
      expira_timestamp: Date.now() + 2 * 3600 * 1000
    };

    db.cupones.unshift(existing);
    promo.stock_actual -= 1;
    if (promo.stock_actual <= 0) {
      promo.stock_actual = 0;
      promo.estado = "AGOTADA";
    }

    saveDatabase();
    renderAllViews();
  }

  openQRModal(existing);
}

function openQRModal(coupon) {
  activeModalCouponCode = coupon.codigo_unico;
  const store = getStoreById(coupon.local_id);
  document.getElementById("modal-promo-title").textContent = coupon.titulo;
  document.getElementById("modal-store-name").textContent = `${store.nombre} (Local ${store.id}) • Pagar en Caja: ${formatCOP(coupon.precio_oferta)}`;
  document.getElementById("modal-qr-code").textContent = coupon.codigo_unico;
  drawQRCodeOnCanvas("modal-qr-canvas", coupon.codigo_unico);

  const remSec = coupon.expira_timestamp ? (coupon.expira_timestamp - Date.now()) / 1000 : 7200;
  document.getElementById("modal-qr-countdown").textContent = formatSeconds(remSec);

  document.getElementById("modal-send-to-pos").onclick = () => {
    closeModal("qr-modal");
    sendCouponToPOS(coupon.codigo_unico, coupon.local_id);
  };

  openModal("qr-modal");
}

function renderWallet() {
  const listEl = document.getElementById("wallet-list");
  if (!listEl) return;

  const emitidosCount = db.cupones.filter((c) => c.estado === "EMITIDO").length;
  const redimidosCount = db.cupones.filter((c) => c.estado === "REDIMIDO").length;
  const expiradosCount = db.cupones.filter((c) => c.estado === "EXPIRADO").length;

  document.getElementById("count-emitidos").textContent = emitidosCount;
  document.getElementById("count-redimidos").textContent = redimidosCount;
  document.getElementById("count-expirados").textContent = expiradosCount;
  document.getElementById("coupon-badge-count").textContent = emitidosCount;

  const firstActive = db.cupones.find((c) => c.estado === "EMITIDO") || db.cupones[0];
  if (firstActive) {
    const st = getStoreById(firstActive.local_id);
    document.getElementById("hero-qr-local").textContent = `LOCAL ${st.id} • SAN PEDRO PLAZA`;
    document.getElementById("hero-qr-title").textContent = firstActive.titulo;
    document.getElementById("hero-qr-store").textContent = st.nombre;
    document.getElementById("hero-qr-old").textContent = formatCOP(firstActive.precio_regular);
    document.getElementById("hero-qr-new").textContent = formatCOP(firstActive.precio_oferta);
    document.getElementById("hero-qr-code-text").textContent = firstActive.codigo_unico;
    drawQRCodeOnCanvas("hero-qr-canvas", firstActive.codigo_unico);
  }

  const items = db.cupones.filter((c) => c.estado === currentWalletTab);

  if (items.length === 0) {
    listEl.innerHTML = `<p style="color:#475569; padding: 1rem;">No tienes cupones en esta categoría por ahora.</p>`;
    return;
  }

  const statusLabels = {
    EMITIDO: "● Disponible para Canje",
    REDIMIDO: "✓ Canjeado en Caja",
    EXPIRADO: "✕ Tiempo Vencido"
  };

  listEl.innerHTML = items
    .map((c, idx) => {
      const store = getStoreById(c.local_id);
      const remSec = c.expira_timestamp ? (c.expira_timestamp - Date.now()) / 1000 : 6400;
      const saved = c.precio_regular - c.precio_oferta;
      const miniCanvasId = `mini-qr-canvas-${idx}`;
      return `
        <div class="coupon-ticket">
          <div class="coupon-ticket-main">
            <div>
              <div class="coupon-ticket-header">
                <span class="status-tag status-${c.estado}">${statusLabels[c.estado] || c.estado}</span>
                <span class="coupon-store-pill">🏪 ${store.nombre} (${store.id})</span>
              </div>
              <h4 style="margin: 0.65rem 0 0.55rem; font-size: 1.05rem; line-height: 1.32;">${c.titulo}</h4>
              <div class="coupon-price-banner">
                <span class="cp-pay-now">${formatCOP(c.precio_oferta)}</span>
                <span class="cp-pay-old">Antes: ${formatCOP(c.precio_regular)}</span>
                <span class="cp-save-pill">Ahorras ${formatCOP(saved)}</span>
              </div>
            </div>
            <div class="coupon-ticket-footer">
              ${
                c.estado === "EMITIDO"
                  ? `<span class="coupon-timer-badge">⏱ Expira en: <strong class="live-coupon-timer" data-exp="${c.expira_timestamp}">${formatSeconds(remSec)}</strong></span>
                     <div class="coupon-actions-row">
                       <button type="button" class="btn btn-outline btn-sm btn-view-qr" data-code="${c.codigo_unico}">Ampliar QR</button>
                       <button type="button" class="btn btn-primary btn-sm btn-wallet-to-pos" data-code="${c.codigo_unico}" data-local="${c.local_id}">Canjear en Caja →</button>
                     </div>`
                  : `<span class="coupon-timer-badge">${c.detalle_estado || "Operación registrada"}</span>`
              }
            </div>
          </div>
          <div class="coupon-ticket-stub">
            <div class="stub-qr-wrap">
              <canvas id="${miniCanvasId}" width="84" height="84" aria-label="QR ${c.codigo_unico}"></canvas>
            </div>
            <span class="coupon-code-pill">${c.codigo_unico}</span>
          </div>
        </div>
      `;
    })
    .join("");

  items.forEach((c, idx) => {
    drawQRCodeOnCanvas(`mini-qr-canvas-${idx}`, c.codigo_unico);
  });

  listEl.querySelectorAll(".btn-wallet-to-pos").forEach((btn) => {
    btn.addEventListener("click", () => sendCouponToPOS(btn.dataset.code, btn.dataset.local));
  });

  listEl.querySelectorAll(".btn-view-qr").forEach((btn) => {
    btn.addEventListener("click", () => {
      const cp = db.cupones.find((x) => x.codigo_unico === btn.dataset.code);
      if (cp) openQRModal(cp);
    });
  });
}

function renderMerchantPanel() {
  const storeSelect = document.getElementById("merchant-store-select");
  const cashierSelect = document.getElementById("cashier-local-select");
  if (!storeSelect) return;

  storeSelect.innerHTML = db.locales
    .map(
      (l) =>
        `<option value="${l.id}" ${l.id === selectedMerchantStoreId ? "selected" : ""}>Local ${l.id} — ${l.nombre}</option>`
    )
    .join("");

  if (cashierSelect && cashierSelect.options.length !== db.locales.length) {
    const prevVal = cashierSelect.value || "P-14";
    cashierSelect.innerHTML = db.locales
      .map((l) => `<option value="${l.id}" ${l.id === prevVal ? "selected" : ""}>Local ${l.id} — ${l.nombre}</option>`)
      .join("");
  }

  const store = getStoreById(selectedMerchantStoreId);

  const tbody = document.getElementById("merchant-promos-tbody");
  const storePromos = db.promociones.filter((p) => p.local_id === selectedMerchantStoreId);

  if (storePromos.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" style="text-align:center; padding:1.25rem;">Este establecimiento no tiene promociones registradas.</td></tr>`;
  } else {
    tbody.innerHTML = storePromos
      .map(
        (p) => `
        <tr>
          <td>
            <strong>${p.titulo}</strong>
          </td>
          <td style="white-space:nowrap;">
            <span style="text-decoration:line-through; color:#94a3b8; font-size:0.78rem;">${formatCOP(p.precio_regular)}</span><br/>
            <strong style="color:#16a34a;">${formatCOP(p.precio_oferta)} (-${p.porcentaje_descuento}%)</strong>
          </td>
          <td>${getScheduleText(p)}</td>
          <td style="white-space:nowrap;"><strong>${p.stock_actual}</strong> de ${p.stock_maximo} cupos</td>
          <td><span class="status-tag status-${p.estado}">${p.estado}</span></td>
          <td>
            <div class="action-btns-cell">
              ${
                p.estado !== "ACTIVA"
                  ? `<button type="button" class="mini-action-btn" data-paction="ACTIVA" data-pid="${p.id}">Activar</button>`
                  : `<button type="button" class="mini-action-btn btn-act-pause" data-paction="PAUSADA" data-pid="${p.id}">Pausar</button>`
              }
              ${
                p.estado !== "VENCIDA"
                  ? `<button type="button" class="mini-action-btn" data-paction="VENCIDA" data-pid="${p.id}">Finalizar</button>`
                  : ""
              }
              <button type="button" class="mini-action-btn btn-act-stock" data-paction="STOCK" data-pid="${p.id}">+10 Cupos</button>
            </div>
          </td>
        </tr>
      `
      )
      .join("");

    tbody.querySelectorAll(".mini-action-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const pid = btn.dataset.pid;
        const action = btn.dataset.paction;
        const targetPromo = db.promociones.find((x) => x.id === pid);
        if (!targetPromo) return;

        if (action === "STOCK") {
          targetPromo.stock_actual += 10;
          targetPromo.stock_maximo += 10;
          if (targetPromo.estado === "AGOTADA") targetPromo.estado = "ACTIVA";
        } else {
          targetPromo.estado = action;
        }
        saveDatabase();
        renderAllViews();
      });
    });
  }

  const prodSelect = document.getElementById("promo-product-select");
  const storeProds = db.productos.filter((pr) => pr.local_id === selectedMerchantStoreId);
  if (prodSelect) {
    prodSelect.innerHTML = storeProds
      .map((pr) => `<option value="${pr.id}" data-price="${pr.precio_regular}">${pr.nombre} (${formatCOP(pr.precio_regular)})</option>`)
      .join("");
  }

  const prodListEl = document.getElementById("merchant-products-list");
  if (prodListEl) {
    prodListEl.innerHTML = storeProds
      .map(
        (pr) => `
        <div class="prod-item-card">
          <div>
            <strong>${pr.nombre}</strong>
            <div style="font-size:0.8rem; color:#475569;">${pr.descripcion}</div>
          </div>
          <strong style="color:#0f172a; white-space:nowrap;">${formatCOP(pr.precio_regular)}</strong>
        </div>
      `
      )
      .join("");
  }

  document.getElementById("store-edit-name").value = store.nombre;
  document.getElementById("store-edit-number").value = store.numero_local;
  document.getElementById("store-edit-phone").value = store.telefono;
  document.getElementById("store-edit-hours").value = store.horario;
  document.getElementById("store-edit-desc").value = store.descripcion;
}

function sendCouponToPOS(code, localId) {
  const input = document.getElementById("pos-code-input");
  const select = document.getElementById("cashier-local-select");
  if (input && select) {
    input.value = code;
    select.value = localId;
    document.getElementById("validador").scrollIntoView({ behavior: "smooth" });
    validateCouponTransaction(code, localId);
  }
}

function updateReceiptSummary(storeName, productTitle, regPrice, promoPrice, statusText) {
  const container = document.getElementById("pos-receipt-details");
  if (!container) return;
  const saved = Math.max(0, regPrice - promoPrice);
  const pct = regPrice > 0 ? Math.round((saved / regPrice) * 100) : 0;
  container.innerHTML = `
    <div class="receipt-row">
      <span>Establecimiento:</span>
      <strong>${storeName}</strong>
    </div>
    <div class="receipt-row">
      <span>Producto / Combo:</span>
      <strong>${productTitle}</strong>
    </div>
    <div class="receipt-row">
      <span>Estado de verificación:</span>
      <strong>${statusText}</strong>
    </div>
    <div class="receipt-row receipt-discount">
      <span>Ahorro aplicado con Nuvora:</span>
      <strong>-${formatCOP(saved)} (-${pct}%)</strong>
    </div>
    <div class="receipt-row receipt-total">
      <span>Valor a cobrar en caja:</span>
      <strong>${formatCOP(promoPrice)}</strong>
    </div>
  `;
}

function validateCouponTransaction(rawCode, cashierLocalId) {
  const code = rawCode.trim().toUpperCase();
  const screen = document.getElementById("pos-screen-result");
  const latencyMs = Math.floor(24 + Math.random() * 35);
  document.getElementById("last-tx-latency").textContent = `Respuesta: ${latencyMs} ms`;

  const coupon = db.cupones.find((c) => c.codigo_unico === code);
  const nowTime = new Date().toLocaleTimeString("es-CO", { hour: "2-digit", minute: "2-digit" });
  const store = getStoreById(cashierLocalId);

  if (!coupon) {
    playPosBeep(false);
    screen.className = "pos-screen-clean pos-clean-invalid";
    screen.innerHTML = `
      <div class="pos-clean-icon">⛔</div>
      <div class="pos-clean-content">
        <h4>Código No Encontrado</h4>
        <p>El cupón <strong>${code}</strong> no se encuentra registrado en el sistema.</p>
        <p>Solicita al visitante verificar el código en su billetera digital Nuvora.</p>
      </div>
    `;
    updateReceiptSummary(`${store.nombre} (Local ${store.id})`, "Código no válido", 0, 0, "No Encontrado");
    appendAuditLog(nowTime, code, `${store.nombre} (${cashierLocalId})`, "Rechazado • Código no existe", false);
    return;
  }

  if (coupon.local_id !== cashierLocalId) {
    playPosBeep(false);
    const ownerStore = getStoreById(coupon.local_id);
    screen.className = "pos-screen-clean pos-clean-invalid";
    screen.innerHTML = `
      <div class="pos-clean-icon">🚫</div>
      <div class="pos-clean-content">
        <h4>Cupón Emitido para Otro Establecimiento</h4>
        <p>El código <strong>${code}</strong> pertenece a <strong>${ownerStore.nombre} (Local ${coupon.local_id})</strong>.</p>
        <p>No puede canjearse en la caja de <strong>${store.nombre}</strong>.</p>
      </div>
    `;
    updateReceiptSummary(`${store.nombre} (Local ${store.id})`, coupon.titulo, coupon.precio_regular, coupon.precio_regular, `Corresponde al Local ${coupon.local_id}`);
    appendAuditLog(nowTime, code, `${store.nombre} (${cashierLocalId})`, `Rechazado • Pertenece al Local ${coupon.local_id}`, false);
    return;
  }

  if (coupon.estado === "REDIMIDO") {
    playPosBeep(false);
    screen.className = "pos-screen-clean pos-clean-invalid";
    screen.innerHTML = `
      <div class="pos-clean-icon">⚠️</div>
      <div class="pos-clean-content">
        <h4>Cupón Ya Utilizado Anteriormente</h4>
        <p>El código <strong>${code}</strong> ya fue canjeado (${coupon.detalle_estado}).</p>
        <p>Cada cupón QR es válido para un único uso en punto de venta.</p>
      </div>
    `;
    updateReceiptSummary(`${store.nombre} (Local ${store.id})`, coupon.titulo, coupon.precio_regular, coupon.precio_regular, "Ya fue canjeado");
    appendAuditLog(nowTime, code, `${store.nombre} (${cashierLocalId})`, "Rechazado • Intento de doble uso", false);
    return;
  }

  if (coupon.estado === "EXPIRADO") {
    playPosBeep(false);
    screen.className = "pos-screen-clean pos-clean-invalid";
    screen.innerHTML = `
      <div class="pos-clean-icon">⏰</div>
      <div class="pos-clean-content">
        <h4>Cupón con Vigencia Vencida</h4>
        <p>El código <strong>${code}</strong> superó el tiempo límite de 2 horas para su canje.</p>
        <p>El visitante puede generar un nuevo cupón si la oferta sigue activa.</p>
      </div>
    `;
    updateReceiptSummary(`${store.nombre} (Local ${store.id})`, coupon.titulo, coupon.precio_regular, coupon.precio_regular, "Tiempo expirado");
    appendAuditLog(nowTime, code, `${store.nombre} (${cashierLocalId})`, "Rechazado • Cupón vencido", false);
    return;
  }

  playPosBeep(true);
  coupon.estado = "REDIMIDO";
  coupon.detalle_estado = `Canjeado a las ${nowTime} en Local ${cashierLocalId}`;
  const discountSaved = coupon.precio_regular - coupon.precio_oferta;

  db.redenciones.unshift({
    id: db.redenciones.length + 1,
    cupon_id: coupon.id,
    codigo_unico: coupon.codigo_unico,
    local_id: cashierLocalId,
    monto_descontado: discountSaved
  });

  screen.className = "pos-screen-clean pos-clean-valid";
  screen.innerHTML = `
    <div class="pos-clean-icon">✅</div>
    <div class="pos-clean-content">
      <h4>Cupón Válido — Descuento Aprobado</h4>
      <p><strong>Visitante:</strong> ${coupon.cliente_nombre} • <strong>Código:</strong> ${coupon.codigo_unico}</p>
      <p><strong>Pedido:</strong> ${coupon.titulo}</p>
      <p style="font-size:1.05rem; margin-top:0.3rem;">
        <strong>Cobrar en Caja: ${formatCOP(coupon.precio_oferta)}</strong> (Ahorro: -${formatCOP(discountSaved)})
      </p>
    </div>
  `;

  updateReceiptSummary(`${store.nombre} (Local ${store.id})`, coupon.titulo, coupon.precio_regular, coupon.precio_oferta, "Aprobado y Canjeado");
  appendAuditLog(nowTime, code, `${store.nombre} (${cashierLocalId})`, `Canjeado con éxito • Ahorro -${formatCOP(discountSaved)}`, true);
  saveDatabase();
  renderAllViews();
}

function appendAuditLog(time, code, localText, resultText, isOk) {
  db.auditoria_logs.unshift({
    id: db.auditoria_logs.length + 1,
    timestamp: time,
    codigo: code,
    local_cajero: localText,
    resultado: resultText,
    exito: isOk
  });
  saveDatabase();
  renderAnalytics();
}

function renderAnalytics() {
  const totalIssued = db.metricas.emitidos_base + db.cupones.length;
  const totalRedeemed = db.metricas.redimidos_base + db.redenciones.length;
  const rate = ((totalRedeemed / totalIssued) * 100).toFixed(1);

  document.getElementById("kpi-views").textContent = db.metricas.visualizaciones.toLocaleString("es-CO");
  document.getElementById("kpi-issued").textContent = totalIssued;
  document.getElementById("kpi-redeemed").textContent = totalRedeemed;
  document.getElementById("kpi-conversion").textContent = `${rate}%`;

  const auditTbody = document.getElementById("audit-log-tbody");
  if (auditTbody) {
    auditTbody.innerHTML = db.auditoria_logs
      .slice(0, 8)
      .map((log) => {
        const cleanDetail = log.resultado.replace("•", "—");
        return `
        <tr>
          <td>${log.timestamp}</td>
          <td><strong>${log.codigo}</strong></td>
          <td>${log.local_cajero}</td>
          <td><span class="${log.exito ? "log-ok" : "log-err"}">${log.exito ? "Aprobado" : "Rechazado"}</span></td>
          <td>${cleanDetail}</td>
        </tr>
      `;
      })
      .join("");
  }
}

function renderSavedLeads() {
  const countEl = document.getElementById("leads-count");
  const listEl = document.getElementById("leads-list");
  if (!countEl || !listEl) return;
  countEl.textContent = db.solicitudes_contacto.length;
  listEl.innerHTML = db.solicitudes_contacto
    .map(
      (s) => `
      <div class="lead-item">
        <strong>${s.ticket} • ${s.nombre}</strong> (${s.rol})<br/>
        <span>${s.local} • ${s.correo} • ${s.fecha}</span>
      </div>
    `
    )
    .join("");
}

function setBudgetValue(val) {
  currentBudget = Math.max(5000, Number(val) || 20000);
  const slider = document.getElementById("budget-slider");
  const numInput = document.getElementById("budget-number-input");
  const display = document.getElementById("budget-display");
  if (slider) slider.value = Math.min(50000, currentBudget);
  if (numInput && document.activeElement !== numInput) numInput.value = currentBudget;
  if (display) display.textContent = formatCOP(currentBudget);

  document.querySelectorAll(".chip-btn").forEach((chip) => {
    chip.classList.toggle("active", Number(chip.dataset.budget) === currentBudget);
  });
}

function openModal(id) {
  const m = document.getElementById(id);
  if (m) {
    m.classList.add("open");
    m.setAttribute("aria-hidden", "false");
  }
}

function closeModal(id) {
  const m = document.getElementById(id);
  if (m) {
    m.classList.remove("open");
    m.setAttribute("aria-hidden", "true");
  }
}

function renderAllViews() {
  renderPromotions();
  renderStoresStrip();
  renderWallet();
  renderMerchantPanel();
  renderAnalytics();
  renderSavedLeads();
}

document.addEventListener("DOMContentLoaded", () => {
  renderAllViews();

  setInterval(() => {
    document.querySelectorAll(".live-coupon-timer").forEach((el) => {
      const exp = Number(el.dataset.exp);
      if (exp) {
        const rem = (exp - Date.now()) / 1000;
        el.textContent = formatSeconds(rem);
      }
    });

    const firstActive = db.cupones.find((c) => c.estado === "EMITIDO");
    if (firstActive && firstActive.expira_timestamp) {
      const rem = (firstActive.expira_timestamp - Date.now()) / 1000;
      const heroTimer = document.getElementById("hero-qr-timer");
      if (heroTimer) heroTimer.textContent = formatSeconds(rem);
    }
  }, 1000);

  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("nav-menu");
  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });
    navMenu.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.querySelectorAll(".nav-link").forEach((l) => l.classList.remove("active"));
        if (!link.classList.contains("nav-cta")) link.classList.add("active");
        navMenu.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  document.getElementById("budget-slider").addEventListener("input", (e) => {
    setBudgetValue(e.target.value);
    renderPromotions();
  });

  document.getElementById("budget-number-input").addEventListener("input", (e) => {
    setBudgetValue(e.target.value);
    renderPromotions();
  });

  document.querySelectorAll(".chip-btn").forEach((chip) => {
    chip.addEventListener("click", () => {
      setBudgetValue(chip.dataset.budget);
      renderPromotions();
    });
  });

  document.getElementById("search-input").addEventListener("input", (e) => {
    currentSearch = e.target.value;
    renderPromotions();
  });

  document.querySelectorAll(".cat-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      currentCategory = tab.dataset.cat;
      document.querySelectorAll(".cat-tab").forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      renderPromotions();
    });
  });

  document.querySelectorAll(".wallet-tab").forEach((wtab) => {
    wtab.addEventListener("click", () => {
      currentWalletTab = wtab.dataset.wtab;
      document.querySelectorAll(".wallet-tab").forEach((t) => t.classList.remove("active"));
      wtab.classList.add("active");
      renderWallet();
    });
  });

  document.getElementById("btn-test-hero-qr").addEventListener("click", () => {
    const code = document.getElementById("hero-qr-code-text").textContent;
    const cp = db.cupones.find((c) => c.codigo_unico === code) || db.cupones[0];
    sendCouponToPOS(cp.codigo_unico, cp.local_id);
  });

  document.getElementById("merchant-store-select").addEventListener("change", (e) => {
    selectedMerchantStoreId = e.target.value;
    renderMerchantPanel();
  });

  function switchMerchantTab(tabId) {
    document.querySelectorAll(".m-subtab").forEach((b) => b.classList.toggle("active", b.dataset.mtab === tabId));
    document.querySelectorAll(".merchant-pane").forEach((p) => p.classList.toggle("active", p.id === tabId));
  }

  document.querySelectorAll(".m-subtab").forEach((btn) => {
    btn.addEventListener("click", () => switchMerchantTab(btn.dataset.mtab));
  });

  document.getElementById("btn-goto-create-promo").addEventListener("click", () => {
    switchMerchantTab("tab-new-promo");
  });

  document.getElementById("promo-product-select").addEventListener("change", (e) => {
    const opt = e.target.selectedOptions[0];
    if (opt && opt.dataset.price) {
      const regPrice = Number(opt.dataset.price);
      document.getElementById("promo-reg-price").value = regPrice;
      document.getElementById("promo-offer-price").value = Math.round((regPrice * 0.7) / 500) * 500;
    }
  });

  document.getElementById("form-create-promo").addEventListener("submit", (e) => {
    e.preventDefault();
    const prodId = document.getElementById("promo-product-select").value;
    const title = document.getElementById("promo-title-input").value.trim();
    const desc = document.getElementById("promo-desc-input").value.trim();
    const regPrice = Number(document.getElementById("promo-reg-price").value);
    const offerPrice = Number(document.getElementById("promo-offer-price").value);
    const stockMax = Number(document.getElementById("promo-stock-max").value);
    const isFlash = document.getElementById("promo-is-flash").checked;
    const days = document.getElementById("promo-days").value.trim() || "Lun a Jue";
    const hStart = document.getElementById("promo-hour-start").value || "14:30";
    const hEnd = document.getElementById("promo-hour-end").value || "17:30";
    const initState = document.getElementById("promo-initial-state").value;

    const fb = document.getElementById("promo-create-feedback");
    if (!title || !desc || offerPrice >= regPrice) {
      fb.hidden = false;
      fb.className = "contact-feedback error";
      fb.textContent = "Verifica que el título esté completo y que el precio de oferta sea menor al precio normal.";
      return;
    }

    const newPromoId = "promo-" + (db.promociones.length + 1);
    const pct = Math.round(((regPrice - offerPrice) / regPrice) * 100);
    const storeCat =
      db.locales_categorias.find((lc) => lc.local_id === selectedMerchantStoreId)?.categoria_id || "comidas-rapidas";

    db.promociones.unshift({
      id: newPromoId,
      local_id: selectedMerchantStoreId,
      producto_id: prodId,
      titulo: title,
      descripcion: desc,
      precio_regular: regPrice,
      precio_oferta: offerPrice,
      porcentaje_descuento: pct,
      stock_maximo: stockMax,
      stock_actual: stockMax,
      es_relampago: isFlash,
      estado: initState,
      categoria: storeCat,
      imagen: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=700&q=80"
    });

    if (isFlash) {
      db.horarios_promocion.push({
        id: db.horarios_promocion.length + 1,
        promocion_id: newPromoId,
        dias: days,
        hora_inicio: hStart,
        hora_fin: hEnd
      });
    }

    saveDatabase();
    setBudgetValue(Math.max(currentBudget, offerPrice));
    renderAllViews();

    fb.hidden = false;
    fb.className = "contact-feedback success";
    fb.innerHTML = `✓ <strong>Promoción «${title}» publicada con éxito.</strong> Ya se encuentra visible en el catálogo del centro comercial.`;
    e.target.reset();
    setTimeout(() => switchMerchantTab("tab-promos"), 1100);
  });

  document.getElementById("form-add-product").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("prod-name").value.trim();
    const desc = document.getElementById("prod-desc").value.trim();
    const price = Number(document.getElementById("prod-price").value);
    if (!name || !desc || !price) return;

    db.productos.push({
      id: "prod-" + (db.productos.length + 1),
      local_id: selectedMerchantStoreId,
      nombre: name,
      descripcion: desc,
      precio_regular: price
    });
    saveDatabase();
    renderAllViews();
    e.target.reset();
  });

  document.getElementById("form-update-store").addEventListener("submit", (e) => {
    e.preventDefault();
    const store = getStoreById(selectedMerchantStoreId);
    store.nombre = document.getElementById("store-edit-name").value.trim();
    store.numero_local = document.getElementById("store-edit-number").value.trim();
    store.telefono = document.getElementById("store-edit-phone").value.trim();
    store.horario = document.getElementById("store-edit-hours").value.trim();
    store.descripcion = document.getElementById("store-edit-desc").value.trim();

    saveDatabase();
    renderAllViews();
    const fb = document.getElementById("store-profile-feedback");
    fb.hidden = false;
    fb.className = "contact-feedback success";
    fb.textContent = `✓ Información de ${store.nombre} actualizada correctamente.`;
  });

  document.getElementById("pos-validate-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const code = document.getElementById("pos-code-input").value;
    const localId = document.getElementById("cashier-local-select").value;
    validateCouponTransaction(code, localId);
  });

  document.querySelectorAll(".key-btn-clean").forEach((btn) => {
    btn.addEventListener("click", () => {
      const key = btn.dataset.key;
      const input = document.getElementById("pos-code-input");
      if (key === "CLEAR") {
        input.value = "";
      } else if (key === "SPP-") {
        input.value = "SPP-";
      } else if (input.value.length < 14) {
        input.value += key;
      }
      input.focus();
    });
  });

  document.getElementById("btn-toggle-keypad").addEventListener("click", () => {
    const kp = document.getElementById("pos-keypad");
    kp.style.display = kp.style.display === "none" ? "grid" : "none";
  });

  document.getElementById("btn-toggle-camera").addEventListener("click", async () => {
    const camBox = document.getElementById("camera-scanner-box");
    const videoEl = document.getElementById("camera-video");
    if (!camBox.hidden) {
      if (cameraStream) {
        cameraStream.getTracks().forEach((t) => t.stop());
        cameraStream = null;
      }
      camBox.hidden = true;
      return;
    }
    camBox.hidden = false;
    try {
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        cameraStream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } });
        videoEl.srcObject = cameraStream;
      }
    } catch (_) {}
  });

  document.querySelectorAll(".scenario-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const code = btn.dataset.code;
      const localId = btn.dataset.local;
      document.getElementById("pos-code-input").value = code;
      document.getElementById("cashier-local-select").value = localId;
      validateCouponTransaction(code, localId);
    });
  });

  document.getElementById("btn-export-audit").addEventListener("click", () => {
    const totalIssued = db.metricas.emitidos_base + db.cupones.length;
    const totalRedeemed = db.metricas.redimidos_base + db.redenciones.length;
    const rate = ((totalRedeemed / totalIssued) * 100).toFixed(1);
    const fechaHoy = new Date().toLocaleDateString("es-CO", { year: "numeric", month: "long", day: "numeric" });

    const rowsHtml = db.auditoria_logs
      .map((l, idx) => {
        const bgRow = idx % 2 === 0 ? "#FFFFFF" : "#F8FAFC";
        const estadoTxt = l.exito ? "APROBADO" : "RECHAZADO";
        const bgEstado = l.exito ? "#DCFCE7" : "#FEE2E2";
        const colorEstado = l.exito ? "#166534" : "#991B1B";
        const detalleLimpio = l.resultado.replace(/•/g, "—");
        return `
          <tr style="background-color:${bgRow};">
            <td style="padding:8px 12px; border:1px solid #CBD5E1; text-align:center; font-weight:bold; color:#0F172A;">${l.id}</td>
            <td style="padding:8px 12px; border:1px solid #CBD5E1; text-align:center; color:#334155;">${l.timestamp}</td>
            <td style="padding:8px 12px; border:1px solid #CBD5E1; text-align:center; font-family:Consolas,monospace; font-weight:bold; color:#EA580C;">${l.codigo}</td>
            <td style="padding:8px 12px; border:1px solid #CBD5E1; color:#0F172A; font-weight:600;">${l.local_cajero}</td>
            <td style="padding:8px 12px; border:1px solid #CBD5E1; text-align:center; font-weight:bold; background-color:${bgEstado}; color:${colorEstado};">${estadoTxt}</td>
            <td style="padding:8px 12px; border:1px solid #CBD5E1; color:#334155;">${detalleLimpio}</td>
          </tr>
        `;
      })
      .join("");

    const excelHtml = `
      <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">
      <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <style>
          body, table { font-family: Arial, sans-serif; font-size: 11pt; }
        </style>
      </head>
      <body>
        <table border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; width:100%;">
          <colgroup>
            <col width="70" />
            <col width="120" />
            <col width="145" />
            <col width="330" />
            <col width="135" />
            <col width="360" />
          </colgroup>
          <tr>
            <td colspan="6" style="background-color:#0F172A; color:#FFFFFF; font-size:14pt; font-weight:bold; padding:14px 16px; text-align:left;">
              NUVORA. — REPORTE OFICIAL DE VALIDACIONES Y CANJES QR EN PUNTO DE VENTA
            </td>
          </tr>
          <tr>
            <td colspan="6" style="background-color:#FFF7ED; color:#9A3412; font-size:10pt; font-weight:bold; padding:8px 16px; border-bottom:2px solid #EA580C;">
              Centro Comercial San Pedro Plaza (Neiva, Huila) • Fecha de corte: ${fechaHoy} • Cupones Emitidos: ${totalIssued} • Canjeados: ${totalRedeemed} • Efectividad: ${rate}%
            </td>
          </tr>
          <tr><td colspan="6" style="height:10px;"></td></tr>
          <tr style="background-color:#1E293B; color:#FFFFFF; font-weight:bold; text-align:center;">
            <th style="padding:10px 12px; border:1px solid #0F172A; background-color:#1E293B; color:#FFFFFF;">N.°</th>
            <th style="padding:10px 12px; border:1px solid #0F172A; background-color:#1E293B; color:#FFFFFF;">Hora</th>
            <th style="padding:10px 12px; border:1px solid #0F172A; background-color:#1E293B; color:#FFFFFF;">Código QR</th>
            <th style="padding:10px 12px; border:1px solid #0F172A; background-color:#1E293B; color:#FFFFFF;">Establecimiento Comercial</th>
            <th style="padding:10px 12px; border:1px solid #0F172A; background-color:#1E293B; color:#FFFFFF;">Estado</th>
            <th style="padding:10px 12px; border:1px solid #0F172A; background-color:#1E293B; color:#FFFFFF;">Detalle de la Operación</th>
          </tr>
          ${rowsHtml}
        </table>
      </body>
      </html>
    `;

    const blob = new Blob(["\uFEFF" + excelHtml], { type: "application/vnd.ms-excel;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Reporte_Canjes_Nuvora_SanPedroPlaza.xls";
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  });

  document.getElementById("modal-download-qr").addEventListener("click", () => {
    const canvas = document.getElementById("modal-qr-canvas");
    if (!canvas) return;
    const link = document.createElement("a");
    link.download = `Cupon_Nuvora_${activeModalCouponCode}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  });

  [
    ["modal-close-btn", "qr-modal"],
    ["smodal-close-btn", "store-modal"]
  ].forEach(([btnId, modalId]) => {
    const b = document.getElementById(btnId);
    const m = document.getElementById(modalId);
    if (b && m) {
      b.addEventListener("click", () => closeModal(modalId));
      m.addEventListener("click", (e) => {
        if (e.target === m) closeModal(modalId);
      });
    }
  });

  document.querySelectorAll(".journey-step-card").forEach((card) => {
    card.addEventListener("click", () => {
      document.querySelectorAll(".journey-step-card").forEach((c) => c.classList.remove("active"));
      card.classList.add("active");
    });
  });

  document.getElementById("contact-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("contact-name").value.trim();
    const email = document.getElementById("contact-email").value.trim();
    const phone = document.getElementById("contact-phone").value.trim();
    const role = document.getElementById("contact-role").value;
    const local = document.getElementById("contact-local").value.trim() || "Por asignar";
    const message = document.getElementById("contact-message").value.trim();
    const habeas = document.getElementById("contact-habeas").checked;
    const feedbackEl = document.getElementById("contact-feedback");

    if (!name || !email || !phone || !role || !message || !habeas) {
      feedbackEl.hidden = false;
      feedbackEl.className = "contact-feedback error";
      feedbackEl.textContent = "Por favor completa todos los campos obligatorios (*) y autoriza el tratamiento de datos personales.";
      return;
    }

    const ticketId = "NUV-" + Math.floor(100000 + Math.random() * 900000);
    db.solicitudes_contacto.unshift({
      ticket: ticketId,
      nombre: name,
      rol: role,
      local: local,
      correo: email,
      fecha: new Date().toLocaleDateString("es-CO")
    });
    saveDatabase();
    renderSavedLeads();

    feedbackEl.hidden = false;
    feedbackEl.className = "contact-feedback success";
    feedbackEl.innerHTML = `✓ <strong>¡Solicitud enviada con éxito (${ticketId})!</strong> Gracias, <strong>${name}</strong>. Tu registro ya aparece en la lista de solicitudes.`;
    e.target.reset();
  });
});
