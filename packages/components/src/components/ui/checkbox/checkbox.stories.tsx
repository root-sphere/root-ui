import type { Meta, StoryObj } from '@storybook/react';

import * as React from 'react';
import { useForm } from 'react-hook-form';

import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from '../form/form';
import { Checkbox } from './checkbox';

const meta = {
  args: {
    defaultChecked: false,
    disabled: false,
  },
  argTypes: {
    defaultChecked: {
      control: 'boolean',
      description: 'Whether the checkbox is checked by default',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the checkbox is disabled',
    },
    intent: {
      control: 'select',
      options: ['default'],
      description: 'The visual style variant of the checkbox',
    },
  },
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  title: 'Forms/Checkbox',
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">Default</h3>
        <div className="flex items-center space-x-2">
          <Checkbox id="terms1" defaultChecked={true} />
          <label
            htmlFor="terms1"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Accept terms and conditions
          </label>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">With Description</h3>
        <div className="flex items-start space-x-2">
          <Checkbox id="terms2" />
          <div className="grid gap-1.5 leading-none">
            <label
              htmlFor="terms2"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Accept terms and conditions
            </label>
            <p className="text-sm text-muted-foreground">
              You agree to our Terms of Service and Privacy Policy by checking this box.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">States</h3>
        <div className="flex items-center space-x-2">
          <Checkbox id="disabled1" disabled />
          <label
            htmlFor="disabled1"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Disabled
          </label>
        </div>
      </div>
    </div>
  ),
};

export const Playground: Story = {
  render: (args) => (
    <div className="flex items-start space-x-2">
      <Checkbox id="playground" {...args} />
      <div className="grid gap-1.5 leading-none">
        <label
          htmlFor="playground"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Email notifications
        </label>
        <p className="text-sm text-muted-foreground">Receive emails about your account activity.</p>
      </div>
    </div>
  ),
  args: {
    defaultChecked: false,
    disabled: false,
    intent: 'default',
  },
};

const FormTemplate = () => {
  const form = useForm({
    defaultValues: {
      marketing: false,
      terms: false,
    },
  });

  return (
    <Form {...form}>
      <form className="w-full space-y-6">
        <FormField
          control={form.control}
          name="marketing"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
              <FormControl>
                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>Marketing emails</FormLabel>
                <FormDescription>
                  Receive emails about new products, features, and more.
                </FormDescription>
              </div>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="terms"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>Accept terms and conditions</FormLabel>
                <FormDescription>
                  You agree to our Terms of Service and Privacy Policy.
                </FormDescription>
              </div>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

export const WithForm: Story = {
  render: FormTemplate,
};

export const Default: Story = {
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Checkbox id="default" {...args} />
      <label
        htmlFor="default"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Remember me
      </label>
    </div>
  ),
  args: {
    defaultChecked: false,
  },
};

export const Disabled: Story = {
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Checkbox id="disabled" {...args} />
      <label
        htmlFor="disabled"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        I agree to the terms (disabled)
      </label>
    </div>
  ),
  args: {
    defaultChecked: false,
    disabled: true,
  },
};
