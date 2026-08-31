import type { Meta, StoryObj } from '@storybook/react';
import { Alert, AlertDescription, AlertTitle } from './alert';

const meta: Meta<typeof Alert> = {
  title: 'UX4G/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'destructive', 'success', 'warning', 'info'],
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Alert {...args} className="w-[380px]">
      <AlertTitle>Heads up</AlertTitle>
      <AlertDescription>This is a general informational alert.</AlertDescription>
    </Alert>
  ),
  args: {
    variant: 'default',
  },
};

export const Destructive: Story = {
  render: (args) => (
    <Alert {...args} className="w-[380px]">
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>Your session has expired. Please sign in again.</AlertDescription>
    </Alert>
  ),
  args: {
    variant: 'destructive',
  },
};

export const Success: Story = {
  render: (args) => (
    <Alert {...args} className="w-[380px]">
      <AlertTitle>Success</AlertTitle>
      <AlertDescription>Your application has been submitted successfully.</AlertDescription>
    </Alert>
  ),
  args: {
    variant: 'success',
  },
};

export const Warning: Story = {
  render: (args) => (
    <Alert {...args} className="w-[380px]">
      <AlertTitle>Warning</AlertTitle>
      <AlertDescription>Your document upload is missing a signature.</AlertDescription>
    </Alert>
  ),
  args: {
    variant: 'warning',
  },
};

export const Info: Story = {
  render: (args) => (
    <Alert {...args} className="w-[380px]">
      <AlertTitle>Note</AlertTitle>
      <AlertDescription>Processing may take up to 3 business days.</AlertDescription>
    </Alert>
  ),
  args: {
    variant: 'info',
  },
};
