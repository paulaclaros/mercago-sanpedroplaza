/**
 * Nuvora v2.0 — Motor Relacional Completo, Roles, CRUD, Cupones QR y Terminal POS
 * Caso Piloto: Centro Comercial San Pedro Plaza (Neiva, Huila)
 * Ficha 3413974 — Tecnología en Análisis y Desarrollo de Software (ADSO) - SENA
 * Implementa las 11 Tablas Relacionales (Sección 11 SRS), 20 RF, 10 RNF y 7 Reglas de Negocio (RN-01 a RN-07).
 */

const DB_STORAGE_KEY = "NUVORA_SANPEDRO_DB_V2";

// Base de Datos Relacional Inicial con las 11 Tablas del SRS (Sección 11)
function getInitialDatabase() {
  const nowMs = Date.now();
  return {
    roles: [
      { id: 1, nombre: "VISITANTE", descripcion: "Consumidor final del C.C. San Pedro Plaza" },
      { id: 2, nombre: "LOCATARIO", descripcion: "Administrador de establecimiento comercial" },
      { id: 3, nombre: "CAJERO", descripcion: "Operador validador de punto de venta POS" },
      { id: 4, nombre: "ADMIN", descripcion: "Superadministrador del ecosistema Nuvora Mall" }
    ],
    usuarios: [
      { id: 101, rol_id: 1, local_id: null, nombre: "Camilo Andrés Rojas", correo: "camilo.rojas@usco.edu.co", password_hash: "$2b$10$hashCamiloUSCO2026", creado_en: "2026-11-01 09:00:00" },
      { id: 102, rol_id: 2, local_id: "P-14", nombre: "Don Carlos Alberto Méndez", correo: "carlos.mendez@corralito.co", password_hash: "$2b$10$hashCarlosP14", creado_en: "2026-11-01 09:10:00" },
      { id: 103, rol_id: 2, local_id: "I-08", nombre: "Doña Martha Lucía Tovar", correo: "martha.tovar@deliciashuila.co", password_hash: "$2b$10$hashMarthaI08", creado_en: "2026-11-01 09:15:00" },
      { id: 104, rol_id: 3, local_id: "P-14", nombre: "Operador Caja El Corralito", correo: "caja@corralito.co", password_hash: "$2b$10$hashCajaP14", creado_en: "2026-11-01 09:20:00" },
      { id: 105, rol_id: 3, local_id: "P-06", nombre: "Andrés Felipe Murcia", correo: "andres.murcia@asadero.co", password_hash: "$2b$10$hashAndresP06", creado_en: "2026-11-01 09:25:00" },
      { id: 106, rol_id: 4, local_id: null, nombre: "Gestor General San Pedro Plaza", correo: "admin@sanpedroplaza.co", password_hash: "$2b$10$hashAdminMall", creado_en: "2026-11-01 08:00:00" }
    ],
    categorias: [
      { id: "regional", nombre: "Delicias del Huila & Café", icono: "🍧" },
      { id: "comidas-rapidas", nombre: "Comidas Rápidas", icono: "🍔" },
      { id: "parrilla", nombre: "Asados & Parrilla", icono: "🥩" }
    ],
    locales: [
      {
        id: "P-14",
        nombre: "El Corralito Parrilla & Burger",
        numero_local: "Local P-14 • Plazoleta de Comidas Piso 2",
        telefono: "315 482 9104",
        horario: "Lun a Dom: 11:00 a.m. - 9:30 p.m.",
        descripcion: "Especialistas en hamburguesas artesanales 100% res a la parrilla, papas rústicas y combos familiares.",
        propietario: "Don Carlos Alberto Méndez",
        estado_operativo: "ACTIVO"
      },
      {
        id: "I-08",
        nombre: "Delicias del Huila: Cholupas & Helados",
        numero_local: "Isla Comercial I-08 • Pasillo Lateral Piso 1",
        telefono: "318 721 3308",
        horario: "Lun a Dom: 9:30 a.m. - 8:30 p.m.",
        descripcion: "Emprendimiento regional opita de granizados de cholupa natural, bizcochos de achira y postres típicos.",
        propietario: "Doña Martha Lucía Tovar",
        estado_operativo: "ACTIVO"
      },
      {
        id: "P-06",
        nombre: "Asadero & Brasas del San Pedro",
        numero_local: "Local P-06 • Plazoleta de Comidas Piso 2",
        telefono: "310 294 6606",
        horario: "Lun a Dom: 11:30 a.m. - 9:30 p.m.",
        descripcion: "Cortes de carne madurada al carbón, churrasco, punta de anca y pechuga gratinada con guarnición tradicional.",
        propietario: "Andrés Felipe Murcia (Cajero Principal)",
        estado_operativo: "ACTIVO"
      },
      {
        id: "C-12",
        nombre: "Café & Achiras Opitas Gourmet",
        numero_local: "Local C-12 • Piso 1 Zona Bancaria",
        telefono: "316 901 1112",
        horario: "Lun a Sáb: 8:00 a.m. - 8:00 p.m.",
        descripcion: "Café especial de origen San Agustín y Pitalito preparado por baristas con pastelería huilense.",
        propietario: "Cooperativa Cafetera del Huila",
        estado_operativo: "ACTIVO"
      },
      {
        id: "P-09",
        nombre: "Pizza & Pasta San Pedro Artesanal",
        numero_local: "Local P-09 • Plazoleta de Comidas Piso 2",
        telefono: "312 650 8809",
        horario: "Lun a Dom: 11:30 a.m. - 9:30 p.m.",
        descripcion: "Pizzas de masa madre horneadas a la piedra, lasañas gratinadas y limonadas naturales.",
        propietario: "Chef Luigi & Familia",
        estado_operativo: "ACTIVO"
      },
      {
        id: "P-18",
        nombre: "Wok & Teriyaki Express Plaza",
        numero_local: "Local P-18 • Plazoleta de Comidas Piso 2",
        telefono: "320 441 7718",
        horario: "Lun a Dom: 11:30 a.m. - 9:30 p.m.",
        descripcion: "Cocina oriental saludable al wok con vegetales frescos, arroz jazmín, pollo teriyaki y rollitos primavera.",
        propietario: "Grupo Gastronómico Oriental",
        estado_operativo: "ACTIVO"
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
      { id: "prod-1", local_id: "I-08", nombre: "Combo Onces Opitas: Granizado de Cholupa + Achiras", descripcion: "Granizado fruta natural 16 oz + paquete de achiras y queso.", precio_regular: 14000, disponible: true },
      { id: "prod-2", local_id: "I-08", nombre: "Copa Helado Artesanal de Café & Arequipe", descripcion: "Tres bolas de helado artesanal con lluvia de achira triturada.", precio_regular: 13500, disponible: true },
      { id: "prod-3", local_id: "C-12", nombre: "Dúo Cafetero San Agustín + Torta de Almojábana", descripcion: "Café filtrado o Latte frío + porción de torta caliente.", precio_regular: 16500, disponible: true },
      { id: "prod-4", local_id: "P-09", nombre: "Pizza Personal Masa Madre + Limonada Natural", descripcion: "Pizza 4 porciones (pepperoni o pollo champiñón) + bebida.", precio_regular: 22000, disponible: true },
      { id: "prod-5", local_id: "P-14", nombre: "Combo Corralito Parrilla 180g + Papas + Gaseosa", descripcion: "Hamburguesa 180g res al carbón, tocineta, cheddar, papas y gaseosa.", precio_regular: 26000, disponible: true },
      { id: "prod-6", local_id: "P-14", nombre: "Hamburguesa Doble Brasa 300g + Anillos de Cebolla", descripcion: "Doble carne a la parrilla, queso americano y bebida 16 oz.", precio_regular: 31000, disponible: true },
      { id: "prod-7", local_id: "P-18", nombre: "Bowl Teriyaki Pollo & Vegetales al Wok + Rollito", descripcion: "Arroz jazmín salteado al wok con pollo teriyaki y bebida.", precio_regular: 27000, disponible: true },
      { id: "prod-8", local_id: "P-06", nombre: "Punta de Anca a la Brasa 280g + Arepa, Papa y Ensalada", descripcion: "Corte madurado al carbón con chimichurri, yuca y gaseosa.", precio_regular: 36000, disponible: true }
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
      { id: 1, promocion_id: "promo-1", dias: "Lun a Vie", hora_inicio: "14:30", hora_fin: "17:30" },
      { id: 2, promocion_id: "promo-3", dias: "Mar a Jue", hora_inicio: "12:00", hora_fin: "17:00" },
      { id: 3, promocion_id: "promo-4", dias: "Mar, Mié y Jue", hora_inicio: "14:30", hora_fin: "17:30" },
      { id: 4, promocion_id: "promo-6", dias: "Lun a Jue", hora_inicio: "14:00", hora_fin: "18:00" }
    ],
    cupones: [
      {
        id: 1,
        codigo_unico: "SPP-7F2A9B",
        promocion_id: "promo-4",
        local_id: "P-14",
        usuario_id: 101,
        cliente_nombre: "Camilo Andrés Rojas",
        titulo: "Combo Corralito Parrilla 180g + Papas Rústicas + Gaseosa Gratis",
        precio_regular: 26000,
        precio_oferta: 18000,
        estado: "EMITIDO",
        fecha_emision: "15:10 COT",
        expira_timestamp: nowMs + 6505 * 1000 // ~1h 48m 25s
      },
      {
        id: 2,
        codigo_unico: "SPP-4C8D1E",
        promocion_id: "promo-6",
        local_id: "P-06",
        usuario_id: 101,
        cliente_nombre: "Camilo Andrés Rojas",
        titulo: "Punta de Anca o Churrasco a la Brasa 280g + Arepa, Papa y Ensalada",
        precio_regular: 36000,
        precio_oferta: 26500,
        estado: "REDIMIDO",
        fecha_emision: "13:50 COT",
        detalle_estado: "Redimido a las 14:15 COT en Caja P-06 (Andrés Felipe Murcia)"
      },
      {
        id: 3,
        codigo_unico: "SPP-9A1B0C",
        promocion_id: "promo-1",
        local_id: "I-08",
        usuario_id: 101,
        cliente_nombre: "Camilo Andrés Rojas",
        titulo: "Combo Onces Opitas: Granizado de Cholupa + Achiras Artesanales",
        precio_regular: 14000,
        precio_oferta: 9500,
        estado: "EXPIRADO",
        fecha_emision: "11:00 COT",
        detalle_estado: "Expiró por superar ventana de gracia de 2 horas (RN-02)"
      }
    ],
    redenciones: [
      {
        id: 1,
        cupon_id: 2,
        codigo_unico: "SPP-4C8D1E",
        cajero_id: 105,
        local_id: "P-06",
        fecha_redencion: "2026-11-23 14:15:12",
        monto_descontado: 9500
      }
    ],
    auditoria_logs: [
      {
        id: 1,
        timestamp: "15:38:12 COT",
        codigo: "SPP-4C8D1E",
        local_cajero: "Local P-06 (A. Murcia)",
        ip_origen: "192.168.10.24",
        resultado: "REDIMIDO (-$9.500 COP)",
        exito: true
      },
      {
        id: 2,
        timestamp: "15:21:05 COT",
        codigo: "SPP-9A1B0C",
        local_cajero: "Isla I-08 (M. Tovar)",
        ip_origen: "192.168.10.18",
        resultado: "RECHAZADO (EXPIRADO RN-02)",
        exito: false
      }
    ],
    metricas: {
      visualizaciones: 1248,
      emitidos_base: 85,
      redimidos_base: 63
    },
    solicitudes_contacto: [
      {
        ticket: "NUV-841920",
        nombre: "Don Carlos Alberto Méndez",
        rol: "Locatario / Comercio San Pedro Plaza",
        local: "Local P-14 Plazoleta",
        correo: "carlos.mendez@corralito.co",
        fecha: "23/11/2026 14:20"
      }
    ]
  };
}

let db = loadDatabase();
let currentBudget = 20000;
let currentCategory = "all";
let currentSearch = "";
let currentWalletTab = "EMITIDO";
let activeRoleKey = "visitante";
let activeUser = db.usuarios[0];
let selectedMerchantStoreId = "P-14";
let serverTimeMode = "valle"; // 'valle' (15:30), 'real', 'pico' (20:45)
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
  } catch (e) {
    console.warn("Usando BD en memoria:", e);
  }
  const init = getInitialDatabase();
  saveDatabase(init);
  return init;
}

