import React from 'react';
import Veileder from './Veileder';
import { Normaltekst, Element } from 'nav-frontend-typografi';

type StandardVeilederProps = {
  title: string;
  content: string;
  fargetema: 'normal' | 'info' | 'suksess' | 'advarsel' | 'feilmelding';
};

const StandardVeileder = ({ title, content, fargetema }: StandardVeilederProps) => {
  return (
    <Veileder fargetema={fargetema}>
      <Element>{title}</Element>
      <br />
      <Normaltekst>{content}</Normaltekst>
    </Veileder>
  );
};

export default StandardVeileder;
