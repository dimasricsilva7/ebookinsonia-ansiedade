// ÚNICO archivo a editar: checkout, precios y píxel.
window.CFG = {
  checkoutUrl: "https://REEMPLAZAR-LINK-DE-CHECKOUT-MUNDPAY", // pega aquí el link de MundPay
  price: "37,90",
  oldPrice: "64,00",
  supportEmail: "", // email público de soporte (aparece en gracias/soporte/privacidad)
  pixelId: "" // ID del Píxel de Meta (vacío = sin tracking)
};

(function () {
  var c = window.CFG;
  // Meta Pixel
  if (c.pixelId) {
    !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', c.pixelId); fbq('track', 'PageView');
  }
  window.track = function (ev, custom) { if (window.fbq) fbq(custom ? 'trackCustom' : 'track', ev); };

  document.addEventListener('DOMContentLoaded', function () {
    if (c.supportEmail) document.querySelectorAll('[data-email]').forEach(function (e) { e.textContent = c.supportEmail; e.href = 'mailto:' + c.supportEmail; });
    document.querySelectorAll('[data-price]').forEach(function (e) { e.textContent = c.price; });
    document.querySelectorAll('[data-old]').forEach(function (e) { e.textContent = c.oldPrice; });
    // Los botones de compra conservan UTMs/fbclid para atribución
    var url = c.checkoutUrl + (c.checkoutUrl.indexOf('?') > -1 ? '&' : '?') + location.search.slice(1);
    document.querySelectorAll('.js-buy').forEach(function (a) {
      a.href = url.replace(/[?&]$/, '');
      a.addEventListener('click', function () { track('InitiateCheckout'); });
    });
  });
})();
