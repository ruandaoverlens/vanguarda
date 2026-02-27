import type { Meta, StoryObj } from '@storybook/react';
import {
  FileIcon,
  FolderOpenIcon,
  InboxIcon,
  SearchIcon,
  ShoppingCartIcon,
  UsersIcon,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '@/components/ui/empty';

const meta = {
  title: 'Primitives/Empty',
  component: Empty,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'An empty state component for displaying placeholder content when no data is available. Supports an optional media/icon area, title, description, and action content. EmptyMedia supports `default` and `icon` variants.',
      },
    },
  },
} satisfies Meta<typeof Empty>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Empty>
      <EmptyHeader>
        <EmptyTitle>No items found</EmptyTitle>
        <EmptyDescription>
          There are no items to display yet. Add your first item to get started.
        </EmptyDescription>
      </EmptyHeader>
    </Empty>
  ),
};

export const WithIconMedia: Story = {
  render: () => (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <InboxIcon />
        </EmptyMedia>
        <EmptyTitle>Your inbox is empty</EmptyTitle>
        <EmptyDescription>
          When you receive messages, they will appear here.
        </EmptyDescription>
      </EmptyHeader>
    </Empty>
  ),
};

export const WithAction: Story = {
  render: () => (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <FolderOpenIcon />
        </EmptyMedia>
        <EmptyTitle>No files uploaded</EmptyTitle>
        <EmptyDescription>
          Upload your first file to start sharing with your team.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button>Upload file</Button>
      </EmptyContent>
    </Empty>
  ),
};

export const SearchEmpty: Story = {
  render: () => (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <SearchIcon />
        </EmptyMedia>
        <EmptyTitle>No results found</EmptyTitle>
        <EmptyDescription>
          We couldn&apos;t find anything matching your search. Try using
          different keywords or adjusting your filters.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <div className="flex flex-col gap-2 sm:flex-row">
          <Button variant="outline">Clear filters</Button>
          <Button>Browse all</Button>
        </div>
      </EmptyContent>
    </Empty>
  ),
};

export const WithDefaultMedia: Story = {
  render: () => (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="default">
          <FileIcon className="size-12 text-muted-foreground" />
        </EmptyMedia>
        <EmptyTitle>No documents</EmptyTitle>
        <EmptyDescription>
          Create your first document to get started with your workspace.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button>New document</Button>
      </EmptyContent>
    </Empty>
  ),
};

export const TeamEmpty: Story = {
  render: () => (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <UsersIcon />
        </EmptyMedia>
        <EmptyTitle>No team members yet</EmptyTitle>
        <EmptyDescription>
          Invite your colleagues to collaborate. You can{' '}
          <a href="#">manage permissions</a> after they join.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button>Invite members</Button>
        <p className="text-xs text-muted-foreground">Free plan: up to 5 members</p>
      </EmptyContent>
    </Empty>
  ),
};

export const CartEmpty: Story = {
  render: () => (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <ShoppingCartIcon />
        </EmptyMedia>
        <EmptyTitle>Your cart is empty</EmptyTitle>
        <EmptyDescription>
          Add items from the catalog to begin your order.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button>Browse catalog</Button>
      </EmptyContent>
    </Empty>
  ),
};

export const WithoutBorder: Story = {
  render: () => (
    <Empty className="border-transparent">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <InboxIcon />
        </EmptyMedia>
        <EmptyTitle>Nothing here</EmptyTitle>
        <EmptyDescription>
          The dashed border is removed by overriding the className.
        </EmptyDescription>
      </EmptyHeader>
    </Empty>
  ),
};

export const Compact: Story = {
  render: () => (
    <div className="max-w-sm">
      <Empty className="p-6">
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <InboxIcon />
          </EmptyMedia>
          <EmptyTitle>No notifications</EmptyTitle>
          <EmptyDescription>You&apos;re all caught up!</EmptyDescription>
        </EmptyHeader>
      </Empty>
    </div>
  ),
};
