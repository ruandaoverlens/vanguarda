import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from 'storybook/test';
import { Mail, Loader2, ChevronRight, Plus, Trash2, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';

const meta = {
  title: 'Primitives/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
    },
    size: {
      control: 'select',
      options: ['default', 'xs', 'sm', 'lg', 'icon', 'icon-xs', 'icon-sm', 'icon-lg'],
    },
    disabled: {
      control: 'boolean',
    },
    asChild: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Button',
    variant: 'default',
    size: 'default',
  },
};

export const Destructive: Story = {
  args: {
    children: 'Delete',
    variant: 'destructive',
  },
};

export const Outline: Story = {
  args: {
    children: 'Outline',
    variant: 'outline',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary',
    variant: 'secondary',
  },
};

export const Ghost: Story = {
  args: {
    children: 'Ghost',
    variant: 'ghost',
  },
};

export const Link: Story = {
  args: {
    children: 'Link',
    variant: 'link',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <p className="text-xs text-muted-foreground">Buttons use Outfit (font-sans) — always uppercase</p>
      <div className="flex flex-wrap gap-3 items-center">
        <Button variant="default">Default</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
      </div>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3 items-end">
      <Button size="xs">Extra Small</Button>
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};

export const IconSizes: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3 items-end">
      <Button size="icon-xs" aria-label="Settings xs">
        <Settings />
      </Button>
      <Button size="icon-sm" aria-label="Settings sm">
        <Settings />
      </Button>
      <Button size="icon" aria-label="Settings default">
        <Settings />
      </Button>
      <Button size="icon-lg" aria-label="Settings lg">
        <Settings />
      </Button>
    </div>
  ),
};

export const WithLeadingIcon: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3 items-center">
      <Button>
        <Mail />
        Email
      </Button>
      <Button variant="outline">
        <Plus />
        Add Item
      </Button>
      <Button variant="destructive">
        <Trash2 />
        Delete
      </Button>
    </div>
  ),
};

export const WithTrailingIcon: Story = {
  render: () => (
    <Button variant="outline">
      Continue
      <ChevronRight />
    </Button>
  ),
};

export const Loading: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3 items-center">
      <Button disabled>
        <Loader2 className="animate-spin" />
        Loading...
      </Button>
      <Button variant="outline" disabled>
        <Loader2 className="animate-spin" />
        Saving...
      </Button>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    children: 'Disabled',
    disabled: true,
  },
};

export const AllVariantsDisabled: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3 items-center">
      <Button variant="default" disabled>Default</Button>
      <Button variant="destructive" disabled>Destructive</Button>
      <Button variant="outline" disabled>Outline</Button>
      <Button variant="secondary" disabled>Secondary</Button>
      <Button variant="ghost" disabled>Ghost</Button>
      <Button variant="link" disabled>Link</Button>
    </div>
  ),
};

export const AsLink: Story = {
  render: () => (
    <Button variant="link" asChild>
      <a href="#">Go to Dashboard</a>
    </Button>
  ),
};

export const PrimaryColor: Story = {
  name: 'Primary = Atmos',
  render: () => (
    <div className="flex flex-col gap-4">
      <p className="text-xs text-muted-foreground">Primary color: atmos (#77C5D5)</p>
      <div className="flex flex-wrap gap-3 items-center">
        <Button variant="default">Primary Action</Button>
        <Button variant="default" size="lg">Large CTA</Button>
        <Button variant="default" size="sm">Small</Button>
        <Button variant="default" size="xs">Tiny</Button>
      </div>
    </div>
  ),
};

export const TypographyConvention: Story = {
  name: 'Typography: Outfit Uppercase',
  render: () => (
    <div className="flex flex-col gap-6">
      <div>
        <p className="text-xs text-muted-foreground mb-2">h1 — Outfit, auto-uppercase (short text)</p>
        <h1 className="text-3xl font-bold">Vanguarda</h1>
      </div>
      <div>
        <p className="text-xs text-muted-foreground mb-2">h2 — Inter, normal case (longer text)</p>
        <h2 className="text-2xl font-semibold">Welcome to the platform</h2>
      </div>
      <div>
        <p className="text-xs text-muted-foreground mb-2">Button — Outfit, auto-uppercase</p>
        <div className="flex gap-3">
          <Button>Get Started</Button>
          <Button variant="outline">Learn More</Button>
        </div>
      </div>
      <div>
        <p className="text-xs text-muted-foreground mb-2">Body — Inter, normal case</p>
        <p>This is body text using Inter for readability in longer content.</p>
      </div>
    </div>
  ),
};

export const VariantSizeMatrix: Story = {
  render: () => {
    const variants = ['default', 'destructive', 'outline', 'secondary', 'ghost'] as const;
    const sizes = ['xs', 'sm', 'default', 'lg'] as const;
    return (
      <div className="overflow-x-auto">
        <table className="border-collapse">
          <thead>
            <tr>
              <th className="text-xs text-muted-foreground text-left p-2 w-24">variant / size</th>
              {sizes.map((size) => (
                <th key={size} className="text-xs text-muted-foreground p-2">{size}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {variants.map((variant) => (
              <tr key={variant}>
                <td className="text-xs text-muted-foreground p-2">{variant}</td>
                {sizes.map((size) => (
                  <td key={size} className="p-2">
                    <Button variant={variant} size={size}>
                      Click
                    </Button>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  },
};

export const WithClickHandler: Story = {
  args: {
    children: 'Click me',
    onClick: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalledOnce();
  },
};

export const DisabledPreventClick: Story = {
  args: {
    children: 'Disabled',
    disabled: true,
    onClick: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await userEvent.click(button);
    await expect(args.onClick).not.toHaveBeenCalled();
  },
};
