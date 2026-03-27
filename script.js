import React from 'react';

const AuthOverlay = () => {
  return (
    <div className="flex gap-8 justify-center items-center h-screen bg-transparent font-sans">
      {/* Login Window */}
      <div className="bg-black/60 border border-cyan-500/50 p-8 rounded-lg backdrop-blur-md w-80 shadow-[0_0_20px_rgba(6,182,212,0.3)]">
        <h2 className="text-cyan-400 text-2xl font-bold mb-6 tracking-widest uppercase">Log In</h2>
        <input className="w-full mb-4 p-2 bg-black/40 border-b border-cyan-500/50 text-white focus:outline-none focus:border-cyan-400" placeholder="IDENTIFIER" />
        <input className="w-full mb-6 p-2 bg-black/40 border-b border-cyan-500/50 text-white focus:outline-none focus:border-cyan-400" type="password" placeholder="ACCESS CODE" />
        <button className="w-full py-2 bg-cyan-600 hover:bg-cyan-400 text-black font-bold transition-all duration-300 uppercase tracking-tighter">Initialize Session</button>
      </div>

      {/* Sign Up Window */}
      <div className="bg-black/60 border border-cyan-500/50 p-8 rounded-lg backdrop-blur-md w-80 shadow-[0_0_20px_rgba(6,182,212,0.3)]">
        <h2 className="text-cyan-400 text-2xl font-bold mb-6 tracking-widest uppercase">Join Corps</h2>
        <input className="w-full mb-4 p-2 bg-black/40 border-b border-cyan-500/50 text-white focus:outline-none" placeholder="FULL NAME" />
        <input className="w-full mb-4 p-2 bg-black/40 border-b border-cyan-500/50 text-white focus:outline-none" placeholder="SECURE EMAIL" />
        <button className="w-full py-2 border border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-black font-bold transition-all duration-300 uppercase">Request Access</button>
      </div>
    </div>
  );
};

export default AuthOverlay;
