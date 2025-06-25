"use client";

import Header from '@/components/header';
import Footer from '@/components/footer';
import EnquiryForm from '@/components/enquiry-form';

export default function EnquiryPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <EnquiryForm />
      </main>
      <Footer />
    </div>
  );
}