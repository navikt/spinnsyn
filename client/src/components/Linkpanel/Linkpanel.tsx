import './Linkpanel.less';

import React from 'react';
import { Element, Undertekst, Undertittel } from 'nav-frontend-typografi';
import { LenkepanelBase } from 'nav-frontend-lenkepanel';
import { Link } from 'react-router-dom';

interface LinkpanelProps {
  link: string;
  title: string;
  greyText?: string | string[];
  statusText?: string;
  svg: string;
}

const Linkpanel = ({ link, title, greyText, statusText, svg }: LinkpanelProps) => {
  return (
    <LenkepanelBase border href="" linkCreator={(linkProps) => <Link {...linkProps} to={link} />}>
      <div className="linkpanel-container ">
        <img src={svg} width={60} className="linkpanel-ikon" alt="Lenkepanelillustrasjon" />
        <div className={`linkpanel-tekst ${!statusText && 'linkpanel-tekst--sentrer'}`}>
          <Undertittel className="lenkepanel__heading">{title}</Undertittel>
          {greyText instanceof Array ? (
            greyText.map((tekst, index) => <Undertekst key={index.toString()}>{tekst}</Undertekst>)
          ) : (
            <Undertekst>{greyText}</Undertekst>
          )}
          {statusText && <Element className="linkpanel__status">{statusText}</Element>}
        </div>
      </div>
    </LenkepanelBase>
  );
};

export default Linkpanel;
