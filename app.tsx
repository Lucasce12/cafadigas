'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ChevronDown, Facebook, Twitter, Linkedin, Users, Briefcase, Shield, Leaf } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Logo from "@/app/logo.png"

import Image2  from '@/app/images/2.jpeg'
import Image3  from '@/app/images/3.jpeg'
import Image4  from '@/app/images/4.jpeg'
import Image5  from '@/app/images/5.jpeg'
import Energia from '@/app/images/energia.jpeg'

const navigation = [
  { name: 'Inicio', href: '1' },
  { name: 'Institucional', href: '', children: [
    { name: 'Quiénes somos', href: '#quienes-somos' },
    { name: 'Misión / Visión', href: '#mision-vision' },
    { name: 'Valores y Objetivos', href: '#valores-objetivos' },
    { name: 'Consejo Directivo', href: '#consejo-directivo' },
  ]},
  { name: 'Qué es el GLP', href: '2', children: [
    { name: 'Definición de GLP', href: '#' },
    { name: 'Beneficios', href: '#beneficios-glp' },
    { name: 'Por qué usarlo', href: '#' },
    { name: 'Usos', href: '#' },
    { name: 'Presentaciones', href: '#' },
  ]},
  { name: 'Servicios', href: '#servicios' },
  { name: 'Normativas', href: '#normativas' },
  { name: 'Noticias', href: '#noticias' },
  { name: 'Contacto', href: '#contacto' },
]

const partners = [
  { name: 'Asociado 1', logo: '/placeholder.svg?height=100&width=200&text=Logo+1' },
  { name: 'Asociado 2', logo: '/placeholder.svg?height=100&width=200&text=Logo+2' },
  { name: 'Asociado 3', logo: '/placeholder.svg?height=100&width=200&text=Logo+3' },
  { name: 'Asociado 4', logo: '/placeholder.svg?height=100&width=200&text=Logo+4' },
  { name: 'Asociado 5', logo: '/placeholder.svg?height=100&width=200&text=Logo+5' },
]

