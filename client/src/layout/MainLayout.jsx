export default function MainLayout({ header, children }) {
    return (
        <div className="min-h-screen bg-black text-white">
        {header}

            <main className="p-6">
                {children}
            </main>
        </div>
    )
}