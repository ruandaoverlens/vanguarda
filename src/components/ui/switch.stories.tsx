import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'

import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'

const meta = {
  title: 'Primitives/Switch',
  component: Switch,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A toggle switch built on Radix UI. Supports `default` and `sm` sizes, controlled and uncontrolled modes, and a disabled state.',
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['default', 'sm'],
      description: 'Visual size of the switch',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the switch is disabled',
    },
    defaultChecked: {
      control: 'boolean',
      description: 'Default checked state (uncontrolled)',
    },
  },
} satisfies Meta<typeof Switch>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Checked: Story = {
  args: {
    defaultChecked: true,
  },
}

export const SmallSize: Story = {
  args: {
    size: 'sm',
  },
}

export const SmallChecked: Story = {
  args: {
    size: 'sm',
    defaultChecked: true,
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

export const DisabledChecked: Story = {
  args: {
    disabled: true,
    defaultChecked: true,
  },
}

export const WithLabel: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Switch id="notifications" />
      <Label htmlFor="notifications">Enable notifications</Label>
    </div>
  ),
}

export const WithLabelChecked: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Switch id="marketing" defaultChecked />
      <Label htmlFor="marketing">Receive marketing emails</Label>
    </div>
  ),
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <Switch size="default" />
        <Label>Default (unchecked)</Label>
      </div>
      <div className="flex items-center gap-3">
        <Switch size="default" defaultChecked />
        <Label>Default (checked)</Label>
      </div>
      <div className="flex items-center gap-3">
        <Switch size="sm" />
        <Label>Small (unchecked)</Label>
      </div>
      <div className="flex items-center gap-3">
        <Switch size="sm" defaultChecked />
        <Label>Small (checked)</Label>
      </div>
    </div>
  ),
}

export const SettingsGroup: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div className="w-80 space-y-4 rounded-lg border p-4">
      <h3 className="font-medium text-sm">Notification preferences</h3>
      <div className="space-y-3">
        {[
          { id: 'email', label: 'Email notifications', checked: true },
          { id: 'push', label: 'Push notifications', checked: false },
          { id: 'sms', label: 'SMS alerts', checked: false },
          { id: 'weekly', label: 'Weekly digest', checked: true },
        ].map(({ id, label, checked }) => (
          <div key={id} className="flex items-center justify-between">
            <Label htmlFor={id} className="text-sm font-normal cursor-pointer">
              {label}
            </Label>
            <Switch id={id} defaultChecked={checked} size="sm" />
          </div>
        ))}
      </div>
    </div>
  ),
}

export const Interactive: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const switchEl = canvas.getByRole('switch')

    await expect(switchEl).toHaveAttribute('data-state', 'unchecked')
    await userEvent.click(switchEl)
    await expect(switchEl).toHaveAttribute('data-state', 'checked')
    await userEvent.click(switchEl)
    await expect(switchEl).toHaveAttribute('data-state', 'unchecked')
  },
}
