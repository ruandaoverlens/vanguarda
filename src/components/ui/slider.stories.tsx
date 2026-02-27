import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import { useState } from 'react'
import { Slider } from '@/components/ui/slider'

const meta = {
  title: 'Primitives/Slider',
  component: Slider,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    min: {
      control: { type: 'number' },
      description: 'The minimum value of the slider.',
    },
    max: {
      control: { type: 'number' },
      description: 'The maximum value of the slider.',
    },
    step: {
      control: { type: 'number' },
      description: 'The step increment between values.',
    },
    disabled: {
      control: 'boolean',
      description: 'When true, prevents user interaction.',
    },
    orientation: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
      description: 'The orientation of the slider.',
    },
  },
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    defaultValue: [50],
    min: 0,
    max: 100,
    step: 1,
    className: 'w-64',
  },
}

export const WithValue: Story = {
  render: () => {
    const [value, setValue] = useState([33])
    return (
      <div className="flex flex-col gap-4 w-64">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Volume</span>
          <span className="font-medium tabular-nums">{value[0]}%</span>
        </div>
        <Slider
          value={value}
          onValueChange={setValue}
          min={0}
          max={100}
          step={1}
        />
      </div>
    )
  },
}

export const Range: Story = {
  render: () => {
    const [values, setValues] = useState([20, 80])
    return (
      <div className="flex flex-col gap-4 w-64">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Price range</span>
          <span className="font-medium tabular-nums">
            ${values[0]} – ${values[1]}
          </span>
        </div>
        <Slider
          value={values}
          onValueChange={setValues}
          min={0}
          max={200}
          step={5}
        />
      </div>
    )
  },
}

export const WithStep: Story = {
  render: () => {
    const [value, setValue] = useState([0])
    const steps = [0, 25, 50, 75, 100]
    return (
      <div className="flex flex-col gap-4 w-64">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Steps of 25</span>
          <span className="font-medium tabular-nums">{value[0]}</span>
        </div>
        <Slider
          value={value}
          onValueChange={setValue}
          min={0}
          max={100}
          step={25}
        />
        <div className="flex justify-between text-xs text-muted-foreground">
          {steps.map((step) => (
            <span key={step}>{step}</span>
          ))}
        </div>
      </div>
    )
  },
}

export const Disabled: Story = {
  args: {
    defaultValue: [60],
    min: 0,
    max: 100,
    disabled: true,
    className: 'w-64',
  },
}

export const Vertical: Story = {
  render: () => (
    <div className="flex items-center gap-8 h-48">
      <div className="flex flex-col items-center gap-2">
        <Slider
          defaultValue={[30]}
          orientation="vertical"
          min={0}
          max={100}
          className="h-40"
        />
        <span className="text-xs text-muted-foreground">30%</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Slider
          defaultValue={[60]}
          orientation="vertical"
          min={0}
          max={100}
          className="h-40"
        />
        <span className="text-xs text-muted-foreground">60%</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Slider
          defaultValue={[90]}
          orientation="vertical"
          min={0}
          max={100}
          className="h-40"
        />
        <span className="text-xs text-muted-foreground">90%</span>
      </div>
    </div>
  ),
}

export const CustomRange: Story = {
  render: () => (
    <div className="flex flex-col gap-6 w-64">
      <div className="flex flex-col gap-3">
        <span className="text-xs text-muted-foreground">Temperature (°C)</span>
        <Slider defaultValue={[22]} min={-20} max={50} step={0.5} />
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-xs text-muted-foreground">Opacity (%)</span>
        <Slider defaultValue={[75]} min={0} max={100} step={5} />
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-xs text-muted-foreground">
          Font size (px: 12–72)
        </span>
        <Slider defaultValue={[16]} min={12} max={72} step={2} />
      </div>
    </div>
  ),
}

export const InteractionTest: Story = {
  render: () => {
    const [value, setValue] = useState([50])
    return (
      <div className="flex flex-col gap-4 w-64">
        <span data-testid="slider-value" className="text-sm tabular-nums">
          {value[0]}
        </span>
        <Slider
          value={value}
          onValueChange={setValue}
          min={0}
          max={100}
          step={1}
        />
      </div>
    )
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const slider = canvas.getByRole('slider')
    await expect(slider).toBeInTheDocument()
    slider.focus()
    await expect(slider).toHaveFocus()
    await userEvent.keyboard('{ArrowRight}')
    await userEvent.keyboard('{ArrowRight}')
    await userEvent.keyboard('{ArrowRight}')
  },
}
