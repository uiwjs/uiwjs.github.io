import { Select, Form, Notify, Row, Col, Button, SearchSelect } from 'uiw';
import Markdown from '@/components/Markdown';


export default class Page extends Markdown {
  path = 'src/select/README.md';
  dependencies = { Select, Form, Notify, Row, Col, Button, SearchSelect };
  async renderPage() {
    const md = await import('../../../../packages/core/src/select/README.md');
    return md.default || md;
  }
}
