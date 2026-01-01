import Layout from '@/components/layout/Layout';
import PageHero from '@/components/shared/PageHero';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: 'Mesaj trimis!', description: 'Vă vom contacta în cel mai scurt timp.' });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <>
      <Helmet>
        <title>Contact - Megaparc | Construcții Chișinău, Moldova</title>
        <meta name="description" content="Contactați Megaparc pentru proiecte de construcții. Str. Constructorilor 45, Chișinău. Tel: +373 22 123 456" />
      </Helmet>
      <Layout>
        <PageHero
          title="Contact"
          subtitle="Suntem aici să vă ajutăm cu proiectul dumneavoastră"
          image="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop&q=80"
          breadcrumb={[{ label: 'Acasă', href: '/' }, { label: 'Contact' }]}
        />

        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Info */}
              <div>
                <span className="text-primary font-semibold uppercase tracking-widest text-sm">Informații Contact</span>
                <h2 className="section-title mt-4 mb-8">Hai Să Discutăm</h2>
                
                <div className="space-y-6 mb-8">
                  <div className="flex gap-4"><MapPin className="w-6 h-6 text-primary flex-shrink-0" /><div><h3 className="font-semibold mb-1">Adresă</h3><p className="text-muted-foreground">Str. Constructorilor 45, Chișinău, Moldova</p></div></div>
                  <div className="flex gap-4"><Phone className="w-6 h-6 text-primary flex-shrink-0" /><div><h3 className="font-semibold mb-1">Telefon</h3><a href="tel:+37322123456" className="text-muted-foreground hover:text-primary">+373 22 123 456</a></div></div>
                  <div className="flex gap-4"><Mail className="w-6 h-6 text-primary flex-shrink-0" /><div><h3 className="font-semibold mb-1">Email</h3><a href="mailto:office@megaparc.md" className="text-muted-foreground hover:text-primary">office@megaparc.md</a></div></div>
                  <div className="flex gap-4"><Clock className="w-6 h-6 text-primary flex-shrink-0" /><div><h3 className="font-semibold mb-1">Program</h3><p className="text-muted-foreground">Luni - Vineri: 9:00 - 18:00</p></div></div>
                </div>

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d87123.05428510368!2d28.77380565!3d47.0245117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97c3628b769a1%3A0x37d1d6305749dd3c!2sChi%C8%99in%C4%83u%2C%20Moldova!5e0!3m2!1sen!2s!4v1699000000000!5m2!1sen!2s" className="w-full h-64 border-0" loading="lazy" title="Locație Megaparc" />
              </div>

              {/* Contact Form */}
              <div className="bg-muted p-8 lg:p-12">
                <h3 className="font-heading text-3xl tracking-wider mb-6">Trimite un Mesaj</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <input type="text" placeholder="Nume complet *" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-4 border-2 border-border bg-background focus:border-primary outline-none transition-colors" />
                  <input type="email" placeholder="Email *" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-4 border-2 border-border bg-background focus:border-primary outline-none transition-colors" />
                  <input type="tel" placeholder="Telefon" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full px-4 py-4 border-2 border-border bg-background focus:border-primary outline-none transition-colors" />
                  <textarea placeholder="Mesajul dumneavoastră *" required rows={5} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full px-4 py-4 border-2 border-border bg-background focus:border-primary outline-none transition-colors resize-none" />
                  <Button type="submit" size="lg" className="w-full">Trimite Mesaj</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Contact;
