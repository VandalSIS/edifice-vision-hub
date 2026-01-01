import Layout from '@/components/layout/Layout';
import PageHero from '@/components/shared/PageHero';
import { Helmet } from 'react-helmet-async';

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Politica de Confidențialitate - Megaparc</title>
        <meta name="description" content="Politica de confidențialitate Megaparc - informații despre colectarea și protecția datelor personale." />
      </Helmet>
      <Layout>
        <PageHero
          title="Politica de Confidențialitate"
          image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&h=1080&fit=crop&q=80"
          breadcrumb={[{ label: 'Acasă', href: '/' }, { label: 'Privacy' }]}
        />

        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <h2 className="font-heading text-3xl tracking-wider">1. Colectarea Datelor</h2>
              <p className="text-muted-foreground">Megaparc colectează date personale doar în scopuri legitime de afaceri, inclusiv numele, adresa de email și numărul de telefon furnizate prin formularele de contact.</p>

              <h2 className="font-heading text-3xl tracking-wider mt-8">2. Utilizarea Datelor</h2>
              <p className="text-muted-foreground">Datele colectate sunt utilizate exclusiv pentru a răspunde solicitărilor dumneavoastră și pentru a vă informa despre serviciile noastre.</p>

              <h2 className="font-heading text-3xl tracking-wider mt-8">3. Protecția Datelor</h2>
              <p className="text-muted-foreground">Implementăm măsuri tehnice și organizatorice pentru a proteja datele personale împotriva accesului neautorizat sau a pierderii.</p>

              <h2 className="font-heading text-3xl tracking-wider mt-8">4. Cookie-uri</h2>
              <p className="text-muted-foreground">Site-ul nostru utilizează cookie-uri pentru a îmbunătăți experiența utilizatorilor. Puteți dezactiva cookie-urile din setările browserului.</p>

              <h2 className="font-heading text-3xl tracking-wider mt-8">5. Drepturile Dumneavoastră</h2>
              <p className="text-muted-foreground">Aveți dreptul de a accesa, rectifica sau șterge datele personale. Pentru solicitări, contactați-ne la office@megaparc.md.</p>

              <h2 className="font-heading text-3xl tracking-wider mt-8">6. Contact</h2>
              <p className="text-muted-foreground">Pentru întrebări privind confidențialitatea: office@megaparc.md | +373 22 123 456</p>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Privacy;
