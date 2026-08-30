import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Label } from './label';
import { Input } from './input';

describe('Label', () => {
  it('renders its text', () => {
    render(<Label>Full name</Label>);
    expect(screen.getByText('Full name')).toBeInTheDocument();
  });

  it('associates with a form control via htmlFor', () => {
    render(
      <>
        <Label htmlFor="email">Email</Label>
        <Input id="email" />
      </>
    );
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<Label className="custom-class">Full name</Label>);
    expect(screen.getByText('Full name')).toHaveClass('custom-class');
  });

  it('forwards ref correctly', () => {
    const ref = React.createRef<HTMLLabelElement>();
    render(<Label ref={ref}>Full name</Label>);
    expect(ref.current).toBeInstanceOf(HTMLLabelElement);
  });
});
