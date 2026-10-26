const products = {
  "Croissant Butter": 18000,
  "Sourdough Loaf": 42000,
  "Choco Muffin": 16000,
  "Vanilla Cupcake": 15000,
  "Cinnamon Roll": 20000,
  "Fruit Tart": 28000
};

// GANTI dengan nomor WhatsApp bisnis Anda: kode negara 62, tanpa tanda +, spasi, atau strip.
const WHATSAPP_NUMBER = "6281234567890";

const productSelect = document.getElementById("productSelect");
const quantityInput = document.getElementById("quantity");
const totalPrice = document.getElementById("totalPrice");
const orderForm = document.getElementById("orderForm");

function rupiah(amount) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency", currency: "IDR", maximumFractionDigits: 0
  }).format(amount).replace(/\u00a0/g, " ");
}

function updateTotal() {
  const product = productSelect.value;
  const quantity = Math.max(1, Math.min(99, Number(quantityInput.value) || 1));
  quantityInput.value = quantity;
  totalPrice.textContent = rupiah(products[product] * quantity);
}

productSelect.addEventListener("change", updateTotal);
quantityInput.addEventListener("input", updateTotal);
document.getElementById("minusQty").addEventListener("click", () => {
  quantityInput.value = Math.max(1, (Number(quantityInput.value) || 1) - 1);
  updateTotal();
});
document.getElementById("plusQty").addEventListener("click", () => {
  quantityInput.value = Math.min(99, (Number(quantityInput.value) || 1) + 1);
  updateTotal();
});

document.querySelectorAll(".quick-add").forEach(button => {
  button.addEventListener("click", () => {
    productSelect.value = button.dataset.product;
    updateTotal();
    document.getElementById("pesanan").scrollIntoView({ behavior: "smooth" });
  });
});

orderForm.addEventListener("submit", event => {
  event.preventDefault();
  const name = document.getElementById("customerName").value.trim();
  const product = productSelect.value;
  const quantity = Math.max(1, Number(quantityInput.value) || 1);
  const notes = document.getElementById("notes").value.trim();
  const total = products[product] * quantity;
  if (!name) {
    document.getElementById("customerName").focus();
    return;
  }
  if (WHATSAPP_NUMBER === "6281234567890") {
    alert("Sebelum digunakan, ganti nomor contoh WhatsApp di file script.js dengan nomor bisnis Anda.");
  }
  const message = [
    "Halo Maison Crème! Saya ingin memesan pastry.",
    "",
    `Nama: ${name}`,
    `Produk: ${product}`,
    `Jumlah: ${quantity}`,
    `Perkiraan total: ${rupiah(total)}`,
    notes ? `Catatan: ${notes}` : "",
    "",
    "Mohon info ketersediaan dan cara pembayarannya. Terima kasih!"
  ].filter(Boolean).join("\n");
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
});

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
mainNav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});
document.getElementById("year").textContent = new Date().getFullYear();
updateTotal();
