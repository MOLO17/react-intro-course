import React from 'react';

import { Header, HeaderSubheader, Icon } from 'semantic-ui-react';

const FormPlaceholder = () => (
  <div className="form-placeholder">
    <Header as="h2" icon>
      <Icon name="add user" />
      No passenger selected
      <HeaderSubheader>
        Add one by using the "Add passenger" button
      </HeaderSubheader>
    </Header>
  </div>
);

export default FormPlaceholder;
