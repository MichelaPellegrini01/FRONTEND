import "./MixedBreed.css";
import { FaLightbulb } from "react-icons/fa";
import heroImage from "../assets/mixedbreed/meticci.png";

function MixedBreed() {
  return (
    <section className="mixedBreed">

      <section
        className="heroSection"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="heroOverlay">

          <div className="heroText">

            <h1>Meticci</h1>

            <h2>Ogni cane racconta una storia.</h2>

            <p>
              I meticci non sono una razza, ma un mix unico di
              caratteristiche, esperienze e amore.
            </p>

            <p>
              Sono cani speciali, unici e irripetibili,
              proprio come le persone che li scelgono.
            </p>

          </div>

        </div>
      </section>

      <section className="historySection">

  <div className="historyContent">

    <div className="historyText">

      <h2>Tutti i cani condividono una storia</h2>

      <p>
        Le razze canine che conosciamo oggi non sono sempre esistite.
      </p>

      <p>
        Quando osserviamo un cane di razza e un meticcio, è facile concentrarsi sulle loro differenze. In realtà, tutti i cani hanno un'origine comune e condividono una lunga storia che accompagna l'uomo da migliaia di anni.
      </p>

      <p>
        Nel corso dei secoli l'uomo ha selezionato e incrociato cani con
        caratteristiche specifiche per ottenere razze adatte a diversi
        compiti, come la caccia, la guardia, il pascolo o la compagnia.
      </p>

      <p>
        Per questo motivo tutte le razze moderne condividono un'origine
        comune. I meticci, invece, rappresentano la naturale varietà
        genetica dei cani e ogni esemplare è davvero unico, fatto di incontri, genetica e casualità ed è proprio questa unicità a renderlo speciale.
      </p>

    </div>

    <div className="historyCard">

      <h3>  <FaLightbulb className="me-2 text-warning" />Lo sapevi?</h3>

      <p>
        Le razze canine moderne sono nate grazie a secoli di selezione e
        incroci. Ogni cane, di razza o meticcio, condivide la stessa storia
        evolutiva.
      </p>

    </div>

  </div>

</section>

<section className="valueSection">

  <h2>Il valore non si misura dal pedigree</h2>

  <p>
    Per troppo tempo si è pensato che un cane di razza fosse, per definizione,
    migliore di un meticcio. In realtà, il valore di un cane non si misura da un
    certificato o dal suo albero genealogico, ma dall'affetto, dalla fiducia e
    dal legame che riesce a costruire con la propria famiglia.
    Anche la salute e l'educazione non dipendono dall'essere di razza o
    meticcio, ma dalle cure ricevute, dall'ambiente in cui cresce e
    dall'amore con cui viene accompagnato ogni giorno.
  </p>

</section>

<section className="adoptionSection">

  <div className="adoptionContent">

    <h2>L'importanza dell'adozione</h2>

    <p>
      Adottare un meticcio significa offrire una seconda possibilità a un cane
      che aspetta una famiglia. Ogni anno migliaia di cani vengono accolti nei
      rifugi, dove attendono qualcuno che scelga di cambiare la loro vita.
    </p>

    <p>
      L'adozione è un gesto di responsabilità e di amore. Un cane adottato sa donare affetto, fiducia e
      compagnia ogni giorno, diventando un membro della famiglia a tutti gli
      effetti.
    </p>

    <p>
       Scegliere di accogliere un cane significa costruire un legame che va
    oltre l'aspetto o la razza. È una scelta che arricchisce la vita di
    entrambi e dimostra che l'amore non ha bisogno di un pedigree.
    </p>

    <p>
      Ogni cane merita una possibilità.
    </p>

    <blockquote>
      "Adottare un cane non cambia il mondo intero,
      ma cambia il mondo di quel cane."
    </blockquote>

  </div>

</section>

    </section>
  );
}

export default MixedBreed;