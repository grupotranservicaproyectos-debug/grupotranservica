import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Phone, Mail, MapPin } from "lucide-react";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

const contactFormSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  company: z.string().optional(),
  email: z.string().email("Email inválido"),
  phone: z.string().min(10, "El teléfono debe tener al menos 10 dígitos"),
  cargoType: z.string().optional(),
  estimatedWeight: z.number().positive("El peso debe ser un número positivo").optional(),
  origin: z.string().optional(),
  destination: z.string().optional(),
  description: z.string().min(10, "La descripción debe tener al menos 10 caracteres")
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactSection() {
  const { toast } = useToast();
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      cargoType: "",
      estimatedWeight: undefined,
      origin: "",
      destination: "",
      description: ""
    }
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "¡Solicitud enviada!",
        description: data.message,
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Hubo un error al enviar la solicitud. Inténtalo de nuevo.",
        variant: "destructive",
      });
    }
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  return (
    <section id="contacto" className="py-20 bg-transervica-green text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold mb-6" style={{ color: '#155d29' }}>Solicita tu Cotización</h2>
            <p className="text-xl text-green-100 mb-8">
              Cuéntanos sobre tu proyecto y te proporcionaremos una solución personalizada con la mejor propuesta del mercado.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-transervica-light-green rounded-lg flex items-center justify-center mr-4">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Teléfonos Principales</h3>
                  <p className="text-green-100">+58 414 277 6340</p>
                  <p className="text-green-100">+58 412 441 8890</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-transervica-light-green rounded-lg flex items-center justify-center mr-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Dirección Comercial</h3>
                  <p className="text-green-100">direccioncomercialtvc@grupotranservica.com</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-transervica-light-green rounded-lg flex items-center justify-center mr-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Dirección Ejecutiva</h3>
                  <p className="text-green-100">direccionejecutivatvc@grupotranservica.com</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-transervica-light-green rounded-lg flex items-center justify-center mr-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Ubicación</h3>
                  <p className="text-green-100">Carretera Nacional Maracay Mariara Km 9, Mariara, Edo. Carabobo</p>
                </div>
              </div>
              
              <a 
                href="https://wa.me/584142776340?text=Hola%2C%20necesito%20información%20sobre%20transporte%20de%20cargas%20excepcionales" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-600 transition"
              >
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 2.079.549 4.090 1.588 5.876L.029 24l6.203-1.539a11.952 11.952 0 005.785 1.539c6.621 0 11.988-5.367 11.988-11.988C23.973 5.367 18.638.001 12.017.001zm5.995 16.987c-.264.714-1.291 1.336-1.953 1.428-.663.094-1.526.141-2.438-.154-1.421-.458-3.025-1.609-4.222-3.003-1.197-1.394-1.967-3.045-2.033-3.192-.066-.147-.541-1.447-.541-2.748 0-1.301.341-1.947.463-2.215.122-.268.268-.335.357-.335h.268c.087 0 .201-.003.291.222.09.225.307.751.334.805.027.054.045.116.009.19-.036.074-.054.121-.108.184-.054.063-.113.14-.162.189-.063.049-.128.101-.055.199.073.098.325.537.697.869.481.427 1.055.705 1.206.784.151.079.239.067.327-.041.088-.108.378-.441.479-.592.101-.151.201-.126.338-.076.137.051.87.41 1.018.485.149.074.249.112.285.174.036.062.036.359-.228 1.073z"/>
                </svg>
                Contactar por WhatsApp
              </a>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-8 text-gray-800">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nombre *</FormLabel>
                        <FormControl>
                          <Input placeholder="Tu nombre completo" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Empresa</FormLabel>
                        <FormControl>
                          <Input placeholder="Nombre de la empresa" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email *</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="tu@email.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Teléfono *</FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder="+58 424 123 4567" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="cargoType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tipo de Carga</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Seleccionar tipo" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="equipos-industriales">Equipos Industriales</SelectItem>
                            <SelectItem value="maquinaria-pesada">Maquinaria Pesada</SelectItem>
                            <SelectItem value="turbinas">Turbinas</SelectItem>
                            <SelectItem value="equipos-petroleros">Equipos Petroleros</SelectItem>
                            <SelectItem value="construccion-naval">Construcción Naval</SelectItem>
                            <SelectItem value="otros">Otros</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="estimatedWeight"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Peso Estimado (Toneladas)</FormLabel>
                        <FormControl>
                          <Input 
                            type="number" 
                            placeholder="100" 
                            {...field}
                            onChange={(e) => field.onChange(e.target.value ? Number(e.target.value) : undefined)}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="origin"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Origen</FormLabel>
                        <FormControl>
                          <Input placeholder="Ciudad de origen" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="destination"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Destino</FormLabel>
                        <FormControl>
                          <Input placeholder="Ciudad de destino" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Descripción del Proyecto *</FormLabel>
                      <FormControl>
                        <Textarea 
                          rows={4} 
                          placeholder="Describe tu proyecto, dimensiones, características especiales, fecha requerida, etc."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-transervica-green text-white px-6 py-4 rounded-lg text-lg font-semibold hover:bg-green-800 transition"
                  disabled={contactMutation.isPending}
                >
                  {contactMutation.isPending ? "Enviando..." : "Solicitar Cotización Gratuita"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
