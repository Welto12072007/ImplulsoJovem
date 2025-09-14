import React, { useState } from 'react';
import { 
  ArrowRight, 
  Users, 
  Building2, 
  Smartphone, 
  Brain, 
  Star,
  CheckCircle,
  PlayCircle,
  TrendingUp,
  MessageSquare,
  Award,
  Target,
  Lightbulb,
  Zap,
  Shield,
  X,
  Monitor,
  Tablet
} from 'lucide-react';

// Importar imagens da parte da empresa
import empresaImg1 from './imgParteDaEmpresa/WhatsApp Image 2025-09-14 at 14.18.55.jpeg';
import empresaImg2 from './imgParteDaEmpresa/WhatsApp Image 2025-09-14 at 14.19.20.jpeg';
import empresaImg3 from './imgParteDaEmpresa/WhatsApp Image 2025-09-14 at 14.19.36.jpeg';
import empresaImg4 from './imgParteDaEmpresa/WhatsApp Image 2025-09-14 at 14.19.55.jpeg';
import empresaImg5 from './imgParteDaEmpresa/WhatsApp Image 2025-09-14 at 14.20.08.jpeg';
import empresaImg6 from './imgParteDaEmpresa/WhatsApp Image 2025-09-14 at 14.20.29.jpeg';
import empresaImg7 from './imgParteDaEmpresa/WhatsApp Image 2025-09-14 at 14.20.48.jpeg';
import empresaImg8 from './imgParteDaEmpresa/WhatsApp Image 2025-09-14 at 14.21.01.jpeg';
import empresaImg9 from './imgParteDaEmpresa/WhatsApp Image 2025-09-14 at 14.21.14.jpeg';

// Importar imagens da parte dos jovens
import jovemImg1 from './imgParteDosJovens/WhatsApp Image 2025-09-14 at 14.13.47.jpeg';
import jovemImg2 from './imgParteDosJovens/WhatsApp Image 2025-09-14 at 14.14.06.jpeg';
import jovemImg3 from './imgParteDosJovens/WhatsApp Image 2025-09-14 at 14.14.29.jpeg';
import jovemImg4 from './imgParteDosJovens/WhatsApp Image 2025-09-14 at 14.14.47.jpeg';
import jovemImg5 from './imgParteDosJovens/WhatsApp Image 2025-09-14 at 14.15.04.jpeg';
import jovemImg6 from './imgParteDosJovens/WhatsApp Image 2025-09-14 at 14.15.21.jpeg';

