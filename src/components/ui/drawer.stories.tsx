import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from 'storybook/test';

import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const meta = {
  title: 'Primitives/Drawer',
  component: Drawer,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A drawer panel built on Vaul. Supports four directions (bottom, top, left, right). The bottom drawer shows a drag handle and is optimised for mobile touch gestures. Use for supplementary actions without leaving the page.',
      },
    },
  },
  argTypes: {
    direction: {
      control: 'select',
      options: ['bottom', 'top', 'left', 'right'],
      description: 'The direction from which the drawer slides in.',
    },
  },
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Open drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Drawer title</DrawerTitle>
          <DrawerDescription>
            This drawer slides up from the bottom. Drag the handle to dismiss.
          </DrawerDescription>
        </DrawerHeader>
        <div className="px-4 pb-4">
          <p className="text-sm text-muted-foreground">
            Drawer content goes here. You can put any content inside.
          </p>
        </div>
        <DrawerFooter>
          <Button>Confirm</Button>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole('button', { name: /open drawer/i });
    await userEvent.click(trigger);
    const dialog = await within(document.body).findByRole('dialog');
    await expect(dialog).toBeInTheDocument();
  },
};

export const FromBottom: Story = {
  render: () => (
    <Drawer direction="bottom">
      <DrawerTrigger asChild>
        <Button variant="outline">Open from bottom</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Bottom drawer</DrawerTitle>
          <DrawerDescription>
            Slides in from the bottom — ideal for mobile touch interactions.
            Includes a drag handle at the top.
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <Button>Save</Button>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
};

export const FromRight: Story = {
  render: () => (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <Button variant="outline">Open from right</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Right drawer</DrawerTitle>
          <DrawerDescription>
            Slides in from the right — useful as a side panel or detail view.
          </DrawerDescription>
        </DrawerHeader>
        <div className="flex-1 overflow-y-auto px-4">
          <p className="text-sm text-muted-foreground">
            Side panel content goes here.
          </p>
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
};

export const FromLeft: Story = {
  render: () => (
    <Drawer direction="left">
      <DrawerTrigger asChild>
        <Button variant="outline">Open from left</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Left drawer</DrawerTitle>
          <DrawerDescription>
            Slides in from the left — useful for navigation or filters.
          </DrawerDescription>
        </DrawerHeader>
        <div className="flex-1 px-4">
          <nav className="space-y-1">
            {['Dashboard', 'Analytics', 'Settings', 'Help'].map((item) => (
              <button
                key={item}
                className="w-full rounded-md px-3 py-2 text-left text-sm hover:bg-accent"
              >
                {item}
              </button>
            ))}
          </nav>
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
};

export const FromTop: Story = {
  render: () => (
    <Drawer direction="top">
      <DrawerTrigger asChild>
        <Button variant="outline">Open from top</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Top drawer</DrawerTitle>
          <DrawerDescription>
            Slides in from the top — useful for banners or notification panels.
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Dismiss</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
};

export const WithForm: Story = {
  render: () => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button>Edit settings</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Edit settings</DrawerTitle>
          <DrawerDescription>
            Update your preferences and save when done.
          </DrawerDescription>
        </DrawerHeader>
        <div className="grid gap-4 px-4 pb-4">
          <div className="grid gap-2">
            <Label htmlFor="drawer-name">Display name</Label>
            <Input id="drawer-name" defaultValue="Jane Doe" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="drawer-email">Email</Label>
            <Input
              id="drawer-email"
              type="email"
              defaultValue="jane@example.com"
            />
          </div>
        </div>
        <DrawerFooter>
          <Button>Save changes</Button>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
};

export const WithScrollableContent: Story = {
  render: () => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Open long content</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Terms of Service</DrawerTitle>
          <DrawerDescription>
            Scroll to read the full document before accepting.
          </DrawerDescription>
        </DrawerHeader>
        <div className="flex-1 overflow-y-auto px-4 pb-4">
          <div className="space-y-4 text-sm text-muted-foreground">
            {Array.from({ length: 8 }, (_, i) => (
              <p key={i}>
                Section {i + 1}: Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.
              </p>
            ))}
          </div>
        </div>
        <DrawerFooter>
          <Button>I accept</Button>
          <DrawerClose asChild>
            <Button variant="outline">Decline</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
};
