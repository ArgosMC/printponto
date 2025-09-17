import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Shield, Users, Zap } from "lucide-react"

const produtos = [
  {
    id: 1,
    nome: "Relógio de Ponto Facial Control ID",
    categoria: "Relógio de Ponto",
    descricao:
      "Relógio de ponto com reconhecimento facial avançado, ideal para empresas que buscam máxima precisão e segurança no controle de jornada.",
    imagem: "https://www.controlid.com.br/wp-content/uploads/2023/05/idfacepro-frontal.png",
    destaque: true,
    icon: Clock,
    caracteristicas: [
      "Reconhecimento facial 3D",
      "Capacidade para 50.000 usuários",
      "Conexão TCP/IP",
      'Display touchscreen 7"',
      "Resistente a intempéries",
    ],
  },
  {
    id: 2,
    nome: "Relógio de Ponto Control ID",
    categoria: "Relógio de Ponto",
    descricao:
      "Relógio de ponto biométrico Control ID com tecnologia avançada para controle preciso de jornada de trabalho.",
    imagem: "https://www.controlid.com.br/wp-content/uploads/2023/04/idclass-frontal.png",
    destaque: true,
    icon: Clock,
    caracteristicas: [
      "Biometria digital avançada",
      "Display LCD colorido",
      "Bateria de backup",
      "Conexão USB/Ethernet",
      "Interface intuitiva",
    ],
  },
  {
    id: 3,
    nome: "Software Secullum",
    categoria: "Software",
    descricao:
      "Plataforma completa para gestão de ponto eletrônico, com recursos avançados de relatórios e integração com sistemas de RH.",
    imagem: "https://www.secullum.com.br/wp-content/uploads/2023/03/secullum-ponto-logo.png",
    destaque: true,
    icon: Users,
    caracteristicas: [
      "Gestão completa de ponto",
      "Relatórios personalizados",
      "Integração com folha de pagamento",
      "Controle de jornada flexível",
      "Dashboard em tempo real",
    ],
  },
  {
    id: 4,
    nome: "Catracas Control ID",
    categoria: "Controle de Acesso",
    descricao:
      "Catracas eletrônicas com tecnologia biométrica para controle de acesso seguro e eficiente em empresas e condomínios.",
    imagem: "https://www.controlid.com.br/wp-content/uploads/2023/08/catraca-tripod-inox.png",
    destaque: true,
    icon: Shield,
    caracteristicas: [
      "Biometria digital e facial",
      "Estrutura em aço inox",
      "Controle bidirecional",
      "Integração com sistemas",
      "Alta durabilidade",
    ],
  },
  {
    id: 5,
    nome: "Software RHID",
    categoria: "Software",
    descricao: "Sistema integrado para recursos humanos com módulos de controle de ponto, acesso e gestão de pessoas.",
    imagem: "https://www.controlid.com.br/wp-content/uploads/2023/06/rhid-logo.png",
    destaque: true,
    icon: Zap,
    caracteristicas: [
      "Módulo de RH completo",
      "Controle de acesso integrado",
      "Gestão de escalas",
      "Relatórios gerenciais",
      "Interface intuitiva",
    ],
  },
]

export default function ProdutosPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Nossos Produtos</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Conheça nossa linha completa de produtos Control ID e Secullum para relógio de ponto e controle de acesso
              informatizado
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Produtos em Evidência</h2>
            <p className="text-lg text-muted-foreground">Nossas principais soluções em tecnologia de ponto e acesso</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {produtos.map((produto) => {
              const IconComponent = produto.icon
              return (
                <Card key={produto.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video bg-muted flex items-center justify-center p-8">
                    <img
                      src={produto.imagem || "/placeholder.svg"}
                      alt={produto.nome}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="mb-2">
                        {produto.categoria}
                      </Badge>
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{produto.nome}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{produto.descricao}</p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm text-foreground">Características:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {produto.caracteristicas.map((caracteristica, index) => (
                          <li key={index} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                            <span>{caracteristica}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
