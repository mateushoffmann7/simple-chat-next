'use client';

import { ChatHistory } from '../components/chat-history';
import { CardChat } from '../components/ui/chat-card';

export default function ChatRoom() {
  return (
    <div className="flex flex-col items-center h-screen justify-center gap-4 bg-linear-90 to-sky-400 from-cyan-600">
      <ChatHistory />
    </div>
  );
}
