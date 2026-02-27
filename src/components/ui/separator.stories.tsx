import type { Meta, StoryObj } from '@storybook/react'
import { Separator } from '@/components/ui/separator'

const meta = {
  title: 'Primitives/Separator',
  component: Separator,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    orientation: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
      description: 'The orientation of the separator.',
    },
    decorative: {
      control: 'boolean',
      description:
        'When true, signifies that it is purely visual. Hides from accessibility tree.',
    },
  },
} satisfies Meta<typeof Separator>

export default meta
type Story = StoryObj<typeof meta>

export const Horizontal: Story = {
  render: () => (
    <div className="w-72">
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
        <p className="text-sm text-muted-foreground">
          An open-source UI component library.
        </p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
  ),
}

export const Vertical: Story = {
  render: () => (
    <div className="flex h-5 items-center space-x-4 text-sm">
      <span>Home</span>
      <Separator orientation="vertical" />
      <span>About</span>
      <Separator orientation="vertical" />
      <span>Contact</span>
    </div>
  ),
}

export const InCard: Story = {
  render: () => (
    <div className="w-64 rounded-lg border bg-card p-4 text-card-foreground">
      <p className="font-semibold text-sm">User Profile</p>
      <Separator className="my-3" />
      <div className="space-y-1 text-sm">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Name</span>
          <span>Jane Doe</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Role</span>
          <span>Admin</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Status</span>
          <span className="text-brand-midori">Active</span>
        </div>
      </div>
      <Separator className="my-3" />
      <p className="text-xs text-muted-foreground">Last updated 2 hours ago</p>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
}

export const Decorative: Story = {
  args: {
    orientation: 'horizontal',
    decorative: true,
  },
  render: (args) => (
    <div className="w-72 space-y-2">
      <p className="text-sm text-muted-foreground">Above separator</p>
      <Separator {...args} />
      <p className="text-sm text-muted-foreground">Below separator</p>
    </div>
  ),
}

export const Semantic: Story = {
  args: {
    orientation: 'horizontal',
    decorative: false,
  },
  render: (args) => (
    <div className="w-72 space-y-2">
      <p className="text-sm text-muted-foreground">
        Section A (decorative: false — visible to screen readers)
      </p>
      <Separator {...args} />
      <p className="text-sm text-muted-foreground">Section B</p>
    </div>
  ),
}
