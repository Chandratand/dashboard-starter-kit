import { cn } from '@/lib/utils';
import Link from 'next/link';
import { AccountDropdown } from './AccountDropdown';
import { MobileSidebar } from './MobileSidebar';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  return (
    <div className="supports-backdrop-blur:bg-background/60 fixed inset-x-0 top-0 z-20 border-b bg-background/95 backdrop-blur">
      <nav className="flex h-14 items-center justify-between px-4">
        <div className="hidden lg:block">
          <Link href={'/'} className="text-sm font-bold">
            My Dashboard
          </Link>
        </div>
        <div className={cn('block lg:!hidden')}>
          <MobileSidebar />
        </div>

        <div className="flex items-center gap-2">
          <AccountDropdown />
          <ThemeToggle />
        </div>
      </nav>
    </div>
  );
}
