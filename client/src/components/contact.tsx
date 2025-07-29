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
    <section id="kontakt" className="py-20 lg:py-32 bg-gray-900">
      <div className="container-modern">
        <div className="bg-white rounded-3xl p-16 relative overflow-hidden">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              Revolucionirajmo način vašega dela
            </h2>
            <p className="text-xl text-gray-600 mb-8">Začnite svojo 14-dnevno brezplačno preizkusno dobo še danes</p>
            
            <Button 
              onClick={() => {
                const form = document.getElementById('contact-form');
                form?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg inline-flex items-center"
            >
              Začnite zdaj
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          {/* Dashboard mockup */}
          <div className="bg-gray-50 rounded-2xl p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-semibold text-gray-900">Primeri skozi čas</h3>
              <div className="flex space-x-2">
                <span className="w-3 h-3 bg-blue-600 rounded-full"></span>
                <span className="text-sm text-gray-600">Odprti primeri</span>
                <span className="w-3 h-3 bg-purple-600 rounded-full ml-4"></span>
                <span className="text-sm text-gray-600">Zaključeni primeri</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="font-semibold mb-4">Odprti primeri po področjih</h4>
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 relative">
                    <div className="w-full h-full border-8 border-orange-300 rounded-full relative">
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="text-2xl font-bold">24</div>
                        <div className="text-sm text-gray-600">Skupaj primerov</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center space-x-4 text-sm">
                    <div className="flex items-center">
                      <span className="w-3 h-3 bg-orange-400 rounded-full mr-1"></span>
                      <span>Prometne</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-3 h-3 bg-purple-400 rounded-full mr-1"></span>
                      <span>Delo</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-3 h-3 bg-blue-400 rounded-full mr-1"></span>
                      <span>Zdravstvo</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="bg-white rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-500">To. 13 Nov 2024</span>
                    <span className="bg-gray-100 text-xs px-2 py-1 rounded">100 Email</span>
                  </div>
                  <div className="h-24 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Contact Form Section */}
      <div className="bg-white py-20">
        <div className="container-modern">
          <div className="grid lg:grid-cols-2 gap-20">
          {/* Contact Information */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Stopite v stik z nami</h3>
            <div className="space-y-8">
              <div className="flex items-center space-x-4" data-testid="contact-phone">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Phone className="text-blue-600 w-6 h-6" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">Telefon</div>
                  <a href="tel:+38641288455" className="text-blue-600 hover:underline font-medium">+386 41 288 455</a>
                </div>
              </div>
              <div className="flex items-center space-x-4" data-testid="contact-email">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Mail className="text-blue-600 w-6 h-6" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">E-pošta</div>
                  <a href="mailto:info@baldus.si" className="text-blue-600 hover:underline font-medium">info@baldus.si</a>
                </div>
              </div>
              <div className="flex items-center space-x-4" data-testid="contact-hours">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Clock className="text-blue-600 w-6 h-6" />
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
                />
                <FormField
                  control={form.control}
                  name="damageType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Vrsta škode</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value || ""}>
                        <FormControl>
                          <SelectTrigger data-testid="select-damageType" className="bg-white border-gray-300">
                            <SelectValue placeholder="Izberite vrsto škode" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
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
      </div>
    </section>
  );
}