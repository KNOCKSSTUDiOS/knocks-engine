import React from 'react';

const KnocksStudiosLanding = () => {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden flex flex-col items-center justify-center text-white">
      {/* Background Text */}
      <h1 className="absolute top-10 text-8xl font-black tracking-tighter opacity-20 select-none z-0">
        KNOCKSSTUDIOS
      </h1>

      {/* Mecha Placeholder (Replace with your Black/Cyan Robot Image) */}
      <div className="absolute z-10 w-full h-full flex justify-center items-end opacity-80 pointer-events-none">
        <div className="w-[600px] h-[800px] bg-gradient-to-t from-cyan-900/20 to-transparent border-x border-cyan-500/10" />
      </div>

      {/* UI Overlay: Login and Sign Up */}
      <div className="relative z-20 flex flex-col md:flex-row gap-10 p-4">
        
        {/* LOGIN BOX */}
        <div className="w-80 p-8 bg-black/80 border-t-2 border-cyan-500 backdrop-blur-xl rounded-sm shadow-[0_20px_50px_rgba(0,255,255,0.1)]">
          <h2 className="text-cyan-400 text-xl font-bold tracking-widest mb-6 uppercase italic">Unit Login</h2>
          <div className="space-y-4">
            <input type="text" placeholder="OPERATOR_ID" className="w-full bg-zinc-900 border border-zinc-700 p-3 text-sm focus:border-cyan-500 outline-none transition" />
            <input type="password" placeholder="ENCRYPTION_KEY" className="w-full bg-zinc-900 border border-zinc-700 p-3 text-sm focus:border-cyan-500 outline-none transition" />
            <button className="w-full bg-cyan-600 hover:bg-cyan-400 text-black font-black py-3 uppercase transition-all shadow-lg shadow-cyan-900/50">Authenticate</button>
          </div>
        </div>

        {/* SIGN UP BOX */}
        <div className="w-80 p-8 bg-black/80 border-t-2 border-zinc-500 backdrop-blur-xl rounded-sm shadow-xl">
          <h2 className="text-zinc-400 text-xl font-bold tracking-widest mb-6 uppercase italic">New Recruit</h2>
          <div className="space-y-4">
            <input type="email" placeholder="SECURE_EMAIL" className="w-full bg-zinc-900 border border-zinc-700 p-3 text-sm focus:border-white outline-none transition" />
            <button className="w-full border border-zinc-500 hover:bg-white hover:text-black text-white font-bold py-3 uppercase transition-all">Request Clearance</button>
          </div>
        </div>

      </div>

      {/* Footer Blueprint Text */}
      <div className="absolute bottom-6 w-full text-center tracking-[0.3em] text-[10px] uppercase text-zinc-500">
        THE DEFINITIVE BLUEPRINT FOR AN EMPIRE // VERSION 2.0.26
      </div>
    </div>
  );
};

export default KnocksStudiosLanding;
