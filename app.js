/**
 * MercaGo — Ecosistema Digital de Promociones, Directorio Interactivo y Cupones QR
 * Caso Piloto: Centro Comercial San Pedro Plaza (Neiva, Huila)
 * Ficha 3413974 — Tecnología en Análisis y Desarrollo de Software (ADSO) - SENA
 */

const PROMOTIONS_DATA = [
  {
    id: "promo-1",
    localId: "I-08",
    localName: "Delicias del Huila: Cholupas & Helados",
    localLocation: "Isla Comercial I-08 • Pasillo Lateral",
    owner: "Doña Martha Lucía Tovar",
    category: "regional",
    isFlash: true,
    title: "Combo Onces Opitas: Granizado de Cholupa + Achiras Artesanales",
    description: "Granizado 100% fruta natural de Rivera con paquete de bizcochos de achira horneados y queso doble crema.",
    regularPrice: 14000,
    promoPrice: 9500,
    stockMax: 30,
    stockRemaining: 14,
    schedule: "⚡ Oferta Relámpago: Lun a Vie (2:30 p.m. - 5:30 p.m.)",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "promo-2",
    localId: "C-12",
    localName: "Café & Achiras Opitas Gourmet",
    localLocation: "Local C-12 • Piso 1 Zona Bancaria",
    owner: "Cooperativa Cafetera del Huila",
    category: "regional",
    isFlash: false,
    title: "Dúo Cafetero Especial de San Agustín + Torta de Almojábana",
    description: "Café filtrado de origen (Caturra/Tabi) o Latte frío acompañado de porción de torta artesanal caliente.",
    regularPrice: 16500,
    promoPrice: 12000,
    stockMax: 40,
    stockRemaining: 22,
    schedule: "🕒 Vigencia: Todos los días (8:00 a.m. - 8:00 p.m.)",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "promo-3",
    localId: "P-09",
    localName: "Pizza & Pasta San Pedro Artesanal",
    localLocation: "Local P-09 • Plazoleta de Comidas Piso 2",
    owner: "Chef Luigi & Familia",
    category: "comidas-rapidas",
    isFlash: true,
    title: "Pizza Personal Masa Madre (2 Ingredientes) + Limonada Natural",
    description: "Pizza artesanal horneada a la piedra con queso mozzarella fundido, pepperoni o pollo champiñones.",
    regularPrice: 22000,
    promoPrice: 15500,
    stockMax: 25,
    stockRemaining: 9,
    schedule: "⚡ Hora Feliz Universitaria: Mar a Jue (12:00 m. - 5:00 p.m.)",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "promo-4",
    localId: "P-14",
    localName: "El Corralito Parrilla & Burger",
    localLocation: "Local P-14 • Plazoleta de Comidas Piso 2",
    owner: "Don Carlos Alberto Méndez",
    category: "comidas-rapidas",
    isFlash: true,
    title: "Combo Corralito Parrilla 180g + Papas Rústicas + Gaseosa Gratis",
    description: "Hamburguesa 100% res a la parrilla con tocineta ahumada, queso cheddar, vegetales frescos y bebida 12 oz.",
    regularPrice: 26000,
    promoPrice: 18000,
    stockMax: 30,
    stockRemaining: 11,
    schedule: "⚡ Oferta Relámpago Valle: Mar, Mié y Jue (2:30 p.m. - 5:30 p.m.)",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "promo-5",
    localId: "P-18",
    localName: "Wok & Teriyaki Express Plaza",
    localLocation: "Local P-18 • Plazoleta de Comidas Piso 2",
    owner: "Grupo Gastronómico Oriental",
    category: "comidas-rapidas",
    isFlash: false,
    title: "Bowl Teriyaki Pollo & Vegetales al Wok + Rollito Primavera",
    description: "Arroz jazmín o tallarines salteados al wok con salsa teriyaki de la casa, ajonjolí tostado y bebida.",
    regularPrice: 27000,
    promoPrice: 19900,
    stockMax: 35,
    stockRemaining: 19,
    schedule: "🕒 Vigencia: Lun a Dom (11:30 a.m. - 9:00 p.m.)",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "promo-6",
    localId: "P-06",
    localName: "Asadero & Brasas del San Pedro",
    localLocation: "Local P-06 • Plazoleta de Comidas Piso 2",
    owner: "Andrés Felipe Murcia (Cajero Principal)",
    category: "parrilla",
    isFlash: true,
    title: "Punta de Anca o Churrasco a la Brasa 280g + Arepa, Papa y Ensalada",
    description: "Corte madurado asado al carbón al término de tu elección con chimichurri artesanal, yuca cocida y gaseosa.",
    regularPrice: 36000,
    promoPrice: 26500,
    stockMax: 20,
    stockRemaining: 7,
    schedule: "⚡ Oferta Tarde Parrillera: Lun a Jue (2:00 p.m. - 6:00 p.m.)",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=700&q=80"
  }
];

