import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Mail, MessageCircle, Youtube, Twitch, ExternalLink, Code, Gamepad2, Globe } from "lucide-react"

export default function Portfolio() {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Полнофункциональная платформа электронной коммерции с админ-панелью",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      type: "website",
      link: "#",
    },
    {
      title: "Mobile RPG Game",
      description: "2D RPG игра для мобильных устройств с системой прокачки персонажа",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Unity", "C#", "SQLite"],
      type: "game",
      link: "#",
    },
    {
      title: "Task Management App",
      description: "Кроссплатформенное приложение для управления задачами и проектами",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Flutter", "Dart", "Firebase"],
      type: "app",
      link: "#",
    },
    {
      title: "Portfolio Website",
      description: "Адаптивный сайт-портфолио с современным дизайном",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      type: "website",
      link: "#",
    },
    {
      title: "Puzzle Game",
      description: "Логическая головоломка для ПК с уникальной механикой",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Godot", "GDScript"],
      type: "game",
      link: "#",
    },
    {
      title: "API Dashboard",
      description: "Панель мониторинга и аналитики для REST API",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Vue.js", "Express.js", "MongoDB"],
      type: "website",
      link: "#",
    },
  ]

  const getProjectIcon = (type: string) => {
    switch (type) {
      case "website":
        return <Globe className="w-4 h-4" />
      case "game":
        return <Gamepad2 className="w-4 h-4" />
      case "app":
        return <Code className="w-4 h-4" />
      default:
        return <Code className="w-4 h-4" />
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <Code className="h-6 w-6" />
              <span className="font-bold">Портфолио</span>
            </Link>
          </div>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="#about" className="transition-colors hover:text-foreground/80">
              О себе
            </Link>
            <Link href="#projects" className="transition-colors hover:text-foreground/80">
              Проекты
            </Link>
            <Link href="#contact" className="transition-colors hover:text-foreground/80">
              Контакты
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container px-4 py-24 mx-auto">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="relative">
            <Image
              src="/placeholder.svg?height=200&width=200"
              alt="Фото профиля"
              width={200}
              height={200}
              className="rounded-full border-4 border-primary/20"
            />
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Привет, я <span className="text-primary">Программист</span>
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Создаю веб-сайты, мобильные приложения и игры. Специализируюсь на современных технологиях и всегда
              стремлюсь к созданию качественных продуктов.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            <Badge variant="secondary">Full-Stack Developer</Badge>
            <Badge variant="secondary">Game Developer</Badge>
            <Badge variant="secondary">Mobile Developer</Badge>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container px-4 py-24 mx-auto">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">О себе</h2>
          <Card>
            <CardContent className="p-6">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Я опытный программист с более чем 5-летним стажем разработки. Работаю с различными технологиями и
                платформами, создавая решения от простых веб-сайтов до сложных игровых проектов.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Мой опыт включает разработку веб-приложений на React и Next.js, создание мобильных приложений на Flutter
                и Unity, а также разработку игр для различных платформ.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Постоянно изучаю новые технологии и подходы к разработке, чтобы создавать современные и эффективные
                решения для своих клиентов.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container px-4 py-24 mx-auto">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">Мои проекты</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge variant="secondary" className="flex items-center gap-1">
                      {getProjectIcon(project.type)}
                      {project.type === "website" ? "Сайт" : project.type === "game" ? "Игра" : "Приложение"}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {project.title}
                    <Button size="sm" variant="ghost" asChild>
                      <Link href={project.link}>
                        <ExternalLink className="w-4 h-4" />
                      </Link>
                    </Button>
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container px-4 py-24 mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tighter mb-8">Связаться со мной</h2>
          <p className="text-muted-foreground mb-8">
            Готов обсудить ваш проект или ответить на вопросы. Выберите удобный способ связи:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <Button variant="outline" size="lg" asChild className="h-16 bg-transparent">
              <Link href="mailto:your.email@example.com" className="flex flex-col items-center gap-2">
                <Mail className="w-6 h-6" />
                <span className="text-sm">Email</span>
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="h-16 bg-transparent">
              <Link href="https://t.me/yourusername" className="flex flex-col items-center gap-2">
                <MessageCircle className="w-6 h-6" />
                <span className="text-sm">Telegram</span>
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="h-16 bg-transparent">
              <Link href="https://t.me/yourchannel" className="flex flex-col items-center gap-2">
                <MessageCircle className="w-6 h-6" />
                <span className="text-sm">Telegram канал</span>
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="h-16 bg-transparent">
              <Link href="https://youtube.com/@yourchannel" className="flex flex-col items-center gap-2">
                <Youtube className="w-6 h-6" />
                <span className="text-sm">YouTube</span>
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="h-16 bg-transparent">
              <Link href="https://twitch.tv/yourusername" className="flex flex-col items-center gap-2">
                <Twitch className="w-6 h-6" />
                <span className="text-sm">Twitch</span>
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="h-16 bg-transparent">
              <Link href="https://github.com/yourusername" className="flex flex-col items-center gap-2">
                <Github className="w-6 h-6" />
                <span className="text-sm">GitHub</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="container px-4 py-8 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Code className="h-5 w-5" />
              <span className="font-semibold">© 2024 Мое портфолио</span>
            </div>
            <div className="flex space-x-4">
              <Link href="https://github.com/yourusername" className="text-muted-foreground hover:text-foreground">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="https://t.me/yourusername" className="text-muted-foreground hover:text-foreground">
                <MessageCircle className="h-5 w-5" />
              </Link>
              <Link href="https://youtube.com/@yourchannel" className="text-muted-foreground hover:text-foreground">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
