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
import { useLanguage } from "../contexts/LanguageContext";

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

const contactoFormSchema = z.object({
  nombre: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  correoContacto: z.string().email("Email inválido"),
  telefono: z.string().min(10, "El teléfono debe tener al menos 10 dígitos"),
  asunto: z.string().min(3, "El asunto debe tener al menos 3 caracteres"),
  mensaje: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
  canal: z.string().default("web"),
  estado: z.string().default("pendiente"),
  correosNotificados: z.array(z.string()).default([])
});

type ContactFormData = z.infer<typeof contactFormSchema>;
type ContactoFormData = z.infer<typeof contactoFormSchema>;

export default function ContactSection() {
  const { toast } = useToast();
  const { t } = useLanguage();
  
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

  // Honeypot state for anti-spam (hidden field that bots fill)
  const [honeypot, setHoneypot] = useState("");

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      // Transform to new endpoint format with all fields
      const contactoData = {
        nombre: data.name,
        correoContacto: data.email,
        telefono: data.phone,
        asunto: data.cargoType || "Solicitud de cotización",
        mensaje: data.description,
        empresa: data.company || undefined,
        tipoCarga: data.cargoType || undefined,
        pesoEstimado: data.estimatedWeight || undefined,
        origen: data.origin || undefined,
        destino: data.destination || undefined,
        honeypot: honeypot, // Anti-spam honeypot field
      };

      const response = await apiRequest("POST", "/api/contacto", contactoData);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "¡Mensaje enviado!",
        description: data.message,
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Hubo un error al enviar el mensaje. Inténtalo de nuevo.",
        variant: "destructive",
      });
    }
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  return (
    <section id="contacto" className="py-12 sm:py-16 lg:py-20 text-white bg-[#155d29]">
      <div className="max-w-7xl mx-auto mobile-padding">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
          <div className="relative bg-gradient-to-br from-slate-900/80 via-slate-800/70 to-slate-700/60 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-white/10 shadow-2xl animate-slide-up">
            {/* Elegant background pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/10 rounded-2xl"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-radial from-white/10 to-transparent rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-radial from-emerald-400/20 to-transparent rounded-full blur-xl"></div>
            
            {/* Content with relative positioning */}
            <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-white text-wrap-balance">{t('contact.title')}</h2>
            <p className="mobile-text lg:text-xl text-white mb-6 sm:mb-8 leading-relaxed font-bold text-wrap-pretty">
              {t('contact.subtitle')}
            </p>
            
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-emerald-400/30 backdrop-blur-sm rounded-xl flex items-center justify-center mr-3 sm:mr-4 border-2 border-emerald-300/50 shadow-lg">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-300" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white">{t('contact.info.phones')}</h3>
                  <p className="text-white font-medium text-sm sm:text-base">+58 422-6361047</p>
                  <p className="text-white font-medium text-sm sm:text-base">+58 412-367-5636</p>
                  <p className="text-white font-medium text-sm sm:text-base">+58 414-277-6340</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-emerald-400/30 backdrop-blur-sm rounded-xl flex items-center justify-center mr-3 sm:mr-4 border-2 border-emerald-300/50 shadow-lg">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-300" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-base sm:text-lg font-bold text-white">{t('contact.info.email')}</h3>
                  <p className="text-white font-medium text-xs sm:text-sm break-words">direccioncomercialtvc@grupotranservica.com</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-emerald-400/30 backdrop-blur-sm rounded-xl flex items-center justify-center mr-3 sm:mr-4 border-2 border-emerald-300/50 shadow-lg">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-300" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-base sm:text-lg font-bold text-white">{t('contact.info.executive')}</h3>
                  <p className="text-white font-medium text-xs sm:text-sm break-words">direccionejecutivatvc@grupotranservica.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-emerald-400/30 backdrop-blur-sm rounded-xl flex items-center justify-center mr-3 sm:mr-4 border-2 border-emerald-300/50 shadow-lg mt-1">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-300" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-base sm:text-lg font-bold text-white">{t('contact.info.address')}</h3>
                  <p className="text-white font-medium text-sm sm:text-base">{t('contact.address.full')}</p>
                </div>
              </div>
              
              <a 
                href="https://wa.me/message/WAKKACM55ESHC1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full bg-gradient-to-r from-emerald-400 to-green-400 text-gray-900 px-6 sm:px-8 py-4 sm:py-5 rounded-2xl text-lg sm:text-xl font-bold hover:from-emerald-300 hover:to-green-300 transition-all duration-500 transform hover:scale-110 hover:shadow-2xl border-2 border-emerald-300 animate-pulse hover:animate-none shadow-xl hover:shadow-emerald-400/50"
                style={{ boxShadow: '0 0 30px rgba(16, 185, 129, 0.4)' }}
                data-testid="button-whatsapp-contact"
              >
                <svg className="w-7 h-7 sm:w-8 sm:h-8 mr-3 sm:mr-4 animate-bounce" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M16 0c-8.837 0-16 7.163-16 16 0 2.825 0.737 5.607 2.137 8.048l-2.137 7.952 7.933-2.127c2.42 1.396 5.202 2.127 8.067 2.127 8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 29.467c-2.482 0-4.908-0.646-7.07-1.87l-0.507-0.292-4.713 1.262 1.262-4.669-0.292-0.508c-1.207-2.100-1.847-4.507-1.847-6.924 0-7.435 6.050-13.485 13.485-13.485s13.485 6.050 13.485 13.485c0 7.435-6.050 13.485-13.485 13.485zM21.655 18.762c-0.362-0.181-2.138-1.055-2.470-1.175s-0.573-0.181-0.815 0.181c-0.241 0.362-0.935 1.175-1.147 1.417s-0.422 0.271-0.784 0.090c-0.362-0.181-1.529-0.563-2.913-1.797-1.077-0.960-1.804-2.144-2.016-2.506s-0.022-0.558 0.159-0.738c0.163-0.163 0.362-0.422 0.543-0.634s0.241-0.362 0.362-0.603c0.121-0.241 0.060-0.452-0.030-0.634s-0.815-1.963-1.117-2.688c-0.294-0.706-0.593-0.611-0.815-0.622-0.211-0.011-0.452-0.013-0.693-0.013s-0.634 0.090-0.965 0.452c-0.332 0.362-1.268 1.239-1.268 3.019s1.298 3.502 1.479 3.744c0.181 0.241 2.549 3.892 6.177 5.459 0.863 0.373 1.537 0.596 2.063 0.763 0.867 0.276 1.656 0.237 2.281 0.144 0.696-0.104 2.138-0.874 2.440-1.718s0.302-1.567 0.211-1.718c-0.090-0.151-0.332-0.241-0.695-0.422z"/>
                </svg>
                <span className="font-extrabold">{t('contact.whatsapp')}</span>
              </a>
            </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-8 text-gray-800 shadow-2xl border-2 border-white/30">
            <Form {...form}>
              <form 
                onSubmit={form.handleSubmit(onSubmit)} 
                className="space-y-6"
                role="form"
                aria-label="Formulario de solicitud de cotización - TRANSERVICA"
                data-testid="form-contact-quote"
              >
                {/* Honeypot field - hidden from users, visible to bots */}
                <div style={{ position: 'absolute', left: '-9999px', opacity: 0 }} aria-hidden="true">
                  <label htmlFor="website">Website</label>
                  <input 
                    type="text" 
                    id="website" 
                    name="website" 
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('contact.form.name')} *</FormLabel>
                        <FormControl>
                          <Input placeholder={t('contact.form.name.placeholder')} {...field} />
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
                        <FormLabel>{t('contact.form.company')}</FormLabel>
                        <FormControl>
                          <Input placeholder={t('contact.form.company.placeholder')} {...field} />
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
                        <FormLabel>{t('contact.form.email')} *</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder={t('contact.form.email.placeholder')} {...field} />
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
                        <FormLabel>{t('contact.form.phone')} *</FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder={t('contact.form.phone.placeholder')} {...field} />
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
                        <FormLabel>{t('contact.form.cargo')}</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder={t('contact.form.cargo.placeholder')} />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="equipos-industriales">{t('contact.form.cargo.industrial')}</SelectItem>
                            <SelectItem value="maquinaria-pesada">{t('contact.form.cargo.machinery')}</SelectItem>
                            <SelectItem value="turbinas">{t('contact.form.cargo.turbines')}</SelectItem>
                            <SelectItem value="equipos-petroleros">{t('contact.form.cargo.oil')}</SelectItem>
                            <SelectItem value="construccion-naval">{t('contact.form.cargo.naval')}</SelectItem>
                            <SelectItem value="otros">{t('contact.form.cargo.others')}</SelectItem>
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
                        <FormLabel>{t('contact.form.weight')}</FormLabel>
                        <FormControl>
                          <Input 
                            type="number" 
                            placeholder={t('contact.form.weight.placeholder')} 
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
                        <FormLabel>{t('contact.form.origin')}</FormLabel>
                        <FormControl>
                          <Input placeholder={t('contact.form.origin.placeholder')} {...field} />
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
                        <FormLabel>{t('contact.form.destination')}</FormLabel>
                        <FormControl>
                          <Input placeholder={t('contact.form.destination.placeholder')} {...field} />
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
                      <FormLabel>{t('contact.form.description')} *</FormLabel>
                      <FormControl>
                        <Textarea 
                          rows={4} 
                          placeholder={t('contact.form.description.placeholder')}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full text-white px-6 py-4 rounded-xl text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg min-h-[48px]"
                  style={{ backgroundColor: '#155d29' }}
                  onMouseEnter={(e) => { (e.target as HTMLElement).style.backgroundColor = '#0f4a21'; }}
                  onMouseLeave={(e) => { (e.target as HTMLElement).style.backgroundColor = '#155d29'; }}
                  disabled={contactMutation.isPending}
                  data-testid="button-submit-quote"
                  aria-label="Enviar solicitud de cotización"
                >
                  {contactMutation.isPending ? t('contact.form.sending') : t('contact.form.submit')}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
