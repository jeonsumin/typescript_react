import { Outlet } from 'react-router-dom';
import { ReactNode } from 'react';

type Props = {
  headerSlot: ReactNode;
  bottomSlot?: ReactNode;
  sidebarSlot?: ReactNode;
}
export const Layout = (props: Props) => (
  <div className="wrap">
      {props.headerSlot}
      <div className="content">
        <div className="inner_1600"></div>
        <Outlet />
      </div>
      {props.bottomSlot}
  </div>
)
