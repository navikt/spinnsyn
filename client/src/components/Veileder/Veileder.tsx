import './Veileder.less';

import React from 'react';
import Veilederpanel from 'nav-frontend-veilederpanel';
import Bjorn from './Bjorn';

type VeilederProps = {
  fargetema: 'normal' | 'info' | 'suksess' | 'advarsel' | 'feilmelding';
  children: React.ReactNode;
};

const Veileder = ({ fargetema, children }: VeilederProps) => {
  return (
    <Veilederpanel kompakt fargetema={fargetema} svg={<Bjorn />}>
      {children}
    </Veilederpanel>
  );
};

export default Veileder;
