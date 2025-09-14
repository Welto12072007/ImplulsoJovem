import React from 'react';
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
  Shield
} from 'lucide-react';

function App() {
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
                ImpulsoJovem
              </span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#solucao" className="text-gray-600 hover:text-blue-600 transition-colors">Solução</a>
              <a href="#jovens" className="text-gray-600 hover:text-blue-600 transition-colors">Para Jovens</a>
              <a href="#empresas" className="text-gray-600 hover:text-blue-600 transition-colors">Para Empresas</a>
              <a href="#como-funciona" className="text-gray-600 hover:text-blue-600 transition-colors">Como Funciona</a>
            </nav>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all transform hover:scale-105">
              Começar Agora
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                  <Zap className="w-4 h-4" />
                  <span>Plataforma de Integração Inteligente</span>
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Conecte <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">jovens talentos</span> às suas oportunidades
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  A primeira plataforma que integra onboarding, treinamento e acompanhamento personalizado para micro e pequenas empresas, com IA e WhatsApp.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all transform hover:scale-105 flex items-center justify-center space-x-2">
                  <span>Demonstração Gratuita</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all flex items-center justify-center space-x-2">
                  <PlayCircle className="w-5 h-5" />
                  <span>Ver como funciona</span>
                </button>
              </div>
              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">85%</div>
                  <div className="text-sm text-gray-600">Retenção de jovens</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">60%</div>
                  <div className="text-sm text-gray-600">Menos tempo de integração</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">500+</div>
                  <div className="text-sm text-gray-600">Empresas conectadas</div>
                </div>
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
                    <p className="text-gray-600">Jovens chegam sem hard skills (Excel, design, social media) e soft skills (comunicação, oratória).</p>
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
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900">Onboarding Estruturado</h4>
                <p className="text-gray-600 text-sm">Templates prontos e cronogramas personalizados para integração eficiente</p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900">Treinamento IA</h4>
                <p className="text-gray-600 text-sm">Hard e soft skills personalizados por inteligência artificial</p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900">Acompanhamento</h4>
                <p className="text-gray-600 text-sm">Dashboard gamificado com métricas em tempo real</p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900">WhatsApp</h4>
                <p className="text-gray-600 text-sm">Notificações, feedbacks e suporte via WhatsApp</p>
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
                <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                  <Users className="w-4 h-4" />
                  <span>Para Jovens Profissionais</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  Desenvolva suas <span className="text-blue-600">competências</span> e acelere sua carreira
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

              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all transform hover:scale-105 flex items-center space-x-2">
                <span>Começar meu desenvolvimento</span>
                <ArrowRight className="w-5 h-5" />
              </button>
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
                <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium">
                  <Building2 className="w-4 h-4" />
                  <span>Para Empresas</span>
                </div>
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

              <button className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all transform hover:scale-105 flex items-center space-x-2">
                <span>Teste grátis por 30 dias</span>
                <ArrowRight className="w-5 h-5" />
              </button>
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
              Pronto para revolucionar a integração de jovens talentos?
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Junte-se às empresas que já estão transformando onboarding, desenvolvimento e retenção de talentos com nossa plataforma.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all transform hover:scale-105 flex items-center space-x-2">
                <span>Demonstração Gratuita</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all flex items-center space-x-2">
                <PlayCircle className="w-5 h-5" />
                <span>Ver Apresentação</span>
              </button>
            </div>

            <div className="flex items-center justify-center space-x-8 pt-8 opacity-80">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-sm text-blue-200">Empresas</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">2.5k</div>
                <div className="text-sm text-blue-200">Jovens conectados</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">85%</div>
                <div className="text-sm text-blue-200">Taxa de sucesso</div>
              </div>
            </div>
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
                <span className="text-xl font-bold">TalentBridge</span>
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
            <p>&copy; 2025 TalentBridge. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;