import Header from '@/components/header';
import Hero from '@/components/hero';
import Services from '@/components/services';
import Testimonials from '@/components/testimonials';
import EnquiryForm from '@/components/enquiry-form';
import Newsletter from '@/components/newsletter';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <Testimonials />
        <EnquiryForm />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}