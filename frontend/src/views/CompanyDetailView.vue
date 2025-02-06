<script setup lang=ts>
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar'
import { type Payment } from '@/components/payments/column'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Separator } from '@/components/ui/separator'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from '@/components/ui/sidebar'
import {
  BadgeCheck,
  BookOpen,
  BookUser,
  Bot,
  ChevronRight,
  ChevronsUpDown,
  CreditCard,
  LogOut,
  Sparkles,
} from 'lucide-vue-next'
import { ref, onMounted } from 'vue'
import Card from '@/components/ui/card/Card.vue'
import CardHeader from '@/components/ui/card/CardHeader.vue'
import { CardContent, CardDescription, CardFooter, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu'

// This is sample data.
const data = {
  user: {
    name: 'shadcn',
    email: 'm@example.com',
    avatar: '/avatars/shadcn.jpg',
  },
  navMain: [
    {
      title: 'The Datagrid',
      url: '#',
      icon: BookUser,
    },
    {
      title: 'Meine Listen',
      url: '#',
      icon: Bot,
    },
    {
      title: 'Gespeicherte Suchen',
      url: '#',
      icon: BookOpen,
    }
  ],
}

const griddata = ref<Payment[]>([])

async function getData(): Promise<Payment[]> {
  return [
    {
      id: 'm5gr84i9',
      amount: 316,
      status: 'success',
      email: 'ken99@yahoo.com',
    },
    {
      id: '3u1reuv4',
      amount: 242,
      status: 'success',
      email: 'Abe45@gmail.com',
    },
    {
      id: 'derv1ws0',
      amount: 837,
      status: 'processing',
      email: 'Monserrat44@gmail.com',
    },
    {
      id: '5kma53ae',
      amount: 874,
      status: 'success',
      email: 'Silas22@gmail.com',
    },
    {
      id: 'bhqecj4p',
      amount: 721,
      status: 'failed',
      email: 'carmella@hotmail.com',
    },
  ]
}

onMounted(async () => {
  griddata.value = await getData()
})

</script>

<template>
  <SidebarProvider>
    <Sidebar collapsible="icon">
      <SidebarHeader>
        COHAGA LOGO UND SO
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Plattform</SidebarGroupLabel>
          <SidebarMenu>
            <Collapsible v-for="item in data.navMain" :key="item.title" as-child :default-open="item.isActive"
              class="group/collapsible">
              <SidebarMenuItem>
                <CollapsibleTrigger as-child>
                  <SidebarMenuButton :tooltip="item.title">
                    <component :is="item.icon" />
                    <span>{{ item.title }}</span>
                    <ChevronRight
                      class="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    <SidebarMenuSubItem v-for="subItem in item" :key="subItem.title">
                      <SidebarMenuSubButton as-child>
                        <a :href="subItem.url">
                          <span>{{ subItem.title }}</span>
                        </a>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger as-child>
                <SidebarMenuButton size="lg"
                  class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
                  <Avatar class="h-8 w-8 rounded-lg">
                    <AvatarImage :src="data.user.avatar" :alt="data.user.name" />
                    <AvatarFallback class="rounded-lg">
                      CN
                    </AvatarFallback>
                  </Avatar>
                  <div class="grid flex-1 text-left text-sm leading-tight">
                    <span class="truncate font-semibold">{{ data.user.name }}</span>
                    <span class="truncate text-xs">{{ data.user.email }}</span>
                  </div>
                  <ChevronsUpDown class="ml-auto size-4" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent class="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg" side="bottom"
                align="end" :side-offset="4">
                <DropdownMenuLabel class="p-0 font-normal">
                  <div class="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                    <Avatar class="h-8 w-8 rounded-lg">
                      <AvatarImage :src="data.user.avatar" :alt="data.user.name" />
                      <AvatarFallback class="rounded-lg">
                        CN
                      </AvatarFallback>
                    </Avatar>
                    <div class="grid flex-1 text-left text-sm leading-tight">
                      <span class="truncate font-semibold">{{ data.user.name }}</span>
                      <span class="truncate text-xs">{{ data.user.email }}</span>
                    </div>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem class="bg-blue-200">
                    <Sparkles color="orange" />
                    Upgrade
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <BadgeCheck />
                    Account
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <CreditCard />
                    Billing
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
    <SidebarInset>
      <header
        class="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
        <div class="flex items-center gap-2 px-4">
          <SidebarTrigger class="-ml-1" />
          <Separator orientation="vertical" class="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem class="hidden md:block">
                <BreadcrumbLink href="#">
                  Cohaga
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator class="hidden md:block" />
              <BreadcrumbItem class="hidden md:block">
                <BreadcrumbLink href="#">
                  Company
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator class="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Detail</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>
      <div class="flex flex-col flex-1 gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
        <div class="flex flex-col gap-4 md:gap-8">
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Company XY</CardTitle>
              </CardHeader>
              <CardContent>
                <div class="text-balance leading-relaxed">
                  Linkedin | www.google.com | Baubranche | 10-25 Mitarbeiter
                </div>
                <div class="text-balance leading-relaxed flex flex-col mt-4 text-muted-foreground">
                  <span>
                    Fürstenlandstrasse 41
                  </span>
                  <span>
                    9000 St. Gallen
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink href="#end" :class="navigationMenuTriggerStyle()">
                  Basisdaten
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#end" :class="navigationMenuTriggerStyle()">
                  Kontakte
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#end" :class="navigationMenuTriggerStyle()">
                  Trigger-Events
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div class="grid gap-4 grid-cols-2">
            <Card>
              <CardHeader class="pb-2">
                <CardTitle class="text-4xl">
                  Kontaktdaten
                </CardTitle>
              </CardHeader>
              <CardContent class="flex flex-row gap-4 justify-between p-6 text-sm">
                <ul class="w-full flex flex-col gap-2">
                  <li class="grid grid-cols-2">
                    <span class="text-muted-foreground">
                      Telefon
                    </span>
                    <span>+41 77 004 42 34</span>
                  </li>
                  <li class="grid grid-cols-2">
                    <span class="text-muted-foreground">
                      E-Mail
                    </span>
                    <span>xy@company.ch</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader class="pb-2">
                <CardTitle class="text-4xl">
                  Basisdaten
                </CardTitle>
              </CardHeader>
              <CardContent class="flex flex-row gap-4 justify-between p-6 text-sm">
                <ul class="w-full flex flex-col gap-2">
                  <li class="grid grid-cols-2">
                    <span class="text-muted-foreground">
                      UID
                    </span>
                    <span>CHE-123.123.123</span>
                  </li>
                  <li class="grid grid-cols-2">
                    <span class="text-muted-foreground">
                      Gründungsjahr
                    </span>
                    <span>01.01.1970</span>
                  </li>
                  <li class="grid grid-cols-2">
                    <span class="text-muted-foreground">
                      Noga-Code
                    </span>
                    <span>726020</span>
                  </li>
                  <li class="grid grid-cols-2">
                    <span class="text-muted-foreground">
                      Cohaga ID
                    </span>
                    <span>00023403249</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <div class="grid gap-4 grid-cols-2">
            <Card>
              <CardHeader class="pb-2">
                <CardDescription>This Week</CardDescription>
                <CardTitle class="text-4xl">
                  $1329
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div class="text-xs text-muted-foreground">
                  +25% from last week
                </div>
              </CardContent>
              <CardFooter>
                <Progress :model-value="25" aria-label="25% increase" />
              </CardFooter>
            </Card>
            <Card>
              <CardHeader class="pb-2">
                <CardDescription>This Month</CardDescription>
                <CardTitle class="text-3xl">
                  $5,329
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div class="text-xs text-muted-foreground">
                  +10% from last month
                </div>
              </CardContent>
              <CardFooter>
                <Progress :model-value="12" aria-label="12% increase" />
              </CardFooter>
            </Card>
          </div>
          <div>
            <Card>
              <CardHeader class="px-7">
                <CardTitle>Kontakte</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Customer</TableHead>
                      <TableHead class="hidden sm:table-cell">
                        Type
                      </TableHead>
                      <TableHead class="hidden sm:table-cell">
                        Status
                      </TableHead>
                      <TableHead class="hidden md:table-cell">
                        Date
                      </TableHead>
                      <TableHead class="text-right">
                        Amount
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow class="bg-accent">
                      <TableCell>
                        <div class="font-medium">
                          Liam Johnson
                        </div>
                        <div class="hidden text-sm text-muted-foreground md:inline">
                          liam@example.com
                        </div>
                      </TableCell>
                      <TableCell class="hidden sm:table-cell">
                        Sale
                      </TableCell>
                      <TableCell class="hidden sm:table-cell">
                        <Badge class="text-xs" variant="secondary">
                          Fulfilled
                        </Badge>
                      </TableCell>
                      <TableCell class="hidden md:table-cell">
                        2023-06-23
                      </TableCell>
                      <TableCell class="text-right">
                        $250.00
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div class="font-medium">
                          Olivia Smith
                        </div>
                        <div class="hidden text-sm text-muted-foreground md:inline">
                          olivia@example.com
                        </div>
                      </TableCell>
                      <TableCell class="hidden sm:table-cell">
                        Refund
                      </TableCell>
                      <TableCell class="hidden sm:table-cell">
                        <Badge class="text-xs" variant="outline">
                          Declined
                        </Badge>
                      </TableCell>
                      <TableCell class="hidden md:table-cell">
                        2023-06-24
                      </TableCell>
                      <TableCell class="text-right">
                        $150.00
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div class="font-medium">
                          Noah Williams
                        </div>
                        <div class="hidden text-sm text-muted-foreground md:inline">
                          noah@example.com
                        </div>
                      </TableCell>
                      <TableCell class="hidden sm:table-cell">
                        Subscription
                      </TableCell>
                      <TableCell class="hidden sm:table-cell">
                        <Badge class="text-xs" variant="secondary">
                          Fulfilled
                        </Badge>
                      </TableCell>
                      <TableCell class="hidden md:table-cell">
                        2023-06-25
                      </TableCell>
                      <TableCell class="text-right">
                        $350.00
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div class="font-medium">
                          Emma Brown
                        </div>
                        <div class="hidden text-sm text-muted-foreground md:inline">
                          emma@example.com
                        </div>
                      </TableCell>
                      <TableCell class="hidden sm:table-cell">
                        Sale
                      </TableCell>
                      <TableCell class="hidden sm:table-cell">
                        <Badge class="text-xs" variant="secondary">
                          Fulfilled
                        </Badge>
                      </TableCell>
                      <TableCell class="hidden md:table-cell">
                        2023-06-26
                      </TableCell>
                      <TableCell class="text-right">
                        $450.00
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div class="font-medium">
                          Liam Johnson
                        </div>
                        <div class="hidden text-sm text-muted-foreground md:inline">
                          liam@example.com
                        </div>
                      </TableCell>
                      <TableCell class="hidden sm:table-cell">
                        Sale
                      </TableCell>
                      <TableCell class="hidden sm:table-cell">
                        <Badge class="text-xs" variant="secondary">
                          Fulfilled
                        </Badge>
                      </TableCell>
                      <TableCell class="hidden md:table-cell">
                        2023-06-23
                      </TableCell>
                      <TableCell class="text-right">
                        $250.00
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div class="font-medium">
                          Liam Johnson
                        </div>
                        <div class="hidden text-sm text-muted-foreground md:inline">
                          liam@example.com
                        </div>
                      </TableCell>
                      <TableCell class="hidden sm:table-cell">
                        Sale
                      </TableCell>
                      <TableCell class="hidden sm:table-cell">
                        <Badge class="text-xs" variant="secondary">
                          Fulfilled
                        </Badge>
                      </TableCell>
                      <TableCell class="hidden md:table-cell">
                        2023-06-23
                      </TableCell>
                      <TableCell class="text-right">
                        $250.00
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div class="font-medium">
                          Olivia Smith
                        </div>
                        <div class="hidden text-sm text-muted-foreground md:inline">
                          olivia@example.com
                        </div>
                      </TableCell>
                      <TableCell class="hidden sm:table-cell">
                        Refund
                      </TableCell>
                      <TableCell class="hidden sm:table-cell">
                        <Badge class="text-xs" variant="outline">
                          Declined
                        </Badge>
                      </TableCell>
                      <TableCell class="hidden md:table-cell">
                        2023-06-24
                      </TableCell>
                      <TableCell class="text-right">
                        $150.00
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div class="font-medium">
                          Emma Brown
                        </div>
                        <div class="hidden text-sm text-muted-foreground md:inline">
                          emma@example.com
                        </div>
                      </TableCell>
                      <TableCell class="hidden sm:table-cell">
                        Sale
                      </TableCell>
                      <TableCell class="hidden sm:table-cell">
                        <Badge class="text-xs" variant="secondary">
                          Fulfilled
                        </Badge>
                      </TableCell>
                      <TableCell class="hidden md:table-cell">
                        2023-06-26
                      </TableCell>
                      <TableCell class="text-right">
                        $450.00
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
          <section id="end">
            <Card>
              <CardHeader class="px-7">
                <CardTitle>Trigger-Events</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Customer</TableHead>
                      <TableHead class="hidden sm:table-cell">
                        Type
                      </TableHead>
                      <TableHead class="hidden sm:table-cell">
                        Status
                      </TableHead>
                      <TableHead class="hidden md:table-cell">
                        Date
                      </TableHead>
                      <TableHead class="text-right">
                        Amount
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow class="bg-accent">
                      <TableCell>
                        <div class="font-medium">
                          Liam Johnson
                        </div>
                        <div class="hidden text-sm text-muted-foreground md:inline">
                          liam@example.com
                        </div>
                      </TableCell>
                      <TableCell class="hidden sm:table-cell">
                        Sale
                      </TableCell>
                      <TableCell class="hidden sm:table-cell">
                        <Badge class="text-xs" variant="secondary">
                          Fulfilled
                        </Badge>
                      </TableCell>
                      <TableCell class="hidden md:table-cell">
                        2023-06-23
                      </TableCell>
                      <TableCell class="text-right">
                        $250.00
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div class="font-medium">
                          Olivia Smith
                        </div>
                        <div class="hidden text-sm text-muted-foreground md:inline">
                          olivia@example.com
                        </div>
                      </TableCell>
                      <TableCell class="hidden sm:table-cell">
                        Refund
                      </TableCell>
                      <TableCell class="hidden sm:table-cell">
                        <Badge class="text-xs" variant="outline">
                          Declined
                        </Badge>
                      </TableCell>
                      <TableCell class="hidden md:table-cell">
                        2023-06-24
                      </TableCell>
                      <TableCell class="text-right">
                        $150.00
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div class="font-medium">
                          Noah Williams
                        </div>
                        <div class="hidden text-sm text-muted-foreground md:inline">
                          noah@example.com
                        </div>
                      </TableCell>
                      <TableCell class="hidden sm:table-cell">
                        Subscription
                      </TableCell>
                      <TableCell class="hidden sm:table-cell">
                        <Badge class="text-xs" variant="secondary">
                          Fulfilled
                        </Badge>
                      </TableCell>
                      <TableCell class="hidden md:table-cell">
                        2023-06-25
                      </TableCell>
                      <TableCell class="text-right">
                        $350.00
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div class="font-medium">
                          Emma Brown
                        </div>
                        <div class="hidden text-sm text-muted-foreground md:inline">
                          emma@example.com
                        </div>
                      </TableCell>
                      <TableCell class="hidden sm:table-cell">
                        Sale
                      </TableCell>
                      <TableCell class="hidden sm:table-cell">
                        <Badge class="text-xs" variant="secondary">
                          Fulfilled
                        </Badge>
                      </TableCell>
                      <TableCell class="hidden md:table-cell">
                        2023-06-26
                      </TableCell>
                      <TableCell class="text-right">
                        $450.00
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div class="font-medium">
                          Liam Johnson
                        </div>
                        <div class="hidden text-sm text-muted-foreground md:inline">
                          liam@example.com
                        </div>
                      </TableCell>
                      <TableCell class="hidden sm:table-cell">
                        Sale
                      </TableCell>
                      <TableCell class="hidden sm:table-cell">
                        <Badge class="text-xs" variant="secondary">
                          Fulfilled
                        </Badge>
                      </TableCell>
                      <TableCell class="hidden md:table-cell">
                        2023-06-23
                      </TableCell>
                      <TableCell class="text-right">
                        $250.00
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div class="font-medium">
                          Liam Johnson
                        </div>
                        <div class="hidden text-sm text-muted-foreground md:inline">
                          liam@example.com
                        </div>
                      </TableCell>
                      <TableCell class="hidden sm:table-cell">
                        Sale
                      </TableCell>
                      <TableCell class="hidden sm:table-cell">
                        <Badge class="text-xs" variant="secondary">
                          Fulfilled
                        </Badge>
                      </TableCell>
                      <TableCell class="hidden md:table-cell">
                        2023-06-23
                      </TableCell>
                      <TableCell class="text-right">
                        $250.00
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </SidebarInset>
  </SidebarProvider>
</template>