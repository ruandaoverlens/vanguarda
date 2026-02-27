import type { Meta, StoryObj } from '@storybook/react'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'

const meta = {
  title: 'Primitives/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Whether the entire radio group is disabled',
    },
    orientation: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
      description: 'Layout orientation of the radio group',
    },
  },
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <RadioGroup defaultValue="option-2">
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option-1" id="option-1" />
        <Label htmlFor="option-1">Option 1</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option-2" id="option-2" />
        <Label htmlFor="option-2">Option 2</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option-3" id="option-3" />
        <Label htmlFor="option-3">Option 3</Label>
      </div>
    </RadioGroup>
  ),
}

export const NoDefault: Story = {
  render: () => (
    <RadioGroup>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option-1" id="nd-option-1" />
        <Label htmlFor="nd-option-1">Option 1</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option-2" id="nd-option-2" />
        <Label htmlFor="nd-option-2">Option 2</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option-3" id="nd-option-3" />
        <Label htmlFor="nd-option-3">Option 3</Label>
      </div>
    </RadioGroup>
  ),
}

export const Disabled: Story = {
  render: () => (
    <RadioGroup disabled defaultValue="option-1">
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option-1" id="dis-option-1" />
        <Label htmlFor="dis-option-1">Option 1 (selected)</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option-2" id="dis-option-2" />
        <Label htmlFor="dis-option-2">Option 2</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option-3" id="dis-option-3" />
        <Label htmlFor="dis-option-3">Option 3</Label>
      </div>
    </RadioGroup>
  ),
}

export const SingleItemDisabled: Story = {
  render: () => (
    <RadioGroup defaultValue="standard">
      <div className="flex items-center gap-2">
        <RadioGroupItem value="standard" id="plan-standard" />
        <Label htmlFor="plan-standard">Standard plan</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="pro" id="plan-pro" />
        <Label htmlFor="plan-pro">Pro plan</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="enterprise" id="plan-enterprise" disabled />
        <Label htmlFor="plan-enterprise" className="text-muted-foreground cursor-not-allowed">
          Enterprise plan (contact sales)
        </Label>
      </div>
    </RadioGroup>
  ),
}

export const Horizontal: Story = {
  render: () => (
    <RadioGroup defaultValue="card" orientation="horizontal" className="flex flex-row gap-4">
      <div className="flex items-center gap-2">
        <RadioGroupItem value="card" id="pay-card" />
        <Label htmlFor="pay-card">Card</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="paypal" id="pay-paypal" />
        <Label htmlFor="pay-paypal">PayPal</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="pix" id="pay-pix" />
        <Label htmlFor="pay-pix">Pix</Label>
      </div>
    </RadioGroup>
  ),
}

export const WithDescriptions: Story = {
  render: () => (
    <RadioGroup defaultValue="comfortable" className="gap-4">
      <div className="flex items-start gap-3">
        <RadioGroupItem value="default" id="density-default" className="mt-0.5" />
        <div className="grid gap-0.5">
          <Label htmlFor="density-default">Default</Label>
          <p className="text-muted-foreground text-sm">
            Standard spacing for most use cases.
          </p>
        </div>
      </div>
      <div className="flex items-start gap-3">
        <RadioGroupItem value="comfortable" id="density-comfortable" className="mt-0.5" />
        <div className="grid gap-0.5">
          <Label htmlFor="density-comfortable">Comfortable</Label>
          <p className="text-muted-foreground text-sm">
            More spacing for easier readability.
          </p>
        </div>
      </div>
      <div className="flex items-start gap-3">
        <RadioGroupItem value="compact" id="density-compact" className="mt-0.5" />
        <div className="grid gap-0.5">
          <Label htmlFor="density-compact">Compact</Label>
          <p className="text-muted-foreground text-sm">
            Less spacing to show more content at once.
          </p>
        </div>
      </div>
    </RadioGroup>
  ),
  parameters: { layout: 'padded' },
}

export const AsFormField: Story = {
  render: () => (
    <div className="space-y-3">
      <Label className="text-base font-semibold">Notification frequency</Label>
      <RadioGroup defaultValue="daily">
        <div className="flex items-center gap-2">
          <RadioGroupItem value="realtime" id="freq-realtime" />
          <Label htmlFor="freq-realtime">Real-time</Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem value="daily" id="freq-daily" />
          <Label htmlFor="freq-daily">Daily digest</Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem value="weekly" id="freq-weekly" />
          <Label htmlFor="freq-weekly">Weekly summary</Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem value="never" id="freq-never" />
          <Label htmlFor="freq-never">Never</Label>
        </div>
      </RadioGroup>
    </div>
  ),
  parameters: { layout: 'padded' },
}
