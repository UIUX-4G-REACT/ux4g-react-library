import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Alert, AlertDescription, AlertTitle } from './alert';

describe('Alert', () => {
  it('renders with default variant and role="alert"', () => {
    render(<Alert>Test alert</Alert>);
    const alert = screen.getByRole('alert');
    expect(alert).toBeInTheDocument();
    expect(alert).toHaveClass('bg-background');
  });

  it('renders with destructive variant', () => {
    render(<Alert variant="destructive">Error alert</Alert>);
    expect(screen.getByRole('alert')).toHaveClass('border-destructive/50');
  });

  it('renders with success variant', () => {
    render(<Alert variant="success">Success alert</Alert>);
    expect(screen.getByRole('alert')).toHaveClass('border-success/50');
  });

  it('renders with warning variant', () => {
    render(<Alert variant="warning">Warning alert</Alert>);
    expect(screen.getByRole('alert')).toHaveClass('border-warning/50');
  });

  it('renders with info variant', () => {
    render(<Alert variant="info">Info alert</Alert>);
    expect(screen.getByRole('alert')).toHaveClass('border-info/50');
  });

  it('renders title and description', () => {
    render(
      <Alert>
        <AlertTitle>Title text</AlertTitle>
        <AlertDescription>Description text</AlertDescription>
      </Alert>
    );
    expect(screen.getByText('Title text')).toBeInTheDocument();
    expect(screen.getByText('Description text')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<Alert className="custom-class">Test</Alert>);
    expect(screen.getByRole('alert')).toHaveClass('custom-class');
  });

  it('forwards ref correctly', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<Alert ref={ref}>Test</Alert>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
