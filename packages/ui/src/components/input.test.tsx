import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Input } from './input';

describe('Input', () => {
  it('renders an input element', () => {
    render(<Input placeholder="Type here" />);
    expect(screen.getByPlaceholderText('Type here')).toBeInTheDocument();
  });

  it('applies base classes', () => {
    render(<Input placeholder="Type here" />);
    expect(screen.getByPlaceholderText('Type here')).toHaveClass('h-10', 'w-full', 'rounded-md');
  });

  it('passes through the type prop', () => {
    render(<Input type="email" placeholder="Email" />);
    expect(screen.getByPlaceholderText('Email')).toHaveAttribute('type', 'email');
  });

  it('handles value changes', () => {
    const handleChange = vi.fn();
    render(<Input placeholder="Type here" onChange={handleChange} />);
    fireEvent.change(screen.getByPlaceholderText('Type here'), { target: { value: 'hello' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('is disabled when disabled prop is true', () => {
    render(<Input placeholder="Type here" disabled />);
    expect(screen.getByPlaceholderText('Type here')).toBeDisabled();
  });

  it('applies custom className', () => {
    render(<Input placeholder="Type here" className="custom-class" />);
    expect(screen.getByPlaceholderText('Type here')).toHaveClass('custom-class');
  });

  it('forwards ref correctly', () => {
    const ref = React.createRef<HTMLInputElement>();
    render(<Input ref={ref} placeholder="Type here" />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });
});
