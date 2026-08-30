import { Button } from "@ux4g/ui/components/button";
import { Badge } from "@ux4g/ui/components/badge";

const buttonVariants = [
  "default",
  "secondary",
  "destructive",
  "outline",
  "ghost",
  "link",
  "success",
  "warning",
  "info",
] as const;

const badgeVariants = [
  "default",
  "secondary",
  "destructive",
  "outline",
  "success",
  "warning",
  "info",
] as const;

export default function Home() {
  return (
    <main className="mx-auto flex max-w-3xl flex-col gap-10 px-6 py-16">
      <header className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-foreground">UX4G React Library</h1>
        <p className="text-muted-foreground">
          Live examples of components from <code>@ux4g/ui</code>.
        </p>
      </header>

      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-foreground">Button</h2>
        <div className="flex flex-wrap gap-3">
          {buttonVariants.map((variant) => (
            <Button key={variant} variant={variant}>
              {variant}
            </Button>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-foreground">Badge</h2>
        <div className="flex flex-wrap gap-3">
          {badgeVariants.map((variant) => (
            <Badge key={variant} variant={variant}>
              {variant}
            </Badge>
          ))}
        </div>
      </section>
    </main>
  );
}
