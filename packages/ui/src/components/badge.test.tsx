import * as React from 'react';
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
