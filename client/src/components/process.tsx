export default function Process() {
  const steps = [
    {
      number: "1",
      title: "Brezplačna analiza",
      description: "V nekaj korakih nam posredujete podatke o primeru. Naša pravna ekipa jih pregleda in oceni možnosti uspeha."
    },
    {
      number: "2",
      title: "Priprava zahtevka",
      description: "Zberemo dokumentacijo, preučimo medicinska dokazila in pripravimo pravno obrazložitev zahtevka."
    },
    {
      number: "3",
      title: "Pogajanja z zavarovalnico",
      description: "V vašem imenu komuniciramo s pristojnimi institucijami in zastopamo vaše interese."
    },
    {
      number: "4",
      title: "Poravnava ali tožba",
      description: "V večini primerov dosežemo poravnavo. Če to ni mogoče, vas usmerimo in podpremo tudi v sodnem postopku."
    },
    {
      number: "5",
      title: "Izplačilo in zaključek",
      description: "Prejmete pravično odškodnino. Naš strošek je le del uspešno izterjanega zneska."
    }
  ];

  return (
    <section id="postopek" className="py-16 bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Kako delujemo</h2>
          <p className="text-gray-300 text-lg">Postopek pridobitve odškodnine v 5 korakih</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center" data-testid={`step-${index}`}>
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">{step.number}</span>
              </div>
              <h3 className="font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-300 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
