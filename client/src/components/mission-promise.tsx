export default function MissionPromise() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-16 lg:gap-12 items-center">
          {/* Left Column - Our Mission */}
          <div className="space-y-8">
            <div>
              <div className="w-16 h-1 bg-gold mb-6"></div>
              <h2 className="text-3xl font-bold text-navy mb-6">Naša misija</h2>
              <p className="text-slate text-lg leading-relaxed">
                Zagotoviti prilagojene pravne rešitve s sočutjem in profesionalnostjo. 
                Vsakemu stranki nudimo osebno obravnavo in strokovno pomoč pri uveljavljanju 
                njihovih pravic do pravične odškodnine.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                alt="Naša pravna ekipa" 
                className="rounded-xl shadow-lg w-full"
              />
            </div>
          </div>

          {/* Center Column - Large Image */}
          <div className="relative">
            <div className="aspect-[4/5] relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=750" 
                alt="BALDUS pravna pisarna" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <div className="text-white/40 text-6xl font-light tracking-[0.2em] mb-4">
                  BALDUS
                </div>
                <div className="text-gold text-lg font-medium">
                  Odškodnine
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Our Promise */}
          <div className="space-y-8 lg:text-right">
            <div>
              <div className="w-16 h-1 bg-gold mb-6 lg:ml-auto"></div>
              <h2 className="text-3xl font-bold text-navy mb-6">Naša obljuba</h2>
              <p className="text-slate text-lg leading-relaxed">
                Varovati vaše pravice in zagovarjati vaše najboljše interese na vsakem koraku. 
                Z nami ste v varnih rokah - od prvega klica do končnega izplačila odškodnine.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                alt="Pravična zaščita" 
                className="rounded-xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}