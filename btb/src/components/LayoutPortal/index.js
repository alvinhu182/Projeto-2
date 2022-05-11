import { useState } from "react";
import { Container } from "react-bootstrap";
import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";

export function LayoutPortal ({children}) {
    const [isSidebarOpen, SetIsSidebarOpen] = useState(false)
    return (
        <div className="d-flex flex-grow-1">
            <Sidebar isOpen={isSidebarOpen} onClose= {() => SetIsSidebarOpen(true)}/>
            <main className="flex-grow-1">
            <Topbar onOpen ={ ()=> SetIsSidebarOpen(true)}/>
            <Container fluid>
              {children}
            </Container>
            </main>
        </div>
        
        
    )
}