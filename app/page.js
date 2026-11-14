import TopBar from "./TopBar";
import BuyButton from "./BuyButton";
import ClientScript from "./ClientScript";
import { getSettings } from "../lib/db";
import { withDefaults } from "../lib/defaults";

export const dynamic = "force-dynamic";

export default async function Home() {
  const s = withDefaults(await getSettings());
  const testis = [1, 2, 3, 4, 5, 6]
    .map((i) => ({ text: s[`testi${i}_text`], name: s[`testi${i}_name`], place: s[`testi${i}_place`] }))
    .filter((t) => t.text && t.text.trim());

  return (
    <>
      <TopBar priceNow={s.priceNow} priceOld={s.priceOld} />

      <header className="nav"><div className="wrap">
        <a className="logo" href="#">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z" /></svg>
          Noches en Calma
        </a>
        <BuyButton url={s.checkoutUrl} className="btn sm">Quiero la guía</BuyButton>
      </div></header>

      {/* HERO */}
      <section className="hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {s.heroBgImg && <img className="hero-bg" src={s.heroBgImg} alt="" aria-hidden="true" />}
        <div className="wrap grid">
          <div className="hero-copy">
            <div className="banner" id="banner"></div>
            <h1>{s.heroTitle}</h1>
            <p className="lead">Una guía práctica de 21 días con técnicas sencillas para calmar la ansiedad, dormir de un tirón y despertarte con energía, <b>sin depender de remedios</b> ni cambiar toda tu vida.</p>
            <ul>
              <li>Técnicas de <b>5 minutos</b> para bajar la ansiedad (respiración y nervio vago)</li>
              <li>Qué hacer <b>cuando te despiertas a las 3 de la mañana</b></li>
              <li>Rutina de noche paso a paso, fácil de seguir aunque trabajes mucho</li>
            </ul>
            <BuyButton url={s.checkoutUrl} className="btn">Quiero empezar esta noche →</BuyButton>
            <p className="micro">Descarga inmediata en PDF · Garantía de 7 días</p>
            <div className="trust"><span>Pago 100% seguro</span><span>Acceso inmediato</span><span>Devolución sin preguntas</span></div>
            <p className="micro" style={{ marginTop: 14 }}>¿Aún no sabes cuál es tu caso? <a href="/quiz.html" style={{ color: "var(--gold)" }}>Haz el test gratuito de 1 minuto</a></p>
          </div>
          <div className="hero-art">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="mockup" src={s.coverImg} width="900" height="600" alt="Guía Noches en Calma con sus 3 bonus: checklist de higiene del sueño, diario de 21 noches y plan SOS antiansiedad" fetchPriority="high" />
          </div>
        </div>
      </section>

      {/* DOLOR */}
      <section><div className="wrap narrow center">
        <span className="eyebrow">Te suena, ¿verdad?</span>
        <h2>Cada noche es la misma historia</h2>
        <p className="lead">No estás exagerando y no eres «una persona nerviosa». Lo que sientes tiene explicación.</p>
      </div>
        <div className="wrap"><ul className="pains">
          <li>Te metes en la cama <b>agotado/a</b> y, justo entonces, la cabeza empieza a repasar todo.</li>
          <li>Te despiertas <b>a las 3 o las 4 de la madrugada</b> con el corazón acelerado y no puedes volver a dormir.</li>
          <li>Miras el reloj y calculas: «si me duermo ya, dormiré solo 4 horas».</li>
          <li>Te levantas <b>sin energía</b>, vas a tope de café y llegas al final del día sin batería.</li>
          <li>Notas <b>irritabilidad, nudo en el estómago, tensión en cuello y hombros</b> sin motivo claro.</li>
          <li>Sientes que estás al límite: cansancio mental, poca paciencia, ese «burnout» que no se va con un fin de semana.</li>
        </ul></div></section>

      {/* AUTOR */}
      <section><div className="wrap">
        <div className="authorbox">
          {s.authorImg
            ? /* eslint-disable-next-line @next/next/no-img-element */ <img className="author-img" src={s.authorImg} alt={s.authorName} />
            : <div className="author-img ph">🌙</div>}
          <div>
            <span className="eyebrow">Quién está detrás</span>
            <h2 style={{ marginBottom: ".3em" }}>Dormir bien se puede entrenar</h2>
            <p style={{ whiteSpace: "pre-line", color: "var(--mute)" }}>{s.authorDesc}</p>
            <p className="author-name">— {s.authorName}</p>
          </div>
        </div>
      </div></section>

      {/* COSTE FUTURO */}
      <section className="dark"><div className="wrap narrow center">
        <span className="eyebrow">¿Y si sigue así?</span>
        <h2>El problema no se queda quieto. Cada noche en vela aprieta un poco más el nudo.</h2>
        <p className="lead">El mal sueño sostenido no es «solo cansancio»: alimenta la ansiedad al día siguiente, te roba la paciencia con los tuyos, apaga tu concentración en el trabajo y, con los meses, te pasa factura. Cuanto más lo dejas para «mañana», más cuesta salir del círculo.</p>
        <p className="lead" style={{ marginTop: 18 }}><b>La buena noticia:</b> ese círculo se rompe entrenando a tu sistema nervioso a bajar la guardia por la noche. Y eso se aprende. Empieza hoy.</p>
      </div></section>

      {/* MECANISMO */}
      <section className="sand"><div className="wrap narrow center">
        <span className="eyebrow">El verdadero problema</span>
        <h2>No es falta de fuerza de voluntad. Tu cuerpo se ha quedado en «modo alerta».</h2>
        <p className="lead">Con el estrés sostenido, el sistema nervioso se acostumbra a vivir en tensión. Por la noche, cuando todo se calma por fuera, <b>tu cuerpo sigue sin recibir la señal de que ya es seguro descansar</b>.</p>
      </div>
        <div className="wrap"><div className="cards c3">
          <div className="card"><div className="ic">🧠</div><h3>La mente no baja el ritmo</h3><p>Pensamientos en bucle, listas pendientes, preocupaciones. Cuanto más intentas «no pensar», más fuerte se oyen.</p></div>
          <div className="card"><div className="ic">🫀</div><h3>El cuerpo sigue tenso</h3><p>Respiración corta, mandíbula apretada, hombros arriba. El cuerpo manda señales de alarma aunque no haya peligro.</p></div>
          <div className="card"><div className="ic">🔄</div><h3>Se crea un círculo</h3><p>Duermes mal → ansiedad al día siguiente → duermes peor. Romperlo es posible, y empieza por regular tu sistema nervioso.</p></div>
        </div></div></section>

      {/* INTERACTIVO */}
      <section><div className="wrap narrow">
        <div className="center"><span className="eyebrow">Comprueba cómo estás</span><h2>¿Cuántas horas duermes de verdad?</h2></div>
        <div className="meter">
          <output id="hv">6 h</output>
          <input type="range" id="hs" min="3" max="9" step="0.5" defaultValue="6" aria-label="Horas de sueño por noche" />
          <p id="hm"></p>
          <a className="btn block" href="/quiz.html">Descubrir mi perfil con el test (1 min) →</a>
        </div>
      </div></section>

      {/* QUÉ INCLUYE */}
      <section className="sand"><div className="wrap narrow">
        <div className="center"><span className="eyebrow">Dentro de la guía</span><h2>Todo lo que vas a encontrar</h2><p className="lead">Lenguaje claro, ejercicios cortos y un plan día a día. Sin teoría interminable.</p></div>
        <div style={{ marginTop: 30 }}>
          {[
            ["Por qué no puedes desconectar", "Entiende qué le pasa a tu cuerpo por la noche y por qué «relajarte» no funciona cuando estás en modo alerta. Autotest para identificar tu patrón."],
            ["3 técnicas para cortar la ansiedad en 5 minutos", "Respiración guiada, estimulación del nervio vago y anclaje sensorial. Pasos exactos, sin material y válidas en la cama, en el trabajo o en el coche."],
            ["El protocolo de las 3 de la madrugada", "Qué hacer —y qué NO hacer— cuando te despiertas y no puedes volver a dormir, para recuperar el sueño sin angustiarte con el reloj."],
            ["Tu ritual nocturno de 20 minutos", "Un orden sencillo de luz, temperatura, cena y «cierre mental» para que tu cuerpo entienda que el día ha terminado."],
            ["Rutina de día: energía sin quemarte", "Micro-pausas, cafeína, luz natural y límites que ayudan a salir del agotamiento sin tener que dejar tu trabajo."],
            ["Plan de 21 noches y cómo mantenerlo", "Calendario semana a semana, seguimiento de progreso y plan B para las noches malas, que también llegarán."],
          ].map((c, i) => (
            <details key={i} open={i === 0}>
              <summary><span><span className="num">{i + 1}</span>{c[0]}</span></summary>
              <div>{c[1]}</div>
            </details>
          ))}
        </div>
      </div></section>

      {/* TÉCNICAS PREVIEW */}
      <section><div className="wrap">
        <div className="center"><span className="eyebrow">Un adelanto</span><h2>Así de simple es empezar</h2></div>
        <div className="cards c3">
          <div className="card"><div className="ic">🌬️</div><h3>Respiración 4-6</h3><p>Alargar la exhalación ayuda a que el cuerpo salga del estado de alerta. En 2 minutos notarás la diferencia.</p></div>
          <div className="card"><div className="ic">🧊</div><h3>Reset del nervio vago</h3><p>Un gesto de 60 segundos para bajar el pulso y soltar la tensión del cuello y la mandíbula.</p></div>
          <div className="card"><div className="ic">📝</div><h3>Cierre mental</h3><p>Vuelca lo pendiente en papel antes de acostarte y deja de «archivarlo» en tu cabeza toda la noche.</p></div>
        </div>
      </div></section>

      {/* CÓMO FUNCIONA */}
      <section className="sand"><div className="wrap narrow">
        <div className="center"><span className="eyebrow">Cómo funciona</span><h2>Tu plan en 3 pasos</h2></div>
        <div className="steps">
          <div className="step"><h3>Descargas la guía al instante</h3><p>Tras el pago recibes el PDF en tu email. Léelo en el móvil, tablet u ordenador.</p></div>
          <div className="step"><h3>Aplicas 10-15 minutos al día</h3><p>Cada día tiene una acción pequeña y concreta. Sin horas de dedicación.</p></div>
          <div className="step"><h3>Notas el cambio noche tras noche</h3><p>Muchas personas empiezan a notar más calma en las primeras semanas. Los resultados varían según cada caso.</p></div>
        </div>
      </div></section>

      {/* PARA QUIÉN */}
      <section><div className="wrap narrow">
        <div className="center"><h2>¿Es para ti?</h2></div>
        <div className="two">
          <div className="yes"><h3>Es para ti si…</h3><ul style={{ marginTop: 12 }}><li>Te cuesta dormir o te despiertas de madrugada</li><li>Vives con estrés, ansiedad o agotamiento</li><li>Quieres un método sencillo, paso a paso</li><li>Prefieres hábitos y técnicas naturales</li></ul></div>
          <div className="no"><h3>No es para ti si…</h3><ul style={{ marginTop: 12 }}><li>Buscas una «pastilla milagro» de efecto inmediato</li><li>No estás dispuesto/a a dedicar 10 minutos al día</li><li>Necesitas un diagnóstico o tratamiento médico (consulta a tu médico)</li></ul></div>
        </div>
      </div></section>

      {/* TESTIMONIOS */}
      {testis.length > 0 && (
        <section className="sand"><div className="wrap">
          <div className="center"><span className="eyebrow">Experiencias</span><h2>Lo que cuentan quienes lo han probado</h2></div>
          <div className="cards c3">
            {testis.map((t, i) => (
              <div className="quote" key={i}>
                <div className="stars">★★★★★</div>
                <p>«{t.text}»</p>
                <b>{t.name}</b>
                {t.place && <small>{t.place}</small>}
              </div>
            ))}
          </div>
        </div></section>
      )}

      {/* OFERTA */}
      <section className="dark" id="precio"><div className="wrap center">
        <span className="eyebrow">Tu plan completo</span>
        <h2>Empieza esta noche</h2>
        <div className="offer">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="cover sm" src={s.coverImg} alt="Guía Noches en Calma + 3 bonus" loading="lazy" />
          <h3>Noches en Calma + 3 bonus</h3>
          <ul className="stack">
            <li><span>📘 Guía «Noches en Calma» (21 días)</span><s>39 €</s></li>
            <li><span>🎁 Bonus 1: Checklist de higiene del sueño</span><s>9 €</s></li>
            <li><span>🎁 Bonus 2: Diario de 21 noches (imprimible)</span><s>7 €</s></li>
            <li><span>🎁 Bonus 3: Plan SOS antiansiedad en 5 min</span><s>9 €</s></li>
          </ul>
          <div className="old">{s.priceOld} €</div>
          <div className="price">{s.priceNow}<small> €</small></div>
          <p className="micro">Pago único · Sin suscripciones · Acceso inmediato</p>
          <BuyButton url={s.checkoutUrl} className="btn" block>Quiero Noches en Calma →</BuyButton>
          <div className="pay"><img src="/pay/visa.svg" alt="Visa" /><img src="/pay/master.svg" alt="Mastercard" /><img src="/pay/apple_pay.svg" alt="Apple Pay" /><img src="/pay/google_pay.svg" alt="Google Pay" /><img src="/pay/bizum.svg" alt="Bizum" /></div>
          <p className="micro">🔒 Pago seguro y cifrado. Métodos disponibles según tu dispositivo y país.</p>
        </div>
      </div></section>

      {/* GARANTÍA */}
      <section className="sand"><div className="wrap narrow">
        <div className="guar">
          <div className="seal"><span><b>7</b>días</span></div>
          <div><h2 style={{ marginBottom: ".3em" }}>Garantía de satisfacción total</h2><p>Pruébala 7 días. Si sientes que no es para ti, escríbenos y te devolvemos el 100 % de tu dinero, sin preguntas ni complicaciones.</p></div>
        </div>
      </div></section>

      {/* FAQ */}
      <section><div className="wrap narrow">
        <div className="center"><h2>Preguntas frecuentes</h2></div>
        {[
          ["¿Cómo recibo la guía?", "Inmediatamente después del pago recibes un email con el enlace de descarga del PDF y los bonus. Revisa también la carpeta de spam."],
          ["¿Cuánto tiempo al día necesito?", "Entre 10 y 15 minutos. Las técnicas de emergencia para la ansiedad duran 5 minutos."],
          ["¿Sustituye a un tratamiento médico?", "No. Es una guía educativa de hábitos y técnicas de autocuidado. Si tienes un diagnóstico, tomas medicación o tus síntomas son intensos, consulta con tu médico antes de hacer cambios."],
          ["¿Funcionará en mi caso?", "Los resultados varían de una persona a otra. Por eso existe la garantía de 7 días: puedes probarla sin riesgo."],
          ["¿Es una suscripción?", "No. Es un pago único. No hay cargos recurrentes."],
          ["¿Puedo leerla en el móvil?", "Sí. Es un PDF optimizado para móvil, tablet y ordenador."],
        ].map((f, i) => (
          <details key={i}><summary><span>{f[0]}</span></summary><div>{f[1]}</div></details>
        ))}
      </div></section>

      {/* CTA FINAL */}
      <section className="dark center"><div className="wrap narrow">
        <h2>Esta noche puede ser distinta</h2>
        <p className="lead">Cada noche en vela te cuesta energía, paciencia y salud. Empieza hoy y prueba sin riesgo durante 7 días.</p>
        <div style={{ marginTop: 22 }}><BuyButton url={s.checkoutUrl} className="btn">Quiero dormir mejor →</BuyButton></div>
        <p className="micro">Pago único de {s.priceNow} € · Garantía de 7 días</p>
      </div></section>

      <footer><div className="wrap">
        <p><a href="/legal.html#aviso">Aviso legal</a> · <a href="/privacidad.html">Privacidad</a> · <a href="/soporte.html">Soporte</a> · <a href="/legal.html#cookies">Cookies</a> · <a href="/legal.html#terminos">Términos y devoluciones</a></p>
        <p><b>Aviso importante:</b> «Noches en Calma» es un producto educativo y de bienestar. No diagnostica, trata, cura ni previene ninguna enfermedad ni sustituye el consejo, diagnóstico o tratamiento de un profesional sanitario. Los resultados varían según cada persona. Si tienes síntomas persistentes o graves, consulta con tu médico.</p>
        <p>Este sitio no forma parte de Facebook, Instagram ni Meta Platforms, Inc. · © 2026 Noches en Calma. Todos los derechos reservados.</p>
      </div></footer>

      <div className="sticky" id="stk"><div>Noches en Calma<br /><b>{s.priceNow} €</b></div><BuyButton url={s.checkoutUrl} className="btn sm">Quiero la guía</BuyButton></div>

      <ClientScript />
    </>
  );
}
