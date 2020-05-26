import './LenkepanelWrapper.less';

import React from 'react';
import { Element, Undertekst, Undertittel } from 'nav-frontend-typografi';
import { LenkepanelBase } from 'nav-frontend-lenkepanel';
import { Link } from 'react-router-dom';

type Ikonbakgrunn = 'gul' | 'bla' | 'gra';

interface LenkepanelProps {
    lenke: string;
    tittel: string;
    tekstGra?: string | string[];
    tekstStatus?: string;
    svg: string;
    ikonbakgrunn?: Ikonbakgrunn;
    ekstern?: boolean;
}

const LenkepanelWrapper = ({ lenke, tittel, tekstGra, tekstStatus, svg, ikonbakgrunn, ekstern }: LenkepanelProps) => {
    const panelContent = (
        <div className="lenkepanelwrapper-container ">
            <img
                src={svg}
                width={60}
                className={`lenkepanelwrapper-ikon ${ikonbakgrunn && `ikon--${ikonbakgrunn}`}`}
                alt="Lenkepanelillustrasjon"
            />
            <div className={`lenkepanelwrapper-tekst ${!tekstStatus && 'lenkepanelwrapper-tekst--sentrer'}`}>
                <Undertittel className="lenkepanel__heading">{tittel}</Undertittel>
                {tekstGra instanceof Array ? (
                    tekstGra.map((tekst, index) => <Undertekst key={index.toString()}>{tekst}</Undertekst>)
                ) : (
                    <Undertekst>{tekstGra}</Undertekst>
                )}
                {tekstStatus && <Element className="lenkepanel__status">{tekstStatus}</Element>}
            </div>
        </div>
    );

    if (ekstern) {
        return (
            <LenkepanelBase border href={lenke}>
                {panelContent}
            </LenkepanelBase>
        );
    }
    return (
        <LenkepanelBase border href="" linkCreator={linkProps => <Link {...linkProps} to={lenke} />}>
            {panelContent}
        </LenkepanelBase>
    );
};

export default LenkepanelWrapper;
