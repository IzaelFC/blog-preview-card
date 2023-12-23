import illustration from './assets/images/illustration-article.svg'
import avatar from './assets/images/image-avatar.webp'

export default function App() {
  return (
    <main className="w-screen h-screen flex items-center justify-center bg-[--yellow]">
      <section className="w-[50vh] flex flex-col font- gap-3 bg-white p-5 border border-black rounded-2xl shadow-[6px_6px_0px_2px] shadow-black">
        <img className="rounded-xl" src={ illustration } alt="" />
        
        <span className="max-w-fit bg-[--yellow] text-sm font-sans font-bold p-2 rounded">Learning</span>
        <p>Published 21 Dec 2023</p>
        <h1 className="sm:text-xl text-base font-sans font-extrabold hover:text-[--yellow] cursor-pointer">HTML & CSS foundations</h1>
        <p className="text-[--grey]">These languages are the backbone of every website, defining structure, content, and presentation.</p>
        
        <div className="flex gap-1">
          <img className="w-7 h-7 rounded-full" src={ avatar } alt="" />
          <h2 className="my-auto text-sm font-sans font-extrabold">Greg Hooper</h2>
        </div>
      </section>
    </main>
  )
}