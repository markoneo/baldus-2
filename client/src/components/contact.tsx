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
import { Phone, Mail, Clock, Send } from "lucide-react";
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
    <section id="kontakt" className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-modern">
        <div className="text-center mb-12">
          <h2 className="text-section-title text-navy mb-6">Kontakt</h2>
          <p className="text-slate text-xl max-w-2xl mx-auto">Želite nasvet ali želite oddati svoj primer?</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Contact Information */}
          <div>
            <h3 className="text-subsection text-navy mb-8">Stopite v stik z nami</h3>
            <div className="space-y-8">
              <div className="flex items-center space-x-4" data-testid="contact-phone">
                <div className="w-16 h-16 bg-gold rounded-2xl flex items-center justify-center">
                  <Phone className="text-white w-8 h-8" />
                </div>
                <div>
                  <div className="font-semibold text-navy text-lg">Telefon</div>
                  <a href="tel:+38641288455" className="text-gold hover:underline text-xl font-medium">+386 41 288 455</a>
                </div>
              </div>
              <div className="flex items-center space-x-4" data-testid="contact-email">
                <div className="w-16 h-16 bg-gold rounded-2xl flex items-center justify-center">
                  <Mail className="text-white w-8 h-8" />
                </div>
                <div>
                  <div className="font-semibold text-navy text-lg">E-pošta</div>
                  <a href="mailto:info@baldus.si" className="text-gold hover:underline text-xl font-medium">info@baldus.si</a>
                </div>
              </div>
              <div className="flex items-center space-x-4" data-testid="contact-hours">
                <div className="w-16 h-16 bg-gold rounded-2xl flex items-center justify-center">
                  <Clock className="text-white w-8 h-8" />
                </div>
                <div>
                  <div className="font-semibold text-navy text-lg">Delovni čas</div>
                  <div className="text-slate text-xl">pon–pet: 8.00–17.00</div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 p-8 bg-gradient-to-br from-gold-light to-gold/10 rounded-3xl border border-gold/20">
              <h4 className="font-semibold text-navy mb-4 text-xl">Z veseljem pomagamo tudi vam</h4>
              <p className="text-slate text-lg leading-relaxed">Stopite v stik z nami – pomagali smo že številnim strankam do pravične odškodnine.</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card-modern p-10">
            <h3 className="text-subsection text-navy mb-8">Pošljite nam sporočilo</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8" data-testid="contact-form">
                <div className="grid md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Ime *</FormLabel>
                        <FormControl>
                          <Input placeholder="Vaše ime" {...field} data-testid="input-firstName" />
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
                          <Input placeholder="Vaš priimek" {...field} data-testid="input-lastName" />
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
                        <Input type="email" placeholder="vasa.eposta@example.com" {...field} data-testid="input-email" />
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
                        <Input type="tel" placeholder="+386 XX XXX XXX" {...field} value={field.value || ""} data-testid="input-phone" />
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
                          <SelectTrigger data-testid="select-damageType">
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
                  className="w-full btn-primary py-4"
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
