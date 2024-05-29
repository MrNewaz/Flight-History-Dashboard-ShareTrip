

export default function Home() {
  return (
    <main className="w-full flex-1 max-w-[1160px] mx-auto p-4">
      <div className="flex flex-row h-full gap-4">
        <HistorySidebar />

        <RightSection />
      </div>
    </main>
  )
}
