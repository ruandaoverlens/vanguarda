import type { Meta, StoryObj } from '@storybook/react';
import { CalendarIcon, LinkIcon, MapPinIcon, UsersIcon } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';

const meta = {
  title: 'Primitives/HoverCard',
  component: HoverCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof HoverCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">@vanguarda</Button>
      </HoverCardTrigger>
      <HoverCardContent>
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>VG</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">@vanguarda</h4>
            <p className="text-sm">
              The platform for building modern web applications. Fast, scalable,
              and developer-friendly.
            </p>
            <div className="flex items-center pt-2">
              <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />
              <span className="text-muted-foreground text-xs">
                Joined February 2026
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};

export const RichContent: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">
          <LinkIcon className="mr-1 h-4 w-4" />
          vanguarda.dev
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="bg-brand-kobold flex h-10 w-10 shrink-0 items-center justify-center rounded-md">
              <span className="text-sm font-bold text-white">VG</span>
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-semibold leading-none">
                Vanguarda Platform
              </h4>
              <p className="text-muted-foreground text-xs">vanguarda.dev</p>
            </div>
          </div>
          <p className="text-sm">
            A modern fullstack platform built with Next.js, Supabase, and
            Tailwind CSS. Ship faster with our component library.
          </p>
          <div className="flex flex-col gap-1.5">
            <div className="text-muted-foreground flex items-center gap-2 text-xs">
              <MapPinIcon className="h-3.5 w-3.5" />
              <span>Global</span>
            </div>
            <div className="text-muted-foreground flex items-center gap-2 text-xs">
              <UsersIcon className="h-3.5 w-3.5" />
              <span>12.4k followers</span>
            </div>
            <div className="text-muted-foreground flex items-center gap-2 text-xs">
              <CalendarIcon className="h-3.5 w-3.5" />
              <span>Founded 2026</span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};

export const AlignStart: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="outline">Hover (align start)</Button>
      </HoverCardTrigger>
      <HoverCardContent align="start">
        <p className="text-sm">
          This hover card is aligned to the start of the trigger element.
        </p>
      </HoverCardContent>
    </HoverCard>
  ),
};

export const AlignEnd: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="outline">Hover (align end)</Button>
      </HoverCardTrigger>
      <HoverCardContent align="end">
        <p className="text-sm">
          This hover card is aligned to the end of the trigger element.
        </p>
      </HoverCardContent>
    </HoverCard>
  ),
};

export const UserProfile: Story = {
  render: () => (
    <div className="flex gap-4">
      {['Ana Silva', 'Carlos Mendes', 'Beatriz Costa'].map((name, i) => (
        <HoverCard key={name}>
          <HoverCardTrigger asChild>
            <Button variant="ghost" className="h-auto p-0">
              <Avatar className="h-9 w-9">
                <AvatarFallback>
                  {name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </AvatarFallback>
              </Avatar>
            </Button>
          </HoverCardTrigger>
          <HoverCardContent className="w-64">
            <div className="flex gap-3">
              <Avatar>
                <AvatarFallback>
                  {name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <p className="text-sm font-semibold">{name}</p>
                <p className="text-muted-foreground text-xs">
                  Team member #{i + 1}
                </p>
                <p className="text-sm">Working on the Vanguarda design system.</p>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      ))}
    </div>
  ),
};
