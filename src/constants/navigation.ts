'use client';

import { NavigationItem } from '@/types';
import { ArrowLeftRight, KanbanSquare, LayoutDashboard, User2 } from 'lucide-react';

export const NAVIGATION_ITEMS: NavigationItem[] = [
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: LayoutDashboard,
    label: 'Dashboard',
  },
  {
    title: 'Transaction',
    href: '/dashboard/transctions',
    icon: ArrowLeftRight,
    label: 'transaction',
  },
  {
    title: 'Profile',
    href: '/dashboard/profile',
    icon: User2,
    label: 'profile',
  },
  {
    title: 'Kanban',
    href: '/dashboard/kanban',
    icon: KanbanSquare,
    label: 'kanban',
  },
];