// Estado de la Billetera de Cupones (RN-01, RN-02, RN-04)
let userCoupons = [
  {
    code: "SPP-7F2A9B",
    promoId: "promo-4",
    localId: "P-14",
    localName: "El Corralito Parrilla & Burger (Local P-14)",
    title: "Combo Corralito Parrilla 180g + Papas Rústicas + Gaseosa Gratis",
    regularPrice: 26000,
    promoPrice: 18000,
    status: "EMITIDO",
    issuedAt: "15:10 COT",
    expiresIn: "01:48:25",
    customer: "Camilo Andrés Rojas"
  },
  {
    code: "SPP-4C8D1E",
    promoId: "promo-6",
    localId: "P-06",
    localName: "Asadero & Brasas del San Pedro (Local P-06)",
    title: "Punta de Anca a la Brasa 280g + Gaseosa",
    regularPrice: 36000,
    promoPrice: 26500,
    status: "REDIMIDO",
    issuedAt: "13:50 COT",
    redeemedAt: "14:15 COT (Cajero: Andrés Felipe Murcia)",
    customer: "Camilo Andrés Rojas"
  },
  {
    code: "SPP-9A1B0C",
    promoId: "promo-1",
    localId: "I-08",
    localName: "Delicias del Huila: Cholupas & Helados (Isla I-08)",
    title: "Combo Onces Opitas: Granizado de Cholupa + Achiras",
    regularPrice: 14000,
    promoPrice: 9500,
    status: "EXPIRADO",
    issuedAt: "11:00 COT",
    expiredReason: "Superó ventana de gracia de 2 horas (RN-02)",
    customer: "Camilo Andrés Rojas"
  }
];

let currentBudget = 20000;
let currentCategory = "all";
let currentSearch = "";
let currentWalletTab = "EMITIDO";
let kpiViews = 1248;
let kpiIssued = 86;
let kpiRedeemed = 64;

function formatCOP(value) {
  return "$" + Number(value).toLocaleString("es-CO") + " COP";
}

/**
 * Dibuja un código QR determinístico en un elemento <canvas> a partir del token alfanumérico (RF14)
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

/**
 * Renderiza el Directorio de Locales y Promociones aplicando el Algoritmo de Presupuesto (RF07)
 */
function renderPromotions() {
  const container = document.getElementById("directorio");
  const counterEl = document.getElementById("results-counter");
  if (!container) return;

  // Filtrado indexado y ordenamiento de menor a mayor precio según RF07
  const filtered = PROMOTIONS_DATA.filter((item) => {
    const matchesBudget = item.promoPrice <= currentBudget;
    const matchesCategory =
      currentCategory === "all" ||
      (currentCategory === "relampago" ? item.isFlash : item.category === currentCategory);
    const q = currentSearch.trim().toLowerCase();
    const matchesSearch =
      !q ||
      item.title.toLowerCase().includes(q) ||
      item.localName.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q);
    return matchesBudget && matchesCategory && matchesSearch;
  }).sort((a, b) => a.promoPrice - b.promoPrice);

  counterEl.innerHTML = `Mostrando <strong>${filtered.length} ${
    filtered.length === 1 ? "opción" : "opciones"
  }</strong> dentro de tu presupuesto de <strong>${formatCOP(currentBudget)}</strong>`;

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 2.5rem; background: #fff; border-radius: 14px; border: 1px solid #e2e8f0;">
        <h3>No encontramos combos con ese filtro exacto</h3>
        <p style="color: #475569; margin: 0.5rem 0 1rem;">Sube el deslizador de presupuesto a $20.000 COP o selecciona «Todos los Locales».</p>
        <button type="button" class="btn btn-primary btn-sm" id="btn-reset-filters">Restablecer Presupuesto a $30.000 COP</button>
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
      const discountPct = Math.round(((p.regularPrice - p.promoPrice) / p.regularPrice) * 100);
      const alreadyHasActive = userCoupons.some((c) => c.promoId === p.id && c.status === "EMITIDO");

      return `
        <article class="promo-card">
          <div class="promo-img-wrap">
            <img src="${p.image}" alt="${p.title}" loading="lazy" />
            <div class="promo-badges-top">
              <span class="badge-local">${p.localId}</span>
              ${p.isFlash ? `<span class="badge-flash">⚡ OFERTA RELÁMPAGO -${discountPct}%</span>` : `<span class="badge-flash" style="background:#16a34a;">AHORRA ${discountPct}%</span>`}
            </div>
          </div>
          <div class="promo-body">
            <span class="promo-store-name">${p.localName}</span>
            <h3 class="promo-title">${p.title}</h3>
            <p class="promo-desc">${p.description}</p>
            <div class="promo-schedule">${p.schedule}</div>
            <div class="promo-price-row">
              <div class="price-block">
                <span class="price-reg">Antes: ${formatCOP(p.regularPrice)}</span>
                <span class="price-now">${formatCOP(p.promoPrice)}</span>
              </div>
              <span class="stock-pill">Quedan ${p.stockRemaining}/${p.stockMax} cupos</span>
            </div>
            <button
              type="button"
              class="btn ${alreadyHasActive ? "btn-outline" : "btn-primary"} btn-block btn-generate-qr"
              data-promo-id="${p.id}"
            >
              ${alreadyHasActive ? "Ver mi Cupón QR Activo (RN-01)" : "Obtener Cupón QR de Descuento"}
            </button>
          </div>
        </article>
      `;
    })
    .join("");

  container.querySelectorAll(".btn-generate-qr").forEach((btn) => {
    btn.addEventListener("click", () => handleGenerateCoupon(btn.dataset.promoId));
  });
}