export default function Component() {
  const setMobileMenuOpen = React.useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  return (
    <div className="bg-gradient-to-b from-teal-50 to-white min-h-screen">
      <header className="bg-white shadow-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">CAFADIGAS</span>
              <Image
                src={Logo}
                alt="CAFADIGAS logo"
                width={250}
                height={100}
                className="h-36 w-auto object-contain"
              />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <ChevronDown className="h-6 w-6" aria-hidden="true" />
            </Button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                <Button
                  variant="ghost"
                  className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900"
                  onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                >
                  {item.name}
                  {item.children && (
                    <ChevronDown className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                  )}
                </Button>
                {item.children && openDropdown === item.name && (
                  <div className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                    <div className="p-4">
                      {item.children.map((subItem) => (
                        <div
                          key={subItem.name}
                          className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                        >
                          <div className="flex-auto">
                            <Link href={subItem.href} className="block font-semibold text-gray-900">
                              {subItem.name}
                              <span className="absolute inset-0" />
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Button variant="outline">
              Iniciar sesión
            </Button>
          </div>
        </nav>
      </header>

      <main>

        <section className="relative isolate">
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
              <motion.h1 
                className="mt-10 max-w-lg text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                La energía nos une
              </motion.h1>
              <motion.p 
                className="mt-6 text-lg leading-8 text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Reflejamos diariamente las inquietudes y problemas de los distribuidores de GLP de cada rincón del país. Brindamos la información precisa y la búsqueda constante de soluciones y beneficios para nuestros asociados.
              </motion.p>
              <div className="mt-10 flex items-center gap-x-6">
                <Button>Conoce más</Button>
                <Button variant="link">
                  Contáctanos <span aria-hidden="true">→</span>
                </Button>
              </div>
            </div>
            <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
            <Image 
                      src={Energia}
                      alt="La energia no une"
                      width={300}
                      height={200}
                      className="rounded-lg"
                    />
            </div>
          </div>
        </section>

        {/* Mantener la sección "La energía nos une" */}

        <section id="quienes-somos" className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-teal-600">Sobre Nosotros</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Quiénes Somos
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl lg:max-w-4xl flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/2">
                <p className="text-lg leading-8 text-gray-600">
                  Somos una cámara de distribuidores dedicada a representar a empresas líderes en la distribución de gas licuado, asegurando calidad, seguridad y cumplimiento de normativas en toda la cadena de suministro. Nuestro compromiso es promover la eficiencia energética y el acceso seguro al GLP en todo el país, apoyando a nuestros miembros con asesoramiento técnico y regulatorio.
                </p>
              </div>
              <div className="lg:w-1/2">
                <Image 
                  src={Image2}
                  alt="Trabajador de GLP verificando equipos"
                  width={500}
                  height={300}
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mantener las secciones "Misión y Visión" y "Valores y Objetivos" */}

        <section id="servicios" className="bg-gray-100 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-teal-600">Nuestros Servicios</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Cómo ayudamos a nuestros asociados
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle>El rol de los distribuidores de GLP</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Los distribuidores de GLP son fundamentales para garantizar que este recurso llegue de manera segura y eficiente a hogares, empresas e industrias. Actúan como el eslabón principal en la cadena de suministro, gestionando desde el almacenamiento y transporte hasta la entrega del gas licuado en cilindros o a granel.</p>
                  </CardContent>
                  <CardFooter>
                    <Image 
                      src={Image4}
                      alt="Técnico de GLP operando equipos"
                      width={300}
                      height={200}
                      className="rounded-lg"
                    />
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Beneficios del GLP en distintas industrias</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Agricultura: En invernaderos y secado de cultivos.</li>
                      <li>Industria alimentaria: Utilizado en hornos y procesos de cocción.</li>
                      <li>Sector industrial: Ideal para procesos que requieren alta eficiencia térmica.</li>
                      <li>Transporte y automoción: Como combustible alternativo más limpio.</li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Image 
                      src={Image5}
                      alt="Cilindro de GLP en entorno industrial"
                      width={300}
                      height={200}
                      className="rounded-lg"
                    />
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Innovaciones y prácticas actualizadas</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Los distribuidores han adoptado soluciones tecnológicas que optimizan la logística, con sistemas de monitoreo en tiempo real. Además, promueven el uso responsable de GLP a través de campañas educativas sobre su manipulación segura y eficiente.</p>
                  </CardContent>
                  <CardFooter>
                    <Image 
                      src={Image3}
                      alt="Trabajador inspeccionando instalaciones de GLP"
                      width={300}
                      height={200}
                      className="rounded-lg"
                    />
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </section>


        <section id="mision-vision" className="bg-gray-100 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-teal-600">Nuestra Esencia</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Misión y Visión
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl">
              <Tabs defaultValue="mision" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="mision">Misión</TabsTrigger>
                  <TabsTrigger value="vision">Visión</TabsTrigger>
                </TabsList>
                <TabsContent value="mision">
                  <Card>
                    <CardHeader>
                      <CardTitle>Nuestra Misión</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Nuestra misión es representar a los distribuidores de gas licuado del país, garantizando el acceso seguro y eficiente al GLP para todos los usuarios, mientras velamos por el cumplimiento riguroso de las leyes y normativas vigentes. Nos comprometemos a trabajar en estrecha colaboración con las autoridades gubernamentales para asegurar la correcta aplicación de las regulaciones establecidas, contribuyendo a la transparencia y equidad en el sector. Impulsamos prácticas que refuercen la seguridad y protejan el entorno natural en el que operamos.</p>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="vision">
                  <Card>
                    <CardHeader>
                      <CardTitle>Nuestra Visión</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Aspiramos a ser la voz líder en la industria del gas licuado, promoviendo la implementación efectiva de las leyes existentes y asegurando que todas las partes satisfactoriamente cumplan con los estándares legales. Queremos consolidar una industria donde el marco regulatorio sea aplicado de manera equitativa y transparente, creando un entorno de competencia justa. Buscamos ser un puente entre los distribuidores y el gobierno, facilitando el diálogo y la colaboración para garantizar que las políticas energéticas nacionales beneficien a la sociedad en su conjunto y al desarrollo sostenible.</p>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        <section id="valores-objetivos" className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-teal-600">Nuestros Principios</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Valores y Objetivos
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                {[
                  {
                    name: 'Cumplimiento de la Legislación Vigente',
                    description: 'Nos aseguramos de que todas nuestras operaciones respetan estrictamente las normativas locales, nacionales e internacionales.',
                    icon: Shield,
                  },
                  {
                    name: 'Innovación',
                    description: 'Promovemos el uso de tecnología avanzada que optimiza el proceso de distribución, mejorando la eficiencia operativa y garantizando la trazabilidad.',
                    icon: Briefcase,
                  },
                  {
                    name: 'Sostenibilidad',
                    description: 'Incentivamos a nuestros miembros a implementar prácticas que minimicen el impacto ambiental, con el objetivo de reducir la huella de carbono en toda la cadena de valor.',
                    icon: Leaf,
                  },
                  {
                    name: 'Seguridad',
                    description: 'La seguridad es nuestro pilar  principal. Trabajamos para garantizar que todos los procesos de almacenamiento, transporte y entrega cumplan con los más altos estándares de seguridad establecidos por las normativas.',
                    icon: Shield,
                  },
                  {
                    name: 'Compromiso con la Comunidad',
                    description: 'Apoyamos la educación y el desarrollo de las comunidades donde operamos.',
                    icon: Users,
                  },
                ].map((item) => (
                  <div key={item.name} className="flex flex-col items-start">
                    <div className="rounded-md bg-teal-500 p-2 text-white">
                      <item.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <dt className="mt-4 font-semibold text-gray-900">{item.name}</dt>
                    <dd className="mt-2 leading-7 text-gray-600">{item.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <section id="servicios" className="bg-gray-100 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-teal-600">Nuestros Servicios</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Cómo ayudamos a nuestros asociados
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle>El rol de los distribuidores de GLP</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Los distribuidores de GLP son fundamentales para garantizar que este recurso llegue de manera segura y eficiente a hogares, empresas e industrias. Actúan como el eslabón principal en la cadena de suministro, gestionando desde el almacenamiento y transporte hasta la entrega del gas licuado en cilindros o a granel.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Beneficios del GLP en distintas industrias</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Agricultura: En invernaderos y secado de cultivos.</li>
                      <li>Industria alimentaria: Utilizado en hornos y procesos de cocción.</li>
                      <li>Sector industrial: Ideal para procesos que requieren alta eficiencia térmica.</li>
                      <li>Transporte y automoción: Como combustible alternativo más limpio.</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Innovaciones y prácticas actualizadas</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Los distribuidores han adoptado soluciones tecnológicas que optimizan la logística, con sistemas de monitoreo en tiempo real. Además, promueven el uso responsable de GLP a través de campañas educativas sobre su manipulación segura y eficiente.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section id="consejo-directivo" className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-teal-600">Nuestro Equipo</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Consejo Directivo
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl">
              <ul className="space-y-4">
                <li>Presidente: Dario Simonetti</li>
                <li>Secretario: Fernando Bolis</li>
                <li>Tesorero: Miguel Maldonado</li>
                <li>1° Vocal titular: Dario Cardozo</li>
                <li>2° Vocal titular: Maximiliano Baro</li>
                <li>1° Vocal Suplente: Gabriel Migliasso</li>
                <li>Revisor de Cuentas Titular: Gabriel Axel Isleño</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="normativas" className="bg-gray-100 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-teal-600">Regulaciones</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Normativas y Regulaciones
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl">
              <p className="text-lg leading-8 text-gray-600">
                Aquí encontrarás información sobre reglamentaciones de seguridad, estructurada como una guía interactiva y accesible para los usuarios. Esta sección se actualizará regularmente con las últimas normativas y regulaciones del sector.
              </p>
            </div>
          </div>
        </section>

        <section id="noticias" className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-teal-600">Actualidad</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Noticias y Actualizaciones
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3">
                {[1, 2, 3].map((item) => (
                  <Card key={item}>
                    <CardHeader>
                      <CardTitle>Noticia {item}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Aquí se presentarán novedades del sector con un formato más dinámico, como un blog de artículos o actualizaciones periódicas.</p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="link">
                        Leer más <span aria-hidden="true">→</span>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contacto" className="bg-gray-100 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-teal-600">Contáctanos</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Estamos aquí para ayudarte
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl">
              <p className="text-lg leading-8 text-gray-600 text-center">
                La información de contacto estará disponible próximamente. Estamos configurando los medios de comunicación para atenderte de la mejor manera posible.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-center text-lg font-semibold leading-8 text-gray-900 mb-8">
              Nuestros Asociados
            </h2>
            <Carousel className="w-full max-w-xl mx-auto">
              <CarouselContent>
                {partners.map((partner, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <Image
                            src={partner.logo}
                            alt={partner.name}
                            width={200}
                            height={100}
                            className="max-w-full h-auto object-contain"
                          />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <Image
            src={Logo}
            alt="CAFADIGAS"
            width={300}
            height={150}
            className="h-48 w-auto object-contain"
          />
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Institucional</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.find(item => item.name === 'Institucional')?.children?.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Qué es el GLP</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.find(item => item.name === 'Qué es el GLP')?.children?.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24 lg:flex lg:items-center lg:justify-between">
          <div>
            <h3 className="text-sm font-semibold leading-6 text-white">Suscríbete a nuestro boletín</h3>
            <p className="mt-2 text-sm leading-6 text-gray-300">
              Las últimas noticias, artículos y recursos, enviados a tu bandeja de entrada semanalmente.
            </p>
          </div>
          <form className="mt-6 sm:flex sm:max-w-md lg:mt-0">
            <label htmlFor="email-address" className="sr-only">
              Dirección de correo electrónico
            </label>
            <input
              type="email"
              name="email-address"
              id="email-address"
              autoComplete="email"
              required
              className="w-full min-w-0 appearance-none rounded-md border-0 bg-white/5 px-3 py-1.5 text-base text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-teal-500 sm:w-56 sm:text-sm sm:leading-6"
              placeholder="Ingresa tu email"
            />
            <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
              <Button type="submit">
                Suscribirse
              </Button>
            </div>
          </form>
        </div>
        <div className="mt-8 border-t border-white/10 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            <Link href="#" className="text-gray-500 hover:text-gray-400">
              <span className="sr-only">Facebook</span>
              <Facebook className="h-6 w-6" aria-hidden="true" />
            </Link>
            <Link href="#" className="text-gray-500 hover:text-gray-400">
              <span className="sr-only">Twitter</span>
              <Twitter className="h-6 w-6" aria-hidden="true" />
            </Link>
            <Link href="#" className="text-gray-500 hover:text-gray-400">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-6 w-6" aria-hidden="true" />
            </Link>
          </div>
          <p className="mt-8 text-xs leading-5 text-gray-400 md:order-1 md:mt-0">
            &copy; 2023 CAFADIGAS. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
{'}'}
    </div>
  )
}
