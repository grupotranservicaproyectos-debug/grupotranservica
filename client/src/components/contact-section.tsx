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

type ContactFormData = z.infer<typeof contactFormSchema>;

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
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mr-3 sm:mr-4 border-2 border-white/40 shadow-lg">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white">{t('contact.info.phones')}</h3>
                  <p className="text-white font-medium text-sm sm:text-base">+58 414 277 6340</p>
                  <p className="text-white font-medium text-sm sm:text-base">+58 412 441 8890</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mr-3 sm:mr-4 border-2 border-white/40 shadow-lg">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-base sm:text-lg font-bold text-white">{t('contact.info.email')}</h3>
                  <p className="text-white font-medium text-xs sm:text-sm break-words">direccioncomercialtvc@grupotranservica.com</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mr-3 sm:mr-4 border-2 border-white/40 shadow-lg">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-base sm:text-lg font-bold text-white">{t('contact.info.executive')}</h3>
                  <p className="text-white font-medium text-xs sm:text-sm break-words">direccionejecutivatvc@grupotranservica.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mr-3 sm:mr-4 border-2 border-white/40 shadow-lg mt-1">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-base sm:text-lg font-bold text-white">{t('contact.info.address')}</h3>
                  <p className="text-white font-medium text-sm sm:text-base">{t('contact.address.full')}</p>
                </div>
              </div>
              
              <a 
                href="https://wa.me/584142776340?text=Hola%2C%20necesito%20información%20sobre%20transporte%20de%20cargas%20excepcionales" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full sm:w-auto bg-white/25 backdrop-blur-sm text-white mobile-button rounded-xl font-bold hover:bg-white/40 transition-all duration-300 hover-lift border-2 border-white/50 shadow-xl"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 2.079.549 4.090 1.588 5.876L.029 24l6.203-1.539a11.952 11.952 0 005.785 1.539c6.621 0 11.988-5.367 11.988-11.988C23.973 5.367 18.638.001 12.017.001zm5.995 16.987c-.264.714-1.291 1.336-1.953 1.428-.663.094-1.526.141-2.438-.154-1.421-.458-3.025-1.609-4.222-3.003-1.197-1.394-1.967-3.045-2.033-3.192-.066-.147-.541-1.447-.541-2.748 0-1.301.341-1.947.463-2.215.122-.268.268-.335.357-.335h.268c.087 0 .201-.003.291.222.09.225.307.751.334.805.027.054.045.116.009.19-.036.074-.054.121-.108.184-.054.063-.113.14-.162.189-.063.049-.128.101-.055.199.073.098.325.537.697.869.481.427 1.055.705 1.206.784.151.079.239.067.327-.041.088-.108.378-.441.479-.592.101-.151.201-.126.338-.076.137.051.87.41 1.018.485.149.074.249.112.285.174.036.062.036.359-.228 1.073z"/>
                </svg>
                <span className="text-sm sm:text-base">{t('contact.whatsapp')}</span>
              </a>
            </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-8 text-gray-800 shadow-2xl border-2 border-white/30">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
                  className="w-full text-white px-6 py-4 rounded-xl text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg"
                  style={{ backgroundColor: '#155d29' }}
                  onMouseEnter={(e) => { (e.target as HTMLElement).style.backgroundColor = '#0f4a21'; }}
                  onMouseLeave={(e) => { (e.target as HTMLElement).style.backgroundColor = '#155d29'; }}
                  disabled={contactMutation.isPending}
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
