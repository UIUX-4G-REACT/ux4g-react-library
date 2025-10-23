# Component Contribution Example: Badge Component

This is a complete example of how to contribute a new component to the UX4G React Component Library.

## Step 1: Create the Component

```tsx
// packages/ui/src/components/badge.tsx
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        // UX4G specific variants
        success: "border-transparent bg-success text-success-foreground hover:bg-success/80",
        warning: "border-transparent bg-warning text-warning-foreground hover:bg-warning/80",
        info: "border-transparent bg-info text-info-foreground hover:bg-info/80",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
```

## Step 2: Create Storybook Stories

```tsx
// packages/ui/src/components/badge.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './badge';

const meta: Meta<typeof Badge> = {
  title: 'UX4G/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'secondary', 'destructive', 'outline', 'success', 'warning', 'info'],
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Badge',
    variant: 'default',
  },
};

export const Success: Story = {
  args: {
    children: 'Success',
    variant: 'success',
  },
};

export const Warning: Story = {
  args: {
    children: 'Warning',
    variant: 'warning',
  },
};

export const Info: Story = {
  args: {
    children: 'Info',
    variant: 'info',
  },
};

export const Destructive: Story = {
  args: {
    children: 'Error',
    variant: 'destructive',
  },
};

export const Outline: Story = {
  args: {
    children: 'Outline',
    variant: 'outline',
  },
};
```

## Step 3: Create Tests

```tsx
// packages/ui/src/components/badge.test.tsx
import { render, screen } from '@testing-library/react';
import { Badge } from './badge';
import { expect, test } from 'vitest';

test('renders badge with default variant', () => {
  render(<Badge>Test Badge</Badge>);
  const badge = screen.getByText('Test Badge');
  expect(badge).toBeInTheDocument();
  expect(badge).toHaveClass('bg-primary');
});

test('renders badge with success variant', () => {
  render(<Badge variant="success">Success Badge</Badge>);
  const badge = screen.getByText('Success Badge');
  expect(badge).toBeInTheDocument();
  expect(badge).toHaveClass('bg-success');
});

test('renders badge with warning variant', () => {
  render(<Badge variant="warning">Warning Badge</Badge>);
  const badge = screen.getByText('Warning Badge');
  expect(badge).toBeInTheDocument();
  expect(badge).toHaveClass('bg-warning');
});

test('renders badge with info variant', () => {
  render(<Badge variant="info">Info Badge</Badge>);
  const badge = screen.getByText('Info Badge');
  expect(badge).toBeInTheDocument();
  expect(badge).toHaveClass('bg-info');
});

test('renders badge with destructive variant', () => {
  render(<Badge variant="destructive">Error Badge</Badge>);
  const badge = screen.getByText('Error Badge');
  expect(badge).toBeInTheDocument();
  expect(badge).toHaveClass('bg-destructive');
});

test('renders badge with outline variant', () => {
  render(<Badge variant="outline">Outline Badge</Badge>);
  const badge = screen.getByText('Outline Badge');
  expect(badge).toBeInTheDocument();
  expect(badge).toHaveClass('text-foreground');
});

test('applies custom className', () => {
  render(<Badge className="custom-class">Custom Badge</Badge>);
  const badge = screen.getByText('Custom Badge');
  expect(badge).toHaveClass('custom-class');
});

test('forwards ref correctly', () => {
  const ref = React.createRef<HTMLDivElement>();
  render(<Badge ref={ref}>Ref Badge</Badge>);
  expect(ref.current).toBeInstanceOf(HTMLDivElement);
});
```

## Step 4: Export the Component

```tsx
// packages/ui/src/index.ts
// Export all components
export { Button } from "./components/button";
export { Badge } from "./components/badge";

// Export utilities
export { cn } from "./lib/utils";

// Export types
export type { ButtonProps } from "./components/button";
export type { BadgeProps } from "./components/badge";
```

## Step 5: Test Everything

```bash
# Run tests
cd packages/ui
npm run test:run

# Start Storybook to see the component
npm run storybook

# Build the library
npm run build
```

## Step 6: Submit Pull Request

Use the PR template from the README.md to submit your contribution.

## Key Points for Contributors

1. **Follow the exact file structure**: `component.tsx`, `component.stories.tsx`, `component.test.tsx`
2. **Use UX4G design tokens**: Always use the predefined colors and variants
3. **Include all variants**: Default, secondary, destructive, success, warning, info
4. **Write comprehensive tests**: Test all variants and edge cases
5. **Document in Storybook**: Create stories for all variants
6. **Export properly**: Add exports to `index.ts`
7. **Test accessibility**: Ensure WCAG 2.1 AA compliance

This example shows the complete workflow for contributing a new component to the UX4G React Component Library!
