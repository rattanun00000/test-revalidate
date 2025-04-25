interface user {
  id: string
  name: string
  email: string
}

export default async function Home() {
  const data = await fetch('https://test-next-revalidatetag.vercel.app/users', {
    cache: 'force-cache', next: { tags: ['data-tag'] }, // กำหนด tag ชื่อ 'data-tag'
  })
  const users = await data.json()
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <ul>
          {users.map((user: user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </main>
    </div>
  );
}
