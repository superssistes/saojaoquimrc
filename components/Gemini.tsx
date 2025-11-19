
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, Chat, Content } from "@google/genai";
import { BotIcon, SendIcon, CloseIcon } from './icons';

const Gemini: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [chatHistory, setChatHistory] = useState<Content[]>([]);
    const [userInput, setUserInput] = useState<string>('');
    const chatContainerRef = useRef<HTMLDivElement>(null);

    // Contexto do site para a IA (Base de Conhecimento)
    const siteContext = `
    VOCÊ É: O Assistente Virtual "Esperança" do Instituto São Joaquim.
    SEU TOM: Empático, acolhedor, profissional e persuasivo (focado em conversão de doações).
    
    SUA MISSÃO:
    1. Acolher visitantes e explicar o trabalho do instituto.
    2. Esclarecer que NÃO ACEITAMOS doações físicas (roupas, comida, móveis). Explicar que a logística é complexa e que o foco é custear tratamento médico profissional.
    3. Incentivar doações financeiras (PIX, Cartão) para pagar internações e tratamentos.
    
    NOSSOS PROGRAMAS (Use isso para responder):
    - População de Rua: Alimentação, banho, resgate de cidadania e encaminhamento médico.
    - Alcoolismo e Dependência Química: Custeio de internações em clínicas parceiras, desintoxicação e terapia.
    - Saúde Mental: Tratamento para Esquizofrenia (psiquiatras e remédios).
    - Autismo (TEA): Terapia ABA especializada para crianças carentes (tratamento de alto custo oferecido gratuitamente).
    - Reintegração: Cursos profissionalizantes e apoio familiar.
    
    REGRAS CRÍTICAS:
    - Se perguntarem "como doar roupas/comida", diga gentilmente: "No momento, nossa logística é focada exclusivamente em recursos para custear os tratamentos médicos e internações. Sua ajuda financeira transforma vidas diretamente! Você pode doar qualquer valor via PIX ou Cartão."
    - Se perguntarem sobre voluntariado, diga que o instituto trabalha com corpo clínico profissional (médicos, psicólogos) para garantir a qualidade do tratamento, mas que a melhor forma de ser voluntário é sendo um "Embaixador Doador", divulgando a causa ou doando.
    - Sempre termine respostas longas com uma pergunta engajadora ou um convite suave para a seção de doação (#ajudar).
    `;

    const scrollToBottom = () => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    };

    useEffect(() => {
        scrollToBottom();
    }, [chatHistory, isOpen]);
    
    // Set initial greeting message from the model
    useEffect(() => {
        if (chatHistory.length === 0) {
            setChatHistory([
                {
                    role: 'model',
                    parts: [{ text: 'Olá! Sou a Esperança, assistente virtual do Instituto São Joaquim. 🌟\n\nEstou aqui para explicar como transformamos vidas através do tratamento de dependência, autismo e apoio à população de rua. Como posso ajudar você hoje?' }],
                }
            ]);
        }
    }, []);

    const handleSendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!userInput.trim() || isLoading) return;

        const newUserMessage: Content = { role: 'user', parts: [{ text: userInput }] };
        setIsLoading(true);
        setChatHistory(prev => [...prev, newUserMessage]);
        setUserInput('');

        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
            
            // Cria o chat com histórico e a "persona" definida
            const chat: Chat = ai.chats.create({
                model: 'gemini-2.5-flash',
                history: chatHistory,
                config: {
                    systemInstruction: siteContext,
                    temperature: 0.7, // Criatividade balanceada para empatia
                }
            });
            
            const response = await chat.sendMessageStream({ message: userInput });

            let modelResponse = '';
            setChatHistory(prev => [...prev, { role: 'model', parts: [{ text: '' }] }]);

            for await (const chunk of response) {
                const chunkText = chunk.text;
                modelResponse += chunkText;
                setChatHistory(prev => {
                    const newHistory = [...prev];
                    newHistory[newHistory.length - 1].parts[0].text = modelResponse;
                    return newHistory;
                });
            }
        } catch (error) {
            console.error("Gemini API error:", error);
            const errorMessage = {
                role: 'model',
                parts: [{ text: 'Desculpe, estou com dificuldade de conexão no momento. Poderia tentar novamente em alguns instantes? 🙏' }]
            } as Content;
            setChatHistory(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            {/* Anchor invisible para manter links antigos funcionando se houver */}
            <div id="ia" className="absolute bottom-0 right-0 pointer-events-none" />

            {/* Floating Button Container - High Z-Index for visibility over scroll */}
            {!isOpen && (
                <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end group">
                    
                    {/* Balão de Convite */}
                    <div className="mb-3 mr-2 bg-white/90 backdrop-blur-md text-stone-800 px-4 py-2.5 rounded-2xl rounded-br-none shadow-[0_4px_15px_rgba(0,0,0,0.1)] border border-amber-100 transform transition-all duration-300 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 cursor-pointer pointer-events-none" onClick={() => setIsOpen(true)}>
                        <p className="text-sm font-bold text-amber-700 leading-none">Dúvidas? Fale comigo!</p>
                    </div>

                    {/* Botão Flutuante 3D Refinado */}
                    <button 
                        onClick={() => setIsOpen(true)}
                        className="relative w-16 h-16 flex items-center justify-center focus:outline-none transition-transform duration-300 hover:scale-110"
                        aria-label="Abrir assistente virtual"
                    >
                        {/* Breathing/Pulse Glow Effect */}
                        <div className="absolute inset-0 rounded-full bg-amber-500 opacity-20 animate-[ping_2.5s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 blur-lg opacity-40 animate-pulse"></div>
                        
                        {/* Main Button Body */}
                        <div className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 shadow-[0_10px_25px_-5px_rgba(245,158,11,0.6)] flex items-center justify-center overflow-hidden ring-2 ring-white/30 border border-white/20">
                             <div className="w-8 h-8 text-white drop-shadow-md">
                                <BotIcon className="h-full w-full text-white" />
                             </div>
                             {/* Shine effect */}
                             <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/30 to-transparent pointer-events-none"></div>
                        </div>
                    </button>
                </div>
            )}

            {/* Modal / Expanded Chat */}
            {isOpen && (
                 <div className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center sm:justify-end sm:px-6 sm:pb-6 bg-stone-900/30 backdrop-blur-[2px]">
                    <div className="w-full h-[90vh] sm:h-[650px] sm:w-[400px] bg-white/90 backdrop-blur-2xl sm:rounded-[2rem] shadow-2xl flex flex-col overflow-hidden relative animate-[slideInUp_0.3s_cubic-bezier(0.16,1,0.3,1)] sm:animate-[fadeIn_0.3s_ease-out] ring-1 ring-white/60 border border-white/50">
                        
                        {/* Header */}
                        <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-4 px-6 flex justify-between items-center text-white shadow-md z-10">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full p-1.5 shadow-inner border border-white/20 flex items-center justify-center">
                                    <BotIcon className="text-white w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-base leading-tight tracking-wide">Instituto São Joaquim</h3>
                                    <div className="flex items-center gap-1.5 mt-0.5">
                                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse shadow-[0_0_5px_rgba(74,222,128,0.8)]"></span>
                                        <p className="text-[10px] uppercase tracking-wider text-amber-50 font-semibold">Assistente Online</p>
                                    </div>
                                </div>
                            </div>
                            <button 
                                onClick={() => setIsOpen(false)}
                                className="p-2 hover:bg-white/10 rounded-full transition-colors focus:outline-none text-white/90 hover:text-white"
                                aria-label="Fechar chat"
                            >
                                <div className="w-6 h-6">
                                    <CloseIcon />
                                </div>
                            </button>
                        </div>

                        {/* Chat Body */}
                        <div ref={chatContainerRef} className="flex-grow p-5 space-y-4 overflow-y-auto bg-gradient-to-b from-amber-50/50 to-white/80 scrollbar-thin scrollbar-thumb-amber-200 scrollbar-track-transparent">
                            {chatHistory.map((message, index) => (
                                <div key={index} className={`flex items-end gap-2.5 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    {message.role === 'model' && (
                                        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-amber-100 to-white flex items-center justify-center flex-shrink-0 shadow-sm mb-1 border border-amber-100 text-amber-600">
                                            <BotIcon className="w-4 h-4" />
                                        </div>
                                    )}
                                    <div className={`px-4 py-3 rounded-2xl max-w-[85%] shadow-sm text-sm leading-relaxed transition-all duration-300 ${
                                        message.role === 'user' 
                                            ? 'bg-amber-500 text-white rounded-br-none shadow-amber-500/20' 
                                            : 'bg-white text-stone-700 rounded-bl-none shadow-stone-200/50 border border-stone-50'
                                    }`}>
                                        <p className="whitespace-pre-wrap">{message.parts[0].text}</p>
                                    </div>
                                </div>
                            ))}
                            {isLoading && (
                                <div className="flex items-end gap-2">
                                     <div className="w-7 h-7 rounded-full bg-amber-50 flex items-center justify-center flex-shrink-0 mb-1">
                                        <BotIcon className="w-4 h-4 text-amber-400" />
                                    </div>
                                    <div className="px-4 py-3 rounded-2xl bg-white text-stone-800 shadow-sm rounded-bl-none border border-gray-100">
                                        <div className="flex items-center justify-center space-x-1 h-4">
                                            <div className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-bounce delay-75"></div>
                                            <div className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-bounce delay-150"></div>
                                            <div className="w-1.5 h-1.5 bg-amber-600 rounded-full animate-bounce delay-300"></div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Input Area - Capsule Design */}
                        <div className="p-4 bg-white/80 backdrop-blur-xl border-t border-white/60">
                            <form onSubmit={handleSendMessage} className="relative flex items-center group">
                                <input
                                    type="text"
                                    value={userInput}
                                    onChange={(e) => setUserInput(e.target.value)}
                                    placeholder="Digite sua mensagem..."
                                    className="w-full pl-6 pr-16 py-4 bg-white rounded-full focus:outline-none text-stone-700 placeholder-stone-400 text-sm shadow-[0_2px_10px_rgba(0,0,0,0.03)] border border-stone-200 focus:border-amber-300 focus:ring-4 focus:ring-amber-100/50 transition-all duration-300"
                                    disabled={isLoading}
                                    autoFocus
                                />
                                <button
                                    type="submit"
                                    className={`absolute right-2 p-2.5 rounded-full transition-all duration-300 flex items-center justify-center shadow-md ${
                                        !userInput.trim() || isLoading
                                        ? 'bg-stone-100 text-stone-300 cursor-not-allowed'
                                        : 'bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:scale-105 active:scale-95 shadow-amber-500/30'
                                    }`}
                                    disabled={isLoading || !userInput.trim()}
                                    aria-label="Enviar"
                                >
                                    <div className="w-5 h-5">
                                      <SendIcon />
                                    </div>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Gemini;
