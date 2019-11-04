import { Form, Row, Col, Button, Notify, SearchSelect } from 'uiw';
import Markdown from '@/components/Markdown';


export default class Page extends Markdown {
  path = 'packages/core/src/search-select/README.md';
  dependencies = { Form, Row, Col, Button, Notify, SearchSelect };
  async renderPage() {
    const md = await import('../../../../packages/core/src/search-select/README.md');
    return md.default || md;
  }
}
