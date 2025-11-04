import { ChatHistory } from './components/chat-history';
import { InputName } from './components/input-name';

export default function Home() {
  return (
    <div className="flex flex-col items-center h-screen justify-center gap-4 bg-linear-90 to-sky-400 from-cyan-600">
      <InputName />
    </div>
  );
}
