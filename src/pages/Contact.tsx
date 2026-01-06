import Layout from '@/components/layout/Layout';
import PageHero from '@/components/shared/PageHero';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';

const Contact = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: t('common.success'), description: t('contact.form.send') });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <>
      <Helmet>
        <title>{t('contact.hero.title')} - Megaparc | IMC Group</title>
        <meta name="description" content={t('contact.hero.subtitle')} />
      </Helmet>
      <Layout>
        <PageHero
          title={t('contact.hero.title')}
          subtitle={t('contact.hero.subtitle')}
          image="/DJI_20251217160951_0083_D.jpg"
          breadcrumb={[{ label: t('common.home'), href: '/' }, { label: t('contact.hero.title') }]}
        />

        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Info */}
              <div>
                <span className="text-primary font-semibold uppercase tracking-widest text-sm">{t('footer.contact')}</span>
                <h2 className="section-title mt-4 mb-8">{t('contact.hero.subtitle')}</h2>
                
                <div className="space-y-6 mb-8">
                  <div className="flex gap-4">
                    <MapPin className="w-6 h-6 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">{t('contact.info.address')}</h3>
                      <p className="text-muted-foreground">{t('footer.address')}<br />{t('footer.country')}</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Phone className="w-6 h-6 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">{t('contact.info.phone')}</h3>
                      <a href="tel:+373022835235" className="text-muted-foreground hover:text-primary block">+373 (022) 835-235</a>
                      <a href="tel:+373075803010" className="text-muted-foreground hover:text-primary">+373 (075) 803 010</a>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Mail className="w-6 h-6 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">{t('contact.info.email')}</h3>
                      <a href="mailto:office@imc.md" className="text-muted-foreground hover:text-primary">office@imc.md</a>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Clock className="w-6 h-6 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">{t('contact.info.schedule')}</h3>
                      <p className="text-muted-foreground">{t('footer.schedule')}</p>
                    </div>
                  </div>
                </div>

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d87123.05428510368!2d28.77380565!3d47.0245117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97c3628b769a1%3A0x37d1d6305749dd3c!2sChi%C8%99in%C4%83u%2C%20Moldova!5e0!3m2!1sen!2s!4v1699000000000!5m2!1sen!2s" className="w-full h-64 border-0" loading="lazy" title="Locație Megaparc" />
              </div>

              {/* Contact Form */}
              <div className="bg-muted p-8 lg:p-12">
                <h3 className="font-heading text-3xl tracking-wider mb-6">{t('cta.sendMessage')}</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <input type="text" placeholder={`${t('contact.form.name')} *`} required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-4 border-2 border-border bg-background focus:border-primary outline-none transition-colors" />
                  <input type="email" placeholder={`${t('contact.form.email')} *`} required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-4 border-2 border-border bg-background focus:border-primary outline-none transition-colors" />
                  <input type="tel" placeholder={t('contact.form.phone')} value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full px-4 py-4 border-2 border-border bg-background focus:border-primary outline-none transition-colors" />
                  <textarea placeholder={`${t('contact.form.message')} *`} required rows={5} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full px-4 py-4 border-2 border-border bg-background focus:border-primary outline-none transition-colors resize-none" />
                  <Button type="submit" size="lg" className="w-full">{t('contact.form.send')}</Button>
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
