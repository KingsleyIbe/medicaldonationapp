import {
  faDashboard, faMessage, faWarning, faBook, faEnvelope, faHandHoldingMedical,
} from '@fortawesome/free-solid-svg-icons';

const Data = [
  {
    id: 1,
    title: 'Dashboard',
    to: '/dashboard/summary',
    icon: faDashboard,
  },
  {
    id: 2,
    title: 'Donate Item',
    to: '/dashboard/donate-item',
    icon: faHandHoldingMedical,
  },
  {
    id: 3,
    title: 'Request Item',
    to: '/dashboard/request-item',
    icon: faMessage,
  },
  {
    id: 4,
    title: 'Message',
    to: '/dashboard/message',
    icon: faMessage,
  },
  {
    id: 5,
    title: 'Help',
    to: '/dashboard/help',
    icon: faWarning,
  },
  {
    id: 6,
    title: 'Read our Policy',
    to: '/dashboard/policy',
    icon: faBook,
  },
  {
    id: 7,
    title: 'Feedback',
    to: '/dashboard/feedback',
    icon: faEnvelope,
  },
];

export default Data;
