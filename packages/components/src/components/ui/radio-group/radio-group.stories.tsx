import type { Meta, StoryObj } from '@storybook/react';

import * as React from 'react';
import { useForm } from 'react-hook-form';

import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from '../form/form';
import { RadioGroup, RadioGroupItem } from './radio-group';

const meta = {
  args: {
    defaultValue: 'option-one',
    disabled: false,
  },
  argTypes: {
    defaultValue: {
      control: 'text',
      description: 'The default selected value',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the radio group is disabled',
    },
  },
  component: RadioGroup,
  parameters: {
    layout: 'centered',
  },
  title: 'Forms/RadioGroup',
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">Default</h3>
        <RadioGroup defaultValue="option-one">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-one" id="option-one" />
            <label htmlFor="option-one">Option One</label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-two" id="option-two" />
            <label htmlFor="option-two">Option Two</label>
          </div>
        </RadioGroup>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">With Description</h3>
        <RadioGroup defaultValue="card">
          <div className="flex items-start space-x-2">
            <RadioGroupItem value="card" id="card" />
            <div className="grid gap-1.5 leading-none">
              <label htmlFor="card">Card Payment</label>
              <p className="text-sm text-muted-foreground">Pay with your credit or debit card.</p>
            </div>
          </div>
        </RadioGroup>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">Disabled</h3>
        <RadioGroup defaultValue="option-one">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-one" id="disabled" disabled />
            <label htmlFor="disabled">Disabled Option</label>
          </div>
        </RadioGroup>
      </div>
    </div>
  ),
};

export const Playground: Story = {
  render: (args) => (
    <RadioGroup {...args}>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="r1" />
        <label htmlFor="r1">Option One</label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-two" id="r2" />
        <label htmlFor="r2">Option Two</label>
      </div>
    </RadioGroup>
  ),
  args: {
    defaultValue: 'option-one',
    disabled: false,
  },
};

const FormTemplate = () => {
  const form = useForm({
    defaultValues: {
      type: 'card',
    },
  });

  return (
    <Form {...form}>
      <form className="w-full space-y-6">
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Payment Method</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="card" />
                    </FormControl>
                    <FormLabel className="font-normal">Card Payment</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="paypal" />
                    </FormControl>
                    <FormLabel className="font-normal">PayPal</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormDescription>Select your preferred payment method</FormDescription>
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
    <RadioGroup {...args}>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="default" id="default" />
        <label htmlFor="default">Default Option</label>
      </div>
    </RadioGroup>
  ),
  args: {
    defaultValue: 'default',
  },
};

export const Disabled: Story = {
  render: (args) => (
    <RadioGroup {...args}>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="disabled" id="disabled" />
        <label htmlFor="disabled">Disabled Option</label>
      </div>
    </RadioGroup>
  ),
  args: {
    defaultValue: 'disabled',
    disabled: true,
  },
};
