import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Switch } from '@/components/ui/switch';

const meta = {
  title: 'Primitives/Label',
  component: Label,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    children: {
      control: 'text',
      description: 'Label text content',
    },
    htmlFor: {
      control: 'text',
      description: 'Associates the label with a form element by ID',
    },
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Email address',
    htmlFor: 'email',
  },
};

export const WithInput: Story = {
  render: () => (
    <div className="w-72 space-y-2">
      <Label htmlFor="email-demo">Email address</Label>
      <Input id="email-demo" type="email" placeholder="you@example.com" />
    </div>
  ),
};

export const Required: Story = {
  render: () => (
    <div className="w-72 space-y-2">
      <Label htmlFor="required-field">
        Full name
        <span className="text-destructive ml-0.5">*</span>
      </Label>
      <Input id="required-field" type="text" placeholder="John Doe" required />
    </div>
  ),
};

export const WithCheckbox: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  ),
};

export const WithSwitch: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Switch id="notifications" />
      <Label htmlFor="notifications">Enable email notifications</Label>
    </div>
  ),
};

export const WithRadioGroup: Story = {
  render: () => (
    <RadioGroup defaultValue="option-1" className="space-y-2">
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option-1" id="r1" />
        <Label htmlFor="r1">Option one</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option-2" id="r2" />
        <Label htmlFor="r2">Option two</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option-3" id="r3" />
        <Label htmlFor="r3">Option three</Label>
      </div>
    </RadioGroup>
  ),
};

export const DisabledPeer: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Checkbox id="enabled-cb" />
        <Label htmlFor="enabled-cb">Enabled checkbox</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="disabled-cb" disabled />
        <Label htmlFor="disabled-cb">
          Disabled checkbox (label dims via peer-disabled)
        </Label>
      </div>
    </div>
  ),
};

export const FormGroup: Story = {
  render: () => (
    <div className="w-80 space-y-4">
      <div className="space-y-2">
        <Label htmlFor="first-name">First name</Label>
        <Input id="first-name" type="text" placeholder="John" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="last-name">Last name</Label>
        <Input id="last-name" type="text" placeholder="Doe" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email-form">
          Email
          <span className="text-destructive ml-0.5">*</span>
        </Label>
        <Input id="email-form" type="email" placeholder="john@example.com" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password-form">
          Password
          <span className="text-destructive ml-0.5">*</span>
        </Label>
        <Input id="password-form" type="password" placeholder="••••••••" required />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="remember" />
        <Label htmlFor="remember">Remember me</Label>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};
