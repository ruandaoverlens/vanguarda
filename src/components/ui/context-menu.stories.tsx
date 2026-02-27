import type { Meta, StoryObj } from '@storybook/react';
import {
  CloudIcon,
  CopyIcon,
  CreditCardIcon,
  KeyboardIcon,
  SettingsIcon,
  TrashIcon,
  UserIcon,
} from 'lucide-react';
import React from 'react';

import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from '@/components/ui/context-menu';

const meta = {
  title: 'Primitives/ContextMenu',
  component: ContextMenu,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A right-click context menu built on Radix UI. Supports items, submenus, checkboxes, radio groups, labels, separators, and keyboard shortcuts.',
      },
    },
  },
} satisfies Meta<typeof ContextMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm text-muted-foreground">
        Right-click here
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuItem>
          <CopyIcon />
          Copy
          <ContextMenuShortcut>⌘C</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          <UserIcon />
          Profile
          <ContextMenuShortcut>⌘P</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem variant="destructive">
          <TrashIcon />
          Delete
          <ContextMenuShortcut>⌫</ContextMenuShortcut>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
};

export const WithSubmenus: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm text-muted-foreground">
        Right-click for submenus
      </ContextMenuTrigger>
      <ContextMenuContent className="w-56">
        <ContextMenuItem>
          <UserIcon />
          Profile
        </ContextMenuItem>
        <ContextMenuItem>
          <CreditCardIcon />
          Billing
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuSub>
          <ContextMenuSubTrigger>
            <SettingsIcon />
            Settings
          </ContextMenuSubTrigger>
          <ContextMenuSubContent className="w-48">
            <ContextMenuItem>General</ContextMenuItem>
            <ContextMenuItem>Security</ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem>Notifications</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSeparator />
        <ContextMenuItem variant="destructive">
          <TrashIcon />
          Delete account
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
};

export const WithCheckboxItems: Story = {
  render: () => {
    const [showBookmarks, setShowBookmarks] = React.useState(true);
    const [showHistory, setShowHistory] = React.useState(false);
    const [showDownloads, setShowDownloads] = React.useState(true);

    return (
      <ContextMenu>
        <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm text-muted-foreground">
          Right-click for checkboxes
        </ContextMenuTrigger>
        <ContextMenuContent className="w-56">
          <ContextMenuLabel>View Options</ContextMenuLabel>
          <ContextMenuSeparator />
          <ContextMenuCheckboxItem
            checked={showBookmarks}
            onCheckedChange={setShowBookmarks}
          >
            Show Bookmarks
            <ContextMenuShortcut>⌘B</ContextMenuShortcut>
          </ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem
            checked={showHistory}
            onCheckedChange={setShowHistory}
          >
            Show History
          </ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem
            checked={showDownloads}
            onCheckedChange={setShowDownloads}
          >
            Show Downloads
          </ContextMenuCheckboxItem>
        </ContextMenuContent>
      </ContextMenu>
    );
  },
};

export const WithRadioItems: Story = {
  render: () => {
    const [view, setView] = React.useState('list');

    return (
      <ContextMenu>
        <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm text-muted-foreground">
          Right-click for radio items
        </ContextMenuTrigger>
        <ContextMenuContent className="w-56">
          <ContextMenuLabel>View as</ContextMenuLabel>
          <ContextMenuSeparator />
          <ContextMenuRadioGroup value={view} onValueChange={setView}>
            <ContextMenuRadioItem value="list">List</ContextMenuRadioItem>
            <ContextMenuRadioItem value="grid">Grid</ContextMenuRadioItem>
            <ContextMenuRadioItem value="columns">Columns</ContextMenuRadioItem>
          </ContextMenuRadioGroup>
        </ContextMenuContent>
      </ContextMenu>
    );
  },
};

export const WithGroups: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm text-muted-foreground">
        Right-click for groups
      </ContextMenuTrigger>
      <ContextMenuContent className="w-56">
        <ContextMenuGroup>
          <ContextMenuLabel>File</ContextMenuLabel>
          <ContextMenuItem>
            <CopyIcon />
            Copy
            <ContextMenuShortcut>⌘C</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>Paste</ContextMenuItem>
          <ContextMenuItem>Cut</ContextMenuItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuLabel>Cloud</ContextMenuLabel>
          <ContextMenuItem>
            <CloudIcon />
            Sync to cloud
          </ContextMenuItem>
          <ContextMenuItem>Download</ContextMenuItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuLabel>Developer</ContextMenuLabel>
          <ContextMenuItem>
            <KeyboardIcon />
            Keyboard shortcuts
          </ContextMenuItem>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
  ),
};

export const WithDisabledItems: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm text-muted-foreground">
        Right-click for disabled items
      </ContextMenuTrigger>
      <ContextMenuContent className="w-56">
        <ContextMenuItem>
          <CopyIcon />
          Copy
        </ContextMenuItem>
        <ContextMenuItem disabled>
          Paste
          <ContextMenuShortcut>⌘V</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem disabled variant="destructive">
          <TrashIcon />
          Delete (disabled)
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
};

export const FullFeatured: Story = {
  render: () => {
    const [showPanel, setShowPanel] = React.useState(true);
    const [theme, setTheme] = React.useState('system');

    return (
      <ContextMenu>
        <ContextMenuTrigger className="flex h-[200px] w-[350px] items-center justify-center rounded-lg border border-dashed bg-muted/30 text-sm text-muted-foreground">
          Right-click for full-featured menu
        </ContextMenuTrigger>
        <ContextMenuContent className="w-64">
          <ContextMenuLabel>Actions</ContextMenuLabel>
          <ContextMenuGroup>
            <ContextMenuItem>
              <CopyIcon />
              Copy link
              <ContextMenuShortcut>⌘L</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem>
              <UserIcon />
              Open in new tab
            </ContextMenuItem>
          </ContextMenuGroup>
          <ContextMenuSeparator />
          <ContextMenuLabel>Appearance</ContextMenuLabel>
          <ContextMenuCheckboxItem
            checked={showPanel}
            onCheckedChange={setShowPanel}
          >
            Show side panel
          </ContextMenuCheckboxItem>
          <ContextMenuSeparator />
          <ContextMenuLabel>Theme</ContextMenuLabel>
          <ContextMenuRadioGroup value={theme} onValueChange={setTheme}>
            <ContextMenuRadioItem value="light">Light</ContextMenuRadioItem>
            <ContextMenuRadioItem value="dark">Dark</ContextMenuRadioItem>
            <ContextMenuRadioItem value="system">System</ContextMenuRadioItem>
          </ContextMenuRadioGroup>
          <ContextMenuSeparator />
          <ContextMenuSub>
            <ContextMenuSubTrigger>
              <SettingsIcon />
              More options
            </ContextMenuSubTrigger>
            <ContextMenuSubContent>
              <ContextMenuItem>Advanced settings</ContextMenuItem>
              <ContextMenuItem>Export data</ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuItem variant="destructive">
                <TrashIcon />
                Reset
              </ContextMenuItem>
            </ContextMenuSubContent>
          </ContextMenuSub>
        </ContextMenuContent>
      </ContextMenu>
    );
  },
};
