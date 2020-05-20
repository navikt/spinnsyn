import React from 'react';
import './App.less';
import PageTitle from './components/PageTitle/PageTitle';
import Veileder from './components/Veileder/Veileder';
import { Normaltekst, Element } from 'nav-frontend-typografi';

function App() {
  return (
    <div className="pagecontent">
      <PageTitle title="Title" subtitle="Subtitle" />
      <Veileder fargetema="suksess">
        <Element>Godkjent søknad om sykepenger</Element>
        <br />
        <Normaltekst>
          NAV har behandlet søknaden din og konkludert med at du har krav på sykepenger. Nedenfor finner du mer om
          beregningsgrunnlag, utbetaling og dokumenter som er brukt for å behandle saken
        </Normaltekst>
      </Veileder>
      <Veileder fargetema="advarsel">
        <Element>Kontakt, informasjon og oppfølging</Element>
        <br />
        <Normaltekst>
          Ønsker du kontakt med en veileder, finne ut mer om hva som skjer under et sykefravær eller lage en
          oppfølgingsplan med arbeidsplassen din? Alt dette samt mye mer kan du finne på hovedsiden
        </Normaltekst>
      </Veileder>
      <Veileder fargetema="feilmelding">
        <Element>Avslag på søknad om sykepenger</Element>
        <br />
        <Normaltekst>
          NAV har behandlet søknaden din og har funnet ut at du ikke har krav på sykepenger. Nedenfor kan du finne ut
          hvorfor, hvilke lover som gjelder for begrunnelsen og hvilke muligheter du har for å klage på beslutning.
        </Normaltekst>
      </Veileder>
    </div>
  );
}

export default App;
