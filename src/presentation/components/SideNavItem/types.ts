import { ReactNode } from 'react';

export interface SideNavItemProps {
  active?: boolean;
  disabled: boolean;
  external: boolean;
  icon: ReactNode;
  path: string;
  title: string;
  handleLogout?: () => void;
}