import { Nav, NavLink } from "@/components/Nav"

// okay for admin page not to cache since you want always most up to date info
export const dynamic = "force-dynamic"


export default function AdminLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return <>
        <Nav>
            <NavLink href="/">Home</NavLink>
            <NavLink href="/products">Products</NavLink>
            <NavLink href="/orders">My Orders</NavLink>
        </Nav>
        <div className="container my-6">{children}</div>
    </>
}