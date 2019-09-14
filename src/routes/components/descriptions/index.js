import { Descriptions, Divider, Badge, Radio, RadioGroup } from 'uiw';
import Markdown from '@/components/Markdown';


export default class Page extends Markdown {
  path = 'packages/core/src/descriptions/README.md';
  dependencies = { Descriptions, Divider, Badge, Radio, RadioGroup };
  async renderPage() {
    const md = await import('../../../../packages/core/src/descriptions/README.md');
    return md.default || md;
  }
}
