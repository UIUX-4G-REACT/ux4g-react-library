import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './card';

const meta: Meta<typeof Card> = {
  title: 'UX4G/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card className="w-[380px]">
      <CardHeader>
        <CardTitle>Application status</CardTitle>
        <CardDescription>Check the status of your submitted application.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm">Your application is currently under review.</p>
      </CardContent>
      <CardFooter>
        <Button>View details</Button>
      </CardFooter>
    </Card>
  ),
};

export const HeaderOnly: Story = {
  render: () => (
    <Card className="w-[380px]">
      <CardHeader>
        <CardTitle>Notice</CardTitle>
        <CardDescription>This card only has a header.</CardDescription>
      </CardHeader>
    </Card>
  ),
};
