import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { DirectionProvider } from '@/components/ui/direction';
import { Input } from '@/components/ui/input';

const meta = {
  title: 'Primitives/DirectionProvider',
  component: DirectionProvider,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A provider that sets the reading direction (LTR or RTL) for all Radix UI primitives in the subtree. Accepts either `dir` or `direction` prop. Radix UI components automatically adapt their positioning and animations based on this context.',
      },
    },
  },
  argTypes: {
    dir: {
      control: 'radio',
      options: ['ltr', 'rtl'],
      description: 'The reading direction for the subtree.',
    },
    direction: {
      control: 'radio',
      options: ['ltr', 'rtl'],
      description: 'Alias for `dir` — takes precedence when both are provided.',
    },
  },
} satisfies Meta<typeof DirectionProvider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LeftToRight: Story = {
  args: {
    dir: 'ltr',
  },
  render: (args) => (
    <DirectionProvider {...args}>
      <div className="space-y-4">
        <p className="text-sm text-muted-foreground">
          Direction: <strong>LTR (left-to-right)</strong> — default for most
          languages (English, French, Spanish, etc.)
        </p>
        <div className="flex items-center gap-3">
          <Input placeholder="LTR input placeholder..." className="max-w-xs" />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Open menu</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <p className="text-sm">
          The quick brown fox jumps over the lazy dog.
        </p>
      </div>
    </DirectionProvider>
  ),
};

export const RightToLeft: Story = {
  args: {
    dir: 'rtl',
  },
  render: (args) => (
    <DirectionProvider {...args}>
      <div className="space-y-4" dir="rtl">
        <p className="text-sm text-muted-foreground">
          Direction: <strong>RTL (right-to-left)</strong> — used for Arabic,
          Hebrew, Persian, etc. Radix UI menus and popovers flip accordingly.
        </p>
        <div className="flex items-center gap-3">
          <Input placeholder="RTL input..." className="max-w-xs" dir="rtl" />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">فتح القائمة</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>الملف الشخصي</DropdownMenuItem>
              <DropdownMenuItem>الإعدادات</DropdownMenuItem>
              <DropdownMenuItem>تسجيل الخروج</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <p className="text-sm" dir="rtl">
          الثعلب البني السريع يقفز فوق الكلب الكسول.
        </p>
      </div>
    </DirectionProvider>
  ),
};

export const UsingDirectionAlias: Story = {
  args: {
    direction: 'rtl',
  },
  render: (args) => (
    <DirectionProvider {...args}>
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">
          Using the <code className="rounded bg-muted px-1 py-0.5 text-xs">direction</code> prop alias (equivalent to{' '}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">dir</code>).
          When both are provided, <code className="rounded bg-muted px-1 py-0.5 text-xs">direction</code> takes precedence.
        </p>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Open RTL menu</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Item A</DropdownMenuItem>
            <DropdownMenuItem>Item B</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </DirectionProvider>
  ),
};
