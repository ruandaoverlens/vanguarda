import type { Meta, StoryObj } from '@storybook/react';
import { CheckCircle2, Star, AlertCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const meta = {
  title: 'Primitives/Badge',
  component: Badge,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'destructive', 'outline', 'ghost', 'link'],
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Badge',
    variant: 'default',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary',
    variant: 'secondary',
  },
};

export const Destructive: Story = {
  args: {
    children: 'Destructive',
    variant: 'destructive',
  },
};

export const Outline: Story = {
  args: {
    children: 'Outline',
    variant: 'outline',
  },
};

export const Ghost: Story = {
  args: {
    children: 'Ghost',
    variant: 'ghost',
  },
};

export const Link: Story = {
  args: {
    children: 'Link',
    variant: 'link',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3 items-center">
      <Badge variant="default">Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="ghost">Ghost</Badge>
      <Badge variant="link">Link</Badge>
    </div>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3 items-center">
      <Badge variant="default">
        <CheckCircle2 />
        Active
      </Badge>
      <Badge variant="secondary">
        <Star />
        Featured
      </Badge>
      <Badge variant="destructive">
        <AlertCircle />
        Error
      </Badge>
      <Badge variant="outline">
        <CheckCircle2 />
        Verified
      </Badge>
    </div>
  ),
};

export const StatusLabels: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <span className="text-sm text-muted-foreground w-24">Status:</span>
        <Badge variant="default">Published</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm text-muted-foreground w-24">Status:</span>
        <Badge variant="secondary">Draft</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm text-muted-foreground w-24">Status:</span>
        <Badge variant="destructive">Archived</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm text-muted-foreground w-24">Status:</span>
        <Badge variant="outline">Pending</Badge>
      </div>
    </div>
  ),
};

export const AsLink: Story = {
  render: () => (
    <Badge variant="link" asChild>
      <a href="#">View details</a>
    </Badge>
  ),
};
