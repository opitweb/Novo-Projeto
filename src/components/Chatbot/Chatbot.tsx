import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, Send, X, Bot, Loader2 } from 'lucide-react';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "¡Hola! Soy el asistente inteligente de Betterfly. ¿Cómo posso ayudar a tu clínica hoy?", isBot: true }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll para a última mensagem
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setMessages(prev => [...prev, { text: userMsg, isBot: false }]);
    setInput("");
    setIsLoading(true);

    try {
      // CONFIGURAÇÃO DA API
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer SUA_CHAVE_API_AQUI` // <--- COLOQUE SUA CHAVE AQUI
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content: "PROMPT: Eres un consultor experto en marketing médico de la agencia Betterfly en Barcelona. Tu objetivo es ayudar a clínicas y doctores a entender cómo el marketing digital, las redes sociales y la automatización pueden aumentar sus citas. Sé profesional, elegante y enfocado en resultados."
            },
            { role: "user", content: userMsg }
          ],
          temperature: 0.7,
        })
      });

      const data = await response.json();
      const botReply = data.choices[0].message.content;

      setMessages(prev => [...prev, { text: botReply, isBot: true }]);
    } catch (error) {
      setMessages(prev => [...prev, { text: "Lo siento, tuve un problema técnico. ¿Podrías intentar de nuevo?", isBot: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-['Poppins']">
      {isOpen ? (
        <div className="bg-white rounded-2xl shadow-2xl w-80 sm:w-96 overflow-hidden border border-slate-200 flex flex-col h-[500px]">
          {/* Header */}
          <div className="bg-[#0A1738] p-4 text-white flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="bg-[#0DBAAC] p-1.5 rounded-lg">
                <Bot size={20} className="text-white" />
              </div>
              <div>
                <p className="font-bold text-sm">Betterfly AI</p>
                <p className="text-[10px] text-[#0DBAAC]">En línea ahora</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:rotate-90 transition-transform">
              <X size={20} />
            </button>
          </div>

          {/* Chat Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.isBot ? 'justify-start' : 'justify-end'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                  m.isBot ? 'bg-white text-slate-700 shadow-sm border border-slate-100' : 'bg-[#0DBAAC] text-white shadow-md shadow-[#0DBAAC]/20'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl shadow-sm border border-slate-100">
                  <Loader2 size={18} className="animate-spin text-[#0DBAAC]" />
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t">
            <div className="flex gap-2 bg-slate-100 p-2 rounded-xl">
              <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Escribe tu duda..."
                className="flex-1 bg-transparent text-sm outline-none px-2"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="bg-[#0A1738] text-white p-2 rounded-lg hover:bg-[#0DBAAC] transition-colors disabled:opacity-50"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-[#0A1738] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform border-2 border-[#0DBAAC]"
        >
          <MessageCircle size={28} className="text-[#0DBAAC]" />
        </button>
      )}
    </div>
  );
}
