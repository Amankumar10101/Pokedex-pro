import { DashboardProvider } from "@/context/DashboardContext";
import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <DashboardProvider>
      <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
        
        {/* Top bar */}
        <Navbar />

        {/* Content area BELOW navbar */}
        <div style={{ display: "flex", flex: 1 }}>
          <Sidebar />
          <main style={{ flex: 1, overflowY: "auto", background: "#f6f7fb" }}>
            {children}
          </main>
        </div>

      </div>
    </DashboardProvider>
  );
}