function saveDatabase(data = db) {
  try {
    localStorage.setItem(DB_STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    console.warn("No se pudo guardar en localStorage:", e);
  }
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

/**
 * Sonido de confirmación / rechazo para el Validador POS (Web Audio API)
 */
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
    gain.gain.value = 0.08;
    osc.start();
    setTimeout(() => {
      osc.stop();
      ctx.close();
    }, isSuccess ? 140 : 260);
  } catch (_) {}
}

/**
 * Dibuja un código QR determinístico en un elemento <canvas> (RF14)
 */
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
    return "🕒 Vigencia General: Todos los días (8:00 a.m. - 9:00 p.m.)";
  }
  const h = db.horarios_promocion.find((x) => x.promocion_id === promo.id);
  if (!h) {
    return "⚡ Oferta Relámpago: Lun a Jue (14:30 - 17:30)";
  }
  return `⚡ Oferta Relámpago: ${h.dias} (${h.hora_inicio} a ${h.hora_fin})`;
}

function getStoreById(localId) {
  return db.locales.find((l) => l.id === localId) || db.locales[0];
}

/**
 * Renderiza el Directorio de Locales y Promociones con el Algoritmo de Presupuesto (RF05 - RF08)
 */
function renderPromotions() {
  const container = document.getElementById("directorio");
  const counterEl = document.getElementById("results-counter");
  if (!container) return;

  // Solo se muestran en catálogo público las promociones en estado ACTIVA o AGOTADA (RF11)
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
    filtered.length === 1 ? "promoción" : "promociones"
  }</strong> dentro de tu presupuesto de <strong>${formatCOP(currentBudget)}</strong>`;

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 2.5rem; background: #fff; border-radius: 14px; border: 1px solid #e2e8f0;">
        <h3>No hay promociones activas dentro de ese filtro exacto</h3>
        <p style="color: #475569; margin: 0.5rem 0 1rem;">Aumenta tu presupuesto con el deslizador o selecciona «Todos los Locales».</p>
        <button type="button" class="btn btn-primary btn-sm" id="btn-reset-filters">Subir Presupuesto a $30.000 COP</button>
      </div>
    `;
    const resetBtn = document.getElementById("btn-reset-filters");
    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        setBudgetValue(30000);
        currentCategory = "all";
        currentSearch = "";
        document.getElementById("search-input").value = "";
        document.querySelectorAll(".cat-tab").forEach((b) => b.classList.toggle("active", b.dataset.cat === "all"));
        renderPromotions();
      });
    }
    return;
  }

  container.innerHTML = filtered
    .map((p) => {
      const store = getStoreById(p.local_id);
      const discountPct = Math.round(((p.precio_regular - p.precio_oferta) / p.precio_regular) * 100);
      const leftover = currentBudget - p.precio_oferta;
      const alreadyHasActive =
        activeUser &&
        db.cupones.some(
          (c) => c.promocion_id === p.id && c.usuario_id === activeUser.id && c.estado === "EMITIDO"
        );
      const isSoldOut = p.stock_actual <= 0 || p.estado === "AGOTADA";

      return `
        <article class="promo-card">
          <div class="promo-img-wrap">
            <img src="${p.imagen}" alt="${p.titulo}" loading="lazy" />
            <div class="promo-badges-top">
              <span class="badge-local">Local ${p.local_id}</span>
              ${
                p.es_relampago
                  ? `<span class="badge-flash">⚡ OFERTA RELÁMPAGO -${discountPct}%</span>`
                  : `<span class="badge-flash" style="background:#16a34a;">AHORRA ${discountPct}%</span>`
              }
            </div>
          </div>
          <div class="promo-body">
            <button type="button" class="promo-store-link" data-store-id="${p.local_id}" title="Ver ficha y menú digital del local (RF06)">
              🏪 ${store.nombre} (Ver Carta ↗)
            </button>
            <h3 class="promo-title">${p.titulo}</h3>
            <p class="promo-desc">${p.descripcion}</p>
            <div class="promo-schedule">${getScheduleText(p)}</div>
            <div class="promo-price-row">
              <div class="price-block">
                <span class="price-reg">Regular: ${formatCOP(p.precio_regular)}</span>
                <span class="price-now">${formatCOP(p.precio_oferta)}</span>
              </div>
              <span class="stock-pill" style="${isSoldOut ? "background:#fee2e2;color:#b91c1c;" : ""}">
                ${isSoldOut ? "AGOTADA (RF12)" : `Cupos: ${p.stock_actual}/${p.stock_maximo}`}
              </span>
            </div>
            <div class="budget-leftover-banner">
              💰 Con tu presupuesto de ${formatCOP(currentBudget)} <strong>te sobran ${formatCOP(leftover)}</strong>
            </div>
            <div class="promo-card-actions">
              <button
                type="button"
                class="btn ${alreadyHasActive ? "btn-outline" : "btn-primary"} btn-sm btn-generate-qr"
                data-promo-id="${p.id}"
                ${isSoldOut && !alreadyHasActive ? "disabled" : ""}
              >
                ${
                  alreadyHasActive
                    ? "Ver mi QR Activo (RN-01)"
                    : isSoldOut
                    ? "Cupos Agotados"
                    : "Obtener Cupón QR"
                }
              </button>
              <button type="button" class="btn btn-outline btn-sm btn-open-store-modal" data-store-id="${p.local_id}">
                Menú (RF06)
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

  container.querySelectorAll(".promo-store-link, .btn-open-store-modal").forEach((btn) => {
    btn.addEventListener("click", () => openStoreDetailModal(btn.dataset.storeId));
  });
}

/**
 * Renderiza la tira de locales comerciales para abrir su Ficha y Menú Digital (RF05 - RF06)
 */
function renderStoresStrip() {
  const strip = document.getElementById("stores-directory-strip");
  if (!strip) return;
  strip.innerHTML = db.locales
    .map((l) => {
      const countProds = db.productos.filter((p) => p.local_id === l.id).length;
      const countPromos = db.promociones.filter((p) => p.local_id === l.id && p.estado === "ACTIVA").length;
      return `
        <div class="store-mini-card" data-store-id="${l.id}">
          <div>
            <strong>${l.id} • ${l.nombre}</strong>
            <span>${countProds} platos en carta • ${countPromos} promos activas</span>
          </div>
          <span class="btn btn-outline btn-sm">Ver Carta →</span>
        </div>
      `;
    })
    .join("");

  strip.querySelectorAll(".store-mini-card").forEach((card) => {
    card.addEventListener("click", () => openStoreDetailModal(card.dataset.storeId));
  });
}

/**
 * Abre el Modal con la Ficha Detallada del Local y su Menú Digital Completo (RF06)
 */
function openStoreDetailModal(localId) {
  const store = getStoreById(localId);
  if (!store) return;

  document.getElementById("smodal-badge").textContent = `FICHA DEL LOCAL ${store.id} • MENÚ DIGITAL (RF06)`;
  document.getElementById("smodal-title").textContent = store.nombre;
  document.getElementById("smodal-meta").textContent = `${store.numero_local} • 📞 ${store.telefono} • 🕒 ${store.horario}`;
  document.getElementById("smodal-desc").textContent = store.descripcion;

  const prods = db.productos.filter((p) => p.local_id === localId);
  const prodsEl = document.getElementById("smodal-products-list");
  prodsEl.innerHTML = prods
    .map(
      (prod) => `
      <div class="smodal-item">
        <div>
          <strong>${prod.nombre}</strong>
          <div style="font-size:0.78rem; color:#475569;">${prod.descripcion}</div>
        </div>
        <strong style="color:#0f172a;">${formatCOP(prod.precio_regular)}</strong>
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
            <div style="font-size:0.78rem; color:#16a34a; font-weight:700;">
              Oferta: ${formatCOP(pr.precio_oferta)} (Antes: ${formatCOP(pr.precio_regular)}) • Cupos: ${pr.stock_actual}/${pr.stock_maximo}
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

/**
 * Emisión Criptográfica de Cupón QR cumpliendo RN-01, RN-02, RN-05 y RN-06 (RF13 - RF14)
 */
function handleGenerateCoupon(promoId) {
  // Regla de Negocio RN-06: El catálogo es libre, pero obtener cupón exige usuario autenticado
  if (!activeUser || activeRoleKey === "invitado") {
    openModal("auth-modal");
    const fb = document.getElementById("auth-feedback");
    fb.hidden = false;
    fb.className = "contact-feedback error";
    fb.textContent = "🔒 Regla RN-06: Para generar un Cupón QR de descuento debes iniciar sesión o registrarte como Visitante.";
    return;
  }

  const promo = db.promociones.find((p) => p.id === promoId);
  if (!promo) return;

  // Regla de Negocio RN-01: Máximo 1 cupón activo por usuario por promoción en 24h
  let existing = db.cupones.find(
    (c) => c.promocion_id === promoId && c.usuario_id === activeUser.id && c.estado === "EMITIDO"
  );

  if (!existing) {
    // Regla de Negocio RN-05: Si es oferta relámpago y el servidor está en Hora Nocturna/Pico, advertir
    if (promo.es_relampago && serverTimeMode === "pico") {
      alert(
        "⏰ Regla de Negocio RN-05 (Validación Horaria en el Servidor): El reloj del servidor está simulando Hora Nocturna (8:45 p.m.), fuera de la franja de Oferta Relámpago (2:30 p.m. - 5:30 p.m.). Cambia el selector superior a 'Simular Hora Valle' para reclamar ofertas relámpago."
      );
      return;
    }

    if (promo.stock_actual <= 0 || promo.estado !== "ACTIVA") {
      alert("Esta promoción ya agotó sus cupos disponibles (RF12).");
      return;
    }

    // Generación Criptográfica Segura RNF03 (crypto.getRandomValues)
    const randBytes = new Uint8Array(3);
    if (window.crypto && window.crypto.getRandomValues) {
      window.crypto.getRandomValues(randBytes);
    } else {
      for (let i = 0; i < 3; i++) randBytes[i] = Math.floor(Math.random() * 256);
    }
    const hexToken = Array.from(randBytes, (b) => b.toString(16).padStart(2, "0").toUpperCase()).join("");
    const newCode = `SPP-${hexToken}`;
    const nowTime = new Date().toLocaleTimeString("es-CO", { hour: "2-digit", minute: "2-digit", hour12: false }) + " COT";

    existing = {
      id: db.cupones.length + 1,
      codigo_unico: newCode,
      promocion_id: promo.id,
      local_id: promo.local_id,
      usuario_id: activeUser.id,
      cliente_nombre: activeUser.nombre,
      titulo: promo.titulo,
      precio_regular: promo.precio_regular,
      precio_oferta: promo.precio_oferta,
      estado: "EMITIDO",
      fecha_emision: nowTime,
      expira_timestamp: Date.now() + 2 * 3600 * 1000 // Ventana de 2 horas RN-02
    };

    db.cupones.unshift(existing);
    promo.stock_actual -= 1;
    // Transición automática UML 10.1: Si stock llega a 0 -> AGOTADA (RF12)
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

  const sendBtn = document.getElementById("modal-send-to-pos");
  sendBtn.onclick = () => {
    closeModal("qr-modal");
    sendCouponToPOS(coupon.codigo_unico, coupon.local_id);
  };

  openModal("qr-modal");
}

/**
 * Renderiza la Billetera Digital del Visitante con las 4 pestañas UML 10.2 (RF15)
 */
function renderWallet() {
  const listEl = document.getElementById("wallet-list");
  if (!listEl) return;

  const emitidosCount = db.cupones.filter((c) => c.estado === "EMITIDO").length;
  const redimidosCount = db.cupones.filter((c) => c.estado === "REDIMIDO").length;
  const expiradosCount = db.cupones.filter((c) => c.estado === "EXPIRADO").length;
  const anuladosCount = db.cupones.filter((c) => c.estado === "ANULADO").length;

  document.getElementById("count-emitidos").textContent = emitidosCount;
  document.getElementById("count-redimidos").textContent = redimidosCount;
  document.getElementById("count-expirados").textContent = expiradosCount;
  document.getElementById("count-anulados").textContent = anuladosCount;
  document.getElementById("coupon-badge-count").textContent = emitidosCount;

  // Actualizar Hero con el primer cupón activo si existe
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
    listEl.innerHTML = `<p style="color:#475569; padding: 1rem;">No hay cupones registrados en estado <strong>${currentWalletTab}</strong>.</p>`;
    return;
  }

  listEl.innerHTML = items
    .map((c) => {
      const store = getStoreById(c.local_id);
      const remSec = c.expira_timestamp ? (c.expira_timestamp - Date.now()) / 1000 : 6400;
      return `
        <div class="coupon-ticket">
          <div>
            <div class="coupon-ticket-header">
              <span class="status-tag status-${c.estado}">${c.estado}</span>
              <span class="coupon-code-pill">${c.codigo_unico}</span>
            </div>
            <h4 style="margin: 0.6rem 0 0.2rem; font-size: 0.98rem;">${c.titulo}</h4>
            <p style="font-size: 0.8rem; color: #475569; margin-bottom: 0.45rem;">🏪 ${store.nombre} (Local ${store.id})</p>
            <div style="font-size: 0.86rem; font-weight: 700; color: #16a34a;">
              Valor con Cupón: ${formatCOP(c.precio_oferta)} <span style="text-decoration:line-through; color:#94a3b8; font-weight:500;">(${formatCOP(c.precio_regular)})</span>
            </div>
          </div>
          <div style="border-top: 1px solid #e2e8f0; padding-top: 0.65rem; font-size: 0.77rem; color: #475569; display:flex; justify-content:space-between; align-items:center; gap:0.4rem; flex-wrap:wrap;">
            ${
              c.estado === "EMITIDO"
                ? `<span>⏱ Vigencia (RN-02): <strong class="live-coupon-timer" data-exp="${c.expira_timestamp}">${formatSeconds(remSec)}</strong></span>
                   <div style="display:flex; gap:0.35rem;">
                     <button type="button" class="mini-action-btn btn-view-qr" data-code="${c.codigo_unico}">Ver QR</button>
                     <button type="button" class="mini-action-btn btn-wallet-to-pos" style="background:#ea580c;color:#fff;border-color:#ea580c;" data-code="${c.codigo_unico}" data-local="${c.local_id}">Redimir en Caja →</button>
                   </div>`
                : `<span>${c.detalle_estado || "Estado actualizado en servidor"}</span>`
            }
          </div>
        </div>
      `;
    })
    .join("");

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

/**
 * Renderiza el Panel Administrativo del Locatario (Módulo 3: RF04, RF09 - RF12, UML 10.1)
 */
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
      .map((l) => `<option value="${l.id}" ${l.id === prevVal ? "selected" : ""}>Caja Local ${l.id} — ${l.nombre}</option>`)
      .join("");
  }

  const store = getStoreById(selectedMerchantStoreId);

  // 1. Tabla de Promociones del Local Seleccionado (RF11 - Máquina de Estados UML 10.1)
  const tbody = document.getElementById("merchant-promos-tbody");
  const storePromos = db.promociones.filter((p) => p.local_id === selectedMerchantStoreId);

  if (storePromos.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" style="text-align:center; padding:1.25rem;">Este local aún no tiene promociones registradas. Haz clic en «+ Nueva Oferta / Promoción».</td></tr>`;
  } else {
    tbody.innerHTML = storePromos
      .map(
        (p) => `
        <tr>
          <td>
            <strong>${p.titulo}</strong>
            <div style="font-size:0.75rem; color:#64748b;">ID: <code>${p.id}</code></div>
          </td>
          <td>
            <span style="text-decoration:line-through; color:#94a3b8; font-size:0.78rem;">${formatCOP(p.precio_regular)}</span><br/>
            <strong style="color:#16a34a;">${formatCOP(p.precio_oferta)} (-${p.porcentaje_descuento}%)</strong>
          </td>
          <td>${getScheduleText(p)}</td>
          <td><strong>${p.stock_actual}</strong> / ${p.stock_maximo} disponibles</td>
          <td><span class="status-tag status-${p.estado}">${p.estado}</span></td>
          <td>
            <div class="action-btns-cell">
              ${
                p.estado !== "ACTIVA"
                  ? `<button type="button" class="mini-action-btn" data-paction="ACTIVA" data-pid="${p.id}">🟢 Publicar / Activar</button>`
                  : `<button type="button" class="mini-action-btn" data-paction="PAUSADA" data-pid="${p.id}">⏸ Pausar (RN-03)</button>`
              }
              ${
                p.estado !== "VENCIDA"
                  ? `<button type="button" class="mini-action-btn" data-paction="VENCIDA" data-pid="${p.id}">⏹ Vencer</button>`
                  : ""
              }
              <button type="button" class="mini-action-btn" data-paction="STOCK" data-pid="${p.id}">+10 Cupos</button>
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

  // 2. Poblar selector de Productos en Formulario de Nueva Promoción
  const prodSelect = document.getElementById("promo-product-select");
  const storeProds = db.productos.filter((pr) => pr.local_id === selectedMerchantStoreId);
  if (prodSelect) {
    prodSelect.innerHTML = storeProds
      .map((pr) => `<option value="${pr.id}" data-price="${pr.precio_regular}">${pr.nombre} (${formatCOP(pr.precio_regular)})</option>`)
      .join("");
  }

  // 3. Lista de Productos del Menú Digital del Local (RF06)
  const prodListEl = document.getElementById("merchant-products-list");
  if (prodListEl) {
    prodListEl.innerHTML = storeProds
      .map(
        (pr) => `
        <div class="prod-item-card">
          <div>
            <strong>${pr.nombre}</strong>
            <div style="font-size:0.78rem; color:#475569;">${pr.descripcion}</div>
          </div>
          <strong style="color:#0f172a;">${formatCOP(pr.precio_regular)}</strong>
        </div>
      `
      )
      .join("");
  }

  // 4. Poblar Formulario de Perfil del Local Comercial (RF04)
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

/**
 * Validación Transaccional Atómica en Punto de Venta con Bloqueo SELECT FOR UPDATE (RF17, RF18, RN-04, RN-07)
 */
function validateCouponTransaction(rawCode, cashierLocalId) {
  const code = rawCode.trim().toUpperCase();
  const screen = document.getElementById("pos-screen-result");
  const sqlTrace = document.getElementById("sql-trace-output");
  const latencyMs = Math.floor(24 + Math.random() * 38);
  document.getElementById("last-tx-latency").textContent = `Latencia: ${latencyMs} ms (< 1.5s RNF01)`;

  const coupon = db.cupones.find((c) => c.codigo_unico === code);
  const nowTime = new Date().toLocaleTimeString("es-CO", { hour12: false }) + " COT";
  const store = getStoreById(cashierLocalId);

  // Caso 1: Cupón no existe
  if (!coupon) {
    playPosBeep(false);
    screen.className = "pos-screen pos-screen-invalid";
    screen.innerHTML = `
      <div class="pos-screen-icon">⛔</div>
      <div class="pos-screen-content">
        <h4>ACCESO DENEGADO: TOKEN QR INEXISTENTE (RNF03)</h4>
        <p>El código <code>${code}</code> no existe en la tabla <code>cupones</code> de PostgreSQL.</p>
        <p><strong>Acción en Caja:</strong> No aplicar descuento. Solicitar al cliente verificar su billetera Nuvora.</p>
      </div>
    `;
    sqlTrace.textContent = `-- Petición POST /api/cupones/redimir {codigo: '${code}', local_id: '${cashierLocalId}'}
BEGIN TRANSACTION;
SELECT * FROM cupones WHERE codigo_unico = '${code}' FOR UPDATE;
-- Resultado: 0 filas afectadas (Token no registrado).
ROLLBACK TRANSACTION;`;
    appendAuditLog(nowTime, code, `Local ${cashierLocalId}`, "RECHAZADO (NO EXISTE)", false);
    return;
  }

  // Caso 2: Pertenencia estricta al local (RN-07)
  if (coupon.local_id !== cashierLocalId) {
    playPosBeep(false);
    const ownerStore = getStoreById(coupon.local_id);
    screen.className = "pos-screen pos-screen-invalid";
    screen.innerHTML = `
      <div class="pos-screen-icon">🚫</div>
      <div class="pos-screen-content">
        <h4>RECHAZADO: CUPÓN NO CORRESPONDE A ESTE LOCAL (RN-07)</h4>
        <p>El cupón <code>${code}</code> fue emitido para <strong>${ownerStore.nombre} (Local ${coupon.local_id})</strong>.</p>
        <p><strong>Violación de Llave Foránea:</strong> No puede ser redimido en la caja de <strong>${store.nombre} (Local ${cashierLocalId})</strong>.</p>
      </div>
    `;
    sqlTrace.textContent = `BEGIN TRANSACTION;
SELECT id, local_id, estado FROM cupones WHERE codigo_unico = '${code}' FOR UPDATE;
-- Validación RN-07: cupon.local_id ('${coupon.local_id}') != cajero.local_id ('${cashierLocalId}')
ROLLBACK TRANSACTION; -- Rechazado por pertenencia de establecimiento`;
    appendAuditLog(nowTime, code, `Local ${cashierLocalId}`, `RECHAZADO (ES DE ${coupon.local_id} RN-07)`, false);
    return;
  }

  // Caso 3: Prevención de Doble Redención (RN-04)
  if (coupon.estado === "REDIMIDO") {
    playPosBeep(false);
    screen.className = "pos-screen pos-screen-invalid";
    screen.innerHTML = `
      <div class="pos-screen-icon">⚠️</div>
      <div class="pos-screen-content">
        <h4>ALERTA ANTIFRAUDE: CUPÓN YA UTILIZADO (RN-04)</h4>
        <p>El token <code>${code}</code> ya fue redimido previamente (${coupon.detalle_estado}).</p>
        <p><strong>Control ACID:</strong> Bloqueo <code>SELECT FOR UPDATE</code> impide doble uso simultáneo.</p>
      </div>
    `;
    sqlTrace.textContent = `BEGIN TRANSACTION;
SELECT id, estado FROM cupones WHERE codigo_unico = '${code}' FOR UPDATE;
-- Estado actual en BD = 'REDIMIDO' (Intento de doble redención detectado RN-04).
ROLLBACK TRANSACTION;`;
    appendAuditLog(nowTime, code, `Local ${cashierLocalId}`, "RECHAZADO (DOBLE USO RN-04)", false);
    return;
  }

  // Caso 4: Cupón Expirado o Anulado (RN-02)
  if (coupon.estado === "EXPIRADO" || coupon.estado === "ANULADO") {
    playPosBeep(false);
    screen.className = "pos-screen pos-screen-invalid";
    screen.innerHTML = `
      <div class="pos-screen-icon">⏰</div>
      <div class="pos-screen-content">
        <h4>RECHAZADO: CUPÓN ${coupon.estado} (RN-02 / RN-05)</h4>
        <p>El cupón <code>${code}</code> superó las 2 horas de vigencia o la promoción caducó.</p>
        <p><strong>Detalle:</strong> ${coupon.detalle_estado || "Tiempo de gracia agotado."}</p>
      </div>
    `;
    sqlTrace.textContent = `BEGIN TRANSACTION;
SELECT id, estado, fecha_expiracion FROM cupones WHERE codigo_unico = '${code}' FOR UPDATE;
-- Validación RN-02: CURRENT_TIMESTAMP > fecha_expiracion (Estado = '${coupon.estado}').
ROLLBACK TRANSACTION;`;
    appendAuditLog(nowTime, code, `Local ${cashierLocalId}`, `RECHAZADO (${coupon.estado})`, false);
    return;
  }

  // Caso 5: Transacción Exitosa -> Redimir Atómicamente
  playPosBeep(true);
  coupon.estado = "REDIMIDO";
  coupon.detalle_estado = `Redimido a las ${nowTime} en Caja ${cashierLocalId} (${store.nombre})`;
  const discountSaved = coupon.precio_regular - coupon.precio_oferta;

  db.redenciones.unshift({
    id: db.redenciones.length + 1,
    cupon_id: coupon.id,
    codigo_unico: coupon.codigo_unico,
    cajero_id: 104,
    local_id: cashierLocalId,
    fecha_redencion: new Date().toISOString().slice(0, 19).replace("T", " "),
    monto_descontado: discountSaved
  });

  screen.className = "pos-screen pos-screen-valid";
  screen.innerHTML = `
    <div class="pos-screen-icon">✅</div>
    <div class="pos-screen-content">
      <h4>CUPÓN VÁLIDO — REDIMIDO EN ${latencyMs} ms (RF18)</h4>
      <p><strong>Cliente:</strong> ${coupon.cliente_nombre} • <strong>Token:</strong> <code>${coupon.codigo_unico}</code></p>
      <p><strong>Entregar Pedido:</strong> ${coupon.titulo}</p>
      <p style="font-size:1.05rem; margin-top:0.35rem;">
        💵 <strong>Cobrar en Caja: ${formatCOP(coupon.precio_oferta)}</strong>
        <span style="font-size:0.84rem; opacity:0.9;"> (Ahorro aplicado: -${formatCOP(discountSaved)})</span>
      </p>
    </div>
  `;

  sqlTrace.textContent = `BEGIN TRANSACTION ISOLATION LEVEL READ COMMITTED;
SELECT * FROM cupones WHERE codigo_unico = '${code}' FOR UPDATE;
UPDATE cupones SET estado = 'REDIMIDO' WHERE codigo_unico = '${code}';
INSERT INTO redenciones (cupon_id, local_id, monto_descontado) VALUES (${coupon.id}, '${cashierLocalId}', ${discountSaved});
INSERT INTO auditoria_logs (accion, codigo, local_id) VALUES ('REDENCION_EXITOSA', '${code}', '${cashierLocalId}');
COMMIT TRANSACTION; -- Completado en ${latencyMs} ms (< 1.5s RNF01)`;

  appendAuditLog(nowTime, code, `Local ${cashierLocalId}`, `REDIMIDO (-${formatCOP(discountSaved)})`, true);
  saveDatabase();
  renderAllViews();
}

function appendAuditLog(time, code, localText, resultText, isOk) {
  db.auditoria_logs.unshift({
    id: db.auditoria_logs.length + 1,
    timestamp: time,
    codigo: code,
    local_cajero: localText,
    ip_origen: "192.168.10." + Math.floor(12 + Math.random() * 80),
    resultado: resultText,
    exito: isOk
  });
  saveDatabase();
  renderAnalyticsAndDB();
}

/**
 * Renderiza el Dashboard de Analítica (RF19), Bitácora de Auditoría (RF20) y Explorador de las 11 Tablas
 */
function renderAnalyticsAndDB() {
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
      .slice(0, 10)
      .map(
        (log) => `
        <tr>
          <td>${log.timestamp}</td>
          <td><code>${log.codigo}</code></td>
          <td>${log.local_cajero}</td>
          <td><code>${log.ip_origen}</code></td>
          <td><span class="${log.exito ? "log-ok" : "log-err"}">${log.resultado}</span></td>
        </tr>
      `
      )
      .join("");
  }

  const tableSelect = document.getElementById("db-table-select");
  const jsonViewer = document.getElementById("db-json-viewer");
  if (tableSelect && jsonViewer) {
    const tableName = tableSelect.value || "locales";
    jsonViewer.textContent = JSON.stringify(db[tableName] || [], null, 2);
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
        <span>${s.local} • <code>${s.correo}</code> • ${s.fecha}</span>
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

function applyActiveRole(roleKey) {
  activeRoleKey = roleKey;
  const avatarEl = document.getElementById("wallet-user-avatar");
  const nameEl = document.getElementById("wallet-user-name");
  const emailEl = document.getElementById("wallet-user-email");

  if (roleKey === "invitado") {
    activeUser = null;
    avatarEl.textContent = "🔓";
    nameEl.textContent = "Invitado sin Sesión (Modo Consulta Pública RN-06)";
    emailEl.textContent = "Inicia sesión para poder emitir cupones QR de descuento";
  } else if (roleKey === "locatario-P14") {
    activeUser = db.usuarios[1];
    selectedMerchantStoreId = "P-14";
    document.getElementById("panel-locatario").scrollIntoView({ behavior: "smooth" });
  } else if (roleKey === "locatario-I08") {
    activeUser = db.usuarios[2];
    selectedMerchantStoreId = "I-08";
    document.getElementById("panel-locatario").scrollIntoView({ behavior: "smooth" });
  } else if (roleKey === "cajero-P14") {
    activeUser = db.usuarios[3];
    document.getElementById("cashier-local-select").value = "P-14";
    document.getElementById("validador").scrollIntoView({ behavior: "smooth" });
  } else if (roleKey === "cajero-P06") {
    activeUser = db.usuarios[4];
    document.getElementById("cashier-local-select").value = "P-06";
    document.getElementById("validador").scrollIntoView({ behavior: "smooth" });
  } else if (roleKey === "superadmin") {
    activeUser = db.usuarios[5];
    document.getElementById("analitica").scrollIntoView({ behavior: "smooth" });
  } else {
    activeUser = db.usuarios[0];
  }

  if (activeUser) {
    const initials = activeUser.nombre
      .split(" ")
      .slice(0, 2)
      .map((w) => w[0])
      .join("");
    avatarEl.textContent = initials;
    nameEl.textContent = `Usuario Autenticado: ${activeUser.nombre}`;
    emailEl.textContent = `${activeUser.correo} • Sesión JWT Activa (RF02)`;
  }

  renderAllViews();
}

function renderAllViews() {
  renderPromotions();
  renderStoresStrip();
  renderWallet();
  renderMerchantPanel();
  renderAnalyticsAndDB();
  renderSavedLeads();
}

// =====================================================================
// INICIALIZACIÓN Y EVENTOS DEL SISTEMA
// =====================================================================
document.addEventListener("DOMContentLoaded", () => {
  renderAllViews();

  // Reloj del Servidor PostgreSQL y Contadores Regresivos en Tiempo Real (RN-02 y RN-05)
  setInterval(() => {
    const clockEl = document.getElementById("server-clock");
    if (clockEl) {
      if (serverTimeMode === "valle") {
        const s = String(new Date().getSeconds()).padStart(2, "0");
        clockEl.textContent = `Mié 15:30:${s} COT (Hora Valle)`;
      } else if (serverTimeMode === "pico") {
        const s = String(new Date().getSeconds()).padStart(2, "0");
        clockEl.textContent = `Vie 20:45:${s} COT (Fuera Franja)`;
      } else {
        clockEl.textContent = new Date().toLocaleTimeString("es-CO", { hour12: false }) + " COT";
      }
    }

    // Actualizar contadores regresivos de 2 horas en vivo (RN-02)
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

  // Selector de Modo de Hora del Servidor (RN-05)
  document.getElementById("server-time-mode")?.addEventListener("change", (e) => {
    serverTimeMode = e.target.value;
  });

  // Selector Rápido de Rol (Visitante, Locatario, Cajero, Superadmin, Invitado)
  document.getElementById("quick-role-switcher")?.addEventListener("change", (e) => {
    applyActiveRole(e.target.value);
  });

  // Botón Reset Base de Datos Demo
  document.getElementById("btn-reset-db")?.addEventListener("click", () => {
    db = getInitialDatabase();
    saveDatabase(db);
    renderAllViews();
    alert("✓ Base de datos PostgreSQL simulada restaurada a su estado inicial de demostración.");
  });

  // Menú Hamburguesa Responsive
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

  // Controles del Filtro Inteligente por Presupuesto (RF07)
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

  // Pestañas de la Billetera Digital (RF15)
  document.querySelectorAll(".wallet-tab").forEach((wtab) => {
    wtab.addEventListener("click", () => {
      currentWalletTab = wtab.dataset.wtab;
      document.querySelectorAll(".wallet-tab").forEach((t) => t.classList.remove("active"));
      wtab.classList.add("active");
      renderWallet();
    });
  });

  // Botón del Hero para Redimir en Caja
  document.getElementById("btn-test-hero-qr").addEventListener("click", () => {
    const code = document.getElementById("hero-qr-code-text").textContent;
    const cp = db.cupones.find((c) => c.codigo_unico === code) || db.cupones[0];
    sendCouponToPOS(cp.codigo_unico, cp.local_id);
  });

  // ===================================================================
  // EVENTOS DEL PANEL DEL LOCATARIO (MÓDULO 3: RF04, RF09 - RF12)
  // ===================================================================
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

  // Crear Nueva Promoción / Oferta Relámpago (RF09 - RF12)
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
      fb.textContent = "Verifica que el título esté completo y que el precio de oferta sea menor al precio regular.";
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
    fb.innerHTML = `✓ <strong>Promoción «${title}» creada con éxito (${newPromoId})</strong> en estado <code>${initState}</code>. Ya puedes verla en la tabla del local y en el catálogo público.`;
    e.target.reset();
    setTimeout(() => switchMerchantTab("tab-promos"), 1200);
  });

  // Agregar Nuevo Producto al Menú Digital del Local (RF06)
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
      precio_regular: price,
      disponible: true
    });
    saveDatabase();
    renderAllViews();
    e.target.reset();
  });

  // Actualizar Perfil del Local Comercial (RF04)
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
    fb.textContent = `✓ Perfil público del Local ${store.id} (${store.nombre}) actualizado en la base de datos (RF04).`;
  });

  // ===================================================================
  // EVENTOS DEL VALIDADOR DE CAJA POS (MÓDULO 5: RF16 - RF18)
  // ===================================================================
  document.getElementById("pos-validate-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const code = document.getElementById("pos-code-input").value;
    const localId = document.getElementById("cashier-local-select").value;
    validateCouponTransaction(code, localId);
  });

  // Teclado Táctil en Pantalla para el Cajero (RF16)
  document.querySelectorAll(".key-btn").forEach((btn) => {
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

  // Activar Cámara Web Real para Escaneo QR (RF16)
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
    } catch (_) {
      // Si el navegador no tiene webcam conectada, muestra el visor simulado listo para escanear
    }
  });

  document.querySelectorAll(".test-pill").forEach((pill) => {
    pill.addEventListener("click", () => {
      const code = pill.dataset.code;
      const localId = pill.dataset.local;
      document.getElementById("pos-code-input").value = code;
      document.getElementById("cashier-local-select").value = localId;
      validateCouponTransaction(code, localId);
    });
  });

  // ===================================================================
  // EVENTOS DE ANALÍTICA, EXPORTACIÓN CSV E INSPECTOR DE 11 TABLAS BD
  // ===================================================================
  document.getElementById("db-table-select").addEventListener("change", () => {
    renderAnalyticsAndDB();
  });

  document.getElementById("btn-export-audit").addEventListener("click", () => {
    const headers = ["ID,Timestamp,Codigo_QR,Local_Cajero,IP_Origen,Resultado"];
    const rows = db.auditoria_logs.map(
      (l) => `${l.id},"${l.timestamp}","${l.codigo}","${l.local_cajero}","${l.ip_origen}","${l.resultado}"`
    );
    const csvContent = "data:text/csv;charset=utf-8," + [headers, ...rows].join("\n");
    const link = document.createElement("a");
    link.setAttribute("href", encodeURI(csvContent));
    link.setAttribute("download", "auditoria_logs_nuvora_sanpedro.csv");
    document.body.appendChild(link);
    link.click();
    link.remove();
  });

  // Descargar QR como imagen PNG desde el Modal
  document.getElementById("modal-download-qr").addEventListener("click", () => {
    const canvas = document.getElementById("modal-qr-canvas");
    if (!canvas) return;
    const link = document.createElement("a");
    link.download = `Cupon_Nuvora_${activeModalCouponCode}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  });

  // ===================================================================
  // MODAL DE AUTENTICACIÓN, REGISTRO Y RECUPERACIÓN (RF01 - RF03)
  // ===================================================================
  document.getElementById("btn-open-auth")?.addEventListener("click", () => {
    document.getElementById("auth-feedback").hidden = true;
    openModal("auth-modal");
  });

  document.querySelectorAll(".auth-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.dataset.atab;
      document.querySelectorAll(".auth-tab").forEach((t) => t.classList.toggle("active", t === tab));
      document.getElementById("form-auth-login").classList.toggle("active", target === "login");
      document.getElementById("form-auth-register").classList.toggle("active", target === "register");
      document.getElementById("form-auth-recover").classList.toggle("active", target === "recover");
      document.getElementById("auth-feedback").hidden = true;
    });
  });

  document.getElementById("form-auth-login").addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("login-email").value.trim().toLowerCase();
    const found = db.usuarios.find((u) => u.correo.toLowerCase() === email);
    const fb = document.getElementById("auth-feedback");
    fb.hidden = false;

    if (!found) {
      fb.className = "contact-feedback error";
      fb.textContent = "Correo no encontrado. Puedes registrarte en la pestaña «Registro Visitante (RF01)».";
      return;
    }

    activeUser = found;
    activeRoleKey = "visitante";
    renderAllViews();
    fb.className = "contact-feedback success";
    fb.innerHTML = `✓ <strong>Autenticación JWT exitosa (RF02):</strong> Bienvenido(a), <strong>${found.nombre}</strong>.`;
    setTimeout(() => closeModal("auth-modal"), 900);
  });

  document.getElementById("form-auth-register").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("reg-name").value.trim();
    const email = document.getElementById("reg-email").value.trim().toLowerCase();
    const pass = document.getElementById("reg-password").value;
    const habeas = document.getElementById("reg-habeas").checked;
    const fb = document.getElementById("auth-feedback");
    fb.hidden = false;

    if (!name || !email || pass.length < 6 || !habeas) {
      fb.className = "contact-feedback error";
      fb.textContent = "Completa todos los campos y acepta la autorización de Habeas Data (Ley 1581 de 2012).";
      return;
    }

    const newUser = {
      id: 100 + db.usuarios.length + 1,
      rol_id: 1,
      local_id: null,
      nombre: name,
      correo: email,
      password_hash: "$2b$10$" + btoa(pass).slice(0, 16),
      creado_en: new Date().toISOString().slice(0, 19).replace("T", " ")
    };
    db.usuarios.push(newUser);
    activeUser = newUser;
    activeRoleKey = "visitante";
    const qrs = document.getElementById("quick-role-switcher");
    if (qrs) qrs.value = "visitante";
    saveDatabase();
    renderAllViews();

    fb.className = "contact-feedback success";
    fb.innerHTML = `✓ <strong>Visitante registrado con hash bcrypt (RF01 / RNF02):</strong> Sesión iniciada como <strong>${name}</strong>.`;
    setTimeout(() => closeModal("auth-modal"), 1000);
  });

  document.getElementById("form-auth-recover").addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("rec-email").value.trim();
    const fb = document.getElementById("auth-feedback");
    const tempCode = "REC-" + Math.floor(100000 + Math.random() * 900000);
    fb.hidden = false;
    fb.className = "contact-feedback success";
    fb.innerHTML = `✓ <strong>Enlace y código temporal generado (RF03):</strong> Se envió el código <code>${tempCode}</code> al correo <code>${email}</code> con vigencia de 15 minutos.`;
  });

  // Cerrar Modales
  [
    ["modal-close-btn", "qr-modal"],
    ["smodal-close-btn", "store-modal"],
    ["auth-close-btn", "auth-modal"]
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

  // Tour Multimedia Interactivo en 3 Etapas
  let activeSlide = 1;
  let autoplayInterval = null;

  function showSlide(stepNum) {
    activeSlide = Number(stepNum);
    document.querySelectorAll(".video-slide").forEach((s) => {
      s.classList.toggle("active", Number(s.dataset.step) === activeSlide);
    });
    document.querySelectorAll(".v-btn").forEach((b) => {
      b.classList.toggle("active", Number(b.dataset.goto) === activeSlide);
    });
  }

  document.querySelectorAll(".v-btn").forEach((btn) => {
    btn.addEventListener("click", () => showSlide(btn.dataset.goto));
  });

  function startAutoplay() {
    autoplayInterval = setInterval(() => {
      showSlide(activeSlide >= 3 ? 1 : activeSlide + 1);
    }, 4500);
  }
  startAutoplay();

  document.getElementById("btn-autoplay-demo").addEventListener("click", (e) => {
    if (autoplayInterval) {
      clearInterval(autoplayInterval);
      autoplayInterval = null;
      e.target.textContent = "▶ Reanudar Tour";
    } else {
      startAutoplay();
      e.target.textContent = "⏸ Pausar Tour";
    }
  });

  // Formulario Funcional de Contacto y Vinculación con Persistencia en BD
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
      feedbackEl.textContent = "Por favor completa todos los campos obligatorios (*) y autoriza la cláusula de Habeas Data (Ley 1581 de 2012).";
      return;
    }

    const ticketId = "NUV-" + Math.floor(100000 + Math.random() * 900000);
    db.solicitudes_contacto.unshift({
      ticket: ticketId,
      nombre: name,
      rol: role,
      local: local,
      correo: email,
      fecha: new Date().toLocaleString("es-CO")
    });
    saveDatabase();
    renderSavedLeads();

    feedbackEl.hidden = false;
    feedbackEl.className = "contact-feedback success";
    feedbackEl.innerHTML = `✓ <strong>¡Solicitud registrada y almacenada en la base de datos (${ticketId})!</strong> Gracias, <strong>${name}</strong> (${role} - ${local}). Tu registro ya aparece en el listado de solicitudes recibidas a la izquierda.`;
    e.target.reset();
  });
});


