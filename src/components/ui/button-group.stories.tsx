import type { Meta, StoryObj } from '@storybook/react';
import { AlignLeft, AlignCenter, AlignRight, Bold, Italic, Underline, Copy, Scissors, ClipboardPaste } from 'lucide-react';
import {
  ButtonGroup,
  ButtonGroupText,
  ButtonGroupSeparator,
} from '@/components/ui/button-group';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const meta = {
  title: 'Primitives/ButtonGroup',
  component: ButtonGroup,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
  },
} satisfies Meta<typeof ButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    orientation: 'horizontal',
  },
  render: (args) => (
    <ButtonGroup {...args}>
      <Button variant="outline">Previous</Button>
      <Button variant="outline">Current</Button>
      <Button variant="outline">Next</Button>
    </ButtonGroup>
  ),
};

export const TextAlignment: Story = {
  render: () => (
    <ButtonGroup>
      <Button variant="outline" size="icon" aria-label="Align left">
        <AlignLeft />
      </Button>
      <Button variant="outline" size="icon" aria-label="Align center">
        <AlignCenter />
      </Button>
      <Button variant="outline" size="icon" aria-label="Align right">
        <AlignRight />
      </Button>
    </ButtonGroup>
  ),
};

export const TextFormatting: Story = {
  render: () => (
    <ButtonGroup>
      <Button variant="outline" size="icon" aria-label="Bold">
        <Bold />
      </Button>
      <Button variant="outline" size="icon" aria-label="Italic">
        <Italic />
      </Button>
      <Button variant="outline" size="icon" aria-label="Underline">
        <Underline />
      </Button>
    </ButtonGroup>
  ),
};

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
  },
  render: (args) => (
    <ButtonGroup {...args}>
      <Button variant="outline">Top</Button>
      <Button variant="outline">Middle</Button>
      <Button variant="outline">Bottom</Button>
    </ButtonGroup>
  ),
};

export const WithSeparator: Story = {
  render: () => (
    <ButtonGroup>
      <Button variant="outline" size="icon" aria-label="Copy">
        <Copy />
      </Button>
      <Button variant="outline" size="icon" aria-label="Cut">
        <Scissors />
      </Button>
      <ButtonGroupSeparator />
      <Button variant="outline" size="icon" aria-label="Paste">
        <ClipboardPaste />
      </Button>
    </ButtonGroup>
  ),
};

export const WithInputPrefix: Story = {
  render: () => (
    <ButtonGroup className="w-full max-w-sm">
      <ButtonGroupText>https://</ButtonGroupText>
      <Input placeholder="example.com" className="flex-1" />
    </ButtonGroup>
  ),
};

export const WithInputSuffix: Story = {
  render: () => (
    <ButtonGroup className="w-full max-w-sm">
      <Input placeholder="Amount" type="number" className="flex-1" />
      <ButtonGroupText>USD</ButtonGroupText>
    </ButtonGroup>
  ),
};

export const WithInputAndButton: Story = {
  render: () => (
    <ButtonGroup className="w-full max-w-sm">
      <Input placeholder="Search..." className="flex-1" />
      <Button>Search</Button>
    </ButtonGroup>
  ),
};

export const MixedContent: Story = {
  render: () => (
    <ButtonGroup>
      <ButtonGroupText>$</ButtonGroupText>
      <Input placeholder="0.00" type="number" className="w-32" />
      <ButtonGroupSeparator />
      <Button variant="outline">Apply</Button>
      <Button>Pay</Button>
    </ButtonGroup>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div>
        <p className="text-xs text-muted-foreground mb-2">xs</p>
        <ButtonGroup>
          <Button variant="outline" size="xs">Cancel</Button>
          <Button size="xs">Confirm</Button>
        </ButtonGroup>
      </div>
      <div>
        <p className="text-xs text-muted-foreground mb-2">sm</p>
        <ButtonGroup>
          <Button variant="outline" size="sm">Cancel</Button>
          <Button size="sm">Confirm</Button>
        </ButtonGroup>
      </div>
      <div>
        <p className="text-xs text-muted-foreground mb-2">default</p>
        <ButtonGroup>
          <Button variant="outline">Cancel</Button>
          <Button>Confirm</Button>
        </ButtonGroup>
      </div>
      <div>
        <p className="text-xs text-muted-foreground mb-2">lg</p>
        <ButtonGroup>
          <Button variant="outline" size="lg">Cancel</Button>
          <Button size="lg">Confirm</Button>
        </ButtonGroup>
      </div>
    </div>
  ),
};
