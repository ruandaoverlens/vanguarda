import type { Meta, StoryObj } from '@storybook/react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const meta = {
  title: 'Primitives/AspectRatio',
  component: AspectRatio,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    ratio: {
      control: { type: 'number', min: 0.1, max: 4, step: 0.01 },
    },
  },
} satisfies Meta<typeof AspectRatio>;

export default meta;
type Story = StoryObj<typeof meta>;

const PlaceholderContent = ({ label }: { label: string }) => (
  <div className="flex h-full w-full items-center justify-center rounded-md bg-muted text-muted-foreground text-sm font-medium">
    {label}
  </div>
);

export const Ratio16x9: Story = {
  args: {
    ratio: 16 / 9,
  },
  render: (args) => (
    <div className="w-full max-w-lg">
      <AspectRatio {...args}>
        <PlaceholderContent label="16 / 9" />
      </AspectRatio>
    </div>
  ),
};

export const Ratio4x3: Story = {
  args: {
    ratio: 4 / 3,
  },
  render: (args) => (
    <div className="w-full max-w-lg">
      <AspectRatio {...args}>
        <PlaceholderContent label="4 / 3" />
      </AspectRatio>
    </div>
  ),
};

export const Ratio1x1: Story = {
  args: {
    ratio: 1 / 1,
  },
  render: (args) => (
    <div className="w-full max-w-xs">
      <AspectRatio {...args}>
        <PlaceholderContent label="1 / 1" />
      </AspectRatio>
    </div>
  ),
};

export const Ratio21x9: Story = {
  args: {
    ratio: 21 / 9,
  },
  render: (args) => (
    <div className="w-full max-w-2xl">
      <AspectRatio {...args}>
        <PlaceholderContent label="21 / 9 (Cinematic)" />
      </AspectRatio>
    </div>
  ),
};

export const AllRatios: Story = {
  render: () => (
    <div className="flex flex-col gap-6 max-w-sm">
      <div>
        <p className="text-xs text-muted-foreground mb-2 font-medium">16 / 9</p>
        <AspectRatio ratio={16 / 9}>
          <PlaceholderContent label="16 / 9" />
        </AspectRatio>
      </div>
      <div>
        <p className="text-xs text-muted-foreground mb-2 font-medium">4 / 3</p>
        <AspectRatio ratio={4 / 3}>
          <PlaceholderContent label="4 / 3" />
        </AspectRatio>
      </div>
      <div>
        <p className="text-xs text-muted-foreground mb-2 font-medium">1 / 1</p>
        <AspectRatio ratio={1 / 1}>
          <PlaceholderContent label="1 / 1" />
        </AspectRatio>
      </div>
    </div>
  ),
};

export const WithImage: Story = {
  render: () => (
    <div className="w-full max-w-lg">
      <AspectRatio ratio={16 / 9}>
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=450&fit=crop"
          alt="Mountain landscape"
          className="h-full w-full rounded-md object-cover"
        />
      </AspectRatio>
    </div>
  ),
};
