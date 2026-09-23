import { useParams } from 'react-router-dom';
import { mcpRelated, mcpUseCases } from '../content/mcp-tools.js';
import { Block, FaqSection, useDocMeta } from '../components/compliance-legal/shared.jsx';
import { SectionHead, SplitHero, UseCaseGrid } from '../components/mcp-tools/shared.jsx';
import { UseCaseMock } from '../components/mcp-tools/HeroMocks.jsx';
import HowItWorks from '../components/mcp-tools/HowItWorks.jsx';
import NotFound from './NotFound.jsx';

export default function McpUseCase() {
  const { slug } = useParams();
  const uc = mcpUseCases.find((u) => u.slug === slug);
  useDocMeta(uc ? `${uc.title} — Taito.ai` : null);
  if (!uc) return <NotFound />;
  const related = uc.related.map((s) => mcpUseCases.find((u) => u.slug === s)).filter(Boolean);

  return (
    <>
      <SplitHero eyebrow={uc.hero.eyebrow} title={uc.hero.title} lede={uc.hero.lede} sr={uc.hero.description}>
        <UseCaseMock slug={uc.slug} />
      </SplitHero>

      <HowItWorks how={uc.how} id={`${uc.slug}-how`} />

      <FaqSection title="Frequently asked questions" items={uc.faq} />

      <Block id={uc.relatedId} aria-labelledby={`${uc.relatedId}-heading`}>
        <SectionHead
          id={`${uc.relatedId}-heading`}
          eyebrow={mcpRelated.eyebrow}
          title={mcpRelated.title}
          description={mcpRelated.description}
        />
        <UseCaseGrid items={related} />
      </Block>
    </>
  );
}
