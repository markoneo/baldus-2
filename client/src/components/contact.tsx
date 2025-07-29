import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactMessageSchema } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Phone, Mail, Clock, Send, ArrowRight } from "lucide-react";
import type { InsertContactMessage } from "@shared/schema";

export default function Contact() {
  const { toast } = useToast();
  const [isDamageTypeOpen, setIsDamageTypeOpen] = useState(false);

  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      damageType: "",
      description: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactMessage) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Sporočilo poslano",
        description: "Vaše sporočilo je bilo uspešno poslano. Kontaktirali vas bomo v najkrajšem času.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Napaka",
        description: "Prišlo je do napake pri pošiljanju sporočila. Prosimo, poskusite znova.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContactMessage) => {
    contactMutation.mutate(data);
  };

  return (
    <section id="kontakt" className="py-20 lg:py-32 bg-gray-900">
      <div className="container-modern">
          <div className="grid lg:grid-cols-2 gap-20">
          {/* Contact Information */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Stopite v stik z nami</h3>
            <div className="space-y-8">
              <div className="flex items-center space-x-4" data-testid="contact-phone">
                <div className="w-12 h-12 bg-gold-light rounded-xl flex items-center justify-center">
                  <Phone className="text-gold w-6 h-6" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">Telefon</div>
                  <a href="tel:+38641288455" className="text-gold hover:underline font-medium">+386 41 288 455</a>
                </div>
              </div>
              <div className="flex items-center space-x-4" data-testid="contact-email">
                <div className="w-12 h-12 bg-gold-light rounded-xl flex items-center justify-center">
                  <Mail className="text-gold w-6 h-6" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">E-pošta</div>
                  <a href="mailto:info@baldus.si" className="text-gold hover:underline font-medium">info@baldus.si</a>
                </div>
              </div>
              <div className="flex items-center space-x-4" data-testid="contact-hours">
                <div className="w-12 h-12 bg-gold-light rounded-xl flex items-center justify-center">
                  <Clock className="text-gold w-6 h-6" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">Delovni čas</div>
                  <div className="text-gray-600">pon–pet: 8.00–17.00</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div id="contact-form" className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Pošljite nam sporočilo</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-testid="contact-form">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Ime *</FormLabel>
                        <FormControl>
                          <Input placeholder="Vaše ime" {...field} data-testid="input-firstName" className="bg-white border-gray-300" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Priimek *</FormLabel>
                        <FormControl>
                          <Input placeholder="Vaš priimek" {...field} data-testid="input-lastName" className="bg-white border-gray-300" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>E-pošta *</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="vasa.eposta@example.com" {...field} data-testid="input-email" className="bg-white border-gray-300" />
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
                      <FormLabel>Telefon</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="+386 XX XXX XXX" {...field} value={field.value || ""} data-testid="input-phone" className="bg-white border-gray-300" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                            className="bg-white hover:bg-blue-50 focus:bg-blue-50 cursor-pointer p-3 transition-colors duration-150"
                <FormField
                  control={form.control}
                  name="damageType"
                  render={({ field }) => (
                    <FormItem 
                            className="bg-white hover:bg-blue-50 focus:bg-blue-50 cursor-pointer p-3 transition-colors duration-150"
                        isDamageTypeOpen 
                          ? 'bg-blue-50 border border-blue-200 shadow-sm' 
                          : 'bg-transparent'
                      }`}
                    >
                            className="bg-white hover:bg-blue-50 focus:bg-blue-50 cursor-pointer p-3 transition-colors duration-150"
                      <Select 
                        onValueChange={field.onChange} 
                        defaultValue={field.value || ""}
                        onOpenChange={setIsDamageTypeOpen}
                      >
                            className="bg-white hover:bg-blue-50 focus:bg-blue-50 cursor-pointer p-3 transition-colors duration-150"
                          <SelectTrigger data-testid="select-damageType" className="bg-white border-gray-300">
                            <SelectValue placeholder="Izberite vrsto škode" />
                            className={`bg-white border-gray-300 transition-all duration-200 ${
                              isDamageTypeOpen 
                                ? 'border-blue-400 ring-2 ring-blue-100' 
                            className="bg-white hover:bg-blue-50 focus:bg-blue-50 cursor-pointer p-3 transition-colors duration-150"
                            }`}
                        </FormControl>
                        <SelectContent className="z-50">
                          className="z-50 bg-white border border-gray-300 shadow-lg rounded-md max-h-60 overflow-y-auto"
                          <SelectItem value="delo">Poškodba pri delu</SelectItem>
                            className="bg-white hover:bg-blue-50 focus:bg-blue-50 cursor-pointer p-3 transition-colors duration-150"
                          <SelectItem value="javne">Nesreča na javnih površinah</SelectItem>
                          <SelectItem value="moralna">Moralna škoda</SelectItem>
                          <SelectItem value="drugo">Drugo</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Opis primera *</FormLabel>
                      <FormControl>
                        <Textarea 
                          rows={4} 
                          placeholder="Opišite vaš primer..." 
                          {...field} 
                          data-testid="textarea-description"
                          className="bg-white border-gray-300"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex items-start space-x-3">
                  <Checkbox required data-testid="checkbox-consent" />
                  <label className="text-sm text-slate">
                    Soglašam s <a href="#" className="text-gold hover:underline">pogoji uporabe</a> in{" "}
                    <a href="#" className="text-gold hover:underline">varstvom osebnih podatkov</a>.*
                  </label>
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg"
                  disabled={contactMutation.isPending}
                  data-testid="button-submit"
                >
                  <Send className="mr-3 h-5 w-5" />
                  {contactMutation.isPending ? "Pošiljam..." : "Pošljite sporočilo"}
                </Button>
              </form>
            </Form>
          </div>
          </div>
        </div>
    </section>
  );
}