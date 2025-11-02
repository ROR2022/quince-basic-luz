"use client"

import { useState, useRef, type FormEvent } from "react"
import { useInView } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { toast } from "@/components/ui/use-toast"
import { basicDemoData } from "./data/basic-demo-data"
import { getWhatsAppService, type MessageData } from "@/utils/whatsappService"

export function BasicAttendance() {
  const [name, setName] = useState("")
  const [attendance, setAttendance] = useState<string | null>(null)
  const [guests, setGuests] = useState(1)
  const [message, setMessage] = useState("")
  const [phone, setPhone] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!name || !attendance || !phone) {
      toast({
        title: "Error",
        description: "Por favor completa todos los campos requeridos.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      // Preparar datos para WhatsApp
      const messageData: MessageData = {
        name: name.trim(),
        phone: phone.trim(),
        attendance: attendance === "yes" ? "si" : "no",
        guests: attendance === "yes" ? guests : 0,
        comments: message.trim() || undefined
      }

      // Obtener servicio de WhatsApp y enviar
      const whatsappService = getWhatsAppService()
      const result = await whatsappService.sendConfirmation(messageData)

      if (result.success) {
        toast({
          title: "¡Mensaje enviado!",
          description: "Se ha abierto WhatsApp con tu confirmación. Solo presiona enviar.",
        })

        // Reset form después de un breve delay
        setTimeout(() => {
          setName("")
          setAttendance(null)
          setGuests(1)
          setMessage("")
          setPhone("")
        }, 1000)
      } else {
        throw new Error(result.error || "Error al abrir WhatsApp")
      }

    } catch (error) {
      console.error("Error al enviar confirmación:", error)
      toast({
        title: "Error",
        description: "No se pudo abrir WhatsApp. Intenta nuevamente.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div
        ref={ref}
        className={`max-w-3xl mx-auto text-center transition-all duration-1000 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="section-title">{basicDemoData.attendance.title}</h2>

        <div 
        style={{display:'none'}}
        className="mt-4 mb-8 text-center">
          <p className="text-lg">Respetuosamente</p>
          <p className="text-lg font-medium my-2">&lt;{basicDemoData.event.restrictions}&gt;</p>
          <p className="text-lg">{basicDemoData.attendance.subtitle}</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mt-8">
          <form onSubmit={handleSubmit} className="space-y-6 text-left">
            <div>
              <Label htmlFor="name" className="text-base">
                {basicDemoData.attendance.fields.name}
              </Label>
              <Input
                id="name"
                placeholder="Ingresa tu nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="mt-1"
              />
            </div>

            <div>
              <Label className="text-base mb-2 block">{basicDemoData.attendance.fields.response}</Label>
              <RadioGroup value={attendance || ""} onValueChange={setAttendance}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="no" />
                  <Label htmlFor="no">{basicDemoData.attendance.fields.responseOptions.no}</Label>
                </div>
                <div className="flex items-center space-x-2 mt-2">
                  <RadioGroupItem value="yes" id="yes" />
                  <Label htmlFor="yes">{basicDemoData.attendance.fields.responseOptions.yes}</Label>
                </div>
              </RadioGroup>
            </div>

            {attendance === "yes" && (
              <div>
                <Label htmlFor="guests" className="text-base">
                  Número de personas que asistirán
                </Label>
                <div className="flex items-center space-x-3 mt-1">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => setGuests(Math.max(1, guests - 1))}
                    disabled={guests <= 1}
                  >
                    -
                  </Button>
                  <Input
                    id="guests"
                    type="number"
                    min="1"
                    max="10"
                    value={guests}
                    onChange={(e) => setGuests(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-20 text-center"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => setGuests(Math.min(10, guests + 1))}
                    disabled={guests >= 10}
                  >
                    +
                  </Button>
                  <span className="text-sm text-gray-600">
                    {guests === 1 ? "persona" : "personas"}
                  </span>
                </div>
              </div>
            )}

            <div>
              <Label htmlFor="message" className="text-base">
                Mensaje especial (opcional)
              </Label>
              <Textarea
                id="message"
                placeholder="Nombres de acompañantes, alergias, mensaje especial, etc."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="phone" className="text-base">
                {basicDemoData.attendance.fields.phone}
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="Para enviarte algún aviso de importancia."
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="mt-1"
              />
            </div>

            <div className="text-center pt-4">
              <Button
                type="submit"
                className="w-full bg-black hover:bg-primary-light text-white py-6"
                disabled={isSubmitting}
              >
                {isSubmitting ? "ENVIANDO POR WHATSAPP..." : "ENVIAR VÍA WHATSAPP"}
              </Button>
              <p className="text-sm text-gray-600 mt-2">
                Se abrirá WhatsApp con tu mensaje ya preparado
              </p>
            </div>

            
          </form>
        </div>
      </div>
    </section>
  )
} 