function App() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [zoomedImage, setZoomedImage] = useState<{src: string, alt: string} | null>(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                ImpulsoJov
              </span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#solucao" className="text-gray-600 hover:text-blue-600 transition-colors">Solução</a>
              <a href="#jovens" className="text-gray-600 hover:text-blue-600 transition-colors">Para Jovens</a>
              <a href="#empresas" className="text-gray-600 hover:text-blue-600 transition-colors">Para Empresas</a>
              <a href="#como-funciona" className="text-gray-600 hover:text-blue-600 transition-colors">Como Funciona</a>
            </nav>

          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
          
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                 Integração rápida e desenvolvimento de <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">jovens talentos</span> para pequenas empresas.
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Unimos empresas que formam e jovens que crescem, com onboarding estruturado, aprendizado contínuo e acompanhamento próximo para eliminiar inseguranças, rotatividade e ampliar o comprometimento.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setIsDemoOpen(true)}
                  className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all flex items-center justify-center space-x-2"
                >
                  <PlayCircle className="w-5 h-5" />
                  <span>Ver como funciona</span>
                </button>
              </div>
              
            </div>
            <div className="lg:pl-12">
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 rounded-2xl shadow-2xl transform rotate-3">
                  <div className="bg-white p-6 rounded-lg space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <Users className="w-4 h-4 text-blue-600" />
                        </div>
                        <span className="font-semibold text-gray-900">Dashboard do Gestor</span>
                      </div>
                      <div className="text-green-600 text-sm font-medium">Em tempo real</div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <span className="text-sm text-gray-700">Ana Silva - Social Media</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-20 bg-gray-200 rounded-full h-2">
                            <div className="bg-green-500 h-2 rounded-full" style={{width: '85%'}}></div>
                          </div>
                          <span className="text-sm font-medium text-green-600">85%</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <span className="text-sm text-gray-700">João Santos - Admin</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-20 bg-gray-200 rounded-full h-2">
                            <div className="bg-blue-500 h-2 rounded-full" style={{width: '72%'}}></div>
                          </div>
                          <span className="text-sm font-medium text-blue-600">72%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-lg shadow-lg">
                  <div className="flex items-center space-x-2">
                    <MessageSquare className="w-5 h-5 text-green-600" />
                    <span className="text-sm font-medium text-gray-700">WhatsApp integrado</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section id="solucao" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              O Desafio da Integração de Jovens Talentos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Micro e pequenas empresas enfrentam dificuldades para integrar, treinar e reter jovens profissionais de forma eficiente.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-red-600 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Falta de estrutura para onboarding</h3>
                    <p className="text-gray-600">Gestores sobrecarregados não têm tempo para criar processos de integração eficientes.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-red-600 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Lacunas em competências essenciais</h3>
                    <p className="text-gray-600">Jovens chegam inseguros para entrar no mercado de trabalho, sem hard skills (Excel, design, social media) e soft skills (comunicação, oratória).</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-red-600 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Alta rotatividade</h3>
                    <p className="text-gray-600">Falta de acompanhamento e feedback resulta em desengajamento e perda de talentos.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-2xl">
              <div className="text-center space-y-6">
                <div className="text-6xl font-bold text-red-600">68%</div>
                <p className="text-lg text-gray-700 font-medium">dos jovens deixam o primeiro emprego em até 6 meses</p>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">3x</div>
                    <div className="text-sm text-gray-600">Custo de reposição</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">45%</div>
                    <div className="text-sm text-gray-600">Tempo perdido</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-12 rounded-3xl">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Nossa Solução</h3>
              <p className="text-xl text-gray-600">Plataforma completa que integra, treina e acompanha jovens talentos com IA e WhatsApp</p>
            </div>

            {/* Benefícios-Chave */}
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Building2 className="w-6 h-6 text-orange-600" />
                  <h4 className="text-xl font-bold text-gray-900">Para Empresas</h4>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h5 className="font-semibold text-gray-900">Reter talentos</h5>
                      <p className="text-gray-600 text-sm">Jovens comprometidos e engajados permanecem mais tempo</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h5 className="font-semibold text-gray-900">Economizar tempo</h5>
                      <p className="text-gray-600 text-sm">Processos automatizados reduzem sobrecarga da equipe</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h5 className="font-semibold text-gray-900">Padronizar treinamento</h5>
                      <p className="text-gray-600 text-sm">Cronogramas estruturados garantem qualidade consistente</p>
                    </div>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Users className="w-6 h-6 text-blue-600" />
                  <h4 className="text-xl font-bold text-gray-900">Para Jovens</h4>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h5 className="font-semibold text-gray-900">Aprender rápido</h5>
                      <p className="text-gray-600 text-sm">Trilhas personalizadas aceleram o desenvolvimento</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h5 className="font-semibold text-gray-900">Ganhar confiança</h5>
                      <p className="text-gray-600 text-sm">Acompanhamento próximo e feedbacks constantes</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h5 className="font-semibold text-gray-900">Se adaptar melhor</h5>
                      <p className="text-gray-600 text-sm">Onboarding estruturado facilita integração à empresa</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* O que oferecemos */}
            <div className="border-t border-gray-200 pt-12">
              <div className="text-center mb-8">
                <h4 className="text-2xl font-bold text-gray-900 mb-2">O que Disponibilizamos</h4>
                <p className="text-gray-600">Ferramentas completas para transformar a gestão de jovens talentos</p>
              </div>
              
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h5 className="font-semibold text-gray-900">Onboarding Estruturado</h5>
                  <p className="text-gray-600 text-sm">Templates prontos e cronogramas personalizados para integração eficiente</p>
                </div>
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <h5 className="font-semibold text-gray-900">Treinamento com IA</h5>
                  <p className="text-gray-600 text-sm">Hard e soft skills personalizados por inteligência artificial</p>
                </div>
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h5 className="font-semibold text-gray-900">Acompanhamento</h5>
                  <p className="text-gray-600 text-sm">Dashboard gamificado com métricas em tempo real</p>
                </div>
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto">
                    <MessageSquare className="w-8 h-8 text-white" />
                  </div>
                  <h5 className="font-semibold text-gray-900">WhatsApp</h5>
                  <p className="text-gray-600 text-sm">Notificações, feedbacks e suporte via WhatsApp</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Youth */}
      <section id="jovens" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
      
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  Impulsione a  <span className="text-blue-600">carreira</span> de seus colaboradores
                </h2>
                <p className="text-xl text-gray-600">
                  Plataforma gamificada que te ajuda a desenvolver hard skills e soft skills essenciais para o mercado de trabalho.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Trilhas personalizadas de aprendizagem com IA</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Microcursos de Excel, design, social media e comunicação</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Sistema de badges e gamificação motivacional</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Feedback em tempo real via WhatsApp</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Cronograma claro de desenvolvimento profissional</span>
                </div>
              </div>

          
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-900">Suas Trilhas de Aprendizagem</h3>
                  <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                    75% completo
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Award className="w-5 h-5 text-yellow-500" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-900">Excel Básico</span>
                        <span className="text-sm text-green-600 font-medium">Concluído</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 border-2 border-blue-600 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-900">Comunicação Eficaz</span>
                        <span className="text-sm text-blue-600 font-medium">Em progresso</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 border-2 border-gray-300 rounded-full"></div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-500">Social Media</span>
                        <span className="text-sm text-gray-400 font-medium">Próximo</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-xl border border-green-200">
                <div className="flex items-center space-x-3 mb-3">
                  <MessageSquare className="w-6 h-6 text-green-600" />
                  <span className="font-semibold text-gray-900">WhatsApp Assistant</span>
                </div>
                <div className="bg-white p-4 rounded-lg mb-3">
                  <p className="text-sm text-gray-700 mb-2">"Oi! Você completou o módulo de Excel. Que tal praticar com uma planilha real da empresa? 📊"</p>
                  <div className="flex space-x-2">
                    <button className="bg-green-500 text-white px-3 py-1 rounded text-xs">Sim, vamos!</button>
                    <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded text-xs">Mais tarde</button>
                  </div>
                </div>
                <p className="text-xs text-gray-600">Suporte e motivação 24/7 via WhatsApp</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Companies */}
      <section id="empresas" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-2xl">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-semibold text-gray-900">Dashboard de Gestão</h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Ao vivo</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-900">Equipe de Marketing (3 jovens)</span>
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">89% performance</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{width: '89%'}}></div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-900">Administrativo (2 jovens)</span>
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">76% performance</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{width: '76%'}}></div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <div className="flex items-center space-x-2">
                    <Lightbulb className="w-4 h-4 text-yellow-600" />
                    <span className="text-sm font-medium text-yellow-800">Sugestão IA:</span>
                  </div>
                  <p className="text-sm text-yellow-700 mt-1">
                    "João precisa de reforço em comunicação. Recomendamos módulo de soft skills."
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">-60%</div>
                  <div className="text-sm text-gray-600">Tempo de integração</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">+85%</div>
                  <div className="text-sm text-gray-600">Retenção</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">-40%</div>
                  <div className="text-sm text-gray-600">Custos de RH</div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
              
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  Integre e desenvolva <span className="text-orange-600">jovens talentos</span> sem sobrecarregar sua equipe
                </h2>
                <p className="text-xl text-gray-600">
                  Sistema completo que automatiza onboarding, treinamento e acompanhamento com inteligência artificial.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Shield className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Templates de onboarding prontos</h3>
                    <p className="text-gray-600 text-sm">Cronogramas estruturados para primeira semana, primeiro mês e primeiros 90 dias.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Brain className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">IA personaliza o desenvolvimento</h3>
                    <p className="text-gray-600 text-sm">Algoritmo adapta trilhas conforme cargo, setor e performance individual.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <TrendingUp className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Métricas e insights em tempo real</h3>
                    <p className="text-gray-600 text-sm">Dashboard com evolução, alertas e sugestões para ação do gestor.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MessageSquare className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Integração completa com WhatsApp</h3>
                    <p className="text-gray-600 text-sm">Notificações automáticas, feedbacks e canal de suporte direto.</p>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="como-funciona" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Como Funciona na Prática
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Processo simples e automatizado que conecta jovens talentos às oportunidades de crescimento
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto text-white font-bold text-xl">
                1
              </div>
              <h3 className="font-semibold text-gray-900">Cadastro</h3>
              <p className="text-gray-600 text-sm">Empresa cadastra jovem e escolhe cargo. IA já sugere cronograma personalizado.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto text-white font-bold text-xl">
                2
              </div>
              <h3 className="font-semibold text-gray-900">Onboarding</h3>
              <p className="text-gray-600 text-sm">Jovem recebe acesso via web + WhatsApp e inicia cronograma de integração.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto text-white font-bold text-xl">
                3
              </div>
              <h3 className="font-semibold text-gray-900">Desenvolvimento</h3>
              <p className="text-gray-600 text-sm">Microcursos e tarefas diárias/semanais com acompanhamento gamificado.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto text-white font-bold text-xl">
                4
              </div>
              <h3 className="font-semibold text-gray-900">Acompanhamento</h3>
              <p className="text-gray-600 text-sm">Gestor monitora progresso e recebe alertas inteligentes para feedback.</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Exemplo: Auxiliar Administrativo</h3>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900 flex items-center space-x-2">
                  <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold">1</div>
                  <span>Semana 1 - Integração</span>
                </h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Vídeo de boas-vindas</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Cultura da empresa</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Procedimentos básicos</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900 flex items-center space-x-2">
                  <div className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-sm font-bold">2</div>
                  <span>Semanas 2-4 - Habilidades</span>
                </h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-blue-600 rounded-full flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                    </div>
                    <span>Excel básico (10 min/dia)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-blue-600 rounded-full flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                    </div>
                    <span>Comunicação eficaz</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-blue-600 rounded-full flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                    </div>
                    <span>Organização de tarefas</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900 flex items-center space-x-2">
                  <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-bold">3</div>
                  <span>Mês 2-3 - Especialização</span>
                </h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-gray-300 rounded-full"></div>
                    <span>Atendimento ao cliente</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-gray-300 rounded-full"></div>
                    <span>Gestão de arquivos</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-gray-300 rounded-full"></div>
                    <span>Apresentações em público</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-blue-50 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <MessageSquare className="w-5 h-5 text-blue-600" />
                <span className="font-medium text-blue-900">WhatsApp Integration</span>
              </div>
              <p className="text-sm text-blue-700">
                "Parabéns! Você completou 85% do seu cronograma. Que tal praticar Excel com uma planilha real? 📊"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
              Prontos para impulsionar seu negócio com jovens talentos?
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Junte-se às empresas que já estão transformando onboarding, desenvolvimento e retenção de talentos com nossa plataforma.
            </p>
            
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">ImpulsoJov</span>
              </div>
              <p className="text-gray-400">
                Conectando jovens talentos às oportunidades através de tecnologia e inteligência artificial.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Produto</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Para Empresas</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Para Jovens</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Preços</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Recursos</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Guias</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Webinars</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Suporte</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Sobre</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Carreiras</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacidade</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 ImpulsoJov. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Demo Modal */}
      {isDemoOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200 flex items-center justify-between">
              <h3 className="text-2xl font-bold text-gray-900">Como Funciona na Prática</h3>
              <button 
                onClick={() => setIsDemoOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6 space-y-8">
              {/* Visão Geral */}
              <div className="text-center mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-2">Demonstração da Plataforma</h4>
                <p className="text-gray-600">Veja como empresas e jovens interagem com nossa solução</p>
              </div>

              {/* Dashboard da Empresa */}
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <Monitor className="w-6 h-6 text-blue-600" />
                  <h5 className="text-lg font-semibold text-gray-900">Aplicação da Empresa</h5>
                </div>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <div className="aspect-video bg-white rounded-lg overflow-hidden shadow-sm cursor-pointer hover:shadow-lg transition-shadow">
                      <img 
                        src={empresaImg1} 
                        alt="Dashboard Principal - Visão geral da performance dos jovens"
                        className="w-full h-full object-cover hover:scale-105 transition-transform"
                        onClick={() => setZoomedImage({src: empresaImg1, alt: "Dashboard Principal - Visão geral da performance dos jovens"})}
                      />
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <div className="aspect-video bg-white rounded-lg overflow-hidden shadow-sm cursor-pointer hover:shadow-lg transition-shadow">
                      <img 
                        src={empresaImg2} 
                        alt="Gestão de Talentos - Acompanhamento individual"
                        className="w-full h-full object-cover hover:scale-105 transition-transform"
                        onClick={() => setZoomedImage({src: empresaImg2, alt: "Gestão de Talentos - Acompanhamento individual dos jovens"})}
                      />
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <div className="aspect-video bg-white rounded-lg overflow-hidden shadow-sm cursor-pointer hover:shadow-lg transition-shadow">
                      <img 
                        src={empresaImg3} 
                        alt="Analytics - Relatórios e insights detalhados"
                        className="w-full h-full object-cover hover:scale-105 transition-transform"
                        onClick={() => setZoomedImage({src: empresaImg3, alt: "Relatórios e Analytics - Insights e métricas avançadas"})}
                      />
                    </div>
                  </div>
                </div>

                {/* Mais screenshots da empresa */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <div className="aspect-video bg-white rounded-lg overflow-hidden shadow-sm cursor-pointer hover:shadow-lg transition-shadow">
                      <img 
                        src={empresaImg4} 
                        alt="Configurações de Onboarding"
                        className="w-full h-full object-cover hover:scale-105 transition-transform"
                        onClick={() => setZoomedImage({src: empresaImg4, alt: "Configurações de Onboarding - Templates e cronogramas personalizáveis por cargo e setor"})}
                      />
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <div className="aspect-video bg-white rounded-lg overflow-hidden shadow-sm cursor-pointer hover:shadow-lg transition-shadow">
                      <img 
                        src={empresaImg5} 
                        alt="Comunicação e Notificações"
                        className="w-full h-full object-cover hover:scale-105 transition-transform"
                        onClick={() => setZoomedImage({src: empresaImg5, alt: "Centro de Comunicação - Sistema de notificações automáticas e mensagens personalizadas"})}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Aplicativo do Jovem */}
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <Tablet className="w-6 h-6 text-purple-600" />
                  <h5 className="text-lg font-semibold text-gray-900">Aplicação do Jovem</h5>
                </div>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <div className="aspect-[3/4] bg-white rounded-lg overflow-hidden shadow-sm cursor-pointer hover:shadow-lg transition-shadow">
                      <img 
                        src={jovemImg1} 
                        alt="Tela de Onboarding - Primeiros passos"
                        className="w-full h-full object-cover hover:scale-105 transition-transform"
                        onClick={() => setZoomedImage({src: jovemImg1, alt: "Onboarding - Cronograma dos primeiros 90 dias"})}
                      />
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <div className="aspect-[3/4] bg-white rounded-lg overflow-hidden shadow-sm cursor-pointer hover:shadow-lg transition-shadow">
                      <img 
                        src={jovemImg2} 
                        alt="Trilhas de Aprendizagem - Cursos personalizados"
                        className="w-full h-full object-cover hover:scale-105 transition-transform"
                        onClick={() => setZoomedImage({src: jovemImg2, alt: "Trilhas de Aprendizagem - Microcursos personalizados por IA"})}
                      />
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <div className="aspect-[3/4] bg-white rounded-lg overflow-hidden shadow-sm cursor-pointer hover:shadow-lg transition-shadow">
                      <img 
                        src={jovemImg3} 
                        alt="Dashboard de Progresso - Conquistas e badges"
                        className="w-full h-full object-cover hover:scale-105 transition-transform"
                        onClick={() => setZoomedImage({src: jovemImg3, alt: "Progresso & Conquistas - Badges, rankings e gamificação"})}
                      />
                    </div>
                  </div>
                </div>

                {/* Mais screenshots dos jovens */}
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <div className="aspect-[3/4] bg-white rounded-lg overflow-hidden shadow-sm cursor-pointer hover:shadow-lg transition-shadow">
                      <img 
                        src={jovemImg4} 
                        alt="Tarefas e Atividades Diárias"
                        className="w-full h-full object-cover hover:scale-105 transition-transform"
                        onClick={() => setZoomedImage({src: jovemImg4, alt: "Tarefas Diárias - Atividades práticas, exercícios e avaliações semanais"})}
                      />
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <div className="aspect-[3/4] bg-white rounded-lg overflow-hidden shadow-sm cursor-pointer hover:shadow-lg transition-shadow">
                      <img 
                        src={jovemImg5} 
                        alt="Feedback e Comunicação"
                        className="w-full h-full object-cover hover:scale-105 transition-transform"
                        onClick={() => setZoomedImage({src: jovemImg5, alt: "Sistema de Feedback - Canal direto com gestores, mentores e chat de suporte"})}
                      />
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <div className="aspect-[3/4] bg-white rounded-lg overflow-hidden shadow-sm cursor-pointer hover:shadow-lg transition-shadow">
                      <img 
                        src={jovemImg6} 
                        alt="Perfil e Desenvolvimento Pessoal"
                        className="w-full h-full object-cover hover:scale-105 transition-transform"
                        onClick={() => setZoomedImage({src: jovemImg6, alt: "Perfil Profissional - Histórico de evolução, competências adquiridas e metas de desenvolvimento"})}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp Integration */}
              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl">
                <div className="flex items-center space-x-3 mb-4">
                  <MessageSquare className="w-6 h-6 text-green-600" />
                  <h5 className="text-lg font-semibold text-gray-900">Integração WhatsApp</h5>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-4 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <MessageSquare className="w-4 h-4 text-white" />
                      </div>
                      <span className="font-medium">Bot ImpulsoJovem</span>
                    </div>
                    <div className="space-y-2">
                      <div className="bg-green-100 p-3 rounded-lg text-sm">
                        "Oi Ana! 👋 Você completou 85% do módulo de Excel. Parabéns! 🎉"
                      </div>
                      <div className="bg-green-100 p-3 rounded-lg text-sm">
                        "Que tal praticar com uma planilha real da empresa? 📊"
                      </div>
                      <div className="bg-gray-100 p-3 rounded-lg text-sm text-right">
                        "Sim, vamos! 😊"
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm text-gray-700">Notificações automáticas</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm text-gray-700">Lembretes personalizados</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm text-gray-700">Suporte 24/7</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm text-gray-700">Feedback em tempo real</span>
                    </div>
                  </div>
                </div>
              </div>

                            
            </div>
          </div>
        </div>
      )}

      {/* Modal de Zoom para Imagens */}
      {zoomedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-[70] flex items-center justify-center p-4">
          <div className="relative max-w-6xl max-h-[90vh] w-full">
            <button
              onClick={() => setZoomedImage(null)}
              className="absolute top-4 right-4 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all z-10"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={zoomedImage.src}
              alt={zoomedImage.alt}
              className="w-full h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;