import ChartBarIcon from '@heroicons/react/24/solid/ChartBarIcon';
import UsersIcon from '@heroicons/react/24/solid/UsersIcon';
import XCircleIcon from '@heroicons/react/24/solid/XCircleIcon';
import { SvgIcon } from '@mui/material';
import { RoutesEnum, RoutesNameEnum } from './routePathsEnum';

export const menuItems = [
  {
    title: RoutesNameEnum.TABLE,
    path: RoutesEnum.TABLE,
    disabled: false,
    external: false,
    icon: (
      <SvgIcon fontSize="small">
        <ChartBarIcon />
      </SvgIcon>
    )
  },
  {
    title: RoutesNameEnum.CARDS,
    path: RoutesEnum.CARDS,
    disabled: false,
    external: false,
    icon: (
      <SvgIcon fontSize="small">
        <UsersIcon />
      </SvgIcon>
    )
  },
  {
    title: RoutesNameEnum.LOGOUT,
    path: '',
    disabled: false,
    external: false,
    handleLogout: () => {},
    icon: (
      <SvgIcon fontSize="small">
        <XCircleIcon />
      </SvgIcon>
    )
  }
];
