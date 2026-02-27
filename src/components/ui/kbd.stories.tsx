import type { Meta, StoryObj } from '@storybook/react';
import { CommandIcon } from 'lucide-react';
import { Kbd, KbdGroup } from '@/components/ui/kbd';

const meta = {
  title: 'Primitives/Kbd',
  component: Kbd,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Kbd>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'K',
  },
};

export const SingleKeys: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Kbd>A</Kbd>
      <Kbd>B</Kbd>
      <Kbd>⌘</Kbd>
      <Kbd>⌃</Kbd>
      <Kbd>⌥</Kbd>
      <Kbd>⇧</Kbd>
      <Kbd>↵</Kbd>
      <Kbd>⌫</Kbd>
      <Kbd>Tab</Kbd>
      <Kbd>Esc</Kbd>
    </div>
  ),
};

export const CommonShortcuts: Story = {
  render: () => (
    <div className="space-y-3">
      {[
        { label: 'Copy', keys: ['⌘', 'C'] },
        { label: 'Paste', keys: ['⌘', 'V'] },
        { label: 'Cut', keys: ['⌘', 'X'] },
        { label: 'Undo', keys: ['⌘', 'Z'] },
        { label: 'Redo', keys: ['⌘', '⇧', 'Z'] },
        { label: 'Save', keys: ['⌘', 'S'] },
        { label: 'Find', keys: ['⌘', 'F'] },
        { label: 'Select all', keys: ['⌘', 'A'] },
      ].map(({ label, keys }) => (
        <div key={label} className="flex items-center justify-between gap-8">
          <span className="text-sm">{label}</span>
          <KbdGroup>
            {keys.map((k) => (
              <Kbd key={k}>{k}</Kbd>
            ))}
          </KbdGroup>
        </div>
      ))}
    </div>
  ),
};

export const WithIconKey: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <KbdGroup>
        <Kbd>
          <CommandIcon />
        </Kbd>
        <Kbd>K</Kbd>
      </KbdGroup>
      <KbdGroup>
        <Kbd>
          <CommandIcon />
        </Kbd>
        <Kbd>⇧</Kbd>
        <Kbd>P</Kbd>
      </KbdGroup>
    </div>
  ),
};

export const InlineWithText: Story = {
  render: () => (
    <div className="max-w-sm space-y-3 text-sm">
      <p>
        Press <Kbd>⌘</Kbd> <Kbd>K</Kbd> to open the command palette.
      </p>
      <p>
        Use <Kbd>Tab</Kbd> to navigate between fields, and <Kbd>↵</Kbd> to
        confirm your selection.
      </p>
      <p>
        Hold <Kbd>⌘</Kbd> and click to select multiple items.
      </p>
    </div>
  ),
};

export const KeyboardNavigationShortcuts: Story = {
  render: () => (
    <div className="w-64 space-y-2">
      <p className="text-muted-foreground mb-3 text-xs font-medium uppercase tracking-wide">
        Keyboard shortcuts
      </p>
      {[
        { action: 'Open palette', combo: ['⌘', 'K'] },
        { action: 'Quick search', combo: ['⌘', 'P'] },
        { action: 'New item', combo: ['⌘', 'N'] },
        { action: 'Close panel', combo: ['Esc'] },
        { action: 'Toggle theme', combo: ['⌘', '⇧', 'D'] },
        { action: 'Zoom in', combo: ['⌘', '+'] },
        { action: 'Zoom out', combo: ['⌘', '-'] },
      ].map(({ action, combo }) => (
        <div
          key={action}
          className="flex items-center justify-between rounded-md px-2 py-1.5 hover:bg-muted/50"
        >
          <span className="text-sm">{action}</span>
          <KbdGroup>
            {combo.map((k) => (
              <Kbd key={k}>{k}</Kbd>
            ))}
          </KbdGroup>
        </div>
      ))}
    </div>
  ),
};

export const KbdGroupVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <span className="text-muted-foreground w-28 text-sm">Single</span>
        <Kbd>⌘</Kbd>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-muted-foreground w-28 text-sm">Two keys</span>
        <KbdGroup>
          <Kbd>⌘</Kbd>
          <Kbd>S</Kbd>
        </KbdGroup>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-muted-foreground w-28 text-sm">Three keys</span>
        <KbdGroup>
          <Kbd>⌘</Kbd>
          <Kbd>⇧</Kbd>
          <Kbd>Z</Kbd>
        </KbdGroup>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-muted-foreground w-28 text-sm">Word key</span>
        <Kbd>Enter</Kbd>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-muted-foreground w-28 text-sm">With icon</span>
        <KbdGroup>
          <Kbd>
            <CommandIcon />
          </Kbd>
          <Kbd>K</Kbd>
        </KbdGroup>
      </div>
    </div>
  ),
};
