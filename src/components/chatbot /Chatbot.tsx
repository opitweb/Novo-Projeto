import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, Send, X, Bot, Phone } from 'lucide-react';

export default function MarbleChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Olá! Sou o consultor da Stone & Wood. Como posso ajudar no seu projeto de mármores ou planejados?' }
  ]);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;
    
    const userMsg = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`
        },
        body: JSON.stringify({
          model: "gpt-4o-mini", // Modelo mais rápido e barato
          messages: [
            { role: "system", content: "Eres un especialista en marketing digital para Betterfly en Barcelona. Mantente profesional, directo y enfocado en estrategias y resultados." },
            { role: "user", content: input }
          ]
        })
      });

      const data = await response.json();
      const botText = data.choices[0].message.content;
      setMessages(prev => [...prev, { role: 'bot', text: botText }]);
    } catch (e) {
      setMessages(prev => [...prev, { role: 'bot', text: "Estou com instabilidade agora. Por favor, use o WhatsApp abaixo para falar com o vendedor!" }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      {!isOpen ? (
        <button onClick={() => setIsOpen(true)} className="bg-[#f59e0b] hover:bg-[#d97706] text-white p-4 rounded-full shadow-2xl transition-all scale-110">
          <MessageCircle size={30} />
        </button>
      ) : (
        <div className="bg-[#0f172a] border border-[#f59e0b]/30 w-80 sm:w-96 h-[500px] rounded-2xl shadow-2xl flex flex-col overflow-hidden">
          <div className="bg-[#f59e0b] p-4 flex justify-between text-white font-bold items-center shadow-lg">
            <span className="flex items-center gap-2"><Bot size={20}/> Stone & Wood IA</span>
            <button onClick={() => setIsOpen(false)} className="hover:bg-black/10 rounded-full p-1"><X size={20}/></button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#020617]">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`p-3 rounded-2xl max-w-[85%] text-sm ${
                  m.role === 'user' ? 'bg-[#f59e0b] text-white rounded-tr-none' : 'bg-[#1e293b] text-slate-100 border border-slate-700 rounded-tl-none'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 bg-[#0f172a] border-t border-slate-800">
            <button onClick={() => window.open('https://wa.me/5511999999999')} className="w-full bg-[#22c55e] hover:bg-[#16a34a] text-white py-2.5 rounded-xl text-xs font-bold mb-3 flex items-center justify-center gap-2 shadow-md">
              <Phone size={14}/> FALAR COMO AGENTE AGORA
            </button>
            <div className="flex gap-2">
              <input value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && handleSend()} 
                className="flex-1 bg-[#1e293b] border border-slate-700 text-white p-2.5 rounded-xl text-sm outline-none" 
                placeholder="Dúvida sobre materiais..."/>
              <button onClick={handleSend} className="bg-[#f59e0b] hover:bg-[#d97706] p-2.5 rounded-xl text-white transition-colors">
                <Send size={20}/>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
