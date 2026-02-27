import type { Meta, StoryObj } from '@storybook/react';
import { SearchIcon } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const meta = {
  title: 'Primitives/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'search', 'tel', 'url', 'file'],
      description: 'The input type attribute',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the input',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: 'text',
    placeholder: 'Type something...',
  },
  decorators: [
    (Story) => (
      <div className="w-72">
        <Story />
      </div>
    ),
  ],
};

export const WithLabel: Story = {
  render: () => (
    <div className="w-72 space-y-2">
      <Label htmlFor="email-label">Email address</Label>
      <Input id="email-label" type="email" placeholder="you@example.com" />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    type: 'text',
    placeholder: 'Cannot edit this',
    disabled: true,
    defaultValue: 'Read-only value',
  },
  decorators: [
    (Story) => (
      <div className="w-72">
        <Story />
      </div>
    ),
  ],
};

export const ErrorState: Story = {
  render: () => (
    <div className="w-72 space-y-2">
      <Label htmlFor="email-error">Email address</Label>
      <Input
        id="email-error"
        type="email"
        placeholder="you@example.com"
        defaultValue="not-an-email"
        aria-invalid
      />
      <p className="text-destructive text-xs">Please enter a valid email address.</p>
    </div>
  ),
};

export const AllTypes: Story = {
  render: () => (
    <div className="w-80 space-y-4">
      <div className="space-y-2">
        <Label>Text</Label>
        <Input type="text" placeholder="Plain text input" />
      </div>
      <div className="space-y-2">
        <Label>Email</Label>
        <Input type="email" placeholder="you@example.com" />
      </div>
      <div className="space-y-2">
        <Label>Password</Label>
        <Input type="password" placeholder="Enter password" />
      </div>
      <div className="space-y-2">
        <Label>Number</Label>
        <Input type="number" placeholder="0" />
      </div>
      <div className="space-y-2">
        <Label>Search</Label>
        <Input type="search" placeholder="Search..." />
      </div>
      <div className="space-y-2">
        <Label>URL</Label>
        <Input type="url" placeholder="https://example.com" />
      </div>
      <div className="space-y-2">
        <Label>Tel</Label>
        <Input type="tel" placeholder="+55 11 99999-9999" />
      </div>
      <div className="space-y-2">
        <Label>File</Label>
        <Input type="file" />
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

export const States: Story = {
  render: () => (
    <div className="w-72 space-y-4">
      <div className="space-y-2">
        <Label>Default</Label>
        <Input type="text" placeholder="Default state" />
      </div>
      <div className="space-y-2">
        <Label>With value</Label>
        <Input type="text" defaultValue="Filled value" />
      </div>
      <div className="space-y-2">
        <Label>Disabled</Label>
        <Input type="text" placeholder="Disabled" disabled />
      </div>
      <div className="space-y-2">
        <Label>Disabled with value</Label>
        <Input type="text" defaultValue="Cannot change this" disabled />
      </div>
      <div className="space-y-2">
        <Label>Invalid</Label>
        <Input type="text" defaultValue="Bad value" aria-invalid />
      </div>
    </div>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <div className="relative w-72">
      <SearchIcon className="text-muted-foreground absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2" />
      <Input type="search" placeholder="Search..." className="pl-9" />
    </div>
  ),
};
