import avatarImg from '@/assets/avatar.jpg';
import { StudentRow } from '../types/student';

// eslint-disable-next-line import/prefer-default-export
export const students: StudentRow[] = [
  {
    id: 1,
    avatar: avatarImg,
    name: 'Karthi Madesh',
    email: 'karthi@example.com',
    phone: '+91 98765 43210',
    enrollNumber: 'ENR001',
    admissionDate: '08-Dec, 2021',
  },
  {
    id: 2,
    avatar: avatarImg,
    name: 'Ananya Rao',
    email: 'ananya.rao@example.com',
    phone: '+91 91234 56789',
    enrollNumber: 'ENR002',
    admissionDate: '15-Jan, 2022',
  },
  {
    id: 3,
    avatar: avatarImg,
    name: 'Ravi Kumar',
    email: 'ravi.kumar@example.com',
    phone: '+91 99887 76655',
    enrollNumber: 'ENR003',
    admissionDate: '23-Mar, 2022',
  },
  {
    id: 4,
    avatar: avatarImg,
    name: 'Priya Singh',
    email: 'priya.singh@example.com',
    phone: '+91 90000 11122',
    enrollNumber: 'ENR004',
    admissionDate: '02-Jul, 2022',
  },
  {
    id: 5,
    avatar: avatarImg,
    name: 'Arjun Mehta',
    email: 'arjun.mehta@example.com',
    phone: '+91 95555 44433',
    enrollNumber: 'ENR005',
    admissionDate: '18-Sep, 2022',
  },
];
