import type { Meta, StoryObj } from '@storybook/react'
import {
  NativeSelect,
  NativeSelectOption,
  NativeSelectOptGroup,
} from '@/components/ui/native-select'

const meta = {
  title: 'Primitives/NativeSelect',
  component: NativeSelect,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: 'radio',
      options: ['default', 'sm'],
      description: 'Visual size of the select element',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the select is disabled',
    },
  },
} satisfies Meta<typeof NativeSelect>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    size: 'default',
  },
  render: (args) => (
    <NativeSelect {...args}>
      <NativeSelectOption value="">Select an option</NativeSelectOption>
      <NativeSelectOption value="apple">Apple</NativeSelectOption>
      <NativeSelectOption value="banana">Banana</NativeSelectOption>
      <NativeSelectOption value="cherry">Cherry</NativeSelectOption>
    </NativeSelect>
  ),
}

export const Small: Story = {
  args: {
    size: 'sm',
  },
  render: (args) => (
    <NativeSelect {...args}>
      <NativeSelectOption value="">Select an option</NativeSelectOption>
      <NativeSelectOption value="apple">Apple</NativeSelectOption>
      <NativeSelectOption value="banana">Banana</NativeSelectOption>
      <NativeSelectOption value="cherry">Cherry</NativeSelectOption>
    </NativeSelect>
  ),
}

export const WithDefaultSelected: Story = {
  args: {
    defaultValue: 'banana',
    size: 'default',
  },
  render: (args) => (
    <NativeSelect {...args}>
      <NativeSelectOption value="apple">Apple</NativeSelectOption>
      <NativeSelectOption value="banana">Banana</NativeSelectOption>
      <NativeSelectOption value="cherry">Cherry</NativeSelectOption>
    </NativeSelect>
  ),
}

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: 'apple',
    size: 'default',
  },
  render: (args) => (
    <NativeSelect {...args}>
      <NativeSelectOption value="apple">Apple</NativeSelectOption>
      <NativeSelectOption value="banana">Banana</NativeSelectOption>
      <NativeSelectOption value="cherry">Cherry</NativeSelectOption>
    </NativeSelect>
  ),
}

export const WithOptGroups: Story = {
  render: () => (
    <NativeSelect>
      <NativeSelectOption value="">Select a fruit or veggie</NativeSelectOption>
      <NativeSelectOptGroup label="Fruits">
        <NativeSelectOption value="apple">Apple</NativeSelectOption>
        <NativeSelectOption value="banana">Banana</NativeSelectOption>
        <NativeSelectOption value="mango">Mango</NativeSelectOption>
      </NativeSelectOptGroup>
      <NativeSelectOptGroup label="Vegetables">
        <NativeSelectOption value="carrot">Carrot</NativeSelectOption>
        <NativeSelectOption value="broccoli">Broccoli</NativeSelectOption>
        <NativeSelectOption value="spinach">Spinach</NativeSelectOption>
      </NativeSelectOptGroup>
    </NativeSelect>
  ),
}

export const WithPlaceholder: Story = {
  render: () => (
    <NativeSelect defaultValue="">
      <NativeSelectOption value="" disabled>
        -- Please select --
      </NativeSelectOption>
      <NativeSelectOption value="option1">Option 1</NativeSelectOption>
      <NativeSelectOption value="option2">Option 2</NativeSelectOption>
      <NativeSelectOption value="option3">Option 3</NativeSelectOption>
    </NativeSelect>
  ),
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <span className="text-muted-foreground text-xs">Default</span>
        <NativeSelect size="default">
          <NativeSelectOption value="">Select size default</NativeSelectOption>
          <NativeSelectOption value="a">Option A</NativeSelectOption>
          <NativeSelectOption value="b">Option B</NativeSelectOption>
        </NativeSelect>
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-muted-foreground text-xs">Small</span>
        <NativeSelect size="sm">
          <NativeSelectOption value="">Select size sm</NativeSelectOption>
          <NativeSelectOption value="a">Option A</NativeSelectOption>
          <NativeSelectOption value="b">Option B</NativeSelectOption>
        </NativeSelect>
      </div>
    </div>
  ),
  parameters: { layout: 'padded' },
}
