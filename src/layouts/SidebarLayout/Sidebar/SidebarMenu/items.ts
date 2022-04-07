import { ReactNode } from 'react';

import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import TableChartTwoToneIcon from '@mui/icons-material/TableChartTwoTone';
import CategoryIcon from '@mui/icons-material/Category';
import BallotTwoToneIcon from '@mui/icons-material/BallotTwoTone';
import BeachAccessTwoToneIcon from '@mui/icons-material/BeachAccessTwoTone';
import EmojiEventsTwoToneIcon from '@mui/icons-material/EmojiEventsTwoTone';
import FilterVintageTwoToneIcon from '@mui/icons-material/FilterVintageTwoTone';
import HowToVoteTwoToneIcon from '@mui/icons-material/HowToVoteTwoTone';
import LocalPharmacyTwoToneIcon from '@mui/icons-material/LocalPharmacyTwoTone';
import RedeemTwoToneIcon from '@mui/icons-material/RedeemTwoTone';
import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';
import TrafficTwoToneIcon from '@mui/icons-material/TrafficTwoTone';
import VerifiedUserTwoToneIcon from '@mui/icons-material/VerifiedUserTwoTone';
import HistoryIcon from '@mui/icons-material/History';

export interface MenuItem {
  link?: string;
  icon?: ReactNode;
  badge?: string;
  items?: MenuItem[];
  name: string;
}

export interface MenuItems {
  items: MenuItem[];
  heading: string;
}

const menuItems: MenuItems[] = [
  {
    heading: 'Cửa hàng',
    items: [
      {
        name: 'Phiếu bán lẻ',
        link: '/ticket',
        icon: ConfirmationNumberIcon
      },
      {
        name: 'Lịch sử',
        icon: HistoryIcon,
        link: '/dashboards/messenger'
      }
    ]
  },
  {
    heading: 'Quản lý hàng hóa',
    items: [
      {
        name: 'Danh sách hàng hóa',
        icon: TableChartTwoToneIcon,
        link: '/products'
      },
      {
        name: 'Loại hàng hóa',
        icon: CategoryIcon,
        link: '/categories'
      }
    ]
  },
  // {
  //   heading: 'Components',
  //   items: [
  //     {
  //       name: 'Buttons',
  //       icon: BallotTwoToneIcon,
  //       link: '/components/buttons'
  //     },
  //     {
  //       name: 'Modals',
  //       icon: BeachAccessTwoToneIcon,
  //       link: '/components/modals'
  //     },
  //     {
  //       name: 'Accordions',
  //       icon: EmojiEventsTwoToneIcon,
  //       link: '/components/accordions'
  //     },
  //     {
  //       name: 'Tabs',
  //       icon: FilterVintageTwoToneIcon,
  //       link: '/components/tabs'
  //     },
  //     {
  //       name: 'Badges',
  //       icon: HowToVoteTwoToneIcon,
  //       link: '/components/badges'
  //     },
  //     {
  //       name: 'Tooltips',
  //       icon: LocalPharmacyTwoToneIcon,
  //       link: '/components/tooltips'
  //     },
  //     {
  //       name: 'Avatars',
  //       icon: RedeemTwoToneIcon,
  //       link: '/components/avatars'
  //     },
  //     {
  //       name: 'Cards',
  //       icon: SettingsTwoToneIcon,
  //       link: '/components/cards'
  //     },
  //     {
  //       name: 'Forms',
  //       icon: TrafficTwoToneIcon,
  //       link: '/components/forms'
  //     }
  //   ]
  // },
  {
    heading: 'Extra Pages',
    items: [
      {
        name: 'Status',
        icon: VerifiedUserTwoToneIcon,
        link: '/status',
        items: [
          {
            name: 'Error 404',
            link: '/status/404'
          },
          {
            name: 'Error 500',
            link: '/status/500'
          },
          {
            name: 'Maintenance',
            link: '/status/maintenance'
          },
          {
            name: 'Coming Soon',
            link: '/status/coming-soon'
          }
        ]
      }
    ]
  }
];

export default menuItems;
