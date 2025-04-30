
import { useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Layout from '@/components/Layout';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters."
  }),
  email: z.string().email({
    message: "Please enter a valid email."
  }),
  age: z.string().refine(val => !isNaN(parseInt(val)) && parseInt(val) > 0, {
    message: "Please enter a valid age."
  }),
  school: z.string().min(2, {
    message: "Please enter your school name."
  }),
  emergency_contact: z.string().email({
    message: "Please enter a valid parent/guardian email."
  }),
  agree_terms: z.boolean().refine(val => val === true, {
    message: "You must agree to the terms and conditions."
  })
});

type FormValues = z.infer<typeof formSchema>;

const Register = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      age: "",
      school: "",
      emergency_contact: "",
      agree_terms: false
    }
  });

  const onSubmit = (data: FormValues) => {
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log(data);
      setIsSubmitting(false);
      toast({
        title: "Registration submitted!",
        description: "We'll contact you soon with next steps."
      });
      form.reset();
    }, 1500);
  };

  return <Layout>
      {/* Header Section */}
      <section className="pt-28 pb-16 bg-black relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,255,0.05)_0,rgba(0,0,0,0)_70%)]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Register for <span className="text-neon-magenta">CPIC</span>
            </h1>
            <p className="text-xl text-white/70 font-mono">
              Take the first step towards mastering competitive programming
            </p>
          </div>
        </div>
      </section>

      {/* Registration Form Section */}
      <section className="py-16 bg-[#0C0C0C]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">
                Registration Form
              </h2>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField control={form.control} name="name" render={({
                  field
                }) => <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>} />

                  <FormField control={form.control} name="email" render={({
                  field
                }) => <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="john@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>} />

                  <FormField control={form.control} name="age" render={({
                  field
                }) => <FormItem>
                        <FormLabel>Age</FormLabel>
                        <FormControl>
                          <Input type="number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>} />

                  <FormField control={form.control} name="school" render={({
                  field
                }) => <FormItem>
                        <FormLabel>School</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your school name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>} />

                  <FormField control={form.control} name="emergency_contact" render={({
                  field
                }) => <FormItem>
                        <FormLabel>Parent/Guardian Email</FormLabel>
                        <FormControl>
                          <Input placeholder="parent@example.com" {...field} />
                        </FormControl>
                        <FormDescription>
                          Emergency contact for participants under 18
                        </FormDescription>
                        <FormMessage />
                      </FormItem>} />

                  <FormField control={form.control} name="agree_terms" render={({
                  field
                }) => <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>
                            I agree to the terms and conditions
                          </FormLabel>
                          <FormDescription>
                            By submitting this form, you agree to our <a href="#" className="text-neon-cyan hover:underline">Privacy Policy</a> and <a href="#" className="text-neon-cyan hover:underline">Terms of Service</a>.
                          </FormDescription>
                        </div>
                        <FormMessage />
                      </FormItem>} />

                  <Button type="submit" className="w-full bg-neon-magenta hover:bg-neon-magenta/80 text-white font-mono" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit Registration"}
                  </Button>
                </form>
              </Form>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-6">
                Course Details
              </h2>
              
              <div className="space-y-8">
                <div className="p-6 rounded-lg neo-blur border border-white/10">
                  <h3 className="text-xl font-mono font-bold text-neon-cyan mb-4">Eligibility</h3>
                  <ul className="list-disc list-inside space-y-2 text-white/70">
                    <li>Any Secondary/JC Students in SIngapore</li>
                    <li>No Programming Knowledge Required!</li>
                    <li>Commitment to attend classes and complete assignments</li>
                    <li>Interest in algorithms and problem-solving</li>
                  </ul>
                </div>
                
                <div className="p-6 rounded-lg neo-blur border border-white/10">
                  <h3 className="text-xl font-mono font-bold text-neon-cyan mb-4">Course Structure</h3>
                  <ul className="list-disc list-inside space-y-2 text-white/70">
                    <li>1-week intensive program</li>
                    <li>Networking Events, Games and More FUN stuff!</li>
                    <li>Live Contests Everyday</li>
                    <li>Theory Lectures(Super beginner-friendly)</li>
                    <li>Lunch provided!</li>
                  </ul>
                </div>
                
                <div className="p-6 rounded-lg neo-blur border border-white/10">
                  <h3 className="text-xl font-mono font-bold text-neon-cyan mb-4">Topics Covered</h3>
                  <ul className="list-disc list-inside space-y-2 text-white/70">
                    <li>Time & Space Complexity Analysis</li>
                    <li>Arrays, Strings, and Sorting Algorithms</li>
                    <li>Searching Techniques & Binary Search</li>
                    <li>Data Structures (Stacks, Queues, Heaps, Trees)</li>
                    <li>Graph Algorithms (DFS, BFS, Shortest Paths)</li>
                    <li>Dynamic Programming & Greedy Algorithms</li>
                    <li>Math Concepts for Competitive Programming</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>;
};
export default Register;
