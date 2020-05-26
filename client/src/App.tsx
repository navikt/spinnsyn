import React from 'react';
import './App.less';
import PageTitle from './components/PageTitle/PageTitle';
import Veileder from './components/Veileder/Veileder';
import { Normaltekst, Element } from 'nav-frontend-typografi';
import StandardVeileder from './components/Veileder/StandardVeileder';
import { BrowserRouter } from 'react-router-dom';
import Linkpanel from './components/Linkpanel/Linkpanel';
import bjorn from './svg/bjorn.svg';

function App() {
  return (
    <BrowserRouter>
      <div className="pagecontent">
        <PageTitle title="Title" subtitle="Subtitle" />
        <Veileder fargetema="suksess">
          <Element>Godkjent søknad om sykepenger</Element>
          <br />
          <Element>Andre element</Element>
          <br />
          <Normaltekst>
            NAV har behandlet søknaden din og konkludert med at du har krav på sykepenger. Nedenfor finner du mer om
            beregningsgrunnlag, utbetaling og dokumenter som er brukt for å behandle saken
          </Normaltekst>
        </Veileder>
        <StandardVeileder
          fargetema="advarsel"
          title="Kontakt, informasjon og oppfølging"
          content="Ønsker du kontakt med en veileder, finne ut mer om hva som skjer under et sykefravær eller lage en
        oppfølgingsplan med arbeidsplassen din? Alt dette samt mye mer kan du finne på hovedsiden."
        />
        <StandardVeileder
          fargetema="feilmelding"
          title="Avslag på søknad om sykepenger"
          content="NAV har behandlet søknaden din og har funnet ut at du ikke har krav på sykepenger. Nedenfor kan du finne ut
          hvorfor, hvilke lover som gjelder for begrunnelsen og hvilke muligheter du har for å klage på beslutning."
        />
        <Linkpanel
          link="www.nrk.no"
          title="Søknad om sykepenger"
          greyText="Firma1 AS - 100% i 13 dager"
          statusText="Søknad ble sendt til Firma1 AS/NAV 22. november 2019"
          svg={bjorn}
        />
        <Linkpanel
          link="www.nrk.no"
          title="Sykmelding"
          greyText="Firma1 AS - 100% i 13 dager"
          statusText="Sykmelding ble bekreftet og sendt til arbeidsgiver 03. november 2019"
          svg={bjorn}
        />
        <Linkpanel
          link="www.nrk.no"
          title="A-inntekt"
          greyText="Innrapporterte innteker for 13 siste måneder"
          svg={bjorn}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
