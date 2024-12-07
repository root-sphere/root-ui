import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import { typographyVariants } from '@/systems';
import { H1 } from '@/systems/typography/H1';
import { ThemeCustomization, updateTheme } from '@/utils/colors';
import * as React from 'react';
import { useForm } from 'react-hook-form';

const themePresets = {
  classic: {
    colors: {
      accent: '#0066FF',
      primary: '#0066FF',
      secondary: '#E4E4E7',
      'accent-foreground': '#FFFFFF',
      background: '#FFFFFF',
      border: '#E4E4E7',
      foreground: '#09090B',
      muted: '#F4F4F5',
      'muted-foreground': '#71717A',
      'primary-foreground': '#FFFFFF',
      'secondary-foreground': '#09090B',
    },
    typography: {
      fontSize: 16,
      lineHeight: 1.5,
    },
  },
  dark: {
    colors: {
      accent: '#27272A',
      primary: '#818CF8',
      secondary: '#A78BFA',
      'accent-foreground': '#FFFFFF',
      background: '#18181B',
      border: '#27272A',
      foreground: '#FAFAFA',
      muted: '#27272A',
      'muted-foreground': '#A1A1AA',
      'primary-foreground': '#18181B',
      'secondary-foreground': '#18181B',
    },
    typography: {
      fontSize: 16,
      lineHeight: 1.5,
    },
  },
  modern: {
    colors: {
      accent: '#27272A',
      primary: '#10B981',
      secondary: '#6366F1',
      'accent-foreground': '#FFFFFF',
      background: '#FFFFFF',
      border: '#E5E7EB',
      foreground: '#111827',
      muted: '#F9FAFB',
      'muted-foreground': '#6B7280',
      'primary-foreground': '#FFFFFF',
      'secondary-foreground': '#FFFFFF',
    },
    typography: {
      fontSize: 15,
      lineHeight: 1.6,
    },
  },
};

interface SignupFormValues {
  name: string;
  email: string;
  password: string;
  terms: boolean;
  bio: string;
  birthDate: Date | undefined;
}

