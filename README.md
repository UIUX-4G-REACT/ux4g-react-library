# UX4G React Component Library

A comprehensive React component library implementing the UX4G (User Experience for Government) design system, built with modern tools and accessibility-first principles.

## 🚀 Quick Start

### Prerequisites

- Node.js >= 18
- npm >= 11.5.2

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd ux4g-react-library

# Install dependencies
npm install

# Start Storybook for interactive documentation
npm run storybook

# Run tests
npm run test

# Build all packages
npm run build
```

## 📁 Project Structure

```
ux4g-react-library/                    # 🎯 MAIN PROJECT ROOT
├── apps/                              # Applications (runnable)
│   ├── storybook/                    # 📚 Interactive documentation
│   │   ├── .storybook/               # Storybook configuration
│   │   ├── src/                      # Storybook app source
│   │   └── package.json              # Storybook dependencies
│   └── web/                          # 🌐 Example Next.js app
│       ├── app/                      # Next.js app directory
│       └── package.json              # Web app dependencies
├── packages/                         # 📦 Shared libraries
│   ├── ui/                          # 🎨 Core UX4G component library
│   │   ├── src/
│   │   │   ├── components/          # React components (flat structure)
│   │   │   │   ├── button.tsx       # Component implementation
│   │   │   │   ├── button.stories.tsx # Storybook stories
│   │   │   │   └── button.test.tsx  # Component tests
│   │   │   ├── lib/                 # Utilities (cn, etc.)
│   │   │   ├── styles/              # Global CSS & design tokens
│   │   │   ├── test/                # Test setup & utilities
│   │   │   └── index.ts             # Main exports
│   │   ├── dist/                    # Built output
│   │   ├── tailwind.config.ts       # Tailwind configuration
│   │   ├── postcss.config.js        # PostCSS configuration
│   │   ├── components.json          # Shadcn configuration
│   │   ├── vitest.config.ts         # Test configuration
│   │   └── package.json             # UI package dependencies
│   ├── eslint-config/               # 🔧 Shared ESLint rules
│   │   ├── base.js                  # Base ESLint config
│   │   ├── next.js                  # Next.js specific rules
│   │   └── react-internal.js        # React internal rules
│   └── typescript-config/           # 📝 Shared TypeScript configs
│       ├── base.json                 # Base TypeScript config
│       ├── nextjs.json              # Next.js TypeScript config
│       └── react-library.json       # React library config
├── package.json                     # 🏠 Root workspace configuration
├── turbo.json                       # ⚡ Turborepo build pipeline
└── README.md                        # 📖 This file
```

### 🚨 **Important: Project Location**

**Your UX4G library is located at:**
```
C:\Users\Admin\demo-repository\ux4g-react-library\
```

**NOT at:**
```
C:\Users\Admin\demo-repository\packages\  # ❌ This is a different project
```

The `packages/` folder you see in `demo-repository` is **NOT** part of this UX4G library. Our library uses a **Turborepo monorepo structure** where `packages/` is inside the `ux4g-react-library/` directory.

### 🎯 **Key Directories Explained**

- **`apps/storybook/`**: Interactive documentation and component playground
- **`packages/ui/`**: The main UX4G component library (this is what gets published)
- **`packages/eslint-config/`**: Shared linting rules for consistency
- **`packages/typescript-config/`**: Shared TypeScript configurations

## 🎨 Design System

This library implements the UX4G design system with:

- **UX4G Color Palette**: Primary blue (#0d6efd), semantic colors (success, warning, info, destructive)
- **Typography**: Government-friendly fonts with clear hierarchy
- **Spacing**: Consistent 8px grid system
- **Accessibility**: WCAG 2.1 AA compliant components
- **Dark Mode**: Full dark theme support
- **Responsive**: Mobile-first design approach

## 🧩 Components

### Available Components

- **Button**: Primary, secondary, destructive, outline, ghost, link variants
- **Card**: Content containers with header, content, footer
- **Code**: Syntax-highlighted code blocks

### Component Usage

```tsx
import { Button, Card, CardContent, CardHeader, CardTitle } from '@ux4g/ui';
import '@ux4g/ui/styles'; // Import global styles

function App() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Welcome to UX4G</CardTitle>
      </CardHeader>
      <CardContent>
        <Button variant="primary">Get Started</Button>
        <Button variant="secondary">Learn More</Button>
      </CardContent>
    </Card>
  );
}
```

## 🛠️ Development

### Available Scripts

```bash
# Development
npm run dev              # Start all apps in development mode
npm run storybook        # Start Storybook documentation
npm run test             # Run all tests
npm run test:ui          # Run tests with UI
npm run lint             # Lint all packages
npm run build            # Build all packages