/**
 * Genera un Cupón QR Criptográfico cumpliendo RN-01 (1 cupón activo/promo en 24h) y RN-02 (2h vigencia)
 */
function handleGenerateCoupon(promoId) {
  const promo = PROMOTIONS_DATA.find((p) => p.id === promoId);
  if (!promo) return;

  let existing = userCoupons.find((c) => c.promoId === promoId && c.status === "EMITIDO");

  if (!existing) {
    const randomHex = Array.from({ length: 6 }, () =>
      "0123456789ABCDEF".charAt(Math.floor(Math.random() * 16))
    ).join("");
    const newCode = `SPP-${randomHex}`;
    const nowStr = new Date().toLocaleTimeString("es-CO", { hour: "2-digit", minute: "2-digit", hour12: false }) + " COT";

    existing = {
      code: newCode,
      promoId: promo.id,
      localId: promo.localId,
      localName: `${promo.localName} (Local ${promo.localId})`,
      title: promo.title,
      regularPrice: promo.regularPrice,
      promoPrice: promo.promoPrice,
      status: "EMITIDO",
      issuedAt: nowStr,
      expiresIn: "01:59:59",
      customer: "Camilo Andrés Rojas"
    };

    userCoupons.unshift(existing);
    if (promo.stockRemaining > 1) promo.stockRemaining -= 1;
    kpiIssued += 1;
    updateKPIs();
    renderPromotions();
    renderWallet();
  }

  openQRModal(existing);
}

function openQRModal(coupon) {
  const modal = document.getElementById("qr-modal");
  document.getElementById("modal-promo-title").textContent = coupon.title;
  document.getElementById("modal-store-name").textContent = `${coupon.localName} • Precio con Cupón: ${formatCOP(coupon.promoPrice)}`;
  document.getElementById("modal-qr-code").textContent = coupon.code;
  drawQRCodeOnCanvas("modal-qr-canvas", coupon.code);

  const sendBtn = document.getElementById("modal-send-to-pos");
  sendBtn.onclick = () => {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    sendCouponToPOS(coupon.code, coupon.localId);
  };

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
}

/**
 * Renderiza la Billetera Digital del Visitante (RF15)
 */
