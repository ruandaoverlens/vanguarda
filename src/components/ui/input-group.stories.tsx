import type { Meta, StoryObj } from '@storybook/react';
import {
  AtSignIcon,
  CopyIcon,
  EyeIcon,
  GlobeIcon,
  LockIcon,
  MailIcon,
  SearchIcon,
} from 'lucide-react';
import { Kbd } from '@/components/ui/kbd';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from '@/components/ui/input-group';
import { Label } from '@/components/ui/label';

const meta = {
  title: 'Primitives/InputGroup',
  component: InputGroup,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof InputGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-80">
      <InputGroup>
        <InputGroupInput placeholder="Search..." />
      </InputGroup>
    </div>
  ),
};

export const WithPrefixText: Story = {
  render: () => (
    <div className="w-80 space-y-2">
      <Label>Website URL</Label>
      <InputGroup>
        <InputGroupAddon align="inline-start">
          <InputGroupText>https://</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder="yoursite.com" />
      </InputGroup>
    </div>
  ),
};

export const WithSuffixText: Story = {
  render: () => (
    <div className="w-80 space-y-2">
      <Label>Email username</Label>
      <InputGroup>
        <InputGroupInput placeholder="username" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>@vanguarda.dev</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
};

export const WithPrefixIcon: Story = {
  render: () => (
    <div className="w-80 space-y-2">
      <Label>Email address</Label>
      <InputGroup>
        <InputGroupAddon align="inline-start">
          <InputGroupText>
            <MailIcon />
          </InputGroupText>
        </InputGroupAddon>
        <InputGroupInput type="email" placeholder="you@example.com" />
      </InputGroup>
    </div>
  ),
};

export const WithSuffixButton: Story = {
  render: () => (
    <div className="w-80 space-y-2">
      <Label>Password</Label>
      <InputGroup>
        <InputGroupAddon align="inline-start">
          <InputGroupText>
            <LockIcon />
          </InputGroupText>
        </InputGroupAddon>
        <InputGroupInput type="password" placeholder="Enter password" />
        <InputGroupAddon align="inline-end">
          <InputGroupButton>
            <EyeIcon />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
};

export const WithBothAddons: Story = {
  render: () => (
    <div className="w-80 space-y-2">
      <Label>Domain</Label>
      <InputGroup>
        <InputGroupAddon align="inline-start">
          <InputGroupText>
            <GlobeIcon />
          </InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder="subdomain" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>.vanguarda.dev</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
};

export const SearchWithKbd: Story = {
  render: () => (
    <div className="w-80 space-y-2">
      <Label>Quick search</Label>
      <InputGroup>
        <InputGroupAddon align="inline-start">
          <InputGroupText>
            <SearchIcon />
          </InputGroupText>
        </InputGroupAddon>
        <InputGroupInput type="search" placeholder="Search..." />
        <InputGroupAddon align="inline-end">
          <Kbd>⌘K</Kbd>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
};

export const WithCopyButton: Story = {
  render: () => (
    <div className="w-80 space-y-2">
      <Label>API Key</Label>
      <InputGroup>
        <InputGroupInput
          defaultValue="sk-vg-1234567890abcdef"
          readOnly
          className="font-mono text-xs"
        />
        <InputGroupAddon align="inline-end">
          <InputGroupButton size="xs">
            <CopyIcon />
            Copy
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
};

export const WithAtSign: Story = {
  render: () => (
    <div className="w-80 space-y-2">
      <Label>Username</Label>
      <InputGroup>
        <InputGroupAddon align="inline-start">
          <InputGroupText>
            <AtSignIcon />
          </InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder="your_username" />
      </InputGroup>
    </div>
  ),
};

export const WithBlockAddon: Story = {
  render: () => (
    <div className="w-80 space-y-2">
      <Label>Bio</Label>
      <InputGroup>
        <InputGroupAddon align="block-start">
          <InputGroupText>Bio</InputGroupText>
        </InputGroupAddon>
        <InputGroupTextarea placeholder="Tell us about yourself..." rows={3} />
      </InputGroup>
    </div>
  ),
};

export const ErrorState: Story = {
  render: () => (
    <div className="w-80 space-y-2">
      <Label>Email</Label>
      <InputGroup>
        <InputGroupAddon align="inline-start">
          <InputGroupText>
            <MailIcon />
          </InputGroupText>
        </InputGroupAddon>
        <InputGroupInput
          type="email"
          defaultValue="not-valid"
          aria-invalid
        />
      </InputGroup>
      <p className="text-destructive text-xs">Please enter a valid email address.</p>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="w-96 space-y-6">
      <div className="space-y-2">
        <Label>Prefix text</Label>
        <InputGroup>
          <InputGroupAddon align="inline-start">
            <InputGroupText>https://</InputGroupText>
          </InputGroupAddon>
          <InputGroupInput placeholder="yoursite.com" />
        </InputGroup>
      </div>
      <div className="space-y-2">
        <Label>Suffix text</Label>
        <InputGroup>
          <InputGroupInput placeholder="username" />
          <InputGroupAddon align="inline-end">
            <InputGroupText>@vanguarda.dev</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
      </div>
      <div className="space-y-2">
        <Label>Prefix icon</Label>
        <InputGroup>
          <InputGroupAddon align="inline-start">
            <InputGroupText>
              <SearchIcon />
            </InputGroupText>
          </InputGroupAddon>
          <InputGroupInput placeholder="Search..." />
        </InputGroup>
      </div>
      <div className="space-y-2">
        <Label>Both addons</Label>
        <InputGroup>
          <InputGroupAddon align="inline-start">
            <InputGroupText>
              <GlobeIcon />
            </InputGroupText>
          </InputGroupAddon>
          <InputGroupInput placeholder="subdomain" />
          <InputGroupAddon align="inline-end">
            <InputGroupText>.app</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
      </div>
      <div className="space-y-2">
        <Label>With button</Label>
        <InputGroup>
          <InputGroupInput defaultValue="sk-abc123xyz" readOnly />
          <InputGroupAddon align="inline-end">
            <InputGroupButton>
              <CopyIcon />
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </div>
      <div className="space-y-2">
        <Label>Textarea</Label>
        <InputGroup>
          <InputGroupAddon align="block-start">
            <InputGroupText>Note</InputGroupText>
          </InputGroupAddon>
          <InputGroupTextarea placeholder="Add a note..." rows={3} />
        </InputGroup>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};