# Package-specific
npm run test --filter=@ux4g/ui        # Test only UI package
npm run storybook --filter=storybook  # Start only Storybook
```

### Adding New Components

1. Create component in `packages/ui/src/components/`
2. Follow the Shadcn methodology:
   - Use `class-variance-authority` for variants
   - Implement proper TypeScript types
   - Add accessibility features
3. Create Storybook stories in `*.stories.tsx`
4. Add comprehensive tests
5. Export from `packages/ui/src/index.ts`

### Component Template

```tsx
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const componentVariants = cva(
  "base-classes",
  {
    variants: {
      variant: {
        default: "default-classes",
        secondary: "secondary-classes",
      },
      size: {
        default: "default-size",
        sm: "small-size",
        lg: "large-size",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ComponentProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof componentVariants> {
  // Additional props
}

const Component = React.forwardRef<HTMLElement, ComponentProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        className={cn(componentVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Component.displayName = "Component";

export { Component, componentVariants };
```

## 🧪 Testing

The library uses Vitest with React Testing Library for comprehensive testing:

```bash
# Run tests
npm run test

# Run tests in watch mode
npm run test -- --watch

# Run tests with coverage
npm run test -- --coverage
```

### Test Structure

- Unit tests for component behavior
- Accessibility tests using jest-axe
- Visual regression tests in Storybook
- Integration tests for component interactions

## 📚 Documentation

### Storybook

Interactive documentation is available at `http://localhost:6006` when running `npm run storybook`.

Features:
- **Controls**: Interactive prop manipulation
- **Docs**: Auto-generated documentation
- **Accessibility**: Real-time a11y testing
- **Viewport**: Responsive testing

### Story Examples

```tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

const meta: Meta<typeof Button> = {
  title: 'UX4G/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'secondary', 'destructive'],
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Button',
  },
};
```

## 🎯 Roadmap

### Phase 1: Core Components (Current)
- ✅ Button
- ✅ Card
- ✅ Code
- 🔄 Badge
- 🔄 Spinner
- 🔄 Placeholders

### Phase 2: Form Components
- 🔄 Input
- 🔄 Select
- 🔄 Checkbox
- 🔄 Radio
- 🔄 Date Picker

### Phase 3: Layout Components
- 🔄 Modal
- 🔄 Navbar
- 🔄 Tabs
- 🔄 Accordion
- 🔄 Dropdown

### Phase 4: Advanced Components
- 🔄 Carousel
- 🔄 Data Table
- 🔄 Charts
- 🔄 Maps

## 🤝 Contributing

We welcome contributions to the UX4G React Component Library! This section provides detailed guidelines for contributing components and improvements.

### 🚀 Quick Start for Contributors

1. **Fork the repository**
2. **Clone your fork**: `git clone https://github.com/your-username/ux4g-react-library.git`
3. **Install dependencies**: `npm install`
4. **Start development**: `npm run storybook`
5. **Create a feature branch**: `git checkout -b feature/component-name`

### 📋 Component Development Guidelines

#### **Step 1: Choose Your Component**

Follow the **UX4G Component Roadmap** (implement in order):

**Tier 1 (Atoms) - Current Priority:**
- ✅ Button (Complete)
- 🔄 Badge
- 🔄 Spinner
- 🔄 Placeholders
- 🔄 Chips

**Tier 2 (Molecules):**
- 🔄 Alerts
- 🔄 Card
- 🔄 Input/Search
- 🔄 Date and Time
- 🔄 List Groups
- 🔄 Progress
- 🔄 Tooltip

**Tier 3 (Organisms):**
- 🔄 Modal
- 🔄 Navbar
- 🔄 Tabs
- 🔄 Accordion
- 🔄 Dropdowns
- 🔄 Offcanvas
- 🔄 Pagination
- 🔄 Popovers
- 🔄 Toasts
- 🔄 Stepper

#### **Step 2: Component Implementation Process**

**2.1 Create Component File**
```bash
# Navigate to components directory
cd packages/ui/src/components

# Create component file (e.g., badge.tsx)
touch badge.tsx
```

**2.2 Follow the Component Template**
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

**2.3 Create Storybook Stories**
```bash
# Create stories file
touch badge.stories.tsx
```

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
```

**2.4 Create Tests**
```bash
# Create test file
touch badge.test.tsx
```

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

test('applies custom className', () => {
  render(<Badge className="custom-class">Custom Badge</Badge>);
  const badge = screen.getByText('Custom Badge');
  expect(badge).toHaveClass('custom-class');
});
```

**2.5 Export Component**
```tsx
// packages/ui/src/index.ts
export { Badge } from "./components/badge";
export type { BadgeProps } from "./components/badge";
```

#### **Step 3: Testing Your Component**

**3.1 Run Tests**
```bash
cd packages/ui
npm run test:run
```

**3.2 Test in Storybook**
```bash
npm run storybook
# Visit http://localhost:6006
```

**3.3 Build Library**
```bash
npm run build
```

#### **Step 4: Accessibility Checklist**

Every component must meet these requirements:

- ✅ **ARIA Attributes**: Proper roles, labels, and states
- ✅ **Keyboard Navigation**: Tab, Enter, Escape, Arrow keys
- ✅ **Screen Reader Support**: Semantic HTML and ARIA
- ✅ **Color Contrast**: WCAG 2.1 AA compliance
- ✅ **Focus Management**: Visible focus indicators
- ✅ **Testing**: Automated accessibility tests with jest-axe

#### **Step 5: Documentation Requirements**

**5.1 Component Documentation**
- Clear prop descriptions with TypeScript
- Usage examples in Storybook
- Accessibility notes
- Design system alignment

**5.2 Storybook Stories**
- All variants documented
- Interactive controls
- Accessibility panel results
- Responsive testing

### 🛠️ Development Workflow

#### **Daily Development Commands**

```bash
# Start development environment
npm run storybook

# Run tests in watch mode
cd packages/ui && npm run test

# Run linting
npm run lint

# Build all packages
npm run build

# Format code
npm run format
```

#### **Component Development Workflow**

1. **Research UX4G Guidelines**: Check official UX4G documentation for component specifications
2. **Create Component**: Follow the template above
3. **Write Stories**: Document all variants and states
4. **Write Tests**: Comprehensive test coverage
5. **Test Accessibility**: Use Storybook a11y addon
6. **Build & Test**: Ensure everything compiles
7. **Submit PR**: Follow PR template

### 📝 Pull Request Guidelines

#### **PR Template**
```markdown
## Component: [Component Name]

### Description
Brief description of the component and its purpose.

### UX4G Alignment
- [ ] Follows UX4G design tokens
- [ ] Implements proper color variants
- [ ] Uses correct spacing and typography
- [ ] Supports dark mode

### Accessibility
- [ ] WCAG 2.1 AA compliant
- [ ] Proper ARIA attributes
- [ ] Keyboard navigation
- [ ] Screen reader support
- [ ] Focus management

### Testing
- [ ] Unit tests written
- [ ] Storybook stories created
- [ ] Accessibility tests pass
- [ ] Visual regression tests (if applicable)

### Documentation
- [ ] Props documented
- [ ] Usage examples provided
- [ ] Storybook stories complete

### Checklist
- [ ] Component follows template structure
- [ ] All variants implemented
- [ ] Tests pass
- [ ] Build succeeds
- [ ] No linting errors
```

### 🎯 Code Standards

#### **TypeScript Requirements**
- Strict mode enabled
- Proper type definitions
- Interface exports for consumers
- Generic types where appropriate

#### **Styling Guidelines**
- Use Tailwind CSS utilities
- Follow UX4G design tokens
- Use `class-variance-authority` for variants
- Implement dark mode support

#### **Testing Standards**
- Minimum 80% test coverage
- Unit tests for all variants
- Accessibility tests with jest-axe
- Integration tests for complex interactions

#### **Commit Standards**
- Use conventional commits
- Format: `feat(component): add Badge component`
- Examples:
  - `feat(badge): add Badge component with all variants`
  - `fix(button): correct focus ring styling`
  - `docs(readme): update contribution guidelines`

### 🚫 What NOT to Do

- ❌ Don't create components outside the established structure
- ❌ Don't skip accessibility testing
- ❌ Don't use hardcoded colors (use design tokens)
- ❌ Don't commit without tests
- ❌ Don't break existing components
- ❌ Don't use non-semantic HTML elements

### 🆘 Getting Help

- 📖 **Documentation**: Check Storybook at `http://localhost:6006`
- 🐛 **Issues**: Create GitHub issues for bugs
- 💬 **Discussions**: Use GitHub discussions for questions
- 📧 **Contact**: Reach out to maintainers for guidance

### 🏆 Recognition

Contributors will be recognized in:
- README contributors section
- Release notes
- GitHub contributors page
- Project documentation

Thank you for contributing to the UX4G React Component Library! 🎉

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [UX4G Design System](https://ux4g.gov.in/) for design guidelines
- [Shadcn UI](https://ui.shadcn.com/) for component architecture
- [Radix UI](https://www.radix-ui.com/) for accessibility primitives
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Storybook](https://storybook.js.org/) for documentation

## 📞 Support

- 📖 [Documentation](http://localhost:6006)
- 🐛 [Issues](https://github.com/your-org/ux4g-react-library/issues)
- 💬 [Discussions](https://github.com/your-org/ux4g-react-library/discussions)