function renderWallet() {
  const listEl = document.getElementById("wallet-list");
  if (!listEl) return;

  const emitidosCount = userCoupons.filter((c) => c.status === "EMITIDO").length;
  const redimidosCount = userCoupons.filter((c) => c.status === "REDIMIDO").length;
  const expiradosCount = userCoupons.filter((c) => c.status === "EXPIRADO").length;

  document.getElementById("count-emitidos").textContent = emitidosCount;
  document.getElementById("count-redimidos").textContent = redimidosCount;
  document.getElementById("count-expirados").textContent = expiradosCount;
  document.getElementById("coupon-badge-count").textContent = emitidosCount;

  const items = userCoupons.filter((c) => c.status === currentWalletTab);

  if (items.length === 0) {
    listEl.innerHTML = `<p style="color:#475569; padding: 1rem;">No tienes cupones en estado <strong>${currentWalletTab}</strong> en este momento.</p>`;
    return;
  }

  listEl.innerHTML = items
    .map(
      (c) => `
      <div class="coupon-ticket">
        <div>
          <div class="coupon-ticket-header">
            <span class="status-tag status-${c.status}">${c.status}</span>
            <span class="coupon-code-pill">${c.code}</span>
          </div>
          <h4 style="margin: 0.65rem 0 0.25rem; font-size: 1rem;">${c.title}</h4>
          <p style="font-size: 0.82rem; color: #475569; margin-bottom: 0.5rem;">${c.localName}</p>
          <div style="font-size: 0.88rem; font-weight: 700; color: #16a34a;">
            Pagas en caja: ${formatCOP(c.promoPrice)} <span style="text-decoration:line-through; color:#94a3b8; font-weight:500;">(${formatCOP(c.regularPrice)})</span>
          </div>
        </div>
        <div style="border-top: 1px solid #e2e8f0; padding-top: 0.65rem; font-size: 0.78rem; color: #475569; display:flex; justify-content:space-between; align-items:center; gap:0.5rem; flex-wrap:wrap;">
          ${
            c.status === "EMITIDO"
              ? `<span>⏱ Caduca en: <strong>${c.expiresIn}</strong></span>
                 <button type="button" class="btn btn-primary btn-sm btn-wallet-to-pos" data-code="${c.code}" data-local="${c.localId}">Llevar a Caja →</button>`
              : c.status === "REDIMIDO"
              ? `<span>✓ Redimido: ${c.redeemedAt}</span>`
              : `<span>✕ Motivo: ${c.expiredReason}</span>`
          }
        </div>
      </div>
    `
    )
    .join("");

  listEl.querySelectorAll(".btn-wallet-to-pos").forEach((btn) => {
    btn.addEventListener("click", () => {
      sendCouponToPOS(btn.dataset.code, btn.dataset.local);
    });
  });
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
 * Simula la Validación Transaccional Atómica en Caja con Bloqueo SELECT FOR UPDATE (RF17, RF18, RN-04, RN-07)
 */
function validateCouponTransaction(rawCode, cashierLocalId) {
  const code = rawCode.trim().toUpperCase();
  const screen = document.getElementById("pos-screen-result");
  const latencyMs = Math.floor(28 + Math.random() * 45);
  document.getElementById("last-tx-latency").textContent = `Latencia: ${latencyMs} ms (< 1.5s RNF01)`;

  const coupon = userCoupons.find((c) => c.code === code);
  const nowTime = new Date().toLocaleTimeString("es-CO", { hour12: false });

  if (!coupon) {
    screen.className = "pos-screen pos-screen-invalid";
    screen.innerHTML = `
      <div class="pos-screen-icon">⛔</div>
      <div class="pos-screen-content">
        <h4>ACCESO DENEGADO: CUPÓN INEXISTENTE</h4>
        <p>El token <code>${code}</code> no existe en la tabla <code>cupones</code> de PostgreSQL. Verifique errores de digitación.</p>
      </div>
    `;
    appendAuditLog(nowTime, code, `Local ${cashierLocalId}`, "RECHAZADO (NO EXISTE)", false);
    return;
  }

  // Regla de Negocio RN-07: Pertenencia estricta del cupón al local comercial
  if (coupon.localId !== cashierLocalId) {
    screen.className = "pos-screen pos-screen-invalid";
    screen.innerHTML = `
      <div class="pos-screen-icon">🚫</div>
      <div class="pos-screen-content">
        <h4>RECHAZADO POR PERTENENCIA (RN-07)</h4>
        <p>El cupón <code>${code}</code> fue emitido para <strong>Local ${coupon.localId}</strong> y no puede redimirse en la caja del <strong>Local ${cashierLocalId}</strong>.</p>
      </div>
    `;
    appendAuditLog(nowTime, code, `Local ${cashierLocalId}`, `RECHAZADO (ES DE ${coupon.localId})`, false);
    return;
  }

  if (coupon.status === "REDIMIDO") {
    screen.className = "pos-screen pos-screen-invalid";
    screen.innerHTML = `
      <div class="pos-screen-icon">⚠️</div>
      <div class="pos-screen-content">
        <h4>CUPÓN YA UTILIZADO (PREVENCIÓN DOBLE USO RN-04)</h4>
        <p>El cupón <code>${code}</code> ya fue redimido previamente (${coupon.redeemedAt}). Bloqueo atómico <code>SELECT FOR UPDATE</code> aplicado.</p>
      </div>
    `;
    appendAuditLog(nowTime, code, `Local ${cashierLocalId}`, "RECHAZADO (DOBLE USO)", false);
    return;
  }

  if (coupon.status === "EXPIRADO") {
    screen.className = "pos-screen pos-screen-invalid";
    screen.innerHTML = `
      <div class="pos-screen-icon">⏰</div>
      <div class="pos-screen-content">
        <h4>CUPÓN EXPIRADO (CONTROL HORARIO RN-02 / RN-05)</h4>
        <p>El cupón <code>${code}</code> superó las 2 horas de vigencia o la franja horaria oficial del servidor.</p>
      </div>
    `;
    appendAuditLog(nowTime, code, `Local ${cashierLocalId}`, "RECHAZADO (EXPIRADO)", false);
    return;
  }

  // Transacción Exitosa: Actualizar estado a REDIMIDO
  coupon.status = "REDIMIDO";
  coupon.redeemedAt = `${nowTime} COT (Validado en Caja ${cashierLocalId})`;
  const discountSaved = coupon.regularPrice - coupon.promoPrice;

  kpiRedeemed += 1;
  updateKPIs();
  renderWallet();
  renderPromotions();

  screen.className = "pos-screen pos-screen-valid";
  screen.innerHTML = `
    <div class="pos-screen-icon">✅</div>
    <div class="pos-screen-content">
      <h4>CUPÓN VÁLIDO — REDIMIDO EXITOSAMENTE (${latencyMs} ms)</h4>
      <p><strong>Cliente:</strong> ${coupon.customer} • <strong>Entregar:</strong> ${coupon.title}</p>
      <p><strong>Cobrar en Caja:</strong> ${formatCOP(coupon.promoPrice)} (Descuento aplicado: -${formatCOP(discountSaved)})</p>
    </div>
  `;

  appendAuditLog(nowTime, code, `Local ${cashierLocalId}`, `REDIMIDO (-${formatCOP(discountSaved)})`, true);
}

function appendAuditLog(time, code, localText, resultText, isOk) {
  const tbody = document.getElementById("audit-log-tbody");
  if (!tbody) return;
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${time}</td>
    <td><code>${code}</code></td>
    <td>${localText}</td>
    <td><span class="${isOk ? "log-ok" : "log-err"}">${resultText}</span></td>
  `;
  tbody.prepend(tr);
}

function updateKPIs() {
  document.getElementById("kpi-views").textContent = kpiViews.toLocaleString("es-CO");
  document.getElementById("kpi-issued").textContent = kpiIssued;
  document.getElementById("kpi-redeemed").textContent = kpiRedeemed;
  const rate = ((kpiRedeemed / kpiIssued) * 100).toFixed(1);
  document.getElementById("kpi-conversion").textContent = `${rate}%`;
}

function setBudgetValue(val) {
  currentBudget = Number(val);
  const slider = document.getElementById("budget-slider");
  const display = document.getElementById("budget-display");
  if (slider) slider.value = currentBudget;
  if (display) display.textContent = formatCOP(currentBudget);

  document.querySelectorAll(".chip-btn").forEach((chip) => {
    chip.classList.toggle("active", Number(chip.dataset.budget) === currentBudget);
  });
}

// Inicialización del DOM
document.addEventListener("DOMContentLoaded", () => {
  drawQRCodeOnCanvas("hero-qr-canvas", "SPP-7F2A9B");
  renderPromotions();
  renderWallet();

  // Reloj del Servidor PostgreSQL en vivo (RN-05)
  setInterval(() => {
    const now = new Date();
    const clockEl = document.getElementById("server-clock");
    if (clockEl) {
      clockEl.textContent = now.toLocaleTimeString("es-CO", { hour12: false }) + " COT";
    }
  }, 1000);

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
        navMenu.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Controles del Filtro por Presupuesto
  const slider = document.getElementById("budget-slider");
  if (slider) {
    slider.addEventListener("input", (e) => {
      setBudgetValue(e.target.value);
      renderPromotions();
    });
  }

  document.querySelectorAll(".chip-btn").forEach((chip) => {
    chip.addEventListener("click", () => {
      setBudgetValue(chip.dataset.budget);
      renderPromotions();
    });
  });

  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentSearch = e.target.value;
      renderPromotions();
    });
  }

  document.querySelectorAll(".cat-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      currentCategory = tab.dataset.cat;
      document.querySelectorAll(".cat-tab").forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      renderPromotions();
    });
  });

  // Pestañas de la Billetera Digital
  document.querySelectorAll(".wallet-tab").forEach((wtab) => {
    wtab.addEventListener("click", () => {
      currentWalletTab = wtab.dataset.wtab;
      document.querySelectorAll(".wallet-tab").forEach((t) => t.classList.remove("active"));
      wtab.classList.add("active");
      renderWallet();
    });
  });

  // Botón Hero para probar el QR en Caja
  const heroTestBtn = document.getElementById("btn-test-hero-qr");
  if (heroTestBtn) {
    heroTestBtn.addEventListener("click", () => {
      sendCouponToPOS("SPP-7F2A9B", "P-14");
    });
  }

  // Formulario del Validador de Caja POS
  const posForm = document.getElementById("pos-validate-form");
  if (posForm) {
    posForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const code = document.getElementById("pos-code-input").value;
      const localId = document.getElementById("cashier-local-select").value;
      validateCouponTransaction(code, localId);
    });
  }

  document.querySelectorAll(".test-pill").forEach((pill) => {
    pill.addEventListener("click", () => {
      const code = pill.dataset.code;
      const localId = pill.dataset.local;
      document.getElementById("pos-code-input").value = code;
      document.getElementById("cashier-local-select").value = localId;
      validateCouponTransaction(code, localId);
    });
  });

  // Cerrar Modal QR
  const closeModalBtn = document.getElementById("modal-close-btn");
  const qrModal = document.getElementById("qr-modal");
  if (closeModalBtn && qrModal) {
    closeModalBtn.addEventListener("click", () => {
      qrModal.classList.remove("open");
      qrModal.setAttribute("aria-hidden", "true");
    });
    qrModal.addEventListener("click", (e) => {
      if (e.target === qrModal) {
        qrModal.classList.remove("open");
        qrModal.setAttribute("aria-hidden", "true");
      }
    });
  }

  // Tour Multimedia Interactivo en 3 Pasos
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
    btn.addEventListener("click", () => {
      showSlide(btn.dataset.goto);
    });
  });

  function startAutoplay() {
    autoplayInterval = setInterval(() => {
      const next = activeSlide >= 3 ? 1 : activeSlide + 1;
      showSlide(next);
    }, 4500);
  }
  startAutoplay();

  const autoplayBtn = document.getElementById("btn-autoplay-demo");
  if (autoplayBtn) {
    autoplayBtn.addEventListener("click", () => {
      if (autoplayInterval) {
        clearInterval(autoplayInterval);
        autoplayInterval = null;
        autoplayBtn.textContent = "▶ Reanudar Tour";
      } else {
        startAutoplay();
        autoplayBtn.textContent = "⏸ Pausar Tour";
      }
    });
  }

  // Formulario de Contacto Funcional (Con validación Habeas Data Ley 1581 de 2012)
  const contactForm = document.getElementById("contact-form");
  const feedbackEl = document.getElementById("contact-feedback");
  if (contactForm && feedbackEl) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("contact-name").value.trim();
      const email = document.getElementById("contact-email").value.trim();
      const phone = document.getElementById("contact-phone").value.trim();
      const role = document.getElementById("contact-role").value;
      const local = document.getElementById("contact-local").value.trim() || "No especificado";
      const message = document.getElementById("contact-message").value.trim();
      const habeas = document.getElementById("contact-habeas").checked;

      if (!name || !email || !phone || !role || !message || !habeas) {
        feedbackEl.hidden = false;
        feedbackEl.className = "contact-feedback error";
        feedbackEl.textContent = "Por favor completa todos los campos obligatorios (*) y acepta la autorización de Habeas Data (Ley 1581 de 2012).";
        return;
      }

      const ticketId = "MGO-" + Math.floor(100000 + Math.random() * 900000);
      feedbackEl.hidden = false;
      feedbackEl.className = "contact-feedback success";
      feedbackEl.innerHTML = `✓ <strong>¡Solicitud registrada con éxito (${ticketId})!</strong> Gracias, <strong>${name}</strong> (${role} - ${local}). Hemos recibido tu requerimiento para el piloto MercaGo en el C.C. San Pedro Plaza y enviado confirmación a <code>${email}</code>.`;
      contactForm.reset();
    });
  }
});
