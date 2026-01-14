import {useState} from "react";
import {LEVELS} from "./levels.js";
import {OutputPanel} from "./components/OutputPanel.jsx";
import {CodeEditor} from "./components/CodeEditor.jsx";
import {LevelCard} from "./components/LevelCard.jsx";
import {LevelSidebar} from "./components/LevelSidebar.jsx";
import { Terminal, ArrowLeft, Code as CodeIcon, Eye, Play } from "lucide-react";

export default function MiniLabPlatform() {
    const [currentView, setCurrentView] = useState('home');
    const [currentLevel, setCurrentLevel] = useState(null);
    const [code, setCode] = useState('');
    const [output, setOutput] = useState(null);
    const [consoleLog, setConsoleLog] = useState('');
    const [error, setError] = useState(null);

    const selectLevel = (levelId) => {
        const level = LEVELS[levelId];
        setCurrentLevel(level);
        setCode(level.initialCode);
        setCurrentView('level');
        setOutput(null);
        setConsoleLog('');
        setError(null);
    };

    const executeCode = () => {
        if (!currentLevel) return;

        const log = currentLevel.run(code, setOutput, setError);
        if (log) {
            setConsoleLog(log);
        }
    };

    const goHome = () => {
        setCurrentView('home');
        setCurrentLevel(null);
        setCode('');
        setOutput(null);
        setConsoleLog('');
    };

    if (currentView === 'home') {
        return (
            <div className="min-h-screen bg-slate-50 flex flex-col font-['Space_Grotesk']">
                <header className="flex items-center justify-between border-b border-slate-200 bg-white px-10 py-4 sticky top-0 z-50">
                    <div className="flex items-center gap-4 text-blue-600">
                        <div className="size-8 flex items-center justify-center bg-blue-600/10 rounded-lg">
                            <Terminal className="text-blue-600" size={20} />
                        </div>
                        <h2 className="text-slate-900 text-xl font-bold leading-tight tracking-tight">Mini Lab</h2>
                    </div>
                </header>

                <main className="flex flex-1 justify-center py-10">
                    <div className="flex flex-col max-w-[1024px] flex-1 px-4 md:px-10">
                        <div className="flex flex-col gap-2 px-4 mb-10">
                            <h1 className="text-slate-900 text-4xl font-black leading-tight tracking-tight">Explora los Niveles</h1>
                            <p className="text-slate-600 text-lg font-normal leading-normal">
                                Selecciona cualquier nivel para comenzar a aprender programación de forma interactiva.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                            {Object.values(LEVELS).map(level => (
                                <LevelCard key={level.id} level={level} onSelect={selectLevel} />
                            ))}
                        </div>
                    </div>
                </main>
            </div>
        );
    }

    return (
        <div className="h-screen flex flex-col bg-slate-50 font-['Space_Grotesk']">
            <header className="border-b border-slate-200 bg-white px-6 h-16 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-4">
                    <button
                        onClick={goHome}
                        className="bg-blue-600 p-1.5 rounded-lg text-white hover:bg-blue-700 transition-colors"
                    >
                        <ArrowLeft className="block" size={20} />
                    </button>
                    <div className="flex items-center gap-3">
                        <h1 className="text-xl font-bold tracking-tight">Mini Lab</h1>
                        <div className="h-4 w-px bg-slate-200 mx-1"></div>
                        <span className="text-slate-600 font-medium">
              Nivel {currentLevel?.id}: {currentLevel?.title}
            </span>
                    </div>
                </div>
                <button
                    onClick={executeCode}
                    className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white font-bold text-sm rounded-lg hover:bg-blue-700 transition-all shadow-sm"
                >
                    <Play className="text-lg" size={18} />
                    Ejecutar
                </button>
            </header>

            <div className="flex-1 flex overflow-hidden">
                <main className="flex-1 flex bg-slate-50 overflow-hidden">
                    {/* Barra lateral: permite cambiar de nivel sin volver a home */}
                    <LevelSidebar levels={LEVELS} currentId={currentLevel?.id} onSelect={selectLevel} />

                    {/* Contenido principal dividido en código y resultado */}
                    <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
                        <section className="flex-1 flex flex-col border-r border-slate-200">
                            <div className="h-12 flex items-center justify-between px-6 bg-white border-b border-slate-200">
                                <div className="flex items-center gap-2">
                                    <CodeIcon className="text-blue-600" size={18} />
                                    <h2 className="font-bold text-sm tracking-tight uppercase">Código</h2>
                                </div>
                            </div>
                            <div className="flex-1 flex flex-col p-6 overflow-hidden">
                                <div className="bg-slate-100 p-4 rounded-xl mb-4">
                                    <p className="text-sm text-slate-700 leading-relaxed">{currentLevel?.instruction}</p>
                                </div>
                                <CodeEditor code={code} onChange={setCode} accent={currentLevel?.color} />
                                {error && (
                                    <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                                        Error: {error}
                                    </div>
                                )}
                            </div>
                        </section>

                        <section className="flex-1 flex flex-col bg-white">
                            <div className="h-12 flex items-center px-6 border-b border-slate-200 bg-white">
                                <div className="flex items-center gap-2">
                                    <Eye className="text-emerald-500" size={18} />
                                    <h2 className="font-bold text-sm tracking-tight uppercase">Resultado</h2>
                                </div>
                            </div>
                            <OutputPanel output={output} consoleLog={consoleLog} />
                        </section>
                    </div>
                </main>
            </div>
        </div>
    );
}