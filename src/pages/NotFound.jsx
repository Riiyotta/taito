import { Block, ButtonLink, PageHeader, useDocMeta } from '../components/compliance-legal/shared.jsx';

export default function NotFound() {
  useDocMeta('Page not found — Taito.ai');
  return (
    <Block first aria-labelledby="not-found-heading" className="min-h-[60vh]">
      <PageHeader id="not-found-heading" eyebrow="404" title="Page not found">
        <p className="text-step-0 leading-normal text-secondary-foreground">
          The page you're looking for doesn't exist or has moved.
        </p>
        <div className="flex flex-wrap gap-space-xs">
          <ButtonLink href="/">Back to home</ButtonLink>
          <ButtonLink href="/blog" variant="secondary">
            Read the blog
          </ButtonLink>
        </div>
      </PageHeader>
    </Block>
  );
}
