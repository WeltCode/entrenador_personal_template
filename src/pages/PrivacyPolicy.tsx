import { Link } from "react-router-dom";
import { TRAINER } from "@/config/trainer";

const PrivacyPolicy = () => {
  const updated = new Date().toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container max-w-3xl py-24">
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-mono-display text-[11px] uppercase tracking-widest text-primary mb-12 hover:opacity-80 transition-opacity"
        >
          ← Volver
        </Link>

        <div className="flex items-center gap-3 mb-4">
          <span className="h-px w-12 bg-primary" />
          <span className="font-mono-display text-[11px] uppercase tracking-[0.3em] text-primary">Legal</span>
        </div>
        <h1 className="font-display text-5xl lg:text-6xl mb-12">POLÍTICA DE PRIVACIDAD</h1>

        <div className="space-y-10 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="font-display text-2xl text-foreground mb-3">1. Responsable del tratamiento</h2>
            <p>
              <strong className="text-foreground">{TRAINER.legal.companyName}</strong><br />
              NIF/CIF: {TRAINER.legal.nif}<br />
              Dirección: {TRAINER.legal.address}<br />
              Email:{" "}
              <a href={`mailto:${TRAINER.email}`} className="text-primary hover:underline">
                {TRAINER.email}
              </a>
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground mb-3">2. Datos que recabamos</h2>
            <p>
              Recabamos los datos personales que el usuario facilita voluntariamente a través de los
              formularios de contacto y el chat de WhatsApp: nombre, email, teléfono y objetivos
              deportivos. No se recaban datos especialmente protegidos.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground mb-3">3. Finalidad del tratamiento</h2>
            <p>
              Los datos facilitados se utilizan exclusivamente para: (a) responder a las consultas y
              solicitudes de información; (b) gestionar la relación contractual con los clientes; (c)
              enviar comunicaciones comerciales propias, previo consentimiento expreso.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground mb-3">4. Base jurídica</h2>
            <p>
              El tratamiento de datos se realiza bajo las siguientes bases legales: ejecución de un
              contrato (Art. 6.1.b RGPD), interés legítimo (Art. 6.1.f RGPD) y consentimiento expreso
              del interesado (Art. 6.1.a RGPD) para comunicaciones comerciales.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground mb-3">5. Conservación de datos</h2>
            <p>
              Los datos se conservarán mientras exista la relación comercial y, una vez finalizada,
              durante los plazos legales exigibles (hasta 6 años según la normativa mercantil española).
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground mb-3">6. Derechos del interesado</h2>
            <p>
              Puede ejercer en cualquier momento sus derechos de acceso, rectificación, supresión,
              oposición, limitación del tratamiento y portabilidad, escribiendo a{" "}
              <a href={`mailto:${TRAINER.email}`} className="text-primary hover:underline">
                {TRAINER.email}
              </a>{" "}
              con copia de su documento de identidad. También tiene derecho a presentar una reclamación
              ante la Agencia Española de Protección de Datos (aepd.es).
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground mb-3">7. Cookies</h2>
            <p>
              Este sitio web utiliza cookies propias de carácter técnico y funcional necesarias para su
              correcto funcionamiento. No se utilizan cookies de terceros con fines publicitarios. Puede
              configurar su navegador para rechazar las cookies, si bien esto puede afectar a la
              funcionalidad del sitio.
            </p>
          </section>
        </div>

        <div className="ticker-divider mt-16 mb-6" />
        <p className="font-mono-display text-[10px] uppercase tracking-widest text-muted-foreground">
          Última actualización: {updated}
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