export const Signup = () => {
  const [themeCustomization, setThemeCustomization] = React.useState<ThemeCustomization>(
    themePresets.classic,
  );

  React.useEffect(() => {
    updateTheme(themeCustomization);
  }, [themeCustomization]);

  const updateColor = (key: keyof ThemeCustomization['colors'], value: string) => {
    setThemeCustomization((prev) => ({
      ...prev,
      colors: { ...prev.colors, [key]: value },
    }));
  };

  const updateTypography = (key: keyof ThemeCustomization['typography'], value: number) => {
    setThemeCustomization((prev) => ({
      ...prev,
      typography: { ...prev.typography, [key]: value },
    }));
  };

  const handlePresetChange = (preset: keyof typeof themePresets) => {
    setThemeCustomization(themePresets[preset]);
  };

  const form = useForm<SignupFormValues>({
    defaultValues: {
      bio: '',
      birthDate: undefined,
      email: '',
      name: '',
      password: '',
      terms: false,
    },
  });

  const onSubmit = (data: SignupFormValues) => {
    console.log(data);
  };

  return (
    <section className="bg-muted/30">
      <div className={cn('flex flex-col gap-8')}>
        {/* Theme Panel - Left Side */}
        <div className="flex-1">
          <div className="flex h-full flex-col gap-8 rounded-xl bg-background p-8 shadow-md">
            <div className="space-y-4">
              <H1 variant="title-lg">Theme Presets</H1>
              <Select onValueChange={handlePresetChange}>
                <SelectTrigger className="w-[240px]">
                  <SelectValue placeholder="Select a theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="classic">Classic Theme</SelectItem>
                  <SelectItem value="modern">Modern Theme</SelectItem>
                  <SelectItem value="dark">Dark Theme</SelectItem>
                </SelectContent>
              </Select>
            </div>
            {/*
            <div className="grid flex-1 gap-8 lg:grid-cols-2">
              <div className="space-y-6">
                <H1 variant="title-lg">Brand Colors</H1>
                <div className="grid gap-4">
                  <div className="flex items-center gap-3">
                    <Label>
                      Primary
                      <span className="block text-xs text-muted-foreground">Main brand color</span>
                    </Label>
                    <ColorPicker
                      background={themeCustomization.colors.primary}
                      setBackground={(color) => updateColor('primary', color)}
                    />
                  </div>
                  <div className="flex items-center gap-3">
                    <Label>
                      Primary Foreground
                      <span className="block text-xs text-muted-foreground">
                        Text on primary color
                      </span>
                    </Label>
                    <ColorPicker
                      background={themeCustomization.colors['primary-foreground']}
                      setBackground={(color) => updateColor('primary-foreground', color)}
                    />
                  </div>
                  <div className="flex items-center gap-3">
                    <Label>
                      Secondary
                      <span className="block text-xs text-muted-foreground">
                        Supporting brand color
                      </span>
                    </Label>
                    <ColorPicker
                      background={themeCustomization.colors.secondary}
                      setBackground={(color) => updateColor('secondary', color)}
                    />
                  </div>
                  <div className="flex items-center gap-3">
                    <Label>
                      Secondary Foreground
                      <span className="block text-xs text-muted-foreground">
                        Text on secondary color
                      </span>
                    </Label>
                    <ColorPicker
                      background={themeCustomization.colors['secondary-foreground']}
                      setBackground={(color) => updateColor('secondary-foreground', color)}
                    />
                  </div>
                  <div className="flex items-center gap-3">
                    <Label>
                      Accent
                      <span className="block text-xs text-muted-foreground">Highlight color</span>
                    </Label>
                    <ColorPicker
                      background={themeCustomization.colors.accent}
                      setBackground={(color) => updateColor('accent', color)}
                    />
                  </div>
                  <div className="flex items-center gap-3">
                    <Label>
                      Accent Foreground
                      <span className="block text-xs text-muted-foreground">
                        Text on accent color
                      </span>
                    </Label>
                    <ColorPicker
                      background={themeCustomization.colors['accent-foreground']}
                      setBackground={(color) => updateColor('accent-foreground', color)}
                    />
                  </div>
                  <div className="flex items-center gap-3">
                    <Label>
                      Muted
                      <span className="block text-xs text-muted-foreground">
                        Subdued UI elements
                      </span>
                    </Label>
                    <ColorPicker
                      background={themeCustomization.colors.muted}
                      setBackground={(color) => updateColor('muted', color)}
                    />
                  </div>
                  <div className="flex items-center gap-3">
                    <Label>
                      Muted Foreground
                      <span className="block text-xs text-muted-foreground">
                        Subdued text & icons
                      </span>
                    </Label>
                    <ColorPicker
                      background={themeCustomization.colors['muted-foreground']}
                      setBackground={(color) => updateColor('muted-foreground', color)}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <H1 variant="title-lg">Interface Colors</H1>
                <div className="grid gap-4">
                  <div className="flex items-center gap-3">
                    <Label>
                      Background
                      <span className="block text-xs text-muted-foreground">
                        Page & component backgrounds
                      </span>
                    </Label>
                    <ColorPicker
                      background={themeCustomization.colors.background}
                      setBackground={(color) => updateColor('background', color)}
                    />
                  </div>
                  <div className="flex items-center gap-3">
                    <Label>
                      Foreground
                      <span className="block text-xs text-muted-foreground">Text & icons</span>
                    </Label>
                    <ColorPicker
                      background={themeCustomization.colors.foreground}
                      setBackground={(color) => updateColor('foreground', color)}
                    />
                  </div>
                  <div className="flex items-center gap-3">
                    <Label>
                      Border
                      <span className="block text-xs text-muted-foreground">
                        Dividers & outlines
                      </span>
                    </Label>
                    <ColorPicker
                      background={themeCustomization.colors.border}
                      setBackground={(color) => updateColor('border', color)}
                    />
                  </div>
                </div>
              </div>
            </div> */}

            <div className="space-y-6 border-t pt-6">
              <H1 variant="title-lg">Typography</H1>
              <div className="grid gap-6">
                <div className="flex items-center gap-4">
                  <Label>Font Size ({themeCustomization.typography.fontSize}px)</Label>
                  <Slider
                    className="w-[200px]"
                    value={[themeCustomization.typography.fontSize]}
                    onValueChange={(value) => updateTypography('fontSize', value[0])}
                    min={12}
                    max={24}
                    step={1}
                  />
                </div>
                <div className="flex items-center gap-4">
                  <Label>Line Height ({themeCustomization.typography.lineHeight})</Label>
                  <Slider
                    className="w-[200px]"
                    value={[themeCustomization.typography.lineHeight * 10]}
                    onValueChange={(value) => updateTypography('lineHeight', value[0] / 10)}
                    min={10}
                    max={20}
                    step={1}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Signup Form - Right Side */}
        <div className="flex-1">
          <div className="flex h-full flex-col gap-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-1 flex-col">
                <div className="flex flex-col rounded-xl bg-background p-8 shadow-md">
                  <div className="mb-8">
                    <H1 variant="title-lg">Signup</H1>
                  </div>
                  <div className="grid gap-8 md:grid-cols-2 flex-1">
                    <div className="space-y-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="Enter your email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                              <Input type="password" placeholder="Enter your password" {...field} />
                            </FormControl>
                            <FormDescription>Must be at least 8 characters.</FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="terms"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0 pt-4">
                            <FormControl>
                              <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel>Accept terms and conditions</FormLabel>
                            </div>
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="space-y-6">
                      <FormField
                        control={form.control}
                        name="bio"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Bio</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Tell us about yourself"
                                className="min-h-[120px] resize-none"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="birthDate"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel>Birth Date</FormLabel>
                            <Button
                              type="button"
                              variant="outline"
                              className={cn(
                                'w-full justify-start text-left font-normal',
                                !field.value && 'text-muted-foreground',
                              )}
                            >
                              {field.value ? field.value.toLocaleDateString() : 'Pick a date'}
                            </Button>
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              initialFocus
                              className="rounded-lg border shadow"
                            />
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  <div className="mt-8 flex justify-center gap-1.5 border-t pt-8">
                    <p
                      className={cn(
                        typographyVariants({ variant: 'body-sm' }),
                        'text-muted-foreground',
                      )}
                    >
                      Already have an account?
                    </p>
                    <a
                      href="#"
                      className={cn(
                        typographyVariants({ variant: 'body-sm' }),
                        'font-medium text-primary hover:underline',
                      )}
                    >
                      Log in
                    </a>
                  </div>

                  <Button type="submit" size="lg" className="mt-8 w-full">
                    Get Started
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>

        {/* Form Values in Accordion */}
        <div className="bg-background shadow-md rounded-md px-4">
          <Accordion type="single" collapsible className="w-full" defaultValue="form-values">
            <AccordionItem value="form-values">
              <AccordionTrigger className="text-lg font-semibold">Form Values</AccordionTrigger>
              <AccordionContent>
                <div className="rounded-lg bg-muted/30 p-4">
                  <pre className="overflow-auto text-sm">
                    {JSON.stringify(form.watch(), null, 2)}
                  </pre>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};
