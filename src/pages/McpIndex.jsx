import { mcpIndex as d, mcpUseCases } from '../content/mcp-tools.js';
import { Block, FaqSection, useDocMeta } from '../components/compliance-legal/shared.jsx';
import { FeatureColumns, SectionHead, SplitHero, UseCaseGrid } from '../components/mcp-tools/shared.jsx';
import { LogoGrid } from '../components/mcp-tools/HeroMocks.jsx';

export default function McpIndex() {
  useDocMeta('MCP use cases — Taito.ai');
  return (
    <>
      <SplitHero eyebrow={d.hero.eyebrow} title={d.hero.title} lede={d.hero.lede} sr={d.hero.description}>
        <LogoGrid grid={d.hero.grid} />
      </SplitHero>

      <Block id={d.gallery.id} aria-labelledby={`${d.gallery.id}-heading`}>
        <SectionHead id={`${d.gallery.id}-heading`} eyebrow={d.gallery.eyebrow} title={d.gallery.title} />
        <UseCaseGrid items={mcpUseCases} />
      </Block>

      <Block id={d.value.id} aria-labelledby={`${d.value.id}-heading`}>
        <SectionHead id={`${d.value.id}-heading`} eyebrow={d.value.eyebrow} title={d.value.title} description={d.value.description} />
        <FeatureColumns items={d.value.features} />
      </Block>

      <FaqSection title="Frequently asked questions" items={d.faq.items} />
    </>
  );
}
