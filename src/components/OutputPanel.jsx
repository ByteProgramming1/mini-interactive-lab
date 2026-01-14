import { CheckCircle, XCircle } from "lucide-react";

export const OutputPanel = ({ output, consoleLog }) => {
    const renderOutput = () => {
        switch (output?.type) {
            case 'color':
                return (
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-blue-500/20 rounded-[40px] blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div
                            className="relative w-64 h-64 rounded-[32px] shadow-2xl transition-all duration-500"
                            style={{ backgroundColor: output.value }}
                        />
                    </div>
                );

            case 'size':
                return (
                    <div className="relative group">
                        <div
                            className="bg-blue-500/10 border-2 border-blue-600 border-dashed rounded-xl flex items-center justify-center transition-all duration-500"
                            style={{ width: `${output.width}px`, height: `${output.height}px` }}
                        >
                            <div className="text-center">
                                <p className="text-blue-600 font-black text-2xl">{output.width} x {output.height}</p>
                                <p className="text-blue-600/60 text-[10px] font-bold uppercase tracking-tighter">Área de Visualización</p>
                            </div>
                        </div>
                    </div>
                );

            case 'text':
                return (
                    <div className="text-center">
                        <p className="text-blue-600 text-5xl font-bold tracking-tight">{output.value}</p>
                    </div>
                );

            case 'condition':
                return (
                    <div className="flex flex-col items-center">
                        <div className="relative w-40 h-40 mb-4">
                            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                                <circle className="text-slate-100" cx="50" cy="50" fill="transparent" r="40" stroke="currentColor" strokeWidth="10" />
                                <circle
                                    className={output.status === "Aprobado" ? "text-green-500" : "text-red-500"}
                                    cx="50" cy="50" fill="transparent" r="40" stroke="currentColor"
                                    strokeDasharray="251.2" strokeDashoffset={251.2 * (1 - output.score / 100)}
                                    strokeLinecap="round" strokeWidth="10"
                                />
                            </svg>
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <span className="text-4xl font-bold text-slate-900">{output.score}</span>
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Puntaje</span>
                            </div>
                        </div>
                        <h3 className={`text-xl font-bold ${output.status === "Aprobado" ? "text-green-600" : "text-red-600"}`}>
                            {output.status}
                        </h3>
                        <p className="text-slate-500 text-sm">Resultado de la condición</p>
                    </div>
                );

            case 'logic':
                return (
                    <div className="flex flex-col items-center gap-6">
                        <div className={`w-32 h-32 rounded-full flex items-center justify-center ${output.access ? 'bg-blue-500/10' : 'bg-red-500/10'}`}>
                            {output.access ? (
                                <CheckCircle className="text-blue-600" size={56} />
                            ) : (
                                <XCircle className="text-red-600" size={56} />
                            )}
                        </div>
                        <div className="text-center">
                            <p className="text-lg font-bold text-slate-900">
                                {output.access ? 'Acceso Concedido' : 'Acceso Denegado'}
                            </p>
                            <p className="text-sm text-slate-600 mt-1">
                                {output.access
                                    ? 'El usuario cumple con las condiciones lógicas establecidas.'
                                    : 'El usuario no cumple con los requisitos necesarios.'}
                            </p>
                        </div>
                    </div>
                );

            case 'function':
                return (
                    <div className="flex flex-col items-center gap-4">
                        <div className="p-6 rounded-lg bg-green-500/10 border border-green-500/20 flex items-start gap-4">
                            <div className="size-8 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                                <CheckCircle className="text-green-600" size={20} />
                            </div>
                            <div>
                                <p className="text-green-600 font-bold text-lg">{output.value}</p>
                                <p className="text-green-600/70 text-sm mt-1">¡Función ejecutada correctamente!</p>
                            </div>
                        </div>
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <div className="flex-1 flex flex-col h-full">
            <div className="flex-1 flex items-center justify-center p-8 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:20px_20px] bg-slate-50/30">
                {renderOutput()}
            </div>

            {/* Consola */}
            <div className="h-32 border border-slate-200 bg-slate-900 p-4 font-mono text-xs overflow-y-auto rounded-lg">
                <p className="text-slate-400 mb-1">// Salida de consola</p>
                {consoleLog && (
                    <div className="text-green-400 flex items-start gap-2">
                        <CheckCircle className="text-green-400" size={14} />
                        <pre className="whitespace-pre-wrap">{consoleLog}</pre>
                    </div>
                )}
            </div>
        </div>
    );
};