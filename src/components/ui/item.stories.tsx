import type { Meta, StoryObj } from '@storybook/react';
import {
  BellIcon,
  ChevronRightIcon,
  FileIcon,
  FolderIcon,
  MoreHorizontalIcon,
  StarIcon,
  UserIcon,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemFooter,
  ItemGroup,
  ItemHeader,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from '@/components/ui/item';

const meta = {
  title: 'Primitives/Item',
  component: Item,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outline', 'muted'],
      description: 'Visual style of the item',
    },
    size: {
      control: 'select',
      options: ['default', 'sm'],
      description: 'Padding and gap size',
    },
  },
} satisfies Meta<typeof Item>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-96">
      <Item>
        <ItemContent>
          <ItemTitle>Item title</ItemTitle>
          <ItemDescription>A brief description of this item.</ItemDescription>
        </ItemContent>
      </Item>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="w-96 space-y-2">
      <Item variant="default">
        <ItemContent>
          <ItemTitle>Default variant</ItemTitle>
          <ItemDescription>No border, transparent background.</ItemDescription>
        </ItemContent>
      </Item>
      <Item variant="outline">
        <ItemContent>
          <ItemTitle>Outline variant</ItemTitle>
          <ItemDescription>Has a visible border around the item.</ItemDescription>
        </ItemContent>
      </Item>
      <Item variant="muted">
        <ItemContent>
          <ItemTitle>Muted variant</ItemTitle>
          <ItemDescription>Subtle muted background fill.</ItemDescription>
        </ItemContent>
      </Item>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="w-96 space-y-2">
      <Item variant="outline" size="default">
        <ItemContent>
          <ItemTitle>Default size</ItemTitle>
          <ItemDescription>p-4 with gap-4 spacing.</ItemDescription>
        </ItemContent>
      </Item>
      <Item variant="outline" size="sm">
        <ItemContent>
          <ItemTitle>Small size</ItemTitle>
          <ItemDescription>py-3 px-4 with gap-2.5 spacing.</ItemDescription>
        </ItemContent>
      </Item>
    </div>
  ),
};

export const WithIconMedia: Story = {
  render: () => (
    <div className="w-96 space-y-1">
      <Item>
        <ItemMedia variant="icon">
          <UserIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Profile settings</ItemTitle>
          <ItemDescription>Manage your account and preferences.</ItemDescription>
        </ItemContent>
      </Item>
      <Item>
        <ItemMedia variant="icon">
          <BellIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Notifications</ItemTitle>
          <ItemDescription>Configure how you receive alerts.</ItemDescription>
        </ItemContent>
      </Item>
      <Item>
        <ItemMedia variant="icon">
          <FileIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Documents</ItemTitle>
          <ItemDescription>Access your uploaded files.</ItemDescription>
        </ItemContent>
      </Item>
    </div>
  ),
};

export const WithActions: Story = {
  render: () => (
    <div className="w-96">
      <Item variant="outline">
        <ItemMedia variant="icon">
          <FolderIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Project files</ItemTitle>
          <ItemDescription>Last modified 2 hours ago</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <StarIcon className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <MoreHorizontalIcon className="h-4 w-4" />
          </Button>
        </ItemActions>
      </Item>
    </div>
  ),
};

export const WithBadge: Story = {
  render: () => (
    <div className="w-96 space-y-1">
      <Item variant="outline">
        <ItemContent>
          <ItemTitle>
            Feature request
            <Badge variant="secondary">New</Badge>
          </ItemTitle>
          <ItemDescription>Allow users to export data as CSV.</ItemDescription>
        </ItemContent>
        <ItemActions>
          <ChevronRightIcon className="text-muted-foreground h-4 w-4" />
        </ItemActions>
      </Item>
      <Item variant="outline">
        <ItemContent>
          <ItemTitle>
            Bug report
            <Badge variant="destructive">Critical</Badge>
          </ItemTitle>
          <ItemDescription>Login page crashes on mobile Safari.</ItemDescription>
        </ItemContent>
        <ItemActions>
          <ChevronRightIcon className="text-muted-foreground h-4 w-4" />
        </ItemActions>
      </Item>
    </div>
  ),
};

export const WithHeader: Story = {
  render: () => (
    <div className="w-96">
      <Item variant="outline">
        <ItemHeader>
          <span className="text-muted-foreground text-xs uppercase tracking-wide">
            Recent activity
          </span>
          <Button variant="ghost" size="sm" className="h-6 text-xs">
            View all
          </Button>
        </ItemHeader>
        <ItemMedia variant="icon">
          <UserIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>New user joined</ItemTitle>
          <ItemDescription>Ana Silva created an account 5 minutes ago.</ItemDescription>
        </ItemContent>
      </Item>
    </div>
  ),
};

export const WithFooter: Story = {
  render: () => (
    <div className="w-96">
      <Item variant="outline">
        <ItemMedia variant="icon">
          <FileIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Q1 Report.pdf</ItemTitle>
          <ItemDescription>Annual financial summary for Q1 2026</ItemDescription>
        </ItemContent>
        <ItemFooter>
          <span className="text-muted-foreground text-xs">2.4 MB</span>
          <Button variant="outline" size="sm">
            Download
          </Button>
        </ItemFooter>
      </Item>
    </div>
  ),
};

export const GroupWithSeparators: Story = {
  render: () => (
    <div className="w-96">
      <ItemGroup>
        <Item>
          <ItemMedia variant="icon">
            <UserIcon />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Account</ItemTitle>
            <ItemDescription>Manage your personal settings.</ItemDescription>
          </ItemContent>
          <ItemActions>
            <ChevronRightIcon className="text-muted-foreground h-4 w-4" />
          </ItemActions>
        </Item>
        <ItemSeparator />
        <Item>
          <ItemMedia variant="icon">
            <BellIcon />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Notifications</ItemTitle>
            <ItemDescription>Control your alert preferences.</ItemDescription>
          </ItemContent>
          <ItemActions>
            <ChevronRightIcon className="text-muted-foreground h-4 w-4" />
          </ItemActions>
        </Item>
        <ItemSeparator />
        <Item>
          <ItemMedia variant="icon">
            <FileIcon />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Documents</ItemTitle>
            <ItemDescription>View and manage your files.</ItemDescription>
          </ItemContent>
          <ItemActions>
            <ChevronRightIcon className="text-muted-foreground h-4 w-4" />
          </ItemActions>
        </Item>
      </ItemGroup>
    </div>
  ),
};

export const SmallList: Story = {
  render: () => (
    <div className="w-80">
      <ItemGroup>
        {['Home', 'Dashboard', 'Projects', 'Settings'].map((label, i) => (
          <Item key={label} size="sm" variant={i === 1 ? 'muted' : 'default'}>
            <ItemContent>
              <ItemTitle>{label}</ItemTitle>
            </ItemContent>
            <ItemActions>
              <ChevronRightIcon className="text-muted-foreground h-3.5 w-3.5" />
            </ItemActions>
          </Item>
        ))}
      </ItemGroup>
    </div>
  ),
};
