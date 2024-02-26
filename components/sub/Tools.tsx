function Tools({ tools }: { tools: string[] }) {
   return (
      <>
         {tools.map((tool) => (
            <div key={tool} className="py-1 px-4 text-white text-sm bg-slate-800 rounded-full">{tool}</div>
         ))}
      </>
   );
}

export default Tools;
