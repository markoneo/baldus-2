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
    <section id="kontakt" className="py-12 sm:py-16 lg:py-32 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-20">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 lg:mb-8">Stopite v stik z nami</h3>
            <div className="space-y-6 lg:space-y-8">
              <div className="flex items-center space-x-4" data-testid="contact-phone">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gold-light rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="text-gold w-6 h-6" />
                </div>
                <div>
                  <div className="font-medium text-white">Telefon</div>
                  <a href="tel:+38641288455" className="text-gold hover:underline font-medium text-lg">+386 41 288 455</a>
                </div>
              </div>
              <div className="flex items-center space-x-4" data-testid="contact-email">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gold-light rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="text-gold w-6 h-6" />
                </div>
                <div>
                  <div className="font-medium text-white">E-pošta</div>
                  <a href="mailto:info@baldus.si" className="text-gold hover:underline font-medium">info@baldus.si</a>
                </div>
              </div>
              <div className="flex items-center space-x-4" data-testid="contact-hours">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gold-light rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="text-gold w-6 h-6" />
                </div>
                <div>
                  <div className="font-medium text-white">Delovni čas</div>
                  <div className="text-gray-300">pon–pet: 8.00–17.00</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div id="contact-form" className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-8 mt-8 lg:mt-0">
            <div className="border-b border-gray-100 pb-4 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Pošljite nam sporočilo</h3>
              <p className="text-sm text-gray-500">Izpolnite obrazec spodaj in kontaktirali vas bomo v 24 urah.</p>
            </div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5" data-testid="contact-form">
                <div className="grid sm:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-700">Ime *</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Vaše ime" 
                            {...field} 
                            data-testid="input-firstName" 
                            className="h-11 bg-gray-50 border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 rounded-lg text-gray-900 placeholder:text-gray-400" 
                          />
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
                        <FormLabel className="text-sm font-medium text-gray-700">Priimek *</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Vaš priimek" 
                            {...field} 
                            data-testid="input-lastName" 
                            className="h-11 bg-gray-50 border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 rounded-lg text-gray-900 placeholder:text-gray-400" 
                          />
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
                      <FormLabel className="text-sm font-medium text-gray-700">E-pošta *</FormLabel>
                      <FormControl>
                        <Input 
                          type="email" 
                          placeholder="vasa.eposta@example.com" 
                          {...field} 
                          data-testid="input-email" 
                          className="h-11 bg-gray-50 border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 rounded-lg text-gray-900 placeholder:text-gray-400" 
                        />
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
                      <FormLabel className="text-sm font-medium text-gray-700">Telefon</FormLabel>
                      <FormControl>
                        <Input 
                          type="tel" 
                          placeholder="+386 XX XXX XXX" 
                          {...field} 
                          value={field.value || ""} 
                          data-testid="input-phone" 
                          className="h-11 bg-gray-50 border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 rounded-lg text-gray-900 placeholder:text-gray-400" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="damageType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-gray-700">Vrsta škode</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value || ""}>
                        <FormControl>
                          <SelectTrigger data-testid="select-damageType" className="h-11 bg-gray-50 border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 rounded-lg text-gray-900">
                            <SelectValue placeholder="Izberite vrsto škode" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-white border-gray-200 shadow-lg rounded-lg">
                          <SelectItem value="prometna">Prometna nesreča</SelectItem>
                          <SelectItem value="delo">Poškodba pri delu</SelectItem>
                          <SelectItem value="zdravniška">Zdravniška napaka</SelectItem>
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
                      <FormLabel className="text-sm font-medium text-gray-700">Opis primera *</FormLabel>
                      <FormControl>
                        <Textarea 
                          rows={3} 
                          placeholder="Opišite vaš primer..." 
                          {...field} 
                          data-testid="textarea-description"
                          className="bg-gray-50 border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 rounded-lg text-gray-900 placeholder:text-gray-400 resize-none min-h-[80px]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <div className="flex items-start space-x-3">
                    <Checkbox required data-testid="checkbox-consent" className="mt-0.5 h-4 w-4 border-gray-300 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600 rounded-full flex-shrink-0" />
                    <label className="text-sm text-gray-600 leading-relaxed">
                      Soglašam s <a href="#" className="text-blue-600 hover:text-blue-700 hover:underline transition-colors">pogoji uporabe</a> in{" "}
                      <a href="#" className="text-blue-600 hover:text-blue-700 hover:underline transition-colors">varstvom osebnih podatkov</a>.*
                    </label>
                  </div>
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white h-12 rounded-lg font-medium shadow-sm hover:shadow-md transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={contactMutation.isPending}
                  data-testid="button-submit"
                >
                  {contactMutation.isPending ? (
                    <div className="flex items-center">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Pošiljam...
                    </div>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Pošljite sporočilo
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </div>
          </div>
        </div>
    </section>
  );
}