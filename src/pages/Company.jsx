import { company } from '../content/persona-company.js';
import PageHero from '../components/persona-company/PageHero.jsx';
import { CompanyStory, Mission, Team } from '../components/persona-company/CompanySections.jsx';

export default function Company() {
  const { hero } = company;
  return (
    <>
      <PageHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        lede={hero.lede}
        media={{ image: hero.image, objectPosition: hero.objectPosition, sr: hero.sr }}
      />
      <CompanyStory {...company.story} />
      <Mission {...company.mission} />
      <Team {...company.team} />
    </>
  );
}
