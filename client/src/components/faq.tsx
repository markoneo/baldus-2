import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Ali imam stroške, če primer ni uspešen?",
      answer: "Ne. Vse storitve so brezplačne, dokler ni dosežena odškodnina."
    },
    {
      question: "Kako dolgo traja postopek?",
      answer: "V povprečju 30–90 dni, odvisno od kompleksnosti primera in odzivnosti zavarovalnice."
    },
    {
      question: "Kolikšna je provizija?",
      answer: "Med 10–20 %, vedno dogovorjena vnaprej."
    },
    {
      question: "Kaj potrebujem za začetek?",
      answer: "Osnovne podatke o nesreči in medicinsko dokumentacijo. Pomagamo vam zbrati vse potrebno."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="vprasanja" className="py-12 sm:py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-4">Pogosta vprašanja</h2>
          <p className="text-slate text-base sm:text-lg">Odgovori na najpogostejša vprašanja o odškodninah</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg" data-testid={`faq-${index}`}>
              <button
                className="w-full px-4 sm:px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                onClick={() => toggleFAQ(index)}
                data-testid={`faq-toggle-${index}`}
              >
                <span className="font-semibold text-navy text-sm sm:text-base pr-4">{faq.question}</span>
                <ChevronDown 
                  className={cn(
                    "text-gold w-5 h-5 transform transition-transform flex-shrink-0",
                    openIndex === index && "rotate-180"
                  )}
                />
              </button>
              {openIndex === index && (
                <div className="px-4 sm:px-6 pb-4" data-testid={`faq-answer-${index}`}>
                  <p className="text-slate text-sm sm:text-base">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
