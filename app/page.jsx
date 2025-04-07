import "./globals.css"
import AnaglyphText from './components/AnaglyphText';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      
      <div
        className="
          absolute inset-0
          bg-gradient-to-tr from-[#FC05CF]/10 via-black to-[#64E9EE]/10
          mix-blend-screen
          animate-pulse
        "
      />
      
      {/* Contenu principal */}
      <section className="relative top-[12vh] z-10 flex flex-col items-center justify-center h-full px-4 py-20">
        
        {/* TITRE PRINCIPAL */}
        <h1 className="font-extrabold text-4xl sm:text-6xl md:text-7xl text-center mb-8 glitchy-title">
          <span className="block uppercase tracking-widest mb-2">
            <AnaglyphText>
              Bienvenue chez
            </AnaglyphText>
          </span>
          <span className="block uppercase">
            Danial <span className="text-[#FC05CF]">MALIK</span>
          </span>
        </h1>
        <div className="mb-8">
          <span className="inline-block text-4xl animate-bounce select-none">
          </span>
        </div>

        {/* DESCRIPTION */}
        <p className="
          max-w-2xl text-center text-lg sm:text-xl md:text-2xl
          leading-relaxed mb-6 neon-text
        ">
          <span className="inline-block">Prénom : <strong>Danial</strong>, Nom : <strong>MALIK</strong>.</span><br/>
          <AnaglyphText>Je suis informaticien</AnaglyphText>, étudiant en réseau & cybersécurité. Ici, vous trouverez la majorité de mon travail réalisé en 2 ans d'informatique au Lycée de l'Hautil de Jouy-le-Moutier.
          <br />
          <strong>Mon CV :</strong>
          <br />
          <a
    href="/MALIK%20DANIAL%20(4).pdf"
    download="MALIK_DANIAL_CV.pdf"
    className="underline hover:text-[#FC05CF]"
  >
    <AnaglyphText>Ici</AnaglyphText>
  </a>
        </p>


      </section>
    </main>
  );
}
