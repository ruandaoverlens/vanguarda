import type { Meta, StoryObj } from '@storybook/react';
import { InfoIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';

const meta = {
  title: 'Primitives/Field',
  component: Field,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A composable field wrapper system for building forms with consistent structure. Provides Field, FieldLabel, FieldDescription, FieldError, FieldGroup, FieldSet, FieldLegend, FieldContent, FieldTitle, and FieldSeparator.',
      },
    },
  },
  argTypes: {
    orientation: {
      control: 'select',
      options: ['vertical', 'horizontal', 'responsive'],
      description: 'Layout orientation of the field.',
    },
  },
} satisfies Meta<typeof Field>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="max-w-md">
      <Field>
        <FieldLabel htmlFor="field-name">Full name</FieldLabel>
        <Input id="field-name" placeholder="Jane Doe" />
      </Field>
    </div>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <div className="max-w-md">
      <Field>
        <FieldLabel htmlFor="field-email">Email address</FieldLabel>
        <Input
          id="field-email"
          type="email"
          placeholder="jane@example.com"
        />
        <FieldDescription>
          We&apos;ll only use this to send important account updates.
        </FieldDescription>
      </Field>
    </div>
  ),
};

export const WithError: Story = {
  render: () => (
    <div className="max-w-md">
      <Field data-invalid="true">
        <FieldLabel htmlFor="field-error">Email address</FieldLabel>
        <Input
          id="field-error"
          type="email"
          placeholder="jane@example.com"
          defaultValue="not-an-email"
          aria-invalid
        />
        <FieldDescription>Enter a valid email address.</FieldDescription>
        <FieldError>Please enter a valid email address.</FieldError>
      </Field>
    </div>
  ),
};

export const WithMultipleErrors: Story = {
  render: () => (
    <div className="max-w-md">
      <Field data-invalid="true">
        <FieldLabel htmlFor="field-multi-error">Password</FieldLabel>
        <Input id="field-multi-error" type="password" aria-invalid />
        <FieldError
          errors={[
            { message: 'Password must be at least 8 characters' },
            { message: 'Password must contain at least one uppercase letter' },
            { message: 'Password must contain at least one number' },
          ]}
        />
      </Field>
    </div>
  ),
};

export const HorizontalOrientation: Story = {
  args: {
    orientation: 'horizontal',
  },
  render: (args) => (
    <div className="max-w-lg">
      <FieldGroup>
        <Field orientation={args.orientation}>
          <FieldLabel htmlFor="field-h-name">Name</FieldLabel>
          <Input id="field-h-name" placeholder="Jane Doe" />
        </Field>
        <Field orientation={args.orientation}>
          <FieldLabel htmlFor="field-h-email">Email</FieldLabel>
          <Input id="field-h-email" type="email" placeholder="jane@example.com" />
        </Field>
        <Field orientation={args.orientation}>
          <FieldLabel htmlFor="field-h-bio">Bio</FieldLabel>
          <FieldContent>
            <Textarea id="field-h-bio" placeholder="Tell us about yourself..." />
            <FieldDescription>Max 200 characters.</FieldDescription>
          </FieldContent>
        </Field>
      </FieldGroup>
    </div>
  ),
};

export const VerticalGroup: Story = {
  render: () => (
    <div className="max-w-md">
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="field-g-first">First name</FieldLabel>
          <Input id="field-g-first" placeholder="Jane" />
        </Field>
        <Field>
          <FieldLabel htmlFor="field-g-last">Last name</FieldLabel>
          <Input id="field-g-last" placeholder="Doe" />
        </Field>
        <Field>
          <FieldLabel htmlFor="field-g-email">Email</FieldLabel>
          <Input id="field-g-email" type="email" placeholder="jane@example.com" />
          <FieldDescription>Used for login and notifications.</FieldDescription>
        </Field>
      </FieldGroup>
    </div>
  ),
};

export const WithFieldSet: Story = {
  render: () => (
    <div className="max-w-md">
      <FieldSet>
        <FieldLegend>Personal information</FieldLegend>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="field-fs-name">Full name</FieldLabel>
            <Input id="field-fs-name" placeholder="Jane Doe" />
          </Field>
          <Field>
            <FieldLabel htmlFor="field-fs-email">Email</FieldLabel>
            <Input id="field-fs-email" type="email" placeholder="jane@example.com" />
          </Field>
        </FieldGroup>
      </FieldSet>
    </div>
  ),
};

