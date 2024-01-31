'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { NavigationItem } from '@/types';
import { Dispatch, SetStateAction } from 'react';

interface NavigationProps {
  items: NavigationItem[];
  setOpen?: Dispatch<SetStateAction<boolean>>;
}

export function Navigation({ items, setOpen }: NavigationProps) {
  const path = usePathname();

  if (!items?.length) {
    return null;
  }

  return (
    <nav className="grid items-start gap-2">
      {items.map((item, index) => {
        return (
          item.href && (
            <Link
              key={index}
              href={item.disabled ? '/' : item.href}
              onClick={() => {
                if (setOpen) setOpen(false);
              }}
            >
              <span
                className={cn(
                  'group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground',
                  path === item.href ? 'bg-accent' : 'transparent',
                  item.disabled && 'cursor-not-allowed opacity-80'
                )}
              >
                {item.icon && <item.icon className="mr-2 size-4" />}
                <span>{item.title}</span>
              </span>
            </Link>
          )
        );
      })}
    </nav>
  );
}
