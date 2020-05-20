import './PageTitle.less';

import React from 'react';
import { Sidetittel, Undertittel } from 'nav-frontend-typografi';

type PageTitleProps = {
  title: string;
  subtitle?: string;
};

const PageTitle = ({ title, subtitle }: PageTitleProps) => {
  return (
    <div className="pagetitle-container">
      <Sidetittel className="pagetitle-title">{title}</Sidetittel>
      <Undertittel className="pagetitle-subtitle">{subtitle}</Undertittel>
    </div>
  );
};

export default PageTitle;
