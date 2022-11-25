import {
  faUser, faMessage, faWarning,
  faBook, faEnvelope, faHandHoldingMedical, faCodePullRequest,
} from '@fortawesome/free-solid-svg-icons';

const Data = [
  {
    id: 1,
    title: 'User Profile',
    to: '/dashboard/summary',
    icon: faUser,
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
    icon: faCodePullRequest,
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
