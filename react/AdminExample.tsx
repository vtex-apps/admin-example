import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { Layout, PageBlock, PageHeader } from "vtex.styleguide";

class AdminExample extends Component {
  public render() {
    return (
      <div className="h-100">
        <Layout
          pageHeader={
            <PageHeader
              title={<FormattedMessage id="admin-example.hello-world" />}
            />
          }
        >
          <PageBlock>
            <FormattedMessage id="appframe.navigation.example" />
          </PageBlock>
        </Layout>
      </div>
    );
  }
}

export default AdminExample;
