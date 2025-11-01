import { Input } from './components/input';
import { ContextInput } from './contexts/contex-inputs';

export default function Home() {
  return (
    <div>
      <ContextInput>
        <Input />
      </ContextInput>
    </div>
  );
}
