"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  Users,
  ShoppingBag,
  TrendingUp,
  Package,
  Settings,
  BarChart3,
  UserCheck,
  Mail,
  AlertCircle,
  CheckCircle,
  Clock,
} from "lucide-react"

export default function AdminDashboard() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const userData = localStorage.getItem("user")
    if (!userData) {
      router.push("/login")
      return
    }

    const parsedUser = JSON.parse(userData)
    if (parsedUser.role !== "admin") {
      router.push("/")
      return
    }

    setUser(parsedUser)
    setLoading(false)
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("user")
    router.push("/")
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p>Loading dashboard...</p>
        </div>
      </div>
    )
  }

  const stats = [
    {
      title: "Total Orders",
      value: "1,234",
      change: "+12%",
      icon: ShoppingBag,
      color: "text-blue-600",
    },
    {
      title: "Active Customers",
      value: "856",
      change: "+8%",
      icon: Users,
      color: "text-green-600",
    },
    {
      title: "Revenue",
      value: "$45,678",
      change: "+15%",
      icon: TrendingUp,
      color: "text-purple-600",
    },
    {
      title: "Products",
      value: "342",
      change: "+5%",
      icon: Package,
      color: "text-orange-600",
    },
  ]

  const recentOrders = [
    { id: "ORD-001", customer: "Alice Uwimana", amount: "$125", status: "completed", date: "2024-01-15" },
    { id: "ORD-002", customer: "Jean Baptiste", amount: "$89", status: "processing", date: "2024-01-15" },
    { id: "ORD-003", customer: "Grace Mukamana", amount: "$234", status: "pending", date: "2024-01-14" },
    { id: "ORD-004", customer: "Samuel Habimana", amount: "$156", status: "completed", date: "2024-01-14" },
    { id: "ORD-005", customer: "Marie Uwimana", amount: "$78", status: "processing", date: "2024-01-13" },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-4 w-4 text-green-600" />
      case "processing":
        return <Clock className="h-4 w-4 text-yellow-600" />
      case "pending":
        return <AlertCircle className="h-4 w-4 text-red-600" />
      default:
        return <Clock className="h-4 w-4 text-gray-600" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800"
      case "processing":
        return "bg-yellow-100 text-yellow-800"
      case "pending":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-serif text-3xl font-bold text-foreground">Admin Dashboard</h1>
              <p className="text-muted-foreground mt-1">Welcome back, {user?.name}</p>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant="secondary" className="px-3 py-1">
                Administrator
              </Badge>
              <Button variant="outline" onClick={handleLogout}>
                Logout
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Alert */}
        <Alert className="mb-8 border-blue-200 bg-blue-50">
          <UserCheck className="h-4 w-4 text-blue-600" />
          <AlertDescription className="text-blue-800">
            You have full administrative access to manage all aspects of New Kigali Designers operations.
          </AlertDescription>
        </Alert>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-600">{stat.change}</span> from last month
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="customers">Customers</TabsTrigger>
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Recent Orders */}
              <Card>
                <CardHeader>
                  <CardTitle className="font-serif">Recent Orders</CardTitle>
                  <CardDescription>Latest customer orders and their status</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentOrders.map((order) => (
                      <div key={order.id} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center gap-3">
                          {getStatusIcon(order.status)}
                          <div>
                            <p className="font-medium">{order.id}</p>
                            <p className="text-sm text-muted-foreground">{order.customer}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">{order.amount}</p>
                          <Badge variant="secondary" className={`text-xs ${getStatusColor(order.status)}`}>
                            {order.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle className="font-serif">Quick Actions</CardTitle>
                  <CardDescription>Common administrative tasks</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full justify-start bg-transparent" variant="outline">
                    <Package className="h-4 w-4 mr-2" />
                    Add New Product
                  </Button>
                  <Button className="w-full justify-start bg-transparent" variant="outline">
                    <Users className="h-4 w-4 mr-2" />
                    Manage Customers
                  </Button>
                  <Button className="w-full justify-start bg-transparent" variant="outline">
                    <BarChart3 className="h-4 w-4 mr-2" />
                    View Analytics
                  </Button>
                  <Button className="w-full justify-start bg-transparent" variant="outline">
                    <Mail className="h-4 w-4 mr-2" />
                    Send Newsletter
                  </Button>
                  <Button className="w-full justify-start bg-transparent" variant="outline">
                    <Settings className="h-4 w-4 mr-2" />
                    System Settings
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="orders">
            <Card>
              <CardHeader>
                <CardTitle className="font-serif">Order Management</CardTitle>
                <CardDescription>View and manage all customer orders</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <ShoppingBag className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Order Management System</h3>
                  <p className="text-muted-foreground mb-4">
                    This section would contain detailed order management functionality including order tracking, status
                    updates, and customer communication tools.
                  </p>
                  <Button>View All Orders</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="customers">
            <Card>
              <CardHeader>
                <CardTitle className="font-serif">Customer Management</CardTitle>
                <CardDescription>Manage customer accounts and relationships</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Customer Database</h3>
                  <p className="text-muted-foreground mb-4">
                    Access customer profiles, order history, preferences, and communication logs. Manage customer
                    support tickets and loyalty programs.
                  </p>
                  <Button>Manage Customers</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="products">
            <Card>
              <CardHeader>
                <CardTitle className="font-serif">Product Management</CardTitle>
                <CardDescription>Add, edit, and manage your product catalog</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <Package className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Product Catalog</h3>
                  <p className="text-muted-foreground mb-4">
                    Manage your entire product inventory, update prices, add new collections, and control product
                    visibility on the website.
                  </p>
                  <Button>Manage Products</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle className="font-serif">System Settings</CardTitle>
                <CardDescription>Configure system-wide settings and preferences</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <Settings className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Administrative Settings</h3>
                  <p className="text-muted-foreground mb-4">
                    Configure website settings, payment methods, shipping options, user permissions, and system
                    integrations.
                  </p>
                  <Button>Access Settings</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="font-serif text-2xl font-bold mb-4">New Kigali Designers</h3>
            <p className="text-background/80">Administrative Dashboard - Manage your fashion business with ease</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
