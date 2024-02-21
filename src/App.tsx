import "./App.css";
import { Chatbot } from "chatbot-ze";
function App() {
  return (
    <div className="w-full max-w-[1200px] mx-auto relative h-screen  flex flex-col">
      <h1 className="mx-auto text-[24px] bg-slate-400 px-3 py-1 rounded-lg  mt-[15vh] font-bold">
        ChatBot
      </h1>
      <h3 className="mx-auto mt-5 font-semibold">Watch Down :)</h3>
      <Chatbot position="bottom-right" status="received" />
    </div>
  );
}

export default App;
