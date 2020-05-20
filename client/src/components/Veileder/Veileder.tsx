import './Veileder.less';

import React from 'react';
import Veilederpanel, { VeilederpanelProps } from 'nav-frontend-veilederpanel';
import Bjorn from './Bjorn';

interface VeilederProps extends Partial<VeilederpanelProps> {
  children: React.ReactNode;
}

const Veileder = ({ fargetema, children }: VeilederProps) => {
  return (
    <Veilederpanel kompakt fargetema={fargetema} svg={<Bjorn />}>
      {children}
    </Veilederpanel>
  );
};

export default Veileder;