export const WithSeparator: Story = {
  render: () => (
    <div className="max-w-md">
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="field-sep-email">Email</FieldLabel>
          <Input id="field-sep-email" type="email" placeholder="jane@example.com" />
        </Field>
        <FieldSeparator>or</FieldSeparator>
        <Field>
          <FieldLabel htmlFor="field-sep-phone">Phone number</FieldLabel>
          <Input id="field-sep-phone" type="tel" placeholder="+1 (555) 000-0000" />
        </Field>
      </FieldGroup>
    </div>
  ),
};

export const WithSwitch: Story = {
  render: () => (
    <div className="max-w-md">
      <FieldGroup>
        <Field orientation="horizontal">
          <FieldLabel htmlFor="field-switch-notif">
            <span>Email notifications</span>
          </FieldLabel>
          <FieldContent>
            <Switch id="field-switch-notif" />
            <FieldDescription>
              Receive email updates about your account activity.
            </FieldDescription>
          </FieldContent>
        </Field>
        <Field orientation="horizontal">
          <FieldLabel htmlFor="field-switch-mkt">
            <span>Marketing emails</span>
          </FieldLabel>
          <FieldContent>
            <Switch id="field-switch-mkt" />
            <FieldDescription>
              Receive occasional product updates and offers.
            </FieldDescription>
          </FieldContent>
        </Field>
      </FieldGroup>
    </div>
  ),
};

export const WithRadioGroup: Story = {
  render: () => (
    <div className="max-w-md">
      <FieldSet>
        <FieldLegend variant="label">Notification preference</FieldLegend>
        <FieldDescription>
          Choose how you want to be notified.
        </FieldDescription>
        <RadioGroup defaultValue="email">
          <Field orientation="horizontal">
            <RadioGroupItem value="email" id="field-radio-email" />
            <FieldContent>
              <FieldTitle>Email</FieldTitle>
              <FieldDescription>Delivered to your inbox.</FieldDescription>
            </FieldContent>
          </Field>
          <Field orientation="horizontal">
            <RadioGroupItem value="push" id="field-radio-push" />
            <FieldContent>
              <FieldTitle>Push notifications</FieldTitle>
              <FieldDescription>Sent to your mobile device.</FieldDescription>
            </FieldContent>
          </Field>
          <Field orientation="horizontal">
            <RadioGroupItem value="sms" id="field-radio-sms" />
            <FieldContent>
              <FieldTitle>SMS</FieldTitle>
              <FieldDescription>Sent as a text message.</FieldDescription>
            </FieldContent>
          </Field>
        </RadioGroup>
      </FieldSet>
    </div>
  ),
};

export const WithCheckbox: Story = {
  render: () => (
    <div className="max-w-md">
      <FieldGroup>
        <Field orientation="horizontal">
          <Checkbox id="field-chk-terms" />
          <FieldContent>
            <FieldLabel htmlFor="field-chk-terms">
              I agree to the terms and conditions
            </FieldLabel>
            <FieldDescription>
              By checking this, you accept our{' '}
              <a href="#">Terms of Service</a> and{' '}
              <a href="#">Privacy Policy</a>.
            </FieldDescription>
          </FieldContent>
        </Field>
        <Field orientation="horizontal">
          <Checkbox id="field-chk-newsletter" />
          <FieldContent>
            <FieldLabel htmlFor="field-chk-newsletter">
              Subscribe to newsletter
            </FieldLabel>
            <FieldDescription>
              Get weekly updates on new features and improvements.
            </FieldDescription>
          </FieldContent>
        </Field>
      </FieldGroup>
    </div>
  ),
};

export const FullFormLayout: Story = {
  render: () => (
    <div className="max-w-lg">
      <FieldSet>
        <FieldLegend>Account details</FieldLegend>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="field-full-email">Email address</FieldLabel>
            <Input
              id="field-full-email"
              type="email"
              placeholder="jane@example.com"
            />
            <FieldDescription>
              Used for login — you can change this later.
            </FieldDescription>
          </Field>
          <Field>
            <FieldLabel htmlFor="field-full-pass">Password</FieldLabel>
            <Input id="field-full-pass" type="password" />
            <FieldDescription>
              At least 8 characters, including letters and numbers.
            </FieldDescription>
          </Field>
          <Field data-invalid="true">
            <FieldLabel htmlFor="field-full-confirm">Confirm password</FieldLabel>
            <Input id="field-full-confirm" type="password" aria-invalid />
            <FieldError>Passwords do not match.</FieldError>
          </Field>
        </FieldGroup>
      </FieldSet>
      <div className="mt-6 flex justify-end gap-3">
        <Button variant="outline">Cancel</Button>
        <Button>Create account</Button>
      </div>
    </div>
  ),
};
