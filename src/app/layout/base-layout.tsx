import { Layout } from 'shared/ui';
import { LayoutHeader } from 'widgets/layout-header';

export const BaseLayout = () => {

  return <Layout
    headerSlot={<LayoutHeader />}
  />
}
