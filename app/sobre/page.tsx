import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Users, Award, Clock } from "lucide-react"

export default function SobrePage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Sobre a PrintPonto</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Especialistas em soluções de relógio de ponto e controle de acesso informatizado
            </p>
          </div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Nossa História</h2>
              <p className="text-lg text-muted-foreground mb-6">
                A PrintPonto nasceu da necessidade de oferecer soluções tecnológicas avançadas para o controle de ponto
                e acesso em empresas de todos os portes. Somos especialistas em produtos Control ID e Secullum,
                oferecendo desde relógios de ponto tradicionais até sistemas completos de controle de acesso
                informatizado.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Nossa expertise abrange biometria facial, catracas eletrônicas, software de gestão e integração de
                sistemas, sempre com foco na inovação e na satisfação do cliente.
              </p>
            </div>
            <div className="bg-primary/5 rounded-lg p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-muted-foreground">Clientes Atendidos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">5+</div>
                  <div className="text-muted-foreground">Anos de Experiência</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">1000+</div>
                  <div className="text-muted-foreground">Equipamentos Instalados</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">24h</div>
                  <div className="text-muted-foreground">Suporte Técnico</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nossos Valores */}
      <section className="bg-muted py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Nossos Valores</h2>
            <p className="text-lg text-muted-foreground">Os princípios que guiam nosso trabalho</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Qualidade</h3>
                <p className="text-muted-foreground">
                  Trabalhamos apenas com produtos de primeira linha, garantindo durabilidade e confiabilidade em todas
                  as soluções.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Atendimento</h3>
                <p className="text-muted-foreground">
                  Nossa equipe especializada oferece suporte completo, desde a consultoria até a manutenção dos
                  equipamentos.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Inovação</h3>
                <p className="text-muted-foreground">
                  Sempre atualizados com as últimas tecnologias em biometria, controle de acesso e gestão de ponto.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Nossos Serviços */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Nossos Serviços</h2>
            <p className="text-lg text-muted-foreground">Soluções completas para sua empresa</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 rounded-lg p-2">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Relógio de Ponto</h3>
                  <p className="text-muted-foreground">
                    Instalação e configuração de relógios de ponto biométricos e faciais, com integração completa aos
                    sistemas de RH.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-accent/10 rounded-lg p-2">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Controle de Acesso</h3>
                  <p className="text-muted-foreground">
                    Sistemas completos de controle de acesso com catracas, cancelas e terminais biométricos para máxima
                    segurança.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 rounded-lg p-2">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Consultoria Técnica</h3>
                  <p className="text-muted-foreground">
                    Análise das necessidades da sua empresa e recomendação das melhores soluções em tecnologia de ponto
                    e acesso.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-accent/10 rounded-lg p-2">
                  <CheckCircle className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Suporte e Manutenção</h3>
                  <p className="text-muted-foreground">
                    Suporte técnico especializado e manutenção preventiva para garantir o funcionamento perfeito dos
                    equipamentos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
