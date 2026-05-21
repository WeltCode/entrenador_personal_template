import { Link } from "react-router-dom";
import { TRAINER } from "@/config/trainer";

const LegalNotice = () => {
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
        <h1 className="font-display text-5xl lg:text-6xl mb-12">AVISO LEGAL</h1>

        <div className="space-y-10 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="font-display text-2xl text-foreground mb-3">1. Datos identificativos</h2>
            <p>
              En cumplimiento de la Ley 34/2002 de Servicios de la Sociedad de la Información
              (LSSI-CE), se informa que el presente sitio web es propiedad de:<br /><br />
              <strong className="text-foreground">{TRAINER.legal.companyName}</strong><br />
              NIF/CIF: {TRAINER.legal.nif}<br />
              Domicilio: {TRAINER.legal.address}<br />
              Email:{" "}
              <a href={`mailto:${TRAINER.email}`} className="text-primary hover:underline">
                {TRAINER.email}
              </a>
              <br />
              Teléfono: {TRAINER.phone}
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground mb-3">2. Objeto y uso del sitio</h2>
            <p>
              El presente sitio web tiene por objeto la presentación de los servicios de entrenamiento
              personal, nutrición deportiva y coaching integral ofrecidos por{" "}
              {TRAINER.legal.companyName}. El acceso y uso del sitio implica la aceptación de las
              presentes condiciones legales.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground mb-3">3. Propiedad intelectual</h2>
            <p>
              Todos los contenidos de este sitio web (textos, imágenes, diseño, código fuente,
              logotipos y demás elementos) son propiedad de {TRAINER.legal.companyName} o de terceros
              que han autorizado su uso, y están protegidos por la normativa vigente en materia de
              propiedad intelectual e industrial. Queda prohibida su reproducción, distribución o
              comunicación pública sin autorización expresa.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground mb-3">4. Exclusión de responsabilidad</h2>
            <p>
              {TRAINER.legal.companyName} no se hace responsable de los daños o perjuicios derivados
              del uso de este sitio web, de la imposibilidad de acceso al mismo, ni de los contenidos
              de sitios web de terceros a los que pueda redirigirse mediante enlaces.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground mb-3">5. Legislación aplicable</h2>
            <p>
              Las presentes condiciones se rigen e interpretan conforme a la legislación española
              vigente. Para la resolución de cualquier controversia, las partes se someten a los
              juzgados y tribunales del domicilio del prestador del servicio, salvo que la normativa
              aplicable establezca otro fuero imperativo.
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

export default LegalNotice;
