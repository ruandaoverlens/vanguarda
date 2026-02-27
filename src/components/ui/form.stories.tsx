import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from 'storybook/test';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';

const meta = {
  title: 'Primitives/Form',
  component: Form,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A form composition layer built on top of react-hook-form. Provides Form (FormProvider), FormField (Controller wrapper), FormItem, FormLabel, FormControl, FormDescription, and FormMessage components that auto-wire aria attributes and error states.',
      },
    },
  },
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

// ── Basic login form ─────────────────────────────────────────────────────────

const loginSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters.' }),
});

function LoginForm() {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: '', password: '' },
  });

  function onSubmit(values: z.infer<typeof loginSchema>) {
    console.log('Submitted:', values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full max-w-sm space-y-6"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="jane@example.com" {...field} />
              </FormControl>
              <FormDescription>
                Enter the email address linked to your account.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          Sign in
        </Button>
      </form>
    </Form>
  );
}

export const Login: Story = {
  render: () => <LoginForm />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const emailInput = canvas.getByLabelText(/email/i);
    const passwordInput = canvas.getByLabelText(/password/i);
    const submitButton = canvas.getByRole('button', { name: /sign in/i });

    // Submit with empty fields to trigger validation
    await userEvent.click(submitButton);
    const emailError = await canvas.findByText(/valid email/i);
    await expect(emailError).toBeInTheDocument();

    // Fill with valid data
    await userEvent.type(emailInput, 'jane@example.com');
    await userEvent.type(passwordInput, 'password123');
    await userEvent.click(submitButton);
  },
};

// ── Profile form ─────────────────────────────────────────────────────────────

const profileSchema = z.object({
  username: z
    .string()
    .min(2, { message: 'Username must be at least 2 characters.' })
    .max(30, { message: 'Username must be at most 30 characters.' }),
  bio: z.string().max(200, { message: 'Bio must be at most 200 characters.' }).optional(),
  role: z.string({ required_error: 'Please select a role.' }),
});

function ProfileForm() {
  const form = useForm<z.infer<typeof profileSchema>>({
    resolver: zodResolver(profileSchema),
    defaultValues: { username: '', bio: '' },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((v) => console.log(v))}
        className="w-full max-w-md space-y-6"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="janedoe" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bio</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us a little about yourself..."
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>Max 200 characters.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="role"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Role</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a role" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="admin">Admin</SelectItem>
                  <SelectItem value="editor">Editor</SelectItem>
                  <SelectItem value="viewer">Viewer</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>
                Controls what this user can do.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end gap-3">
          <Button type="button" variant="outline">
            Cancel
          </Button>
          <Button type="submit">Save profile</Button>
        </div>
      </form>
    </Form>
  );
}

export const Profile: Story = {
  render: () => <ProfileForm />,
};

// ── Notification preferences ─────────────────────────────────────────────────

const notificationsSchema = z.object({
  type: z.enum(['all', 'mentions', 'none'], {
    required_error: 'Please select a notification type.',
  }),
  marketing: z.boolean().default(false),
  security: z.boolean().default(true),
});

function NotificationsForm() {
  const form = useForm<z.infer<typeof notificationsSchema>>({
    resolver: zodResolver(notificationsSchema),
    defaultValues: { marketing: false, security: true },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((v) => console.log(v))}
        className="w-full max-w-md space-y-8"
      >
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Notify me about...</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="all" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      All new messages
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="mentions" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Direct messages and mentions
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="none" />
                    </FormControl>
                    <FormLabel className="font-normal">Nothing</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="marketing"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
              <div className="space-y-0.5">
                <FormLabel className="text-base">Marketing emails</FormLabel>
                <FormDescription>
                  Receive emails about new products and features.
                </FormDescription>
              </div>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="security"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
              <div className="space-y-0.5">
                <FormLabel className="text-base">Security emails</FormLabel>
                <FormDescription>
                  Receive emails about your account security.
                </FormDescription>
              </div>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit">Save preferences</Button>
      </form>
    </Form>
  );
}

export const NotificationPreferences: Story = {
  render: () => <NotificationsForm />,
};

// ── Registration form with checkbox ─────────────────────────────────────────

const registrationSchema = z.object({
  email: z.string().email({ message: 'Invalid email address.' }),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters.' }),
  terms: z.boolean().refine((v) => v === true, {
    message: 'You must accept the terms and conditions.',
  }),
});

function RegistrationForm() {
  const form = useForm<z.infer<typeof registrationSchema>>({
    resolver: zodResolver(registrationSchema),
    defaultValues: { email: '', password: '', terms: false },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((v) => console.log(v))}
        className="w-full max-w-sm space-y-6"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="jane@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
              <FormDescription>At least 8 characters.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="terms"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>Accept terms and conditions</FormLabel>
                <FormDescription>
                  You agree to our{' '}
                  <a href="#" className="underline">
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <a href="#" className="underline">
                    Privacy Policy
                  </a>
                  .
                </FormDescription>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          Create account
        </Button>
      </form>
    </Form>
  );
}

export const Registration: Story = {
  render: () => <RegistrationForm />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const submitButton = canvas.getByRole('button', { name: /create account/i });

    // Submit empty form — all fields should show errors
    await userEvent.click(submitButton);
    const emailError = await canvas.findByText(/invalid email/i);
    await expect(emailError).toBeInTheDocument();
  },
};

// ── Pre-filled with errors (static demo) ────────────────────────────────────

const demoSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

function ErrorStateForm() {
  const form = useForm<z.infer<typeof demoSchema>>({
    resolver: zodResolver(demoSchema),
    defaultValues: { email: 'not-an-email', password: 'short' },
    // Trigger validation immediately to show errors
    mode: 'onChange',
  });

  // Trigger errors on render for demo purposes
  form.trigger();

  return (
    <Form {...form}>
      <form className="w-full max-w-sm space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" {...field} aria-invalid />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" {...field} aria-invalid />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}

export const WithValidationErrors: Story = {
  render: () => <ErrorStateForm />,
  parameters: {
    docs: {
      description: {
        story:
          'Demonstrates the error state — FormLabel turns destructive and FormMessage displays the error below the input.',
      },
    },
  },
};
