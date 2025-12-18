import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MessageSquare, User, Loader2 } from 'lucide-react';

const contactFormSchema = z.object({
  nombre: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  correoContacto: z.string().email('Email inválido'),
  telefono: z.string().min(10, 'Teléfono inválido'),
  asunto: z.string().min(5, 'El asunto debe tener al menos 5 caracteres'),
  mensaje: z.string().min(20, 'El mensaje debe tener al menos 20 caracteres'),
  canal: z.string().default('blog-seo'),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function BlogContactForm({ blogTitle }: { blogTitle: string }) {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      nombre: '',
      correoContacto: '',
      telefono: '',
      asunto: `Consulta desde: ${blogTitle}`,
      mensaje: '',
      canal: 'blog-seo',
    },
  });

  const submitMutation = useMutation({
    mutationFn: (data: ContactFormData) => apiRequest('/api/contacto', 'POST', data),
    onSuccess: () => {
      setSubmitted(true);
      toast({
        title: '¡Mensaje enviado!',
        description: 'Nos pondremos en contacto con usted pronto.',
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: 'Error',
        description: 'No se pudo enviar el mensaje. Intente nuevamente.',
        variant: 'destructive',
      });
    },
  });

  if (submitted) {
    return (
      <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-500 rounded-xl p-8 text-center">
        <div className="text-6xl mb-4">✅</div>
        <h3 className="text-2xl font-bold text-green-700 dark:text-green-400 mb-2">
          ¡Mensaje Recibido!
        </h3>
        <p className="text-gray-700 dark:text-gray-300">
          Gracias por contactarnos. Un asesor de Grupo Transervica se comunicará con usted pronto.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-white to-green-50/30 dark:from-gray-800 dark:to-green-900/20 rounded-xl shadow-lg border-2 border-green-200 dark:border-green-700 p-8">
      <div className="text-center mb-6">
        <h3 className="text-3xl font-bold text-[#155d29] dark:text-green-400 mb-2">
          📞 Solicite una Cotización Gratuita
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
          Complete el formulario y nuestro equipo le responderá en menos de 24 horas
        </p>
      </div>

      <Form {...form}>
        <form 
          onSubmit={form.handleSubmit((data) => submitMutation.mutate(data))} 
          className="space-y-6"
          role="form"
          aria-label="Formulario de solicitud de cotización - Grupo Transervica"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="nombre"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Nombre Completo
                  </FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Juan Pérez" 
                      {...field} 
                      className="border-green-200 focus:border-green-500 min-h-[48px]"
                      data-testid="input-nombre"
                      aria-label="Nombre completo"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="telefono"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Teléfono
                  </FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="+58 412-1234567" 
                      {...field}
                      className="border-green-200 focus:border-green-500 min-h-[48px]"
                      data-testid="input-telefono"
                      aria-label="Número de teléfono"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="correoContacto"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Email
                </FormLabel>
                <FormControl>
                  <Input 
                    type="email" 
                    placeholder="[email protected]" 
                    {...field}
                    className="border-green-200 focus:border-green-500 min-h-[48px]"
                    data-testid="input-email"
                    aria-label="Correo electrónico"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="asunto"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  Asunto
                </FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Necesito cotización para transporte" 
                    {...field}
                    className="border-green-200 focus:border-green-500 min-h-[48px]"
                    data-testid="input-asunto"
                    aria-label="Asunto de la consulta"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="mensaje"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mensaje / Descripción del Servicio</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Describa su necesidad de transporte: tipo de carga, peso estimado, origen, destino, etc."
                    rows={5}
                    {...field}
                    className="border-green-200 focus:border-green-500 min-h-[120px]"
                    data-testid="input-mensaje"
                    aria-label="Mensaje o descripción del servicio"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            disabled={submitMutation.isPending}
            className="w-full bg-[#155d29] hover:bg-[#0f4a21] text-white text-lg py-6 rounded-lg transition-all transform hover:scale-105 min-h-[48px]"
            data-testid="button-enviar-contacto"
            aria-label="Enviar consulta de cotización"
          >
            {submitMutation.isPending ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Enviando...
              </>
            ) : (
              '📨 Enviar Consulta'
            )}
          </Button>
        </form>
      </Form>

      <div className="mt-6 pt-6 border-t border-green-200 dark:border-green-700">
        <p className="text-center text-sm text-gray-600 dark:text-gray-400">
          🔒 Sus datos están protegidos y solo serán usados para responder su consulta
        </p>
      </div>
    </div>
  );
}
